import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

function Counter({ from = 0, to, duration = 1.5, prefix = "", suffix = "" }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px 0px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate: (value) => setCount(Math.floor(value)),
      });
      return () => controls.stop();
    }
  }, [inView, from, to, duration]);

  return (
    <span ref={ref} className="font-mono font-black text-4xl sm:text-5xl text-cyan-400">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const { name, title, subtitle, description } = portfolioData.personal;
  const stats = portfolioData.stats;

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/20">
      {/* Subtle backdrop circle */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase bg-cyan-500/5 px-3 py-1.5 rounded-full border border-cyan-400/10">
            About Me
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-sans tracking-tight mt-4 mb-2">
            Get To Know{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              My Journey
            </span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Dashboard Mockup */}
          <div className="lg:col-span-5" data-aos="fade-right">
            <div className="relative glassmorphism rounded-2xl p-6 border border-white/5 shadow-2xl overflow-hidden group">
              {/* Outer decorative borders */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500" />
              
              {/* Window controls */}
              <div className="flex items-center gap-1.5 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-[10px] font-mono text-slate-500 ml-2">vidya_nanaware_profile.sh</span>
              </div>

              {/* Developer Illustration SVG */}
              <div className="w-full flex justify-center py-4 bg-slate-950/45 rounded-xl border border-slate-800/40 relative overflow-hidden">
                <svg className="w-48 h-48 text-cyan-500/20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" stroke="#1e293b" strokeWidth="2" />
                  <circle cx="50" cy="50" r="35" stroke="url(#about-grad)" strokeWidth="1" strokeDasharray="5 5" className="animate-spin-slow" />
                  <defs>
                    <linearGradient id="about-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00f3ff" />
                      <stop offset="100%" stopColor="#b026ff" />
                    </linearGradient>
                  </defs>
                  {/* Abstract coding graphic */}
                  <path d="M30 40 H70" stroke="#00f3ff" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                  <path d="M30 50 H60" stroke="#b026ff" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                  <path d="M30 60 H65" stroke="#ff007f" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                  <rect x="40" y="32" width="20" height="36" rx="4" fill="none" stroke="#334155" strokeWidth="2" />
                  <circle cx="50" cy="50" r="6" fill="#020617" stroke="#00f3ff" strokeWidth="2" />
                </svg>
              </div>

              {/* Console commands snippet */}
              <div className="mt-6 font-mono text-xs text-slate-400 space-y-2">
                <p className="text-cyan-400"><span className="text-purple-400">vidya@macbook</span>:~$ <span className="text-white">cat intro.json</span></p>
                <div className="bg-slate-950/40 p-4 rounded-lg border border-slate-800/20 text-slate-300">
                  <p>&#123;</p>
                  <p className="pl-4">"role": "{title}",</p>
                  <p className="pl-4">"focus": "{subtitle}",</p>
                  <p className="pl-4">"passion": "Developing clean backends and responsive web products"</p>
                  <p>&#125;</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Info & Stats */}
          <div className="lg:col-span-7" data-aos="fade-left">
            <h3 className="text-xl sm:text-2xl font-bold font-sans text-cyan-400 mb-4 uppercase tracking-wider">
              Who I Am
            </h3>
            <p className="text-slate-300 font-sans font-light leading-relaxed mb-6 text-base sm:text-lg">
              {description} I design software structures that are clean, performant, and reliable, utilizing Python and JavaScript backends to support responsive client layouts.
            </p>
            <p className="text-slate-400 font-sans font-light leading-relaxed mb-10 text-sm sm:text-base">
              As a BCA student, I focus on writing clean code, building Django database models, designing RESTful endpoints, and deploying web products on cloud platforms like AWS.
            </p>

            {/* Statistics Counters Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((item, idx) => (
                <div 
                  key={idx} 
                  className="glassmorphism p-4 rounded-xl border border-white/5 text-center flex flex-col items-center justify-center relative hover:scale-105 transition-transform"
                >
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
                  <Counter to={item.value} prefix={item.prefix} suffix={item.suffix} />
                  <span className="text-slate-400 text-[10px] tracking-widest uppercase mt-2 font-semibold">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
