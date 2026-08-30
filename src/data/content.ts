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
      "Dean's List: Level 4 Semester 2 — SGPA 3.88",
      "CGPA 3.53 / 4.0",
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
    slug: "final-year-research",
    title: "Hardware-Software Co-design of Spatial DL Hardware Accelerators",
    category: "Final Year Research · Group Project",
    description:
      "A cycle-accurate hardware-software co-design simulator for systolic-array DNN accelerators, built to address performance bottlenecks in DNN execution — a SystemVerilog RTL model paired with a Python compiler/mapper for memory management.",
    techStack: ["Python", "Verilog", "DNN Workloads", "FPGA Simulation"],
    cover: "FYP-poster",
    gallery: ["FYP-poster"],
    githubUrls: [
      { label: "Github Repository", url: "https://github.com/LahiruniMalshika/Quadramind_DNN_Accelerator" },
    ],
  },
  {
    slug: "anothershots",
    title: "Anothershots — Photography Focused Web Application",
    category: "Web Development",
    role: "Full Stack Developer",
    description: "Welcome to our dynamic platform, a haven where photographers can flourish and connect with potential clients. Here, photographers can effortlessly upload albums, opting for private or public visibility to best suit their needs. They can also market their services through personalized packages, catering to a variety of client requirements. With the ability to manage appointments directly on their profiles, our platform ensures a seamless booking experience. For our users, the journey to discover exceptional talent is just a click away. Explore an extensive collection of portfolios to find your ideal photographer. Book with confidence, knowing you can see real-time availability and secure your session directly through the photographer’s profile. We stand firm in our commitment to inclusivity, welcoming photographers irrespective of their financial status. I implemented the Featured Photo, Contact, and Packages sections of the photographer profile, plus the Booking flow and Admin Dashboard, applying clean architecture and design patterns.",
    techStack: ["Next JS", "TypeScript", "Tailwind CSS", "Nest JS", "Prisma ORM", "MongoDB"],
    githubUrls: [
      { label: "Frontend Repository", url: "https://github.com/NerdLabs-UoM/anothershot-frontend" },
      { label: "Backend Repository", url: "https://github.com/NerdLabs-UoM/anothershot-backend" },
    ],
    cover: "anothershots-1",
    gallery: ["anothershots-1", "anothershots-2", "anothershots-3", "anothershots-4", "anothershots-5", "anothershots-6", "anothershots-7"],
  },
  {
    slug: "mozzamelt",
    title: "MozzaMelt — Ecommerce Platform",
    category: "Group Project",
    role: "Frontend Developer, Software QA Engineer",
    description:
      "A web application for a pizza shop supporting ordering, payments, order tracking, profile management, and reviews. Contributed to front-end development and quality assurance, including the CI/CD pipeline and automated testing.",
    techStack: ["React JS", "ASP.NET Core", "MS SQL", "Docker", "CI/CD", "Selenium"],
    cover: "mozzamelt",
    gallery: ["mozzamelt", "mozzamelt-2"],
    githubUrls: [
      { label: "Frontend Repository", url: "https://github.com/LahiruniMalshika/EcommerceSystemFrontend" },
      { label: "Backend Repository", url: "https://github.com/LahiruniMalshika/EcommerceSystemBackend" },
    ],
  },
  {
    slug: "wall-art-machine",
    title: "Multi-Colour Wall Art Machine",
    category: "Hardware Project",
    description:
      "With great delight, I, as a member of this exceptional team, along with my talented other group members Mr.Supun Jayathilaka, Mr.Mohomed Arkam, Mr.Dilshan Lakshitha, and Miss.Chamodi Liyanage, take immense pride in leading this groundbreaking project. Life is not all about working, earning, and studying. Life is meant to be beautiful. As human beings, we need a balanced life between career, family, friends, and other social events. To maintain a balanced lifestyle we need to have some art side in our lives. According to studies lot of mental problems can be reduced by art and entertainment Wall art is something more important than photo albums or standing frames. As human beings, we are intimately connected to the art. In modern society, all are engaged with technology. So, depression, stress, and many other problems are increasing. Art can balance our lives by giving us pleasure, also it can be a mood fixer. Whether we have a stash of original art or photo albums, you have to eventually go and look for them. Making your precious photographs into wall art is the best way to get your art visible in your home or office or wherever you want. Wall art is the new revolution in the world of printing technology. Printing is no longer limited to a small surface. The designed wall art system can make your precious images into wall art in 1m * 1m diamensions. So people will no longer need to spend their money on each and every image that they think good for wall art. This developed system can make lives colorful and fun. The designed system can create the image on the wall using different colors. We have developed this system that will create the image on a wall that will be input through a computer. The height and width are should enter and the art or design is painted in the wall by spraying the ink by nozzles. The machine runs on 2 tracks powered by 2 stepper motors. This machine can used for fabric art and posters also. So we are willing to develop this machine to make it smoother to make more complex artwork.",
    techStack: ["Embedded Systems", "Stepper Motors", "Image Processing"],
    cover: "wall-art-1",
    gallery: ["wall-art-1", "wall-art-2", "wall-art-3"],
  },
  {
    slug: "fuel-price-prediction",
    title: "Fuel Price Prediction Dashboard",
    category: "Individual Project · Machine Learning",
    description:
      "A machine learning model predicting commonly used fuel prices in Sri Lanka, covering data preprocessing, feature engineering, and classification.",
    techStack: ["Python", "Pandas", "Scikit-learn"],
    githubUrls: [
      { label: "Github Repository", url: "https://github.com/LahiruniMalshika/FuelPricePredictionDashboard_MLModel" },
    ],
    cover: "fuel-prediction-02",
    gallery: ["fuel-prediction-01", "fuel-prediction-02", "fuel-prediction-03", "fuel-prediction-04"],

  },
  {
    slug: "travel-recommendation-expert-system",
    title: "Travel Recommendation Expert System",
    category: "Individual Project",
    description:
      "Designed and implemented a rule-based expert system that mimics human travel planning expertise using logical reasoning and inference. Developed a Prolog knowledge base containing destination facts and rules, and integrated it with a Python GUI (Tkinter + PySWIP) to create an interactive application. Features include: Intelligent destination recommendation,Best season prediction, Cheapest destination finder by continent, Rule-based decision support. This project demonstrates skills in Artificial Intelligence, Knowledge Representation, Expert Systems, Logic Programming, and Full-stack Integration.",
    techStack: ["Python", "Prolog (SWI-Prolog)", "Tkinter"],
    cover: "travel-recommendation",
    gallery: ["travel-recommendation"],
    githubUrls: [
      { label: "Github Repository", url: "https://github.com/LahiruniMalshika/ExpertSystem-TravelAdvisor" },
    ],
  },
  {
    slug: "studyBuddy",
    title: "StudyBuddy - Online Book Platform",
    category: "Web Development",
    role: "Full Stack Developer",
    description: "This mobile application provides a seamless platform for users to check the availability of books online. The app allows users to quickly sign up or sign in to access the home page, where they can explore books.",
    techStack: ["React Native", "TypeScript"],
    githubUrls: [
      { label: "Github Repository", url: "https://github.com/LahiruniMalshika/StudyBuddy" },
    ],
    cover: "studyBuddy-signIn",
    gallery: ["studyBuddy-signIn", "studyBuddy-signUp", "studyBuddy-home"],
  },
  {
    slug: "image-search",
    title: "Image Search Application",
    category: "Web Application",
    description:
      "I developed a streamlined image-search application that enables users to search for images by entering relevant keywords. The application leverages a user-friendly interface where users can input text-based queries, and the system retrieves and displays corresponding images.",
    techStack: ["React JS", "Tailwind CSS", "Unsplash API"],
    cover: "image-search",
    gallery: ["image-search"],
    githubUrls: [
      { label: "Github Repository", url: "https://github.com/LahiruniMalshika/Image-Search-Engine" },
    ],
    liveUrl: "https://image-search-eapp.vercel.app/",
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
