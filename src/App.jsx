import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code, Award, Briefcase, GraduationCap, ExternalLink, Menu, X, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
const [openCertificates, setOpenCertificates] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openLightbox = (imageSrc, imageAlt) => {
    setLightboxImage({ src: imageSrc, alt: imageAlt });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const toggleCertificate = (index) => {
    setOpenCertificates(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const skills = {
    'Languages & DSA': ['Java', 'Python'],
    'Frontend': ['React.js', 'HTML', 'CSS'],
    'Backend': ['Node.js', 'Express.js', 'RESTful APIs'],
    'Databases': ['MySQL', 'MongoDB'],
    'Tools': ['Git', 'Postman', 'Linux', 'Visual Studio Code', 'Android Studio'],
    'Core CS': ['OS', 'DBMS', 'OOPs'],
    'Cloud/AI': [ 'Firebase (Cloud)', 'AI/NLP (Gemini, OpenAI)']
  };

  const projects = [
    {
      title: 'Capture The Flag',
      description: 'A MERN-based interactive game with real-time challenges to enhance problem-solving and cybersecurity skills.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      role: 'Backend Developer',
      image: '/placeholder-ctf.jpg'
    },
    {
      title: 'Smart Specs',
      description: 'A healthcare device that tracks eye strain rate and sends real-time alerts to help monitor eye health.',
      tech: ['Arduino IDE (ESP32)', 'Flutter', 'Firebase'],
      role: 'Backend Developer',
      image: '/placeholder-smartspecs.jpg'
    },
    {
      title: 'Interview Prep Chatbot',
      description: 'Developed an AI-powered chatbot integrated with the Gemini API to help users prepare for technical interviews.',
      tech: ['Express.js', 'Gemini API', 'HTML', 'CSS', 'JavaScript'],
      role: 'Full Stack Developer',
      image: '/placeholder-chatbot.jpg'
    }
  ];

  const experience = [
    {
      title: 'AI Intern',
      company: 'ZAdroit IT Solutions Pvt. Ltd.',
      period: 'Jul 2025 – Present',
      type: 'Hybrid',
      description: 'Working on AI-driven projects'
    },
    {
      title: 'Intern',
      company: 'Infosys Springboard',
      period: 'Feb–Mar 2025',
      type: 'Remote',
      description: 'Built an automated bank check processor using Python stack'
    }
  ];

  const achievements = [
    {
      title: 'Ui Path Hack-a-bot',
      description: 'Secured 3rd place in Hackathon conducted by UiPath in Automation',
      icon: Award
    },
    {
      title: 'Synergy 24 Paper Presentation',
      description: 'Secured 2nd Place - Topic: Blockchain in Energy Trading at Government College Of Engineering, Salem',
      icon: Award
    },
    {
      title: 'LeetCode Achievements',
      description: '200+ Problems Solved | 100 Days Badge (2025) | 50 Days Badge',
      icon: Code
    }
  ];

  const certificates = [
    {
      name: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
      image: '/certificates/oracle-ai.jpg'
    },
    {
      name: 'Programming In Java - NPTEL - 70% (ELITE)',
      image: '/certificates/nptel-java.jpg'
    },
    {
      name: 'SQL (Intermediate) Certificate - HackerRank',
      image: '/certificates/hackerrank-sql.jpg'
    },
    {
      name: 'Design & Implementation of Human-Computer Interfaces - NPTEL - 81% (ELITE+SILVER)',
      image: '/certificates/nptel-hci.jpg'
    },
    {
      name: 'Python Foundation Certification - Infosys Springboard',
      image: '/certificates/infosys-python.jpg'
    }
  ];

  const education = [
    {
      degree: 'B.E | Computer Science Engineering',
      institution: 'Sona College of Technology',
      period: '2022 - Present',
      score: 'CGPA: 8.11'
    },
    {
      degree: '12th | Computer Science and Maths',
      institution: "Holy Angels' Girls Matric Hr. Sec. School",
      period: '2021 - 2022',
      score: 'Percentage: 79%'
    },
    {
      degree: '10th',
      institution: "Holy Angels' Girls Matric Hr. Sec. School",
      period: '2019 - 2020',
      score: 'Percentage: 82.2%'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              HVS
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'experience', 'achievements', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-cyan-400 transition-colors ${activeSection === item ? 'text-cyan-400' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/98 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'skills', 'projects', 'experience', 'achievements', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 capitalize hover:bg-slate-800 rounded-md transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Welcome to my portfolio</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> <br/>Harinee V S</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Aspiring Software Engineer skilled in DSA with Java and Python. Experienced in MERN Full-Stack Development, building scalable applications with clean, efficient code.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/harinee-v-s-958189246/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a
                href="https://github.com/VSHarinee"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-800 px-6 py-3 rounded-full hover:bg-slate-700 transition-all"
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href="https://leetcode.com/Harinee_V_S"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-800 px-6 py-3 rounded-full hover:bg-slate-700 transition-all"
              >
                <Code size={20} />
                LeetCode
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl shadow-cyan-500/50 cursor-pointer hover:scale-105 transition-transform"
                >
              <img
                src="/profile-photo.jpg"
                alt="Harinee V S"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="320" height="320"%3E%3Crect fill="%23334155" width="320" height="320"/%3E%3Ctext fill="%2394a3b8" font-family="system-ui" font-size="48" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EProfile Photo%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-400 transition-all">
              <MapPin className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-slate-300">Salem, Tamil Nadu, India</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-400 transition-all">
              <Mail className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a href="mailto:vsharinee45@gmail.com" className="text-slate-300 hover:text-cyan-400 break-all">
                vsharinee45@gmail.com
              </a>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-400 transition-all">
              <Phone className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <a href="tel:+919944431970" className="text-slate-300 hover:text-cyan-400">
                +91 9944431970
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-400 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span key={skill} className="bg-slate-700 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
       {/*
      <section id="projects" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-400 transition-all group">
                <div className="h-48 bg-slate-700 overflow-hidden cursor-pointer"
                     onClick={() => openLightbox(project.image, project.title)}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23334155" width="400" height="300"/%3E%3Ctext fill="%2394a3b8" font-family="system-ui" font-size="18" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EProject Image%3C/text%3E%3C/svg%3E';
                    }}
                  /> 
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-cyan-400 text-sm mb-3">{project.role}</p>
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-slate-700 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>*/}
      {/* Projects Section */}
<section id="projects" className="py-20 px-4 bg-slate-900/50">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-center">
      Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div key={index} className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-400 transition-all group">
          {/* Project header with title and role */}
          <div className="p-6 border-b border-slate-700">
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-cyan-400 text-sm">{project.role}</p>
          </div>
          
          {/* Project content */}
          <div className="p-6">
            <p className="text-slate-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="bg-slate-700 px-2 py-1 rounded text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Work <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-400 transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-semibold">{exp.title}</h3>
                    <p className="text-cyan-400">{exp.company}</p>
                  </div>
                  <div className="text-slate-400 mt-2 md:mt-0">
                    <span className="bg-slate-700 px-3 py-1 rounded-full text-sm mr-2">{exp.type}</span>
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className="text-slate-300">{exp.description}</p>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-16">
            <h2 className="text-4xl font-bold mb-12 text-center">
              <GraduationCap className="inline-block mr-2" size={36} />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Education</span>
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-400 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <p className="text-cyan-400">{edu.institution}</p>
                    </div>
                    <div className="text-slate-400 mt-2 md:mt-0 text-right">
                      <p>{edu.period}</p>
                      <p className="text-cyan-400 font-semibold">{edu.score}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Achievements & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Badges</span>
          </h2>
          
          {/* Badges Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center text-cyan-400">Coding Badges</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-cyan-400 transition-all cursor-pointer"
                   onClick={() => openLightbox('/leetcode-50days-badge.png', 'LeetCode 50 Days Badge')}>
                <img
                  src="/leetcode-50days-badge.png"
                  alt="LeetCode 50 Days Badge"
                  className="w-32 h-32 object-contain"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="128" height="128"%3E%3Crect fill="%23334155" width="128" height="128" rx="8"/%3E%3Ctext fill="%2394a3b8" font-family="system-ui" font-size="12" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3E50 Days%3C/text%3E%3C/svg%3E';
                  }}
                />
                <p className="text-center mt-2 text-sm">50 Days Badge</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-cyan-400 transition-all cursor-pointer"
                   onClick={() => openLightbox('/leetcode-100days-badge.png', 'LeetCode 100 Days Badge')}>
                <img
                  src="/leetcode-100days-badge.png"
                  alt="LeetCode 100 Days Badge"
                  className="w-32 h-32 object-contain"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="128" height="128"%3E%3Crect fill="%23334155" width="128" height="128" rx="8"/%3E%3Ctext fill="%2394a3b8" font-family="system-ui" font-size="12" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3E100 Days%3C/text%3E%3C/svg%3E';
                  }}
                />
                <p className="text-center mt-2 text-sm">100 Days Badge</p>
              </div>
              {/* Add more badge slots as needed */}
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-cyan-400 transition-all opacity-50">
                <div className="w-32 h-32 flex items-center justify-center bg-slate-700 rounded-lg">
                  <Award size={48} className="text-slate-500" />
                </div>
                <p className="text-center mt-2 text-sm text-slate-500">Add Badge</p>
              </div>
            </div>
          </div>

          {/* Achievements List */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-400 transition-all">
                <achievement.icon className="text-cyan-400 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-slate-300">{achievement.description}</p>
              </div>
            ))}
          </div>

          {/* Certificates */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-center text-cyan-400">Certifications</h3>
            <div className="space-y-4">
              {certificates.map((cert, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-400 transition-all overflow-hidden">
                  <button
                    onClick={() => toggleCertificate(index)}
                    className="w-full p-4 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center flex-1">
                      <ChevronRight 
                        className={`text-cyan-400 mr-3 flex-shrink-0 transition-transform ${openCertificates[index] ? 'rotate-90' : ''}`} 
                        size={20} 
                      />
                      <span className="text-slate-300">{cert.name}</span>
                    </div>
                  </button>
                  
                  {openCertificates[index] && (
                    <div className="px-4 pb-4 pt-2 flex justify-center">
                      <div 
                        className="relative bg-slate-700 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity w-64 sm:w-72 md:w-80"  // 👈 controls size
                        onClick={() => openLightbox(cert.image, cert.name)}
                      >
                        <img
                          src={cert.image}
                          alt={cert.name}
                          className="w-full h-auto object-contain"
                          onError={(e) => {
                            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23334155" width="800" height="600"/%3E%3Ctext fill="%2394a3b8" font-family="system-ui" font-size="24" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3ECertificate Image%3C/text%3E%3C/svg%3E';
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/50 transition-opacity">
                          <p className="text-white text-lg font-semibold">Click to enlarge</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let's <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:vsharinee45@gmail.com"
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all text-lg"
            >
              <Mail size={24} />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/harinee-v-s-958189246/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800 px-8 py-4 rounded-full hover:bg-slate-700 transition-all text-lg"
            >
              <Linkedin size={24} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p>© 2025 Harinee V S. Built with React & Tailwind CSS</p>
          <p className="mt-2 text-sm">Aspiring Software Engineer | MERN Stack Developer | Problem Solver</p>
        </div>
      </footer>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-cyan-400 transition-colors z-10"
            aria-label="Close"
          >
            <X size={40} />
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <p className="absolute bottom-8 text-white text-lg">{lightboxImage.alt}</p>
        </div>
      )}
    </div>
  );
};

export default Portfolio;