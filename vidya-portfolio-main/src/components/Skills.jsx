import React from "react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Backend",
    skills: [
      "Python",
      "Django",
      "Django REST Framework",
      "REST APIs",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Bootstrap",
    ],
  },
  {
    title: "Database",
    skills: [
      "MySQL",
      "PostgreSQL",
      "SQLite",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Shopify Liquid",
      "Cloudinary",
    ],
  },
  {
    title: "Deployment",
    skills: [
      "Google Cloud Run",
      "Render",
      "Vercel",
      "Supabase",
    ],
  },
];

const groupColors = [
  { gradient: "from-blue-500 to-cyan-500", glow: "rgba(59,130,246,0.12)", border: "rgba(59,130,246,0.15)" },
  { gradient: "from-violet-500 to-purple-500", glow: "rgba(139,92,246,0.12)", border: "rgba(139,92,246,0.15)" },
  { gradient: "from-emerald-500 to-teal-500", glow: "rgba(16,185,129,0.12)", border: "rgba(16,185,129,0.15)" },
  { gradient: "from-amber-500 to-orange-500", glow: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.15)" },
  { gradient: "from-rose-500 to-pink-500", glow: "rgba(244,63,94,0.12)", border: "rgba(244,63,94,0.15)" },
];

const marqueeTechs = ["Python", "Django", "React", "PostgreSQL", "REST API", "Shopify", "Git", "GCP", "Vercel", "Bootstrap", "MySQL", "SQLite", "JavaScript", "Supabase", "Cloudinary"];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-[#0a0e1a] py-28 lg:py-36">
      {/* ─── Background Layers ─── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_30%_30%,rgba(139,92,246,0.08),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_70%,rgba(37,99,235,0.06),transparent)]" />

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
        className="absolute right-[10%] top-[15%] w-[200px] h-[200px] rounded-full bg-violet-600/5 blur-3xl"
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[5%] bottom-[20%] w-[180px] h-[180px] rounded-full bg-blue-600/5 blur-3xl"
        animate={{ y: [0, 25, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ─── Section Header ─── */}
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
            Skills
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={0.1}
            className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight"
          >
            Technical
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Capabilities
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={0.2}
            className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto"
          >
            A polished stack for modern SaaS-style development with clean
            architecture and production-ready tooling.
          </motion.p>
        </motion.div>

        {/* ─── Skill Groups Grid ─── */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {skillGroups.map((group, groupIndex) => {
            const colors = groupColors[groupIndex % groupColors.length];
            return (
              <motion.div
                key={group.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={groupIndex * 0.08}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                  boxShadow: `0 20px 60px ${colors.glow}`,
                  borderColor: colors.border,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group rounded-[1.5rem] border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl p-7 shadow-[0_0_40px_rgba(0,0,0,0.2)] relative overflow-hidden"
              >
                {/* Top Glow Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
                />

                {/* Group Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${colors.gradient} shadow-lg`}
                  >
                    <span className="text-white text-xs font-black">
                      {group.title.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-white tracking-wide">
                    {group.title}
                  </h3>
                </div>

                {/* Divider */}
                <div
                  className={`h-px bg-gradient-to-r ${colors.gradient} opacity-10 mb-6`}
                />

                {/* Skill Items */}
                <div className="space-y-2.5">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: groupIndex * 0.08 + skillIndex * 0.06,
                      }}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 rounded-xl border border-white/[0.04] bg-white/[0.02] px-3.5 py-2.5 hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-300 cursor-default group/skill"
                    >
                      {/* Colored Dot */}
                      <span
                        className={`flex-shrink-0 h-2 w-2 rounded-full bg-gradient-to-br ${colors.gradient} opacity-60 group-hover/skill:opacity-100 transition-opacity duration-300`}
                      />
                      <span className="text-sm text-slate-400 group-hover/skill:text-slate-200 font-medium transition-colors duration-300">
                        {skill}
                      </span>
                      {/* Hover Arrow */}
                      <span className="ml-auto text-[10px] text-slate-600 group-hover/skill:text-slate-400 opacity-0 group-hover/skill:opacity-100 transition-all duration-300 -translate-x-2 group-hover/skill:translate-x-0">
                        →
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Skill Count */}
                <div className="mt-5 pt-4 border-t border-white/[0.04]">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-slate-600 font-medium">
                    {group.skills.length} {group.skills.length === 1 ? "skill" : "skills"}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ─── Bottom Marquee ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-20 overflow-hidden"
        >
          <div className="relative h-px w-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
          <div className="mt-8 flex animate-marquee whitespace-nowrap">
            {[0, 1].map((setIndex) => (
              <div key={setIndex} className="flex items-center gap-8 mr-8">
                {marqueeTechs.map((tech) => (
                  <span
                    key={`${setIndex}-${tech}`}
                    className="text-sm font-medium text-slate-600/40 uppercase tracking-[0.2em] select-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ─── Bottom Divider ─── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

      {/* ─── Marquee Keyframe (injected once) ─── */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
}