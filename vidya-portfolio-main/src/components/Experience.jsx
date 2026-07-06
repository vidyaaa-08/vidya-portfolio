import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function Experience() {
  const experiences = portfolioData.experience;

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/20">
      {/* Background glowing circle */}
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase bg-cyan-500/5 px-3 py-1.5 rounded-full border border-cyan-400/10">
            Timeline
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-sans tracking-tight mt-4 mb-2">
            My Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Experience
            </span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-16 pl-8 md:pl-12 space-y-12">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className="relative group"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {/* Glowing Timeline Node Dot */}
              <motion.div 
                whileHover={{ scale: 1.3 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute -left-[41px] md:-left-[57px] top-6 w-4 h-4 rounded-full border-4 border-cyan-400 bg-slate-950 shadow-[0_0_8px_#00f3ff] group-hover:bg-purple-500 group-hover:border-purple-500 group-hover:shadow-[0_0_12px_#b026ff] transition-colors duration-300 z-10"
              />

              {/* Glassmorphism Card Wrapper */}
              <div className="glassmorphism p-6 sm:p-8 rounded-2xl border border-white/5 relative group-hover:border-cyan-400/20 transition-all duration-300 shadow-xl overflow-hidden">
                {/* Horizontal decorative bar inside hover card */}
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-cyan-400 to-purple-500 transform -translate-x-1 group-hover:translate-x-0 transition-transform duration-300" />
                
                {/* Time frame label */}
                <span className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-widest uppercase rounded-full bg-slate-900 border border-slate-800 text-cyan-400">
                  {exp.period}
                </span>

                {/* Job Title and Employer */}
                <h3 className="text-lg sm:text-xl font-bold font-sans text-slate-100 tracking-wide mb-1">
                  {exp.role}
                </h3>
                <h4 className="text-xs font-mono font-medium text-slate-400 uppercase tracking-widest mb-4">
                  {exp.company}
                </h4>

                {/* Bullet text or details paragraph */}
                <p className="text-slate-300 font-sans font-light text-sm sm:text-base leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
