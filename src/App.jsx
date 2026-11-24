import React, { useState, useEffect, useRef } from 'react';
import {
  Mail,
  MapPin,
  Code,
  Award,
  GraduationCap,
  Menu,
  X,
  ChevronRight,
  Terminal,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  Lock,
  Briefcase
} from 'lucide-react';

const EMAIL_ADDRESS = 'vsharineevas@gmail.com';

/* ------------------------------------------------------------------ */
/* Fonts + small global styles (self-contained, no index.html changes) */
/* ------------------------------------------------------------------ */
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@500;600;700&display=swap');

    html { scroll-behavior: smooth; }

    .portfolio-root {
      font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizeLegibility;
    }
    .portfolio-root .font-display {
      font-family: 'Space Grotesk', 'Inter', ui-sans-serif, system-ui, sans-serif;
      letter-spacing: -0.02em;
    }
    .portfolio-root .font-mono {
      font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace !important;
    }

    .grid-bg {
      background-image:
        linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px);
      background-size: 48px 48px;
      mask-image: radial-gradient(ellipse 70% 55% at 50% 30%, #000 40%, transparent 100%);
      -webkit-mask-image: radial-gradient(ellipse 70% 55% at 50% 30%, #000 40%, transparent 100%);
    }

    @keyframes heroIn {
      from { opacity: 0; transform: translateY(16px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .hero-in { animation: heroIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }

    @keyframes caretBlink {
      0%, 49% { opacity: 1; }
      50%, 100% { opacity: 0; }
    }
    .caret-blink { animation: caretBlink 0.95s infinite; }

    @media (prefers-reduced-motion: reduce) {
      .hero-in, .caret-blink { animation: none; }
      html { scroll-behavior: auto; }
    }
  `}</style>
);

const TypewriterText = ({ text, speed = 75, className = '', cursorClassName = 'bg-rose-400' }) => {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let i = 0;
    setDisplayed('');
    const timer = setInterval(() => {
      i += 1;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayed}
      <span
        className={`inline-block w-[3px] h-[0.85em] ml-1 align-middle rounded-sm caret-blink ${cursorClassName}`}
        aria-hidden="true"
      />
    </span>
  );
};

const TypewriterRotator = ({ phrases, typingSpeed = 55, deletingSpeed = 30, pauseMs = 1800 }) => {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx] || '';
    let timeout;

    if (!isDeleting && text.length < current.length) {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && text.length === current.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseMs);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setPhraseIdx((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIdx, phrases, typingSpeed, deletingSpeed, pauseMs]);

  return (
    <span className="inline-flex items-center font-mono text-xs sm:text-sm text-blue-400">
      <span>{text}</span>
      <span className="inline-block w-[2px] h-4 ml-1 bg-blue-400 caret-blink" aria-hidden="true" />
    </span>
  );
};

const GitHubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const ScrollReveal = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-600 ease-out transform ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      } ${className}`}
    >
      {children}
    </div>
  );
};

const SectionHeading = ({ eyebrow, eyebrowColor = 'text-rose-400', title }) => (
  <ScrollReveal>
    <div className="mb-6">
      <p className={`font-mono text-xs tracking-wider mb-1.5 ${eyebrowColor}`}>{eyebrow}</p>
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">{title}</h2>
      <div className="mt-2.5 h-1 w-14 rounded-full bg-gradient-to-r from-rose-500 to-blue-500" />
    </div>
  </ScrollReveal>
);

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const rotatingPhrases = [
    'Full-Stack • AI & Cloud',
    'ICCISS 2026 Best Paper Awardee',
    'AWS Certified Cloud Practitioner (981/1000)'
  ];

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 30);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.max(0, (y / docHeight) * 100)) : 0;
      setScrollProgress(pct);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'achievements', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const keyMetrics = [
    { label: 'AWS Cloud Practitioner', value: '981/1000', color: 'text-blue-400', border: 'hover:border-blue-500/60' },
    { label: 'Geofence Accuracy', value: '95%', color: 'text-rose-400', border: 'hover:border-rose-500/60' },
    { label: 'DSA Problems Solved', value: '150+', color: 'text-blue-400', border: 'hover:border-blue-500/60' },
    { label: 'B.E. CSE CGPA', value: '8.22', color: 'text-rose-400', border: 'hover:border-rose-500/60' }
  ];

  const skills = {
    'Languages & Backend': ['Python', 'Java', 'FastAPI', 'Flask', 'Node.js', 'Express.js', 'RESTful APIs', 'Pydantic', 'SQLAlchemy'],
    'AI & Intelligent Systems': ['Gemini AI', 'spaCy', 'Sentence Transformers', 'RAG', 'MCP', 'Prompt Engineering'],
    'Frontend & Mobile': ['React.js', 'React Native (Expo)', 'TypeScript', 'Flutter', 'HTML', 'CSS', 'Streamlit'],
    'Databases': ['PostgreSQL (Supabase)', 'MySQL', 'MongoDB', 'Firebase'],
    'Cloud & Infrastructure': ['AWS (IAM, EC2, VPC, EBS, S3)', 'OCI', 'GCP', 'Docker', 'Terraform', 'LocalStack'],
    'Testing & Developer Tools': ['Playwright', 'Git', 'Postman', 'Linux / WSL', 'VS Code', 'Android Studio']
  };

  const projects = [
    {
      title: 'Adaptive Location-Based Reminder',
      period: 'Jan 2026 – Apr 2026',
      role: 'Software & NLP Systems',
      badge: 'Best Paper Award – ICCISS 2026',
      highlights: [
        'Developed a speed-aware geofencing algorithm that dynamically adjusts reminder trigger radius, achieving 95% accuracy in real-world conditions.',
        'Built an NLP pipeline using spaCy to extract actions, locations, and people from natural-language reminders, achieving 70% extraction accuracy.',
        'Optimized location monitoring using nearest-reminder selection and adaptive GPS polling, achieving under 60 ms computation time and 1–2% battery consumption per hour.'
      ],
      tech: ['FastAPI', 'Python', 'spaCy', 'Flutter', 'Firebase'],
      repos: [
        { label: 'NLP Server Repo', url: 'https://github.com/VSHarinee/nlpserver' },
        { label: 'Reminder App Repo', url: 'https://github.com/VSHarinee/location-based-reminder' }
      ]
    },
    {
      title: 'Smart Specs – Eye Health Monitoring',
      period: 'Feb 2024 – Jan 2025',
      role: 'IoT & App Systems',
      badge: 'Patent Application Filed (No. 202541057926)',
      highlights: [
        'Developed IoT-enabled smart eyewear using IR sensors to monitor blink patterns and detect potential eye strain through prolonged absence of blinking.',
        'Integrated ESP32 with Firebase Realtime Database and Flutter for real-time data transmission and blink monitoring, with Cloud Firestore for timestamped eye health logs.',
        'Implemented threshold-based eye strain detection and in-app notifications to alert users and encourage timely eye care.'
      ],
      tech: ['ESP32', 'IR Sensors', 'Flutter', 'Firebase'],
      repos: [{ label: 'GitHub Repo', url: 'https://github.com/VSHarinee/smartspecs' }]
    },
    {
      title: 'Capture The Flag (CTF) Platform',
      period: 'Feb 2025 – Mar 2025',
      role: 'Full-Stack & Backend Systems',
      badge: '100+ Concurrent Participants',
      highlights: [
        'Developed backend APIs for a locally hosted CTF platform, supporting 100+ concurrent participants in interactive cybersecurity challenges.',
        'Designed a modular challenge management system, enabling new challenges to be added or updated directly through MongoDB without modifying backend APIs.',
        'Implemented bcrypt hashing to securely store challenge flags and validate participant submissions.'
      ],
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'bcrypt'],
      isPrivate: true
    },
    {
      title: 'Java Q&A Chatbot',
      period: '2024',
      role: 'Applied AI & Web',
      badge: 'Semantic Search',
      highlights: [
        'Semantic search chatbot matching user queries against a structured knowledge base using sentence embeddings.',
        'Built with Flask, Sentence Transformers, HTML, and JSON for fast topic lookup.'
      ],
      tech: ['Flask', 'Sentence Transformers', 'HTML', 'JSON'],
      isPrivate: true
    }
  ];

  const experience = [
    {
      title: 'Software Developer Intern',
      company: 'ZAdroit IT Solutions Pvt. Ltd.',
      period: 'Jul 2025 – Feb 2026',
      type: 'Hybrid • Salem, TN',
      bullets: [
        'Rebuilt a healthcare mobile application frontend in React Native (Expo) and TypeScript across 20+ screens and 30+ reusable components with Expo Router navigation.',
        'Implemented localization in English, Tamil, and Hindi, authentication and profile APIs, and a dynamic test screen supporting 13 input types.',
        'Built RAG and Model Context Protocol (MCP) mini-projects, Playwright automated tests, and technical setup documentation.'
      ]
    },
    {
      title: 'Full Stack & Project Intern',
      company: 'Infosys Springboard',
      period: 'Feb 2025 – Mar 2025',
      type: 'Remote',
      bullets: [
        'Developed an automated bank check processor and data extractor using Python, FastAPI, Gemini AI, Pydantic, SQLAlchemy, PostgreSQL (Supabase), and Streamlit.'
      ],
      repo: {
        label: 'GitHub Repo',
        url: 'https://github.com/VSHarinee/bank-check-extractor'
      }
    }
  ];

  const achievements = [
    {
      title: 'Best Paper Award – ICCISS 2026',
      description: 'Awarded Best Paper for "Adaptive Location Based Reminder Using Speed Aware Geofencing" at the ICCISS 2026 International Conference.',
      icon: Award
    },
    {
      title: 'Patent Application Filed',
      description: 'Patent Application No. 202541057926 filed for Smart Specs – Eye Health Monitoring.',
      icon: Sparkles
    },
    {
      title: 'UiPath Hack-a-bot',
      description: 'Secured 3rd place in the automation hackathon conducted by UiPath.',
      icon: Award
    },
    {
      title: 'Synergy 24 Paper Presentation',
      description: 'Secured 2nd Place for "Blockchain in Energy Trading" at Government College of Engineering, Salem.',
      icon: Award
    },
    {
      title: 'Problem Solving & DSA',
      description: '150+ DSA problems solved along with LeetCode 100 Days & 50 Days Badges.',
      icon: Code
    }
  ];

  const education = [
    {
      degree: 'B.E. | Computer Science Engineering',
      institution: 'Sona College of Technology, Salem',
      period: '2022 – 2026',
      score: 'CGPA: 8.22 / 10'
    },
    {
      degree: '12th | Computer Science and Maths',
      institution: "Holy Angels' Girls Matric Hr. Sec. School",
      period: '2021 – 2022',
      score: 'Percentage: 79%'
    },
    {
      degree: '10th',
      institution: "Holy Angels' Girls Matric Hr. Sec. School",
      period: '2019 – 2020',
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

  const navItems = ['home', 'about', 'skills', 'projects', 'experience', 'achievements', 'contact'];

  return (
    <div className="portfolio-root min-h-screen bg-[#06060a] text-zinc-100 relative overflow-x-clip selection:bg-rose-500/30 selection:text-rose-100">
      <GlobalStyles />

      {/* Ambient glows */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-36 -left-36 h-[420px] w-[420px] rounded-full bg-rose-600/15 blur-[130px]" />
        <div className="absolute top-1/3 -right-36 h-[460px] w-[460px] rounded-full bg-blue-600/15 blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 h-[380px] w-[380px] rounded-full bg-rose-500/10 blur-[130px]" />
      </div>

      {/* Scroll progress */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-zinc-900">
        <div
          className="h-full bg-gradient-to-r from-rose-500 via-blue-500 to-rose-400 transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-[3px] w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#06060a]/90 backdrop-blur-xl border-b border-rose-500/20 shadow-lg shadow-rose-950/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2.5 font-display text-base font-bold tracking-wide text-white hover:text-rose-400 transition-colors"
              aria-label="Go to top"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-gradient-to-r from-rose-500 to-blue-500 opacity-60 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-rose-500" />
              </span>
              <span>Harinee V S</span>
            </button>

            <div className="hidden md:flex items-center gap-7">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize text-sm font-medium transition-all relative py-1 ${
                    activeSection === item ? 'text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {item}
                  {activeSection === item && (
                    <span className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-gradient-to-r from-rose-500 to-blue-500 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-zinc-300 hover:text-rose-400 p-1"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#0b0b12]/95 backdrop-blur-xl border-b border-zinc-800">
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 capitalize text-sm font-medium text-zinc-300 hover:bg-rose-500/10 hover:text-rose-400 rounded-lg transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" className="relative z-10 px-4 sm:px-6 lg:px-8 pt-24 pb-8 sm:pt-28 sm:pb-10">
        <div className="grid-bg pointer-events-none absolute inset-0 -z-10" />
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="hero-in inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1.5 text-xs font-medium text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to software engineering roles
            </div>

            <div className="hero-in" style={{ animationDelay: '70ms' }}>
              <div className="inline-flex items-center gap-2 mb-2.5 min-h-[24px]">
                <Terminal size={15} className="text-blue-400 flex-shrink-0" />
                <TypewriterRotator phrases={rotatingPhrases} />
              </div>
              <h1 className="font-display text-5xl sm:text-7xl font-bold leading-[1.03] min-h-[1.08em]">
                <TypewriterText
                  text="Harinee V S"
                  speed={80}
                  className="bg-gradient-to-r from-white via-rose-200 to-blue-400 bg-clip-text text-transparent"
                  cursorClassName="bg-blue-400"
                />
              </h1>
            </div>

            <p
              className="hero-in text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed"
              style={{ animationDelay: '140ms' }}
            >
              Software engineer building end-to-end applications, intelligent APIs, mobile apps, and cloud-backed
              systems. Turning complex ideas into fast, reliable products—from NLP pipelines and IoT hardware to
              full-stack web and mobile apps.
            </p>

            <div className="hero-in flex flex-wrap items-center gap-3 pt-1" style={{ animationDelay: '210ms' }}>
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 to-blue-600 hover:from-rose-500 hover:to-blue-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-rose-600/25 hover:-translate-y-0.5 transition-all text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                View projects
                <ArrowUpRight size={18} />
              </button>

              <a
                href="https://www.linkedin.com/in/vsharinee"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-zinc-900/90 border border-blue-500/30 text-zinc-100 px-4 py-3 rounded-xl hover:border-blue-400 hover:bg-blue-500/10 hover:-translate-y-0.5 transition-all text-sm"
              >
                <LinkedInIcon size={17} />
                LinkedIn
              </a>

              <a
                href="https://github.com/VSHarinee"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-zinc-900/90 border border-rose-500/30 text-zinc-100 px-4 py-3 rounded-xl hover:border-rose-400 hover:bg-rose-500/10 hover:-translate-y-0.5 transition-all text-sm"
              >
                <GitHubIcon size={17} />
                GitHub
              </a>

              <a
                href="https://leetcode.com/Harinee_V_S"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-zinc-900/90 border border-zinc-700 text-zinc-100 px-4 py-3 rounded-xl hover:border-blue-400 hover:-translate-y-0.5 transition-all text-sm"
              >
                <Code size={17} />
                LeetCode
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 hero-in" style={{ animationDelay: '280ms' }}>
            <div className="bg-[#0c0d14]/90 border border-zinc-800 hover:border-rose-500/40 rounded-2xl p-6 space-y-5 shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <span className="font-mono text-xs tracking-wider text-blue-400">Highlights</span>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-rose-500/15 text-rose-300 border border-rose-500/35">
                  ICCISS 2026 Best Paper
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                {keyMetrics.map((m) => (
                  <div
                    key={m.label}
                    className={`bg-[#11131f] border border-zinc-800/90 ${m.border} rounded-xl p-4 hover:-translate-y-1 transition-all duration-200`}
                  >
                    <p className={`text-2xl font-bold font-display ${m.color}`}>{m.value}</p>
                    <p className="text-xs text-zinc-400 mt-1">{m.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 text-xs text-zinc-400 pt-1">
                <MapPin size={14} className="text-rose-400" />
                <span>Salem, Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 pt-8 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="About" title="Building practical, scalable systems" />

          <ScrollReveal>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-3xl">
              I care about building software that holds up in the real world—whether that&apos;s a mobile app, a
              backend API, or an IoT prototype. My internships at ZAdroit IT Solutions and Infosys Springboard taught
              me how to ship fast without cutting corners on code quality.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Capabilities" eyebrowColor="text-blue-400" title="Technical skills" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(skills).map(([category, skillList], idx) => (
              <ScrollReveal key={category} delay={idx * 60}>
                <div className="bg-[#0c0d14] p-5 rounded-2xl border border-zinc-800 hover:border-blue-500/45 hover:-translate-y-1 transition-all duration-300 h-full">
                  <h3 className="font-display text-sm font-semibold text-rose-400 mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className="bg-[#131624] border border-zinc-800 hover:border-blue-400/50 hover:text-blue-200 px-3 py-1 rounded-lg text-xs text-zinc-200 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects (2x2 Grid) */}
      <section id="projects" className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Projects" title="Featured projects" />

          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 70} className="h-full">
                <div className="bg-[#0c0d14] rounded-2xl border border-zinc-800 hover:border-rose-500/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full shadow-xl">
                  <div>
                    <div className="p-6 border-b border-zinc-800/90">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                        <span className="text-xs font-mono text-zinc-400">{project.period}</span>
                        {project.badge && (
                          <span className="bg-gradient-to-r from-rose-500/15 to-blue-500/15 text-blue-300 border border-blue-500/35 px-3 py-0.5 rounded-full text-xs font-medium">
                            {project.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-rose-400 text-sm font-medium">{project.role}</p>
                    </div>

                    <div className="p-6">
                      <ul className="space-y-3 text-zinc-300 text-sm leading-relaxed">
                        {project.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="bg-[#131624] border border-zinc-800 px-2.5 py-1 rounded-md text-xs text-zinc-200 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5 pt-3 border-t border-zinc-800/70">
                      {project.repos &&
                        project.repos.map((repo) => (
                          <a
                            key={repo.url}
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-medium bg-gradient-to-r from-rose-600/20 to-blue-600/20 hover:from-rose-600/35 hover:to-blue-600/35 border border-rose-500/40 text-white px-3 py-1.5 rounded-lg transition-all"
                          >
                            <GitHubIcon size={14} />
                            <span>{repo.label}</span>
                            <ArrowUpRight size={13} className="text-blue-400" />
                          </a>
                        ))}

                      {project.isPrivate && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-zinc-900 border border-zinc-700/90 text-zinc-400 px-3 py-1.5 rounded-lg">
                          <Lock size={13} className="text-rose-400" />
                          <span>Private repo</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section id="experience" className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Experience" eyebrowColor="text-blue-400" title="Work experience" />

          <div className="space-y-4">
            {experience.map((exp, index) => (
              <ScrollReveal key={exp.company} delay={index * 80}>
                <div className="bg-[#0c0d14] p-6 rounded-2xl border border-zinc-800 hover:border-blue-500/45 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <div className="flex items-start gap-3">
                      <div className="hidden sm:flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500/20 to-blue-500/20 border border-zinc-700">
                        <Briefcase size={18} className="text-blue-300" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-white">{exp.title}</h3>
                        <p className="text-rose-400 font-semibold text-sm sm:text-base">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                      <span className="bg-blue-500/10 border border-blue-500/30 px-3 py-1 rounded-full text-blue-300">
                        {exp.type}
                      </span>
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-2.5 text-zinc-300 text-sm sm:text-base leading-relaxed">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <ChevronRight size={18} className="text-rose-400 mt-0.5 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.repo && (
                    <div className="mt-4 pt-3 border-t border-zinc-800/70">
                      <a
                        href={exp.repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium bg-gradient-to-r from-rose-600/20 to-blue-600/20 hover:from-rose-600/35 hover:to-blue-600/35 border border-rose-500/40 text-white px-3 py-1.5 rounded-lg transition-all"
                      >
                        <GitHubIcon size={14} />
                        <span>{exp.repo.label}</span>
                        <ArrowUpRight size={13} className="text-blue-400" />
                      </a>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Education */}
          <div className="mt-10">
            <ScrollReveal>
              <div className="flex items-center gap-2.5 mb-5">
                <GraduationCap className="text-blue-400" size={26} />
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">Education</h2>
              </div>
            </ScrollReveal>

            <div className="space-y-3">
              {education.map((edu, index) => (
                <ScrollReveal key={edu.degree} delay={index * 60}>
                  <div className="bg-[#0c0d14] p-5 rounded-2xl border border-zinc-800 hover:border-rose-500/40 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <h3 className="font-display text-lg font-semibold text-white">{edu.degree}</h3>
                        <p className="text-blue-400 text-sm font-medium">{edu.institution}</p>
                      </div>
                      <div className="sm:text-right text-sm">
                        <p className="text-zinc-400 font-mono text-xs">{edu.period}</p>
                        <p className="text-rose-400 font-semibold mt-0.5">{edu.score}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Milestones" title="Achievements" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <ScrollReveal key={achievement.title} delay={index * 65} className="h-full">
                <div className="bg-[#0c0d14] p-6 rounded-2xl border border-zinc-800 hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300 h-full">
                  <achievement.icon className="text-rose-400 mb-3" size={26} />
                  <h3 className="font-display text-lg font-semibold text-white mb-2">{achievement.title}</h3>
                  <p className="text-zinc-300 text-sm leading-relaxed">{achievement.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Compact Contact */}
      <section id="contact" className="relative z-10 py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#0e101c] via-[#0c0d14] to-[#140a10] border border-rose-500/30 rounded-3xl px-6 py-7 sm:px-9 sm:py-8 shadow-2xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-1.5 max-w-xl">
              <p className="font-mono text-xs tracking-wider text-blue-400">Contact</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">Let&apos;s work together</h2>
              <p className="text-zinc-300 text-sm sm:text-base">
                Open to software engineering roles and collaborations. Reach out anytime at{' '}
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="text-blue-300 hover:text-rose-300 underline underline-offset-2 transition-colors"
                >
                  {EMAIL_ADDRESS}
                </a>
                .
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 to-blue-600 hover:from-rose-500 hover:to-blue-500 text-white font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-rose-600/25 hover:-translate-y-0.5 transition-all text-sm"
              >
                <Mail size={17} />
                Email me
              </a>
              <a
                href="https://www.linkedin.com/in/vsharinee"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-zinc-900 border border-blue-500/40 text-zinc-100 hover:border-blue-400 hover:-translate-y-0.5 px-4 py-2.5 rounded-xl transition-all text-sm"
              >
                <LinkedInIcon size={17} />
                LinkedIn
              </a>
              <a
                href="https://github.com/VSHarinee"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-zinc-900 border border-rose-500/40 text-zinc-100 hover:border-rose-400 hover:-translate-y-0.5 px-4 py-2.5 rounded-xl transition-all text-sm"
              >
                <GitHubIcon size={17} />
                GitHub
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-[#040407] py-6 px-4 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-500">
          <p>© 2026 Harinee V S</p>
          <p>Built with React &amp; Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;