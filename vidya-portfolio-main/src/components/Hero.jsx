import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight, FaDownload, FaChevronDown } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

const techIcons = {
  Python: "🐍",
  Django: "🛡️",
  "REST API": "🔗",
  PostgreSQL: "🐘",
  React: "⚛️",
  Shopify: "🛒",
};

const floatingShapes = [
  { size: 80, x: "10%", y: "20%", delay: 0, duration: 6, color: "rgba(37,99,235,0.06)" },
  { size: 120, x: "85%", y: "15%", delay: 1.5, duration: 8, color: "rgba(37,99,235,0.04)" },
  { size: 60, x: "75%", y: "70%", delay: 0.8, duration: 7, color: "rgba(37,99,235,0.07)" },
  { size: 100, x: "5%", y: "75%", delay: 2, duration: 9, color: "rgba(37,99,235,0.05)" },
  { size: 40, x: "50%", y: "10%", delay: 0.5, duration: 5, color: "rgba(37,99,235,0.08)" },
];

const gridDots = Array.from({ length: 48 }, (_, i) => ({
  id: i,
  x: (i % 8) * 12.5,
  y: Math.floor(i / 8) * 12.5,
}));

export default function Hero() {
  const typeSequence = [
    "Django Applications",
    1800,
    "Backend Systems",
    1800,
    "Shopify Solutions",
    1800,
    "Responsive Websites",
    1800,
  ];

  const techStack = [
    "Python",
    "Django",
    "REST API",
    "PostgreSQL",
    "React",
    "Shopify",
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#0a0e1a] flex items-center">
      {/* ─── Background Layers ─── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.18),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_80%,rgba(99,102,241,0.1),transparent)]" />

      {/* ─── Grid Pattern ─── */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      {/* ─── Floating Shapes ─── */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-2xl"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background: shape.color,
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 15, -10, 5, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ─── Animated Dot Grid ─── */}
      <div className="absolute inset-0 hidden lg:block">
        {gridDots.map((dot, i) => (
          <motion.div
            key={dot.id}
            className="absolute w-[2px] h-[2px] rounded-full bg-blue-400"
            style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
            animate={{ opacity: [0.1, 0.4, 0.1] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.08,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ─── Decorative Ring ─── */}
      <motion.div
        className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full border border-blue-500/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute -right-20 -top-20 w-[420px] h-[420px] rounded-full border border-blue-500/5"
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      />

      {/* ─── Main Content ─── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 lg:py-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-center space-y-10"
        >
          {/* ─── Availability Badge ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl px-6 py-2.5 text-sm font-medium text-blue-200 shadow-[0_0_30px_rgba(37,99,235,0.08)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              Available for Opportunities
            </div>
          </motion.div>

          {/* ─── Name Label ─── */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-sm uppercase tracking-[0.4em] bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent font-medium"
          >
            Hi, I'm Vidya Nanaware
          </motion.p>

          {/* ─── Main Heading ─── */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight"
          >
            Software
            <br />
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Developer
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
              />
            </span>
          </motion.h1>

          {/* ─── Type Animation ─── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="flex justify-center gap-2 text-xl sm:text-2xl font-medium text-slate-400"
          >
            <span>I build</span>
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent font-semibold">
                <TypeAnimation
                  sequence={typeSequence}
                  speed={50}
                  repeat={Infinity}
                  wrapper="span"
                />
              </span>
              <motion.span
                className="inline-block w-[2px] h-6 bg-blue-400 ml-0.5 align-middle"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
              />
            </span>
          </motion.div>

          {/* ─── Description ─── */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mx-auto max-w-2xl text-base sm:text-lg text-slate-400 leading-relaxed"
          >
            Software Developer with{" "}
            <span className="text-white font-medium">1+ year</span> of experience
            in Python, Django, and web development. Experienced in building
            Django applications, database management systems, Shopify
            customizations, and responsive websites.
          </motion.p>

          {/* ─── CTA Buttons ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.15 }}
            className="flex justify-center flex-wrap gap-4 pt-2"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(37,99,235,0.4)" }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="group relative flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-white font-semibold shadow-[0_4px_30px_rgba(37,99,235,0.3)] overflow-hidden transition-colors"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative flex items-center gap-3">
                View Projects
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm px-8 py-4 font-semibold text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300"
            >
              <FaDownload className="text-blue-400 group-hover:text-cyan-400 transition-colors" />
              Download Resume
            </motion.a>
          </motion.div>

          {/* ─── Tech Stack ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="pt-8"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-5 font-medium">
              Tech Stack
            </p>
            <div className="flex justify-center flex-wrap gap-3">
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 1.4 + i * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{
                    y: -6,
                    boxShadow: "0 8px 30px rgba(37,99,235,0.15)",
                    borderColor: "rgba(59,130,246,0.3)",
                  }}
                  className="group flex items-center gap-2.5 rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm px-5 py-3 font-medium text-slate-400 hover:text-white transition-all duration-300 cursor-default"
                >
                  <span className="text-lg group-hover:scale-125 transition-transform duration-300">
                    {techIcons[tech]}
                  </span>
                  <span className="text-sm">{tech}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ─── Scroll Indicator ─── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaChevronDown className="text-blue-400/60 text-sm" />
        </motion.div>
      </motion.div>

      {/* ─── Bottom Gradient Fade ─── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0e1a] to-transparent" />
    </section>
  );
}