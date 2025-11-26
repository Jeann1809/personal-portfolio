export const projects = [
    {
        id: 7,
        period: "October 2025",
        title: "AGENTIFY WEB — Multi-Agent AI Website Generation Platform",
        description: "Developed an AI-powered full-stack platform that generates and deploys complete React websites from natural language descriptions using a multi-agent architecture.",
        techStack: [
            "Next.js",
            "Node.js",
            "DigitalOcean AI Agents API",
            "GitHub API",
            "TailwindCSS",
            "NextAuth.js"
        ],
        features: [
            "Multi-agent system coordinating code generation, project setup, and deployment",
            "Real-time dashboard with live website preview and status feedback",
            "Automated GitHub repository creation and cloud deployment via DigitalOcean App Platform",
            "Secure authentication using GitHub OAuth through NextAuth.js",
            "Error handling, progress states, and retry mechanisms for reliable generation"
        ],
        achievements: [
            "🏆 Won prize at HackTX 2025 (UT Austin) for AI innovation and automation",
            "Reduced website creation time from hours to minutes using AI automation",
            "Successfully deployed multiple websites with one-click deployment pipeline"
        ],
        images: [
            "https://i.imgur.com/2gkxPJS.jpeg",
            "https://i.imgur.com/SUg1Xe9.png",
            "https://i.imgur.com/3go80v1.png",
            "https://i.imgur.com/C6Q7j9u.png",
            "https://i.imgur.com/GGpyF7o.png",
            "https://i.imgur.com/7Nsh0yb.png"
        ],
        github: "https://github.com/HackTX-project2025/Project-frontend",
        videoDemo: "https://www.youtube.com/watch?v=EeUhtGfgEBQ",
        category: "AI/ML"
    },
    {
        id: 6,
        period: "September 2025",
        title: "Real-Time Multilingual Chat Platform",
        description: "Developed a full-stack real-time chat application with AI-powered translation and message encryption. Built with Next.js frontend and Node.js backend, featuring Google Gemini AI integration for seamless multi-language communication and AES-256-CBC encryption for secure messaging.",
        techStack: [
            "Next.js 14",
            "React 18",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "Socket.IO",
            "Google Gemini AI",
            "JWT Authentication",
            "AES-256-CBC Encryption",
            "Tailwind CSS",
            "shadcn/ui",
            "bcryptjs"
        ],
        features: [
            "Real-time messaging with Socket.IO integration",
            "AI-powered translation using Google Gemini API supporting 12+ languages",
            "AES-256-CBC message encryption for secure communication",
            "Multi-step user registration with native language selection",
            "JWT-based authentication with secure password hashing",
            "Responsive three-column chat interface design",
            "Chat management (create, delete, list conversations)",
            "Message history with pagination and infinite scroll",
            "Modern UI with dark mode support using shadcn/ui components",
            "RESTful API with comprehensive error handling"
        ],
        achievements: [
            "Implemented secure end-to-end message encryption using Node.js crypto module",
            "Integrated Google Gemini AI for real-time translation across multiple languages",
            "Built scalable real-time architecture with Socket.IO for instant messaging",
        ],
        images: [
            "https://i.imgur.com/yFhA64M.png",
            "https://i.imgur.com/oxbZKF2.png",
            "https://i.imgur.com/q4tM7Qo.png",
            "https://i.imgur.com/nBHDQgE.png"
        ],
        githubFrontend: "https://github.com/Jeann1809/AnyTongueFrontend",
        githubBackend: "https://github.com/MEMOMG8/AnyTongueBackEnd",
        category: "Web Development"
    },
    {
        id: 5,
        title: "Reinforcement Learning Snake Game",
        period: "January 2025 - Present",
        description: "Developed a Deep Q-Learning AI agent that learns to play Snake through trial and error. Implemented a neural network using PyTorch to approximate Q-values, with real-time visualization and experience replay for efficient learning.",
        techStack: ["Python", "PyTorch", "Pygame", "Matplotlib", "NumPy", "Deep Q-Learning", "Neural Networks", "Reinforcement Learning", "Experience Replay", "Epsilon-Greedy Strategy"],
        features: [
            "Deep Q-Learning algorithm with neural network approximation",
            "Real-time game visualization with clean UI design",
            "11-dimensional state representation for game perception",
            "Experience replay buffer for efficient learning",
            "Epsilon-greedy exploration strategy",
            "Automatic model saving for best performance",
            "Real-time training progress visualization"
        ],
        achievements: [
            "Agent learns to achieve scores of 15-30+ after 200+ games",
            "Balanced exploration vs exploitation with epsilon-greedy strategy",
        ],
        images: [
            "https://i.imgur.com/rlfosHp.png"
        ],
        github: "https://github.com/Jeann1809/reinforcement-learning-snake",
        category: "AI/ML"
    },
    {
        id: 1,
        period: "January 2025 - Present",
        title: "Full-Stack E-Commerce Frontend",
        description: "Developed a responsive, production-ready e-commerce frontend using Next.js and React, integrating with the backend API for full functionality.",
        techStack: ["Next.js", "React", "RESTful API", "JWT authentication", "Stripe"],
        features: [
            "Product catalog with search, filters, and pagination",
            "Shopping cart & checkout system",
            "Admin dashboard for inventory management and order tracking",
            "Responsive design for mobile and desktop",
            "Optimized for performance and SEO"
        ],
        achievements: [
            "Optimized frontend bundle and API caching for faster load",
            "Improved page load performance",
            "Enabled seamless real-time interaction with backend"
        ],
        images: [
            "https://i.imgur.com/0s7ZIka.png",
            "https://i.imgur.com/kkX2iPW.png",
            "https://i.imgur.com/1iZDd0t.png",
            "https://i.imgur.com/MUPCzyC.png",
            'https://i.imgur.com/Yt2A0i1.png',
            "https://i.imgur.com/PBxCWfn.png"
        ],
        github: "https://github.com/Jeann1809/crochet-frontend",
        visitPage: "https://www.marimarcrochet.com",
        category: "Web Development"
    },
    {
        id: 2,
        title: "Full-Stack E-Commerce Backend",
        period: "January 2025 - Present",
        description: "Built a RESTful API with Node.js and Express to handle all e-commerce operations, including products, users, carts, orders, and admin functionalities.",
        techStack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT authentication", "Stripe"],
        features: [
            "Role-based access control (Admin / Customer)",
            "CRUD operations for products and users",
            "Cart management and order processing",
            "Admin dashboard API endpoints for inventory and order tracking",
            "Secure authentication and authorization for different user roles"
        ],
        achievements: [
            "Successfully supported 20+ live sales",
            "Implemented caching and optimized database queries for better performance",
            "Secure authentication and authorization for different user roles"
        ],
        images: [
            'https://i.imgur.com/7KBo7Xk.png',
            'https://i.imgur.com/qzeGr5Q.png',
        ],
        github: "https://github.com/Jeann1809/crochet-ecommerce-backend",
        category: "Backend"
    },
    {
        id: 8,
        title: "Lexical & Syntax Analyzer",
        period: "2024",
        description: "Designed and implemented a lexical analyzer and syntax parser in C++ to process source code, identify tokens, and validate grammatical structure based on formal language rules.",
        techStack: ["C++", "Formal Language Theory", "Compiler Design"],
        features: [
            "Tokenization of source code",
            "Syntax validation using production rules",
            "Error detection and reporting"
        ],
        achievements: [
            "Demonstrated strong understanding of compiler theory",
            "Efficiently processed complex input files"
        ],
        images: [], // Placeholder or need to ask user if they have images, but for now empty
        category: "Systems Programming"
    },
    {
        id: 3,
        title: 'Wine Quality Prediction',
        period: 'December 2023 - January 2024',
        description: 'Built a machine learning model in Python to classify wine quality using chemical features. Implemented logistic regression with gradient descent, performed EDA and preprocessing, and evaluated performance with scikit-learn metrics, achieving 76% accuracy and 0.77 F1-score.',
        techStack: ['Python', 'Logistic regression', 'Pandas', 'scikit-learn', 'Matplotlib', 'EDA', 'Data preprocessing', 'Model evaluation'],
        features: [
            'Logistic regression implementation from scratch',
            'Gradient descent optimization',
            'Exploratory data analysis and visualization',
            'Data normalization and preprocessing',
            'Train/test split and cross-validation',
            'Comprehensive model evaluation metrics'
        ],
        achievements: [
            '76% accuracy on test set',
            '78% precision score',
            '0.77 F1-score'
        ],
        images: [
            'https://i.imgur.com/bt20gKP.png',
            'https://i.imgur.com/5v8L5ed.png',
            'https://i.imgur.com/yTk4U11.png',
            'https://i.imgur.com/6wd0Rbw.png',
            'https://i.imgur.com/AxPWr1Q.png',
            'https://i.imgur.com/xZP98a2.png'
        ],
        github: 'https://github.com/Jeann1809/Wine-Quality-Predictor',
        category: 'AI/ML'
    }
];

export const experience = [
    {
        id: 1,
        role: "Software Engineer Intern",
        company: "HSE Colombia",
        period: "May 2024 - July 2024",
        description: "Contributed to the company's platform by developing responsive Angular frontend features and building a Node.js/Express backend module to automate PDF-to-Excel reporting.",
        achievements: [
            "Reduced manual reporting time through automation",
            "Collaborated with team of 4+ developers in an Agile environment",
            "Delivered production-ready features using Git for version control"
        ],
        techStack: ["Angular", "Node.js", "Express.js", "Git"]
    },
    {
        id: 2,
        role: "Backend Team Member",
        company: "CodePath",
        period: "Present",
        description: "Participating in intensive software engineering training focused on backend development.",
        achievements: [
            "Building full-stack applications with industry-standard practices",
            "Mastering data structures and algorithms"
        ],
        techStack: ["Backend Development", "Data Structures", "Algorithms"]
    },
    {
        id: 3,
        role: "Mentor",
        company: "SHPE (Society of Hispanic Professional Engineers)",
        period: "Present",
        description: "Mentoring fellow students in computer science concepts and career development.",
        achievements: [
            "Guiding students through technical challenges",
            "Fostering a supportive community for Hispanic engineers"
        ],
        techStack: ["Mentorship", "Leadership", "Communication"]
    }
];

export const skills = [
    "Python", "JavaScript", "TypeScript", "C++", "Java",
    "React", "Next.js", "Node.js", "Express.js", "Angular",
    "MongoDB", "PostgreSQL", "AWS", "Git", "Docker",
    "Machine Learning", "PyTorch", "Scikit-learn"
];
