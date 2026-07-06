import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import LoadingScreen from "./components/LoadingScreen";
import InteractiveBg from "./components/InteractiveBg";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import GithubStats from "./components/GithubStats";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Initialize Scroll Animations (AOS) & mouse movements
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      mirror: false,
    });

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* 1. Loader with logo animation */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* 2. Main Site content */}
      {!isLoading && (
        <>
          {/* Three.js Particle Background canvas */}
          <InteractiveBg />

          {/* Custom spring cursor tracking */}
          <CustomCursor />

          {/* Header navigation & progress indicator */}
          <Navbar />

          {/* Page contents wrapping follow gradients */}
          <main className="relative z-10">
            {/* Hero section */}
            <Hero mousePos={mousePos} />

            {/* About section */}
            <About />

            {/* Skills tabbed section */}
            <Skills />

            {/* Career Timeline section */}
            <Experience />

            {/* Filterable projects portfolio */}
            <Projects />

            {/* GitHub contributions and stats section */}
            <GithubStats />

            {/* Carousel Testimonials reviews */}
            <Testimonials />

            {/* Email contact form */}
            <Contact />

            {/* Page Footer social links */}
            <Footer />

            {/* Scroll-to-top button */}
            <BackToTop />
          </main>
        </>
      )}
    </>
  );
}
