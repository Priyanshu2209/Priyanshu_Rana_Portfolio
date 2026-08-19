import { GraduationCap, ChevronDown } from 'lucide-react';
import { education } from '../data/content';

export default function Education() {
  return (
    <div className="group card p-7 cursor-default transition-all duration-500 hover:shadow-2xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-500">
            <GraduationCap size={22} />
          </div>
          <div>
            <p className="eyebrow">Education</p>
            <p className="font-display font-semibold text-ink-900">
              {education.length} qualifications
            </p>
          </div>
        </div>
        <ChevronDown
          size={22}
          className="text-sky-400 transition-transform duration-500 group-hover:rotate-180"
        />
      </div>

      {/* Hint shown only before hover */}
      <p className="text-xs text-ink-500 mt-3 group-hover:hidden">
        Hover to view details
      </p>

      {/* Expanding panel */}
      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
        <div className="overflow-hidden">
          <div className="pt-5 mt-5 border-t border-sky-100 space-y-5">
            {education.map((e, i) => (
              <div
                key={i}
                className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                style={{ transitionDelay: `${100 + i * 120}ms` }}
              >
                <div className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-sky-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-display font-semibold text-ink-900">{e.degree}</h4>
                    <p className="text-sky-600 text-sm">{e.school} · {e.location}</p>
                    <p className="text-ink-500 text-sm">{e.years}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}