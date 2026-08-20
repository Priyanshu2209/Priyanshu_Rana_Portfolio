import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { sections } from '../data/content';

function Puff() {
  return (
    <svg className="nav-puff" viewBox="0 0 26 16" xmlns="http://www.w3.org/2000/svg" fill="#7dd3fc">
      <ellipse cx="8" cy="11" rx="7" ry="4" />
      <ellipse cx="14" cy="8" rx="6" ry="5" />
      <ellipse cx="19" cy="11" rx="6" ry="4" />
    </svg>
  );
}

function MiniCloud() {
  return (
    <svg className="mobile-puff w-6 h-4 text-sky-400 flex-shrink-0" viewBox="0 0 26 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="8" cy="11" rx="7" ry="4" />
      <ellipse cx="14" cy="8" rx="6" ry="5" />
      <ellipse cx="19" cy="11" rx="6" ry="4" />
    </svg>
  );
}

export default function Nav() {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const current = sections.find((s) => {
        const el = document.getElementById(s);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= 120 && r.bottom >= 120;
      });
      if (current) setActive(current);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md z-50 border-b border-sky-100">
      <div className="max-w-content mx-auto px-6 flex justify-between items-center h-16">
        <button onClick={() => go('home')} className="font-display text-lg font-bold text-ink-900">
          Priyanshu Rana
        </button>

        {/* Desktop nav — cloud puff on hover */}
        <div className="hidden md:flex items-center gap-7">
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => go(s)}
              className={`group/nav relative text-sm capitalize transition-colors py-1 ${
                active === s ? 'text-sky-600' : 'text-ink-500 hover:text-ink-800'
              }`}
            >
              <Puff />
              {s}
              <span
                className={`absolute left-0 -bottom-0.5 h-0.5 bg-sky-500 transition-all duration-300 ${
                  active === s ? 'w-full' : 'w-0 group-hover/nav:w-full'
                }`}
              />
            </button>
          ))}
        </div>

        <button className="md:hidden text-ink-600" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu — each item slides in with a little cloud that puffs on tap */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-sky-100">
          <div className="px-6 py-4 space-y-1">
            {sections.map((s, i) => (
              <button
                key={s}
                onClick={() => go(s)}
                className={`mobile-item flex items-center gap-3 w-full text-left capitalize py-2.5 text-sm transition-colors ${
                  active === s ? 'text-sky-600 font-semibold' : 'text-ink-600 hover:text-sky-600'
                }`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <MiniCloud />
                {s}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}