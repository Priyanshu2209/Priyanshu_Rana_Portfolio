import { about } from '../data/content';

export default function About() {
  return (
    <section id="about" className="section py-28">
      <div className="section-inner">
        <p className="eyebrow mb-3">About</p>
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-parchment mb-12">
          A little about me
        </h2>

        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3 space-y-5">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-muted text-lg leading-relaxed">{p}</p>
            ))}
          </div>

          <div className="md:col-span-2 space-y-4">
            {about.cards.map((c) => (
              <div key={c.label} className="card p-6">
                <p className="eyebrow mb-2">{c.label}</p>
                <p className="text-parchment font-medium">{c.primary}</p>
                <p className="text-muted text-sm mt-1">{c.secondary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}