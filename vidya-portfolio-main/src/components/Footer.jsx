import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const { name, github, linkedin, twitter } = portfolioData.personal;

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { Icon: FaGithub, href: github, label: "GitHub" },
    { Icon: FaLinkedin, href: linkedin, label: "LinkedIn" },
    { Icon: FaTwitter, href: twitter, label: "Twitter" },
  ];

  return (
    <footer className="border-t border-slate-900 bg-slate-950/60 py-12 relative overflow-hidden">
      {/* Decorative vertical bounds */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand Initials */}
        <div className="flex items-center gap-2">
          <span className="font-sans font-black tracking-widest text-lg bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
            VIDYA
          </span>
        </div>

        {/* Middle: Copyright */}
        <p className="text-slate-500 font-sans text-xs text-center md:text-left">
          &copy; {currentYear} {name}. All rights reserved. Designed to showcase full-stack capabilities.
        </p>

        {/* Right: Social links */}
        <div className="flex items-center gap-4">
          {socialLinks.map((item, index) => {
            const SocialIcon = item.Icon;
            return (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800/80 text-slate-400 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_8px_rgba(0,243,255,0.2)] transition-all flex items-center justify-center text-base"
                aria-label={`Visit ${item.label} Profile`}
              >
                <SocialIcon />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
