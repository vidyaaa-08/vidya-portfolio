import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const offset = window.scrollY + 120;
      for (const link of navLinks) {
        const element = document.querySelector(link.href);
        if (element) {
          const top = element.offsetTop;
          const bottom = top + element.offsetHeight;
          if (offset >= top && offset < bottom) {
            setActiveSection(link.href.slice(1));
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-200" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-[#0F172A] flex items-center justify-center text-white shadow-sm">
            <span className="text-sm font-black">VN</span>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Vidya Nanaware</p>
            <p className="text-sm font-semibold text-slate-900">Software Developer</p>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition ${activeSection === link.href.slice(1) ? "text-[#0F172A]" : "text-slate-500 hover:text-[#2563EB]"}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-[#2563EB] bg-[#2563EB]/10 px-5 py-2 text-sm font-semibold text-[#2563EB] transition hover:bg-[#2563EB] hover:text-white"
          >
            Contact
          </a>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 ring-1 ring-slate-200 hover:bg-slate-100 lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden border-t border-slate-200 bg-white"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium transition ${activeSection === link.href.slice(1) ? "text-[#2563EB]" : "text-slate-600 hover:text-[#2563EB]"}`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
