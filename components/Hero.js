import { Mail, Linkedin, Github, FileText } from 'lucide-react';
import { profile } from '../data/content';
import CloudPuff from './CloudPuff';

export default function Hero() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="section min-h-screen flex items-center">
      <div className="section-inner w-full py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left — profile photo */}
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

          {/* Right — name, tagline, links, buttons */}
          <div className="text-center md:text-left order-2">
            <p className="eyebrow mb-4 animate-fade-up">Data Analyst · Database Developer</p>

            <h1
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-ink-900 leading-[1.05] mb-2 animate-fade-up"
              style={{ animationDelay: '0.05s' }}
            >
              {profile.name}
            </h1>

            {/* Hand-drawn underline — controlled width, tucked under the name */}
            <svg
              className="w-40 md:w-48 h-3 text-sky-500 mb-6 mx-auto md:mx-0 animate-fade-up"
              viewBox="0 0 200 12"
              fill="none"
              style={{ animationDelay: '0.08s' }}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 8 C 45 3, 85 11, 125 6 S 190 3, 198 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
            </svg>

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

            <div
              className="flex flex-wrap justify-center md:justify-start gap-4 animate-fade-up"
              style={{ animationDelay: '0.2s' }}
            >
              <button onClick={() => go('contact')} className="btn-primary group/btn">
                <CloudPuff />
                Get in touch
              </button>

              <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-sketch group/btn">
                <CloudPuff />
                <FileText size={18} />
                View résumé
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}