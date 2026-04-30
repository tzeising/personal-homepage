
import { ResearchPaper, Experience, Award, Education, Project, TranslationSet } from './types';

export const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    title: "Who Goes Forward and Who is Left Behind?",
    authors: "Balietti, A., Zeising, T.",
    status: "Ruperto Carola",
    link: "https://heiup.uni-heidelberg.de/journals/rupertocarola/article/view/25099"
  },
  {
    title: "Racial Disparities in Environmental Auditing in the US",
    authors: "Balietti, A., Zeising, T.",
    status: "Working Paper",
    link: "https://archiv.ub.uni-heidelberg.de/volltextserver/34516/"
  },
  {
    title: "Conflicting Interests: Agricultural Ties and the Enforcement of Environmental Bans",
    authors: "Zeising, T.",
    status: "Working Paper",
  },
  {
    title: "Dirty Politicians? The Impact of Criminally Accused Politicians on Environmental Outcomes in India",
    authors: "Ibragimova, N., Zeising, T.",
    status: "Working Paper",
  },
  {
    title: "Politics, Properties, and Places: An Investigation of Environmental Favouritism in Local Indian Politics",
    authors: "Zeising, T.",
    status: "Manuscript",
  }
];

export const SKILLS = [
  "Python", "R", "Stata", "SQL", "Tableau", "PowerBI", "Causal Inference", "ArcGIS", "Google Cloud", "HPC", "LaTeX"
];

export const LANGUAGES_DATA = [
  { langEn: "German", langDe: "Deutsch", levelEn: "Native", levelDe: "Muttersprache" },
  { langEn: "English", langDe: "Englisch", levelEn: "C2", levelDe: "C2" },
  { langEn: "Spanish", langDe: "Spanisch", levelEn: "B1", levelDe: "B1" },
  { langEn: "Russian", langDe: "Russisch", levelEn: "A2", levelDe: "A2" }
];

export const TRANSLATIONS: Record<'en' | 'de', TranslationSet> = {
  en: {
    nav: { about: "About", experience: "Experience", research: "Research", projects: "Projects", contact: "Contact" },
    hero: {
      tagline: "Healthcare analytics & applied economics.",
      intro: "Consultant in Mannheim. PhD in economics from Heidelberg, working on data-driven questions in hospital financing and policy."
    },
    about: {
      title: "About",
      education: "Education"
    },
    experience: { title: "Experience", professional: "Professional", researchTeaching: "Research & Teaching" },
    research: { title: "Research" },
    projects: { title: "Projects" },
    expertise: { title: "Expertise", awards: "Awards", technical: "Tools", languages: "Languages" },
    contact: {
      title: "Contact",
      blurb: "Open to conversations on healthcare analytics, hospital financing, and applied causal inference."
    },
    footer: { tagline: "Mannheim, Germany" }
  },
  de: {
    nav: { about: "Über mich", experience: "Erfahrung", research: "Forschung", projects: "Projekte", contact: "Kontakt" },
    hero: {
      tagline: "Healthcare Analytics & angewandte Ökonomie.",
      intro: "Berater in Mannheim. Promotion in Volkswirtschaftslehre in Heidelberg, mit Schwerpunkt auf datengetriebener Krankenhausfinanzierung und Politikanalyse."
    },
    about: {
      title: "Über mich",
      education: "Bildungsweg"
    },
    experience: { title: "Erfahrung", professional: "Beruflich", researchTeaching: "Forschung & Lehre" },
    research: { title: "Forschung" },
    projects: { title: "Projekte" },
    expertise: { title: "Expertise", awards: "Auszeichnungen", technical: "Tools", languages: "Sprachen" },
    contact: {
      title: "Kontakt",
      blurb: "Offen für Austausch zu Healthcare Analytics, Krankenhausfinanzierung und angewandter kausaler Inferenz."
    },
    footer: { tagline: "Mannheim, Deutschland" }
  }
};

export const EDUCATION_DATA: Record<'en' | 'de', Education[]> = {
  en: [
    { institution: "Heidelberg University", degree: "PhD Economics", location: "Heidelberg", period: "2022 — 2026" },
    { institution: "University of Mannheim", degree: "PhD Coursework", location: "Mannheim", period: "2022 — 2023" },
    { institution: "Heidelberg University", degree: "MSc Economics", location: "Heidelberg", period: "2020 — 2022" }
  ],
  de: [
    { institution: "Universität Heidelberg", degree: "Promotion in Volkswirtschaftslehre", location: "Heidelberg", period: "2022 — 2026" },
    { institution: "Universität Mannheim", degree: "PhD-Kursprogramm", location: "Mannheim", period: "2022 — 2023" },
    { institution: "Universität Heidelberg", degree: "MSc Economics", location: "Heidelberg", period: "2020 — 2022" }
  ]
};

export const WORK_EXPERIENCE: Record<'en' | 'de', Experience[]> = {
  en: [
    { role: "Consultant, Analytics", organization: "ZEQ", location: "Mannheim", period: "2026 —", details: ["Data-driven analysis of German hospital financing."] },
    { role: "Freelance Data Scientist", organization: "Fiverr / UpWork", location: "Remote", period: "2021 — 2024", details: ["20+ client projects in Python, R, and SQL.", "Dashboards in Tableau and PowerBI."] },
    { role: "Chairman", organization: "IFAIR", location: "Berlin", period: "2022 — 2024", details: ["Led a 200-member organization.", "Built a German–Indian network across three trips."] }
  ],
  de: [
    { role: "Consultant, Analytics", organization: "ZEQ", location: "Mannheim", period: "2026 —", details: ["Datengestützte Analysen der deutschen Krankenhausfinanzierung."] },
    { role: "Freelance Data Scientist", organization: "Fiverr / UpWork", location: "Remote", period: "2021 — 2024", details: ["20+ Kundenprojekte in Python, R und SQL.", "Dashboards in Tableau und PowerBI."] },
    { role: "Vorstandsvorsitzender", organization: "IFAIR", location: "Berlin", period: "2022 — 2024", details: ["Leitung einer Organisation mit 200 Mitgliedern.", "Aufbau eines deutsch-indischen Netzwerks über drei Reisen."] }
  ]
};

export const RESEARCH_TEACHING: Record<'en' | 'de', Experience[]> = {
  en: [
    { role: "Lecturer, Intro to Economics", organization: "Heidelberg University", location: "Heidelberg", period: "2019 — 2024", details: ["Automated grading in R.", "500+ students."] },
    { role: "Research Assistant", organization: "Heidelberg University", location: "Heidelberg", period: "2020 — 2025", details: ["Satellite data analysis (ArcGIS, Python)."] }
  ],
  de: [
    { role: "Dozent, Einführung in die VWL", organization: "Universität Heidelberg", location: "Heidelberg", period: "2019 — 2024", details: ["Automatisierte Korrektur in R.", "Über 500 Teilnehmer."] },
    { role: "Wissenschaftlicher Mitarbeiter", organization: "Universität Heidelberg", location: "Heidelberg", period: "2020 — 2025", details: ["Satellitendatenanalyse (ArcGIS, Python)."] }
  ]
};

export const HOBBY_PROJECTS: Record<'en' | 'de', Project[]> = {
  en: [{ title: "escaping2earth.com", url: "https://escaping2earth.com", description: "Travel blog and YouTube channel run with my wife — visiting all 249 ISO regions. Designed and coded by me.", tags: ["Travel", "YouTube", "React"] }],
  de: [{ title: "escaping2earth.com", url: "https://escaping2earth.com", description: "Reiseblog und YouTube-Kanal mit meiner Frau — wir besuchen alle 249 ISO-Regionen. Selbst gestaltet und programmiert.", tags: ["Reisen", "YouTube", "React"] }]
};

export const AWARDS: Record<'en' | 'de', Award[]> = {
  en: [
    { title: "Bavarian Medal for Civil Rescues", description: "Highest grade." },
    { title: "Konrad Adenauer Scholarship", description: "Since 2015." },
    { title: "AERE Travel Grant", description: "AERE Conference 2024, Washington D.C." }
  ],
  de: [
    { title: "Bayerische Rettungsmedaille", description: "Höchste Stufe." },
    { title: "Konrad-Adenauer-Stipendium", description: "Seit 2015." },
    { title: "AERE Travel Grant", description: "AERE-Konferenz 2024, Washington D.C." }
  ]
};
