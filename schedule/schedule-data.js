/*
  EDIT THIS FILE EACH SEMESTER.

  Day codes follow the familiar academic convention:
    M = Monday, T = Tuesday, W = Wednesday, R = Thursday, F = Friday

  A meeting with days: "TR" appears on Tuesday and Thursday.
  Times use 24-hour HH:MM notation internally.
*/
window.SCHEDULE_DATA = {
  person: "Sean Maley",
  term: "Fall 2026",
  heading: "Weekly Schedule",

  // The current-status box interprets all meetings in this time zone.
  timeZone: "America/New_York",
  timeZoneLabel: "Eastern Time",

  // Leave these blank to display the schedule year-round.
  // Otherwise use YYYY-MM-DD, for example "2026-08-24".
  startDate: "",
  endDate: "",

  // The visible time range and grid interval.
  dayStart: "09:00",
  dayEnd: "16:00",
  gridMinutes: 30,

  note: "I am mainly on campus Tuesdays and Thursdays.",
  appointmentNote:
    "I am available at other days and times by appointment. Please call or email.",

  contact: {
    email: "Sean.Maley@flcc.edu",
    phone: "(585) 653-8551",
    webexLabel: "Join my WebEx room",
    webexUrl: "https://flcc.webex.com/join/sean.maley"
  },

  /*
    type controls appearance and gives students a text label.
    Available types: office, course, meeting, mindfulness, online, other
  */
  meetings: [
    {
      title: "MAT 273",
      description: "Multivariable Calculus",
      location: "Online Forum",
      start: "10:00",
      end: "11:20",
      days: "MW",
      type: "online"
    },
    {
      title: "PSY 245",
      description: "Mindfulness Based Stress Reduction",
      location: "Online Forum",
      start: "11:30",
      end: "12:50",
      days: "MW",
      type: "online"
    },

    {
      title: "MAT 271",
      description: "Single Variable Calculus",
      location: "Online Forum",
      start: "09:30",
      end: "10:50",
      days: "TR",
      type: "online"
    },
    {
      title: "Student Hours",
      location: "WebEx / Room 3239",
      start: "14:00",
      end: "14:50",
      days: "TR",
      type: "office",
      url: "https://flcc.webex.com/join/sean.maley"
    },
    {
      title: "Student Hours",
      location: "WebEx / Room 3239",
      start: "13:00",
      end: "14:50",
      days: "MW",
      type: "office",
      url: "https://flcc.webex.com/join/sean.maley"
    },
    {
      title: "Faculty Meeting",
      location: "Room 2755 / Remote",
      start: "13:00",
      end: "14:00",
      days: "T",
      type: "meeting"
    },
{
      title: "Standing Meeting",
      location: "Remote",
      start: "13:00",
      end: "14:00",
      days: "R",
      type: "meeting"
    },
    {
      title: "MAT 274",
      description: "Differential Equations",
      location: "Room 3214",
      start: "11:00",
      end: "12:50",
      days: "TR",
      type: "course"
    },
    {
      title: "Department Meeting",
      location: "Room 3210",
      start: "13:00",
      end: "15:00",
      days: "F",
      type: "meeting"
    }
  ]
};
