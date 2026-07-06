import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const projects = portfolioData.projects;

  // Filter Categories
  const categories = ["All", "Frontend", "Backend", "Database", "Cloud / DevOps"];

  // Filter Logic
  const filteredProjects = selectedFilter === "All"
    ? projects
    : projects.filter((project) => project.category === selectedFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/10">
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase bg-cyan-500/5 px-3 py-1.5 rounded-full border border-cyan-400/10">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-sans tracking-tight mt-4 mb-2">
            My Creative{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Showcase
            </span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Filter Categories Header */}
        <div 
          className="flex flex-wrap items-center justify-center gap-2 mb-16 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-widest uppercase border transition-all duration-300 relative ${
                selectedFilter === cat
                  ? "border-cyan-400/30 text-cyan-400 bg-cyan-500/10 shadow-[0_0_15px_rgba(0,243,255,0.1)]"
                  : "border-slate-800/80 text-slate-400 bg-slate-900/35 hover:border-slate-700/60 hover:text-slate-200"
              }`}
            >
              {cat}
              {selectedFilter === cat && (
                <motion.div
                  layoutId="projectsFilterSlider"
                  className="absolute inset-0 border border-cyan-400 rounded-xl pointer-events-none"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid with Framer Motion AnimatePresence Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="glassmorphism rounded-2xl overflow-hidden border border-white/5 flex flex-col justify-between shadow-2xl relative group hover:-translate-y-2 hover:scale-[1.01] duration-300"
              >
                {/* Neon glow hover border */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Image Container */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Glassmorphic hover overlay */}
                  <div className="absolute inset-0 bg-[#020617]/75 opacity-0 group-hover:opacity-100 backdrop-blur-[3px] transition-all duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/60 flex items-center justify-center text-xl text-slate-100 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_10px_#00f3ff] transition-all duration-300"
                      title="View GitHub Repository"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/60 flex items-center justify-center text-lg text-slate-100 hover:text-purple-400 hover:border-purple-400 hover:shadow-[0_0_10px_#b026ff] transition-all duration-300"
                      title="View Live Site"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>

                {/* Card Content details */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Category Label */}
                    <span className="text-[10px] font-bold font-mono tracking-widest text-cyan-400 uppercase">
                      {project.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-bold font-sans tracking-wide text-slate-100 mt-2 mb-3">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 font-sans font-light text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Skills tags list */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[10px] font-mono font-medium rounded-md bg-slate-900/50 border border-slate-800/80 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
