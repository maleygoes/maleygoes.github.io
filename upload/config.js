/* ============================================================
   EXAM WORK UPLOAD — the only file you edit each semester.

   These pages send students to the OHM assessment, where they
   upload their work through OHM's own "Show Work" file upload.
   Students never need an OHM password. Launching OHM from
   Brightspace on the phone signs them in the same way it does
   on the computer.

   HOW TO UPDATE (about 5 minutes, once per term):

   1. In Brightspace, open the course and find the content topic
      that launches the OHM exam.
   2. Copy the whole URL out of the address bar. It contains the
      topic id and course id, both of which change every
      semester, so copy it. Do not hand-edit last term's.
   3. Paste it below as the `launch` value for that course.
   4. Update `semester` and `goodThrough`.
   5. Commit and push. The QR codes never change.

   `goodThrough` is a safety net. After that date the page warns
   students the link may be stale instead of silently sending them
   to a dead course shell. Set it a couple weeks past finals.

   REQUIRED OHM SETTINGS on each exam, or the upload box will not
   exist when they get there:
     Provide "Show Work" boxes ....... After assessment
     Work entry type ................. File upload
     Work entry format ............... One entry for the whole assessment
     Add work cutoff ................. on, 15 minutes
   ============================================================ */

var UPLOAD_CONFIG = {

  semester:   "Fall 2026",
  goodThrough: "2027-01-05",

  courses: {

    "271": {
      name:   "MAT 271",
      title:  "Calculus I",
      launch: "PASTE_BRIGHTSPACE_OHM_LINK_HERE"
    },

    "273": {
      name:   "MAT 273",
      title:  "Calculus III",
      launch: "PASTE_BRIGHTSPACE_OHM_LINK_HERE"
    },

    "274": {
      name:   "MAT 274",
      title:  "Differential Equations",
      launch: "PASTE_BRIGHTSPACE_OHM_LINK_HERE"
    }

  }
};
