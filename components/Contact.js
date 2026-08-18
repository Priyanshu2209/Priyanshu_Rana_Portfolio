import { useState } from 'react';
import { Mail, Linkedin, Github, Send, Download } from 'lucide-react';
import { profile } from '../data/content';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setForm({ name: '', email: '', message: '' });
        setStatus('success');
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 3000);
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  const field =
    'w-full px-4 py-3 bg-ink-950 border border-brass-500/20 rounded-lg focus:outline-none focus:border-brass-500/50 text-parchment placeholder:text-muted/60 transition-colors';

  return (
    <section id="contact" className="section py-28">
      <div className="section-inner max-w-2xl">
        <p className="eyebrow mb-3 text-center">Contact</p>
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-parchment mb-4 text-center">
          Let&apos;s talk
        </h2>
        <p className="text-muted text-center mb-12 leading-relaxed">
          I&apos;m open to new opportunities and collaborations. Feel free to reach out.
        </p>

        <form onSubmit={submit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={field}
              placeholder="Your name"
              required
            />
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={field}
              placeholder="your.email@example.com"
              required
            />
          </div>
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={5}
            className={field}
            placeholder="Your message..."
            required
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-brass-500 hover:bg-brass-400 text-ink-950 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={18} />
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </button>

          {status === 'success' && (
            <p className="text-center text-sm text-brass-300 bg-brass-500/10 border border-brass-500/20 rounded-lg py-3">
              Thank you — your message has been sent. I&apos;ll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="text-center text-sm text-red-300 bg-red-500/10 border border-red-500/20 rounded-lg py-3">
              Something went wrong. Please email me directly at {profile.email}.
            </p>
          )}
        </form>

        <div className="mt-12 pt-8 border-t border-brass-500/10">
          <div className="flex justify-center gap-6 mb-6">
            <a href={`mailto:${profile.email}`} className="text-muted hover:text-brass-400 transition-colors" aria-label="Email"><Mail size={22} /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-brass-400 transition-colors" aria-label="LinkedIn"><Linkedin size={22} /></a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-brass-400 transition-colors" aria-label="GitHub"><Github size={22} /></a>
          </div>
          <p className="text-center text-muted text-sm mb-8">{profile.location} · {profile.phone}</p>

          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 border border-brass-500/25 hover:border-brass-500/50 text-parchment rounded-lg transition-colors"
          >
            <Download size={18} />
            Download résumé
          </a>
        </div>
      </div>
    </section>
  );
}