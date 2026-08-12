import type { SkillCategory } from "./types";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    description: "User-facing interfaces and full-stack web application development.",
    skills: [
      { name: "HTML/CSS/JS", level: 90 },
      { name: "Flask", level: 85 },
      { name: "Web Development", level: 85 },
      { name: "Full Stack", level: 80 },
      { name: "App Development", level: 80 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    description: "Server-side logic, automation, and GenAI application development.",
    skills: [
      { name: "Python", level: 95 },
      { name: "Java", level: 75 },
      { name: "C++", level: 70 },
      { name: "R", level: 70 },
      { name: "Machine Learning", level: 80 },
      { name: "Web Automation", level: 90 },
      { name: "TDD", level: 85 },
      { name: "GenAI Development", level: 75 },
      { name: "GenAI Testing", level: 85 },
    ],
  },
  {
    id: "analytics",
    label: "Analytics",
    description: "Statistical methods, data visualization, and predictive modeling.",
    skills: [
      { name: "SAS", level: 80 },
      { name: "Business Analytics", level: 75 },
      { name: "Econometrics", level: 70 },
      { name: "Statistical Analysis", level: 75 },
      { name: "Data Visualization", level: 80 },
      { name: "Predictive Modeling", level: 70 },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    description: "Container orchestration, cloud infrastructure, and CI/CD pipelines.",
    skills: [
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 85 },
      { name: "AWS", level: 85 },
      { name: "Terraform", level: 80 },
      { name: "CI/CD", level: 90 },
      { name: "Infrastructure/Architecture", level: 85 },
      { name: "Helm", level: 80 },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    description: "Version control, operating systems, and test automation infrastructure.",
    skills: [
      { name: "Git", level: 95 },
      { name: "Operating Systems", level: 85 },
      { name: "Networking", level: 75 },
      { name: "Selenium Grid", level: 90 },
      { name: "Prompt Engineering", level: 80 },
    ],
  },
  {
    id: "soft",
    label: "Soft",
    description: "Collaboration, communication, and project leadership capabilities.",
    skills: [
      { name: "Problem Solving", level: 95 },
      { name: "Communication", level: 90 },
      { name: "Team Collaboration", level: 90 },
      { name: "Project Management", level: 85 },
    ],
  },
];
