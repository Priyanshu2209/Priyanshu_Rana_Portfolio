import { experience } from '../data/content';

export default function Experience() {
  return (
    <section id="experience" className="section py-24">
      <div className="section-inner">
        <p className="eyebrow mb-3">Experience</p>
        <h2 className="section-title text-4xl md:text-5xl mb-12">Where I&apos;ve worked</h2>

        <div className="space-y-6">
          {experience.map((job, i) => (
            <div key={i} className="card p-8 md:p-10">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-6 gap-1">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-ink-900">{job.role}</h3>
                  <p className="text-sky-600 mt-1">{job.company}</p>
                  <p className="text-ink-500 text-sm">{job.location}</p>
                </div>
                <span className="text-ink-500 text-sm whitespace-nowrap">{job.date}</span>
              </div>
              <ul className="space-y-3">
                {job.points.map((pt, j) => (
                  <li key={j} className="flex gap-3 text-ink-600 leading-relaxed">
                    <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}