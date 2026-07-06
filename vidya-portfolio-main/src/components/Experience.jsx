import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const points = [
    "Developed and maintained Django based web applications",
    "Built backend modules using Python, Django and REST APIs",
    "Managed MySQL and PostgreSQL databases",
    "Customized Shopify themes using Liquid, HTML, CSS and JavaScript",
    "Worked on live projects: Ahinsadham, Muffynn, Rutu and RamDev",
    "Handled debugging, deployment support and website optimization",
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#0a0e1a] py-28 lg:py-36"
    >
      {/* ─── Background Layers ─── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_30%,rgba(37,99,235,0.1),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_35%_at_85%_70%,rgba(99,102,241,0.07),transparent)]" />

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
        className="absolute left-[8%] top-[25%] w-[220px] h-[220px] rounded-full bg-blue-600/5 blur-3xl"
        animate={{ y: [0, -35, 0], x: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[5%] bottom-[30%] w-[180px] h-[180px] rounded-full bg-indigo-600/5 blur-3xl"
        animate={{ y: [0, 25, 0], x: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ─── Heading ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-[0.4em] bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-medium">
            Experience
          </p>

          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
            Professional
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            My professional journey as a software developer working on
            real-world web applications and client projects.
          </p>
        </motion.div>

        {/* ─── Timeline Card ─── */}
        <div className="relative max-w-4xl mx-auto">

          {/* Timeline Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-6 sm:left-8 top-0 h-full w-px bg-gradient-to-b from-blue-500/60 via-indigo-500/30 to-transparent origin-top"
          />

          {/* Timeline Glow */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-6 sm:left-8 top-0 h-full w-8 bg-gradient-to-b from-blue-500/10 via-indigo-500/5 to-transparent origin-top blur-xl"
          />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative ml-16 sm:ml-20 rounded-[2rem] border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl p-8 sm:p-10 shadow-[0_0_80px_rgba(0,0,0,0.3)] overflow-hidden"
          >
            {/* Card Top Glow Line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

            {/* Subtle Inner Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-32 bg-gradient-to-b from-blue-500/[0.04] to-transparent pointer-events-none" />

            {/* Timeline Dot */}
            <div className="absolute -left-[52px] sm:-left-[64px] top-10">
              <div className="relative">
                <div className="h-5 w-5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
                <motion.div
                  className="absolute inset-0 h-5 w-5 rounded-full bg-blue-500"
                  animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </div>

            {/* Header Row */}
            <div className="relative flex flex-wrap justify-between gap-4">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Software Developer
                </h3>
                <p className="mt-2 text-lg bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                  Itegoss
                </p>
              </div>

              <span className="h-fit rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-blue-300 font-semibold text-sm backdrop-blur-sm">
                June 2025 – Present
              </span>
            </div>

            {/* Divider */}
            <div className="mt-6 mb-6 h-px bg-gradient-to-r from-white/[0.06] via-white/[0.1] to-white/[0.06]" />

            {/* Description */}
            <p className="relative text-slate-400 leading-8 text-[15px]">
              Working as a Software Developer specializing in Python,
              Django development, database management, Shopify customization,
              and responsive web application development.
            </p>

            {/* Points */}
            <div className="mt-8 grid gap-4">
              {points.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex items-start gap-4 rounded-xl border border-white/[0.03] bg-white/[0.01] px-4 py-3 hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-300 cursor-default"
                >
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full border border-blue-400/60 bg-blue-400/20 group-hover:bg-blue-400/40 group-hover:border-blue-400/80 transition-all duration-300" />
                  <p className="text-slate-400 group-hover:text-slate-200 text-sm leading-relaxed transition-colors duration-300">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <div className="mt-8 mb-6 h-px bg-gradient-to-r from-white/[0.06] via-white/[0.1] to-white/[0.06]" />

            {/* Skill Tags */}
            <div className="relative flex flex-wrap gap-2.5">
              {[
                "Python",
                "Django",
                "PostgreSQL",
                "JavaScript",
                "Shopify Liquid",
                "REST APIs",
              ].map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.6 + i * 0.06,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{
                    y: -3,
                    boxShadow: "0 4px 20px rgba(59,130,246,0.15)",
                    borderColor: "rgba(59,130,246,0.3)",
                    backgroundColor: "rgba(59,130,246,0.1)",
                  }}
                  className="rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-400 hover:text-blue-300 transition-colors duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* ─── End of Timeline Dot ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
            className="absolute left-6 sm:left-8 bottom-0 -translate-x-1/2"
          >
            <div className="h-3 w-3 rounded-full bg-slate-600 border-2 border-slate-700" />
          </motion.div>
        </div>
      </div>

      {/* ─── Bottom Divider ─── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
    </section>
  );
}