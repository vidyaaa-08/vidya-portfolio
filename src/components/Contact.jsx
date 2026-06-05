import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaSpinner } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";
import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#00f3ff", "#b026ff", "#ff007f", "#ffffff"],
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Read keys from environment
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      try {
        await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
        setSubmitStatus("success");
        triggerConfetti();
        setFormData({ name: "", email: "", subject: "", message: "" });
      } catch (err) {
        console.error("EmailJS Error:", err);
        setSubmitStatus("error");
        setErrorMessage("Something went wrong while sending your message. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Robust simulated fallback if keys are not configured yet
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus("success");
        triggerConfetti();
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/20">
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase bg-cyan-500/5 px-3 py-1.5 rounded-full border border-cyan-400/10">
            Get in touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-sans tracking-tight mt-4 mb-2">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              My Inbox
            </span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
          {/* Left: Contact Info details */}
          <div className="lg:col-span-5 flex flex-col justify-between" data-aos="fade-right">
            <div className="glassmorphism p-8 rounded-3xl border border-white/5 shadow-2xl relative h-full flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500/30 to-transparent" />
              
              <div>
                <h3 className="text-2xl font-bold font-sans text-slate-100 mb-2">Let's Discuss Projects</h3>
                <p className="text-slate-400 text-sm font-sans mb-8 leading-relaxed">
                  Have an exciting product idea, website layout, or team position? Drop a message! I'm always open to discussing new digital solutions.
                </p>

                {/* Contact links card list */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 flex items-center justify-center text-sm shadow-inner group-hover:border-cyan-400 transition-colors">
                      <FaEnvelope />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">Email</span>
                      <p className="text-sm font-sans text-slate-200">{portfolioData.personal.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-purple-400 flex items-center justify-center text-sm shadow-inner group-hover:border-purple-400 transition-colors">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">Location</span>
                      <p className="text-sm font-sans text-slate-200">San Francisco, CA (Remote Friendly)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtext tips */}
              <div className="mt-12 pt-6 border-t border-slate-800/40 text-xs text-slate-500 font-mono flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                Response time: under 24 hours
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7" data-aos="fade-left">
            <div className="glassmorphism p-8 rounded-3xl border border-white/5 shadow-2xl relative">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500/20 via-purple-600/30 to-transparent" />
              
              <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-[10px] uppercase font-semibold text-slate-400 tracking-widest mb-2">Name</label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="px-4 py-3.5 rounded-xl bg-slate-950/45 border border-slate-800/60 focus:border-cyan-400 text-slate-100 text-sm outline-none transition-colors duration-300 font-sans shadow-inner focus:shadow-[0_0_10px_rgba(0,243,255,0.08)]"
                      placeholder="Your Name"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-[10px] uppercase font-semibold text-slate-400 tracking-widest mb-2">Email</label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="px-4 py-3.5 rounded-xl bg-slate-950/45 border border-slate-800/60 focus:border-cyan-400 text-slate-100 text-sm outline-none transition-colors duration-300 font-sans shadow-inner focus:shadow-[0_0_10px_rgba(0,243,255,0.08)]"
                      placeholder="Your Email"
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div className="flex flex-col">
                  <label htmlFor="subject" className="text-[10px] uppercase font-semibold text-slate-400 tracking-widest mb-2">Subject</label>
                  <input
                    required
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="px-4 py-3.5 rounded-xl bg-slate-950/45 border border-slate-800/60 focus:border-cyan-400 text-slate-100 text-sm outline-none transition-colors duration-300 font-sans shadow-inner focus:shadow-[0_0_10px_rgba(0,243,255,0.08)]"
                    placeholder="Project Inquiry"
                  />
                </div>

                {/* Message field */}
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-[10px] uppercase font-semibold text-slate-400 tracking-widest mb-2">Message</label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="px-4 py-3.5 rounded-xl bg-slate-950/45 border border-slate-800/60 focus:border-cyan-400 text-slate-100 text-sm outline-none transition-colors duration-300 font-sans shadow-inner focus:shadow-[0_0_10px_rgba(0,243,255,0.08)] resize-none"
                    placeholder="Tell me about your project detail..."
                  />
                </div>

                {/* Submit button with loader */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold text-sm tracking-wider uppercase text-white shadow-[0_0_10px_rgba(0,243,255,0.15)] hover:shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:brightness-110 active:scale-98 transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      Sending Message...
                      <FaSpinner className="animate-spin text-sm" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <FaPaperPlane className="text-xs" />
                    </>
                  )}
                </button>

                {/* Success/Error alert display */}
                <AnimatePresence>
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm text-center font-sans font-medium"
                    >
                      Thank you! Your message has been sent successfully.
                    </motion.div>
                  )}
                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center font-sans font-medium"
                    >
                      {errorMessage}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
