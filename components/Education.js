import { GraduationCap } from 'lucide-react';
import { education } from '../data/content';

export default function Education() {
  return (
    <div className="card p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-11 h-11 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-500">
          <GraduationCap size={22} />
        </div>
        <div>
          <p className="eyebrow">Education</p>
          <p className="font-display font-semibold text-ink-900">My qualifications</p>
        </div>
      </div>

      <div className="space-y-5 pt-5 border-t border-sky-100">
        {education.map((e, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="mt-2 w-2 h-2 rounded-full bg-sky-400 flex-shrink-0" />
            <div>
              <h4 className="font-display font-semibold text-ink-900 leading-snug">{e.degree}</h4>
              <p className="text-sky-600 text-sm">{e.school} · {e.location}</p>
              <p className="text-ink-500 text-sm">{e.years}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}