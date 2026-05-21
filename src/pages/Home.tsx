import { useState, useEffect } from 'react';
import {
  Github, Linkedin,
  X, Globe,
  Briefcase, ExternalLink,
  Twitter, Download, Sun, Moon, Menu
} from 'lucide-react';

import { profile, skills, projects, education } from '@/config/data';
interface Project {
  title: string;
  description: string;
  liveLink: string;
  githubLink?: string;
  image: string;
  tech: string[];
  details: string[];
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResumeDropdownOpen, setIsResumeDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['home', 'skills', 'projects', 'education'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 300 && rect.bottom >= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const handleDownloadResume = (resumeType: string) => {
    let resumePath = "";
    if (resumeType === "Blockchain Developer") {
      resumePath = "/assets/Arpit_Satpute_Blockchain_Developer.pdf";
    } else if (resumeType === "Java Full Stack Developer") {
      resumePath = "/assets/Arpit_Satpute_Full_Stack_Java_Developer.pdf";
    } else if (resumeType === "Software Developer") {
      resumePath = "/assets/Arpit_Satpute_Software_Developer.pdf";
    }
    const link = document.createElement("a");
    link.href = resumePath;
    link.setAttribute("download", resumePath.split('/').pop() || "resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsResumeDropdownOpen(false);
  };

  const scrollToSection = (section: string) => {
    setIsMenuOpen(false);
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`${isDark ? 'dark' : ''} scroll-smooth`}>
      <div className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 antialiased font-body min-h-screen transition-colors duration-300">
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');
            .shimmer { position: relative; overflow: hidden; }
            .shimmer::after { content: ''; position: absolute; top: 0; left: -100%; width: 60%; height: 100%; background: rgba(255,255,255,0.18); transform: skewX(-20deg); transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
            .shimmer:hover::after { left: 160%; }
            .nl { position: relative; }
            .nl::after { content: ''; position: absolute; bottom: -2px; left: 0; width: 0; height: 1.5px; background: currentColor; transition: width 0.22s cubic-bezier(0.4, 0, 0.2, 1); }
            .nl:hover::after, .nl.on::after { width: 100%; }
            .nl.on { font-weight: 500; }
            .card-h { transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.18s; }
            .card-h:hover { transform: translateY(-4px); }
            .font-display { font-family: 'PT Sans', sans-serif; }
            .font-body { font-family: 'DM Sans', sans-serif; }
          `}
        </style>

        <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-sm shadow-black/5' : ''}`}>
          <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="font-display font-bold text-xl tracking-tight relative z-10">
              <span className="text-zinc-900 dark:text-white">Arpit</span><span className="text-[#FF6B2B]">.</span>
            </a>

            <ul className="hidden md:flex items-center gap-8 text-sm">
              {['home', 'skills', 'projects', 'education'].map((id) => (
                <li key={id}>
                  <button onClick={() => scrollToSection(id)} className={`nl text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors capitalize ${activeSection === id ? 'on !text-zinc-900 dark:!text-white' : ''}`}>
                    {id}
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <button onClick={() => setIsDark(!isDark)} className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <div className="relative">
                <button onClick={() => setIsResumeDropdownOpen(!isResumeDropdownOpen)} className="hidden md:inline-flex items-center gap-2 shimmer bg-[#FF6B2B] text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-[#FF8F5C] transition-colors">
                  Resume <Download size={14} />
                </button>
                {isResumeDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-lg py-2 z-50">
                    <button onClick={() => handleDownloadResume('Blockchain Developer')} className="w-full text-left px-4 py-2.5 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">Blockchain Developer</button>
                    <button onClick={() => handleDownloadResume('Java Full Stack Developer')} className="w-full text-left px-4 py-2.5 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">Java Full Stack Developer</button>
                    <button onClick={() => handleDownloadResume('Software Developer')} className="w-full text-left px-4 py-2.5 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">Software Developer</button>
                  </div>
                )}
              </div>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800">
                {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900 shadow-xl absolute top-16 left-0 w-full">
              <ul className="flex flex-col px-6 py-5 gap-4 text-sm font-medium">
                {['home', 'skills', 'projects', 'education'].map((id) => (
                  <li key={id}>
                    <button onClick={() => scrollToSection(id)} className="block text-zinc-700 dark:text-zinc-300 hover:text-[#FF6B2B] transition-colors capitalize">
                      {id}
                    </button>
                  </li>
                ))}
                <li className="pt-2 border-t border-zinc-100 dark:border-zinc-900 flex flex-col gap-2">
                  <div className="text-zinc-500 dark:text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-1 mt-2">Download Resume</div>
                  <button onClick={() => handleDownloadResume('Blockchain Developer')} className="inline-flex items-center justify-between gap-2 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-[#FF6B2B] dark:hover:border-[#FF6B2B] text-zinc-700 dark:text-zinc-300 font-medium text-sm px-4 py-2.5 rounded-lg transition-colors">
                    Blockchain Developer <Download size={14} />
                  </button>
                  <button onClick={() => handleDownloadResume('Java Full Stack Developer')} className="inline-flex items-center justify-between gap-2 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-[#FF6B2B] dark:hover:border-[#FF6B2B] text-zinc-700 dark:text-zinc-300 font-medium text-sm px-4 py-2.5 rounded-lg transition-colors">
                    Java Full Stack Developer <Download size={14} />
                  </button>
                  <button onClick={() => handleDownloadResume('Software Developer')} className="inline-flex items-center justify-between gap-2 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-[#FF6B2B] dark:hover:border-[#FF6B2B] text-zinc-700 dark:text-zinc-300 font-medium text-sm px-4 py-2.5 rounded-lg transition-colors">
                    Software Developer <Download size={14} />
                  </button>
                </li>
              </ul>
            </div>
          )}
        </header>

        <main>
          {/* HERO SECTION */}
          <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FF6B2B]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-zinc-200/50 dark:bg-zinc-800/30 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-sm font-medium text-[#FF6B2B] tracking-widest uppercase mb-4">Available for work</p>
                  <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-zinc-900 dark:text-white mb-6">
                    Hi, I'm <span className="text-[#FF6B2B]">Arpit</span>
                  </h1>
                  <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 font-light leading-relaxed max-w-md mb-10">
                    {/* <strong className="font-medium text-zinc-700 dark:text-zinc-300">Blockchain Engineer</strong>. */}
                    {profile.bio}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button onClick={() => scrollToSection('projects')} className="shimmer inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium px-7 py-3.5 rounded-full hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors text-sm">
                      View my work <Briefcase size={16} />
                    </button>
                    <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium px-7 py-3.5 rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-sm">
                      <Github size={16} /> Github
                    </a>
                  </div>
                  <div className="flex gap-8 mt-14 pt-8 border-t border-zinc-100 dark:border-zinc-900">
                    <div><p className="font-display font-bold text-3xl text-zinc-900 dark:text-white">+08</p><p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Projects</p></div>
                    <div><p className="font-display font-bold text-3xl text-zinc-900 dark:text-white">+03</p><p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Protocols</p></div>
                    <div><p className="font-display font-bold text-3xl text-zinc-900 dark:text-white">+06</p><p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Hackathons</p></div>
                  </div>
                </div>

                <div className="flex justify-center md:justify-end">
                  <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                    <div className="w-full h-full rounded-3xl overflow-hidden bg-[#d4d4d8]">
                      <img src={profile.image} alt={profile.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 bg-[#FF6B2B] text-white font-display font-bold text-sm px-4 py-2.5 rounded-2xl shadow-lg">Open to projects</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SKILLS SECTION */}
          <section id="skills" className="py-24 relative overflow-hidden bg-zinc-50 dark:bg-zinc-900/40">
            {/* Background glowing orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF6B2B]/5 dark:bg-[#FF6B2B]/10 rounded-full blur-[100px] pointer-events-none z-0" />
            
            <div className="max-w-6xl mx-auto px-6 relative z-10">
              <div className="mb-16 text-center md:text-left flex flex-col items-center md:items-start">
                <div className="inline-block">
                  <p className="text-xs font-bold text-[#FF6B2B] tracking-[0.2em] uppercase mb-3 bg-[#FF6B2B]/10 px-4 py-2 rounded-full">
                    Expertise
                  </p>
                </div>
                <h2 className="font-display font-black text-4xl md:text-5xl text-zinc-900 dark:text-white mt-2">
                  Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B2B] to-orange-400">Skills</span>
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                {skills.map((skill, i) => (
                  <article 
                    key={i} 
                    className="group relative bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-3xl p-8 border border-zinc-200/50 dark:border-zinc-800/50 hover:border-[#FF6B2B]/50 hover:shadow-[0_8px_30px_rgb(255,107,43,0.12)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                  >
                    {/* Subtle corner glow on hover */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#FF6B2B]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative z-10">
                      <div className="w-14 h-14 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800/80 rounded-2xl mb-8 group-hover:scale-110 group-hover:bg-[#FF6B2B] group-hover:text-white group-hover:shadow-lg transition-all duration-500 text-[#FF6B2B]">
                        {skill.icon}
                      </div>
                      <h3 className="font-display font-bold text-2xl text-zinc-900 dark:text-white mb-6 group-hover:text-[#FF6B2B] transition-colors">{skill.category}</h3>
                      <div className="flex flex-wrap gap-2.5">
                        {skill.items.map((item, j) => (
                          <span 
                            key={j} 
                            className="text-sm font-medium bg-zinc-50 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 px-4 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-700/50 group-hover:border-zinc-300 dark:group-hover:border-zinc-600 hover:!bg-[#FF6B2B] hover:!text-white hover:!border-[#FF6B2B] transition-all duration-300 cursor-default shadow-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* PROJECTS SECTION */}
          <section id="projects" className="py-32 relative bg-zinc-50 dark:bg-zinc-950/50 border-y border-zinc-200 dark:border-zinc-900/50">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative items-start">
                
                {/* Sticky Left Column */}
                <div className="w-full lg:w-[35%] lg:sticky lg:top-32 flex flex-col pt-4">
                  <div className="inline-block mb-6">
                    <p className="text-xs font-black text-[#FF6B2B] tracking-[0.3em] uppercase bg-[#FF6B2B]/10 px-5 py-2.5 rounded-full w-max border border-[#FF6B2B]/20">
                      Portfolio
                    </p>
                  </div>
                  <h2 className="font-display font-black text-5xl md:text-6xl text-zinc-900 dark:text-white mb-6 leading-[1.1] tracking-tight">
                    Featured <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#FF6B2B] to-orange-400">Works.</span>
                  </h2>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10 text-lg max-w-md">
                    A curated selection of my most recent projects, showcasing my expertise in blockchain development, frontend architecture, and full-stack engineering.
                  </p>
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hidden lg:inline-flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-zinc-900 dark:text-white border-b-2 border-zinc-200 dark:border-zinc-800 hover:border-[#FF6B2B] pb-2 transition-all w-max group">
                    Explore full archive <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>

                {/* Scrolling Right Column (Projects list) */}
                <div className="w-full lg:w-[65%] flex flex-col gap-16 md:gap-32">
                  {projects.map((project, i) => (
                    <article 
                      key={i} 
                      onClick={() => setSelectedProject(project)} 
                      className="group cursor-pointer relative bg-white dark:bg-[#111111] rounded-[40px] p-3 md:p-4 border border-zinc-200 dark:border-zinc-800 hover:border-[#FF6B2B]/50 transition-all duration-700 hover:shadow-[0_20px_60px_-15px_rgba(255,107,43,0.15)] flex flex-col"
                    >
                      {/* Big Image Top */}
                      <div className="w-full aspect-[4/3] sm:aspect-[16/10] rounded-[32px] overflow-hidden bg-zinc-200 dark:bg-zinc-900 relative shadow-inner">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000 ease-in-out" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-700" />
                        
                        {/* Hover Overlay Button */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          <div className="bg-white dark:bg-[#FF6B2B] text-zinc-900 dark:text-white px-8 py-4 rounded-full font-bold tracking-widest uppercase text-sm flex items-center gap-2 shadow-2xl transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-75">
                            View Project <ExternalLink size={16} />
                          </div>
                        </div>
                      </div>

                      {/* Content Bottom */}
                      <div className="pt-8 px-4 md:px-6 pb-6 flex flex-col sm:flex-row gap-8 justify-between items-start">
                        <div className="flex-1">
                          <h3 className="font-display font-black text-3xl md:text-4xl text-zinc-900 dark:text-white mb-4 group-hover:text-[#FF6B2B] transition-colors">{project.title}</h3>
                          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-lg text-base md:text-lg">
                            {project.description}
                          </p>
                        </div>
                        <div className="flex flex-wrap sm:flex-col gap-2 sm:items-end w-full sm:w-auto mt-2 sm:mt-0">
                          {project.tech.slice(0, 3).map((t, j) => (
                            <span key={j} className={`text-[10px] md:text-[11px] font-bold tracking-widest uppercase px-3 md:px-4 py-2 rounded-xl border whitespace-nowrap ${j === 0 ? 'text-[#FF6B2B] bg-[#FF6B2B]/10 border-[#FF6B2B]/20' : 'text-zinc-600 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800/80 border-zinc-200 dark:border-zinc-700'}`}>
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  ))}
                  
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" className="lg:hidden inline-flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-zinc-900 dark:text-white border-b-2 border-zinc-200 dark:border-zinc-800 hover:border-[#FF6B2B] pb-2 transition-all w-max group mt-4">
                    Explore full archive <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* EDUCATION SECTION */}
          <section id="education" className="py-24 bg-zinc-50 dark:bg-zinc-900/40">
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-16 items-start">
                <div className="order-1">
                  <p className="text-xs font-medium text-[#FF6B2B] tracking-widest uppercase mb-3">Academic Background</p>
                  <h2 className="font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white leading-tight mb-6">Education &<br/>Qualifications</h2>
                  <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8 max-w-md">
                    A strong foundation in computer engineering and continuous learning have been the stepping stones of my career in blockchain development.
                  </p>
                  <div className="flex gap-4">
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                      <span className="w-10 h-10 flex items-center justify-center bg-zinc-200 dark:bg-zinc-800 rounded-lg group-hover:bg-[#FF6B2B]/20 transition-colors shrink-0">
                        <Linkedin size={18} />
                      </span>
                      <span className="text-sm font-medium">Connect on LinkedIn</span>
                                          
                    </a>
                  </div>
                </div>

                <div className="order-2">
                  <div className="space-y-6">
                    {education.map((edu, i) => (
                      <div key={i} className="bg-white dark:bg-zinc-900 rounded-2xl p-7 border border-zinc-100 dark:border-zinc-800 hover:border-[#FF6B2B] transition-colors">
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-xs font-bold bg-orange-50 dark:bg-zinc-800 text-[#FF6B2B] px-3 py-1 rounded-full">{edu.year}</span>
                          <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{edu.gpa}</span>
                        </div>
                        <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white mb-2">{edu.institution}</h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">{edu.degree} {edu.field && `· ${edu.field}`}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CONNECT SECTION */}
          <section id="connect" className="py-24 md:py-32 relative overflow-hidden bg-white dark:bg-[#151515] border-t border-zinc-200 dark:border-zinc-900">
            {/* Glowing Orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF6B2B]/5 dark:bg-[#FF6B2B]/10 rounded-full blur-[120px] pointer-events-none -z-10" />
            
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
              <div className="inline-block mb-6">
                <p className="text-xs font-bold text-[#FF6B2B] tracking-[0.2em] uppercase bg-[#FF6B2B]/10 px-4 py-2 rounded-full">
                  What's Next?
                </p>
              </div>
              <h2 className="font-display font-black text-5xl md:text-7xl mb-6 tracking-tight text-zinc-900 dark:text-white">
                Let's work <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B2B] to-orange-400">together.</span>
              </h2>
              <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                Whether you have a project in mind, need a talented developer for your team, or just want to say hi, my inbox is always open. Let's build something amazing.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href={`mailto:${profile.email}`} 
                  className="w-full sm:w-auto px-8 py-4 bg-[#FF6B2B] hover:bg-orange-500 text-white rounded-full font-bold tracking-widest uppercase text-sm flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#FF6B2B]/30"
                >
                  <Briefcase size={18} /> Start a Project
                </a>
                <a 
                  href={profile.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full sm:w-auto px-8 py-4 bg-zinc-100 hover:bg-zinc-200 dark:bg-[#1a1a1a] dark:hover:bg-zinc-800 text-zinc-900 dark:text-white rounded-full font-bold tracking-widest uppercase text-sm flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 shadow-sm dark:shadow-none border border-zinc-200 dark:border-zinc-700"
                >
                  <Linkedin size={18} /> Connect on LinkedIn
                </a>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="border-t border-zinc-200 dark:border-zinc-900 py-12">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-xl tracking-tight text-zinc-900 dark:text-white">Arpit</span><span className="text-[#FF6B2B] font-bold text-xl">.</span>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center md:text-left">
                © {new Date().getFullYear()} Arpit Satpute. All rights reserved.
              </p>
              <div className="flex gap-4 text-zinc-400">
                <a href={profile.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6B2B] transition-colors"><Twitter size={18} /></a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6B2B] transition-colors"><Linkedin size={18} /></a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6B2B] transition-colors"><Github size={18} /></a>
              </div>
            </div>
          </footer>
        </main>
      {/* PROJECT MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={() => setSelectedProject(null)} />
          <div className="bg-[#1c1a19] w-full max-w-4xl max-h-[90vh] rounded-[40px] border border-white/10 relative animate-in fade-in zoom-in duration-300 shadow-2xl shadow-black overflow-y-auto custom-scrollbar scroll-smooth">
            <div className="p-6 md:p-10 relative">
              <div className="sticky top-0 z-20 flex justify-between items-start mb-8 gap-4 bg-[#1c1a19]/90 backdrop-blur-md pb-4 pt-2 -mt-2">
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 leading-none text-white">{selectedProject.title}</h3>
                  <p className="text-gray-400 font-medium leading-relaxed text-sm md:text-base">
                    {selectedProject.description}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-[#FF4D00] transition-colors sticky top-0"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-12">
                {/* Website Preview with Browser Frame */}
                <div className="px-1 md:px-4">
                  <h4 className="font-black text-[11px] tracking-[0.3em] uppercase text-[#FF4D00] mb-6">Live Preview</h4>
                  <div className="rounded-3xl overflow-hidden bg-[#262423] border border-white/5 shadow-2xl relative">
                    <div className="flex items-center gap-2 px-6 py-4 border-b border-white/5 bg-white/2">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                      </div>
                      <div className="flex-1 px-4 py-1.5 rounded-xl bg-black/20 text-[10px] text-white/30 truncate font-mono border border-white/5">
                        {selectedProject.liveLink}
                      </div>
                    </div>
                    {/* Browser Content with Desktop Scale */}
                    <div className="h-[400px] md:h-[500px] overflow-hidden flex items-start justify-center bg-[#0d0c0c] relative">
                      <div className="w-[1380px] origin-top scale-[0.3] md:scale-[0.4] lg:scale-[0.45] xl:scale-[0.5] flex justify-center">
                        <iframe
                          src={selectedProject.liveLink}
                          title={selectedProject.title}
                          className="border-0 w-[1380px] h-[1000px] bg-[#1c1a19] pointer-events-auto"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <h4 className="font-black text-[11px] tracking-[0.3em] uppercase text-[#FF4D00] mb-6 px-1">Key Achievements</h4>
                    <ul className="space-y-4">
                      {selectedProject.details.map((detail, i) => (
                        <li key={i} className="flex gap-4 text-xs md:text-sm font-medium text-gray-400 leading-relaxed group">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#FF4D00] mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="font-black text-[11px] tracking-[0.3em] uppercase text-[#FF4D00] mb-6 px-1">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black tracking-widest text-[#FF4D00] uppercase"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 pt-6">
                      <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-5 bg-[#FF4D00] text-white rounded-2xl font-black text-[11px] tracking-widest text-center hover:opacity-90 transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1 shadow-lg shadow-orange-500/20"
                      >
                        <Globe size={18} /> LIVE SITE
                      </a>
                      {selectedProject.githubLink && (
                        <a
                          href={selectedProject.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-5 border-2 border-white/10 text-white rounded-2xl font-black text-[11px] tracking-widest text-center hover:bg-white/5 transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1"
                        >
                          <Github size={18} /> GITHUB
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}
