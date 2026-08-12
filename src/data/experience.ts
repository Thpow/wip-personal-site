import type { ExperienceEntry } from "./types";

export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: "sas",
    company: "SAS",
    role: "Technical Intern",
    location: "Cary, NC",
    dates: "Jun 2022 - Present",
    summary:
      "Quality assurance infrastructure, cloud engineering, and full-stack development for the CI360 platform team.",
    highlights: [
      "Built enterprise Selenium Grid on Kubernetes",
      "Created containerized dev environments",
      "Developed full-stack webapp for production deployment segment control",
      "Built CLI tools used by 50+ developers",
      "Automated QA infrastructure with Terraform/Helm/GitHub Actions",
      "Designed GenAI test strategy using DeepEval",
      "Cloud infrastructure with AWS/Docker/Kubernetes",
    ],
    tech: [
      "Python",
      "Docker",
      "Kubernetes",
      "AWS",
      "Terraform",
      "Flask",
      "Selenium",
      "Helm",
      "GitHub Actions",
      "GenAI",
      "DeepEval",
    ],
  },
  {
    id: "aoit",
    company: "AOIT",
    role: "Honors Program Graduate",
    location: "Holly Springs, NC",
    dates: "Aug 2018 - Jun 2022",
    summary:
      "Completed AOIT Honors Program with focus on IT, web development, and CS fundamentals.",
    highlights: [
      "Adobe Dreamweaver CS5 cert",
      "Microsoft PowerPoint 2019 cert",
      "Microsoft Word 2019 cert",
      "Foundation in web development/networking/IT",
    ],
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Adobe Dreamweaver",
      "Networking",
      "IT Systems",
    ],
  },
];
