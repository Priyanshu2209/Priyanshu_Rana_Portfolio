import { Award, ExternalLink, Download } from 'lucide-react';
import { certificates } from '../data/content';
import CloudPuff from './CloudPuff';

export default function Certificates() {
  return (
    <section id="certificates" className="section py-24">
      <div className="section-inner">
        <p className="eyebrow mb-3">Certificates</p>
        <h2 className="section-title text-4xl md:text-5xl mb-12">Recognition</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((c, i) => (
            <div key={i} className="card p-8 flex flex-col">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-500">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink-900 leading-snug">{c.title}</h3>
                  <p className="text-sky-600 text-sm mt-1">{c.issuer} · {c.date}</p>
                </div>
              </div>

              <div className="flex gap-3 mt-auto">
                <a href={c.file} target="_blank" rel="noopener noreferrer" className="btn-sketch group/btn flex-1">
                  <CloudPuff />
                  <ExternalLink size={16} />
                  View
                </a>
                <a href={c.file} download className="btn-sketch group/btn flex-1">
                  <CloudPuff />
                  <Download size={16} />
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}