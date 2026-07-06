import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const { name, github, linkedin } = portfolioData.personal;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-[#080c17] py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-white">{name}</p>
          <p className="mt-2 text-sm text-slate-500">Python & Django Developer</p>
        </div>

        <p className="text-sm text-slate-500">&copy; {currentYear} {name}. Built for modern product teams.</p>

        <div className="flex items-center gap-3">
          <a 
            href={github} 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] text-slate-400 transition hover:border-blue-500/40 hover:text-blue-400"
          >
            <FaGithub />
          </a>
          <a 
            href={linkedin} 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] text-slate-400 transition hover:border-blue-500/40 hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}