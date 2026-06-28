import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";

import {
  SiRedux,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMui,
  SiSass,
  SiExpress,
  SiDjango,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

export const SKILLS = [
  {
    name: "React.js",
    icon: FaReact,
    color: "#61DAFB",
    category: "Frontend",
    level: 92,
  },
  {
    name: "Redux",
    icon: SiRedux,
    color: "#764ABC",
    category: "State",
    level: 85,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    category: "Language",
    level: 90,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    category: "Language",
    level: 75,
  },
  {
    name: "HTML5",
    icon: FaHtml5,
    color: "#E34F26",
    category: "Markup",
    level: 95,
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    color: "#1572B6",
    category: "Style",
    level: 92,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
    category: "Style",
    level: 88,
  },
  {
    name: "Material UI",
    icon: SiMui,
    color: "#0081CB",
    category: "UI Lib",
    level: 85,
  },
  {
    name: "Bootstrap",
    icon: FaBootstrap,
    color: "#7952B3",
    category: "UI Lib",
    level: 88,
  },
  {
    name: "SCSS",
    icon: SiSass,
    color: "#CC6699",
    category: "Style",
    level: 85,
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "#339933",
    category: "Backend",
    level: 72,
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "#ffffff",
    category: "Backend",
    level: 70,
  },
  {
    name: "Django",
    icon: SiDjango,
    color: "#092E20",
    category: "Backend",
    level: 60,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    category: "Database",
    level: 68,
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#4479A1",
    category: "Database",
    level: 65,
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "#F05032",
    category: "Tools",
    level: 88,
  },
  {
    name: "GitHub",
    icon: FaGithub,
    color: "#ffffff",
    category: "Tools",
    level: 90,
  },
  {
    name: "Python",
    icon: FaPython,
    color: "#3776AB",
    category: "Language",
    level: 65,
  },
];

export const PROJECTS = [
  {
    title: "Car Travels & Rental",
    desc: "A full-featured car rental platform with real-time booking, dynamic pricing engine, and interactive map integration. Built with React.js and Redux for state management.",
    tech: ["React.js", "Redux", "Tailwind CSS", "Node.js", "MongoDB"],
    color: "#6366f1",
    accent: "#a5b4fc",
    emoji: "🚗",
    live: "https://cartravel-rental.vercel.app/",
    github: "https://github.com/Akash-Karumuri/CarTravel_Rental",
    feat: [
      "Real-time Booking System",
      "Interactive Map View",
      "Payment Gateway",
      "Admin Dashboard",
    ],
  },
  {
    title: "Waterfall Tourism India",
    desc: "Immersive travel discovery platform showcasing India's hidden waterfall destinations. Features 3D gallery, itinerary planner, and weather integration.",
    tech: ["React.js", "SCSS", "Material UI", "Django", "MySQL"],
    color: "#0ea5e9",
    accent: "#7dd3fc",
    emoji: "🌊",
    live: "#",
    github: "#",
    feat: [
      "3D Gallery View",
      "Itinerary Planner",
      "Weather Integration",
      "User Reviews",
    ],
  },
];

export const CERTIFICATIONS = [
  {
    title: "React.js Advanced Patterns",
    org: "Meta / Coursera",
    year: "2024",
    icon: "⚛️",
    color: "#61DAFB",
  },
  {
    title: "Full Stack Web Development",
    org: "Udemy",
    year: "2023",
    icon: "🏆",
    color: "#F7DF1E",
  },
  {
    title: "JavaScript Algorithms & DS",
    org: "freeCodeCamp",
    year: "2023",
    icon: "𝐉𝐒",
    color: "#F7DF1E",
  },
  {
    title: "Python for Data Science",
    org: "IBM / Coursera",
    year: "2024",
    icon: "🐍",
    color: "#3776AB",
  },
];

export const NAV_ITEMS = [
  "Home",
  "Skills",
  "Experience",
  "Projects",
  //  "Certifications",
  "Contact",
];

export const TYPING_WORDS = [
  "Frontend Developer",
  "React.js Specialist",
  "UI/UX Enthusiast",
  "JavaScript Expert",
  "Modern Web Builder",
];

export const SKILL_CATEGORIES = [
  "All",
  "Frontend",
  "Style",
  "Language",
  "Backend",
  "Database",
  "Tools",
  "UI Lib",
  "State",
  "Markup",
];

export const CONTACT_LINKS = [
  {
    icon: "📧",
    label: "Email",
    val: "karumuriakash888@gmail.com",
    link: "mailto:karumuriakash888@gmail.com",
  },
  {
    icon: "📍",
    label: "Location",
    val: "Andhra Pradesh, India",
    link: null,
  },
  {
    icon: "💼",
    label: "LinkedIn",
    val: "LinkedIn Profile",
    link: "https://www.linkedin.com/in/n-p-r-akash-karumuri/",
  },
  {
    icon: "🐙",
    label: "GitHub",
    val: "GitHub Profile",
    link: "https://github.com/Akash-Karumuri",
  },
];

export const EDUCATION = [
  {
    deg: "B.Tech in Computer Science",
    school: "JNTU Kakinada University",
    yr: "2021 – 2025",
    grade: "7.8 CGPA",
    side: "left",
  },
  {
    deg: "Intermediate (MPC)",
    school: "Sri Chaitanya Junior College",
    yr: "2019 – 2021",
    grade: "82%",
    side: "right",
  },
];

export const EXPERIENCE_ITEMS = [
  {
    role: "Frontend Developer",
    type: "Full Time",
    company: "KRISP",
    location: "Kakinada, Andhra Pradesh",
    period: "Apr 2025 – Present",
    bullets: [
      "Developed and maintained HRM, Material Library, Moodboard, and Design modules using React.js, Redux, Zustand, Material UI, Tailwind CSS, and SCSS, delivering scalable and responsive web applications.",
      "Built reusable and modular UI components to improve code maintainability, consistency, and development efficiency across multiple application modules.",
      "Integrated RESTful APIs with frontend applications, collaborating closely with backend developers to ensure seamless data flow and reliable application performance.",
      "Implemented efficient state management using Redux and Zustand for handling complex application states and improving user interactions.",
      "Translated UI/UX designs into responsive, pixel-perfect interfaces while maintaining cross-browser compatibility and accessibility standards.",
      "Optimized application performance through component reusability, lazy loading, and rendering optimizations, resulting in a smoother user experience.",
      "Participated in code reviews, debugging, and feature enhancements while following Git-based version control and Agile development practices.",
    ],
    tech: [
      "React.js",
      "Redux",
      "Zustand",
      "Material UI",
      "Tailwind CSS",
      "SCSS",
      "JavaScript",
      "REST APIs",
      "Axios",
      "Git",
    ],
  },
];
