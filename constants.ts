
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
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1234567"
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
  "Python", "RStudio", "High Performance Computing", "Stata", "LaTeX", "ArcGIS", "SQL", "Tableau", "PowerBI", "Google Cloud"
];

export const LANGUAGES_DATA = [
  { langEn: "German", langDe: "Deutsch", levelEn: "Native", levelDe: "Muttersprache" },
  { langEn: "English", langDe: "Englisch", levelEn: "C2", levelDe: "C2" },
  { langEn: "Spanish", langDe: "Spanisch", levelEn: "B1.2", levelDe: "B1.2" },
  { langEn: "Russian", langDe: "Russisch", levelEn: "A2", levelDe: "A2" }
];

export const TRANSLATIONS: Record<'en' | 'de', TranslationSet> = {
  en: {
    nav: { about: "Über mich", research: "Forschung", projects: "Interessen", experience: "Erfahrung", contact: "Kontakt" },
    hero: { 
      role1: "VWL Promotion.", 
      role2: "Data Science.", 
      role3: "WissKomm.", 
      subtitle: "Ansässig in Mannheim, Deutschland. Ich schlage die Brücke zwischen Umweltökonometrie und verständlichen Datengeschichten.",
      openForWork: "Offen für neue Herausforderungen in der Wirtschaftsberatung & Data Science"
    },
    about: { 
      title: "Über mich", 
      bio: "Ich bin Doktorand der Wirtschaftswissenschaften an der Universität Heidelberg mit Spezialisierung auf Umwelt- und Entwicklungsökonomie. In meiner Arbeit verbinde ich kausale Inferenz mit modernen Data-Science-Tools. Kurz vor Abschluss meiner Promotion suche ich nach neuen beruflichen Herausforderungen in der Beratung oder im Data-Science-Bereich, um meine Expertise in Politikanalyse und Computational Social Science einzubringen.",
      education: "Bildungsweg"
    },
    research: { title: "Forschung", viewPaper: "Paper ansehen" },
    projects: { title: "Interessen", subtitle: "Digitale Projekte" },
    experience: { title: "Erfahrung", professional: "Beruflich", researchTeaching: "Forschung & Lehre" },
    expertise: { title: "Expertise", awards: "Auszeichnungen & Stipendien", technical: "Technische Skills", languages: "Sprachen" },
    contact: { title: "Kontakt", collab: "Ich suche derzeit nach Positionen in der Wirtschaftsberatung, Data Science und Wissenschaftskommunikation. Melden Sie sich gerne.", office: "Büro" },
    news: {
      prefix: "Neuigkeiten",
      items: [
        { text: "Gastauftritt im SWR Nachtcafé: 'Mutige Entscheidungen'", url: "https://www.youtube.com/watch?v=KRKLE5IDJNk" },
        { text: "Veröffentlicht: 'Who Goes Forward and Who is Left Behind?'", url: "https://heiup.uni-heidelberg.de/journals/rupertocarola/article/view/25099" },
        { text: "Neues Hobbyprojekt: escaping2earth.com", url: "https://escaping2earth.com" }
      ]
    }
  },
  de: {
    nav: { about: "Über mich", research: "Forschung", projects: "Interessen", experience: "Erfahrung", contact: "Kontakt" },
    hero: { 
      role1: "VWL Promotion.", 
      role2: "Data Science.", 
      role3: "WissKomm.", 
      subtitle: "Ansässig in Mannheim, Deutschland. Ich schlage die Brücke zwischen Umweltökonometrie und verständlichen Datengeschichten.",
      openForWork: "Offen für neue Herausforderungen in der Wirtschaftsberatung & Data Science"
    },
    about: { 
      title: "Über mich", 
      bio: "Ich bin Doktorand der Wirtschaftswissenschaften an der Universität Heidelberg mit Spezialisierung auf Umwelt- und Entwicklungsökonomie. In meiner Arbeit verbinde ich kausale Inferenz mit modernen Data-Science-Tools. Kurz vor Abschluss meiner Promotion suche ich nach neuen beruflichen Herausforderungen in der Beratung oder im Data-Science-Bereich, um meine Expertise in Politikanalyse und Computational Social Science einzubringen.",
      education: "Bildungsweg"
    },
    research: { title: "Forschung", viewPaper: "Paper ansehen" },
    projects: { title: "Interessen", subtitle: "Digitale Projekte" },
    experience: { title: "Erfahrung", professional: "Beruflich", researchTeaching: "Forschung & Lehre" },
    expertise: { title: "Expertise", awards: "Auszeichnungen & Stipendien", technical: "Technische Skills", languages: "Sprachen" },
    contact: { title: "Kontakt", collab: "Ich suche derzeit nach Positionen in der Wirtschaftsberatung, Data Science und Wissenschaftskommunikation. Melden Sie sich gerne.", office: "Büro" },
    news: {
      prefix: "Neuigkeiten",
      items: [
        { text: "Gastauftritt im SWR Nachtcafé: 'Mutige Entscheidungen'", url: "https://www.youtube.com/watch?v=KRKLE5IDJNk" },
        { text: "Veröffentlicht: 'Who Goes Forward and Who is Left Behind?'", url: "https://heiup.uni-heidelberg.de/journals/rupertocarola/article/view/25099" },
        { text: "Neues Hobbyprojekt: escaping2earth.com", url: "https://escaping2earth.com" }
      ]
    }
  }
};

export const EDUCATION_DATA: Record<'en' | 'de', Education[]> = {
  en: [
    { institution: "Universität Heidelberg", degree: "Promotion in Volkswirtschaftslehre (Umwelt- und Entwicklungsökonomik)", location: "Heidelberg, Deutschland", period: "Juni 2022 — Heute", details: "Promotionskolleg 'Sicherheit und Entwicklung im 21. Jahrhundert' (Konrad-Adenauer-Stiftung). Gründer von EcoGrowth." },
    { institution: "Universität Mannheim", degree: "PhD Kursprogramm", location: "Mannheim, Deutschland", period: "Abschluss Mai 2023", details: "Statistik, Mathematik, Mikro- und Makroökonomie sowie Programmierung in R und Python." },
    { institution: "Universität Heidelberg", degree: "MSc Economics (Top 3%)", location: "Heidelberg, Deutschland", period: "Abschluss März 2022", details: "Konrad-Adenauer-Stipendium für besonders Begabte." }
  ],
  de: [
    { institution: "Universität Heidelberg", degree: "Promotion in Volkswirtschaftslehre (Umwelt- und Entwicklungsökonomik)", location: "Heidelberg, Deutschland", period: "Juni 2022 — Heute", details: "Promotionskolleg 'Sicherheit und Entwicklung im 21. Jahrhundert' (Konrad-Adenauer-Stiftung). Gründer von EcoGrowth." },
    { institution: "Universität Mannheim", degree: "PhD Kursprogramm", location: "Mannheim, Deutschland", period: "Abschluss Mai 2023", details: "Statistik, Mathematik, Mikro- und Makroökonomie sowie Programmierung in R und Python." },
    { institution: "Universität Heidelberg", degree: "MSc Economics (Top 3%)", location: "Heidelberg, Deutschland", period: "Abschluss März 2022", details: "Konrad-Adenauer-Stipendium für besonders Begabte." }
  ]
};

export const WORK_EXPERIENCE: Record<'en' | 'de', Experience[]> = {
  en: [
    { role: "Data Scientist", organization: "Freelancing Fiverr / UpWork", location: "Remote", period: "Juli 2021 — Aug 2024", details: ["Umsetzung von 20+ Kundenprojekten in Medizin, Wirtschaft und Geographie.", "Entwicklung datengestützter Lösungen in Python, R & SQL.", "Erstellung von 'Databriefs' und Dashboards (Tableau, PowerBI)."] },
    { role: "Vorstandsvorsitzender", organization: "IFAIR", location: "Berlin", period: "Jan 2022 — Aug 2024", details: ["Leitung von 200 Mitgliedern nach COVID.", "Aufbau eines deutsch-indischen Netzwerks mit drei Indien-Reisen.", "Mitgliedersteigerung um 15%."] },
    { role: "Business Development Intern", organization: "ME Creative Studios", location: "Kuala Lumpur", period: "2019", details: ["Unterstützung bei Python-Apps.", "Verfassen von Online-Artikeln."] },
    { role: "Diplomatic Communications Intern", organization: "InterMedia Japan", location: "Tokyo", period: "2019", details: ["Magazinautor.", "Eventplanung für über 5.000 Teilnehmer."] }
  ],
  de: [
    { role: "Data Scientist", organization: "Freelancing Fiverr / UpWork", location: "Remote", period: "Juli 2021 — Aug 2024", details: ["Umsetzung von 20+ Kundenprojekten in Medizin, Wirtschaft und Geographie.", "Entwicklung datengestützter Lösungen in Python, R & SQL.", "Erstellung von 'Databriefs' und Dashboards (Tableau, PowerBI)."] },
    { role: "Vorstandsvorsitzender", organization: "IFAIR", location: "Berlin", period: "Jan 2022 — Aug 2024", details: ["Leitung von 200 Mitgliedern nach COVID.", "Aufbau eines deutsch-indischen Netzwerks mit drei Indien-Reisen.", "Mitgliedersteigerung um 15%."] },
    { role: "Business Development Intern", organization: "ME Creative Studios", location: "Kuala Lumpur", period: "2019", details: ["Unterstützung bei Python-Apps.", "Verfassen von Online-Artikeln."] },
    { role: "Diplomatic Communications Intern", organization: "InterMedia Japan", location: "Tokyo", period: "2019", details: ["Magazinautor.", "Eventplanung für über 5.000 Teilnehmer."] }
  ]
};

export const RESEARCH_TEACHING: Record<'en' | 'de', Experience[]> = {
  en: [
    { role: "Dozent 'Einführung in die VWL'", organization: "Universität Heidelberg", location: "Heidelberg", period: "2019 — 2024", details: ["Einführung automatisierter Korrektur mit R.", "Betreuung von 500 Teilnehmern."] },
    { role: "Wissenschaftlicher Mitarbeiter", organization: "Universität Heidelberg", location: "Heidelberg", period: "2020 — 2025", details: ["Satellitendatenanalyse (ArcGIS, Python).", "Leitung eines deutsch-pakistanischen Teams."] }
  ],
  de: [
    { role: "Dozent 'Einführung in die VWL'", organization: "Universität Heidelberg", location: "Heidelberg", period: "2019 — 2024", details: ["Einführung automatisierter Korrektur mit R.", "Betreuung von 500 Teilnehmern."] },
    { role: "Wissenschaftlicher Mitarbeiter", organization: "Universität Heidelberg", location: "Heidelberg", period: "2020 — 2025", details: ["Satellitendatenanalyse (ArcGIS, Python).", "Leitung eines deutsch-pakistanischen Teams."] }
  ]
};

export const HOBBY_PROJECTS: Record<'en' | 'de', Project[]> = {
  en: [{ title: "escaping2earth.com", url: "https://escaping2earth.com", description: "Ein Reiseblog und eine Wissensplattform, die politische, wirtschaftliche und kulturelle Dynamiken weltweit untersucht. Von mir selbst gestaltet und programmiert.", tags: ["UI/UX", "React", "Frontend", "WissKomm"] }],
  de: [{ title: "escaping2earth.com", url: "https://escaping2earth.com", description: "Ein Reiseblog und eine Wissensplattform, die politische, wirtschaftliche und kulturelle Dynamiken weltweit untersucht. Von mir selbst gestaltet und programmiert.", tags: ["UI/UX", "React", "Frontend", "WissKomm"] }]
};

export const AWARDS: Record<'en' | 'de', Award[]> = {
  en: [
    { title: "Bayerische Rettungsmedaille", description: "Verliehen durch den Bayerischen Ministerpräsidenten Dr. Markus Söder." },
    { title: "Konrad-Adenauer-Stipendium", description: "Seit 2015; Promotionskolleg 'Sicherheit und Entwicklung'." },
    { title: "AERE Travel Grant", description: "AERE-Konferenz 2024, Washington D.C." }
  ],
  de: [
    { title: "Bayerische Rettungsmedaille", description: "Verliehen durch den Bayerischen Ministerpräsidenten Dr. Markus Söder." },
    { title: "Konrad-Adenauer-Stipendium", description: "Seit 2015; Promotionskolleg 'Sicherheit und Entwicklung'." },
    { title: "AERE Travel Grant", description: "AERE-Konferenz 2024, Washington D.C." }
  ]
};
