import { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, Download, Code, Database, Award, Briefcase, GraduationCap, ExternalLink, Send, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [stars, setStars] = useState({ small: [], medium: [], large: [] });

  // Generate stars only on client side
  useEffect(() => {
    const generateStars = () => {
      const smallStars = Array.from({ length: 100 }, (_, i) => ({
        id: `small-${i}`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
      }));

      const mediumStars = Array.from({ length: 50 }, (_, i) => ({
        id: `medium-${i}`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
      }));

      const largeStars = Array.from({ length: 25 }, (_, i) => ({
        id: `large-${i}`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
      }));

      return { small: smallStars, medium: mediumStars, large: largeStars };
    };

    setStars(generateStars());
  }, []);

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
      console.error('Error:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 3000);
    }
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-b from-amber-950 via-orange-900 to-slate-900 text-slate-100 relative"
      style={{
        scrollbarColor: 'rgba(249, 115, 22, 0.6) rgba(0, 0, 0, 0.3)',
        scrollbarWidth: 'thin'
      }}
    >
      <style>{`
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(249, 115, 22, 0.6);
          border-radius: 5px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(249, 115, 22, 0.8);
        }
      `}</style>
      {/* Background with sunset gradient */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950"></div>
        
        {/* Randomly positioned stars with varying sizes and twinkle effect */}
        <svg className="absolute inset-0 w-full h-full" style={{opacity: 0.5}} preserveAspectRatio="none" viewBox="0 0 1000 1000\">
          <defs>
            <style>{`
              @keyframes twinkle1 { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
              @keyframes twinkle2 { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.9; } }
              @keyframes twinkle3 { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
              .star-tiny { animation: twinkle1 3s infinite; }
              .star-small { animation: twinkle2 4s infinite; }
              .star-medium { animation: twinkle3 5s infinite; }
            `}</style>
            <filter id="starGlow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Tiny stars - sparse */}
          {Array.from({length: 80}).map((_, i) => {
            const x = Math.random() * 1000;
            const y = Math.random() * 1000;
            const size = Math.random() * 0.8 + 0.4;
            return (
              <circle
                key={`tiny-${i}`}
                cx={x}
                cy={y}
                r={size}
                fill="rgba(255,255,255,1)"
                className="star-tiny"
                filter="url(#starGlow)"
              />
            );
          })}
          
          {/* Small-medium stars */}
          {Array.from({length: 45}).map((_, i) => {
            const x = Math.random() * 1000;
            const y = Math.random() * 1000;
            const size = Math.random() * 1.5 + 0.8;
            return (
              <circle
                key={`small-${i}`}
                cx={x}
                cy={y}
                r={size}
                fill="rgba(255,230,150,1)"
                className="star-small"
                filter="url(#starGlow)"
              />
            );
          })}
          
          {/* Medium stars - accent */}
          {Array.from({length: 12}).map((_, i) => {
            const x = Math.random() * 1000;
            const y = Math.random() * 1000;
            const size = Math.random() * 1.5 + 0.8;
            return (
              <circle
                key={`medium-${i}`}
                cx={x}
                cy={y}
                r={size}
                fill="rgba(255,250,200,1)"
                className="star-medium"
                filter="url(#starGlow)"
              />
            );
          })}
          
          {/* Larger bright accent stars */}
          {Array.from({length: 5}).map((_, i) => {
            const x = Math.random() * 1000;
            const y = Math.random() * 1000;
            const size = Math.random() * 1.8 + 1;
            return (
              <circle
                key={`large-${i}`}
                cx={x}
                cy={y}
                r={size}
                fill="rgba(255,200,100,1)"
                opacity={1}
                filter="url(#starGlow)"
              />
            );
          })}
        </svg>
        
        {/* Sunset gradient overlay with warm tones */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 120% 120% at 50% 20%, rgba(255, 140, 60, 0.15) 0%, transparent 40%), radial-gradient(ellipse 100% 100% at 50% 80%, rgba(100, 50, 20, 0.12) 0%, transparent 100%)'
        }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-gradient-to-b from-slate-950 to-blue-950 bg-opacity-90 backdrop-blur-lg z-50 border-b border-orange-600 border-opacity-40 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="text-2xl font-bold bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent font-serif">
                Priyanshu Rana
              </div>
              
              <div className="hidden md:flex space-x-8">
                {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-all duration-300 font-medium text-sm tracking-wide ${
                      activeSection === section ? 'text-orange-300 border-b-2 border-orange-400 pb-1' : 'text-slate-200 hover:text-orange-300'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>

              <button className="md:hidden text-orange-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-gradient-to-b from-slate-900 to-blue-950 bg-opacity-95 backdrop-blur-md border-t border-orange-600 border-opacity-40">
              <div className="px-4 py-4 space-y-3">
                {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left capitalize py-2 text-slate-200 hover:text-orange-300 transition-colors text-sm"
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 bg-gradient-to-b from-slate-950 via-blue-900 to-slate-900">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-12 mt-16 group">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-slate-950 via-blue-800 to-slate-950 flex items-center justify-center text-4xl font-bold border-4 border-amber-400 border-opacity-50 relative transform group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-serif tracking-wider">PR</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-orange-300 font-serif leading-tight">
              Priyanshu Rana
            </h1>
            <p className="text-2xl md:text-3xl text-orange-200 mb-2 font-light tracking-wide font-sans">Full Stack Developer</p>
            <p className="text-lg md:text-xl text-orange-100 mb-12 max-w-2xl mx-auto leading-relaxed font-sans font-light">
              Building elegant, scalable solutions with modern technologies. Specialized in database architecture, cloud infrastructure, and enterprise software development.
            </p>
            <div className="flex justify-center space-x-6 mb-12">
              <a href="mailto:priyanshurana2228@gmail.com" className="p-4 bg-transparent border-2 border-orange-400 hover:bg-orange-400 hover:bg-opacity-20 rounded-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-2">
                <Mail size={28} className="text-orange-400" />
              </a>
              <a href="https://linkedin.com/in/priyanshu-rana-230a152a4" target="_blank" rel="noopener noreferrer" className="p-4 bg-transparent border-2 border-orange-400 hover:bg-orange-400 hover:bg-opacity-20 rounded-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-2">
                <Linkedin size={28} className="text-orange-400" />
              </a>
              <a href="https://github.com/Priyanshu2209" target="_blank" rel="noopener noreferrer" className="p-4 bg-transparent border-2 border-orange-400 hover:bg-orange-400 hover:bg-opacity-20 rounded-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-2">
                <Github size={28} className="text-orange-400" />
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button onClick={() => scrollToSection('projects')} className="px-10 py-4 bg-transparent border-2 border-orange-400 hover:bg-orange-400 hover:bg-opacity-20 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 text-orange-400">View My Work</button>
              <button onClick={() => scrollToSection('contact')} className="px-10 py-4 bg-transparent border-2 border-orange-400 hover:bg-orange-400 hover:bg-opacity-20 rounded-lg font-bold text-lg transition-all text-orange-400 transform hover:scale-105 hover:-translate-y-2">Get In Touch</button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-6xl font-bold mb-16 text-center bg-gradient-to-r from-orange-300 to-amber-300 bg-clip-text text-transparent font-serif">
              About Me
            </h2>
            <div className="bg-slate-800 bg-opacity-30 backdrop-blur-md p-12 rounded-xl border border-amber-600 border-opacity-30 shadow-2xl" style={{boxShadow: '0 0 40px rgba(249, 115, 22, 0.08)'}}>
              <p className="text-slate-100 text-lg leading-relaxed mb-6">
                I&apos;m a dedicated Computer Programming and Analysis student at Seneca Polytechnic with a strong foundation 
                in database systems and software development. My journey in tech began with a Diploma in Computer Engineering, 
                and I&apos;ve since gained valuable industry experience as a Database Intern at Tata Consultancy Services.
              </p>
              <p className="text-slate-200 text-lg leading-relaxed mb-8">
                I specialize in designing and optimizing SQL databases, building full-stack web applications, and creating
                efficient data management solutions. I&apos;m passionate about clean code, performance optimization, and solving 
                complex technical challenges.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="flex items-start space-x-4 bg-slate-800 bg-opacity-50 p-6 rounded-lg border border-amber-600 border-opacity-30">
                  <GraduationCap className="text-orange-400 mt-1 flex-shrink-0" size={32} />
                  <div>
                    <h3 className="font-bold text-orange-300 mb-2 text-lg">Education</h3>
                    <p className="text-slate-100 font-semibold">Computer Programming & Analysis</p>
                    <p className="text-slate-400 text-sm mb-2">Seneca Polytechnic (2024-2026)</p>
                    <p className="text-slate-100 font-semibold text-sm">Diploma in Computer Engineering</p>
                    <p className="text-slate-400 text-sm">Completed 2023</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-slate-800 bg-opacity-50 p-6 rounded-lg border border-amber-600 border-opacity-30">
                  <Briefcase className="text-orange-400 mt-1 flex-shrink-0" size={32} />
                  <div>
                    <h3 className="font-bold text-orange-300 mb-2 text-lg">Experience</h3>
                    <p className="text-slate-100 font-semibold">Database Intern</p>
                    <p className="text-slate-400 text-sm mb-2">Tata Consultancy Services</p>
                    <p className="text-slate-100 font-semibold text-sm">Volunteer Mentor</p>
                    <p className="text-slate-400 text-sm">Tech Peer Mentorship Program</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-4 bg-transparent">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-6xl md:text-7xl font-bold mb-20 text-center bg-gradient-to-r from-orange-300 to-amber-300 bg-clip-text text-transparent font-serif">
              Experience
            </h2>
            <div className="space-y-8">
              <div className="bg-slate-800 bg-opacity-40 backdrop-blur-lg p-10 rounded-2xl border-2 border-orange-500 border-opacity-40 shadow-lg hover:border-opacity-70 transition-all duration-300" style={{boxShadow: '0 0 30px rgba(249, 115, 22, 0.1)'}}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-orange-200 mb-2">Data Analyst Co-op</h3>
                    <p className="text-orange-300 text-lg">AI Financial Group</p>
                    <p className="text-slate-300">Markham, ON</p>
                  </div>
                  <span className="text-slate-300 mt-2 sm:mt-0 font-light">Jan 2026 – Apr 2026</span>
                </div>
                <ul className="space-y-4 text-slate-100 text-lg">
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-3 text-xl">→</span>
                    <span>Analyzed and processed large-scale financial datasets using SQL Server Management Studio (SSMS) and Python Pandas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-3 text-xl">→</span>
                    <span>Designed and structured relational databases following financial data best practices, enabling efficient transaction processing and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-3 text-xl">→</span>
                    <span>Performed comprehensive data cleaning and validation on financial records, identifying and resolving inconsistencies to ensure data integrity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-3 text-xl">→</span>
                    <span>Optimized complex SQL queries to improve database performance and reduce query execution time for analytical reports</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-3 text-xl">→</span>
                    <span>Collaborated with analytics team to automate data ETL processes and deliver accurate financial metrics for decision-making</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800 bg-opacity-40 backdrop-blur-lg p-10 rounded-2xl border-2 border-orange-500 border-opacity-40 shadow-lg hover:border-opacity-70 transition-all duration-300" style={{boxShadow: '0 0 30px rgba(249, 115, 22, 0.1)'}}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-orange-200 mb-2">Database Intern</h3>
                    <p className="text-orange-300 text-lg">Tata Consultancy Services (TCS)</p>
                    <p className="text-slate-300">Ahmedabad, India</p>
                  </div>
                  <span className="text-slate-300 mt-2 sm:mt-0 font-light">Jan 2022 – Jun 2022</span>
                </div>
                <ul className="space-y-4 text-slate-100 text-lg">
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-3 text-xl">→</span>
                    <span>Designed and optimized SQL databases for internal business applications, improving query performance by 25%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-3 text-xl">→</span>
                    <span>Created data validation and cleanup scripts to ensure accuracy and consistency across datasets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-3 text-xl">→</span>
                    <span>Assisted in developing database reports and ER diagrams for cross-departmental data integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-3 text-xl">→</span>
                    <span>Collaborated with developers to streamline backend data pipelines and automate reporting</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800 bg-opacity-40 backdrop-blur-lg p-10 rounded-2xl border-2 border-orange-500 border-opacity-40 shadow-lg hover:border-opacity-70 transition-all duration-300" style={{boxShadow: '0 0 30px rgba(249, 115, 22, 0.1)'}}>
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-orange-200 mb-2">Volunteer Mentor</h3>
                  <p className="text-orange-300 text-lg">Tech Peer Mentorship Program</p>
                  <p className="text-slate-300">Seneca Polytechnic</p>
                </div>
                <ul className="space-y-4 text-slate-100 text-lg">
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-3 text-xl">→</span>
                    <span>Mentored first-year students in programming fundamentals and academic skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-3 text-xl">→</span>
                    <span>Facilitated collaborative coding sessions and supported debugging workshops</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-4 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-6xl md:text-7xl font-bold mb-20 text-center bg-gradient-to-r from-orange-300 to-amber-300 bg-clip-text text-transparent font-serif">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="group bg-slate-800 bg-opacity-40 backdrop-blur-lg p-8 rounded-2xl border-2 border-orange-500 border-opacity-40 shadow-lg hover:border-opacity-70 transition-all duration-300 transform hover:scale-105" style={{boxShadow: '0 0 30px rgba(249, 115, 22, 0.1)'}}>
                <div className="flex items-center justify-between mb-6">
                  <Code className="text-orange-400 group-hover:scale-110 transition-transform" size={32} />
                  <a href="https://github.com/Priyanshu2209/Blood_bank_system_database" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 transition-colors transform hover:scale-110">
                    <ExternalLink size={28} />
                  </a>
                </div>
                <h3 className="text-2xl font-bold text-orange-200 mb-4">Blood Bank Management</h3>
                <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                  Comprehensive SQL database system for managing blood donations with advanced queries, ER diagrams, and efficient data management framework.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-slate-700 bg-opacity-60 text-orange-200 rounded-full text-sm font-medium border border-orange-500 border-opacity-60 hover:border-opacity-100 transition-all cursor-default">SQL</span>
                  <span className="px-4 py-2 bg-slate-700 bg-opacity-60 text-orange-200 rounded-full text-sm font-medium border border-orange-500 border-opacity-60 hover:border-opacity-100 transition-all cursor-default">MySQL</span>
                  <span className="px-4 py-2 bg-slate-700 bg-opacity-60 text-orange-200 rounded-full text-sm font-medium border border-orange-500 border-opacity-60 hover:border-opacity-100 transition-all cursor-default">Database Design</span>
                </div>
              </div>

              <div className="group bg-slate-800 bg-opacity-40 backdrop-blur-lg p-8 rounded-2xl border-2 border-orange-500 border-opacity-40 shadow-lg hover:border-opacity-70 transition-all duration-300 transform hover:scale-105" style={{boxShadow: '0 0 30px rgba(249, 115, 22, 0.1)'}}>
                <div className="flex items-center justify-between mb-6">
                  <Code className="text-orange-400 group-hover:scale-110 transition-transform" size={32} />
                  <a href="https://github.com/Priyanshu2209/It-s_show_time" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 transition-colors transform hover:scale-110">
                    <ExternalLink size={28} />
                  </a>
                </div>
                <h3 className="text-2xl font-bold text-orange-200 mb-4">Movie Ticket Booking</h3>
                <p className="text-slate-100 mb-6 text-lg leading-relaxed">
                  Full-stack web application with responsive frontend, PHP backend, and MySQL integration for real-time seat booking, user authentication, and email confirmations.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-slate-700 bg-opacity-60 text-orange-200 rounded-full text-sm font-medium border border-orange-500 border-opacity-60 hover:border-opacity-100 transition-all cursor-default">HTML5</span>
                  <span className="px-4 py-2 bg-slate-700 bg-opacity-60 text-orange-200 rounded-full text-sm font-medium border border-orange-500 border-opacity-60 hover:border-opacity-100 transition-all cursor-default">CSS3</span>
                  <span className="px-4 py-2 bg-slate-700 bg-opacity-60 text-orange-200 rounded-full text-sm font-medium border border-orange-500 border-opacity-60 hover:border-opacity-100 transition-all cursor-default">JavaScript</span>
                  <span className="px-4 py-2 bg-slate-700 bg-opacity-60 text-orange-200 rounded-full text-sm font-medium border border-orange-500 border-opacity-60 hover:border-opacity-100 transition-all cursor-default">PHP</span>
                  <span className="px-4 py-2 bg-slate-700 bg-opacity-60 text-orange-200 rounded-full text-sm font-medium border border-orange-500 border-opacity-60 hover:border-opacity-100 transition-all cursor-default">MySQL</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 px-4 bg-transparent">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-6xl md:text-7xl font-bold mb-20 text-center bg-gradient-to-r from-orange-300 to-amber-300 bg-clip-text text-transparent font-serif">
              Skills & Expertise
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800 bg-opacity-40 backdrop-blur-lg p-8 rounded-2xl border-2 border-orange-500 border-opacity-40 shadow-lg hover:border-opacity-70 transition-all duration-300 transform hover:scale-105" style={{boxShadow: '0 0 30px rgba(249, 115, 22, 0.1)'}}>
                <h3 className="text-2xl font-bold text-orange-200 mb-6 flex items-center">
                  <Code className="mr-3 text-orange-400" size={32} />
                  Programming
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['Python', 'Java', 'C', 'C++', 'Kotlin', 'Pandas'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-slate-700 bg-opacity-50 text-orange-200 rounded-full text-sm font-medium border border-orange-500 border-opacity-50 hover:border-opacity-100 hover:bg-opacity-80 transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800 bg-opacity-40 backdrop-blur-lg p-8 rounded-2xl border-2 border-orange-500 border-opacity-40 shadow-lg hover:border-opacity-70 transition-all duration-300 transform hover:scale-105" style={{boxShadow: '0 0 30px rgba(249, 115, 22, 0.1)'}}>
                <h3 className="text-2xl font-bold text-orange-200 mb-6 flex items-center">
                  <Database className="mr-3 text-orange-400" size={32} />
                  Databases
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['MySQL', 'Oracle SQL', 'MongoDB', 'DB2', 'SQL Server (SSMS)'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-slate-700 bg-opacity-50 text-orange-200 rounded-full text-sm font-medium border border-orange-500 border-opacity-50 hover:border-opacity-100 hover:bg-opacity-80 transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800 bg-opacity-40 backdrop-blur-lg p-8 rounded-2xl border-2 border-orange-500 border-opacity-40 shadow-lg hover:border-opacity-70 transition-all duration-300 transform hover:scale-105" style={{boxShadow: '0 0 30px rgba(249, 115, 22, 0.1)'}}>
                <h3 className="text-2xl font-bold text-orange-200 mb-6 flex items-center">
                  <Award className="mr-3 text-orange-400" size={32} />
                  Web Development
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Node.js'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-slate-700 bg-opacity-50 text-orange-200 rounded-full text-sm font-medium border border-orange-500 border-opacity-50 hover:border-opacity-100 hover:bg-opacity-80 transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800 bg-opacity-40 backdrop-blur-lg p-8 rounded-2xl border-2 border-orange-500 border-opacity-40 shadow-lg hover:border-opacity-70 transition-all duration-300 transform hover:scale-105 md:col-span-2 lg:col-span-3" style={{boxShadow: '0 0 30px rgba(249, 115, 22, 0.1)'}}>
                <h3 className="text-2xl font-bold text-orange-200 mb-6">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-3">
                  {['Git/GitHub', 'IServer', 'VS Code', 'Eclipse', 'Database Design', 'Data Analysis', 'Data Cleaning', 'ETL', 'Query Optimization', 'Debugging'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-slate-700 bg-opacity-50 text-orange-200 rounded-full text-sm font-medium border border-orange-500 border-opacity-50 hover:border-opacity-100 hover:bg-opacity-80 transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-6xl font-bold mb-16 text-center bg-gradient-to-r from-orange-300 to-amber-300 bg-clip-text text-transparent font-serif">
              Get In Touch
            </h2>
            <div className="bg-slate-800 bg-opacity-50 backdrop-blur-lg p-12 rounded-2xl border border-orange-500 border-opacity-30 shadow-2xl" style={{boxShadow: '0 0 50px rgba(249, 115, 22, 0.15)'}}>
              <p className="text-slate-100 text-center mb-10 text-lg font-light">
                I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-orange-300 mb-3 text-lg font-medium">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 bg-slate-800 bg-opacity-50 border border-amber-600 border-opacity-30 rounded-lg focus:outline-none focus:border-orange-400 focus:border-opacity-100 text-slate-100 text-lg backdrop-blur-sm placeholder-slate-500 transition-all hover:border-opacity-60"
                    placeholder="Your Name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-orange-300 mb-3 text-lg font-medium">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 bg-slate-800 bg-opacity-50 border border-amber-600 border-opacity-30 rounded-lg focus:outline-none focus:border-orange-400 focus:border-opacity-100 text-slate-100 text-lg backdrop-blur-sm placeholder-slate-500 transition-all hover:border-opacity-60"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-orange-300 mb-3 text-lg font-medium">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-6 py-4 bg-slate-800 bg-opacity-50 border border-amber-600 border-opacity-30 rounded-lg focus:outline-none focus:border-orange-400 focus:border-opacity-100 text-slate-100 text-lg backdrop-blur-sm placeholder-slate-500 transition-all hover:border-opacity-60"
                    placeholder="Your message..."
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 text-white border border-orange-300 border-opacity-50" style={{boxShadow: '0 0 40px rgba(249, 115, 22, 0.3)'}}
                >
                  <Send size={24} />
                  <span>{formStatus === 'sending' ? 'Sending...' : 'Send Message'}</span>
                </button>
                
                {formStatus === 'success' && (
                  <div className="bg-green-900 bg-opacity-30 border border-green-600 border-opacity-50 rounded-lg p-4 mt-4">
                    <p className="text-green-300 text-center text-lg">Thank you! Your message has been sent successfully. I&apos;ll get back to you soon.</p>
                  </div>
                )}
                {formStatus === 'error' && (
                  <div className="bg-red-900 bg-opacity-30 border border-red-600 border-opacity-50 rounded-lg p-4 mt-4">
                    <p className="text-red-300 text-center text-lg">Oops! Something went wrong. Please try again or contact me directly at priyanshurana2228@gmail.com</p>
                  </div>
                )}
              </form>

              <div className="mt-12 pt-8 border-t border-amber-600 border-opacity-30">
                <div className="flex justify-center space-x-8 mb-6">
                  <a
                    href="mailto:priyanshurana2228@gmail.com"
                    className="text-orange-400 hover:text-orange-300 transition-colors transform hover:scale-110"
                  >
                    <Mail size={32} />
                  </a>
                  <a
                    href="https://linkedin.com/in/priyanshu-rana-230a152a4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 hover:text-orange-300 transition-colors transform hover:scale-110"
                  >
                    <Linkedin size={32} />
                  </a>
                  <a
                    href="https://github.com/Priyanshu2209"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 hover:text-orange-300 transition-colors transform hover:scale-110"
                  >
                    <Github size={32} />
                  </a>
                </div>
                <p className="text-center text-slate-400 text-lg">Scarborough, ON · +1 (437)-665-2472</p>
              </div>

              <button
                onClick={() => window.open('/Priyanshu_Rana_Resume.pdf', '_blank')}
                className="mt-8 w-full flex items-center justify-center space-x-3 px-6 py-4 bg-slate-800 bg-opacity-50 hover:bg-slate-800 hover:bg-opacity-70 border border-orange-500 border-opacity-30 hover:border-orange-400 hover:border-opacity-60 rounded-lg transition-all text-lg backdrop-blur-sm text-orange-300 font-medium"
              >
                <Download size={24} />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-slate-400 border-t border-amber-600 border-opacity-40 bg-gradient-to-b from-transparent to-amber-950 to-opacity-20">
          <p className="text-lg">© 2026 Priyanshu Rana. Built with React & Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  );
}