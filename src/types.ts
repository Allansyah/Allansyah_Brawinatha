export interface Project {
  title: string;
  category?: string;
  description: string;
  features?: string[];
  techStack: string[];
  links: {
    demo?: string;
    github?: string;
  };
  image?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  descriptions: string[];
  division?: string;
  location?: string;
}
