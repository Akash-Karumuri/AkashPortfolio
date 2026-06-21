export const SKILLS = [
  { name: "React.js",    icon: "⚛️", color: "#61DAFB", category: "Frontend",  level: 92 },
  { name: "Redux",       icon: "🔮", color: "#764ABC", category: "State",     level: 85 },
  { name: "JavaScript",  icon: "𝐉𝐒", color: "#F7DF1E", category: "Language",  level: 90 },
  { name: "TypeScript",  icon: "𝐓𝐒", color: "#3178C6", category: "Language",  level: 75 },
  { name: "HTML5",       icon: "🔶", color: "#E34F26", category: "Markup",    level: 95 },
  { name: "CSS3",        icon: "🔷", color: "#1572B6", category: "Style",     level: 92 },
  { name: "Tailwind",    icon: "🌊", color: "#06B6D4", category: "Style",     level: 88 },
  { name: "Material UI", icon: "▦",  color: "#0081CB", category: "UI Lib",   level: 85 },
  { name: "Bootstrap",   icon: "🅱",  color: "#7952B3", category: "UI Lib",   level: 88 },
  { name: "SCSS",        icon: "🎨", color: "#CC6699", category: "Style",     level: 85 },
  { name: "Node.js",     icon: "🟢", color: "#339933", category: "Backend",   level: 72 },
  { name: "Express.js",  icon: "🚀", color: "#ffffff", category: "Backend",   level: 70 },
  { name: "Django",      icon: "🐍", color: "#092E20", category: "Backend",   level: 60 },
  { name: "MongoDB",     icon: "🍃", color: "#47A248", category: "Database",  level: 68 },
  { name: "MySQL",       icon: "🐬", color: "#4479A1", category: "Database",  level: 65 },
  { name: "Git",         icon: "🔱", color: "#F05032", category: "Tools",     level: 88 },
  { name: "GitHub",      icon: "🐙", color: "#ffffff", category: "Tools",     level: 90 },
  { name: "Python",      icon: "🐍", color: "#3776AB", category: "Language",  level: 65 },
];

export const PROJECTS = [
  {
    title: "Car Travels & Rental",
    desc:  "A full-featured car rental platform with real-time booking, dynamic pricing engine, and interactive map integration. Built with React.js and Redux for state management.",
    tech:  ["React.js", "Redux", "Tailwind CSS", "Node.js", "MongoDB"],
    color: "#6366f1",
    accent:"#a5b4fc",
    emoji: "🚗",
    live:  "#",
    github:"#",
    feat:  ["Real-time Booking System", "Interactive Map View", "Payment Gateway", "Admin Dashboard"],
  },
  {
    title: "Waterfall Tourism India",
    desc:  "Immersive travel discovery platform showcasing India's hidden waterfall destinations. Features 3D gallery, itinerary planner, and weather integration.",
    tech:  ["React.js", "SCSS", "Material UI", "Django", "MySQL"],
    color: "#0ea5e9",
    accent:"#7dd3fc",
    emoji: "🌊",
    live:  "#",
    github:"#",
    feat:  ["3D Gallery View", "Itinerary Planner", "Weather Integration", "User Reviews"],
  },
];

export const CERTIFICATIONS = [
  { title: "React.js Advanced Patterns",    org: "Meta / Coursera",  year: "2024", icon: "⚛️", color: "#61DAFB" },
  { title: "Full Stack Web Development",    org: "Udemy",            year: "2023", icon: "🏆", color: "#F7DF1E" },
  { title: "JavaScript Algorithms & DS",    org: "freeCodeCamp",     year: "2023", icon: "𝐉𝐒", color: "#F7DF1E" },
  { title: "Python for Data Science",       org: "IBM / Coursera",   year: "2024", icon: "🐍", color: "#3776AB" },
];

export const NAV_ITEMS = ["Home", "Skills", "Experience", "Projects", "Certifications", "Contact"];

export const TYPING_WORDS = [
  "Frontend Developer",
  "React.js Specialist",
  "UI/UX Enthusiast",
  "JavaScript Expert",
  "Modern Web Builder",
];

export const SKILL_CATEGORIES = [
  "All", "Frontend", "Style", "Language", "Backend",
  "Database", "Tools", "UI Lib", "State", "Markup",
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
    deg:    "B.Tech in Computer Science",
    school: "JNTU Kakinada University",
    yr:     "2021 – 2025",
    grade:  "7.8 CGPA",
    side:   "left",
  },
  {
    deg:    "Intermediate (MPC)",
    school: "Sri Chaitanya Junior College",
    yr:     "2019 – 2021",
    grade:  "82%",
    side:   "right",
  },
];

export const EXPERIENCE_ITEMS = [
  {
    role:     "Frontend Developer Intern",
    type:     "Internship",
    company:  "KRISP Technologies",
    location: "Hyderabad, India",
    period:   "Jan 2024 – Jul 2024",
    duration: "6 months",
    bullets: [
      "Developed and maintained responsive React.js components for the main product dashboard, improving UX consistency across 8+ modules.",
      "Implemented Redux state management for complex data flows, reducing API calls by 30% through optimized caching.",
      "Collaborated with the UI/UX team to translate Figma designs into pixel-perfect, accessible web interfaces.",
      "Integrated REST APIs with Axios, implemented error handling, loading states, and data transformation logic.",
      "Optimized frontend performance achieving a 25% improvement in page load times through code splitting and lazy loading.",
    ],
    tech: ["React.js", "Redux", "Material UI", "Tailwind CSS", "JavaScript", "REST APIs", "Git"],
  },
];
