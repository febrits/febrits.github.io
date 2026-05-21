/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ChevronRight, 
  Github, 
  Layers, 
  Mail, 
  Menu, 
  Shield, 
  Cpu, 
  Brain, 
  LayoutGrid,
  Info,
  Send,
  Linkedin,
  Twitter,
  ArrowUpRight,
  Terminal as TerminalIcon,
  Zap,
  Lock,
  Globe,
  Database,
  Monitor,
  Smartphone
} from 'lucide-react';
import { PROJECTS, type Project } from './constants';
import { cn } from './lib/utils';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const touchDetected = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(touchDetected);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isTouchDevice]);

  return (
    <div ref={containerRef} className="relative min-h-screen">
      {/* System Status Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] flex h-8 items-center justify-between border-b border-white/5 bg-black/60 px-2 sm:px-4 font-mono text-[9px] sm:text-[10px] tracking-widest text-brand-accent/60 backdrop-blur-md overflow-hidden">
        <div className="flex items-center gap-2 sm:gap-4 min-w-0">
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="hidden xs:inline">ENCRYPTED_LINK: ACTIVE</span>
            <span className="xs:hidden">SECURE</span>
          </div>
          <span className="hidden sm:block truncate">SYSTEM: MUHAMMAD_FEBRILIAN_TISNA_OS_v2.6</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <span className="hidden sm:inline">LATENCY: 12ms</span>
          <span className="hidden sm:block">UPTIME: 14:02:33:01</span>
          <div className="flex items-center gap-1">
            <Lock size={10} />
            <span className="hidden sm:inline">SECURE</span>
          </div>
        </div>
      </div>

      {/* Mouse Glow Follower — desktop only */}
      {!isTouchDevice && (
        <motion.div 
          className="pointer-events-none fixed inset-0 z-30"
          animate={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.05), transparent 80%)`,
          }}
        />
      )}
      {/* Cinematic Background */}
      <div className="fixed inset-0 z-[-1] overflow-hidden bg-brand-bg">
        <div className="scanline" />
        {/* Animated Cyber Grid */}
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.2) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} 
        />
        
        <motion.div 
          style={{ y: backgroundY }}
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 opacity-40 mix-blend-screen"
        >
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2400" 
            alt="Cyber security background"
            className="h-full w-full object-cover grayscale opacity-50"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        {/* Animated Orbs for depth */}
        <div className="absolute top-[10%] left-[20%] h-96 w-96 rounded-full bg-brand-accent/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[150px] animate-pulse delay-1000" />
      </div>

      {/* Navigation Dock */}
      <nav className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2" style={{ bottom: 'max(2rem, env(safe-area-inset-bottom, 0px) + 0.5rem)' }}>
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="glass flex items-center gap-1 rounded-full p-2"
        >
          <NavButton active={activeSection === 'home'} onClick={() => scrollToSection('home')}>
            <Cpu size={18} />
            <span className="hidden sm:block">Nexus</span>
          </NavButton>
          <NavButton active={activeSection === 'projects'} onClick={() => scrollToSection('projects')}>
            <Layers size={18} />
            <span className="hidden sm:block">Archive</span>
          </NavButton>
          <NavButton active={activeSection === 'about'} onClick={() => scrollToSection('about')}>
            <Shield size={18} />
            <span className="hidden sm:block">Intel</span>
          </NavButton>
          <NavButton active={activeSection === 'contact'} onClick={() => scrollToSection('contact')}>
            <Mail size={18} />
            <span className="hidden sm:block">Connect</span>
          </NavButton>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8 flex flex-col items-center gap-4"
          >
            <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-brand-accent/50 p-1">
              <div className="h-full w-full overflow-hidden rounded-full bg-white/10">
                <img 
                  src="/profile.jpg" 
                  alt="Profile"
                  className="h-full w-full object-cover grayscale transition-all group-hover:grayscale-0 sm:hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 rounded-full border border-brand-accent/20 animate-ping opacity-20" />
            </div>
            <div className="space-y-1">
              <p className="font-mono text-[10px] tracking-[0.8em] uppercase text-brand-accent/60">
                [ ACCESS_GRANTED ]
              </p>
              <p className="font-mono text-xs tracking-[0.4em] uppercase text-white/80">
                Fullstack Developer // Security Researcher // AI Agent Architect
              </p>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="group relative"
          >
            <span className="text-glow animate-text-gradient bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text font-serif text-[3rem] font-black leading-[1.1] tracking-tight text-transparent sm:text-8xl md:text-9xl block">
              MUHAMMAD <br /> FEBRILIAN
            </span>
            <span className="text-glow animate-text-gradient bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text font-serif text-[3rem] font-black leading-[1.1] tracking-tight text-transparent sm:text-8xl md:text-9xl block">
              TISNA.
            </span>
            
            {/* Glitch Overlay — desktop hover only */}
            {!isTouchDevice && (
              <>
                <span className="absolute inset-0 block select-none pointer-events-none opacity-0 group-hover:opacity-100 group-hover:animate-glitch text-red-500/50 mix-blend-screen transition-opacity font-serif text-[3rem] font-black leading-[1.1] tracking-tight sm:text-8xl md:text-9xl">
                  MUHAMMAD <br /> FEBRILIAN TISNA.
                </span>
                <span className="absolute inset-0 block select-none pointer-events-none opacity-0 group-hover:opacity-100 group-hover:animate-glitch text-blue-500/50 mix-blend-screen transition-opacity font-serif text-[3rem] font-black leading-[1.1] tracking-tight sm:text-8xl md:text-9xl translate-x-1">
                  MUHAMMAD <br /> FEBRILIAN TISNA.
                </span>
              </>
            )}
          </motion.h1>

          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
            className="mx-auto mt-8 h-px w-24 bg-brand-accent/50" 
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <p className="mx-auto mt-12 max-w-3xl text-lg leading-relaxed text-brand-muted/70 sm:text-xl">
              Building autonomous digital ecosystems with cryptographic integrity and neural intelligence.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row"
          >
            <button 
              onClick={() => scrollToSection('projects')}
              className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 font-semibold text-black transition-all hover:scale-105 active:scale-95"
            >
              <span>Explore My Work</span>
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </button>
            <div className="flex gap-4">
              <SocialLink href="#"><Github size={20} /></SocialLink>
              <SocialLink href="#"><Linkedin size={20} /></SocialLink>
              <SocialLink href="#"><Twitter size={20} /></SocialLink>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity }}
          className="absolute bottom-32 flex flex-col items-center gap-2"
        >
          <div className="h-12 w-[1px] bg-gradient-to-b from-brand-accent to-transparent" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-muted">Scroll</span>
        </motion.div>
      </section>

      {/* Projects Grid Section */}
      <section id="projects" className="py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 flex flex-col items-end gap-4 text-right">
            <h2 className="font-serif text-5xl font-light tracking-tight sm:text-7xl">SELECTED WORKS</h2>
            <p className="max-w-md text-brand-muted">
              A curated collection of projects spanning AI, security, analytics, and e-commerce. Tier-ranked by complexity and impact.
            </p>
            <div className="flex gap-2 mt-2">
              <span className="rounded-full bg-brand-accent px-3 py-1 text-xs font-bold text-white">S-TIER</span>
              <span className="rounded-full bg-indigo-500/80 px-3 py-1 text-xs font-bold text-white">A-TIER</span>
              <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white">B-TIER</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-5xl font-light tracking-tight sm:text-7xl">THE NEXUS</h2>
              <div className="mt-12 space-y-6 text-lg leading-relaxed text-brand-muted">
                <p>
                  As we move into 2026, I focus on the intersection of **autonomous agents** and **security research**. 
                  My passion lies in building specialized tools that bridge the gap between human intent and machine execution.
                </p>
                <div className="glass-card font-mono text-sm leading-relaxed text-brand-accent/80 overflow-hidden">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-4">
                    <div className="flex items-center gap-2">
                      <TerminalIcon size={14} />
                      <span className="text-[10px] uppercase tracking-widest">Active Laboratory v2.6.4</span>
                    </div>
                    <div className="flex gap-1.5 font-sans">
                      <div className="h-2 w-2 rounded-full bg-red-500/40" />
                      <div className="h-2 w-2 rounded-full bg-yellow-500/40" />
                      <div className="h-2 w-2 rounded-full bg-green-500/40" />
                    </div>
                  </div>
                  
                  <div className="max-h-64 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
                    {[
                      { icon: <Zap size={14} className="text-yellow-500" />, title: "Vox-Aura", desc: "Neural Audio Synthesis" },
                      { icon: <LayoutGrid size={14} className="text-blue-500" />, title: "Visceral-Gen", desc: "Latent Video Diffusion" },
                      { icon: <Shield size={14} className="text-red-500" />, title: "Recon-Daemon", desc: "Automated Pentest Suite" },
                      { icon: <Brain size={14} className="text-purple-500" />, title: "Synthetix", desc: "Autonomous Agent Fleet" },
                      { icon: <TerminalIcon size={14} className="text-green-500" />, title: "Deep-Refactor", desc: "AI Codebase Evolution" },
                      { icon: <Lock size={14} className="text-orange-500" />, title: "Zero-Trust", desc: "Identity Verification Hub" },
                      { icon: <Database size={14} className="text-cyan-500" />, title: "Auto-DBA", desc: "Self-Healing DB Agents" },
                      { icon: <Globe size={14} className="text-emerald-500" />, title: "Nexus-Proxy", desc: "Neural WAF Protection" },
                      { icon: <Cpu size={14} className="text-pink-500" />, title: "Kernel-Watch", desc: "eBPF Anomaly Detection" },
                      { icon: <Monitor size={14} className="text-indigo-500" />, title: "Ghost-OS", desc: "Minimal Hardened Sandbox" },
                      { icon: <Layers size={14} className="text-amber-500" />, title: "Chain-Guard", desc: "Smart Contract Auditor" },
                      { icon: <Smartphone size={14} className="text-rose-500" />, title: "Signal-X", desc: "Encrypted P2P Mesh" },
                    ].map((tool, i) => (
                      <div key={i} className="group/item flex items-start gap-3 border-l-2 border-transparent pl-2 hover:border-brand-accent transition-colors">
                        <span className="mt-1 text-xs opacity-40">{i+1 < 10 ? `0${i+1}` : i+1}</span>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-brand-accent brightness-150">{'>'}</span>
                            <span className="text-[11px] font-bold uppercase tracking-widest text-white group-hover/item:text-brand-accent transition-colors">{tool.title}</span>
                            <span className="h-1 w-1 rounded-full bg-green-500 animate-pulse ml-auto" />
                          </div>
                          <p className="text-[10px] text-brand-muted mt-0.5 leading-relaxed">{tool.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-2 border-t border-white/5 flex items-center justify-between opacity-40">
                    <span className="text-[9px]">TOTAL_MODULES: 12</span>
                    <span className="text-[9px] animate-pulse">LISTENING...</span>
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  {['Rust', 'React/Next.js', 'Go', 'AI Agent Orchestration', 'LLM Security', 'Pentesting'].map((skill) => (
                    <span key={skill} className="rounded-full border border-white/10 px-4 py-1 text-sm bg-white/5 transition-colors hover:border-brand-accent/50">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative aspect-square overflow-hidden rounded-3xl group">
              <motion.img 
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                src="/profile-portrait.jpg"
                alt="Muhammad Febrilian Tisna Portrait"
                className="h-full w-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 border border-white/10 rounded-3xl" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-serif text-2xl italic leading-tight">"Securing the digital frontier through autonomous intelligence."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-serif text-5xl font-light tracking-tight sm:text-7xl">GET IN TOUCH</h2>
          <p className="mt-6 text-lg text-brand-muted">
            Available for selected visionary projects and partnerships.
          </p>
          
          <form className="mt-16 space-y-6">
            <div className="group relative">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-transparent border-b border-white/20 py-4 outline-none transition-colors focus:border-brand-accent focus:text-brand-ink placeholder:text-white/20"
              />
            </div>
            <div className="group relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-transparent border-b border-white/20 py-4 outline-none transition-colors focus:border-brand-accent focus:text-brand-ink placeholder:text-white/20"
              />
            </div>
            <div className="group relative">
              <textarea 
                rows={4} 
                placeholder="Message" 
                className="w-full bg-transparent border-b border-white/20 py-4 outline-none transition-colors focus:border-brand-accent focus:text-brand-ink placeholder:text-white/20"
              />
            </div>
            <button className="group flex w-full items-center justify-between rounded-full bg-brand-accent px-8 py-5 text-lg font-bold text-white transition-transform hover:scale-[1.02] active:scale-95">
              <span>Send Message</span>
              <Send size={24} className="transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          <footer className="mt-32 border-t border-white/10 pt-12 text-sm text-brand-muted">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <p>© 2026 Muhammad Febrilian Tisna. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of Service</a>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}

function NavButton({ children, active, onClick }: { children: React.ReactNode, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "relative flex items-center gap-2 px-4 py-2 text-sm transition-colors",
        active ? "text-white" : "text-brand-muted hover:text-white"
      )}
    >
      {active && (
        <motion.div layoutId="active-pill" className="absolute inset-0 bg-white/10 rounded-full" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}

function SocialLink({ children, href }: { children: React.ReactNode, href: string }) {
  return (
    <a 
      href={href} 
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors hover:border-brand-accent hover:text-brand-accent"
    >
      {children}
    </a>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const tierColors = {
    S: 'bg-brand-accent text-white',
    A: 'bg-indigo-500/80 text-white',
    B: 'bg-white/20 text-white',
  };

  // Determine if overlay should be visible:
  // - Desktop: show on hover (CSS group-hover)
  // - Mobile: show on tap (React state)
  const showOverlay = isOpen || isHovering;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index % 2 * 0.2, duration: 0.8 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
      // Desktop hover
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      // Mobile tap — only toggle if not clicking a link
      onClick={(e) => {
        const target = e.target as HTMLElement;
        if (target.closest('a[href]')) return;
        setIsOpen((prev) => !prev);
      }}
    >
      {/* Image container — no overflow-hidden so overlay can slide up */}
      <div className="relative aspect-[16/10] rounded-2xl bg-white/5">
        {/* Image wrapper with overflow-hidden for the image itself */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Dark tint over image — fades out when overlay shows */}
        <div
          className={cn(
            'absolute inset-0 rounded-2xl bg-brand-bg/20 transition-opacity duration-500 pointer-events-none',
            showOverlay ? 'opacity-0' : 'opacity-100'
          )}
        />

        {/* Tier Badge — always on top */}
        <div className="absolute top-4 right-4 z-20 pointer-events-none">
          <span
            className={cn(
              'rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider',
              tierColors[project.tier]
            )}
          >
            {project.tier}-Tier
          </span>
        </div>

        {/*
          Info Overlay — OUTSIDE the overflow-hidden wrapper.
          Uses Framer Motion state-based animation.
          Desktop: hover via onMouseEnter/Leave
          Mobile: tap via onClick toggle
        */}
        <motion.div
          className="absolute inset-x-0 bottom-0 z-10 glass rounded-b-2xl p-4 sm:p-8"
          style={{ backgroundColor: 'rgba(10, 10, 14, 0.85)' }}
          initial={false}
          animate={{ y: showOverlay ? 0 : '100%' }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span
              className={cn(
                'rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
                tierColors[project.tier]
              )}
            >
              {project.tier}-Tier
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              {project.category}
            </span>
          </div>
          <h3 className="font-serif text-xl sm:text-3xl font-medium">
            {project.title}
          </h3>
          <p className="mt-2 sm:mt-4 text-xs sm:text-sm text-brand-muted line-clamp-2 sm:line-clamp-none">
            {project.description}
          </p>
          <div className="mt-2 sm:mt-4 flex flex-wrap gap-1">
            {project.tech.slice(0, 4).map((t, i) => (
              <span
                key={i}
                className="rounded-full bg-white/10 px-2 py-0.5 text-[10px]"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-3 sm:mt-6 flex items-center gap-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm font-semibold text-white hover:text-brand-accent transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <span>Live Demo</span>
                <ArrowUpRight size={14} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-brand-muted hover:text-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <span>Source</span>
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </motion.div>
      </div>

      {/* Card footer */}
      <div className="mt-6 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <p className="text-xs text-brand-muted">{project.year}</p>
            <span
              className={cn(
                'rounded-full px-2 py-0.5 text-[10px] font-bold',
                tierColors[project.tier]
              )}
            >
              {project.tier}
            </span>
          </div>
          <h3 className="mt-1 font-serif text-xl">{project.title}</h3>
        </div>
        <motion.div
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10"
          animate={{
            backgroundColor: showOverlay ? 'var(--color-brand-accent)' : 'transparent',
            borderColor: showOverlay ? 'var(--color-brand-accent)' : 'rgba(255,255,255,0.1)',
            rotate: showOverlay ? 90 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <ChevronRight size={20} />
        </motion.div>
      </div>
    </motion.div>
  );
}

function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  }
}
