export const personalInfo = {
  name: "Jaimon A A",
  role: "MERN Stack Developer",
  tagline: "I build apps from the screen to the server.",
  subtagline: "Jaimon A A, a MERN stack developer.",
  projectsSubtitle: "Full-stack and frontend applications I designed, built, and deployed.",
  contactSub: "I’m open to full-stack developer roles. Find me here.",
  footerText: "Designed and built by Jaimon A A with React."
};

export const socialLinks = {
  github: "https://github.com/jaimon-dev",
  linkedin: "https://www.linkedin.com/in/jaimon-dev",
  leetcode: "https://leetcode.com/u/jaimon1023/"
};

export const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "LeetCode", href: socialLinks.leetcode, external: true },
  { label: "Contact", href: "#contact" }
];

// The layers of web apps with the skills used in each
export const layers = [
  {
    id: "front",
    title: "Frontend",
    where: "What the user sees",
    skills: ["React.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Bootstrap"]
  },
  {
    id: "back",
    title: "Backend",
    where: "The brain of the app",
    skills: ["Node.js", "Express.js", "REST APIs", "MVC Architecture", "SQL"]
  },
  {
    id: "data",
    title: "Data and Cloud",
    where: "Where things are stored",
    skills: ["MongoDB", "Firebase Auth", "Firebase Storage", "Google OAuth 2.0", "AWS"]
  },
  {
    id: "tools",
    title: "Tools",
    where: "How I work",
    skills: ["Git", "GitHub", "LeetCode (DSA)", "Problem Solving", "Data Structures & Algorithms"]
  }
];

export const projectCategories = ["All", "Full Stack", "Frontend", "Backend"];

export const projects = [
  {
    id: "laptique",
    name: "Laptique",
    category: "Full Stack",
    kind: "Full-stack e-commerce platform",
    when: "Nov 2025 – Jan 2026",
    points: [
      "Built with Node.js, Express.js and MongoDB using the MVC architectural pattern.",
      "Google OAuth 2.0 login, session-based authentication and role-based access control.",
      "Razorpay payments integration plus a custom digital wallet with instant refund support.",
      "Cart, wishlist, multi-criteria product filters, coupon management and admin dashboard. Deployed on AWS."
    ],
    tags: ["Node.js", "Express.js", "MongoDB", "AWS", "Razorpay"],
    repo: "https://github.com/jaimon-dev/laptique_laptopselling_plateform",
    demo: null,
    featured: true
  },
  {
    id: "netflix-clone",
    name: "Netflix Clone",
    category: "Frontend",
    kind: "Movie browsing application",
    when: "React project",
    points: [
      "A Netflix-inspired interface for discovering, searching, and viewing movies.",
      "Live movie metadata fetched asynchronously from the TMDB REST API.",
      "Firebase Authentication for user login/registration and Firebase Storage for user media assets."
    ],
    tags: ["React.js", "TMDB API", "Firebase", "CSS3"],
    repo: "https://github.com/jaimon-dev/Netflix",
    demo: null,
    featured: true
  },
  {
    id: "developer-portfolio",
    name: "Developer Portfolio",
    category: "Frontend",
    kind: "Interactive portfolio & architecture showcase",
    when: "2026",
    points: [
      "Component-based portfolio built with React and Vite for blazing fast performance.",
      "Custom dark/light theme switching with system preference detection and localStorage persistence.",
      "Interactive 3-tier architecture visualization with animated flow wires and filterable project grid."
    ],
    tags: ["React.js", "Vite", "CSS3", "JavaScript"],
    repo: "https://github.com/jaimon-dev",
    demo: null,
    featured: false
  },
  {
    id: "rest-api-backend",
    name: "Task & User Management API",
    category: "Backend",
    kind: "Scalable RESTful microservice backend",
    when: "Backend project",
    points: [
      "RESTful API service with complete CRUD operations, pagination, and sorting.",
      "JWT authentication, password hashing with bcrypt, and input validation middlewares.",
      "MongoDB database modeling with Mongoose schemas and automated error handling."
    ],
    tags: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    repo: "https://github.com/jaimon-dev",
    demo: null,
    featured: false
  }
];
