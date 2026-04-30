
export interface ResearchPaper {
  title: string;
  authors: string;
  status: string;
  link?: string;
}

export interface Experience {
  role: string;
  organization: string;
  location: string;
  period: string;
  details: string[];
}

export interface Award {
  title: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
  details?: string;
}

export interface Project {
  title: string;
  url: string;
  description: string;
  tags: string[];
}

export interface TranslationSet {
  nav: {
    about: string;
    experience: string;
    research: string;
    projects: string;
    contact: string;
  };
  hero: {
    tagline: string;
    intro: string;
  };
  about: {
    title: string;
    education: string;
  };
  experience: {
    title: string;
    professional: string;
    researchTeaching: string;
  };
  research: {
    title: string;
  };
  projects: {
    title: string;
  };
  expertise: {
    title: string;
    awards: string;
    technical: string;
    languages: string;
  };
  contact: {
    title: string;
    blurb: string;
  };
  footer: {
    tagline: string;
  };
}
