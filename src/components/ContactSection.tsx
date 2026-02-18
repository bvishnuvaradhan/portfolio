"use client";

import { Github, Linkedin, Mail, MapPin, FileText, Send } from "lucide-react";

export default function ContactSection() {
  return (
      <section id="contact" className="relative py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-16 reveal text-center">
          <p className="section-label mb-3">07 // Contact</p>
          <h2 className="font-heading text-4xl md:text-5xl gradient-text-bright">Let&apos;s Connect</h2>
          <div className="gradient-line mt-4 w-24 mx-auto" />
          <p className="mt-5 text-center" style={{ color: "#8b92a9", fontSize: "1rem", maxWidth: 480, margin: "1.25rem auto 0" }}>
            Open to collaboration, internship opportunities, and meaningful conversations about AI & backend engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Contact cards */}
          <div className="space-y-4 reveal">
            <a
              href="mailto:vishnuvaradhan.boga@gmail.com"
              className="card-glass rounded-2xl p-5 flex items-center gap-4 group"
              style={{ textDecoration: "none" }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)" }}>
                <Mail size={20} style={{ color: "#a78bfa" }} />
              </div>
              <div>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#e8eaf6", fontSize: "0.875rem", fontWeight: 600 }}>Email</p>
                <p style={{ color: "#8b92a9", fontSize: "0.8rem" }}>vishnuvaradhan.boga@gmail.com</p>
              </div>
              <Send size={14} style={{ color: "#7C3AED", marginLeft: "auto", opacity: 0 }} className="group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="https://www.linkedin.com/in/boga-vishnuvaradhan/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-glass rounded-2xl p-5 flex items-center gap-4 group"
              style={{ textDecoration: "none" }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(37,99,235,0.15)", border: "1px solid rgba(37,99,235,0.3)" }}>
                <Linkedin size={20} style={{ color: "#60a5fa" }} />
              </div>
              <div>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#e8eaf6", fontSize: "0.875rem", fontWeight: 600 }}>LinkedIn</p>
                <p style={{ color: "#8b92a9", fontSize: "0.8rem" }}>boga-vishnuvaradhan</p>
              </div>
            </a>

            <a
              href="https://github.com/Vishnuvaradhan142"
              target="_blank"
              rel="noopener noreferrer"
              className="card-glass rounded-2xl p-5 flex items-center gap-4 group"
              style={{ textDecoration: "none" }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <Github size={20} style={{ color: "#e8eaf6" }} />
              </div>
              <div>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#e8eaf6", fontSize: "0.875rem", fontWeight: 600 }}>GitHub</p>
                <p style={{ color: "#8b92a9", fontSize: "0.8rem" }}>Vishnuvaradhan142</p>
              </div>
            </a>

            <div className="card-glass rounded-2xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)" }}>
                <MapPin size={20} style={{ color: "#a78bfa" }} />
              </div>
              <div>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#e8eaf6", fontSize: "0.875rem", fontWeight: 600 }}>Location</p>
                <p style={{ color: "#8b92a9", fontSize: "0.8rem" }}>Hyderabad, Telangana, India</p>
              </div>
            </div>
          </div>

          {/* CTA panel */}
          <div className="reveal" style={{ animationDelay: "0.15s" }}>
            <div className="rounded-2xl p-8 h-full flex flex-col justify-between"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(37,99,235,0.08))",
                border: "1px solid rgba(124,58,237,0.25)",
              }}>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", color: "#22C55E" }}>
                    Available for Summer 2026 Internship
                  </span>
                </div>

                <h3 className="font-heading text-2xl mb-3" style={{ color: "#e8eaf6" }}>
                  Ready to build something intelligent together?
                </h3>
                <p style={{ color: "#8b92a9", fontSize: "0.9rem", lineHeight: "1.7" }}>
                  Whether it&apos;s a Software Engineering, AI, or Data Engineering internship — I&apos;m actively looking for Summer 2026 opportunities where I can contribute and grow.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                <a
                  href="mailto:vishnuvaradhan.boga@gmail.com"
                  className="btn-primary inline-flex items-center gap-2 w-full justify-center"
                  style={{ position: "relative", zIndex: 1 }}
                >
                  <span style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", gap: 8 }}>
                    <Mail size={16} /> Send an Email
                  </span>
                </a>
                <a
                  href="https://drive.google.com/file/d/1R2M3dTfIf74dcpvcH7aZnruPd9BpKA5I/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center gap-2 w-full justify-center"
                >
                  <FileText size={16} /> Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
