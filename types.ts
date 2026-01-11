
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

export interface NewsItem {
  text: string;
  url: string;
}

export interface TranslationSet {
  nav: {
    about: string;
    research: string;
    projects: string;
    experience: string;
    contact: string;
  };
  hero: {
    role1: string;
    role2: string;
    role3: string;
    subtitle: string;
    openForWork: string;
    portraitPlaceholder: string;
  };
  about: {
    title: string;
    bio: string;
    education: string;
  };
  research: {
    title: string;
    viewPaper: string;
  };
  projects: {
    title: string;
    subtitle: string;
  };
  experience: {
    title: string;
    professional: string;
    researchTeaching: string;
  };
  expertise: {
    title: string;
    awards: string;
    technical: string;
    languages: string;
  };
  contact: {
    title: string;
    collab: string;
    office: string;
    addressLines: string[];
  };
  news: {
    prefix: string;
    items: NewsItem[];
  };
  footer: {
    tagline: string;
  };
}
