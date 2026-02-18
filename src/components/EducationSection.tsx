"use client";

const education = [
  {
    degree: "B.Tech – Computer Science and Engineering",
    institution: "Koneru Lakshmaiah Education Foundation",
    period: "2024 – 2028",
    score: "CGPA: 9.51",
    scoreColor: "#22C55E",
    icon: "🎓",
  },
  {
    degree: "Intermediate – MPC",
    institution: "Sri Chaitanya Junior College",
    period: "",
    score: "81.4%",
    scoreColor: "#a78bfa",
    icon: "📚",
  },
  {
    degree: "SSC",
    institution: "Sri Chaitanya School",
    period: "",
    score: "CGPA: 9.3",
    scoreColor: "#60a5fa",
    icon: "🏫",
  },
];

const internships = [
  {
    title: "Google Cloud Generative AI",
    type: "Virtual Internship",
    highlights: ["Generative AI fundamentals", "Prompt engineering", "Cloud-based AI workflows"],
    color: "#2563EB",
    icon: "☁️",
  },
  {
    title: "Google AI-ML",
    type: "Virtual Internship",
    highlights: ["ML fundamentals", "Model evaluation", "Data preprocessing"],
    color: "#7C3AED",
    icon: "🤖",
  },
];

const learningItems = [
  { text: "Advanced LLM evaluation techniques", icon: "🧠" },
  { text: "System Design & distributed patterns", icon: "🏗" },
  { text: "Distributed systems basics", icon: "🌐" },
  { text: "Competitive Programming – Graph optimization", icon: "📈" },
];

export default function EducationSection() {
  return (
    <section id="education" className="relative py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-16 reveal">
          <p className="section-label mb-3">02 // Education & Training</p>
          <h2 className="font-heading text-4xl md:text-5xl gradient-text-bright">Background</h2>
          <div className="gradient-line mt-4 w-24" />
        </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="reveal">
            <p className="section-label mb-5">Education</p>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <div key={i} className="card-glass rounded-xl p-5" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="flex items-start gap-3">
                    <span style={{ fontSize: "1.5rem", lineHeight: 1 }}>{edu.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-heading text-sm font-semibold" style={{ color: "#e8eaf6", lineHeight: "1.4" }}>{edu.degree}</p>
                      <p style={{ color: "#8b92a9", fontSize: "0.8rem", marginTop: 2 }}>{edu.institution}</p>
                      <div className="flex items-center justify-between mt-3">
                        {edu.period && (
                          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#4b5563" }}>{edu.period}</span>
                        )}
                        <span className="font-heading text-sm font-bold" style={{ color: edu.scoreColor, marginLeft: "auto" }}>{edu.score}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Internships */}
          <div className="reveal" style={{ animationDelay: "0.15s" }}>
            <p className="section-label mb-5">Internships & Training</p>
            <div className="space-y-4">
              {internships.map((intern, i) => (
                <div key={i} className="card-glass rounded-xl p-5" style={{ border: `1px solid ${intern.color}22` }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-base"
                      style={{ background: `${intern.color}18`, border: `1px solid ${intern.color}33` }}>
                      {intern.icon}
                    </div>
                    <div>
                      <p className="font-heading text-sm font-semibold" style={{ color: "#e8eaf6" }}>{intern.title}</p>
                      <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", color: intern.color }}>{intern.type}</p>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    {intern.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2">
                        <span style={{ color: intern.color, fontSize: "0.6rem" }}>▸</span>
                        <span style={{ color: "#8b92a9", fontSize: "0.8rem" }}>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Currently Learning */}
          <div className="reveal" style={{ animationDelay: "0.3s" }}>
            <p className="section-label mb-5">Currently Learning</p>
            <div className="card-glass rounded-xl p-5 mb-4" style={{ border: "1px solid rgba(34,197,94,0.2)" }}>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#22C55E" }}>ACTIVE GROWTH</span>
              </div>
              <div className="space-y-4">
                {learningItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span style={{ fontSize: "1rem" }}>{item.icon}</span>
                    <p style={{ color: "#8b92a9", fontSize: "0.85rem", lineHeight: "1.5" }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Future Goals */}
            <div className="card-glass rounded-xl p-5">
              <p className="section-label mb-4">Future Goals</p>
              <div className="space-y-2">
                {[
                  "Production-level AI applications",
                  "Open-source AI/backend contributions",
                  "Secure Summer 2026 Internship",
                  "Scalable data-driven systems",
                ].map((goal, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span style={{ color: "#7C3AED", fontSize: "0.7rem" }}>→</span>
                    <span style={{ color: "#8b92a9", fontSize: "0.82rem" }}>{goal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
