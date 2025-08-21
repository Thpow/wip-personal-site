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
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with microservices architecture, real-time inventory management, and secure payment processing",
    category: "fullstack",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS", "Stripe", "GraphQL"],
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
    ],
    liveUrl: "https://demo-ecommerce.example.com",
    githubUrl: "https://github.com/username/ecommerce-platform",
    architecture: {
      diagram: "https://via.placeholder.com/800x600/e0e5ec/6c63ff?text=Architecture+Diagram",
      description: "Microservices architecture with API Gateway, separate services for auth, products, orders, and payments. Uses event-driven communication with RabbitMQ for service coordination."
    },
    features: [
      "Real-time inventory management with WebSocket updates",
      "Secure payment processing with Stripe integration",
      "Admin dashboard with analytics and reporting",
      "Mobile-responsive design with PWA capabilities",
      "Multi-language and multi-currency support",
      "Advanced search with Elasticsearch"
    ],
    challenges: [
      "Implementing efficient caching strategy with Redis",
      "Handling concurrent transactions and race conditions",
      "Optimizing database queries for scale",
      "Managing distributed transactions across microservices"
    ],
    outcomes: [
      "50ms average API response time",
      "99.9% uptime over 12 months",
      "Handles 10,000+ concurrent users",
      "Reduced cart abandonment by 35%"
    ]
  },
  {
    id: "task-management-app",
    title: "AI-Powered Task Management",
    description: "Real-time collaborative task management system with AI-powered insights, smart prioritization, and team analytics",
    category: "fullstack",
    technologies: ["Vue.js", "Express", "MongoDB", "Socket.io", "TensorFlow.js", "Python", "FastAPI"],
    images: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
    ],
    liveUrl: "https://tasks.example.com",
    githubUrl: "https://github.com/username/task-management",
    architecture: {
      diagram: "https://via.placeholder.com/800x600/e0e5ec/6c63ff?text=Event-Driven+Architecture",
      description: "Event-driven architecture with WebSocket connections for real-time updates, separate ML service for predictions"
    },
    features: [
      "Real-time collaboration with conflict resolution",
      "AI-powered task prioritization and time estimation",
      "Kanban, Gantt, and Calendar views",
      "Team analytics and productivity insights",
      "Automated workflow templates",
      "Integration with Slack, GitHub, and Jira"
    ],
    challenges: [
      "Implementing conflict-free replicated data types (CRDTs)",
      "Real-time synchronization across devices",
      "Training ML model for accurate task predictions",
      "Scaling WebSocket connections"
    ],
    outcomes: [
      "30% improvement in team productivity",
      "Used by 500+ teams globally",
      "4.8/5 user satisfaction rating",
      "95% accuracy in task time estimation"
    ]
  },
  {
    id: "data-visualization",
    title: "Data Analytics Dashboard",
    description: "Interactive data visualization platform for business intelligence with real-time streaming and custom dashboards",
    category: "frontend",
    technologies: ["D3.js", "React", "TypeScript", "WebGL", "Chart.js", "Apache Kafka", "ClickHouse"],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    ],
    liveUrl: "https://analytics.example.com",
    githubUrl: "https://github.com/username/data-dashboard",
    features: [
      "30+ interactive chart types",
      "Real-time data streaming with WebSockets",
      "Custom dashboard builder with drag-and-drop",
      "Export to PDF, Excel, and PowerPoint",
      "Collaborative annotations and sharing",
      "Advanced filtering and drill-down capabilities"
    ],
    challenges: [
      "Rendering large datasets efficiently (1M+ points)",
      "Creating responsive visualizations",
      "Implementing drag-and-drop dashboard builder",
      "Optimizing WebGL performance"
    ],
    outcomes: [
      "Renders 1M+ data points at 60fps",
      "Reduced report generation time by 80%",
      "Used by Fortune 500 companies",
      "50% faster decision making"
    ]
  },
  {
    id: "devops-platform",
    title: "DevOps Automation Platform",
    description: "Comprehensive CI/CD platform with infrastructure as code, monitoring, and automated deployment pipelines",
    category: "devops",
    technologies: ["Go", "Kubernetes", "Terraform", "Prometheus", "Grafana", "GitLab CI", "Ansible"],
    images: [
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop"
    ],
    githubUrl: "https://github.com/username/devops-platform",
    architecture: {
      diagram: "https://via.placeholder.com/800x600/e0e5ec/6c63ff?text=K8s+Architecture",
      description: "Kubernetes-based platform with GitOps workflow, automated scaling, and comprehensive monitoring stack"
    },
    features: [
      "Automated CI/CD pipelines with GitOps",
      "Infrastructure as Code with Terraform",
      "Auto-scaling based on metrics",
      "Comprehensive monitoring and alerting",
      "Blue-green and canary deployments",
      "Secret management with HashiCorp Vault"
    ],
    challenges: [
      "Managing multi-cloud deployments",
      "Implementing zero-downtime deployments",
      "Optimizing container resource allocation",
      "Building custom Kubernetes operators"
    ],
    outcomes: [
      "90% reduction in deployment time",
      "Zero-downtime deployments achieved",
      "40% reduction in infrastructure costs",
      "100+ microservices managed"
    ]
  },
  {
    id: "mobile-banking",
    title: "Mobile Banking Application",
    description: "Secure mobile banking app with biometric authentication, real-time transactions, and AI-powered fraud detection",
    category: "mobile",
    technologies: ["React Native", "Node.js", "PostgreSQL", "Redis", "AWS", "Machine Learning", "Blockchain"],
    images: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop"
    ],
    liveUrl: "https://apps.apple.com/app/example",
    githubUrl: "https://github.com/username/mobile-banking",
    features: [
      "Biometric authentication (Face ID/Touch ID)",
      "Real-time transaction processing",
      "AI-powered fraud detection",
      "P2P payments with QR codes",
      "Investment portfolio management",
      "Blockchain-based transaction verification"
    ],
    challenges: [
      "Implementing bank-grade security",
      "Real-time fraud detection with ML",
      "Ensuring PCI DSS compliance",
      "Optimizing app performance and battery usage"
    ],
    outcomes: [
      "1M+ downloads in first year",
      "4.7/5 app store rating",
      "99.99% transaction success rate",
      "50% reduction in fraud cases"
    ]
  },
  {
    id: "social-platform",
    title: "Social Learning Platform",
    description: "Educational social network with live streaming, collaborative learning spaces, and gamification elements",
    category: "fullstack",
    technologies: ["Next.js", "GraphQL", "PostgreSQL", "Redis", "WebRTC", "AWS", "ElasticSearch"],
    images: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop"
    ],
    liveUrl: "https://learn.example.com",
    githubUrl: "https://github.com/username/social-learning",
    architecture: {
      diagram: "https://via.placeholder.com/800x600/e0e5ec/6c63ff?text=Microservices+%26+WebRTC",
      description: "Microservices with GraphQL federation, WebRTC for video streaming, and event-driven gamification system"
    },
    features: [
      "Live video streaming classes",
      "Collaborative whiteboards",
      "Gamification with badges and leaderboards",
      "AI-powered content recommendations",
      "Discussion forums with real-time updates",
      "Progress tracking and analytics"
    ],
    challenges: [
      "Scaling WebRTC for thousands of concurrent users",
      "Implementing real-time collaborative features",
      "Building recommendation engine",
      "Managing video content delivery"
    ],
    outcomes: [
      "100K+ active learners",
      "85% course completion rate",
      "4.9/5 user satisfaction",
      "30% improvement in learning outcomes"
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