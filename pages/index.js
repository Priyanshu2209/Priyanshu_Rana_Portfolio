import { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, Download, Code, Database, Award, Briefcase, GraduationCap, ExternalLink, Send, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const generateStars = () => {
    const smallStars = Array.from({ length: 100 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random(),
    }));

    const mediumStars = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random(),
    }));

    const largeStars = Array.from({ length: 25 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random(),
    }));

    return { small: smallStars, medium: mediumStars, large: largeStars };
  };

  const [stars, setStars] = useState(generateStars());

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 3000);
      return;
    }

    setFormStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        setFormStatus('success');
        setTimeout(() => setFormStatus(''), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus(''), 3000);
      }
    } catch (error) {
      console.error('Network or parsing error:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="bg-gradient-animated absolute inset-0"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900 opacity-30 rounded-full blur-3xl"></div>
        </div>

        <div>
          {stars.small.map((style, i) => (
            <div key={`star-small-${i}`} className="star star-small" style={style} />
          ))}
          {stars.medium.map((style, i) => (
            <div key={`star-medium-${i}`} className="star star-medium" style={style} />
          ))}
          {stars.large.map((style, i) => (
            <div key={`star-large-${i}`} className="star star-large" style={style} />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        <nav className="nav-backdrop">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                Priyanshu Rana
              </div>
              
              <div className="hidden md:flex space-x-8">
                {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-all duration-300 ${
                      activeSection === section ? 'text-teal-400 font-semibold' : 'text-gray-300 hover:text-teal-300'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>

              <button className="md:hidden text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-slate-950 bg-opacity-95 backdrop-blur-md border-t border-teal-500 border-opacity-10">
              <div className="px-4 py-4 space-y-3">
                {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left capitalize py-2 text-gray-300 hover:text-teal-400 transition-colors"
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>

        <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-36 h-36 mx-auto mb-8 rounded-full bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 flex items-center justify-center text-6xl font-bold shadow-2xl border-4 border-teal-400 border-opacity-20">
              PR
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent animate-gradient">
              Priyanshu Rana
            </h1>
            <p className="text-2xl md:text-4xl text-teal-300 mb-8 font-light">
              Database Developer & Software Engineer
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Passionate developer specializing in database systems, web development, and software engineering. 
              Building efficient solutions with modern technologies.
            </p>
            <div className="flex justify-center space-x-6 mb-12">
              <a href="mailto:priyanshurana2228@gmail.com" className="social-icon-base social-icon-mail">
                <Mail size={28} className="text-teal-300" />
              </a>
              <a href="https://linkedin.com/in/priyanshu-rana-230a152a4" target="_blank" rel="noopener noreferrer" className="social-icon-base social-icon-linkedin">
                <Linkedin size={28} className="text-blue-300" />
              </a>
              <a href="https://github.com/Priyanshu2209" target="_blank" rel="noopener noreferrer" className="social-icon-base social-icon-github">
                <Github size={28} className="text-cyan-300" />
              </a>
            </div>
            <button onClick={() => scrollToSection('contact')} className="px-10 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get In Touch
            </button>
          </div>
        </section>

        <section id="about" className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="glass-card p-10">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I&apos;m a dedicated Computer Programming and Analysis student at Seneca Polytechnic with a strong foundation 
                in database systems and software development. My journey in tech began with a Diploma in Computer Engineering, 
                and I&apos;ve since gained valuable industry experience as a Database Intern at Tata Consultancy Services.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I specialize in designing and optimizing SQL databases, building full-stack web applications, and creating 
                efficient data management solutions. I&apos;m passionate about clean code, performance optimization, and solving 
                complex technical challenges.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="flex items-start space-x-4 bg-teal-500 bg-opacity-10 p-6 rounded-2xl border border-teal-400 border-opacity-20">
                  <GraduationCap className="text-teal-400 mt-1 flex-shrink-0" size={32} />
                  <div>
                    <h3 className="font-bold text-teal-300 mb-2 text-xl">Education</h3>
                    <p className="text-gray-300">Computer Programming & Analysis</p>
                    <p className="text-gray-400 text-sm">Seneca Polytechnic (2024-2026)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-cyan-500 bg-opacity-10 p-6 rounded-2xl border border-cyan-400 border-opacity-20">
                  <Briefcase className="text-cyan-400 mt-1 flex-shrink-0" size={32} />
                  <div>
                    <h3 className="font-bold text-cyan-300 mb-2 text-xl">Experience</h3>
                    <p className="text-gray-300">Database Intern</p>
                    <p className="text-gray-400 text-sm">Tata Consultancy Services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-8 text-center text-gray-500 border-t border-teal-500 border-opacity-20">
          <p className="text-lg">© 2025 Priyanshu Rana. Built with React & Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  );
}