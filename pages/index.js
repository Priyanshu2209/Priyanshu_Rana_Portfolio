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
    <div className="min-h-screen bg-black text-gray-100 relative overflow-hidden">
      {/* Background with stars */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 opacity-90"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900 opacity-30 rounded-full blur-3xl"></div>
        </div>

        {/* Stars */}
        <div className="absolute inset-0">
          {stars.small.map((star) => (
            <div
              key={star.id}
              className="absolute rounded-full bg-white animate-pulse"
              style={{
                left: star.left,
                top: star.top,
                width: '1px',
                height: '1px',
                animationDelay: star.animationDelay,
              }}
            />
          ))}
          {stars.medium.map((star) => (
            <div
              key={star.id}
              className="absolute rounded-full bg-blue-100 animate-pulse"
              style={{
                left: star.left,
                top: star.top,
                width: '2px',
                height: '2px',
                animationDelay: star.animationDelay,
              }}
            />
          ))}
          {stars.large.map((star) => (
            <div
              key={star.id}
              className="absolute rounded-full bg-white animate-pulse"
              style={{
                left: star.left,
                top: star.top,
                width: '3px',
                height: '3px',
                animationDelay: star.animationDelay,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-slate-950 bg-opacity-60 backdrop-blur-lg z-50 border-b border-teal-500 border-opacity-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
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

        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-36 h-36 mx-auto mb-8 rounded-full bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 flex items-center justify-center text-6xl font-bold shadow-2xl border-4 border-teal-400 border-opacity-20">
              PR
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
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
              <a href="mailto:priyanshurana2228@gmail.com" className="p-4 bg-teal-600 bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all duration-300 transform hover:scale-110 border border-teal-400 border-opacity-30 backdrop-blur-sm shadow-lg">
                <Mail size={28} className="text-teal-300" />
              </a>
              <a href="https://linkedin.com/in/priyanshu-rana-230a152a4" target="_blank" rel="noopener noreferrer" className="p-4 bg-blue-600 bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all duration-300 transform hover:scale-110 border border-blue-400 border-opacity-30 backdrop-blur-sm shadow-lg">
                <Linkedin size={28} className="text-blue-300" />
              </a>
              <a href="https://github.com/Priyanshu2209" target="_blank" rel="noopener noreferrer" className="p-4 bg-cyan-600 bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all duration-300 transform hover:scale-110 border border-cyan-400 border-opacity-30 backdrop-blur-sm shadow-lg">
                <Github size={28} className="text-cyan-300" />
              </a>
            </div>
            <button onClick={() => scrollToSection('contact')} className="px-10 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get In Touch
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="bg-slate-900 bg-opacity-40 backdrop-blur-md p-10 rounded-3xl border border-teal-500 border-opacity-20 shadow-2xl">
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

        {/* Experience Section */}
        <section id="experience" className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="space-y-8">
              <div className="bg-slate-900 bg-opacity-40 backdrop-blur-md p-10 rounded-3xl border border-teal-500 border-opacity-20 shadow-2xl hover:border-opacity-40 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-teal-300 mb-2">Database Intern</h3>
                    <p className="text-cyan-400 text-xl">Tata Consultancy Services (TCS)</p>
                    <p className="text-gray-400">Ahmedabad, India</p>
                  </div>
                  <span className="text-gray-400 mt-2 sm:mt-0">Jan 2022 – Jun 2022</span>
                </div>
                <ul className="space-y-4 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-3 text-2xl">•</span>
                    <span>Designed and optimized SQL databases for internal business applications, improving query performance by 25%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-3 text-2xl">•</span>
                    <span>Created data validation and cleanup scripts to ensure accuracy and consistency across datasets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-3 text-2xl">•</span>
                    <span>Assisted in developing database reports and ER diagrams for cross-departmental data integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-3 text-2xl">•</span>
                    <span>Collaborated with developers to streamline backend data pipelines and automate reporting</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900 bg-opacity-40 backdrop-blur-md p-10 rounded-3xl border border-cyan-500 border-opacity-20 shadow-2xl hover:border-opacity-40 transition-all duration-300">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-cyan-300 mb-2">Volunteer Mentor</h3>
                  <p className="text-teal-400 text-xl">Tech Peer Mentorship Program</p>
                  <p className="text-gray-400">Seneca Polytechnic</p>
                </div>
                <ul className="space-y-4 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 text-2xl">•</span>
                    <span>Mentored first-year students in programming fundamentals and academic skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 text-2xl">•</span>
                    <span>Facilitated collaborative coding sessions and supported debugging workshops</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-900 bg-opacity-40 backdrop-blur-md p-10 rounded-3xl border border-teal-500 border-opacity-20 shadow-2xl hover:border-opacity-40 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center justify-between mb-6">
                  <Code className="text-teal-400" size={40} />
                  <a href="https://github.com/Priyanshu2209/Blood_bank_system_database" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors">
                    <ExternalLink size={28} />
                  </a>
                </div>
                <h3 className="text-3xl font-bold text-teal-300 mb-4">Blood Bank Management System</h3>
                <p className="text-gray-400 mb-6 text-lg">
                  Comprehensive SQL database system for managing blood donations with advanced queries, 
                  ER diagrams, and efficient data management framework.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-teal-600 bg-opacity-20 text-teal-300 rounded-full border border-teal-500 border-opacity-30">SQL</span>
                  <span className="px-4 py-2 bg-teal-600 bg-opacity-20 text-teal-300 rounded-full border border-teal-500 border-opacity-30">MySQL</span>
                  <span className="px-4 py-2 bg-teal-600 bg-opacity-20 text-teal-300 rounded-full border border-teal-500 border-opacity-30">Database Design</span>
                </div>
              </div>

              <div className="bg-slate-900 bg-opacity-40 backdrop-blur-md p-10 rounded-3xl border border-cyan-500 border-opacity-20 shadow-2xl hover:border-opacity-40 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center justify-between mb-6">
                  <Code className="text-cyan-400" size={40} />
                  <div className="text-gray-600">
                    <ExternalLink size={28} />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-cyan-300 mb-4">Online Movie Ticket Booking</h3>
                <p className="text-gray-400 mb-6 text-lg">
                  Full-stack web application with responsive frontend, PHP backend, and MySQL integration 
                  for real-time seat booking, user authentication, and email confirmations.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-cyan-600 bg-opacity-20 text-cyan-300 rounded-full border border-cyan-500 border-opacity-30">HTML5</span>
                  <span className="px-4 py-2 bg-cyan-600 bg-opacity-20 text-cyan-300 rounded-full border border-cyan-500 border-opacity-30">CSS3</span>
                  <span className="px-4 py-2 bg-cyan-600 bg-opacity-20 text-cyan-300 rounded-full border border-cyan-500 border-opacity-30">JavaScript</span>
                  <span className="px-4 py-2 bg-cyan-600 bg-opacity-20 text-cyan-300 rounded-full border border-cyan-500 border-opacity-30">PHP</span>
                  <span className="px-4 py-2 bg-cyan-600 bg-opacity-20 text-cyan-300 rounded-full border border-cyan-500 border-opacity-30">MySQL</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-900 bg-opacity-40 backdrop-blur-md p-8 rounded-3xl border border-teal-500 border-opacity-20 shadow-2xl">
                <h3 className="text-2xl font-bold text-teal-300 mb-6 flex items-center">
                  <Code className="mr-3" size={32} />
                  Programming
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['Python', 'Java', 'C', 'C++', 'Kotlin'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-teal-600 bg-opacity-20 text-teal-300 rounded-full border border-teal-500 border-opacity-30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900 bg-opacity-40 backdrop-blur-md p-8 rounded-3xl border border-cyan-500 border-opacity-20 shadow-2xl">
                <h3 className="text-2xl font-bold text-cyan-300 mb-6 flex items-center">
                  <Database className="mr-3" size={32} />
                  Databases
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['MySQL', 'Oracle SQL', 'MongoDB', 'DB2'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-cyan-600 bg-opacity-20 text-cyan-300 rounded-full border border-cyan-500 border-opacity-30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900 bg-opacity-40 backdrop-blur-md p-8 rounded-3xl border border-blue-500 border-opacity-20 shadow-2xl">
                <h3 className="text-2xl font-bold text-blue-300 mb-6 flex items-center">
                  <Award className="mr-3" size={32} />
                  Web Development
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Node.js'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-blue-600 bg-opacity-20 text-blue-300 rounded-full border border-blue-500 border-opacity-30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900 bg-opacity-40 backdrop-blur-md p-8 rounded-3xl border border-purple-500 border-opacity-20 shadow-2xl md:col-span-2 lg:col-span-3">
                <h3 className="text-2xl font-bold text-purple-300 mb-6">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-3">
                  {['Git/GitHub', 'IServer', 'VS Code', 'Eclipse', 'Database Design', 'Data Analysis', 'Debugging'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-purple-600 bg-opacity-20 text-purple-300 rounded-full border border-purple-500 border-opacity-30">
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
            <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="bg-slate-900 bg-opacity-40 backdrop-blur-md p-10 rounded-3xl border border-teal-500 border-opacity-20 shadow-2xl">
              <p className="text-gray-300 text-center mb-10 text-lg">
                I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2 text-lg">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 bg-slate-950 bg-opacity-50 border border-teal-500 border-opacity-30 rounded-xl focus:outline-none focus:border-teal-400 text-gray-100 text-lg backdrop-blur-sm"
                    placeholder="Your Name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2 text-lg">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 bg-slate-950 bg-opacity-50 border border-teal-500 border-opacity-30 rounded-xl focus:outline-none focus:border-teal-400 text-gray-100 text-lg backdrop-blur-sm"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2 text-lg">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-6 py-4 bg-slate-950 bg-opacity-50 border border-teal-500 border-opacity-30 rounded-xl focus:outline-none focus:border-teal-400 text-gray-100 text-lg backdrop-blur-sm"
                    placeholder="Your message..."
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
                >
                  <Send size={24} />
                  <span>{formStatus === 'sending' ? 'Sending...' : 'Send Message'}</span>
                </button>
                
                {formStatus === 'success' && (
                  <div className="bg-green-500 bg-opacity-20 border border-green-500 border-opacity-30 rounded-xl p-4 mt-4">
                    <p className="text-green-400 text-center text-lg">Thank you! Your message has been sent successfully. I&apos;ll get back to you soon.</p>
                  </div>
                )}
                {formStatus === 'error' && (
                  <div className="bg-red-500 bg-opacity-20 border border-red-500 border-opacity-30 rounded-xl p-4 mt-4">
                    <p className="text-red-400 text-center text-lg">Oops! Something went wrong. Please try again or contact me directly at priyanshurana2228@gmail.com</p>
                  </div>
                )}
              </form>

              <div className="mt-12 pt-8 border-t border-teal-500 border-opacity-20">
                <div className="flex justify-center space-x-8 mb-6">
                  <a
                    href="mailto:priyanshurana2228@gmail.com"
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    <Mail size={32} />
                  </a>
                  <a
                    href="https://linkedin.com/in/priyanshu-rana-230a152a4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Linkedin size={32} />
                  </a>
                  <a
                    href="https://github.com/Priyanshu2209"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Github size={32} />
                  </a>
                </div>
                <p className="text-center text-gray-400 text-lg">Scarborough, ON · +1 (437)-665-2472</p>
              </div>

              <button
                onClick={() => window.open('/Priyanshu_Rana_Resume.pdf', '_blank')}
                className="mt-8 w-full flex items-center justify-center space-x-3 px-6 py-4 bg-slate-950 bg-opacity-50 hover:bg-slate-800 hover:bg-opacity-50 border border-teal-500 border-opacity-30 hover:border-teal-400 hover:border-opacity-50 rounded-xl transition-all text-lg backdrop-blur-sm"
              >
                <Download size={24} />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-gray-500 border-t border-teal-500 border-opacity-20">
          <p className="text-lg">© 2025 Priyanshu Rana. Built with React & Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  );
}