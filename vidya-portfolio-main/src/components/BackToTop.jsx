import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronUp } from "react-icons/fa";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 400);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ y: -2, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-30 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-lg transition hover:bg-[#2563eb] hover:text-white"
          aria-label="Scroll to top"
        >
          <FaChevronUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
