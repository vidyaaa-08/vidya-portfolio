import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { FaCode, FaDatabase, FaShoppingCart, FaPlug } from "react-icons/fa";

const services = [
  {
    icon: FaCode,
    label: "Django web application development",
    color: "from-blue-500 to-cyan-500",
    glow: "rgba(59,130,246,0.15)",
  },
  {
    icon: FaDatabase,
    label: "PostgreSQL / MySQL database design",
    color: "from-violet-500 to-purple-500",
    glow: "rgba(139,92,246,0.15)",
  },
  {
    icon: FaShoppingCart,
    label: "Shopify customization & app workflows",
    color: "from-emerald-500 to-teal-500",
    glow: "rgba(16,185,129,0.15)",
  },
  {
    icon: FaPlug,
    label: "REST API design & backend services",
    color: "from-amber-500 to-orange-500",
    glow: "rgba(245,158,11,0.15)",
  },
];

const responsibilities = [
  "Developed Django web applications for internal and client-facing projects.",
  "Managed PostgreSQL and MySQL systems for secure data workflows.",
  "Customized Shopify stores with Liquid templates and third-party integrations.",
  "Delivered full lifecycle solutions for Ahinsadham, Muffynn, Rutu, and RamDev projects.",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function About() {
  const { description } = portfolioData.personal;

  return (
    <section id="about" className="relative overflow-hidden bg-[#0a0e1a] py-28 lg:py-36">
      {/* ─── Background Layers ─── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_20%,rgba(37,99,235,0.1),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_80%,rgba(99,102,241,0.07),transparent)]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating Orbs */}
      <motion.div
        className="absolute -left-20 top-1/3 w-[300px] h-[300px] rounded-full bg-blue-600/5 blur-3xl"
        animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-20 bottom-1/4 w-[250px] h-[250px] rounded-full bg-indigo-600/5 blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ─── Section Header ─── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl text-center mx-auto mb-20"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-sm uppercase tracking-[0.4em] bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-medium"
          >
            About
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={0.1}
            className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight"
          >
            Professional Software
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Development
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={0.2}
            className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto"
          >
            Software Developer at Itegoss with experience in Django
            applications, database management systems, Shopify customization,
            and client projects.
          </motion.p>
        </motion.div>

        {/* ─── Main Grid ─── */}
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] items-start">
          {/* ─── Left: What I Do ─── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[2rem] border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl p-8 sm:p-10 shadow-[0_0_80px_rgba(0,0,0,0.3)]"
          >
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-7">
              <div className="h-px flex-1 bg-gradient-to-r from-blue-500/40 to-transparent" />
              <h3 className="text-lg font-semibold text-white tracking-wide uppercase text-xs">
                What I Do
              </h3>
              <div className="h-px flex-1 bg-gradient-to-l from-blue-500/40 to-transparent" />
            </motion.div>

            <motion.p
              variants={fadeUp}
              custom={0.1}
              className="text-slate-400 leading-8 text-[15px]"
            >
              {description}
            </motion.p>

            {/* Service Cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {services.map((service, i) => (
                <motion.div
                  key={service.label}
                  variants={fadeUp}
                  custom={0.15 + i * 0.08}
                  whileHover={{
                    y: -5,
                    boxShadow: `0 8px 40px ${service.glow}`,
                    borderColor: "rgba(255,255,255,0.12)",
                  }}
                  className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 cursor-default transition-colors duration-300 overflow-hidden"
                >
                  {/* Hover Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`}
                  />
                  <div className="relative flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${service.color} shadow-lg`}
                    >
                      <service.icon className="text-white text-sm" />
                    </div>
                    <p className="text-sm font-medium text-slate-300 leading-relaxed pt-2">
                      {service.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ─── Right Column ─── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-8"
          >
            {/* Profile Card */}
            <motion.div
              variants={fadeUp}
              custom={0.05}
              whileHover={{ borderColor: "rgba(255,255,255,0.1)" }}
              className="rounded-[2rem] border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl p-8 shadow-[0_0_60px_rgba(0,0,0,0.2)] transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold">
                  VN
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Vidya Nanaware</p>
                  <p className="text-slate-500 text-xs">Software Developer @ Itegoss</p>
                </div>
              </div>
              <div className="h-px bg-white/[0.06] mb-5" />
              <p className="text-slate-400 leading-7 text-sm">
                At Itegoss, I build Django applications that solve real business
                problems, manage robust database systems, and deliver polished
                Shopify storefronts for clients.
              </p>
              {/* Mini Stats */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { value: "1+", label: "Years Exp." },
                  { value: "4+", label: "Projects" },
                  { value: "6+", label: "Technologies" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center rounded-xl bg-white/[0.03] border border-white/[0.04] py-3"
                  >
                    <p className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500 mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Responsibilities Card */}
            <motion.div
              variants={fadeUp}
              custom={0.15}
              whileHover={{ borderColor: "rgba(255,255,255,0.1)" }}
              className="rounded-[2rem] border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl p-8 shadow-[0_0_60px_rgba(0,0,0,0.2)] transition-colors duration-300"
            >
              <h3 className="text-base font-semibold text-white mb-5 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                Key Responsibilities
              </h3>
              <ul className="space-y-4">
                {responsibilities.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={fadeUp}
                    custom={0.2 + i * 0.07}
                    className="flex gap-3.5 text-sm text-slate-400 leading-relaxed"
                  >
                    <span className="relative mt-1.5 flex-shrink-0">
                      <span className="block h-[7px] w-[7px] rounded-full border border-blue-400/60 bg-blue-400/20" />
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ─── Bottom Divider ─── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
    </section>
  );
}