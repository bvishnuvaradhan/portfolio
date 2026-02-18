"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, MapPin, FileText, ChevronDown, ArrowRight } from "lucide-react";

const typingWords = ["AI Systems.", "Backend Engineering.", "Problem Solving.", "LLM Applications.", "Scalable Architecture."];

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const currentWord = typingWords[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex <= currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!deleting && charIndex > currentWord.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 45);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex((w) => (w + 1) % typingWords.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, mounted]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background orbs */}
      <div className="orb orb-purple" style={{ width: 500, height: 500, top: "-10%", right: "-5%", animationDelay: "0s" }} />
      <div className="orb orb-blue" style={{ width: 350, height: 350, bottom: "10%", left: "-5%", animationDelay: "3s" }} />
      <div className="orb orb-purple" style={{ width: 200, height: 200, bottom: "30%", right: "20%", opacity: 0.08, animationDelay: "5s" }} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-28 sm:py-24">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 animate-fade-in-up"
          style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards" }}>
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: "#22C55E" }}>
            Available for Summer 2026 Internship
          </span>
        </div>

        {/* Name */}
        <h1
          className="font-heading mb-4 leading-none tracking-tight animate-fade-in-up"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            background: "linear-gradient(135deg, #a78bfa 0%, #60a5fa 50%, #7C3AED 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "none",
            animationDelay: "0.2s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          BOGA<br />VISHNUVARADHAN
        </h1>

        {/* Subtitle static */}
        <p className="mb-6 animate-fade-in-up"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            color: "#8b92a9",
            letterSpacing: "0.05em",
            animationDelay: "0.35s",
            opacity: 0,
            animationFillMode: "forwards",
          }}>
          AI & Backend Developer &nbsp;|&nbsp; B.Tech CSE Student &nbsp;|&nbsp; Problem Solver
        </p>

        {/* Typing effect */}
        <div className="flex items-center gap-3 mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.45s", opacity: 0, animationFillMode: "forwards" }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", color: "#7C3AED", fontSize: "1rem" }}>$&nbsp;</span>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "#a78bfa",
          }}>
            {displayText}
          </span>
          <span className="animate-blink" style={{ color: "#7C3AED", fontSize: "1.2rem", fontWeight: 700 }}>|</span>
        </div>

        {/* Tagline */}
        <p className="mb-10 max-w-2xl animate-fade-in-up"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.05rem",
            color: "#8b92a9",
            lineHeight: "1.8",
            animationDelay: "0.55s",
            opacity: 0,
            animationFillMode: "forwards",
          }}>
          Computer Science undergraduate passionate about AI-powered systems, backend architecture, and data-driven applications.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.65s", opacity: 0, animationFillMode: "forwards" }}>
          <a href="#projects" className="btn-primary inline-flex items-center gap-2" style={{ position: "relative", zIndex: 1 }}>
            <span style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", gap: "8px" }}>
              View Projects <ArrowRight size={16} />
            </span>
          </a>
          <a
            href="https://drive.google.com/file/d/1R2M3dTfIf74dcpvcH7aZnruPd9BpKA5I/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <FileText size={16} /> Download Resume
          </a>
        </div>

        {/* Location + Email */}
        <div className="flex flex-wrap items-center gap-4 mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.75s", opacity: 0, animationFillMode: "forwards" }}>
          <div className="flex items-center gap-2" style={{ color: "#8b92a9", fontSize: "0.9rem" }}>
            <MapPin size={14} style={{ color: "#7C3AED" }} />
            <span>Hyderabad, Telangana, India</span>
          </div>
          <a href="mailto:vishnuvaradhan.boga@gmail.com" className="flex items-center gap-2 transition-colors hover:text-purple-400" style={{ color: "#8b92a9", fontSize: "0.9rem" }}>
            <Mail size={14} style={{ color: "#7C3AED" }} />
            <span className="hidden sm:inline">vishnuvaradhan.boga@gmail.com</span>
              <span className="sm:hidden">Gmail</span>
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.85s", opacity: 0, animationFillMode: "forwards" }}>
          <a
            href="https://github.com/Vishnuvaradhan142"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover:scale-105"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "#e8eaf6", fontSize: "0.875rem" }}
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/boga-vishnuvaradhan/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover:scale-105"
            style={{ background: "rgba(37,99,235,0.15)", border: "1px solid rgba(37,99,235,0.3)", color: "#60a5fa", fontSize: "0.875rem" }}
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce" style={{ opacity: 0.5 }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "#8b92a9", letterSpacing: "0.1em" }}>SCROLL</span>
        <ChevronDown size={16} style={{ color: "#7C3AED" }} />
      </div>
    </section>
  );
}
