import { experience } from '../data/content';

export default function Experience() {
  return (
    <section id="experience" className="section py-28">
      <div className="section-inner">
        <p className="eyebrow mb-3">Experience</p>
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-parchment mb-12">
          Where I&apos;ve worked
        </h2>

        <div className="space-y-6">
          {experience.map((job, i) => (
            <div key={i} className="card p-8 md:p-10">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-6 gap-1">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-parchment">{job.role}</h3>
                  <p className="text-brass-400 mt-1">{job.company}</p>
                  <p className="text-muted text-sm">{job.location}</p>
                </div>
                <span className="text-muted text-sm whitespace-nowrap">{job.date}</span>
              </div>
              <ul className="space-y-3">
                {job.points.map((pt, j) => (
                  <li key={j} className="flex gap-3 text-muted leading-relaxed">
                    <span className="text-brass-500 mt-2 flex-shrink-0 w-1 h-1 rounded-full bg-brass-500" />
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