export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
  technologies: string[];
  logo?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa: string;
  highlights: string[];
  logo?: string;
}

export const experiences: Experience[] = [
  {
    id: 'sas-intern',
    company: 'SAS',
    role: 'Technical Intern',
    location: 'Cary, NC',
    startDate: 'Jun 2022',
    endDate: 'Present',
    description: 'Quality assurance infrastructure, cloud engineering, and full-stack development for the CI360 platform team.',
    highlights: [
      'Built enterprise Selenium Grid deployment on Kubernetes for parallel test execution',
      'Created containerized development environments adopted across multiple teams',
      'Developed full-stack web application for production deployment segment control',
      'Built CLI tools for internal API interaction used by 50+ developers',
      'Automated QA infrastructure with Terraform, Helm, and GitHub Actions',
      'Designed GenAI test strategy using DeepEval framework',
      'Worked on cloud infrastructure with AWS, Docker, and Kubernetes',
    ],
    technologies: ['Python', 'Docker', 'Kubernetes', 'AWS', 'Terraform', 'Flask', 'Selenium', 'Helm', 'GitHub Actions', 'GenAI', 'DeepEval'],
    logo: 'https://www.sas.com/content/dam/SAS/en_us/image/other/logos/sas-logo-primary-rgb.svg'
  },
  {
    id: 'aoit-graduate',
    company: 'Academy of Information Technology (AOIT)',
    role: 'Honors Program Graduate',
    location: 'Holly Springs, NC',
    startDate: 'Aug 2018',
    endDate: 'Jun 2022',
    description: 'Completed the AOIT Honors Program with focus on information technology, web development, and computer science fundamentals.',
    highlights: [
      'Graduated from AOIT Honors Program',
      'Earned Adobe Dreamweaver CS5 certification',
      'Earned Microsoft PowerPoint 2019 certification',
      'Earned Microsoft Word 2019 certification',
      'Foundation in web development, networking, and IT systems',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Adobe Dreamweaver', 'Networking', 'IT Systems'],
  }
];

export const education: Education[] = [
  {
    id: 'uncc-ms',
    institution: 'University of North Carolina at Charlotte',
    degree: 'Master of Science',
    field: 'Data Science and Business Analytics',
    startDate: 'Aug 2025',
    endDate: 'Expected May 2027',
    gpa: 'TBD',
    highlights: [
      'Dual-track program with BS in Computer Science',
      'Focus on econometrics, machine learning, and business analytics',
      'Accelerated 4+1 program',
    ],
  },
  {
    id: 'uncc-bs',
    institution: 'University of North Carolina at Charlotte',
    degree: 'Bachelor of Science',
    field: 'Computer Science (Data Science Concentration)',
    startDate: 'Aug 2022',
    endDate: 'Expected May 2026',
    gpa: '3.95',
    highlights: [
      '3.95 GPA',
      'Data Science concentration',
      'Second Place & Golden Hack Award at AxeHack Hackathon',
      'Coursework in algorithms, data structures, machine learning, and statistics',
    ],
  }
];
