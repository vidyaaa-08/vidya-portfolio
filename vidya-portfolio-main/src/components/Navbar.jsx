import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Transparent to blur glassmorphic background transition
      setScrolled(window.scrollY > 40);

      // Scroll progress tracking
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollHeight > 0) {
        setScrollProgress((window.scrollY / totalScrollHeight) * 100);
      }

      // Detect active section on viewport scroll
      const buffer = 180;
      const currentScroll = window.scrollY + buffer;
      
      for (const link of navLinks) {
        const target = document.querySelector(link.href);
        if (target) {
          const top = target.offsetTop;
          const height = target.offsetHeight;
          if (currentScroll >= top && currentScroll < top + height) {
            setActiveSection(link.href.slice(1));
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled 
          ? "py-3 bg-[#020617]/70 border-b border-white/5 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.3)]" 
          : "py-6 bg-transparent"
      }`}
    >
      {/* Scroll Progress Bar */}
      <div 
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 shadow-[0_0_10px_#00f3ff]" 
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo with glowing initials */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 border border-cyan-400/30 rounded-xl p-1 bg-slate-900/50 group-hover:border-cyan-400 transition-colors shadow-inner flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-7 h-7">
              <path 
                d="M 35 30 L 15 50 L 35 70 M 65 30 L 85 50 L 65 70" 
                fill="none" 
                stroke="#00f3ff" 
                strokeWidth="10" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          </div>
          <span className="font-sans font-black tracking-widest text-lg bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400 group-hover:from-cyan-400 group-hover:to-purple-400 transition-all">
            VIDYA
          </span>
        </a>

        {/* Desktop Links (Horizontal) */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative py-1 text-xs font-semibold tracking-widest uppercase transition-colors hover:text-cyan-400 ${
                activeSection === link.href.slice(1) ? "text-cyan-400" : "text-slate-300"
              }`}
            >
              {link.name}
              {activeSection === link.href.slice(1) && (
                <motion.div
                  layoutId="navActiveSlider"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_8px_#00f3ff]"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-slate-900/60 border border-cyan-400/20 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,243,255,0.2)] text-xs font-semibold tracking-widest uppercase text-cyan-400 hover:text-white hover:bg-cyan-500/10 transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-2xl text-slate-300 hover:text-cyan-400 transition-colors p-1"
          aria-label="Toggle Navigation Drawer"
        >
          {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Drawer (Collapsible) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden w-full bg-[#020617]/95 border-b border-white/5 backdrop-blur-xl overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-semibold tracking-widest uppercase hover:text-cyan-400 transition-colors py-2 border-b border-slate-800/40 ${
                    activeSection === link.href.slice(1) ? "text-cyan-400" : "text-slate-300"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 text-center w-full px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold tracking-widest uppercase text-white hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all duration-300"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
