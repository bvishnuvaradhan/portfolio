"use client";

import { Globe, Database, Code2, BrainCircuit } from "lucide-react";

const focusAreas = [
  { icon: <BrainCircuit size={20} />, label: "Artificial Intelligence", color: "#7C3AED" },
  { icon: <Code2 size={20} />, label: "Data Structures & Algorithms", color: "#2563EB" },
  { icon: <Globe size={20} />, label: "Backend Development", color: "#7C3AED" },
  { icon: <Database size={20} />, label: "Databases", color: "#2563EB" },
];

const currentlyExploring = [
  "LLM-powered applications",
  "Backend system design",
  "Graph algorithms & optimization",
  "Distributed systems basics",
];

export default function AboutSection() {
  return (
      <section id="about" className="relative py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-16 reveal">
          <p className="section-label mb-3">01 // About Me</p>
          <h2 className="font-heading text-4xl md:text-5xl gradient-text-bright">Who I Am</h2>
          <div className="gradient-line mt-4 w-24" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Narrative */}
          <div className="reveal">
            <div className="card-glass rounded-2xl p-8 mb-6">
              <p className="font-heading text-xl mb-4" style={{ color: "#e8eaf6" }}>
                I build intelligent systems that combine AI reasoning with strong algorithmic foundations.
              </p>
              <p style={{ color: "#8b92a9", lineHeight: "1.85", fontSize: "0.95rem" }}>
                I&apos;m a B.Tech Computer Science student at{" "}
                <span style={{ color: "#a78bfa" }}>Koneru Lakshmaiah Education Foundation</span> with a CGPA of{" "}
                <span style={{ color: "#22C55E", fontWeight: 600 }}>9.51</span>.
                My passion lies in bridging the gap between AI intelligence and production-ready backend systems — from IoT-based real-world solutions to LLM-powered applications using modern APIs.
              </p>
            </div>

            {/* Currently exploring */}
            <div className="card-glass rounded-2xl p-6">
              <p className="section-label mb-4">Currently Exploring</p>
              <div className="space-y-3">
                {currentlyExploring.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span style={{
                      width: 6, height: 6, borderRadius: "50%",
                      background: "linear-gradient(135deg, #7C3AED, #2563EB)",
                      flexShrink: 0
                    }} />
                    <span style={{ color: "#8b92a9", fontSize: "0.9rem" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Focus areas + stats */}
          <div className="reveal" style={{ animationDelay: "0.15s" }}>
            <p className="section-label mb-6">What I Work On</p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {focusAreas.map((area, i) => (
                <div
                  key={i}
                  className="card-glass rounded-xl p-5 flex flex-col gap-3"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: "10px",
                    background: `${area.color}22`,
                    border: `1px solid ${area.color}44`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: area.color
                  }}>
                    {area.icon}
                  </div>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.875rem", color: "#e8eaf6", fontWeight: 500 }}>
                    {area.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "9.51", label: "CGPA" },
                { value: "4+", label: "Projects" },
                  { value: "2028", label: "Grad Year" },
              ].map((stat, i) => (
                <div key={i} className="card-glass rounded-xl p-4 text-center">
                  <div className="font-heading text-2xl gradient-text font-bold">{stat.value}</div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#8b92a9", marginTop: 4 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
