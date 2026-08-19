import { Mail, Linkedin, Github, ArrowDown } from 'lucide-react';
import { profile } from '../data/content';

export default function Hero() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="section min-h-screen flex items-center">
      <div className="section-inner w-full py-32 text-center">
        {/* Profile photo */}
        <div className="flex justify-center mb-8">
          <div className="relative animate-float">
            <div className="absolute inset-0 rounded-full bg-sky-300/40 blur-2xl scale-110" />
            <img
              src={profile.photo}
              alt={profile.name}
              className="relative w-36 h-36 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-xl ring-1 ring-sky-200"
            />
          </div>
        </div>

        <p className="eyebrow mb-6 animate-fade-up">Data Analyst · Database Developer</p>
        <h1
          className="font-display text-5xl md:text-7xl font-bold text-ink-900 leading-[1.05] mb-8 animate-fade-up"
          style={{ animationDelay: '0.05s' }}
        >
          {profile.name}
        </h1>
        <p
          className="max-w-2xl mx-auto text-lg md:text-xl text-ink-600 leading-relaxed mb-12 animate-fade-up"
          style={{ animationDelay: '0.1s' }}
        >
          {profile.tagline}
        </p>

        <div className="flex justify-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: '0.15s' }}>
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

        <button onClick={() => go('contact')} className="btn-primary animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Get in touch
        </button>

        <div className="mt-20 flex justify-center">
          <button onClick={() => go('about')} className="text-sky-400 hover:text-sky-600 transition-colors animate-bounce" aria-label="Scroll down">
            <ArrowDown size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}