var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  copyright  "
},
{
  "id": "3d-geometry",
  "level": "1",
  "url": "3d-geometry.html",
  "type": "Section",
  "number": "1.1",
  "title": "Geometry in <span class=\"process-math\">\\(\\mathbb{R}^3 \\)<\/span>",
  "body": " Geometry in    Welcome to the world of 3D geometry! In this section, we will explore how to measure distances in three-dimensional space and describe spheres. While we’ll cover the essential formulas and definitions, our focus will be on understanding why these ideas matter and seeing how they come up in real-life situations. Let’s start by looking at a familiar scenario— something you might encounter every day—and then connect it to the underlying math.    Motivation: Navigating in 3D  Imagine you’re operating a drone that can move in any direction above the ground. You want to figure out how far the drone is from its takeoff spot, so you can plan the best path to fly back safely. Or picture a submarine exploring the ocean depths: it might need to maintain a certain distance from the seafloor. These situations both revolve around figuring out the distance between two points in three-dimensional space.   What is ?Or ?  We will see this notation alot. What does it mean? You might recall that the xy-plane is the same as -- which basically means two real number lines slapped on each other at 90 degrees. Well, is just doing that again, with another number line that is perpendicular to both. (Imagine the xy-plane is your desk, so the only thing 90 degrees to that would be straight up out of the desk, or toward the floor).  To extend this idea to we just need a bit of imagination. The same thing is happening - slapping on another \"number line\" that is perpendicular to all the others... we just can't draw it anymore. can be any natural number, and this will work out. This is the number of \"dimensions\", which is just the number of things we care to measure. For our purposes, 3 dimensions will typically be enough. But just nearly everything we do will work in higher dimensions.    The Distance Formula in 3D >  Coordinates of Points in 3D  When we work in three dimensions, we label each point with three coordinates . Think of as the left–right direction, as the forward–back direction, and as the up–down direction.   A point is located at .  Another point is located at .    A look at the 3D coordinate axes with points and .        The Distance Formula  If you need the distance between and , you can use a direct extension of the Pythagorean theorem from two dimensions to three dimensions. The formula is:   This formula captures the combined difference in each of the three directions.   Example (Drone Navigation):  If your drone starts at and ends up at , the distance traveled is   So the drone is units away from its starting point.      Equations of Spheres  A sphere in three-dimensional space is the set of points that are all at the same distance, called the radius , from a fixed point called the center . Spheres are often used in physics (like modeling planets or atoms), in computer graphics (3D animations), and even in global positioning systems (GPS relies on distances from satellite “spheres”).    Standard Form of a Sphere  If a sphere has a center at and a radius , any point on the sphere satisfies:   This is basically the 3D distance formula set equal to a constant radius .  Example (GPS Satellites):  GPS satellites broadcast their positions and send signals that travel at the speed of light. The distance between a satellite and your receiver on Earth is like the radius of a sphere. Your receiver calculates its position by finding the intersection of several of these “distance spheres” from different satellites. Wherever they intersect is where you are located on the planet’s surface.   Visualizing a Sphere   Center:   Radius:    If you wanted to picture it in your mind, think of wrapping a basketball around a point in space. The surface of the sphere is the collection of all points that are exactly units from the center. (Note: it does not contain the points inside -- it is specifically the set of points on the surface)  Let’s put these ideas into practice with a quick exercise.   Satellite in Orbit   A certain GPS satellite orbits at a center point in kilometers (this is not an actual orbit location—just an example). The sphere representing all the points it can reach on Earth at a given instant has a radius of 2000 km. Write an equation for this sphere.     The center of the sphere: .  The radius of the sphere: .  Plug into the formula: Or more simply:    That’s it! You’ve written the equation of the sphere.    5. Key Takeaways    Distance in 3D – To find the distance between points and , remember    Equation of a Sphere – A sphere with center and radius is given by    Real-World Applications – From drone flights to GPS technology, understanding how to calculate distances and describe spheres in 3D helps us solve practical, real-life problems.   Looking Ahead  You’ll use distance formulas and the concept of spheres to tackle more advanced topics like level surfaces, gradients, and optimization in 3D. By appreciating the real-world motivations—like finding paths for vehicles, mapping planetary orbits, and designing engineering solutions—these mathematical tools become more intuitive and more powerful.  Keep practicing, and remember to look for ways these ideas show up in everyday life. You’ll soon see that the world around us is brimming with three-dimensional geometry in action!      In these exercises, you will practice applying the distance formula in 3D and writing equations for spheres.     Use the distance formula to find the distance between the points and .     Find the equation of the sphere with center and radius .   Remember the standard form:         A drone is hovering at in 3D space. If its takeoff point was , how far has it traveled?    Use the technique of \"completing the square\" to show that is the equation of a sphere, in standard form.    "
},
{
  "id": "3d-geometry-3",
  "level": "2",
  "url": "3d-geometry.html#3d-geometry-3",
  "type": "Remark",
  "number": "1.1.1",
  "title": "Motivation: Navigating in 3D.",
  "body": " Motivation: Navigating in 3D  Imagine you’re operating a drone that can move in any direction above the ground. You want to figure out how far the drone is from its takeoff spot, so you can plan the best path to fly back safely. Or picture a submarine exploring the ocean depths: it might need to maintain a certain distance from the seafloor. These situations both revolve around figuring out the distance between two points in three-dimensional space.  "
},
{
  "id": "3d-geometry-4",
  "level": "2",
  "url": "3d-geometry.html#3d-geometry-4",
  "type": "Insight",
  "number": "1.1.2",
  "title": "What is <span class=\"process-math\">\\(\\mathbb{R}^3\\text{?}\\)<\/span>Or <span class=\"process-math\">\\(\\mathbb{R}^n\\text{?}\\)<\/span>",
  "body": "What is ?Or ?  We will see this notation alot. What does it mean? You might recall that the xy-plane is the same as -- which basically means two real number lines slapped on each other at 90 degrees. Well, is just doing that again, with another number line that is perpendicular to both. (Imagine the xy-plane is your desk, so the only thing 90 degrees to that would be straight up out of the desk, or toward the floor).  To extend this idea to we just need a bit of imagination. The same thing is happening - slapping on another \"number line\" that is perpendicular to all the others... we just can't draw it anymore. can be any natural number, and this will work out. This is the number of \"dimensions\", which is just the number of things we care to measure. For our purposes, 3 dimensions will typically be enough. But just nearly everything we do will work in higher dimensions.  "
},
{
  "id": "fig-tikz",
  "level": "2",
  "url": "3d-geometry.html#fig-tikz",
  "type": "Figure",
  "number": "1.1.3",
  "title": "",
  "body": " A look at the 3D coordinate axes with points and .     "
},
{
  "id": "3d-geometry-5-8",
  "level": "2",
  "url": "3d-geometry.html#3d-geometry-5-8",
  "type": "Checkpoint",
  "number": "1.1.4",
  "title": "",
  "body": " "
},
{
  "id": "3d-geometry-9",
  "level": "2",
  "url": "3d-geometry.html#3d-geometry-9",
  "type": "Example",
  "number": "1.1.5",
  "title": "Satellite in Orbit.",
  "body": "Satellite in Orbit   A certain GPS satellite orbits at a center point in kilometers (this is not an actual orbit location—just an example). The sphere representing all the points it can reach on Earth at a given instant has a radius of 2000 km. Write an equation for this sphere.     The center of the sphere: .  The radius of the sphere: .  Plug into the formula: Or more simply:    That’s it! You’ve written the equation of the sphere.   "
},
{
  "id": "distance-spheres-exercises-1-2",
  "level": "2",
  "url": "3d-geometry.html#distance-spheres-exercises-1-2",
  "type": "Exercise",
  "number": "1.1.5.1",
  "title": "",
  "body": " Use the distance formula to find the distance between the points and .  "
},
{
  "id": "distance-spheres-exercises-1-3",
  "level": "2",
  "url": "3d-geometry.html#distance-spheres-exercises-1-3",
  "type": "Exercise",
  "number": "1.1.5.2",
  "title": "",
  "body": " Find the equation of the sphere with center and radius .   Remember the standard form:       "
},
{
  "id": "distance-spheres-exercises-1-4",
  "level": "2",
  "url": "3d-geometry.html#distance-spheres-exercises-1-4",
  "type": "Exercise",
  "number": "1.1.5.3",
  "title": "",
  "body": "A drone is hovering at in 3D space. If its takeoff point was , how far has it traveled? "
},
{
  "id": "distance-spheres-exercises-2",
  "level": "2",
  "url": "3d-geometry.html#distance-spheres-exercises-2",
  "type": "Exercise",
  "number": "1.1.5.4",
  "title": "",
  "body": "Use the technique of \"completing the square\" to show that is the equation of a sphere, in standard form. "
},
{
  "id": "vectors",
  "level": "1",
  "url": "vectors.html",
  "type": "Section",
  "number": "1.2",
  "title": "Vectors Introduction",
  "body": " Vectors Introduction         thematics, a partial derivative of a function of several variables is its derivative with respect to one of those variables, with the others held constant. In this chapter, you will learn about the partial derivatives and their applications. Subjects Applications Limits and continuity Partial derivatives Tangent planes linear approximations Chain rule Directional derivatives and the Gradient Vector Maximum and minimum values Method of Lagrange multipliers Contents of Chapter 14 14.1.Functions of Several Variables . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 18 14.2.Limits and Continuity . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 25 14.3.Partial Derivatives . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 32 14.4.Tangent Planes Linear Approximations . . . . . . . . . . . . . . . . . . . . . .       "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
