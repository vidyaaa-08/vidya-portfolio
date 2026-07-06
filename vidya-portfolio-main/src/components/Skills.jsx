import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { FaLaptopCode, FaServer, FaDatabase, FaCloud, FaCode } from "react-icons/fa";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("languages");
  const skillsData = portfolioData.skills;

  const tabs = [
    { id: "languages", label: "Languages", Icon: FaCode },
    { id: "frontend", label: "Frontend", Icon: FaLaptopCode },
    { id: "backend", label: "Backend", Icon: FaServer },
    { id: "database", label: "Database", Icon: FaDatabase },
    { id: "devops", label: "Cloud & DevOps", Icon: FaCloud },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/10">
      {/* Background neon ambient blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase bg-cyan-500/5 px-3 py-1.5 rounded-full border border-cyan-400/10">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-sans tracking-tight mt-4 mb-2">
            My Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Capabilities
            </span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Tab Headers */}
        <div 
          className="flex flex-wrap items-center justify-center gap-3 mb-16 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {tabs.map((tab) => {
            const TabIcon = tab.Icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-xs font-bold tracking-widest uppercase border transition-all duration-300 ${
                  isSelected
                    ? "border-cyan-400/30 text-cyan-400 bg-cyan-500/10 shadow-[0_0_15px_rgba(0,243,255,0.1)]"
                    : "border-slate-800/80 text-slate-400 bg-slate-900/35 hover:border-slate-700/60 hover:text-slate-200"
                }`}
              >
                <TabIcon className="text-sm" />
                {tab.label}
                {isSelected && (
                  <motion.div
                    layoutId="skillsActiveIndicator"
                    className="absolute inset-0 border border-cyan-400 rounded-xl pointer-events-none"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Skills Bars Grid */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {skillsData[activeTab].map((skill, index) => (
                <div
                  key={skill.name}
                  className="glassmorphism p-5 rounded-2xl border border-white/5 relative flex flex-col justify-between overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
                  
                  {/* Label Row */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-semibold text-slate-100 font-sans tracking-wide text-sm">
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs text-cyan-400 font-bold">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Meter Track */}
                  <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800/40 relative">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.05 }}
                      className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_8px_#00f3ff]"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
