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
              {/* Embedded preview of the certificate */}
              <div className="relative w-full bg-ink-950 border-b border-brass-500/10">
                <object
                  data={`${c.file}#view=FitH&toolbar=0&navpanes=0`}
                  type="application/pdf"
                  className="w-full h-72"
                  aria-label={`${c.title} preview`}
                >
                  {/* Fallback if the browser can't inline-render the PDF */}
                  <div className="w-full h-72 flex flex-col items-center justify-center text-muted gap-3">
                    <Award size={40} className="text-brass-400" />
                    <p className="text-sm">Preview unavailable — use the buttons below</p>
                  </div>
                </object>
              </div>

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