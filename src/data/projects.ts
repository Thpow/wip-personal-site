export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'sas' | 'machine-learning' | 'longevity' | 'genai' | 'app' | 'other';
  technologies: string[];
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  architecture?: {
    diagram: string;
    description: string;
  };
  features: string[];
  challenges: string[];
  outcomes: string[];
}

export const projects: Project[] = [
  {
    id: "ciqe-devcontainers",
    title: "CIQE Development Containers",
    description: "Containerization of repos and projects with the CI360 team allowing for normalization of testing and development environments across teams",
    category: "sas",
    technologies: ["Docker", "DevContainers", "AWS", "Git", "Kubernetes", "Helm", "Docker Compose"],
    images: [
      "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop"
    ],
    features: [
      "Immediate productivity when working with repos and projects",
      "Automated project-specific setup for all requirements",
      "Internal features handle AWS and Git authentication",
      "Automatic installation of packages including auth",
      "Security automated and connectivity to private resources",
      "Templates with complex setup baked in for teammates"
    ],
    challenges: [
      "Creating universal devcontainer templates",
      "Handling authentication across multiple services",
      "Ensuring security compliance in containers",
      "Managing versioning and updates across teams"
    ],
    outcomes: [
      "90% reduction in environment setup time",
      "Standardized development environments",
      "Zero manual configuration required",
      "Adopted across multiple teams"
    ]
  },
  {
    id: "qegrid-selenium",
    title: "QEGRID: Selenium Grid",
    description: "Enterprise-scale Selenium Grid deployment allowing browsers of selenium tests to run inside an internally deployed grid for better resource management",
    category: "sas",
    technologies: ["Selenium", "Docker", "Kubernetes", "Python", "Java", "AWS"],
    images: [
      "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop"
    ],
    features: [
      "Resource connectivity and efficient handling",
      "Run tests quicker with parallel execution",
      "Normalization of browser versions",
      "Standardized test runners across teams",
      "Centralized test execution management",
      "Scalable infrastructure for concurrent tests"
    ],
    challenges: [
      "Managing browser compatibility across versions",
      "Optimizing resource allocation for parallel tests",
      "Ensuring network connectivity for internal resources",
      "Scaling to handle peak test loads"
    ],
    outcomes: [
      "70% faster test execution",
      "Support for 100+ concurrent tests",
      "Unified browser testing platform",
      "Reduced infrastructure costs"
    ]
  },
  {
    id: "splitstation-webapp",
    title: "SplitStation: Internal Webapp Tool",
    description: "Full-stack web application for controlling production deployment segments with complete pipeline, authentication, and tracking capabilities",
    category: "sas",
    technologies: ["Flask", "Python", "HTML/CSS/JS", "Docker", "AWS", "Azure", "CloudFormation", "Split.io"],
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    ],
    features: [
      "Control production deployment segments",
      "Advanced permission management system",
      "Change tracking and audit logs",
      "Custom interaction workflows",
      "Full authentication and authorization",
      "Real-time segment updates"
    ],
    challenges: [
      "Building secure authentication from scratch",
      "Implementing complex permission hierarchies",
      "Ensuring production safety with segment controls",
      "Creating intuitive UI for complex operations"
    ],
    outcomes: [
      "100% adoption by QA team",
      "Zero production incidents",
      "50% faster segment management",
      "Complete audit trail compliance"
    ]
  },
  {
    id: "ci360-cli-tool",
    title: "CI360: Command Line Tool",
    description: "Enterprise CLI tool for interaction with internal APIs, featuring automatic proxying and simplified complex operations",
    category: "sas",
    technologies: ["Python", "Click", "REST APIs", "Docker", "AWS", "Internal APIs"],
    images: [
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop"
    ],
    features: [
      "Simplified interaction with complex internal APIs",
      "Automatic proxying and authentication",
      "Single command for complex operations",
      "Pipeline deployment and distribution",
      "Create customer identity with one command",
      "Comprehensive error handling and logging"
    ],
    challenges: [
      "Abstracting complex API logic",
      "Handling various authentication methods",
      "Creating intuitive command structure",
      "Ensuring cross-platform compatibility"
    ],
    outcomes: [
      "80% reduction in API interaction time",
      "Adopted by 50+ developers",
      "Eliminated manual API configuration",
      "Standardized API interactions"
    ]
  },
  {
    id: "spotify-playlist-builder",
    title: "Spotify Playlist Builder",
    description: "Award-winning web application for building Spotify playlists with swipe-based interface, developed at UNC Charlotte AxeHack",
    category: "other",
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Spotify API"],
    images: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&h=600&fit=crop"
    ],
    features: [
      "Swipe-based song selection interface",
      "Real-time playlist building",
      "Spotify API integration",
      "Responsive web design",
      "User authentication with Spotify",
      "Playlist export functionality"
    ],
    challenges: [
      "Implementing swipe gestures in web",
      "Managing Spotify API rate limits",
      "Creating engaging user interface",
      "Handling real-time updates"
    ],
    outcomes: [
      "Second Place at AxeHack",
      "Golden Hack Award winner",
      "Built in 24-hour hackathon",
      "Innovative UI/UX design"
    ]
  },
  {
    id: "qa-automation-suite",
    title: "QA Infrastructure & Automation",
    description: "Comprehensive suite of automation tools, web apps, and cloud infrastructure to enable quality assurance across CI360 platform",
    category: "sas",
    technologies: ["Python", "AWS", "Terraform", "Docker", "Kubernetes", "GitHub Actions", "S3"],
    images: [
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop"
    ],
    features: [
      "Automated test archiving to S3",
      "GitHub Actions integration",
      "Terraform and Helm deployments",
      "Automatic tenant permissions management",
      "Test results visualization webapp",
      "Complete CI/CD pipeline automation"
    ],
    challenges: [
      "Orchestrating complex deployment workflows",
      "Managing multi-cloud resources",
      "Ensuring test isolation and reproducibility",
      "Scaling infrastructure based on demand"
    ],
    outcomes: [
      "95% test automation coverage",
      "60% reduction in QA cycle time",
      "Zero manual deployment steps",
      "Complete test history retention"
    ]
  },
  // App Projects
  {
    id: "paper-trading-app",
    title: "Paper Trading Competition App",
    description: "Mobile application for simulated stock trading competitions, deployed to the App Store. Users compete in real-time paper trading with live market data.",
    category: "app",
    technologies: ["Swift", "Python", "REST APIs", "Market Data APIs", "App Store", "Mobile Development"],
    images: [
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=600&fit=crop"
    ],
    features: [
      "Real-time paper trading with live market data",
      "Competition leaderboards and rankings",
      "Portfolio tracking and performance analytics",
      "User authentication and profile management",
      "Push notifications for trade alerts",
      "Historical performance charting"
    ],
    challenges: [
      "Real-time market data integration",
      "App Store review and deployment process",
      "Handling concurrent trading operations",
      "Building responsive mobile UI"
    ],
    outcomes: [
      "Deployed to App Store",
      "Real-time market data",
      "Competition platform",
      "Full mobile experience"
    ]
  },
  // GenAI Projects
  {
    id: "genai-deepeval",
    title: "GenAI Test Strategy (DeepEval)",
    description: "Comprehensive GenAI testing strategy using the DeepEval framework for evaluating LLM outputs, ensuring quality and reliability of AI-generated content.",
    category: "genai",
    technologies: ["Python", "DeepEval", "LLMs", "Prompt Engineering", "GenAI", "Testing Frameworks"],
    images: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop"
    ],
    features: [
      "LLM output evaluation and scoring",
      "Automated test case generation",
      "Hallucination detection metrics",
      "Answer relevancy and faithfulness testing",
      "Contextual recall and precision metrics",
      "Regression testing for model updates"
    ],
    challenges: [
      "Defining reliable evaluation metrics for AI outputs",
      "Handling non-deterministic LLM responses",
      "Building comprehensive test coverage",
      "Integrating with existing QA pipelines"
    ],
    outcomes: [
      "Automated LLM testing",
      "Standardized AI quality metrics",
      "Integrated into CI/CD",
      "Reduced manual review time"
    ]
  },
  // Machine Learning Projects (Placeholder)
  {
    id: "ml-project-1",
    title: "Neural Network Model",
    description: "Coming Soon - Advanced deep learning model for pattern recognition and prediction",
    category: "machine-learning",
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"],
    images: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop"
    ],
    features: [
      "Advanced pattern recognition",
      "Real-time prediction capabilities",
      "Model optimization techniques",
      "Data preprocessing pipeline"
    ],
    challenges: [
      "Training data optimization",
      "Model accuracy improvements",
      "Computational efficiency"
    ],
    outcomes: [
      "In Development",
      "Target: 95% accuracy",
      "Real-time processing"
    ]
  },
  // Longevity Projects (Placeholder)
  {
    id: "longevity-project-1",
    title: "Longevity Protocol",
    description: "A personal passion project exploring longevity science, bioinformatics, and health optimization. Not a formal project — just something I care deeply about.",
    category: "longevity",
    technologies: ["Python", "R", "BioPython", "Data Analysis", "Machine Learning"],
    images: [
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&h=600&fit=crop"
    ],
    features: [
      "Biomarker analysis",
      "Health data tracking",
      "Research collaboration tools",
      "Data visualization dashboards"
    ],
    challenges: [
      "Complex biological data processing",
      "Integration of multiple data sources",
      "Privacy and security compliance"
    ],
    outcomes: [
      "In Development",
      "Personal passion",
      "Ongoing exploration"
    ]
  }
];

// Helper function to get projects by category
export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter(project => project.category === category);
};

// Helper function to get unique technologies
export const getAllTechnologies = (): string[] => {
  const techSet = new Set<string>();
  projects.forEach(project => {
    project.technologies.forEach(tech => techSet.add(tech));
  });
  return Array.from(techSet).sort();
};

// Helper function to get project categories
export const getCategories = (): Array<{ value: Project['category']; label: string }> => {
  return [
    { value: 'sas', label: 'SAS' },
    { value: 'genai', label: 'GenAI' },
    { value: 'app', label: 'Apps' },
    { value: 'machine-learning', label: 'Machine Learning' },
    { value: 'longevity', label: 'Longevity' },
    { value: 'other', label: 'Other' }
  ];
};