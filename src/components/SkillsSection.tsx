"use client";

const skillCategories = [
  {
    label: "Programming",
    icon: "💻",
    color: "#7C3AED",
    skills: ["Python", "Java", "C"],
  },
  {
    label: "Web & Backend",
    icon: "🌐",
    color: "#2563EB",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  },
  {
    label: "Databases",
    icon: "🗄️",
    color: "#7C3AED",
    skills: ["MongoDB", "MySQL"],
  },
  {
    label: "Core Concepts",
    icon: "🧠",
    color: "#2563EB",
    skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "Database Fundamentals", "OS Basics", "Web Architecture"],
  },
  {
    label: "Tools",
    icon: "🛠",
    color: "#7C3AED",
    skills: ["Git & GitHub", "Linux", "VS Code", "Google Colab"],
  },
];

export default function SkillsSection() {
  return (
      <section id="skills" className="relative py-16 sm:py-24">
        {/* Subtle background separator */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "rgba(124,58,237,0.02)" }} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="mb-16 reveal">
          <p className="section-label mb-3">03 // Technical Skills</p>
          <h2 className="font-heading text-4xl md:text-5xl gradient-text-bright">Tech Stack</h2>
          <div className="gradient-line mt-4 w-24" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.label}
              className="card-glass rounded-2xl p-6 reveal"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                  style={{
                    background: `${cat.color}18`,
                    border: `1px solid ${cat.color}33`,
                  }}
                >
                  {cat.icon}
                </div>
                <span className="font-heading text-base font-semibold" style={{ color: "#e8eaf6" }}>
                  {cat.label}
                </span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Certifications card */}
          <div className="card-glass rounded-2xl p-6 reveal md:col-span-2 lg:col-span-1" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                style={{ background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.3)" }}>
                📜
              </div>
              <span className="font-heading text-base font-semibold" style={{ color: "#e8eaf6" }}>
                Certifications
              </span>
            </div>
            <div className="space-y-3">
              {[
                "MongoDB Certified Associate Developer",
                "Advanced Automation – Automation Anywhere",
                "Machine Learning with Python – IBM",
                "AI Fundamentals – IBM",
              ].map((cert) => (
                <div key={cert} className="flex items-start gap-2">
                  <span style={{ color: "#22C55E", fontSize: "0.75rem", marginTop: 3, flexShrink: 0 }}>✓</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#8b92a9" }}>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
