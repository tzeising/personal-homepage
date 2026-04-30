
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-16 border-t border-zinc-200">
      <h2 className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400 mb-10">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
