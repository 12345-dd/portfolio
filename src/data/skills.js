import WebRoundedIcon from "@mui/icons-material/WebRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import DnsRoundedIcon from "@mui/icons-material/DnsRounded";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";

const skills = [
  {
    id: 1,
    title: "Frontend Development",
    icon: WebRoundedIcon,
    description:
      "Building modern, responsive and interactive user interfaces using reusable React components and Material UI.",

    technologies: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Material UI",
      "Responsive UI",
    ],

    highlight: "Responsive & Interactive UI",
  },

  {
    id: 2,
    title: "Backend Development",
    icon: StorageRoundedIcon,
    description:
      "Developing secure REST APIs with authentication, clean architecture and scalable backend solutions.",

    technologies: [
      "Node.js",
      "Express.js",
      "REST API",
      "JWT",
      "MVC",
    ],

    highlight: "Secure REST APIs",
  },

  {
    id: 3,
    title: "Database",
    icon: DnsRoundedIcon,
    description:
      "Designing MongoDB collections, optimized schemas and efficient data handling using Mongoose.",

    technologies: [
      "MongoDB",
      "Mongoose",
    ],

    highlight: "Optimized Data Models",
  },

  {
    id: 4,
    title: "Development Tools",
    icon: BuildRoundedIcon,
    description:
      "Using modern development tools for coding, debugging, deployment and version control.",

    technologies: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Render",
      "Netlify",
    ],

    highlight: "Efficient Development Workflow",
  },
];

export default skills;