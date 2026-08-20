import { useState } from 'react';
import { ExternalLink, ChevronDown, Github } from 'lucide-react';
import { projects } from '../data/content';
import CloudPuff from './CloudPuff';

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="projects" className="section py-24">
      <div className="section-inner">
        <p className="eyebrow mb-3">Projects</p>
        <h2 className="section-title text-4xl md:text-5xl mb-12">Selected work</h2>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          {projects.map((p, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="card p-8 flex flex-col">
                <button onClick={() => toggle(i)} className="text-left w-full" aria-expanded={isOpen}>
                  <div className="flex items-start justify-between mb-4">
                    <span className="eyebrow">{p.stack}</span>
                    <ChevronDown size={20} className={`text-sky-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-ink-900 mb-3">{p.title}</h3>
                  <p className="text-ink-600 leading-relaxed">{p.description}</p>
                </button>

                <div className={`grid transition-[grid-template-rows] duration-500 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <div className="pt-5 mt-5 border-t border-sky-100 space-y-5">
                      {p.details && <p className="text-ink-600 leading-relaxed">{p.details}</p>}
                      {p.features && (
                        <div>
                          <p className="eyebrow mb-2">Features</p>
                          <ul className="space-y-2">
                            {p.features.map((f, j) => (
                              <li key={j} className="flex gap-2.5 text-ink-600 text-sm leading-relaxed">
                                <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-sky-400" />
                                <span>{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {p.outcomes && (
                        <div>
                          <p className="eyebrow mb-2">Outcome</p>
                          <p className="text-ink-600 text-sm leading-relaxed">{p.outcomes}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>

                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn-sketch group/btn w-full mt-5">
                    <CloudPuff />
                    <Github size={16} />
                    View on GitHub
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}