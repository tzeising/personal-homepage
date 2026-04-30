
import React, { useEffect, useState } from 'react';
import Section from './components/Section';
import portrait from './components/tom.-zeising.jpg';
import {
  TRANSLATIONS,
  EDUCATION_DATA,
  RESEARCH_PAPERS,
  WORK_EXPERIENCE,
  RESEARCH_TEACHING,
  AWARDS,
  SKILLS,
  LANGUAGES_DATA,
  HOBBY_PROJECTS
} from './constants';

const getStoredLang = (): 'en' | 'de' | null => {
  if (typeof window === 'undefined') return null;
  try {
    const stored = window.localStorage.getItem('lang');
    if (stored === 'en' || stored === 'de') return stored;
  } catch {
    return null;
  }
  return null;
};

const getInitialLang = (): 'en' | 'de' => {
  const stored = getStoredLang();
  if (stored) return stored;
  if (typeof window === 'undefined') return 'en';
  return window.navigator?.language?.toLowerCase().startsWith('de') ? 'de' : 'en';
};

type ExperienceRow = {
  role: string;
  organization: string;
  location: string;
  period: string;
  details: string[];
};

const ExperienceList: React.FC<{ items: ExperienceRow[] }> = ({ items }) => (
  <ul className="space-y-8">
    {items.map((exp, idx) => (
      <li key={idx} className="grid grid-cols-12 gap-4 items-baseline">
        <div className="col-span-12 sm:col-span-3 text-xs font-mono text-zinc-500 tabular-nums">
          {exp.period}
        </div>
        <div className="col-span-12 sm:col-span-9">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <h3 className="text-base font-medium text-zinc-900">
              {exp.organization}
              <span className="text-zinc-400"> · </span>
              <span className="text-zinc-600 font-normal">{exp.role}</span>
            </h3>
            <span className="text-xs font-mono text-zinc-400">{exp.location}</span>
          </div>
          {exp.details.length > 0 && (
            <ul className="mt-2 space-y-1 text-sm text-zinc-600 leading-relaxed">
              {exp.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          )}
        </div>
      </li>
    ))}
  </ul>
);

const App: React.FC = () => {
  const [lang, setLang] = useState<'en' | 'de'>(getInitialLang);
  const t = TRANSLATIONS[lang];

  const toggleLang = () => setLang(prev => (prev === 'en' ? 'de' : 'en'));

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem('lang', lang);
    } catch {
      // ignore
    }
  }, [lang]);

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <div className="max-w-3xl mx-auto px-6 lg:px-0">
        <nav className="sticky top-0 z-50 py-6 bg-white/80 backdrop-blur-md flex justify-between items-center">
          <a href="#top" className="text-sm font-medium tracking-tight">Tom Zeising</a>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">
              <a href="#about" className="hover:text-zinc-900 transition-colors">{t.nav.about}</a>
              <a href="#experience" className="hover:text-zinc-900 transition-colors">{t.nav.experience}</a>
              <a href="#research" className="hover:text-zinc-900 transition-colors">{t.nav.research}</a>
              <a href="#projects" className="hover:text-zinc-900 transition-colors">{t.nav.projects}</a>
              <a href="#contact" className="hover:text-zinc-900 transition-colors">{t.nav.contact}</a>
            </div>
            <button
              onClick={toggleLang}
              className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 hover:text-zinc-900 transition-colors"
              aria-label="Toggle language"
            >
              <span className={lang === 'en' ? 'text-zinc-900' : ''}>EN</span>
              <span className="mx-1 text-zinc-300">/</span>
              <span className={lang === 'de' ? 'text-zinc-900' : ''}>DE</span>
            </button>
          </div>
        </nav>

        <header id="top" className="pt-16 pb-20 flex flex-col sm:flex-row gap-8 sm:items-center">
          <img
            src={portrait}
            alt="Tom Zeising"
            className="w-20 h-20 rounded-full object-cover border border-zinc-200 grayscale"
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-medium tracking-tight leading-tight">
              {t.hero.tagline}
            </h1>
            <p className="mt-4 text-base text-zinc-600 leading-relaxed max-w-xl">
              {t.hero.intro}
            </p>
          </div>
        </header>

        <main>
          <Section id="about" title={t.about.title}>
            <h3 className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400 mb-6">
              {t.about.education}
            </h3>
            <ul className="space-y-6">
              {EDUCATION_DATA[lang].map((edu, idx) => (
                <li key={idx} className="grid grid-cols-12 gap-4 items-baseline">
                  <div className="col-span-12 sm:col-span-3 text-xs font-mono text-zinc-500 tabular-nums">
                    {edu.period}
                  </div>
                  <div className="col-span-12 sm:col-span-9 flex flex-wrap items-baseline justify-between gap-x-4">
                    <span className="text-base">
                      <span className="font-medium text-zinc-900">{edu.institution}</span>
                      <span className="text-zinc-400"> · </span>
                      <span className="text-zinc-600">{edu.degree}</span>
                    </span>
                    <span className="text-xs font-mono text-zinc-400">{edu.location}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="experience" title={t.experience.title}>
            <div className="space-y-12">
              <div>
                <h3 className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400 mb-6">
                  {t.experience.professional}
                </h3>
                <ExperienceList items={WORK_EXPERIENCE[lang]} />
              </div>
              <div>
                <h3 className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400 mb-6">
                  {t.experience.researchTeaching}
                </h3>
                <ExperienceList items={RESEARCH_TEACHING[lang]} />
              </div>
            </div>
          </Section>

          <Section id="research" title={t.research.title}>
            <ul className="space-y-6">
              {RESEARCH_PAPERS.map((paper, idx) => (
                <li key={idx} className="grid grid-cols-12 gap-4 items-baseline">
                  <div className="col-span-12 sm:col-span-3 text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    {paper.status}
                  </div>
                  <div className="col-span-12 sm:col-span-9">
                    {paper.link ? (
                      <a
                        href={paper.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base text-zinc-900 hover:text-zinc-500 transition-colors underline decoration-zinc-200 underline-offset-4"
                      >
                        {paper.title}
                      </a>
                    ) : (
                      <span className="text-base text-zinc-900">{paper.title}</span>
                    )}
                    <p className="mt-1 text-xs text-zinc-500">{paper.authors}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="projects" title={t.projects.title}>
            <ul className="space-y-8">
              {HOBBY_PROJECTS[lang].map((project, idx) => (
                <li key={idx}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium text-zinc-900 hover:text-zinc-500 transition-colors underline decoration-zinc-200 underline-offset-4"
                  >
                    {project.title}
                  </a>
                  <p className="mt-2 text-sm text-zinc-600 leading-relaxed max-w-xl">
                    {project.description}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">
                    {project.tags.map(tag => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="expertise" title={t.expertise.title}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div>
                <h3 className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400 mb-4">
                  {t.expertise.technical}
                </h3>
                <p className="text-sm text-zinc-700 leading-relaxed">
                  {SKILLS.join(' · ')}
                </p>
              </div>
              <div>
                <h3 className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400 mb-4">
                  {t.expertise.languages}
                </h3>
                <ul className="space-y-1 text-sm text-zinc-700">
                  {LANGUAGES_DATA.map((l, idx) => (
                    <li key={idx} className="flex justify-between max-w-[16rem]">
                      <span>{lang === 'en' ? l.langEn : l.langDe}</span>
                      <span className="text-zinc-400">{lang === 'en' ? l.levelEn : l.levelDe}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sm:col-span-2">
                <h3 className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400 mb-4">
                  {t.expertise.awards}
                </h3>
                <ul className="space-y-3">
                  {AWARDS[lang].map((award, idx) => (
                    <li key={idx} className="text-sm text-zinc-700">
                      <span className="font-medium text-zinc-900">{award.title}</span>
                      <span className="text-zinc-400"> — </span>
                      <span className="text-zinc-600">{award.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          <Section id="contact" title={t.contact.title}>
            <p className="text-base text-zinc-700 leading-relaxed max-w-xl">
              {t.contact.blurb}
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a href="mailto:tom.zeising@awi.uni-heidelberg.de" className="block text-zinc-900 hover:text-zinc-500 transition-colors">
                tom.zeising@awi.uni-heidelberg.de
              </a>
              <div className="flex gap-4 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 pt-2">
                <a href="https://linkedin.com/in/tzeising" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">LinkedIn</a>
                <a href="https://github.com/tzeising" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">GitHub</a>
                <a href="https://twitter.com/tzeising" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">Twitter</a>
              </div>
            </div>
          </Section>
        </main>

        <footer className="py-12 border-t border-zinc-200 mt-12">
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">
            &copy; {new Date().getFullYear()} Tom Zeising · {t.footer.tagline}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
