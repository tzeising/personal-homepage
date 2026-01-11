
import React, { useEffect, useState } from 'react';
import Section from './components/Section';
import logo from './components/TZ-logo.svg';
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

const NewsTicker: React.FC<{ lang: 'en' | 'de' }> = ({ lang }) => {
  const news = TRANSLATIONS[lang].news;
  // Repeat items to ensure smooth infinite scroll
  const items = [...news.items, ...news.items, ...news.items];
  
  return (
    <div className="bg-zinc-900 text-white overflow-hidden py-3 border-b border-white/10 relative">
      <div className="flex whitespace-nowrap animate-marquee hover:pause group">
        {items.map((item, idx) => (
          <a 
            key={idx} 
            href={item.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mx-12 text-[10px] font-bold uppercase tracking-[0.3em] hover:text-green-400 transition-colors flex items-center gap-3"
          >
            <span className="text-zinc-500 font-mono tracking-normal">[{news.prefix}]</span>
            {item.text}
          </a>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

const getInitialLang = (): 'en' | 'de' => {
  if (typeof window === 'undefined') {
    return 'en';
  }

  const storedLang = window.localStorage.getItem('lang');
  if (storedLang === 'en' || storedLang === 'de') {
    return storedLang;
  }

  return window.navigator.language.toLowerCase().startsWith('de') ? 'de' : 'en';
};

const App: React.FC = () => {
  const [lang, setLang] = useState<'en' | 'de'>(getInitialLang);
  const t = TRANSLATIONS[lang];

  const toggleLang = () => setLang(prev => prev === 'en' ? 'de' : 'en');

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem('lang', lang);
  }, [lang]);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* News Ticker at the very top */}
      <NewsTicker lang={lang} />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 selection:bg-zinc-200">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 py-8 bg-[#fafafa]/80 backdrop-blur-md flex justify-between items-center border-b border-transparent">
          <div className="flex items-center gap-3">
            <img src={logo} alt="TZ logo" className="w-8 h-8" />
            <h1 className="text-lg font-semibold tracking-tight">Tom Zeising</h1>
          </div>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex space-x-8 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
              <a href="#about" className="hover:text-zinc-900 transition-colors">{t.nav.about}</a>
              <a href="#research" className="hover:text-zinc-900 transition-colors">{t.nav.research}</a>
              <a href="#projects" className="hover:text-zinc-900 transition-colors">{t.nav.projects}</a>
              <a href="#experience" className="hover:text-zinc-900 transition-colors">{t.nav.experience}</a>
              <a href="#contact" className="hover:text-zinc-900 transition-colors">{t.nav.contact}</a>
            </div>
            
            {/* Language Switcher */}
            <button 
              onClick={toggleLang}
              className="px-3 py-1 border border-zinc-200 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 hover:border-zinc-900 hover:text-zinc-900 transition-all rounded-sm flex items-center gap-2"
            >
              <span className={lang === 'en' ? 'text-zinc-900 font-black' : ''}>EN</span>
              <span className="w-px h-2 bg-zinc-200"></span>
              <span className={lang === 'de' ? 'text-zinc-900 font-black' : ''}>DE</span>
            </button>
          </div>
        </nav>

        {/* Hero */}
        <header className="py-24 md:py-32 flex flex-col md:flex-row gap-16 items-start md:items-center">
          <div className="flex-1">
            {/* Open for Work Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 text-white rounded-full mb-8">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest">{t.hero.openForWork}</span>
            </div>
            
            <h2 className="serif text-5xl md:text-7xl font-normal leading-tight text-zinc-900 max-w-4xl">
              {t.hero.role1} <br />
              {t.hero.role2} <br />
              <span className="text-zinc-400 italic">{t.hero.role3}</span>
            </h2>
            <p className="mt-12 text-lg md:text-xl text-zinc-600 max-w-2xl leading-relaxed">
              {t.hero.subtitle}
            </p>
          </div>
          
          {/* Portrait Photo Section */}
          <div className="relative w-full max-w-sm md:w-80 lg:w-96 flex-shrink-0 group">
            <div className="aspect-[3/4] bg-zinc-100 rounded-sm overflow-hidden border border-zinc-200 shadow-xl transition-transform duration-700 group-hover:scale-[1.01]">
              {/* Note for the User: Replace the src with your portrait file path, e.g., src="portrait.jpg" */}
              <div className="w-full h-full relative">
                <div className="absolute inset-0 bg-zinc-50 flex items-center justify-center text-zinc-300 font-mono text-[10px] uppercase tracking-widest">
                  {t.hero.portraitPlaceholder}
                </div>
                {/* 
                  IMPORTANT: This image tag is set up to work as soon as you provide the file.
                  For GitHub Pages, ensure the image file is in the same directory.
                */}
                <img 
                  src={portrait} 
                  alt="Portrait of Tom Zeising" 
                  className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-0"
                  onLoad={(e) => (e.currentTarget.style.opacity = '1')}
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-white border border-zinc-200 rotate-45 flex items-center justify-center shadow-md">
              <div className="-rotate-45 text-[10px] font-bold text-zinc-400">TZ</div>
            </div>
          </div>
        </header>

        <main>
          {/* About */}
          <Section id="about" title={t.nav.about}>
            <div className="space-y-12">
              <p className="text-xl text-zinc-800 leading-relaxed font-light max-w-3xl">
                {t.about.bio}
              </p>
              
              <div className="space-y-8 pt-4">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">{t.about.education}</h3>
                <div className="space-y-8">
                  {EDUCATION_DATA[lang].map((edu, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row md:justify-between gap-2">
                      <div className="max-w-xl">
                        <h4 className="text-lg font-medium text-zinc-900">{edu.institution}</h4>
                        <p className="text-zinc-700 serif italic">{edu.degree}</p>
                        {edu.details && <p className="text-sm text-zinc-500 mt-2 leading-relaxed">{edu.details}</p>}
                      </div>
                      <div className="text-right md:min-w-[150px]">
                        <span className="text-xs font-mono text-zinc-400 block">{edu.location}</span>
                        <span className="text-xs font-mono text-zinc-400">{edu.period}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          {/* Research Papers */}
          <Section id="research" title={t.research.title}>
            <div className="divide-y divide-zinc-200">
              {RESEARCH_PAPERS.map((paper, idx) => (
                <div key={idx} className="group py-8 first:pt-0">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-4">
                    <div className="max-w-2xl">
                      {paper.link ? (
                        <a 
                          href={paper.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-baseline gap-2 group/link"
                        >
                          <h3 className="text-2xl font-normal text-zinc-900 group-hover:text-zinc-500 transition-colors italic serif decoration-zinc-200 group-hover/link:underline underline-offset-4">
                            {paper.title}
                          </h3>
                          <svg className="w-3 h-3 text-zinc-300 group-hover/link:text-zinc-900 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        <h3 className="text-2xl font-normal text-zinc-900 italic serif">
                          {paper.title}
                        </h3>
                      )}
                      <p className="mt-2 text-sm text-zinc-500 font-medium">
                        {paper.authors}
                      </p>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 border border-zinc-200 px-2 py-0.5 whitespace-nowrap">
                      {paper.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Hobby/Side Projects */}
          <Section id="projects" title={t.projects.title}>
            <div className="space-y-16">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">{t.projects.subtitle}</h3>
              <div className="divide-y divide-zinc-200">
                {HOBBY_PROJECTS[lang].map((project, idx) => (
                  <div key={idx} className="py-8 first:pt-0 group">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-4">
                      <div className="max-w-2xl">
                        <a 
                          href={project.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-2xl font-normal text-zinc-900 hover:text-zinc-600 transition-colors italic serif underline decoration-zinc-200 underline-offset-8"
                        >
                          {project.title}
                        </a>
                        <p className="mt-6 text-zinc-600 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 md:justify-end">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* Experience */}
          <Section id="experience" title={t.experience.title}>
            <div className="space-y-20">
              {/* Work */}
              <div className="space-y-12">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">{t.experience.professional}</h3>
                {WORK_EXPERIENCE[lang].map((exp, idx) => (
                  <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-lg font-medium text-zinc-900">{exp.organization}</h3>
                      <p className="text-zinc-500 text-xs mt-1 uppercase tracking-wider">{exp.location} / {exp.period}</p>
                    </div>
                    <div>
                      <h4 className="text-lg text-zinc-700 italic serif">{exp.role}</h4>
                      <ul className="mt-4 space-y-2">
                        {exp.details.map((d, i) => (
                          <li key={i} className="text-sm text-zinc-600 leading-relaxed flex items-start gap-2">
                            <span className="text-zinc-300">—</span> {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Research & Teaching */}
              <div className="space-y-12 pt-12 border-t border-zinc-100">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">{t.experience.researchTeaching}</h3>
                {RESEARCH_TEACHING[lang].map((exp, idx) => (
                  <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-lg font-medium text-zinc-900">{exp.organization}</h3>
                      <p className="text-zinc-500 text-xs mt-1 uppercase tracking-wider">{exp.location} / {exp.period}</p>
                    </div>
                    <div>
                      <h4 className="text-lg text-zinc-700 italic serif">{exp.role}</h4>
                      <ul className="mt-4 space-y-2">
                        {exp.details.map((d, i) => (
                          <li key={i} className="text-sm text-zinc-600 leading-relaxed flex items-start gap-2">
                            <span className="text-zinc-300">—</span> {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* Expertise */}
          <Section id="expertise" title={t.expertise.title}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-10">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">{t.expertise.awards}</h3>
                <div className="space-y-6">
                  {AWARDS[lang].map((award, idx) => (
                    <div key={idx}>
                      <h4 className="text-sm font-semibold text-zinc-900">{award.title}</h4>
                      <p className="text-sm text-zinc-500 mt-1 leading-relaxed">{award.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-10">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">{t.expertise.technical}</h3>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {SKILLS.map((skill, idx) => (
                    <span key={idx} className="text-sm text-zinc-700 bg-zinc-200/50 px-3 py-1 rounded-sm">{skill}</span>
                  ))}
                </div>
                
                <div className="pt-8 space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">{t.expertise.languages}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {LANGUAGES_DATA.map((l, idx) => (
                      <div key={idx}>
                        <span className="text-sm font-medium text-zinc-800">{lang === 'en' ? l.langEn : l.langDe}</span>
                        <span className="text-xs text-zinc-400 ml-2">({lang === 'en' ? l.levelEn : l.levelDe})</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Contact */}
          <Section id="contact" title={t.contact.title}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-2xl serif italic text-zinc-800">
                  {t.contact.collab}
                </p>
                <div className="mt-8 space-y-4">
                  <a href="mailto:tom.zeising@awi.uni-heidelberg.de" className="block text-xl border-b border-zinc-200 pb-2 hover:border-zinc-900 transition-all font-medium">
                    tom.zeising@awi.uni-heidelberg.de
                  </a>
                  <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    <a href="https://linkedin.com/in/tzeising" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">LinkedIn</a>
                    <a href="https://github.com/tzeising" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">GitHub</a>
                    <a href="https://twitter.com/tzeising" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">Twitter</a>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center">
                 <div className="w-full h-48 border border-zinc-200 flex items-center justify-center p-8 bg-zinc-50 relative group">
                    <span className="text-zinc-400 text-[10px] font-mono leading-loose text-center uppercase tracking-widest">
                      {t.contact.addressLines.map((line) => (
                        <React.Fragment key={line}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </span>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-zinc-900 text-white transition-opacity flex items-center justify-center">
                      <span className="text-[10px] font-bold tracking-[0.3em] uppercase italic">{t.contact.office}</span>
                    </div>
                 </div>
              </div>
            </div>
          </Section>
        </main>

        <footer className="py-20 text-center border-t border-zinc-100 mt-20">
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-medium">
            &copy; {new Date().getFullYear()} Tom Zeising — {t.footer.tagline}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
