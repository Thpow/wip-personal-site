export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools' | 'soft';
  icon?: string;
}

export interface TechStack {
  name: string;
  logo: string;
  proficiency: 'expert' | 'advanced' | 'intermediate';
  yearsOfExperience: number;
}

export const skills: Skill[] = [
  // Frontend Skills
  { name: 'React/Next.js', level: 95, category: 'frontend' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'Vue.js', level: 85, category: 'frontend' },
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },
  { name: 'D3.js', level: 80, category: 'frontend' },
  { name: 'WebGL/Three.js', level: 75, category: 'frontend' },
  
  // Backend Skills
  { name: 'Node.js', level: 90, category: 'backend' },
  { name: 'Python', level: 85, category: 'backend' },
  { name: 'Go', level: 75, category: 'backend' },
  { name: 'GraphQL', level: 85, category: 'backend' },
  { name: 'REST APIs', level: 95, category: 'backend' },
  { name: 'Microservices', level: 80, category: 'backend' },
  
  // Database Skills
  { name: 'PostgreSQL', level: 85, category: 'database' },
  { name: 'MongoDB', level: 80, category: 'database' },
  { name: 'Redis', level: 85, category: 'database' },
  { name: 'Elasticsearch', level: 75, category: 'database' },
  
  // DevOps Skills
  { name: 'Docker', level: 85, category: 'devops' },
  { name: 'Kubernetes', level: 75, category: 'devops' },
  { name: 'AWS', level: 80, category: 'devops' },
  { name: 'CI/CD', level: 85, category: 'devops' },
  { name: 'Terraform', level: 70, category: 'devops' },
  
  // Tools
  { name: 'Git', level: 95, category: 'tools' },
  { name: 'Linux', level: 85, category: 'tools' },
  { name: 'Agile/Scrum', level: 90, category: 'tools' },
  { name: 'Figma', level: 70, category: 'tools' },
  
  // Soft Skills
  { name: 'Problem Solving', level: 95, category: 'soft' },
  { name: 'Team Leadership', level: 85, category: 'soft' },
  { name: 'Communication', level: 90, category: 'soft' },
  { name: 'Project Management', level: 80, category: 'soft' },
];

export const techStack: TechStack[] = [
  {
    name: 'React',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    proficiency: 'expert',
    yearsOfExperience: 5
  },
  {
    name: 'Node.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    proficiency: 'expert',
    yearsOfExperience: 5
  },
  {
    name: 'TypeScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    proficiency: 'advanced',
    yearsOfExperience: 4
  },
  {
    name: 'PostgreSQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    proficiency: 'advanced',
    yearsOfExperience: 4
  },
  {
    name: 'Docker',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    proficiency: 'advanced',
    yearsOfExperience: 3
  },
  {
    name: 'AWS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    proficiency: 'advanced',
    yearsOfExperience: 3
  },
  {
    name: 'GraphQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
    proficiency: 'advanced',
    yearsOfExperience: 3
  },
  {
    name: 'MongoDB',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    proficiency: 'advanced',
    yearsOfExperience: 4
  },
  {
    name: 'Redis',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    proficiency: 'advanced',
    yearsOfExperience: 3
  },
  {
    name: 'Python',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    proficiency: 'advanced',
    yearsOfExperience: 4
  },
  {
    name: 'Kubernetes',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
    proficiency: 'intermediate',
    yearsOfExperience: 2
  },
  {
    name: 'Vue.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
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
  name: "John Doe",
  title: "Full-Stack Developer & System Architect",
  bio: `Passionate full-stack developer with 5+ years of experience building scalable web applications and distributed systems. 
        I specialize in creating elegant solutions to complex problems, with a focus on performance, user experience, and clean code.
        
        My journey in tech started with a curiosity about how things work, which evolved into a career dedicated to building 
        innovative digital solutions. I thrive in collaborative environments and enjoy mentoring junior developers while 
        continuously learning from peers.`,
  
  highlights: [
    "5+ years of professional development experience",
    "Led teams of up to 10 developers",
    "Architected solutions handling millions of users",
    "Open source contributor with 1000+ GitHub stars",
    "Speaker at tech conferences and meetups",
    "Mentor and technical writer"
  ],
  
  interests: [
    "Cloud Architecture",
    "Machine Learning",
    "Open Source",
    "Technical Writing",
    "UI/UX Design",
    "DevOps Automation"
  ],
  
  education: {
    degree: "Bachelor of Science in Computer Science",
    university: "Tech University",
    year: "2018",
    achievements: ["Summa Cum Laude", "Dean's List", "Best Capstone Project"]
  },
  
  certifications: [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional Developer",
    "Certified Kubernetes Administrator",
    "MongoDB Certified Developer"
  ]
};