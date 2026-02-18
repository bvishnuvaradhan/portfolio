"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(11,15,25,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" style={{ textDecoration: "none" }}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #7C3AED, #2563EB)" }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: "#fff", fontWeight: 700 }}>BV</span>
            </div>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#e8eaf6", fontSize: "0.9rem", fontWeight: 600 }}>
              Vishnu<span className="gradient-text">varadhan</span>
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-2 rounded-lg transition-all hover:text-purple-400"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.875rem", color: "#8b92a9", textDecoration: "none" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1R2M3dTfIf74dcpvcH7aZnruPd9BpKA5I/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-2 rounded-lg text-sm transition-all hover:scale-105"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              background: "linear-gradient(135deg, #7C3AED, #2563EB)",
              color: "#fff",
              fontSize: "0.825rem",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)} style={{ color: "#8b92a9" }}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
          <div className="md:hidden px-4 pb-4 space-y-1"
          style={{ background: "rgba(11,15,25,0.97)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 px-3 rounded-lg transition-all hover:bg-white/5"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.9rem", color: "#8b92a9", textDecoration: "none" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
