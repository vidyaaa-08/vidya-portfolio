import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Initializing systems...");

  const statuses = [
    "Initializing systems...",
    "Loading 3D asset matrices...",
    "Configuring shader models...",
    "Importing UI architecture...",
    "Compiling Tailwind styling...",
    "Launching portfolio...",
  ];

  useEffect(() => {
    // Simulate loading progress
    const duration = 2400; // total duration
    const intervalTime = 30;
    const increments = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increments;
        
        // Update status text based on progress thresholds
        const statusIndex = Math.min(
          Math.floor((next / 100) * statuses.length),
          statuses.length - 1
        );
        setStatus(statuses[statusIndex]);

        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 350);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        y: "-100vh",
        transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
      }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020617] text-white select-none"
    >
      <div className="relative flex flex-col items-center max-w-sm px-6 text-center">
        {/* Animated Neon Logo Outer Sphere */}
        <div className="relative w-28 h-28 mb-8 flex items-center justify-center">
          {/* Pulsing Backglow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-full opacity-20 blur-xl animate-pulse" />
          
          {/* Animated Border Rings */}
          <svg className="absolute inset-0 w-full h-full transform -rotate-90">
            <circle
              cx="56"
              cy="56"
              r="48"
              stroke="#1e293b"
              strokeWidth="4"
              fill="transparent"
            />
            <motion.circle
              cx="56"
              cy="56"
              r="48"
              stroke="url(#progress-grad)"
              strokeWidth="4"
              fill="transparent"
              strokeDasharray={2 * Math.PI * 48}
              strokeDashoffset={2 * Math.PI * 48 * (1 - progress / 100)}
            />
            <defs>
              <linearGradient id="progress-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00f3ff" />
                <stop offset="100%" stopColor="#b026ff" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Central Initials */}
          <div className="font-sans font-black text-3xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            VN
          </div>
        </div>

        {/* Counter Percentage */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-5xl font-black font-mono tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2"
        >
          {Math.floor(progress)}%
        </motion.div>

        {/* Micro status text */}
        <motion.p
          key={status}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 0.6, y: 0 }}
          className="text-xs font-mono tracking-widest uppercase h-4 text-cyan-200"
        >
          {status}
        </motion.p>
        
        {/* Loading Progress Bar */}
        <div className="w-56 h-[3px] bg-slate-800/80 rounded-full mt-6 overflow-hidden border border-slate-700/20">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 rounded-full transition-all duration-300 shadow-[0_0_8px_#00f3ff]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}
