export type ProjectCategory =
  | "infrastructure"
  | "web"
  | "devtools"
  | "ai"
  | "mobile";

export interface EducationEntry {
  degree: string;
  institution: string;
  dates: string;
  gpa?: string;
}

export interface Profile {
  name: string;
  title: string;
  bio: string;
  highlights: string[];
  interests: string[];
  education: EducationEntry[];
  certifications: string[];
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  location: string;
  dates: string;
  summary: string;
  highlights: string[];
  tech: string[];
}

export interface Project {
  id: string;
  title: string;
  org?: string;
  category: ProjectCategory;
  summary: string;
  tech: string[];
  features: string[];
  challenges: string[];
  outcomes: string[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  id: string;
  label: string;
  description: string;
  skills: Skill[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  availability: string;
}

export interface AgentSpec {
  number: number;
  name: string;
  role: string;
  purpose: string;
  /** What the agent is allowed to write (from the real config.py role prompts). */
  writes: string;
  /** The structured output block every reply must end with. */
  outputContract: string;
  /** DO items from the role prompt. */
  does: string[];
  /** DON'T items from the role prompt. */
  doesNot: string[];
}
