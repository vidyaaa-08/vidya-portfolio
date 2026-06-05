export const portfolioData = {
  personal: {
    name: "Vidya Nanaware",
    title: "Python Developer | Full Stack Developer | Web Developer",
    subtitle: "BCA Student & Python Enthusiast",
    description: "I am a passionate BCA student specializing in Python development, Full Stack Development, Web Development, Django, AWS, and modern web technologies. I enjoy building responsive frontends and secure, performant backends.",
    email: "nanaware406@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    resumeUrl: "#",
    typedStrings: [
      "Python Developer",
      "Full Stack Developer",
      "Django Developer",
      "Web Developer"
    ]
  },
  stats: [
    { label: "Completed Projects", value: 4, prefix: "", suffix: "" },
    { label: "Skills Mastered", value: 13, prefix: "", suffix: "+" },
    { label: "Git Repositories", value: 12, prefix: "", suffix: "" },
    { label: "Happy Collaborators", value: 100, prefix: "", suffix: "%" }
  ],
  skills: {
    languages: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
    
    ],
    frontend: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Bootstrap", level: 88 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Responsive Design", level: 92 }
    ],
    backend: [
      { name: "Django", level: 88 },
      { name: "REST APIs", level: 85 }
    ],
    database: [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 78 },
      { name: "SQLite", level: 82 }
    ],
    devops: [
      { name: "AWS", level: 75 },
      { name: "GitHub", level: 90 }
    ]
  },
  projects: [
    {
      id: 1,
      title: "QuickNest",
      description: "A dynamic real-estate property search and booking portal enabling users to list, search, and rent accommodation, integrated with a Django REST API backend and SQLite/MySQL database.",
      category: "Backend",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80",
      tags: ["Python", "Django", "React.js", "MySQL", "REST APIs"],
      liveLink: "#",
      githubLink: "https://github.com"
    },
    {
      id: 2,
      title: "Sanskriti Jewelry Website",
      description: "An elegant, responsive showcase web application for traditional jewelry designs, featuring a modular product catalog, detailed filter controls, and glassmorphic frontend styling.",
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80",
      tags: ["React.js", "Tailwind CSS", "Framer Motion", "Responsive Design"],
      liveLink: "#",
      githubLink: "https://github.com"
    },
    {
      id: 3,
      title: "RamDev Group Website",
      description: "A professional corporate website created for an enterprise business group, demonstrating responsive layout styling, service breakdowns, contact triggers, and testimonial elements.",
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
      tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "Responsive Design"],
      liveLink: "https://ramdevgroupindia.com/",
      githubLink: "https://github.com"
    },
    {
      id: 4,
      title: "shopify handle",
      description: "A webhook integration pipeline and analytics developer board designed for Shopify stores, written in Django to automate product synchronization and track logs in real time.",
      category: "Cloud / DevOps",
      image: "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?auto=format&fit=crop&w=600&q=80",
      tags: ["Python", "Django", "AWS", "Shopify API", "GitHub"],
      liveLink: "#",
      githubLink: "https://github.com"
    }
  ],
  experience: [
    {
      id: 1,
      period: "2024 - Present",
      role: "BCA Student & Web Developer",
      company: "Tech Institution",
      description: "Focusing on Python, Django, database designs, and modern responsive layouts. Developed academic full-stack systems and automated Shopify inventory tools."
    },
    {
      id: 2,
      period: "2023 - 2024",
      role: "Open Source Contributor",
      company: "GitHub Community",
      description: "Contributed to python-centric backends and REST API tools. Styled client layouts in Bootstrap and Tailwind CSS and managed cloud deployment cycles."
    }
  ],
  testimonials: [
    {
      id: 1,
      name: "Sanskriti Admin",
      role: "Creative Owner, Sanskriti Jewelers",
      quote: "Vidya delivered a breathtaking visual catalog for Sanskriti. The layout is beautiful, scrolls fluidly on mobile, and highlights our traditional jewelry collections perfectly.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      id: 2,
      name: "RamDev Project Lead",
      role: "Director, RamDev Group",
      quote: "The business showcase Vidya built matches all corporate specs. It compiles fast, structures our group services, and functions perfectly across all screens.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
    }
  ]
};
