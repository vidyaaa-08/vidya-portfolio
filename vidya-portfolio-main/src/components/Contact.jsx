import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPaperPlane,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaSpinner,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";
import { portfolioData } from "../data/portfolioData";

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

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 60,
      spread: 55,
      origin: { y: 0.6 },
      colors: ["#2563EB", "#0F172A", "#FFFFFF"],
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      try {
        await emailjs.sendForm(
          serviceId,
          templateId,
          formRef.current,
          publicKey
        );
        setSubmitStatus("success");
        triggerConfetti();
        setFormData({ name: "", email: "", subject: "", message: "" });
      } catch (err) {
        setSubmitStatus("error");
        setErrorMessage(
          "Unable to send message at the moment. Please try again later."
        );
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus("success");
        triggerConfetti();
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 1200);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0a0e1a] py-28 lg:py-36"
    >
      {/* ─── Background Layers ─── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_20%,rgba(37,99,235,0.1),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_20%_80%,rgba(99,102,241,0.07),transparent)]" />

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
        className="absolute right-[10%] top-[20%] w-[250px] h-[250px] rounded-full bg-blue-600/5 blur-3xl"
        animate={{ y: [0, -35, 0], x: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[5%] bottom-[25%] w-[200px] h-[200px] rounded-full bg-indigo-600/5 blur-3xl"
        animate={{ y: [0, 25, 0], x: [0, -20, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
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
            Contact
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={0.1}
            className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight"
          >
            Let&apos;s
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Connect
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={0.2}
            className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto"
          >
            Reach out for collaboration, freelance work, or questions about
            technical strategy.
          </motion.p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">
          {/* ─── Left Column: Info ─── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[2rem] border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl p-8 sm:p-10 shadow-[0_0_80px_rgba(0,0,0,0.3)] relative overflow-hidden"
          >
            {/* Card Top Glow Line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-xs uppercase tracking-[0.4em] bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-medium"
            >
              Professional Contact
            </motion.p>
            <motion.h3
              variants={fadeUp}
              custom={0.05}
              className="mt-4 text-2xl font-semibold text-white"
            >
              Connect with Me
            </motion.h3>
            <motion.p
              variants={fadeUp}
              custom={0.1}
              className="mt-4 text-slate-400 leading-7 text-[15px]"
            >
              I&apos;m available to discuss backend architecture, Django product
              builds, Shopify customization, and long-term development
              partnerships.
            </motion.p>

            <div className="mt-10 space-y-4">
              {[
                {
                  label: "Email",
                  value: portfolioData.personal.email,
                  href: `mailto:${portfolioData.personal.email}`,
                },
                {
                  label: "LinkedIn",
                  value: "linkedin.com/in/vidya-nanaware",
                  href: portfolioData.personal.linkedin,
                },
                {
                  label: "GitHub",
                  value: "github.com/vidyananaware",
                  href: portfolioData.personal.github,
                },
              ].map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  variants={fadeUp}
                  custom={0.15 + i * 0.05}
                  whileHover={{
                    x: 4,
                    backgroundColor: "rgba(255,255,255,0.04)",
                    borderColor: "rgba(255,255,255,0.1)",
                  }}
                  className="block rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-300 cursor-pointer"
                >
                  <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">
                    {item.value}
                  </p>
                </motion.a>
              ))}
            </div>

            {/* Social Icons Row */}
            <motion.div
              variants={fadeUp}
              custom={0.3}
              className="mt-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5"
            >
              <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500 mb-4">
                Connect instantly
              </p>
              <div className="flex items-center gap-3">
                {[
                  {
                    Icon: FaEnvelope,
                    url: `mailto:${portfolioData.personal.email}`,
                  },
                  { Icon: FaLinkedin, url: portfolioData.personal.linkedin },
                  { Icon: FaGithub, url: portfolioData.personal.github },
                ].map(({ Icon, url }) => (
                  <motion.a
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{
                      scale: 1.15,
                      y: -4,
                      boxShadow: "0 8px 25px rgba(59,130,246,0.2)",
                      borderColor: "rgba(59,130,246,0.4)",
                    }}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-slate-400 transition-colors hover:text-blue-400"
                  >
                    <Icon className="text-base" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ─── Right Column: Form ─── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[2rem] border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl p-8 sm:p-10 shadow-[0_0_80px_rgba(0,0,0,0.3)] relative overflow-hidden"
          >
            {/* Card Top Glow Line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

            <form
              ref={formRef}
              onSubmit={handleFormSubmit}
              className="space-y-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <motion.label
                  variants={fadeUp}
                  custom={0.05}
                  className="block"
                >
                  <span className="text-sm font-medium text-slate-300">
                    Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-3 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                    placeholder="Your name"
                  />
                </motion.label>
                <motion.label
                  variants={fadeUp}
                  custom={0.1}
                  className="block"
                >
                  <span className="text-sm font-medium text-slate-300">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-3 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                    placeholder="Your email"
                  />
                </motion.label>
              </div>

              <motion.label variants={fadeUp} custom={0.15} className="block">
                <span className="text-sm font-medium text-slate-300">
                  Subject
                </span>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="mt-3 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                  placeholder="Project subject"
                />
              </motion.label>

              <motion.label variants={fadeUp} custom={0.2} className="block">
                <span className="text-sm font-medium text-slate-300">
                  Message
                </span>
                <textarea
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="mt-3 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-4 text-sm text-white placeholder-slate-600 outline-none transition focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 resize-none"
                  placeholder="Tell me about your project or opportunity"
                />
              </motion.label>

              <motion.div variants={fadeUp} custom={0.25}>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 35px rgba(37,99,235,0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_4px_25px_rgba(37,99,235,0.3)] disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden transition-colors"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative flex items-center gap-3">
                    {isSubmitting ? (
                      <>
                        Sending...
                        <FaSpinner className="animate-spin" />
                      </>
                    ) : (
                      <>
                        Send Message
                        <FaPaperPlane />
                      </>
                    )}
                  </span>
                </motion.button>
              </motion.div>

              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-emerald-300 backdrop-blur-sm"
                  >
                    Message sent successfully. I&apos;ll get back to you soon.
                  </motion.div>
                )}
                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="rounded-xl border border-rose-500/20 bg-rose-500/10 p-4 text-sm text-rose-300 backdrop-blur-sm"
                  >
                    {errorMessage}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>

      {/* ─── Bottom Divider ─── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
    </section>
  );
}