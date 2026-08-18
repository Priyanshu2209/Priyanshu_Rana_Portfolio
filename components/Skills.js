import { skills } from '../data/content';

export default function Skills() {
  return (
    <section id="skills" className="section py-28">
      <div className="section-inner">
        <p className="eyebrow mb-3">Skills</p>
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-parchment mb-12">
          Tools &amp; technologies
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((group) => (
            <div key={group.label} className="card p-8">
              <h3 className="font-serif text-xl font-semibold text-parchment mb-5">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}