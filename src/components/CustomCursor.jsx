import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  // Position motion values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Springs for soft tracking behavior
  const springConfig = { stiffness: 350, damping: 25 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (hidden) setHidden(false);
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Track cursor hovering on actionable elements
    const updateHoverListeners = () => {
      const hoverables = document.querySelectorAll(
        "a, button, select, input, textarea, [role='button'], .cursor-pointer"
      );
      
      const onEnter = () => setLinkHovered(true);
      const onLeave = () => setLinkHovered(false);

      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    updateHoverListeners();

    // Re-bind when React injects new layout structures
    const observer = new MutationObserver(updateHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      observer.disconnect();
    };
  }, [cursorX, cursorY, hidden]);

  if (hidden) return null;

  return (
    <>
      {/* Outer Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-400 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden lg:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: linkHovered ? 1.6 : clicked ? 0.75 : 1,
          borderColor: linkHovered ? "#b026ff" : "#00f3ff",
          backgroundColor: linkHovered ? "rgba(176, 38, 255, 0.08)" : "rgba(0, 0, 0, 0)",
          boxShadow: linkHovered 
            ? "0 0 15px rgba(176, 38, 255, 0.4)" 
            : "0 0 0px rgba(0, 243, 255, 0)",
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.15 }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden lg:block"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: linkHovered ? 0 : clicked ? 1.6 : 1,
          backgroundColor: linkHovered ? "#b026ff" : "#00f3ff",
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.1 }}
      />
    </>
  );
}
