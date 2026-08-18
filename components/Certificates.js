import { Award, ExternalLink } from 'lucide-react';
import { certificates } from '../data/content';

export default function Certificates() {
  return (
    <section id="certificates" className="section py-28">
      <div className="section-inner">
        <p className="eyebrow mb-3">Certificates</p>
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-parchment mb-12">
          Recognition
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((c, i) => (
            <a
              key={i}
              href={c.file}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-8 flex items-center gap-6 group"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-full border border-brass-500/30 flex items-center justify-center text-brass-400">
                <Award size={26} />
              </div>
              <div className="flex-grow">
                <h3 className="font-serif text-xl font-semibold text-parchment leading-snug">{c.title}</h3>
                <p className="text-brass-400 text-sm mt-1">{c.issuer} · {c.date}</p>
              </div>
              <ExternalLink size={20} className="text-muted group-hover:text-brass-400 transition-colors flex-shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}