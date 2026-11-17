export const personalInfo = {
  name: "Jaimon A A",
  role: "MERN Stack Developer",
  tagline: "I build apps from the screen to the server.",
  subtagline: "Jaimon A A, MERN stack developer.",
  email: "jaimonaraikal@gmail.com",
  projectsSubtitle: "Full-stack and frontend applications I designed, built, and deployed.",
  contactSub: "I’m open to full-stack developer roles, freelance opportunities, and collaborative projects. Reach out directly via email or find me on my profiles.",
  footerText: "Designed and built by Jaimon A A with React."
};

export const socialLinks = {
  github: "https://github.com/jaimon-dev",
  linkedin: "https://www.linkedin.com/in/jaimon-dev",
  leetcode: "https://leetcode.com/u/jaimon1023/",
  email: "mailto:jaimonaraikal@gmail.com"
};

export const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Freelance", href: "#freelance" },
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
    title: "Tools & Emerging Tech",
    where: "How I work",
    skills: [
      "Agentic AI",
      "Git",
      "GitHub",
      "LeetCode (DSA)",
      "Problem Solving",
      "Data Structures & Algorithms"
    ]
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
    repo: "https://github.com/jaimon-dev/Portfolio",
    demo: null,
    featured: false
  },
  {
    id: "rest-api-backend",
    name: "User Management System",
    category: "Backend",
    kind: "Developed a user management system using TypeScript",
    when: "Backend project",
    points: [
      "Developed a user management system using TypeScript, Node.js, Express.js, and MongoDB.",
      "Implemented user authentication and session management using Express Session.",
      "Created dynamic server-rendered interfaces using EJS and Mongoose."
    ],
    tags: ["Node.js", "Express.js", "MongoDB", "ejs"],
    repo: "https://github.com/jaimon-dev/UserManagement-Typescript",
    demo: null,
    featured: false
  }
];

export const freelanceProjects = [
  {
    id: "client-landing-page",
    name: "Responsive Business Landing Page",
    badge: "Freelance Project",
    summary: "A modern, high-converting landing page built for a client business using React.js and CSS3.",
    highlights: [
      "Created a mobile-first responsive design featuring animated hero section, testimonials, and service showcases.",
      "Integrated client inquiry contact forms with instant client-side validation.",
      "Optimized asset loading, achieving sub-second load times and 95+ performance scores."
    ],
    tags: ["React.js", "CSS3", "Responsive UI", "SEO"]
  },
  {
    id: "react-mini-projects",
    name: "Interactive React Mini-Apps Suite",
    badge: "Personal Project",
    summary: "A collection of practical interactive mini-projects developed with React.js to explore state management and external API integrations.",
    highlights: [
      "Live Weather App: Fetches real-time weather and 5-day forecasts via OpenWeather REST API.",
      "Expense & Budget Tracker: Manages income/expense entries with dynamic balance calculation and localStorage persistence.",
      "Smart Task Manager: Features task prioritization, active filtering, and responsive completion toggling."
    ],
    tags: ["React.js", "JavaScript", "REST APIs", "Local Storage"]
  },
  {
    id: "ecommerce-storefront-ui",
    name: "Modern E-Commerce Storefront UI",
    badge: "Personal Project",
    summary: "A sleek frontend storefront for browsing and purchasing products built with React.",
    highlights: [
      "Dynamic catalog with multi-category filtering, live search, and sorting by price/rating.",
      "Full shopping cart state with quantity adjustments, promo code calculation, and responsive checkout drawer.",
      "Designed with custom CSS variables supporting dark and light viewing modes."
    ],
    tags: ["React.js", "E-Commerce", "State Management", "UI/UX"]
  }
];
