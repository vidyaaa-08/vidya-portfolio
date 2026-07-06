import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaStar } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 26 },
      opacity: { duration: 0.25 },
      scale: { duration: 0.25 }
    }
  },
  exit: (direction) => ({
    x: direction < 0 ? 200 : -200,
    opacity: 0,
    scale: 0.95,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 26 },
      opacity: { duration: 0.2 },
      scale: { duration: 0.2 }
    }
  })
};

export default function Testimonials() {
  const testimonials = portfolioData.testimonials;
  const [[page, direction], setPage] = useState([0, 0]);

  // Wrap page index inside bounds [0, testimonials.length - 1]
  const activeIdx = ((page % testimonials.length) + testimonials.length) % testimonials.length;

  const navigate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      navigate(1);
    }, 7000); // Swap testimonial every 7 seconds
    return () => clearInterval(timer);
  }, [page]);

  const activeTestimonial = testimonials[activeIdx];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-slate-950/10">
      {/* Background ambient neon flare */}
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase bg-cyan-500/5 px-3 py-1.5 rounded-full border border-cyan-400/10">
            Reviews
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-sans tracking-tight mt-4 mb-2">
            Client{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Testimonials
            </span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Carousel Slider Panel */}
        <div 
          className="relative min-h-[380px] sm:min-h-[320px] flex items-center justify-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full glassmorphism p-8 sm:p-12 rounded-3xl border border-white/5 shadow-2xl relative flex flex-col justify-between overflow-hidden"
            >
              {/* Background large blockquote indicator */}
              <span className="absolute top-6 right-8 text-8xl text-cyan-400/10 select-none pointer-events-none">
                <FaQuoteLeft />
              </span>
              
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500/20 via-purple-600/30 to-transparent" />

              <div>
                {/* Five star rating scale */}
                <div className="flex items-center gap-1 text-cyan-400 text-sm mb-6">
                  {[...Array(activeTestimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="filter drop-shadow-[0_0_3px_#00f3ff]" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-slate-200 font-sans font-light italic text-base sm:text-lg leading-relaxed mb-8">
                  "{activeTestimonial.quote}"
                </p>
              </div>

              {/* Client Profile details card */}
              <div className="flex items-center gap-4">
                <img
                  src={activeTestimonial.avatar}
                  alt={activeTestimonial.name}
                  className="w-12 h-12 rounded-full border border-cyan-400/20 object-cover shadow-md"
                />
                <div>
                  <h4 className="font-bold text-slate-100 text-sm tracking-wide">
                    {activeTestimonial.name}
                  </h4>
                  <p className="text-xs text-slate-400 font-medium tracking-wider">
                    {activeTestimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Indicators & Controls */}
        <div 
          className="flex items-center justify-between mt-8 max-w-[200px] mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Previous Button */}
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all flex items-center justify-center text-sm hover:scale-105"
            aria-label="Previous Testimonial"
          >
            <FaChevronLeft />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  const dir = idx > activeIdx ? 1 : -1;
                  setPage([idx, dir]);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIdx === idx 
                    ? "w-6 bg-cyan-400 shadow-[0_0_6px_#00f3ff]" 
                    : "w-2.5 bg-slate-800 hover:bg-slate-700"
                }`}
                aria-label={`Go to Testimonial slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() => navigate(1)}
            className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all flex items-center justify-center text-sm hover:scale-105"
            aria-label="Next Testimonial"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
