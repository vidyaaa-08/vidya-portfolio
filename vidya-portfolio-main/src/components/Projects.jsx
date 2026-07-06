import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaPython,
  FaGlobe,
  FaDatabase,
  FaCode,
  FaBuilding,
  FaCheck,
} from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Ahinsadham NGO Website",
    category: "Full Stack Development",
    Icon: FaGlobe,
    gradient: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59,130,246,0.15)",
    hoverBorder: "hover:border-blue-500/40",
    description:
      "Developed a responsive NGO website with donation information, activities, gallery, volunteer sections and dynamic content management.",
    features: ["Dynamic Content CMS", "Donation & Volunteer Portal", "Responsive Gallery"],
    tags: ["Python", "Django", "PostgreSQL", "JavaScript"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 2,
    title: "Ahinsadham Data Management",
    category: "Backend System",
    Icon: FaDatabase,
    gradient: "from-violet-500 to-purple-500",
    glowColor: "rgba(139,92,246,0.15)",
    hoverBorder: "hover:border-violet-500/40",
    description:
      "Created a Django based management system for handling donors, volunteers, records, admin workflows and secure database operations.",
    features: ["Secure Data Workflows", "Admin Dashboard", "Cloudinary Integration"],
    tags: ["Python", "Django", "PostgreSQL", "Cloudinary"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 3,
    title: "Itegoss Company Website",
    category: "Corporate Website",
    Icon: FaCode,
    gradient: "from-emerald-500 to-teal-500",
    glowColor: "rgba(16,185,129,0.15)",
    hoverBorder: "hover:border-emerald-500/40",
    description:
      "Developed the official Itegoss company website with modern UI sections, responsive design, service pages and optimized frontend experience.",
    features: ["Modern SaaS UI/UX", "High Performance", "Service Showcases"],
    tags: ["React", "JavaScript", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 4,
    title: "Rental Management Platform",
    category: "Full Stack App",
    Icon: FaPython,
    gradient: "from-amber-500 to-orange-500",
    glowColor: "rgba(245,158,11,0.15)",
    hoverBorder: "hover:border-amber-500/40",
    description:
      "Built a rental booking platform with authentication, product listings, booking management, admin dashboard and database driven features.",
    features: ["User Authentication", "Booking Engine", "Admin Analytics"],
    tags: ["Python", "Django", "MySQL"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 5,
    title: "RamDev Group Website",
    category: "Business Website",
    Icon: FaBuilding,
    gradient: "from-rose-500 to-pink-500",
    glowColor: "rgba(244,63,94,0.15)",
    hoverBorder: "hover:border-rose-500/40",
    description:
      "Created a responsive corporate website showcasing company information, services, contact sections and professional business presentation.",
    features: ["Corporate Branding", "Service Catalog", "Contact Integration"],
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    liveLink: "#",
    githubLink: "#",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#0a0e1a] py-28 lg:py-36"
    >
      {/* ─── Background Layers ─── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_60%_20%,rgba(37,99,235,0.08),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_30%_80%,rgba(99,102,241,0.06),transparent)]" />

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating Orbs */}
      <motion.div
        className="absolute left-[15%] top-[10%] w-[250px] h-[250px] rounded-full bg-blue-600/5 blur-3xl"
        animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[10%] bottom-[15%] w-[200px] h-[200px] rounded-full bg-indigo-600/5 blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ─── Header ─── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-sm uppercase tracking-[0.4em] bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-medium"
          >
            Projects
          </motion.p>

          <motion.h2
            variants={fadeUp}
            custom={0.1}
            className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight"
          >
            Featured
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Work
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={0.2}
            className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto"
          >
            Real world projects developed using Django, React and modern web
            technologies.
          </motion.p>
        </motion.div>

        {/* ─── Grid Container ─── */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index * 0.1}
              variants={fadeUp}
              whileHover={{
                y: -10,
                boxShadow: `0 25px 60px ${project.glowColor}`,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`group relative rounded-[2rem] border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl overflow-hidden transition-all duration-500 ${project.hoverBorder}`}
            >
              {/* Animated Top Gradient Border */}
              <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-70 transition-opacity duration-500`} />

              {/* ─── Top Section: Code Preview ─── */}
              <div className="relative p-6 pb-4 bg-gradient-to-b from-white/[0.03] to-transparent">
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold bg-white/[0.05] backdrop-blur-sm border border-white/[0.08] text-slate-400 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Animated Icon Glow */}
                <div className="flex items-center justify-center my-6 relative">
                  <motion.div
                    className={`absolute h-24 w-24 rounded-full bg-gradient-to-br ${project.gradient} opacity-20 blur-2xl`}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className={`relative flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br ${project.gradient} shadow-lg`}>
                    <project.Icon className="text-white text-2xl" />
                  </div>
                </div>

                {/* Code Style UI */}
                <div className="mt-4 bg-black/40 rounded-xl p-4 font-mono text-[11px] text-slate-500 border border-white/[0.05] shadow-inner">
                  <div className="flex gap-1.5 mb-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <div>
                    <span className="text-violet-400">from</span>{" "}
                    <span className="text-cyan-300">{project.tags[0]}</span>{" "}
                    <span className="text-violet-400">import</span>{" "}
                    <span className="text-emerald-400">*</span>
                  </div>
                  <div className="mt-1">
                    <span className="text-blue-400">class</span>{" "}
                    <span className="text-cyan-300">{project.title.split(' ')[0]}App</span>
                    <span className="text-slate-600">:</span>
                  </div>
                  <div className="ml-3 text-slate-600">def deploy(self):</div>
                  <div className="ml-6 text-slate-600">return <span className="text-emerald-400">"Success"</span></div>
                </div>
              </div>

              {/* ─── Middle Section: Content ─── */}
              <div className="px-6 pt-4 pb-6 border-t border-white/[0.04]">
                <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Feature Highlights */}
                <ul className="mt-4 space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-500">
                      <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${project.gradient}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* ─── Bottom Section: Tech & Actions ─── */}
                <div className="mt-6 pt-5 border-t border-white/[0.04]">
                  {/* Floating Tech Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <motion.span
                        key={tag}
                        animate={{ y: [0, -3, 0] }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: "easeInOut",
                        }}
                        className="text-[11px] font-medium text-slate-400 bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 rounded-lg"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-3">
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      href={project.liveLink}
                      className={`flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${project.gradient} py-2.5 text-sm font-semibold text-white shadow-lg`}
                    >
                      Live Demo
                      <FaExternalLinkAlt className="text-[10px]" />
                    </motion.a>

                    <motion.a
                      whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.08)" }}
                      whileTap={{ scale: 0.98 }}
                      href={project.githubLink}
                      className="flex items-center justify-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.04] w-11 h-11 text-slate-400 hover:text-white transition-colors"
                    >
                      <FaGithub className="text-sm" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ─── Bottom Divider ─── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
    </section>
  );
}