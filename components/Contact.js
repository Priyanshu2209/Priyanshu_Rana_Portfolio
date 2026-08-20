import { useState } from 'react';
import { Mail, Linkedin, Github, Send, Download } from 'lucide-react';
import { profile } from '../data/content';
import CloudPuff from './CloudPuff';

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
    'w-full px-4 py-3 bg-sky-50/50 border border-sky-200 rounded-lg focus:outline-none focus:border-sky-400 focus:bg-white text-ink-800 placeholder:text-ink-400 transition-colors';

  return (
    <section id="contact" className="section py-24">
      <div className="section-inner max-w-2xl">
        <p className="eyebrow mb-3">Contact</p>
        <h2 className="section-title text-4xl md:text-5xl mb-4">Let&apos;s talk</h2>
        <p className="text-ink-600 mb-12 leading-relaxed">
          I&apos;m open to new opportunities and collaborations. Feel free to reach out.
        </p>

        <div className="card p-8">
          <form onSubmit={submit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={field} placeholder="Your name" required />
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={field} placeholder="your.email@example.com" required />
            </div>
            <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} className={field} placeholder="Your message..." required />
            <button type="submit" disabled={status === 'sending'} className="btn-primary group/btn w-full disabled:opacity-50 disabled:cursor-not-allowed">
              <CloudPuff />
              <Send size={18} />
              {status === 'sending' ? 'Sending...' : 'Send message'}
            </button>

            {status === 'success' && (
              <p className="text-center text-sm text-sky-700 bg-sky-50 border border-sky-200 rounded-lg py-3">
                Thank you — your message has been sent. I&apos;ll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-center text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg py-3">
                Something went wrong. Please email me directly at {profile.email}.
              </p>
            )}
          </form>

          <div className="mt-10 pt-8 border-t border-sky-100">
            <div className="flex justify-center gap-6 mb-6">
              <a href={`mailto:${profile.email}`} className="text-ink-400 hover:text-sky-600 transition-colors" aria-label="Email"><Mail size={22} /></a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-ink-400 hover:text-sky-600 transition-colors" aria-label="LinkedIn"><Linkedin size={22} /></a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-ink-400 hover:text-sky-600 transition-colors" aria-label="GitHub"><Github size={22} /></a>
            </div>
            <p className="text-center text-ink-500 text-sm mb-8">{profile.location} · {profile.phone}</p>

            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-sketch group/btn w-full">
              <CloudPuff />
              <Download size={18} />
              Download résumé
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}