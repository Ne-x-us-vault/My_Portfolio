export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  techStack: string[];
  category: string;
  image: string;
  github: string;
  live?: string;
  challenges: string[];
  solutions: string[];
  impact: string;
  features: string[];
}

export interface Skill {
  name: string;
  icon: string;
  category: string;
  level: number;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details: string;
  cgpa?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  icon: string;
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
}
