import { ExternalLink } from 'lucide-react';
import { projects } from '../data/content';

export default function Projects() {
  return (
    <section id="projects" className="section py-24">
      <div className="section-inner">
        <p className="eyebrow mb-3">Projects</p>
        <h2 className="section-title text-4xl md:text-5xl mb-12">Selected work</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="card p-8 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <span className="eyebrow">{p.stack}</span>
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-ink-400 hover:text-sky-600 transition-colors" aria-label="View project">
                    <ExternalLink size={20} />
                  </a>
                ) : (
                  <span className="text-slate-300"><ExternalLink size={20} /></span>
                )}
              </div>
              <h3 className="font-display text-2xl font-semibold text-ink-900 mb-3">{p.title}</h3>
              <p className="text-ink-600 leading-relaxed mb-6 flex-grow">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}