import { useState, useEffect } from 'react';
import { Download, Github, Linkedin, Mail, ExternalLink, Code2, Database, Blocks, ChevronDown, X, Globe, Menu, Sun, Moon, Settings, Languages } from 'lucide-react';
import profileImage from "@/assets/profile.jpeg";
import { TwitterIcon } from '@/components/icons';

interface Project {
  title: string;
  description: string;
  liveLink: string;
  githubLink: string;
  tech: string[];
  details: string[];
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect and section detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // If at the top, set to 'home'
      if (window.scrollY < 100) {
        setActiveSection('home');
        return;
      }
      
      // Detect which section is in view
      const sections = ['about', 'skills', 'projects', 'education'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const profile = {
    name: "Arpit Satpute",
    title: "Full Stack & Blockchain Developer",
    tagline: "Building scalable applications and decentralized solutions",
    email: "arpitrameshsatpute6986@gmail.com",
    image: profileImage,
    github: "https://github.com/arpitSatpute",
    linkedin: "https://linkedin.com/in/arpitsatpute",
    twitter: "https://twitter.com/arpits_jsx",
    bio: "I’m a Versatile engineer building Full-stack applications using Java Spring Boot while also developing Blockchain solutions with Solidity powered Smart Contracts. I enjoy working across both traditional backend architectures and decentralized systems, applying strong software engineering principles to create secure, scalable, and efficient technology solutions. I thrive in environments where I can design clean APIs, optimize system performance, and push innovation at the boundary of enterprise software and Web3."
  };

  const skills = [
    { 
      category: "Backend Development", 
      icon: <Code2 className="w-5 h-5" />,
      items: ["Java", "Spring Boot", "Spring MVC", "Hibernate", "REST APIs", "Microservices"] 
    },
    { 
      category: "Blockchain", 
      icon: <Blocks className="w-5 h-5" />,
      items: ["Solidity", "Ethereum", "Smart Contracts", "Foundry", "Openzeppelin", "Hardhat"] 
    },
    { 
      category: "Database", 
      icon: <Database className="w-5 h-5" />,
      items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "IPFS"]
    },
    { 
      category: "Frontend Frameworks and Libraries", 
      icon: <Code2 className="w-5 h-5" />,
      items: ["React", "JavaScript", "React Native", "Wagmi", "Viem", "Tailwind CSS", "Bootstrap", "Hero Ui"] 
    },
    { 
      category: "Tools", 
      icon: <Settings className="w-5 h-5" />,
      items: ["Git", "Github", "Docker"] 
    },
    { 
      category: "Languages", 
      icon: <Languages className="w-5 h-5" />,
      items: ["Java", "JavaScript", "Python", "TypeScript", "Solidity", "C++"] 
    },
    
  ];

  const projects = [
    {
      title: "VeriMint",
      description: "Decentralised E-Commerce NFT Marketplace for physical and virtual goods as encrypted ERC-1155 digital twins",
      liveLink: "https://verimint.vercel.app/",
      githubLink: "https://github.com/arpitSatpute/VeriMint.git",
      tech: ["Solidity", "Foundry", "React", "IPFS", "OpenZeppelin", "ERC1155"],
      details: [
        "ERC1155 contracts mint digital twins for physical and virtual inventory with encrypted delivery data",
        "Lit Protocol guards shipping addresses with time-locked decrypt (7-day merchant window) and access logs",
        "Escrowed payments auto-release on fulfillment with buyer refunds when decrypt deadlines are missed",
        "Zero-knowledge proof commitments secure address unlock requests and prevent data leakage",
        "React dApp with Wagmi/Viem for fast wallet flows plus merchant dashboard for inventory and sales ops",
        "IPFS-backed metadata and provenance to preserve authenticity across orders and handoffs"
      ]
    },
    {
      title: "Insight Yield",
      description: "AI-Powered DeFi Yield Optimizer | Autonomous liquidity engine for optimal DeFi strategies",
      liveLink: "https://insight-yield.vercel.app/",
      githubLink: "https://github.com/arpitSatpute/InsightYield.git",
      tech: ["Solidity", "Foundry", "Python", "React", "Polygon", "Wagmi/Viem"],
      details: [
        "Modular ERC-4626 vault system on Polygon for composable DeFi integration",
        "Custom Python AI engine with XGBoost for real-time risk scoring and APY prediction",
        "EIP-712 verification ensuring authenticated and tamper-proof on-chain recommendations",
        "Automated capital reallocation based on AI-generated strategies",
        "Off-chain AI predictions combined with on-chain cryptographic proofs",
        "Real-time yield optimization reducing slippage and maximizing returns"
      ]
    },
    {
      title: "Skedula",
      description: "Business & Appointment Management Platform | Full-stack platform for service booking",
      liveLink: "https://skedula-customer.vercel.app/",
      githubLink: "https://github.com/arpitSatpute/Skedula",
      tech: ["Spring Boot", "React", "PostgreSQL", "Redis", "Docker", "Razorpay"],
      details: [
        "Microservices architecture with Spring Boot and RabbitMQ",
        "Razorpay wallet integration with secure transaction handling",
        "Redis caching for improved performance and reduced database load",
        "Dockerized deployment with PostgreSQL database",
        "Real-time appointment scheduling and notification system",
        "Business dashboard for service management and revenue analytics"
      ]
    },
    {
      title: "Proxima",
      description: "AI-Powered Exam Integrity System | Real-time AI-driven exam monitoring platform",
      liveLink: "https://proxima-frontend-three.vercel.app",
      githubLink: "https://github.com/Yash-Zade/Proxima.git",
      tech: ["Spring Boot", "React", "React Native", "WebRTC", "Gemini AI", "PostgreSQL"],
      details: [
        "WebRTC and WebSocket for real-time monitoring and communication",
        "Gemini AI integration for scenario-based test generation",
        "Bluetooth and WiFi device detection for exam security",
        "Cross-platform support (Web and Mobile)",
        "Real-time face detection and proctoring capabilities",
        "Automated anomaly detection for academic integrity violations"
      ]
    },
    {
      title: "PlanIt",
      description: "Event Management Platform | Connecting event hosts, organizers, and vendors",
      liveLink: "https://plan-it-roan-two.vercel.app/",
      githubLink: "https://github.com/arpitSatpute/PlanIt",
      tech: ["Spring Boot", "React", "PostgreSQL", "Docker", "RabbitMQ"],
      details: [
        "Microservices architecture with Spring Boot and RabbitMQ",
        "Dual booking system for direct hiring or vendor marketplace",
        "Secure escrow holding 10% payment until post-event review",
        "Dockerized deployment with PostgreSQL database",
        "Real-time vendor and organizer communication system",
        "Comprehensive event analytics and performance metrics dashboard"
      ]
    },
    {
      title: "Taskk",
      description: "Task Management Application | Streamlined task organization and project tracking",
      liveLink: "https://taskkapp.vercel.app/",
      githubLink: "https://github.com/arpitSatpute/Taskk",
      tech: ["Spring Boot", "React", "PostgreSQL", "REST API"],
      details: [
        "Clean, intuitive interface for task creation and management",
        "RESTful API design with Spring Boot backend",
        "PostgreSQL database for reliable data persistence",
        "Real-time task status updates and notifications",
        "Collaborative task sharing and team management",
        "Project timeline visualization with progress tracking"
      ]
    }
  ];

  const education = [
    {
      institution: "J D College of Engineering and Management, Nagpur",
      degree: "Bachelor of Technology",
      field: "Computer Engineering",
      year: "2021 - 2025",
      gpa: "9.57/10",
      
    },
    {
      institution: "Bhalerao Jr. Science College, Saoner",
      degree: "HSC",
      field: "Physics, Chemistry, Mathematics, Biology",
      year: "2020 - 2022",
      gpa: "76.83 %",
      
    },
    {
      institution: "Vidya Niketan Higher Secondary School, Urjanagar",
      degree: "SSC",
      field: "SSC",
      year: "2019 - 2020",
      gpa: "92.00 %",
      
    }
  ];

  const handleDownloadResume = (type: 'fullstack' | 'blockchain' | 'both' = 'both') => {
    // Map resume types to file names in assets
    const resumeFiles: Record<string, string> = {
      'fullstack': 'Arpit_Satpute_Full_Stack_Java_Developer.pdf',
      'blockchain': 'Arpit_Satpute_Blockchain_Developer.pdf',
      'both': 'Arpit_Satpute_Blockchain_Full_Stack_Java_Developer.pdf'
    };

    const fileName = resumeFiles[type];
    // Use /assets/ path for Vercel deployment
    const resumePath = `/assets/${fileName}`;

    // Fetch and download the file to ensure proper handling
    fetch(resumePath)
      .then(response => {
        if (!response.ok) throw new Error('File not found');
        return response.blob();
      })
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch(error => {
        console.error('Download failed:', error);
        alert('Failed to download resume. Please try again.');
      });
  };

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  const bgClass = darkMode 
    ? 'bg-slate-950 text-white' 
    : 'bg-gray-50 text-gray-900';
  
  const cardBg = darkMode 
    ? 'bg-slate-900 border-slate-800' 
    : 'bg-white border-gray-200';

  const accentColor = darkMode ? 'text-blue-400' : 'text-blue-600';
  const accentBg = darkMode ? 'bg-blue-500/10' : 'bg-blue-50';
  const modalBg = darkMode ? 'bg-slate-900' : 'bg-white';

  return (
    
    <div className={`min-h-screen transition-colors duration-300 ${bgClass} relative overflow-hidden`}>
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 ${darkMode ? 'bg-blue-500' : 'bg-blue-300'}`} />
        <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20 ${darkMode ? 'bg-purple-500' : 'bg-purple-300'}`} />
        
        {/* Additional orbs for light theme */}
        {!darkMode && (
          <>
            <div className="absolute top-1/2 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-15 bg-cyan-300" />
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-10 bg-pink-300" />
          </>
        )}
        
        {/* Grid pattern */}
        <div className={`absolute inset-0 ${darkMode ? 'bg-slate-900/30' : 'bg-white/40'}`} 
          style={{
            backgroundImage: `linear-gradient(${darkMode ? 'rgba(148, 163, 184, 0.05)' : 'rgba(71, 85, 105, 0.04)'} 1px, transparent 1px), linear-gradient(90deg, ${darkMode ? 'rgba(148, 163, 184, 0.05)' : 'rgba(71, 85, 105, 0.04)'} 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Radial gradient overlay for light theme */}
        {!darkMode && (
          <>
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(191, 219, 254, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(243, 232, 255, 0.15) 0%, transparent 50%)'
            }} />
            
            {/* Subtle accent lines */}
            <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-200/20 to-transparent" />
            <div className="absolute bottom-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-200/20 to-transparent" />
            
            {/* Corner accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/20 to-transparent rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-purple-100/20 to-transparent rounded-full blur-2xl" />
            
            {/* Center glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-white/30 to-transparent rounded-full blur-3xl" />
          </>
        )}
      </div>

      {/* Content wrapper with relative positioning */}
      <div className="relative z-10">
        <header
          className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? darkMode 
              ? 'bg-slate-950/85 border-slate-700 shadow-lg shadow-slate-900/50' 
              : 'bg-white/85 border-gray-200 shadow-md'
            : darkMode
            ? 'bg-transparent border-slate-800/30'
            : 'bg-transparent border-gray-200/30'
        } backdrop-blur-xl border-b`}
      >
        <nav className="container mx-auto px-6 py-4 max-w-7xl">
          <div className="flex justify-between items-center">
            {/* Logo / Brand with Section Indicator */}
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${isScrolled ? 'shadow-lg' : ''}`}>
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <h1 className={`text-xl font-bold transition-all duration-300 ${isScrolled ? 'opacity-100' : 'opacity-90'}`}>{profile.name}</h1>
                <p className= "text-xs font-medium transition-all duration-300">
                  Developer
                </p>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {[
                { name: 'home', label: 'Home' },
                { name: 'about', label: 'About' },
                { name: 'skills', label: 'Skills' },
                { name: 'projects', label: 'Projects' },
                { name: 'education', label: 'Education' }
              ].map((item) => {
                const isAtTop = window.scrollY < 100;
                let isActive = false;
                
                if (item.name === 'home') {
                  isActive = isAtTop;
                } else {
                  isActive = activeSection === item.name;
                }
                
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      if (item.name === 'home') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else {
                        scrollToSection(item.name);
                      }
                    }}
                    className={`text-sm font-medium transition-all duration-200 relative group ${
                      isActive
                        ? darkMode
                          ? 'text-blue-400 font-semibold'
                          : 'text-blue-600 font-semibold'
                        : darkMode
                        ? 'text-slate-400 group-hover:text-slate-200'
                        : 'text-gray-600 group-hover:text-gray-900'
                    }`}
                  >
                    {item.label}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 ${
                      isActive
                        ? 'w-full' 
                        : 'w-0 group-hover:w-full'
                    }`} />
                  </button>
                );
              })}
              
              {/* Resume Dropdown */}
              
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">

              {/* Theme Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isScrolled
                    ? darkMode
                      ? 'bg-slate-800/60 hover:bg-slate-700/80'
                      : 'bg-gray-100/60 hover:bg-gray-200/80'
                    : darkMode
                    ? 'bg-slate-900/40 hover:bg-slate-800/60'
                    : 'bg-gray-100/40 hover:bg-gray-200/60'
                }`}
                title={darkMode ? 'Light mode' : 'Dark mode'}
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-white" />
                ) : (
                  <Moon className="w-5 h-5 text-black" />
                )}
              </button>

              {/* CTA Button - Desktop */}
              {/* Resume Dropdown - Desktop */}
              <div className="relative group hidden sm:block">
                <button
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl hover:scale-105 ${isScrolled ? 'shadow-blue-500/30' : ''}`}
                >
                  <Download className="w-4 h-4" />
                  Resume
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {/* Dropdown Menu */}
                <div className={`absolute right-0 mt-0 w-56 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 ${
                  darkMode
                    ? 'bg-slate-800 border border-slate-700'
                    : 'bg-white border border-gray-200'
                }`}>
                  <button
                    onClick={() => handleDownloadResume('fullstack')}
                    className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors rounded-t-lg flex items-center gap-2 ${
                      darkMode
                        ? 'hover:bg-slate-700 text-slate-200'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <Code2 className="w-4 h-4" />
                    Full Stack Resume
                  </button>
                  <button
                    onClick={() => handleDownloadResume('blockchain')}
                    className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors border-t flex items-center gap-2 ${
                      darkMode
                        ? 'hover:bg-slate-700 text-slate-200 border-slate-700'
                        : 'hover:bg-gray-100 text-gray-700 border-gray-200'
                    }`}
                  >
                    <Blocks className="w-4 h-4" />
                    Blockchain Resume
                  </button>
                  <button
                    onClick={() => handleDownloadResume('both')}
                    className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors rounded-b-lg border-t flex items-center gap-2 ${
                      darkMode
                        ? 'hover:bg-slate-700 text-slate-200 border-slate-700'
                        : 'hover:bg-gray-100 text-gray-700 border-gray-200'
                    }`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Full Stack & Blockchain
                  </button>
                </div>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-2.5 rounded-lg transition-all ${
                  isScrolled
                    ? darkMode
                      ? 'bg-slate-800/60 hover:bg-slate-700/80'
                      : 'bg-gray-100/60 hover:bg-gray-200/80'
                    : darkMode
                    ? 'bg-slate-900/40 hover:bg-slate-800/60'
                    : 'bg-gray-100/40 hover:bg-gray-200/60'
                }`}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className={`md:hidden mt-4 pt-4 border-t transition-all duration-200 ${darkMode ? 'border-slate-800' : 'border-gray-200'}`}>
              <div className="flex flex-col gap-3">
                {/* Home Button */}
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setActiveSection('about');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left px-4 py-2 rounded-lg font-medium transition-all ${
                    darkMode ? 'hover:bg-slate-800' : 'hover:bg-gray-100'
                  }`}
                >
                  Home
                </button>

                {['about', 'skills', 'projects', 'education'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      scrollToSection(item);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-left px-4 py-2 rounded-lg font-medium capitalize transition-all ${
                      activeSection === item
                        ? `${darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-50 text-blue-600'}`
                        : `${darkMode ? 'hover:bg-slate-800' : 'hover:bg-gray-100'}`
                    }`}
                  >
                    {item}
                  </button>
                ))}

                {/* Resume Button - Mobile */}
                <div className="px-2">
                  <p className={`text-xs font-semibold mb-2 ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>Resume</p>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => {
                        handleDownloadResume('fullstack');
                        setIsMobileMenuOpen(false);
                      }}
                      className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        darkMode
                          ? 'bg-blue-600/60 text-white hover:bg-blue-600'
                          : 'bg-blue-600/60 text-white hover:bg-blue-600'
                      }`}
                    >
                      Full Stack
                    </button>
                    <button
                      onClick={() => {
                        handleDownloadResume('blockchain');
                        setIsMobileMenuOpen(false);
                      }}
                      className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        darkMode
                          ? 'bg-blue-600/60 text-white hover:bg-blue-600'
                          : 'bg-blue-600/60 text-white hover:bg-blue-600'
                      }`}
                    >
                      Blockchain
                    </button>
                    <button
                      onClick={() => {
                        handleDownloadResume('both');
                        setIsMobileMenuOpen(false);
                      }}
                      className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        darkMode
                          ? 'bg-blue-600/60 text-white hover:bg-blue-600'
                          : 'bg-blue-600/60 text-white hover:bg-blue-600'
                      }`}
                    >
                      Full Stack & Blockchain
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero/Home Section */}
      <section id="home" className="pt-20 md:pt-32 pb-24 md:pb-32 px-4 md:px-6 min-h-screen flex items-center">
        <div className="container mx-auto max-w-5xl w-full">
          <div className="text-center mb-8 md:mb-12">
            <div className="relative w-40 md:w-48 lg:w-56 h-40 md:h-48 lg:h-56 mx-auto mb-6">
              <img 
                src={profile.image} 
                alt={profile.name}
                className="w-full h-full rounded-full object-cover border-4 border-blue-500/20 shadow-lg shadow-blue-500/20"
                loading="lazy"
                decoding="async"
                width={224}
                height={224}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-transparent opacity-0 hover:opacity-20 transition-opacity duration-300" />
            </div>
            <div className={`inline-block px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 ${accentBg} ${accentColor}`}>
              Available for opportunities
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
              {profile.name}
            </h2>
            <p className={`text-lg md:text-2xl lg:text-3xl mb-3 md:mb-4 ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>
              {profile.title}
            </p>
            <p className={`text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-6 md:mb-8 px-2 ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>
              {profile.tagline}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 md:gap-3 mb-6 md:mb-8 text-xs md:text-sm">
              <Mail className={`w-4 md:w-5 h-4 md:h-5 ${darkMode ? 'text-slate-400' : 'text-gray-500'}`} />
              <a href={`mailto:${profile.email}`} className={`${accentColor} hover:underline break-all`}>
                {profile.email}
              </a>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-6 md:mb-8 flex-wrap">
              <button
                onClick={() => handleDownloadResume('both')}
                className={`flex items-center justify-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition text-sm md:text-base ${darkMode ? 'bg-blue-600 hover:bg-blue-500' : 'bg-blue-600 hover:bg-blue-700'} text-white flex-1 sm:flex-none min-w-[160px]`}
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </button>
              <a 
                href={`mailto:${profile.email}`}
                className={`flex items-center justify-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium border-2 transition text-sm md:text-base flex-1 sm:flex-none min-w-[160px] ${darkMode ? 'border-slate-700 hover:border-slate-600' : 'border-gray-300 hover:border-gray-400'}`}
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </a>
            </div>

            <div className="flex justify-center gap-3 md:gap-4">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className={`p-2 md:p-3 rounded-lg transition ${darkMode ? 'hover:bg-slate-800' : 'hover:bg-gray-200'}`}>
                <Github className="w-5 md:w-6 h-5 md:h-6" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={`p-2 md:p-3 rounded-lg transition ${darkMode ? 'hover:bg-slate-800' : 'hover:bg-gray-200'}`}>
                <Linkedin className="w-5 md:w-6 h-5 md:h-6" />
              </a>
              <a href={profile.twitter} target="_blank" rel="noopener noreferrer" className={`p-2 md:p-3 rounded-lg transition ${darkMode ? 'hover:bg-slate-800' : 'hover:bg-gray-200'}`}>
                <TwitterIcon className="w-5 md:w-6 h-5 md:h-6" />
              </a>
            </div>
          </div>

          <div className="flex justify-center animate-bounce">
            <ChevronDown className={`w-5 md:w-6 h-5 md:h-6 ${darkMode ? 'text-slate-600' : 'text-gray-400'}`} />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-6 pb-16 md:pb-20 max-w-5xl space-y-12 md:space-y-20">
        {/* About Section */}
        <section id="about" className="scroll-mt-20 pt-16 md:pt-24 pb-16 md:pb-24 border-b transition-colors ${darkMode ? 'border-slate-800' : 'border-gray-200'}">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">About Me</h3>
          <div className={`p-4 md:p-6 lg:p-8 rounded-2xl border transition-colors ${cardBg}`}>
            <p className={`text-sm md:text-base lg:text-lg leading-relaxed ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>
              {profile.bio}
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-20 pt-16 md:pt-24 pb-16 md:pb-24 border-b transition-colors ${darkMode ? 'border-slate-800' : 'border-gray-200'}">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">Technical Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className={`p-4 md:p-6 rounded-2xl border transition-colors ${cardBg}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`${accentColor}`}>{skillGroup.icon}</div>
                  <h4 className="text-base md:text-lg font-semibold">{skillGroup.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span 
                      key={i} 
                      className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm transition-colors ${darkMode ? 'bg-slate-800 text-slate-300' : 'bg-gray-100 text-gray-700'}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-20 pt-16 md:pt-24 pb-16 md:pb-24 border-b transition-colors ${darkMode ? 'border-slate-800' : 'border-gray-200'}">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedProject(project)}
                className={`p-4 md:p-6 rounded-2xl border transition-all cursor-pointer ${cardBg} hover:shadow-xl hover:scale-100 md:hover:scale-105 active:scale-95`}
              >
                <h4 className="text-lg md:text-xl font-semibold mb-2">{project.title}</h4>
                <p className={`text-xs md:text-sm mb-4 ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span 
                      key={i} 
                      className={`px-2 py-1 rounded-full text-xs font-medium ${accentBg} ${accentColor}`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${accentBg} ${accentColor}`}>
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
                <p className={`text-xs ${accentColor}`}>Click to view details →</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="scroll-mt-20 pt-16 md:pt-24 pb-16 md:pb-24 border-b transition-colors ${darkMode ? 'border-slate-800' : 'border-gray-200'}">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">Education</h3>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className={`p-4 md:p-6 lg:p-8 rounded-2xl border transition-all ${cardBg} hover:shadow-lg`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6 mb-4">
                  <div>
                    <h4 className="text-lg md:text-xl lg:text-2xl font-semibold mb-1">{edu.institution}</h4>
                    <p className={`text-sm md:text-base font-medium ${accentColor}`}>{edu.degree} in {edu.field}</p>
                    <p className={`text-xs md:text-sm ${darkMode ? 'text-slate-500' : 'text-gray-500'}`}>{edu.year}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-semibold ${accentBg} ${accentColor} w-fit`}>
                    GPA: {edu.gpa}
                  </div>
                </div>
                {/* <div>
                  <h5 className="text-sm md:text-base font-semibold mb-3">Key Achievements</h5>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className={`flex gap-3 text-xs md:text-sm ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                        <span className={`${accentColor} mt-0.5 flex-shrink-0`}>✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div> */}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className={`${modalBg} rounded-2xl max-w-3xl w-full max-h-[90vh] md:max-h-[95vh] overflow-y-auto border ${darkMode ? 'border-slate-800' : 'border-gray-200'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 md:p-6 lg:p-8">
              <div className="flex justify-between items-start mb-4 md:mb-6 gap-4">
                <div className="min-w-0 flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 break-words">{selectedProject.title}</h3>
                  <p className={`text-sm md:text-base ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                    {selectedProject.description}
                  </p>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className={`flex-shrink-0 p-2 rounded-lg transition ${darkMode ? 'hover:bg-slate-800' : 'hover:bg-gray-200'}`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 md:space-y-6">
                {/* Website Preview with Browser Frame */}
                <div>
                  <h4 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">Live Preview</h4>
                  <div className={`rounded-2xl overflow-hidden transition-all ${darkMode ? 'bg-slate-900 shadow-2xl' : 'bg-white shadow-xl'}`}>
                    {/* Browser Header */}
                    {/* <div className={`flex items-center gap-3 px-4 py-3 border-b ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-gray-100 border-gray-200'}`}>
                      <div className="flex gap-2">
                        <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-red-500' : 'bg-red-400'}`} />
                        <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-yellow-500' : 'bg-yellow-400'}`} />
                        <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-green-500' : 'bg-green-400'}`} />
                      </div>
                      <div className={`flex-1 px-3 py-1.5 rounded text-xs truncate font-mono ${darkMode ? 'bg-slate-700 text-slate-300' : 'bg-white text-gray-700'} border ${darkMode ? 'border-slate-600' : 'border-gray-300'}`}>
                        {selectedProject.liveLink}
                      </div>
                    </div> */}
                    {/* Browser Content with Desktop Scale */}
                    <div style={{ 
                      height: '500px', 
                      overflow: 'hidden',
                      backgroundColor: darkMode ? '#1e293b' : '#f8fafc',
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      padding: '0'
                    }}>
                      <div style={{
                        transform: 'scale(0.5)',
                        transformOrigin: 'top center',
                        width: '1380px',
                        margin: '0',
                        padding: '0'
                      }}>
                        <iframe 
                          src={selectedProject.liveLink} 
                          title={selectedProject.title}
                          className="border-0"
                          style={{ 
                            width: '1380px', 
                            height: '1000px', 
                            display: 'block',
                            margin: '0',
                            padding: '0'
                          }}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                 
                </div>

                <div>
                  <h4 className="font-semibold mb-2 md:mb-3 text-base md:text-lg">Key Features & Achievements</h4>
                  <ul className="space-y-2">
                    {selectedProject.details.map((detail, i) => (
                      <li key={i} className={`flex gap-3 text-xs md:text-sm ${darkMode ? 'text-slate-300' : 'text-gray-700'}`}>
                        <span className={`${accentColor} mt-1 flex-shrink-0`}>•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 md:mb-3 text-base md:text-lg">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium ${accentBg} ${accentColor}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-3 md:gap-4 pt-4 md:pt-6">
                  <a 
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition text-sm md:text-base ${darkMode ? 'bg-blue-600 hover:bg-blue-500' : 'bg-blue-600 hover:bg-blue-700'} text-white flex-1`}
                  >
                    <Globe className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium border-2 transition text-sm md:text-base flex-1 ${darkMode ? 'border-slate-700 hover:border-slate-600' : 'border-gray-300 hover:border-gray-400'}`}
                  >
                    <Github className="w-4 h-4" />
                    <span>Source</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className={`border-t transition-colors ${darkMode ? 'border-slate-800' : 'border-gray-200'}`}>
        <div className="container mx-auto px-4 md:px-6 py-6 md:py-8 text-center">
          <p className={`text-xs md:text-sm ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>
            © 2025 {profile.name}. Built with React.
          </p>
        </div>
      </footer>
      </div>
    </div>
  );
}