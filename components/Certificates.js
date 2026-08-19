import { Award, ExternalLink, Download } from 'lucide-react';
import { certificates } from '../data/content';

export default function Certificates() {
  return (
    <section id="certificates" className="section py-28">
      <div className="section-inner">
        <p className="eyebrow mb-3">Certificates</p>
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-parchment mb-12">
          Recognition
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((c, i) => (
            <div key={i} className="card overflow-hidden flex flex-col">
              {/* Image preview of the certificate (opens full PDF on click) */}
              <a
                href={c.file}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block w-full bg-ink-950 border-b border-brass-500/10 group"
              >
                {c.preview ? (
                  <img
                    src={c.preview}
                    alt={`${c.title} preview`}
                    className="w-full h-auto object-contain max-h-96 mx-auto transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="w-full h-72 flex flex-col items-center justify-center text-muted gap-3">
                    <Award size={40} className="text-brass-400" />
                    <p className="text-sm">Preview unavailable — use the buttons below</p>
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center bg-ink-950/0 group-hover:bg-ink-950/30 transition-colors">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-2 px-4 py-2 bg-ink-950/80 text-parchment rounded-lg text-sm">
                    <ExternalLink size={16} /> Open full certificate
                  </span>
                </div>
              </a>

              {/* Details + actions */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start gap-3 mb-5">
                  <div className="flex-shrink-0 w-11 h-11 rounded-full border border-brass-500/30 flex items-center justify-center text-brass-400">
                    <Award size={22} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-parchment leading-snug">
                      {c.title}
                    </h3>
                    <p className="text-brass-400 text-sm mt-1">
                      {c.issuer} · {c.date}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 mt-auto">
                  <a
                    href={c.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-brass-500 hover:bg-brass-400 text-ink-950 rounded-lg text-sm font-medium transition-colors"
                  >
                    <ExternalLink size={16} />
                    View
                  </a>
                  <a
                    href={c.file}
                    download
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-brass-500/30 hover:border-brass-500/60 text-parchment rounded-lg text-sm font-medium transition-colors"
                  >
                    <Download size={16} />
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}