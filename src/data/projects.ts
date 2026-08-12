import type { Project, ProjectCategory } from "./types";

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "infrastructure",
  "web",
  "devtools",
  "ai",
  "mobile",
];

export const PROJECT_CATEGORY_LABELS: Record<ProjectCategory, string> = {
  infrastructure: "Infrastructure",
  web: "Web",
  devtools: "Dev Tools",
  ai: "AI",
  mobile: "Mobile",
};

export const PROJECTS: Project[] = [
  {
    id: "ciqe-dev-containers",
    title: "CIQE Development Containers",
    org: "SAS",
    category: "infrastructure",
    summary:
      "Containerization of repos/projects with CI360 team for normalized testing/dev environments.",
    tech: ["Docker", "DevContainers", "AWS", "Git", "Kubernetes", "Helm"],
    features: [
      "Reproducible DevContainer definitions per repository",
      "Normalized testing and development environments across the CI360 team",
      "Kubernetes and Helm packaging for containerized workloads",
    ],
    challenges: [
      "Aligning divergent per-repo toolchains onto one container baseline",
      "Keeping container images consistent between local development and AWS",
    ],
    outcomes: ["90% reduction in environment setup time"],
  },
  {
    id: "qegrid-selenium-grid",
    title: "QEGRID: Selenium Grid",
    org: "SAS",
    category: "infrastructure",
    summary:
      "Enterprise Selenium Grid deployment for parallel test execution.",
    tech: ["Selenium", "Docker", "Kubernetes", "Python", "Java", "AWS"],
    features: [
      "Kubernetes-hosted Selenium Grid for enterprise test workloads",
      "Parallel browser session scheduling across containerized nodes",
      "Python and Java test client integration",
    ],
    challenges: [
      "Scaling browser nodes reliably under concurrent test load",
      "Operating grid infrastructure on Kubernetes and AWS",
    ],
    outcomes: ["70% faster test execution", "100+ concurrent tests"],
  },
  {
    id: "splitstation",
    title: "SplitStation: Internal Webapp Tool",
    org: "SAS",
    category: "web",
    summary:
      "Full-stack webapp for controlling production deployment segments.",
    tech: [
      "Flask",
      "Python",
      "HTML/CSS/JS",
      "Docker",
      "AWS",
      "Azure",
      "CloudFormation",
      "Split.io",
    ],
    features: [
      "Web interface for managing production deployment segments",
      "Split.io integration for segment control",
      "Containerized deployment across AWS and Azure with CloudFormation",
    ],
    challenges: [
      "Safely exposing production segment controls through a web UI",
      "Supporting deployment across two cloud providers",
    ],
    outcomes: ["100% adoption by QA team"],
  },
  {
    id: "ci360-cli",
    title: "CI360: Command Line Tool",
    org: "SAS",
    category: "devtools",
    summary: "Enterprise CLI tool for internal APIs with automatic proxying.",
    tech: ["Python", "Click", "REST APIs", "Docker", "AWS"],
    features: [
      "Click-based command surface over internal CI360 REST APIs",
      "Automatic proxying so developers avoid manual request setup",
      "Containerized distribution for consistent developer usage",
    ],
    challenges: [
      "Abstracting varied internal API surfaces behind one coherent CLI",
      "Handling proxy and authentication paths transparently",
    ],
    outcomes: [
      "80% reduction in API interaction time",
      "Adopted by 50+ developers",
    ],
  },
  {
    id: "spotify-playlist-builder",
    title: "Spotify Playlist Builder",
    category: "web",
    summary:
      "Award-winning web app with swipe-based interface, built at UNC Charlotte AxeHack.",
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Spotify API"],
    features: [
      "Swipe-based interface for curating tracks",
      "Spotify API integration for playlist creation",
      "Flask backend serving the web client",
    ],
    challenges: [
      "Designing a swipe interaction model for the web",
      "Building and shipping within a hackathon time window",
    ],
    outcomes: ["Second Place", "Golden Hack Award"],
  },
  {
    id: "qa-infrastructure-automation",
    title: "QA Infrastructure & Automation",
    org: "SAS",
    category: "infrastructure",
    summary:
      "Comprehensive automation tools, web apps, and cloud infrastructure for CI360 QA.",
    tech: [
      "Python",
      "AWS",
      "Terraform",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "S3",
    ],
    features: [
      "Terraform-defined cloud infrastructure for QA workloads",
      "GitHub Actions pipelines driving automated test runs",
      "S3-backed artifact and asset storage",
    ],
    challenges: [
      "Maintaining infrastructure-as-code across an enterprise QA estate",
      "Coordinating automation between Kubernetes workloads and CI pipelines",
    ],
    outcomes: ["95% test automation coverage"],
  },
  {
    id: "paper-trading-app",
    title: "Paper Trading Competition App",
    category: "mobile",
    summary:
      "Mobile app for simulated stock trading competitions, deployed to App Store.",
    tech: ["Swift", "Python", "REST APIs", "Market Data APIs"],
    features: [
      "Simulated stock trading with competition scoring",
      "Market data API integration for live pricing",
      "Native Swift client shipped to the App Store",
    ],
    challenges: [
      "Integrating real-time market data into a mobile client",
      "Meeting App Store release requirements",
    ],
    outcomes: ["Real-time market data", "Competition platform"],
  },
  {
    id: "genai-test-strategy",
    title: "GenAI Test Strategy (DeepEval)",
    org: "SAS",
    category: "ai",
    summary:
      "GenAI testing strategy using DeepEval framework for evaluating LLM outputs.",
    tech: ["Python", "DeepEval", "LLMs", "Prompt Engineering"],
    features: [
      "DeepEval-based evaluation harness for LLM outputs",
      "Prompt engineering practices folded into the test strategy",
      "Repeatable quality metrics for generative features",
    ],
    challenges: [
      "Defining deterministic quality signals for non-deterministic outputs",
      "Establishing evaluation standards where none previously existed",
    ],
    outcomes: ["Automated LLM testing", "Standardized AI quality metrics"],
  },
];
