import re
import random
import sys
from typing import List, Tuple

def parse_questions(tex_content: str) -> List[Tuple[str, str]]:
    """
    Parses the LaTeX content and extracts question-solution pairs.

    Returns:
        A list of tuples where each tuple contains (question, solution).
    """
    lines = tex_content.splitlines()
    pairs = []
    question = None
    solution = None
    in_question = False
    in_solution = False
    question_lines = []
    solution_lines = []

    for line_num, line in enumerate(lines, 1):
        stripped = line.strip()

        # Detect the start of a question
        if stripped.startswith('\\question'):
            if in_question:
                print(f"Warning: Found a new \\question at line {line_num} before closing the previous one.")
            if in_solution:
                print(f"Warning: Found a new \\question at line {line_num} while still inside a solution block.")
                in_solution = False  # Reset the solution state

            in_question = True
            question_content = stripped[len('\\question'):].strip()
            question_lines = [question_content] if question_content else []
            # Reset solution lines for the new question
            solution_lines = []
            continue

        # Detect the start of a solution
        if stripped.startswith('\\begin{solution}'):
            if not in_question:
                print(f"Warning: Found a \\begin{{solution}} at line {line_num} without an active question.")
            in_solution = True
            # Handle optional arguments like [1in]
            match = re.match(r'\\begin\{solution\}(?:\[[^\]]*\])?', stripped)
            if match:
                after_begin = stripped[match.end():].strip()
                if after_begin:
                    solution_lines = [after_begin]
                else:
                    solution_lines = []
            else:
                solution_lines = []
            continue

        # Detect the end of a solution
        if stripped.startswith('\\end{solution}'):
            if not in_solution:
                print(f"Warning: Found a \\end{{solution}} at line {line_num} without a corresponding \\begin{{solution}}.")
            in_solution = False
            # Pair the current question with its solution
            if question_lines is not None and solution_lines is not None:
                question_text = ' '.join(question_lines).strip()
                solution_text = ' '.join(solution_lines).strip()
                if question_text and solution_text:
                    pairs.append((question_text, solution_text))
                else:
                    print(f"Warning: Incomplete pair at lines around {line_num}.")
            # Reset question and solution lines
            question_lines = []
            solution_lines = []
            in_question = False
            continue

        # Accumulate question lines
        if in_question and not in_solution:
            question_lines.append(stripped)
            continue

        # Accumulate solution lines
        if in_solution:
            solution_lines.append(stripped)
            continue

    # Handle any unclosed question-solution pairs at the end of the file
    if in_question or in_solution:
        print("Warning: The .tex file ended while still inside a question or solution block.")
        if question_lines and solution_lines:
            question_text = ' '.join(question_lines).strip()
            solution_text = ' '.join(solution_lines).strip()
            pairs.append((question_text, solution_text))

    return pairs

def select_random_questions(pairs: List[Tuple[str, str]], N: int) -> List[Tuple[str, str]]:
    """
    Selects N random question-solution pairs from the list.

    Args:
        pairs: List of (question, solution) tuples.
        N: Number of pairs to select.

    Returns:
        A list of N randomly selected (question, solution) tuples.
    """
    total = len(pairs)
    if total == 0:
        print("Error: No question-solution pairs available to select.")
        sys.exit(1)
    if N > total:
        print(f"Warning: Requested number of questions ({N}) exceeds the available number ({total}). Selecting all available questions.")
        return pairs
    return random.sample(pairs, N)

def generate_new_tex(preamble: str, selected_pairs: List[Tuple[str, str]]) -> str:
    """
    Generates the new LaTeX content with the selected questions and solutions.

    Args:
        preamble: The LaTeX preamble as a string.
        selected_pairs: List of (question, solution) tuples.

    Returns:
        The complete LaTeX document as a string.
    """
    document = preamble.strip() + "\n\n\\begin{document}\n\t\\begin{questions}\n"
    
    for idx, (question, solution) in enumerate(selected_pairs, 1):
        document += f"\t\t\\question {question}\n"
        # Preserve the optional argument [1in] if present; adjust as needed
        document += f"\t\t\\begin{{solution}}[1in]\n\t\t\t{solution}\n\t\t\\end{{solution}}\n\n"
    
    document += "\t\\end{questions}\n\\end{document}\n"
    return document

def main():
    if len(sys.argv) != 4:
        print("Usage: python select_questions.py <input.tex> <output.tex> <N>")
        sys.exit(1)
    
    input_tex = sys.argv[1]
    output_tex = sys.argv[2]
    try:
        N = int(sys.argv[3])
        if N <= 0:
            raise ValueError
    except ValueError:
        print("Error: N must be a positive integer.")
        sys.exit(1)
    
    # Read the input .tex file
    try:
        with open(input_tex, 'r', encoding='utf-8') as file:
            tex_content = file.read()
    except FileNotFoundError:
        print(f"Error: File '{input_tex}' not found.")
        sys.exit(1)
    
    # Parse questions and solutions
    pairs = parse_questions(tex_content)
    
    if not pairs:
        print("Error: No question-solution pairs found in the input file.")
        sys.exit(1)
    
    # Select N random pairs
    selected_pairs = select_random_questions(pairs, N)
    
    # Define a placeholder preamble (replace this with your actual preamble)
    preamble = r"""
\documentclass[answers]{exam}
\usepackage{amsmath}
\usepackage{amssymb}

% Add any additional packages or configurations here
"""
    
    # Generate the new LaTeX content
    new_tex = generate_new_tex(preamble, selected_pairs)
    
    # Write to the output .tex file
    try:
        with open(output_tex, 'w', encoding='utf-8') as file:
            file.write(new_tex)
        print(f"Successfully generated '{output_tex}' with {len(selected_pairs)} question(s).")
    except IOError as e:
        print(f"Error writing to file '{output_tex}': {e}")
        sys.exit(1)

if __name__ == "__main__":
        main()
