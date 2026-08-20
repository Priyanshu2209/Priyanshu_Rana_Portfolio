import { Mail, Linkedin, Github } from 'lucide-react';
import { profile } from '../data/content';

function DoodleCloud() {
  return (
    <svg
      className="doodle-bob absolute -top-6 -right-6 md:-top-8 md:right-4 w-16 h-10 text-sky-400"
      viewBox="0 0 80 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M18 40 Q8 40 9 31 Q1 22 13 18 Q15 5 33 9 Q42 -1 58 6 Q76 4 74 22 Q80 32 66 40 Z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* little sketch shading strokes */}
      <path d="M24 44 L28 40 M34 45 L39 40 M46 44 L50 40" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

export default function Hero() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="section min-h-screen flex items-center">
      <div className="section-inner w-full py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left — profile photo (gentle float) */}
          <div className="flex justify-center md:justify-end order-1">
            <div className="relative animate-float">
              <div className="absolute inset-0 rounded-full bg-sky-300/50 blur-3xl scale-110" />
              <div className="absolute -inset-3 rounded-full border border-sky-200/60" />
              <img
                src={profile.photo}
                alt={profile.name}
                className="relative w-60 h-60 md:w-72 md:h-72 rounded-full object-cover border-4 border-white shadow-2xl ring-1 ring-sky-200"
              />
            </div>
          </div>

          {/* Right — name, tagline, links, button */}
          <div className="text-center md:text-left order-2">
            <p className="eyebrow mb-4 animate-fade-up">Data Analyst · Database Developer</p>

            <div className="relative inline-block">
              {/* sketch cloud doodle floating by the name */}
              <DoodleCloud />
              <h1
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-ink-900 leading-[1.05] mb-6 animate-fade-up"
                style={{ animationDelay: '0.05s' }}
              >
                <span className="sketch-underline">{profile.name}</span>
              </h1>
            </div>

            <p
              className="text-lg md:text-xl text-ink-600 leading-relaxed mb-8 max-w-xl mx-auto md:mx-0 animate-fade-up"
              style={{ animationDelay: '0.1s' }}
            >
              {profile.tagline}
            </p>

            <div
              className="flex justify-center md:justify-start gap-4 mb-8 animate-fade-up"
              style={{ animationDelay: '0.15s' }}
            >
              <a href={`mailto:${profile.email}`} className="p-3 rounded-full bg-white border border-sky-100 text-ink-500 hover:text-sky-600 hover:border-sky-300 hover:-translate-y-1 transition-all shadow-sm" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white border border-sky-100 text-ink-500 hover:text-sky-600 hover:border-sky-300 hover:-translate-y-1 transition-all shadow-sm" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white border border-sky-100 text-ink-500 hover:text-sky-600 hover:border-sky-300 hover:-translate-y-1 transition-all shadow-sm" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>

            <button
              onClick={() => go('contact')}
              className="btn-primary animate-fade-up"
              style={{ animationDelay: '0.2s' }}
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}