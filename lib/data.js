export const hero = {
  status: "Open to Summer 2027 internships",
  name: "Jean Almario",
  tagline: "Computer Science student. Full-Stack & ML/AI Engineer.",
  bio: "Computer Science student at Texas Tech University (GPA 3.9/4.0, expected May 2027), focused on full-stack development and applied machine learning. I build production systems: RAG pipelines for enterprise document search and multi-agent AI platforms. Currently an AI/ML Fellow with Break Through Tech AI (Cornell Tech), building a harmful algal bloom forecasting model with Oregon State University's Socio-Environmental Analysis Lab.",
  photo: "/Jean.jpeg",
  links: {
    github: "https://github.com/Jeann1809",
    linkedin: "https://linkedin.com/in/jeanalmario",
  },
  resume: "/resume.pdf",
}

export const stats = {
  gpa: { value: "3.9", scale: "/ 4.0", detail: "Texas Tech University, B.S. Computer Science" },
  graduation: "May 2027",
  presidentsList: ["Spring 2024", "Fall 2024", "Spring 2025", "Fall 2025"],
}

export const metrics = [
  {
    value: "82%",
    label: "RAG context precision, up from 68%",
    href: "#p-rag",
    accent: "green",
  },
  {
    value: "91%",
    label: "Answer faithfulness, up from 79%",
    href: "#p-rag",
    accent: "green",
  },
  {
    value: "90%",
    label: "ADA accessibility compliance, Rawls College site",
    href: "#experience",
    accent: "amber",
  },
  {
    value: "20+",
    label: "Real customer orders shipped on Marimar Crochet",
    href: "#p-shop",
    accent: "amber",
  },
  {
    value: "HackTX\nPrize Winner",
    label: "UT Austin, Oct 2025 — featured by MLH",
    href: "#p-agentify",
    accent: "tinted",
  },
]

export const about = {
  eyebrow: "About",
  headline: "I build systems I would actually use.",
  body: "I like building things that solve a real problem for me or for people around me. Most of my projects started that way: a small shop that needed to sell online, engineers who could not find answers in their manuals, friends who do not speak the same language. I care that it works in production, not just in a demo.",
}

export const projects = [
  {
    id: "agentify",
    slug: "p-agentify",
    layout: "feature",
    badge: "HACKTX PRIZE WINNER",
    meta: "UT AUSTIN · OCT 2025",
    title: "Multi-Agent AI Website Generation Platform",
    description:
      "A multi-agent system that generates and deploys full-stack websites from natural-language prompts. Coordinated agents handle code generation, dependency installation, and cloud deployment, with a real-time dashboard tracking agent execution and deployment status. Featured by MLH.",
    techStack: ["Next.js", "Node.js", "DigitalOcean AI Agents", "GitHub API", "OAuth / NextAuth"],
    videoDemo: "https://www.youtube.com/watch?v=EeUhtGfgEBQ",
    github: "https://github.com/HackTX-project2025/Project-frontend",
    images: [
      { src: "https://i.imgur.com/2gkxPJS.jpeg", alt: "Agentify Web dashboard" },
      { src: "https://i.imgur.com/SUg1Xe9.png", alt: "Agent execution view" },
      { src: "https://i.imgur.com/3go80v1.png", alt: "Deployment status" },
      { src: "https://i.imgur.com/C6Q7j9u.png", alt: "Generated site preview" },
      { src: "https://i.imgur.com/GGpyF7o.png", alt: "Prompt interface" },
      { src: "https://i.imgur.com/7Nsh0yb.png", alt: "Repository integration" },
    ],
  },
  {
    id: "rag",
    slug: "p-rag",
    layout: "metrics",
    meta: "HEALTH, SAFETY & ENVIRONMENT · INTERNAL TOOL",
    title: "RAG Documentation Assistant",
    description:
      "Owned the evaluation and quality layer of a production RAG assistant so field engineers can query manuals and SOPs in natural language. Built a 30-question test set and RAGAS pipeline, then tested 12 chunking and retrieval configurations.",
    techStack: ["LlamaIndex", "Azure OpenAI", "Azure AI Search", "FastAPI", "Streamlit"],
    metricsPanel: [
      { label: "Context precision", value: "82%", from: "from 68%", barPct: 82 },
      { label: "Faithfulness", value: "91%", from: "from 79%", barPct: 91 },
    ],
  },
  {
    id: "shop",
    slug: "p-shop",
    layout: "gallery-strip",
    meta: "MARIMAR CROCHET · DEC 2024 – APR 2025",
    title: "Full-Stack E-Commerce Platform",
    stat: { value: "20+", label: "real customer orders" },
    description:
      "Production platform with REST APIs for products, users, carts, and orders, plus role-based access. Admin and customer features cover product management, search, and order tracking.",
    links: [
      { label: "Live site", href: "https://www.marimarcrochet.com", primary: true },
      { label: "Frontend", href: "https://github.com/Jeann1809/crochet-frontend" },
      { label: "Backend", href: "https://github.com/Jeann1809/crochet-ecommerce-backend" },
    ],
    techStack: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    images: [
      { src: "https://i.imgur.com/0s7ZIka.png", alt: "Storefront" },
      { src: "https://i.imgur.com/kkX2iPW.png", alt: "Product catalog" },
      { src: "https://i.imgur.com/1iZDd0t.png", alt: "Product detail" },
      { src: "https://i.imgur.com/MUPCzyC.png", alt: "Cart" },
      { src: "https://i.imgur.com/Yt2A0i1.png", alt: "Order tracking" },
      { src: "https://i.imgur.com/PBxCWfn.png", alt: "Admin dashboard" },
      { src: "https://i.imgur.com/7KBo7Xk.png", alt: "Backend API" },
      { src: "https://i.imgur.com/qzeGr5Q.png", alt: "Backend data models" },
    ],
  },
  {
    id: "hab",
    slug: "p-hab",
    layout: "in-progress",
    badge: "IN PROGRESS",
    meta: "OREGON STATE CAPSTONE",
    title: "HAB Forecasting Model",
    description:
      "Co-developing a classification model to forecast harmful algal bloom risk in coastal ecosystems. Processed 11,100+ oceanographic records into an ~8,000-sample training set and engineered 20+ predictive features with a leave-future-out cross-validation pipeline.",
    validation: { label: "Validation metrics", value: "Expected November 2026" },
    github:
      "https://github.com/Break-Through-Tech/Oregon-State-University-1B-forecasting-risk-of-harmful-algal-blooms-in-coastal-marine-ecosystems",
    techStack: ["Python", "scikit-learn", "Copernicus Marine"],
  },
  {
    id: "chat",
    slug: "p-chat",
    layout: "stat-pair",
    meta: "SEPT 2025",
    title: "Real-Time Multilingual Chat Platform",
    description:
      "Real-time chat with AI translation across 12+ languages over WebSockets, secured with AES-256-CBC encryption at sub-100ms delivery.",
    techStack: ["MERN", "Socket.io", "Gemini AI", "AES-256-CBC"],
    links: [
      { label: "Frontend", href: "https://github.com/Jeann1809/AnyTongueFrontend" },
      { label: "Backend", href: "https://github.com/MEMOMG8/AnyTongueBackEnd" },
    ],
    images: [
      { src: "https://i.imgur.com/yFhA64M.png", alt: "AnyTongue chat view" },
      { src: "https://i.imgur.com/oxbZKF2.png", alt: "Live translation" },
      { src: "https://i.imgur.com/q4tM7Qo.png", alt: "Language settings" },
      { src: "https://i.imgur.com/nBHDQgE.png", alt: "Conversation list" },
    ],
    stats: [
      { value: "12+", label: "Languages" },
      { value: "<100ms", label: "Delivery" },
    ],
  },
]

export const experience = [
  {
    id: "ttu",
    company: "Texas Tech University",
    companySuffix: "— Rawls College of Business",
    period: "JAN 2026 – PRESENT",
    role: "Web Student Assistant",
    roleAccent: "green",
    tinted: false,
    achievements: [
      "Improved the Rawls College website to 90% ADA accessibility compliance (HTML, CSS, JS, CMS)",
      "Standardized content workflows, improving site usability and update turnaround",
      "Worked with non-technical stakeholders to deploy and verify production changes",
    ],
  },
  {
    id: "hse",
    company: "Health, Safety & Environment",
    companySuffix: "",
    period: "JUN – AUG 2025",
    role: "Software Engineer Intern, Machine Learning",
    roleAccent: "green",
    tinted: false,
    achievements: [
      "Owned the evaluation and quality layer of a production RAG system (LlamaIndex, Azure OpenAI, Azure AI Search)",
      "Built a 30-question test set and RAGAS pipeline to score faithfulness and context precision/recall",
      "Tested 12 chunking/retrieval configurations, raising context precision from 68% to 82% and faithfulness from 79% to 91%",
    ],
  },
  {
    id: "btt",
    company: "Break Through Tech AI",
    companySuffix: "— Cornell Tech",
    period: "MAY 2026 – PRESENT",
    role: "AI/ML Fellow",
    roleAccent: "amber",
    tinted: true,
    achievements: [
      "Selected for a 1-year competitive fellowship pairing a Cornell-certified ML curriculum with an industry-partnered capstone",
      "Completed Machine Learning Foundations (Cornell Tech): ML lifecycle, supervised learning, neural networks, LLMs",
    ],
  },
  {
    id: "osu",
    company: "Oregon State University",
    companySuffix: "— Socio-Environmental Analysis Lab",
    period: "SEP 2026 – PRESENT",
    role: "Capstone Researcher, BTT AI Studio",
    roleAccent: "amber",
    tinted: true,
    achievements: [
      "Co-developing a classification model to forecast harmful algal bloom risk in coastal ecosystems",
      "Processed 11,100+ oceanographic records into an ~8,000-sample training set from Copernicus Marine data",
      "Engineered 20+ predictive features; built a leave-future-out cross-validation pipeline",
    ],
  },
]

export const skillGroups = [
  {
    category: "Languages",
    skills: ["Go", "Python", "JavaScript / TypeScript", "Java", "C", "SQL"],
  },
  {
    category: "AI / ML",
    skills: [
      "PyTorch",
      "scikit-learn",
      "Random Forest",
      "SMOTE",
      "LLMs",
      "RAG (LlamaIndex, RAGAS)",
      "Multi-Agent Systems",
    ],
  },
  {
    category: "Backend & Frontend",
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "React", "Next.js", "PostgreSQL", "JWT", "Angular"],
  },
  {
    category: "Cloud, DevOps & Tools",
    skills: ["Docker", "AWS", "Azure (OpenAI, AI Search, App Service)", "CI/CD (GitHub Actions, Azure DevOps)", "Linux", "Git"],
  },
]

export const contact = {
  eyebrow: "Contact",
  headline: "Let's build something measurable.",
  links: [
    { label: "email", value: "jalmario@ttu.edu", href: "mailto:jalmario@ttu.edu" },
    { label: "phone", value: "806-559-8812", href: "tel:8065598812" },
    { label: "linkedin", value: "in/jeanalmario", href: "https://linkedin.com/in/jeanalmario" },
    { label: "github", value: "Jeann1809", href: "https://github.com/Jeann1809" },
  ],
}

export const footer = {
  copyright: "Jean Almario © 2026",
  location: "Lubbock, TX",
}
