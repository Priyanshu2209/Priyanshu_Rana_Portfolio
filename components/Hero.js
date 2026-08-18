import { Mail, Linkedin, Github, ArrowDown } from 'lucide-react';
import { profile } from '../data/content';

export default function Hero() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="section min-h-screen flex items-center">
      <div className="section-inner w-full py-32 text-center">
        <p className="eyebrow mb-6">Data Analyst · Database Developer</p>
        <h1 className="font-serif text-5xl md:text-7xl font-semibold text-parchment leading-[1.05] mb-8">
          {profile.name}
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted leading-relaxed mb-12">
          {profile.tagline}
        </p>

        <div className="flex justify-center gap-4 mb-12">
          <a href={`mailto:${profile.email}`} className="p-3 rounded-full border border-brass-500/20 text-muted hover:text-brass-400 hover:border-brass-500/40 transition-colors" aria-label="Email">
            <Mail size={20} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-brass-500/20 text-muted hover:text-brass-400 hover:border-brass-500/40 transition-colors" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-brass-500/20 text-muted hover:text-brass-400 hover:border-brass-500/40 transition-colors" aria-label="GitHub">
            <Github size={20} />
          </a>
        </div>

        <button
          onClick={() => go('contact')}
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-brass-500 hover:bg-brass-400 text-ink-950 rounded-full font-medium text-sm transition-colors"
        >
          Get in touch
        </button>

        <div className="mt-20 flex justify-center">
          <button onClick={() => go('about')} className="text-muted hover:text-brass-400 transition-colors animate-bounce" aria-label="Scroll down">
            <ArrowDown size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}