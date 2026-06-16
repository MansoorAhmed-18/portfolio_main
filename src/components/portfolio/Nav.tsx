import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import resumeAsset from "@/assets/Mansoor_Resume.pdf.asset.json";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 bg-darker/80 backdrop-blur-xl border-b border-border" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between gap-3">
        <a href="#home" className="flex items-center gap-2 font-display text-cream text-base sm:text-lg font-bold shrink-0">
          <span className="text-orange text-xl animate-spin-slow inline-block">✦</span>
          Mansoor<span className="text-orange">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-cream/80 hover:text-orange transition-colors group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full bg-orange transition-all duration-300" />
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={resumeAsset.url}
            download="Mansoor_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            aria-label="Download Resume"
            className="inline-flex items-center gap-1.5 border border-orange/60 text-orange px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-orange hover:text-darker transition-colors whitespace-nowrap"
          >
            <span className="hidden xs:inline sm:inline">Resume</span>
            <span className="xs:hidden sm:hidden">CV</span>
            <span aria-hidden>↓</span>
          </a>
          <a
            href={`mailto:mansoor184517@gmail.com?subject=${encodeURIComponent("Let's work together — inquiry from your portfolio")}&body=${encodeURIComponent("Hi Mansoor,\n\nI came across your portfolio and would love to connect about a potential opportunity.\n\nA bit about the project / role:\n- \n- \n- \n\nLooking forward to hearing from you.\n\nThanks,\n")}`}
            className="relative inline-flex items-center gap-1.5 bg-orange text-darker px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium hover:scale-105 transition-transform animate-glow-pulse whitespace-nowrap"
          >
            <span className="hidden sm:inline">Get in touch</span>
            <span className="sm:hidden">Contact</span>
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
