# Jaimon A A – Developer Portfolio

A modern, fast, and structured React portfolio built with Vite. It features a responsive layout, dark/light theme switching, interactive architecture diagrams, tabbed skill layers, and direct links to GitHub, LinkedIn, and LeetCode.

---

## 📁 Project Structure

```text
portfolio/
├── index.html                 # Main HTML entry with Google fonts & metadata
├── package.json               # Dependencies and build scripts
├── vite.config.js             # Vite configuration
├── .gitignore                 # Standard git ignore rules
├── public/                    # Static assets
└── src/
    ├── main.jsx               # React DOM root entry point
    ├── App.jsx                # Application wrapper with ThemeProvider
    ├── context/
    │   └── ThemeContext.jsx   # Theme state (Dark/Light) with localStorage persistence
    ├── pages/
    │   └── HomePage.jsx       # Main single-page portfolio layout
    ├── components/
    │   ├── common/
    │   │   ├── Button.jsx         # Reusable button / link component
    │   │   └── SectionHeader.jsx  # Reusable section title & subtitle
    │   ├── layout/
    │   │   ├── Navbar.jsx         # Header navigation bar + logo + theme toggle
    │   │   └── Footer.jsx         # Portfolio footer
    │   └── sections/
    │       ├── Hero.jsx           # Hero headline, bio, CTA buttons
    │       ├── ArchitectureDiagram.jsx # Interactive 3-layer architecture visualizer
    │       ├── SkillsSection.jsx  # Interactive skills tabs & chip cloud
    │       ├── ProjectsSection.jsx # Project cards (Laptique, Netflix Clone, etc.)
    │       └── ContactSection.jsx # Contact links (LinkedIn, GitHub, LeetCode)
    ├── data/
    │   └── portfolioData.js   # Centralized data store (Easy to update!)
    └── styles/
        └── index.css          # Design system, CSS variables & responsive layout
```

---

## 🛠️ How to Maintain & Update Content

All content has been decoupled from the JSX templates into **`src/data/portfolioData.js`**. You don't need to touch component code to add new content:

### 1. Update Social & Profile Links
Open `src/data/portfolioData.js`:
- **LeetCode**: `socialLinks.leetcode` (`https://leetcode.com/u/jaimon1023/`)
- **GitHub**: `socialLinks.github` (`https://github.com/jaimon-dev`)
- **LinkedIn**: `socialLinks.linkedin` (`https://www.linkedin.com/in/jaimon-dev`)

### 2. Add or Edit Projects
Add a new object to the `projects` array in `src/data/portfolioData.js`:
```js
{
  id: "project-slug",
  name: "New Project Name",
  category: "Full Stack", // e.g. "Full Stack", "Frontend", "Backend" (auto-creates filter tabs!)
  kind: "Project category / short summary",
  when: "Date / Duration",
  points: [
    "Key achievement or architecture detail",
    "Authentication or backend stack detail",
    "Special features and deployment"
  ],
  tags: ["React.js", "Node.js", "MongoDB"],
  repo: "https://github.com/jaimon-dev/your-repo",
  demo: "https://your-live-demo.com" // optional
}
```

> **Note on Adding Projects**: The project grid is fully responsive and automatically organizes your projects. Category filter tabs, project counts, search indexing, and tech tag filters adapt automatically without touching any component code!

### 3. Add or Edit Skills & Layers
Modify the `layers` array in `src/data/portfolioData.js` to add tools or adjust categories:
```js
{
  id: "tools",
  title: "Tools",
  where: "How I work",
  skills: ["Git", "GitHub", "LeetCode (DSA)", "Problem Solving"]
}
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the port shown in your terminal).

### 3. Build for Production
```bash
npm run build
```
The compiled, optimized production files will be placed in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

