export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools' | 'soft' | 'analytics';
  icon?: string;
  isWIP?: boolean; // Work in Progress indicator
}

export interface TechStack {
  name: string;
  logo: string;
  proficiency: 'expert' | 'advanced' | 'intermediate';
  yearsOfExperience: number;
}

export const skills: Skill[] = [
  // Frontend Skills
  { name: 'HTML/CSS/JS', level: 90, category: 'frontend' },
  { name: 'Flask', level: 85, category: 'frontend' },
  { name: 'Web Development', level: 85, category: 'frontend' },
  { name: 'Full Stack Development', level: 80, category: 'frontend' },
  { name: 'App Development', level: 80, category: 'frontend' },
  
  // Backend Skills
  { name: 'Python', level: 95, category: 'backend' },
  { name: 'Java', level: 75, category: 'backend' },
  { name: 'C++', level: 70, category: 'backend' },
  { name: 'R', level: 70, category: 'backend' },
  { name: 'Machine Learning', level: 80, category: 'backend' },
  { name: 'Web Automation', level: 90, category: 'backend' },
  { name: 'Test Driven Development', level: 85, category: 'backend' },
  { name: 'Gen AI Development', level: 75, category: 'backend' },
  { name: 'Gen AI Testing', level: 85, category: 'backend' },
  
  // Business Analytics & Data Science Skills
  { name: 'SAS', level: 80, category: 'analytics' },
  { name: 'Business Analytics', level: 75, category: 'analytics' },
  { name: 'Econometrics', level: 70, category: 'analytics' },
  { name: 'Statistical Analysis', level: 75, category: 'analytics' },
  { name: 'Data Visualization', level: 80, category: 'analytics' },
  { name: 'Predictive Modeling', level: 70, category: 'analytics' },
  
  // Database Skills
  { name: 'AWS S3', level: 85, category: 'database' },
  { name: 'Cloud Storage', level: 80, category: 'database' },
  
  // DevOps Skills
  { name: 'Docker', level: 90, category: 'devops' },
  { name: 'Kubernetes', level: 85, category: 'devops' },
  { name: 'AWS', level: 85, category: 'devops' },
  { name: 'Terraform', level: 80, category: 'devops' },
  { name: 'CI/CD', level: 90, category: 'devops' },
  { name: 'Infrastructure/Architecture', level: 85, category: 'devops' },
  { name: 'Helm', level: 80, category: 'devops' },
  
  // Tools
  { name: 'Git', level: 95, category: 'tools' },
  { name: 'Operating Systems', level: 85, category: 'tools' },
  { name: 'Networking', level: 75, category: 'tools' },
  { name: 'Selenium Grid', level: 90, category: 'tools' },
  { name: 'Prompt Engineering', level: 80, category: 'tools' },
  
  // Soft Skills
  { name: 'Problem Solving', level: 95, category: 'soft' },
  { name: 'Communication', level: 90, category: 'soft' },
  { name: 'Team Collaboration', level: 90, category: 'soft' },
  { name: 'Project Management', level: 85, category: 'soft' },
];

export const techStack: TechStack[] = [
  {
    name: 'Python',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    proficiency: 'expert',
    yearsOfExperience: 3
  },
  {
    name: 'R',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg',
    proficiency: 'intermediate',
    yearsOfExperience: 1
  },
  {
    name: 'SAS',
    logo: 'https://www.sas.com/content/dam/SAS/en_us/image/other/logos/sas-logo-primary-rgb.svg',
    proficiency: 'intermediate',
    yearsOfExperience: 2
  },
  {
    name: 'Docker',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    proficiency: 'advanced',
    yearsOfExperience: 2
  },
  {
    name: 'Kubernetes',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
    proficiency: 'advanced',
    yearsOfExperience: 2
  },
  {
    name: 'AWS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    proficiency: 'advanced',
    yearsOfExperience: 2
  },
  {
    name: 'Terraform',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg',
    proficiency: 'advanced',
    yearsOfExperience: 2
  },
  {
    name: 'Java',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    proficiency: 'intermediate',
    yearsOfExperience: 2
  },
  {
    name: 'Git',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    proficiency: 'expert',
    yearsOfExperience: 3
  },
  {
    name: 'Flask',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
    proficiency: 'advanced',
    yearsOfExperience: 2
  },
  {
    name: 'HTML5',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    proficiency: 'advanced',
    yearsOfExperience: 3
  },
  {
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    proficiency: 'advanced',
    yearsOfExperience: 2
  },
  {
    name: 'C++',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    proficiency: 'intermediate',
    yearsOfExperience: 1
  },
  {
    name: 'Linux',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    proficiency: 'advanced',
    yearsOfExperience: 3
  }
];

// Helper functions
export const getSkillsByCategory = (category: Skill['category']): Skill[] => {
  return skills.filter(skill => skill.category === category);
};

export const getTopSkills = (limit: number = 6): Skill[] => {
  return [...skills].sort((a, b) => b.level - a.level).slice(0, limit);
};

export const getExpertTech = (): TechStack[] => {
  return techStack.filter(tech => tech.proficiency === 'expert');
};

// About Me content
export const aboutMe = {
  name: "Thomas Powell",
  title: "Technical Intern at SAS | CS & Data Science Student",
  bio: `Student at UNC Charlotte, deeply invested in computers and software as both a hobby and career. Graduate of the Academy of Information Technology and interning at SAS since June 2022.

Currently earning both my BS in Computer Science with concentration in data science, and a MS in Data Science and Business Analytics dual track. My work at SAS focuses on quality assurance infrastructure, cloud engineering, GenAI testing, and full-stack development.

I specialize in creating automation tools, web applications, cloud infrastructure, and GenAI test strategies. My projects range from Selenium Grid deployments to paper trading apps deployed to the App Store.`,
  
  highlights: [
    "3+ years as Technical Intern at SAS",
    "BS Computer Science (3.95 GPA) & MS Data Science student",
    "Second Place & Golden Hack Award at UNC Charlotte AxeHack",
    "GenAI test strategy development using DeepEval",
    "Paper trading app deployed to App Store",
    "AOIT Honors Program Graduate",
    "Experience with enterprise-scale projects"
  ],
  
  interests: [
    "Data Science",
    "Artificial Intelligence",
    "GenAI Development",
    "Longevity Research", 
    "Finance & Fintech",
    "Cloud Infrastructure",
    "DevOps Automation",
    "Business Analytics",
    "Econometrics"
  ],
  
  education: {
    degree: "BS Computer Science (Data Science) & MS Data Science & Business Analytics",
    university: "University of North Carolina at Charlotte",
    year: "Expected May 2027",
    achievements: ["3.95 GPA (Undergrad)", "Accelerated 4+1 Program", "AOIT Honors Program"]
  },
  
  certifications: [
    "Adobe Dreamweaver CS5",
    "Microsoft PowerPoint 2019",
    "Microsoft Word 2019"
  ]
};