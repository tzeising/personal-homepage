
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
  "Python", "R", "Stata", "SQL", "Tableau", "PowerBI", "Causal Inference", "ArcGIS", "Google Cloud", "High Performance Computing", "LaTeX"
];

export const LANGUAGES_DATA = [
  { langEn: "German", langDe: "Deutsch", levelEn: "Native", levelDe: "Muttersprache" },
  { langEn: "English", langDe: "Englisch", levelEn: "C2", levelDe: "C2" },
  { langEn: "Spanish", langDe: "Spanisch", levelEn: "B1.2", levelDe: "B1.2" },
  { langEn: "Russian", langDe: "Russisch", levelEn: "A2", levelDe: "A2" }
];

export const TRANSLATIONS: Record<'en' | 'de', TranslationSet> = {
  en: {
    nav: { about: "About", research: "Research", projects: "Interests", experience: "Experience", contact: "Connect" },
    hero: {
      role1: "Consultant @ ZEQ.",
      role2: "Healthcare Analytics.",
      role3: "Causal Inference.",
      subtitle: "Healthcare consultant in Mannheim, working on German hospital financing and the ongoing KHVVG reform. Doctoral background in environmental economics and applied causal inference.",
      portraitPlaceholder: "Portrait Placeholder"
    },
    about: {
      title: "About",
      bio: "I am a Consultant at ZEQ, a Mannheim-based healthcare consultancy, working in the Analytics Expert Team led by Lasse Wißmann on data-driven analysis of German hospital financing — the InEK §21 dataset, the G-DRG system, and the ongoing KHVVG/KHAG reform (Vorhaltevergütung, Transformationsfonds). My background is in quantitative economics: I recently completed my PhD at Heidelberg University's Alfred-Weber-Institut under Anca Balietti, applying causal inference methods (DiD, RDD, event studies) to environmental regulation and its enforcement. I retain a Konrad-Adenauer-Stiftung Promotionskolleg affiliation.",
      education: "Education"
    },
    research: { title: "Research", viewPaper: "View Paper" },
    projects: { title: "Interests", subtitle: "Side Projects" },
    experience: { title: "Experience", professional: "Professional", researchTeaching: "Research & Teaching" },
    expertise: { title: "Expertise", awards: "Awards & Grants", technical: "Technical Skills", languages: "Languages" },
    contact: {
      title: "Connect",
      collab: "Open to conversations on healthcare analytics, hospital financing, and applied causal inference.",
      office: "Office",
      addressLines: [
        "ZEQ",
        "Analytics Expert Team",
        "Mannheim",
        "Germany"
      ]
    },
    footer: { tagline: "Healthcare Analytics & Quantitative Research" },
    news: {
      prefix: "News",
      items: [
        { text: "Joining ZEQ as Consultant in the Analytics Expert Team (May 2026)", url: "https://linkedin.com/in/tzeising" },
        { text: "PhD completed at Heidelberg University: environmental regulation and enforcement", url: "https://linkedin.com/in/tzeising" },
        { text: "escaping2earth — travel blog and YouTube channel across 249 ISO regions", url: "https://escaping2earth.com" }
      ]
    }
  },
  de: {
    nav: { about: "Über mich", research: "Forschung", projects: "Interessen", experience: "Erfahrung", contact: "Kontakt" },
    hero: {
      role1: "Consultant @ ZEQ.",
      role2: "Healthcare Analytics.",
      role3: "Kausalanalyse.",
      subtitle: "Berater im Gesundheitswesen in Mannheim, mit Schwerpunkt auf der deutschen Krankenhausfinanzierung und der laufenden KHVVG-Reform. Promotionshintergrund in Umweltökonomik und angewandter kausaler Inferenz.",
      portraitPlaceholder: "Portrait Platzhalter"
    },
    about: {
      title: "Über mich",
      bio: "Ich bin Consultant bei ZEQ, einer Mannheimer Beratung im Gesundheitswesen, und arbeite im Analytics Expert Team unter Lasse Wißmann an datengestützten Analysen der deutschen Krankenhausfinanzierung — dem InEK §21-Datensatz, dem G-DRG-System und der laufenden KHVVG/KHAG-Reform (Vorhaltevergütung, Transformationsfonds). Mein Hintergrund ist quantitative Ökonomie: Ich habe meine Promotion am Alfred-Weber-Institut der Universität Heidelberg bei Anca Balietti abgeschlossen, mit kausaler Inferenz (DiD, RDD, Event Studies) zur Analyse von Umweltregulierung und Vollzug. Ich bin weiterhin mit dem Promotionskolleg der Konrad-Adenauer-Stiftung verbunden.",
      education: "Bildungsweg"
    },
    research: { title: "Forschung", viewPaper: "Paper ansehen" },
    projects: { title: "Interessen", subtitle: "Nebenprojekte" },
    experience: { title: "Erfahrung", professional: "Beruflich", researchTeaching: "Forschung & Lehre" },
    expertise: { title: "Expertise", awards: "Auszeichnungen & Stipendien", technical: "Technische Skills", languages: "Sprachen" },
    contact: {
      title: "Kontakt",
      collab: "Offen für Austausch zu Healthcare Analytics, Krankenhausfinanzierung und angewandter kausaler Inferenz.",
      office: "Büro",
      addressLines: [
        "ZEQ",
        "Analytics Expert Team",
        "Mannheim",
        "Deutschland"
      ]
    },
    footer: { tagline: "Healthcare Analytics & Quantitative Forschung" },
    news: {
      prefix: "Neuigkeiten",
      items: [
        { text: "Einstieg bei ZEQ als Consultant im Analytics Expert Team (Mai 2026)", url: "https://linkedin.com/in/tzeising" },
        { text: "Promotion an der Universität Heidelberg abgeschlossen: Umweltregulierung und ihr Vollzug", url: "https://linkedin.com/in/tzeising" },
        { text: "escaping2earth — Reiseblog und YouTube-Kanal durch 249 ISO-Regionen", url: "https://escaping2earth.com" }
      ]
    }
  }
};

export const EDUCATION_DATA: Record<'en' | 'de', Education[]> = {
  en: [
    { institution: "Heidelberg University", degree: "PhD Economics (Environmental and Developmental Economics)", location: "Heidelberg, Germany", period: "June 2022 — April 2026", details: "Alfred-Weber-Institut, supervised by Anca Balietti. Doctoral Program 'Development and Security in the 21st Century' (Konrad-Adenauer-Stiftung). Founder of EcoGrowth." },
    { institution: "University of Mannheim", degree: "PhD Course Program", location: "Mannheim, Germany", period: "Graduated May 2023", details: "Statistics, Mathematics, Micro- and Macroeconomics, and programming in R and Python." },
    { institution: "Heidelberg University", degree: "MSc Economics (Top 3%)", location: "Heidelberg, Germany", period: "Graduated March 2022", details: "Konrad-Adenauer-Stiftung Scholarship for gifted and talented students." }
  ],
  de: [
    { institution: "Universität Heidelberg", degree: "Promotion in Volkswirtschaftslehre (Umwelt- und Entwicklungsökonomik)", location: "Heidelberg, Deutschland", period: "Juni 2022 — April 2026", details: "Alfred-Weber-Institut, betreut von Anca Balietti. Promotionskolleg 'Sicherheit und Entwicklung im 21. Jahrhundert' (Konrad-Adenauer-Stiftung). Gründer von EcoGrowth." },
    { institution: "Universität Mannheim", degree: "PhD Kursprogramm", location: "Mannheim, Deutschland", period: "Abschluss Mai 2023", details: "Statistik, Mathematik, Mikro- und Makroökonomie sowie Programmierung in R und Python." },
    { institution: "Universität Heidelberg", degree: "MSc Economics (Top 3%)", location: "Heidelberg, Deutschland", period: "Abschluss März 2022", details: "Konrad-Adenauer-Stipendium für besonders Begabte." }
  ]
};

export const WORK_EXPERIENCE: Record<'en' | 'de', Experience[]> = {
  en: [
    { role: "Consultant — Analytics Expert Team", organization: "ZEQ", location: "Mannheim", period: "May 2026 — Present", details: ["Data-driven analysis of German hospital financing under Lasse Wißmann.", "InEK §21 billing data and the G-DRG system.", "KHVVG/KHAG reform: Vorhaltevergütung and Transformationsfonds."] },
    { role: "Data Scientist", organization: "Freelancing Fiverr / UpWork", location: "Remote", period: "July 2021 — Aug 2024", details: ["20+ client projects across medicine, business, and geography.", "Data-driven solutions in Python, R, and SQL.", "Databriefs and dashboards in Tableau and PowerBI."] },
    { role: "Chairman of the Board", organization: "IFAIR", location: "Berlin", period: "Jan 2022 — Aug 2024", details: ["Led 200-member organization post-COVID.", "Built a German-Indian network across three working trips to India.", "Grew membership by 15%."] },
    { role: "Business Development Intern", organization: "ME Creative Studios", location: "Kuala Lumpur", period: "2019", details: ["Python app support.", "Article authoring."] },
    { role: "Diplomatic Communications Intern", organization: "InterMedia Japan", location: "Tokyo", period: "2019", details: ["Magazine authoring.", "Event planning for 5,000+ participants."] }
  ],
  de: [
    { role: "Consultant — Analytics Expert Team", organization: "ZEQ", location: "Mannheim", period: "Mai 2026 — Heute", details: ["Datengestützte Analysen der deutschen Krankenhausfinanzierung unter Lasse Wißmann.", "InEK §21-Abrechnungsdaten und das G-DRG-System.", "KHVVG/KHAG-Reform: Vorhaltevergütung und Transformationsfonds."] },
    { role: "Data Scientist", organization: "Freelancing Fiverr / UpWork", location: "Remote", period: "Juli 2021 — Aug 2024", details: ["Umsetzung von 20+ Kundenprojekten in Medizin, Wirtschaft und Geographie.", "Entwicklung datengestützter Lösungen in Python, R & SQL.", "Erstellung von 'Databriefs' und Dashboards (Tableau, PowerBI)."] },
    { role: "Vorstandsvorsitzender", organization: "IFAIR", location: "Berlin", period: "Jan 2022 — Aug 2024", details: ["Leitung von 200 Mitgliedern nach COVID.", "Aufbau eines deutsch-indischen Netzwerks mit drei Indien-Reisen.", "Mitgliedersteigerung um 15%."] },
    { role: "Business Development Intern", organization: "ME Creative Studios", location: "Kuala Lumpur", period: "2019", details: ["Unterstützung bei Python-Apps.", "Verfassen von Online-Artikeln."] },
    { role: "Diplomatic Communications Intern", organization: "InterMedia Japan", location: "Tokyo", period: "2019", details: ["Magazinautor.", "Eventplanung für über 5.000 Teilnehmer."] }
  ]
};

export const RESEARCH_TEACHING: Record<'en' | 'de', Experience[]> = {
  en: [
    { role: "Lecturer 'Intro to Economics'", organization: "Heidelberg University", location: "Heidelberg", period: "2019 — 2024", details: ["Automated grading with R.", "Supervision of 500 participants."] },
    { role: "Research Assistant", organization: "Heidelberg University", location: "Heidelberg", period: "2020 — 2025", details: ["Satellite data analysis (ArcGIS, Python).", "German-Pakistani team leadership."] }
  ],
  de: [
    { role: "Dozent 'Einführung in die VWL'", organization: "Universität Heidelberg", location: "Heidelberg", period: "2019 — 2024", details: ["Einführung automatisierter Korrektur mit R.", "Betreuung von 500 Teilnehmern."] },
    { role: "Wissenschaftlicher Mitarbeiter", organization: "Universität Heidelberg", location: "Heidelberg", period: "2020 — 2025", details: ["Satellitendatenanalyse (ArcGIS, Python).", "Leitung eines deutsch-pakistanischen Teams."] }
  ]
};

export const HOBBY_PROJECTS: Record<'en' | 'de', Project[]> = {
  en: [{ title: "escaping2earth.com", url: "https://escaping2earth.com", description: "A travel blog and YouTube channel run with my wife Marlene, documenting our project to visit all 249 ISO-coded regions. Designed and coded by myself.", tags: ["Travel", "YouTube", "React", "Frontend"] }],
  de: [{ title: "escaping2earth.com", url: "https://escaping2earth.com", description: "Ein Reiseblog und YouTube-Kanal, den ich mit meiner Frau Marlene betreibe — wir dokumentieren unser Projekt, alle 249 ISO-codierten Regionen zu bereisen. Von mir selbst gestaltet und programmiert.", tags: ["Reisen", "YouTube", "React", "Frontend"] }]
};

export const AWARDS: Record<'en' | 'de', Award[]> = {
  en: [
    { title: "Highest Bavarian Medal for Civil Rescues", description: "Awarded by Bavarian Prime Minister Dr. Markus Söder." },
    { title: "Konrad Adenauer Scholarship", description: "Since 2015; Doctoral program 'Security and Development'." },
    { title: "AERE Travel Grant", description: "2024 AERE Conference, Washington D.C." }
  ],
  de: [
    { title: "Bayerische Rettungsmedaille", description: "Verliehen durch den Bayerischen Ministerpräsidenten Dr. Markus Söder." },
    { title: "Konrad-Adenauer-Stipendium", description: "Seit 2015; Promotionskolleg 'Sicherheit und Entwicklung'." },
    { title: "AERE Travel Grant", description: "AERE-Konferenz 2024, Washington D.C." }
  ]
};
