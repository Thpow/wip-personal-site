export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile' | 'devops';
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
    category: "devops",
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
    category: "devops",
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
    category: "fullstack",
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
    category: "backend",
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
    category: "fullstack",
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
    category: "devops",
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
    { value: 'fullstack', label: 'Full Stack' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'mobile', label: 'Mobile' },
    { value: 'devops', label: 'DevOps' }
  ];
};