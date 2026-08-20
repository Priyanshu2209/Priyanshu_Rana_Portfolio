import { about } from '../data/content';
import Education from './Education';

export default function About() {
  return (
    <section id="about" className="section py-24">
      <div className="section-inner">
        <p className="eyebrow mb-3">About</p>
        <h2 className="section-title text-4xl md:text-5xl mb-12">A little about me</h2>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Main about card */}
          <div className="md:col-span-3">
            <div className="card p-8 md:p-10 space-y-5">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-ink-600 leading-relaxed text-lg">{p}</p>
              ))}
            </div>
          </div>

          {/* Education (static — shows both) */}
          <div className="md:col-span-2">
            <Education />
          </div>
        </div>
      </div>
    </section>
  );
}