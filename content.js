/*
 * ALL SITE CONTENT LIVES HERE.
 * Fields left null / empty show a "Details to be confirmed" placeholder. Only add confirmed information.
 */
window.SITE = {
  intro:
    "The official portfolio of TechOps, the technical operations department of ACM FAST-NUCES Karachi: the people, systems and on-ground work behind the society's events, platforms and competitions.",

  /* 4.2 About */
  about: {
    mission:
      "To make sure ACM FAST's events, competitions and digital platforms run with technical care, from preparation, through live execution, to the systems that support day-to-day society work.",
    scope:
      "TechOps handles the technical infrastructure, software systems and on-site technical execution behind the chapter's flagship events and everyday operations, working alongside the other ACM departments rather than replacing them.",
    responsibilities: [
      "Technical setup for events: labs, workstations, network readiness and auditorium equipment",
      "Building, hosting and maintaining web platforms for the chapter and its flagship events",
      "Registration and ticketing systems for large participant volumes",
      "Competition infrastructure for programming contests, including Coders' Cup 2026",
      "Live troubleshooting of hardware, network and software issues during events",
      "Stage AV, presentation support and foyer minigames at introductory sessions",
      "General IT support and workshop logistics across ACM FAST",
      "Internal tooling and automation that speeds up work across departments"
    ],
    support:
      "When the chapter runs an introductory session, a contest or a workshop, TechOps prepares the hardware and systems, keeps them stable while it is live, and packs up afterwards, so speakers, organisers and participants can focus on the experience itself."
  },

  /* 4.3 Projects & technical work */
  projects: [
    {
      name: "Chapter & Event Websites",
      purpose: "Give ACM FAST-NUCES Karachi and its flagship initiatives a fast, mobile-friendly web presence.",
      date: null,
      contribution: "Developing, hosting and maintaining the chapter and event web applications.",
      tech: ["Component-based frontend", "Responsive design"],
      outcome: null,
      screenshot: null,
      links: []
    },
    {
      name: "Registration & Ticketing Systems",
      purpose: "Handle university-wide sign-ups for competitions and summits.",
      date: null,
      contribution: "Designing digital intake for individuals and teams, confirmation workflows and on-ground check-in and attendance verification.",
      tech: null,
      outcome: null,
      screenshot: null,
      links: []
    },
    {
      name: "Coders' Cup 2026 Competition Infrastructure",
      purpose: "Provide the technical backbone for ACM FAST's flagship competitive programming championship.",
      date: "Coders' Cup 2026",
      contribution: "Lab and workstation preparation, network verification, contest environment deployment, live support across the contest days and post-event teardown.",
      tech: null,
      outcome: "Contest days supported with lab readiness, continuous network uptime and live troubleshooting.",
      screenshot: "img/coders-cup-lab.png",
      links: []
    },
    {
      name: "Internal Tooling & Automation",
      purpose: "Speed up day-to-day execution across ACM departments.",
      date: null,
      contribution: "Utility scripts, workflow tools and operational tracking for logistics and quick issue diagnosis.",
      tech: null,
      outcome: null,
      screenshot: null,
      links: []
    }
  ],

  /* 4.5 Events & activities */
  events: [
    {
      name: "ACM NUCES & Coders' Cup '26 Introductory Session",
      date: "Monday, 19 October 2026, 10 AM to 3 PM",
      description: "Introductory session held in the Main Auditorium, Multipurpose Building, featuring Dr Muhammad Rafi (HOD AI/DS, FAST-NUCES Karachi) on \"Automated Reasoning in NLP\". TechOps handled the stage and technical side.",
      contribution: "Pre-session equipment checks, display and audio-visual routing, and live stage technical operations.",
      by: "TechOps",
      poster: null,
      links: []
    },
    {
      name: "Foyer Interactive Minigames",
      date: "Monday, 19 October 2026 (introductory session)",
      description: "Interactive minigame stations with small prizes outside the auditorium during the 2026–27 introductory session.",
      contribution: "Set up and ran the booths, laptops and participation flow, and handled prize coordination.",
      by: "TechOps",
      poster: "img/foyer-minigames.png",
      links: []
    },
    {
      name: "Coders' Cup 2026",
      date: "Coders' Cup 2026 (three contest days)",
      description: "ACM FAST's flagship competitive programming championship.",
      contribution: "Lab setup and deployment, live troubleshooting and platform stability, and final-round logistics with infrastructure closeout.",
      by: "TechOps",
      poster: "img/coders-cup-lab.png",
      links: []
    },
    {
      name: "Workshop & learning-session support",
      date: null,
      description: "Technical and logistical arrangements for student-led learning sessions.",
      contribution: "Venue and projector setup, facilitator assistance and in-session coordination.",
      by: "TechOps",
      poster: null,
      links: []
    }
  ],

  /* 4.6 Team (2026–27). Confirm titles with ACM before launch. */
  team: {
    techops: [
      { title: "TechOps Head", name: "Uzair Mustafa", responsibilities: "Directs overall technical infrastructure, platform roadmaps and event execution across ACM FAST initiatives.", photo: "img/uzair-mustafa.png" },
      { title: "TechOps Co-Head", name: "Ahsan Abbasi", responsibilities: "Oversees live competition infrastructure, systems stability and on-ground technical operations.", photo: "img/ahsan-abbasi.png" },
      { title: "TechOps Co-Head", name: "Muhammad Fareed", responsibilities: "Manages technical logistics, platform coordination and real-time troubleshooting for flagship activities.", photo: "img/muhammad-fareed.png" }
    ],
    leads: []
  },

  /* 4.7 Achievements: only verified numbers! */
  stats: [
    { label: "Coders' Cup 2026 contest days supported", value: 3 },
    { label: "Core responsibility areas", value: 4 },
    { label: "Completed deliverables", value: null }
  ],
  achievements: {
    techops: [
      { title: "Coders' Cup 2026 infrastructure", detail: "Lab readiness, network stability and live troubleshooting across all three contest days", context: "Coders' Cup 2026" },
      { title: "Introductory session tech", detail: "Stage AV and foyer minigame booths delivered", context: "ACM 2026–27 introductory session" }
    ]
  },

  /* 4.8 Contact: official links */
  contact: {
    join: null,
    links: [
      { label: "Instagram @acmnuceskhi", url: "https://www.instagram.com/acmnuceskhi/" },
      { label: "LinkedIn: ACM NUCES Karachi", url: "https://www.linkedin.com/company/acmnuceskhi/" }
    ]
  }
};
