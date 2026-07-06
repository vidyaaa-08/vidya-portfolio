import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaReact, FaPython, FaJs, FaAws, FaArrowRight } from "react-icons/fa";
import { SiDjango, SiMongodb } from "react-icons/si";
import { portfolioData } from "../data/portfolioData";

function FloatingIcon({ Icon, top, left, delay, color, duration = 6 }) {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{
        opacity: [0.15, 0.45, 0.15],
        y: [0, -25, 0],
        x: [0, 15, 0]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
      style={{ top, left, color }}
      className="absolute text-4xl pointer-events-none hidden md:block filter drop-shadow-[0_0_8px_currentColor]"
    >
      <Icon />
    </motion.div>
  );
}

export default function Hero({ mousePos }) {
  const { name, typedStrings, description } = portfolioData.personal;

  // Formatting strings for TypeAnimation: string, delay, string, delay
  const typeSequence = [];
  typedStrings.forEach((str) => {
    typeSequence.push(str);
    typeSequence.push(2000); // 2 seconds display time
  });

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Interactive Mouse-Follow Gradient Backdrop */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-75 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 243, 255, 0.07), transparent 45%), 
                      radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(176, 38, 255, 0.04), transparent 50%)`
        }}
      />

      {/* Floating Technology Elements */}
      <FloatingIcon Icon={FaReact} top="22%" left="15%" delay={0} color="#00f3ff" duration={6} />
      <FloatingIcon Icon={FaPython} top="30%" left="80%" delay={1.5} color="#ffd43b" duration={7} />
      <FloatingIcon Icon={SiDjango} top="70%" left="12%" delay={2.5} color="#092e20" duration={8} />
      <FloatingIcon Icon={FaJs} top="80%" left="75%" delay={0.5} color="#f7df1e" duration={6.5} />
      <FloatingIcon Icon={FaAws} top="18%" left="70%" delay={3} color="#ff9900" duration={9} />
      <FloatingIcon Icon={SiMongodb} top="65%" left="85%" delay={1} color="#47a248" duration={7.5} />

      {/* Central Content */}
      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Tagline Badge */}
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-400/20 backdrop-blur-md">
            Available For Opportunities
          </span>

          {/* Heading Name */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black font-sans tracking-tight mb-4">
            Hello, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 hover:brightness-110 transition-all select-none">
              {name}
            </span>
          </h1>

          {/* Scrolling Typed Text */}
          <div className="h-12 sm:h-16 mb-8 text-xl sm:text-3xl font-medium text-slate-300 font-mono flex items-center justify-center gap-2">
            <span>I am a</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 underline decoration-cyan-400/40">
              <TypeAnimation
                sequence={typeSequence}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </div>

          {/* Paragraph Details */}
          <p className="max-w-xl mx-auto text-base sm:text-lg text-slate-400 mb-10 leading-relaxed font-sans font-light">
            {description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold text-sm tracking-wider uppercase text-white shadow-[0_0_15px_rgba(0,243,255,0.2)] hover:shadow-[0_0_25px_rgba(0,243,255,0.4)] hover:brightness-110 transition-all duration-300"
            >
              Explore Projects
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl bg-slate-900/50 border border-slate-700/60 hover:border-cyan-400 font-semibold text-sm tracking-wider uppercase text-slate-300 hover:text-cyan-400 transition-all duration-300 backdrop-blur-sm"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      {/* Animated Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-9 rounded-full border border-slate-400 p-1 flex justify-center"
        >
          <div className="w-1.5 h-2 bg-cyan-400 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
