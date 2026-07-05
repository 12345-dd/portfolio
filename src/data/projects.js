import jobAnalytics from "../assets/images/projects/job-analytic.png";
import smartTripAI from "../assets/images/projects/smartTrip-ai.png";
import superApp from "../assets/images/projects/super-app.png";
// import crediKhatta from "../assets/images/projects/credi-khatta.png";
// import loanManager from "../assets/images/projects/loan-manager.png";

const projects = [
  {
    id: 1,

    title: "Job Analytics",

    category: "Full Stack",

    image: jobAnalytics,

    description:
      "A MERN application for tracking job applications, interview progress, analytics, and hiring performance through an interactive dashboard.",

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Material UI",
      "JWT",
      "Chart.js",
    ],

    frontendGithub: "https://github.com/12345-dd/jobTrackerFrontend",

    backendGithub: "https://github.com/12345-dd/jobTrackerBackend",

    live: "https://jobanalytic.netlify.app",

    features: [
      "Application Tracking",
      "Interactive Dashboard",
      "Analytics Charts",
      "Interview Timeline",
      "Authentication",
    ],
  },

  {
    id: 2,

    title: "Smart Trip AI",

    category: "AI Powered",

    image: smartTripAI,

    description:
      "AI-powered travel planner that generates personalized itineraries and destination recommendations in your own budget with packing assistance.",

    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Gemini AI",
      "Material UI",
    ],

    frontendGithub: "https://github.com/12345-dd/travelFrontend",

    backendGithub: "https://github.com/12345-dd/travelBackend",

    live: "https://smarttripai.netlify.app",

    features: [
      "AI Trip Planner",
      "Day Wise Itinerary",
      "Budget Planning",
      "Destination Suggestions",
      "Responsive Design",
    ],
  },

  {
    id: 3,

    title: "Super App",

    category: "React App",

    image: superApp,

    description:
      "Modern React dashboard combining news, weather, notes, and productivity tools in one application.",

    technologies: [
      "React",
      "Material UI",
      "News API",
      "Weather API",
    ],

    github: "https://github.com/12345-dd/superApp",

    live: "https://superapdashboard.netlify.app",

    features: [
      "News",
      "Weather",
      "Notes",
      "Dark Mode",
      "Desktop Based App",
    ],
  },

//   {
//     id: 4,

//     title: "CrediKhatta",

//     category: "Frontend",

//     image: crediKhatta,

//     description:
//       "Customer credit management application with modern UI for tracking balances and transactions.",

//     technologies: [
//       "React",
//       "Material UI",
//       "JavaScript",
//     ],

//     github: "",

//     live: "",

//     features: [
//       "Customer Records",
//       "Balance Tracking",
//       "Responsive UI",
//       "Search",
//       "Dashboard",
//     ],
//   },

//   {
//     id: 5,

//     title: "Loan Manager App",

//     category: "Full Stack",

//     image: loanManager,

//     description:
//       "Loan management system with borrower records, EMI calculations, repayment tracking, and dashboards.",

//     technologies: [
//       "React",
//       "Node.js",
//       "Express",
//       "MongoDB",
//       "Material UI",
//     ],

//     frontendGithub: "",

//     backendGithub: "",

//     live: "",

//     features: [
//       "Loan Records",
//       "EMI Calculator",
//       "Borrower Management",
//       "Authentication",
//       "Dashboard",
//     ],
//   },
];

export default projects;