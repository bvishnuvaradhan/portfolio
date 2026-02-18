"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-12" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #7C3AED, #2563EB)" }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "#fff", fontWeight: 700 }}>BV</span>
              </div>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#e8eaf6", fontSize: "0.875rem", fontWeight: 600 }}>
                Boga Vishnuvaradhan
              </span>
            </div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#4b5563" }}>
              AI Systems. Scalable Architecture. Real Impact.
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a href="mailto:vishnuvaradhan.boga@gmail.com"
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "#8b92a9" }}>
              <Mail size={15} />
            </a>
            <a href="https://github.com/Vishnuvaradhan142" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "#8b92a9" }}>
              <Github size={15} />
            </a>
            <a href="https://www.linkedin.com/in/boga-vishnuvaradhan/" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
              style={{ background: "rgba(37,99,235,0.12)", border: "1px solid rgba(37,99,235,0.25)", color: "#60a5fa" }}>
              <Linkedin size={15} />
            </a>
          </div>

          {/* Copyright */}
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", color: "#4b5563" }}>
            © 2026 Boga Vishnuvaradhan
          </p>
        </div>
      </div>
    </footer>
  );
}
