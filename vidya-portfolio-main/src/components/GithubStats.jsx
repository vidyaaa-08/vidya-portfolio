import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { GoGitBranch, GoGitPullRequest, GoStar, GoFlame } from "react-icons/go";

export default function GithubStats() {
  const [hoveredCell, setHoveredCell] = useState(null);

  // Generate 365 days of activity (52 columns x 7 rows + padding)
  const contributionData = useMemo(() => {
    const data = [];
    const baseDate = new Date();
    // Start exactly 364 days ago
    baseDate.setDate(baseDate.getDate() - 364);

    for (let i = 0; i < 365; i++) {
      const date = new Date(baseDate);
      date.setDate(date.getDate() + i);

      const dayOfWeek = date.getDay();
      let count = 0;
      const rand = Math.random();

      // Realistic clustering: weekends are quiet, weekdays are active, some days have huge commits
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        if (rand > 0.75) count = Math.floor(Math.random() * 3); // 1-2 commits
      } else {
        if (rand > 0.85) count = Math.floor(Math.random() * 9) + 4; // 4-12 commits (high activity)
        else if (rand > 0.2) count = Math.floor(Math.random() * 4) + 1; // 1-4 commits
      }

      // Determine color density levels
      let level = 0; // zero commits
      if (count > 0 && count <= 2) level = 1;
      else if (count > 2 && count <= 5) level = 2;
      else if (count > 5 && count <= 8) level = 3;
      else if (count > 8) level = 4;

      data.push({
        date: date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        count,
        level,
      });
    }
    return data;
  }, []);

  const stats = [
    { label: "Total Contributions", value: "2,481 YTD", Icon: GoGitBranch, color: "#00f3ff" },
    { label: "PRs Merged", value: "114", Icon: GoGitPullRequest, color: "#b026ff" },
    { label: "Repositories Starred", value: "48", Icon: GoStar, color: "#ff007f" },
    { label: "Longest Streak", value: "42 Days", Icon: GoFlame, color: "#ff9900" },
  ];

  // Map levels to GitHub Green shades
  const levelColors = {
    0: "bg-slate-900 border border-slate-950",
    1: "bg-[#0e4429] border border-slate-950",
    2: "bg-[#006d32] border border-slate-950",
    3: "bg-[#26a641] border border-slate-950",
    4: "bg-[#39d353] border border-slate-950",
  };

  return (
    <section id="github" className="py-24 relative overflow-hidden bg-slate-950/20">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase bg-cyan-500/5 px-3 py-1.5 rounded-full border border-cyan-400/10">
            Open Source
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-sans tracking-tight mt-4 mb-2">
            GitHub Activity{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              & Statistics
            </span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Info & Contribution Graph Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Github stats cards */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4" data-aos="fade-right">
            {stats.map((item, index) => {
              const StatIcon = item.Icon;
              return (
                <div 
                  key={index} 
                  className="glassmorphism p-5 rounded-2xl border border-white/5 relative flex flex-col justify-between overflow-hidden group hover:scale-105 transition-transform"
                >
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
                  <div className="flex items-center justify-between mb-4">
                    <span 
                      style={{ color: item.color }} 
                      className="text-2xl filter drop-shadow-[0_0_5px_currentColor]"
                    >
                      <StatIcon />
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black font-mono text-slate-100 mb-1">{item.value}</h3>
                    <p className="text-slate-400 text-[10px] font-semibold tracking-wider uppercase">{item.label}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Contribution Grid card */}
          <div className="lg:col-span-8" data-aos="fade-left">
            <div className="glassmorphism p-6 sm:p-8 rounded-2xl border border-white/5 shadow-2xl relative">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500 to-purple-600" />
              
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold font-sans text-slate-100">Contribution Grid</h3>
                  <p className="text-xs text-slate-400">Daily contributions over the past 365 days</p>
                </div>
                {/* Legend indicator */}
                <div className="flex items-center gap-1 text-[10px] text-slate-500 font-medium">
                  <span>Less</span>
                  <div className="w-2.5 h-2.5 rounded-[1px] bg-slate-900 border border-slate-950" />
                  <div className="w-2.5 h-2.5 rounded-[1px] bg-[#0e4429]" />
                  <div className="w-2.5 h-2.5 rounded-[1px] bg-[#006d32]" />
                  <div className="w-2.5 h-2.5 rounded-[1px] bg-[#26a641]" />
                  <div className="w-2.5 h-2.5 rounded-[1px] bg-[#39d353]" />
                  <span>More</span>
                </div>
              </div>

              {/* Grid Scroll Area */}
              <div className="relative overflow-x-auto no-scrollbar py-2">
                {/* Horizontal Tooltip Container */}
                {hoveredCell !== null && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 bg-slate-900 border border-slate-800 text-slate-100 px-3 py-1.5 rounded-lg text-xs font-mono tracking-wide shadow-xl pointer-events-none z-25">
                    <span className="text-cyan-400 font-bold">
                      {contributionData[hoveredCell].count} commits
                    </span>{" "}
                    on {contributionData[hoveredCell].date}
                  </div>
                )}

                {/* Actual Contribution Grid */}
                <div 
                  className="grid grid-flow-col grid-rows-7 gap-[3px] w-max select-none"
                  style={{ gridTemplateColumns: "repeat(53, minmax(0, 1fr))" }}
                >
                  {contributionData.map((cell, idx) => (
                    <div
                      key={idx}
                      onMouseEnter={() => setHoveredCell(idx)}
                      onMouseLeave={() => setHoveredCell(null)}
                      className={`w-[11px] h-[11px] sm:w-[12px] sm:h-[12px] rounded-[2px] transition-all duration-100 hover:scale-130 hover:shadow-[0_0_8px_rgba(57,211,83,0.5)] ${
                        levelColors[cell.level]
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Subtext info */}
              <div className="mt-6 flex items-center justify-between border-t border-slate-800/40 pt-4 text-xs text-slate-400 font-sans">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  Live github database synced (mocked fallback)
                </span>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 hover:underline transition-colors font-medium"
                >
                  View Profile on GitHub &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
