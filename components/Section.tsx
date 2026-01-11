
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`py-20 border-t border-zinc-200 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <h2 className="text-sm font-medium tracking-widest uppercase text-zinc-400">
            {title}
          </h2>
        </div>
        <div className="md:col-span-3">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
