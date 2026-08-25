export const profile = {
  name: "Lahiruni Malshika",
  fullName: "Lahiruni Malshika Amarasena",
  title: "Full Stack Software Engineer",
  tagline:
    "I hold a BSc (Hons) in Information Technology from the Faculty of Information Technology, University of Moratuwa. I build full-stack, AI-integrated web and mobile applications across the MERN stack and Flutter.",
  location: "Matara, Sri Lanka",
  email: "lahimalshi@gmail.com",
  phone: "+94 71 242 8170",
  phoneHref: "tel:+94712428170",
  linkedin: "https://www.linkedin.com/in/lahiruni-malshika-234242222/",
  github: "https://github.com/LahiruniMalshika",
  cvFile: "/Lahiruni Malshika CV.pdf",
  summary:
    "Software Engineer with hands-on experience building full-stack, AI-integrated web and mobile applications across the MERN stack and Flutter. Skilled in backend services, RESTful APIs, and responsive, accessible UIs blended with real-time data. Committed to clean, well-tested, maintainable code, code reviews, and software engineering best practices. An active, independent learner, eager to pick up new languages, frameworks, and tools and adapt to them quickly as team needs evolve.",
  university: "Faculty of Information Technology, University of Moratuwa",
  interests: ["Music", "Travel", "Movies", "Coding"] as const,
};

export const education = [
  {
    degree: "BSc (Hons) in Information Technology",
    school: "University of Moratuwa",
    period: "Jun 2022 – Jul 2026",
    details: [
      "Dean's List: Level 2 Semester 1 — SGPA 3.89",
      "Dean's List: Level 2 Semester 2 — SGPA 3.94",
      "Dean's List: Level 4 Semester 1 — SGPA 3.85",
      "CGPA 3.48 / 4.0 (up to L4S1)",
    ],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  techStack: string[];
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Trainee Software Engineer",
    company: "Virstack Pvt Ltd",
    period: "Dec 2025 – Aug 2026",
    techStack: ["MERN", "Flutter/Dart", "Docker", "AWS", "NGINX", "CI/CD", "WebSockets"],
    bullets: [
      "Contributed to developing and maintaining AI-powered full-stack applications using the MERN stack, as well as cross-platform mobile development with Flutter.",
      "Optimized application performance for fast, reliable user experiences across web and mobile, integrated AI-driven features to enhance product functionality, and built scalable interfaces with clean software architecture.",
      "Supported DevOps workflows through Docker containerization and AWS cloud infrastructure, collaborating within an agile team using version control to deliver production-ready solutions.",
    ],
  },
  {
    role: "Intern Software Engineer",
    company: "Virstack Pvt Ltd",
    period: "Mar 2025 – Nov 2025",
    techStack: ["MERN", "Angular", "Flutter/Dart"],
    bullets: [
      "Contributed to full-stack web and mobile application development using React, Angular, Express with TypeScript, and Flutter (Dart).",
      "Optimized RESTful APIs and MongoDB aggregation pipelines for search, filtering, scheduling, and data-driven workflows, improving data retrieval efficiency and application responsiveness.",
    ],
  },
];

export type Service = {
  title: string;
  description: string;
  icon: "code" | "smartphone" | "briefcase" | "cloud";
};

export const services: Service[] = [
  {
    title: "Web Development",
    description: "Develop responsive web applications according to the client's requirements.",
    icon: "code",
  },
  {
    title: "Mobile App Development",
    description: "Develop user-friendly mobile applications as you need.",
    icon: "smartphone",
  },
  {
    title: "IT Consultancy",
    description: "Provide expert advice and solutions to use IT to achieve business goals.",
    icon: "briefcase",
  },
  {
    title: "Cloud & DevOps",
    description: "Develop and ship applications with cloud and DevOps technologies.",
    icon: "cloud",
  },
];

export const skillGroups: { category: string; skills: string[] }[] = [
  { category: "Programming Languages", skills: ["Java", "C", "Python", "JavaScript", "TypeScript", "Dart"] },
  { category: "Frontend Development", skills: ["React JS", "Next JS", "Tailwind CSS", "HTML", "CSS", "Flutter"] },
  { category: "Backend Development", skills: ["Node JS", "Express JS", "Nest JS"] },
  { category: "Databases", skills: ["MySQL", "MongoDB", "Neo4j"] },
  { category: "Cloud & Deployment", skills: ["Docker", "Kubernetes", "CI/CD Pipelines", "AWS (S3/EC2/CloudWatch)", "NGINX"] },
  { category: "Testing & Quality Assurance", skills: ["Cypress", "Selenium", "Unit Testing", "End-to-End Testing"] },
  {
    category: "Software Engineering Principles",
    skills: ["Git", "OOP", "Design Patterns", "SOLID Principles", "REST APIs", "Microservices", "Agile/Scrum", "Secure Software Engineering"],
  },
];

export const softSkills = ["Problem Solving", "Time Management", "Leadership", "Communication", "Teamwork & Collaboration"];

export type Project = {
  slug: string;
  title: string;
  category: string;
  role?: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  githubUrls?: { label: string; url: string }[];
  cover?: string;
  gallery?: string[];
};

export const projects: Project[] = [
  {
    slug: "anothershots",
    title: "Anothershots — Photography Focused Web Application",
    category: "Web Development",
    role: "Full Stack Developer",
    description:
      "An inclusive platform connecting photography professionals with clients. Photographers can upload albums with private or public visibility, market personalized packages, and manage bookings directly on their profile with real-time availability. I implemented the Featured Photo, Contact, and Packages sections of the photographer profile, plus the Booking flow and Admin Dashboard, applying clean architecture and design patterns.",
    techStack: ["Next JS", "TypeScript", "Tailwind CSS", "Nest JS", "Prisma ORM", "MongoDB"],
    liveUrl: "https://anothershots.com/",
    githubUrls: [
      { label: "Frontend Repository", url: "https://github.com/NerdLabs-UoM/anothershot-frontend" },
      { label: "Backend Repository", url: "https://github.com/NerdLabs-UoM/anothershot-backend" },
    ],
    cover: "anothershots-1",
    gallery: ["anothershots-1", "anothershots-2", "anothershots-3", "anothershots-4", "anothershots-5", "anothershots-6", "anothershots-7"],
  },
  {
    slug: "wall-art-machine",
    title: "Multi-Colour Wall Art Machine",
    category: "Hardware Project",
    description:
      "A machine that turns a digital image into physical wall art at 1m × 1m scale by spraying ink through nozzles mounted on a 2-axis stepper-motor gantry, driven by a height/width input from a computer. Built with a talented team, it can also be adapted for fabric art and posters.",
    techStack: ["Embedded Systems", "Stepper Motors", "Image Processing"],
    cover: "wall-art-1",
    gallery: ["wall-art-1", "wall-art-2", "wall-art-3"],
  },
  {
    slug: "my-portfolio",
    title: "This Portfolio",
    category: "Personal Project",
    description:
      "My personal portfolio, redesigned as a fast, accessible, dark/light-aware single-page site built with React and TypeScript — the very site you're looking at now.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    liveUrl: "https://lahirunimalshika-portfolio.vercel.app",
    cover: "portfolio-ss",
  },
  {
    slug: "image-search",
    title: "Image Search Application",
    category: "Web Application",
    description:
      "A fast image search tool that queries and displays results with pagination, filtering, and a clean responsive grid layout.",
    techStack: ["JavaScript", "REST APIs"],
    liveUrl: "https://image-search-eapp.vercel.app/",
    cover: "image-search",
  },
  {
    slug: "final-year-research",
    title: "Hardware-Software Co-design of Spatial DL Hardware Accelerators",
    category: "Final Year Research · Group Project",
    description:
      "A cycle-accurate hardware-software co-design simulator for systolic-array DNN accelerators, built to address performance bottlenecks in DNN execution — a SystemVerilog RTL model paired with a Python compiler/mapper for memory management.",
    techStack: ["Python", "Verilog", "DNN Workloads", "FPGA Simulation"],
  },
  {
    slug: "mozzamelt",
    title: "MozzaMelt — Ecommerce Platform",
    category: "Group Project",
    role: "Frontend Developer, Software QA Engineer",
    description:
      "A web application for a pizza shop supporting ordering, payments, order tracking, profile management, and reviews. Contributed to front-end development and quality assurance, including the CI/CD pipeline and automated testing.",
    techStack: ["React JS", "ASP.NET Core", "MS SQL", "Docker", "CI/CD", "Selenium"],
  },
  {
    slug: "fuel-price-prediction",
    title: "Fuel Price Prediction Dashboard",
    category: "Individual Project · Machine Learning",
    description:
      "A machine learning model predicting commonly used fuel prices in Sri Lanka, covering data preprocessing, feature engineering, and classification.",
    techStack: ["Python", "Pandas", "Scikit-learn"],
  },
  {
    slug: "travel-recommendation-expert-system",
    title: "Travel Recommendation Expert System",
    category: "Individual Project",
    description:
      "A rule-based expert system recommending travel destinations via logical inference, with a Prolog knowledge base blended into a Python GUI — including best-season prediction and cheapest-destination finding.",
    techStack: ["Python", "Prolog (SWI-Prolog)", "Tkinter"],
  },
];

export type Achievement = {
  title: string;
  note: string;
};

export const achievements: Achievement[] = [
  { title: "CyberZee'24 — Top 6", note: "Inter-university quiz competition, University of Kelaniya" },
  { title: "MoraXtreme8.0 2023 — Top 75", note: "Inter-university coding competition, IEEE Student Branch of UoM" },
  { title: "Code Rush 2023", note: "Intra-Faculty Coding Competition — Participant" },
  { title: "RealHack 5.0", note: "Inter-university coding competition, University of Kelaniya — Participant" },
  { title: "ACES Coders V11.0 2024", note: "Inter-university coding competition, University of Peradeniya — Participant" },
];

export const involvements: Achievement[] = [
  { title: "IEEE Women In Engineering Affinity Group of UoM", note: "Chief Organizer (Term 24/25), Marketing Committee Lead" },
  { title: "IEEE Power & Energy Society Chapter of UoM", note: "WebMaster (Term 24/25)" },
  { title: "IEEE Student Branch of UoM", note: "Publicity Committee Member — Rise Up Mora 2023" },
  { title: "Mathematics Society of UoM", note: "Publicity Committee Member — ENIGMA 2024" },
  { title: "Leo Club of UoM", note: "Member" },
];

export type BlogPost = {
  title: string;
  date: string;
  url: string;
  excerpt: string;
  cover: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "Socket.io",
    date: "July 6, 2024",
    url: "https://medium.com/@lahimalshi/socket-io-b7ccb936139a",
    excerpt: "Socket.io is a library that enables real-time, bidirectional, and event-based communication between web clients and servers.",
    cover: "blog-socketio",
  },
  {
    title: "Introduction to Enterprise Application Development",
    date: "September 10, 2024",
    url: "https://medium.com/@ieeewieuom/introduction-to-enterprise-application-development-26a31c02b168",
    excerpt: "An enterprise application is a large-scale software system designed to meet the complex needs of an organization or enterprise.",
    cover: "blog-enterprise",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const emailjs = {
  publicKey: "gmnuYL6CE41ASBjn8",
  serviceId: "service_fb0tuew",
  templateId: "template_0xeaiau",
};
