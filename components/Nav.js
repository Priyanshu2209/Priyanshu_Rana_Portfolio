import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { sections, profile } from '../data/content';

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
    <nav className="fixed top-0 w-full bg-ink-950/80 backdrop-blur-md z-50 border-b border-brass-500/10">
      <div className="max-w-content mx-auto px-6 flex justify-between items-center h-16">
        <button onClick={() => go('home')} className="font-serif text-lg font-semibold text-parchment tracking-tight">
          Priyanshu Rana
        </button>

        <div className="hidden md:flex items-center gap-8">
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => go(s)}
              className={`text-sm capitalize transition-colors ${
                active === s ? 'text-brass-400' : 'text-muted hover:text-parchment'
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <button className="md:hidden text-muted" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-ink-950/95 backdrop-blur-md border-t border-brass-500/10">
          <div className="px-6 py-4 space-y-1">
            {sections.map((s) => (
              <button
                key={s}
                onClick={() => go(s)}
                className="block w-full text-left capitalize py-2.5 text-sm text-muted hover:text-brass-400 transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}