# Accessible Weekly Schedule

This is a static, dependency-free schedule suitable for GitHub Pages, a faculty website, or an LMS page that permits linked HTML files.

## Files

- `index.html`: layout, styles, accessibility structure, and schedule logic.
- `schedule-data.js`: the only file normally edited each semester.

## Edit the schedule

Open `schedule-data.js`. Meetings use this form:

```js
{
  title: "Office Hours",
  location: "Room 3239",
  start: "10:00",
  end: "11:20",
  days: "TR",
  type: "office"
}
```

Day codes use the standard academic convention:

- `M`: Monday
- `T`: Tuesday
- `W`: Wednesday
- `R`: Thursday
- `F`: Friday

Thus, `days: "TR"` places one meeting on Tuesday and Thursday.

Times use 24-hour `HH:MM` notation. The page displays them in 12-hour notation.

Available visual types:

- `office`
- `course`
- `online`
- `meeting`
- `mindfulness`
- `other`

A meeting can optionally contain:

```js
description: "Differential Equations",
url: "https://example.edu/meeting-link"
```

## Publish on GitHub Pages

1. Put all files in the same folder in the repository.
2. Rename the folder or page as desired.
3. Link students to `index.html`.
4. Edit only `schedule-data.js` when the semester changes.

Because `schedule-data.js` is loaded as a script rather than fetched as JSON, the schedule also works when opened directly from a local folder.

## Accessibility design

The desktop calendar is a visual summary and is hidden from assistive technology. The same information is presented immediately afterward as semantic day sections with headings, ordered event lists, machine-readable time elements, descriptive link text, and contact links.

The page also provides:

- a keyboard skip link;
- a live current-location summary;
- color-independent category labels in the detailed view;
- strong focus indicators;
- responsive one-column reading order on small screens;
- reduced-motion support;
- print styling.

Automated testing should still be supplemented with keyboard testing and at least one screen reader before institutional deployment.

## Current-status behavior

The browser calculates the current and next scheduled block using the time zone in `schedule-data.js`.

To limit the status box to a semester, set:

```js
startDate: "2026-08-24",
endDate: "2026-12-18",
```

Leave both values blank for a year-round recurring schedule.
