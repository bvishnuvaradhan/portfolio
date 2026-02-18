"use client";

const achievements = [
  {
    icon: "🥉",
    title: "3rd Prize",
    subtitle: "INNOV-A-TECH 2025 Hackathon",
    color: "#22C55E",
    highlight: true,
  },
  {
    icon: "🏆",
    title: "Hackathon Finalist",
    subtitle: "Multiple College Hackathons",
    color: "#7C3AED",
    highlight: false,
  },
  {
    icon: "🍃",
    title: "MongoDB Certified",
    subtitle: "Associate Developer",
    color: "#22C55E",
    highlight: false,
  },
  {
    icon: "🤖",
    title: "Google GenAI",
    subtitle: "Virtual Internship",
    color: "#2563EB",
    highlight: false,
  },
  {
    icon: "☁️",
    title: "Google AI-ML",
    subtitle: "Virtual Internship",
    color: "#2563EB",
    highlight: false,
  },
  {
    icon: "🎯",
    title: "CGPA 9.51",
    subtitle: "Top Academic Performance",
    color: "#22C55E",
    highlight: true,
  },
  {
    icon: "⚙️",
    title: "Automation Anywhere",
    subtitle: "Advanced Automation Professional",
    color: "#7C3AED",
    highlight: false,
  },
  {
    icon: "🧠",
    title: "IBM Certified",
    subtitle: "ML with Python + AI Fundamentals",
    color: "#2563EB",
    highlight: false,
  },
];

const softSkills = [
  "Problem Solving",
  "Logical Thinking",
  "Team Collaboration",
  "Communication",
  "Adaptability",
];

export default function AchievementsSection() {
  return (
      <section id="achievements" className="relative py-16 sm:py-24">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "rgba(37,99,235,0.02)" }} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="mb-16 reveal">
          <p className="section-label mb-3">05 // Achievements</p>
          <h2 className="font-heading text-4xl md:text-5xl gradient-text-bright">Recognition & Certifications</h2>
          <div className="gradient-line mt-4 w-24" />
        </div>

        {/* Horizontal scrollable achievement cards */}
        <div className="scroll-x pb-4 mb-12 reveal">
          <div className="flex gap-4" style={{ width: "max-content" }}>
            {achievements.map((ach, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1"
                style={{
                  width: 180,
                  background: ach.highlight
                    ? `linear-gradient(135deg, ${ach.color}18, ${ach.color}08)`
                    : "rgba(255,255,255,0.04)",
                  border: `1px solid ${ach.highlight ? ach.color + "44" : "rgba(255,255,255,0.08)"}`,
                  backdropFilter: "blur(12px)",
                  flexShrink: 0,
                }}
              >
                <span style={{ fontSize: "1.75rem" }}>{ach.icon}</span>
                <div>
                  <p className="font-heading text-sm font-semibold" style={{ color: ach.color }}>{ach.title}</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#8b92a9", lineHeight: "1.5", marginTop: 2 }}>
                    {ach.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Differentiators + Soft Skills */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* What Makes Me Different */}
          <div className="card-glass rounded-2xl p-7 reveal">
            <p className="section-label mb-5">What Makes Me Different</p>
            <div className="space-y-3">
              {[
                { icon: "✔", text: "Strong CGPA (9.51)", color: "#22C55E" },
                { icon: "✔", text: "Real AI + Full Stack Projects", color: "#22C55E" },
                { icon: "✔", text: "Hackathon Winner", color: "#22C55E" },
                { icon: "✔", text: "Backend + Database Knowledge", color: "#22C55E" },
                { icon: "✔", text: "Actively building LLM-powered systems", color: "#22C55E" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span style={{ color: item.color, fontWeight: 700, fontSize: "0.875rem" }}>{item.icon}</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", color: "#e8eaf6", fontSize: "0.9rem" }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="card-glass rounded-2xl p-7 reveal" style={{ animationDelay: "0.15s" }}>
            <p className="section-label mb-5">Soft Skills</p>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-xl px-4 py-2.5 transition-all hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(37,99,235,0.12))",
                    border: "1px solid rgba(124,58,237,0.25)",
                  }}
                >
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#a78bfa", fontSize: "0.875rem", fontWeight: 500 }}>
                    {skill}
                  </span>
                </div>
              ))}
            </div>

            {/* Tagline */}
            <div className="mt-6 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#8b92a9", fontSize: "0.85rem", fontStyle: "italic" }}>
                &ldquo;AI Systems. Scalable Architecture. Real Impact.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
