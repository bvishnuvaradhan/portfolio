"use client";

import { ExternalLink, Github, Star } from "lucide-react";

const projects = [
  {
    featured: true,
    emoji: "🎮",
    name: "SparkGen",
    subtitle: "AI-Powered Gamified Learning Platform",
    description: "An AI-powered platform that dynamically generates quizzes based on difficulty levels, powered by DeepSeek R1 model via OpenRouter API.",
    problem: "Students lack engaging, adaptive learning experiences that adjust to their knowledge level.",
    approach: "Integrated LLM-based quiz generation via OpenRouter API to dynamically create personalized quizzes.",
    architecture: "React frontend → Node.js API layer → OpenRouter AI → MongoDB data store",
    impact: "Dynamic AI quiz generation, chatbot assistant, real-time difficulty scaling",
    techStack: ["React", "Node.js", "MongoDB", "OpenRouter API", "DeepSeek R1"],
    github: "https://github.com/Vishnuvaradhan142/SparkGen",
    badge: "AI Featured",
    badgeColor: "#7C3AED",
  },
  {
    featured: false,
    emoji: "🐾",
    name: "Wild Animal Intrusion Detection",
    subtitle: "IoT-Based Safety System",
    description: "Designed an IoT system to detect wild animal intrusion in restricted areas with real-time alerts and hardware-software integration.",
    problem: "Wild animal intrusions pose safety risks near human settlements and farmlands.",
    approach: "Sensor-based detection logic with real-time alert mechanisms for immediate response.",
    architecture: "IoT Sensors → Embedded Logic → Alert System → Notification",
    impact: "Real-world safety application, secured 3rd Prize at INNOV-A-TECH 2025 Hackathon",
    techStack: ["IoT Sensors", "Embedded Logic", "Hardware Integration"],
    badge: "🏆 3rd Prize",
    badgeColor: "#22C55E",
  },
  {
    featured: false,
    emoji: "🎟",
    name: "Evenza",
    subtitle: "Event Management Web Application",
    description: "Full-stack event management platform with modular architecture, RESTful backend APIs, and responsive frontend.",
    problem: "Lack of a unified, easy-to-use platform for managing events end-to-end.",
    approach: "Built a modular full-stack app with clean separation between frontend and backend layers.",
    architecture: "React → Node.js REST API → MySQL Database",
    impact: "Full event lifecycle management, modular codebase, responsive UI",
    techStack: ["React", "Node.js", "MySQL", "REST APIs"],
    github_backend: "https://github.com/Vishnuvaradhan142/Evenza",
    github_frontend: "https://github.com/Vishnuvaradhan142/Evenza-Frontend",
    badge: "Full Stack",
    badgeColor: "#2563EB",
  },
  {
    featured: false,
    emoji: "🏛",
    name: "Echoes of the Temple",
    subtitle: "Browser-Based Interactive Game",
    description: "Interactive web-based game built using core frontend technologies with custom game logic, event-driven architecture, and responsive UI.",
    problem: "Demonstrating complex game logic purely with vanilla web technologies.",
    approach: "Event-driven architecture with custom game state management using core JS.",
    architecture: "HTML/CSS/JS → Custom Game Engine → Browser Deployment",
    impact: "Live deployed game, responsive UI, public demo available",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Vishnuvaradhan142/Echoes-of-the-Temple",
    live: "https://echoes-of-the-temple.onrender.com",
    badge: "Live Demo",
    badgeColor: "#2563EB",
  },
];

export default function ProjectsSection() {
  return (
      <section id="projects" className="relative py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-16 reveal">
          <p className="section-label mb-3">04 // Projects</p>
            <h2 className="font-heading text-4xl md:text-5xl gradient-text-bright">What I&apos;ve Built</h2>
          <div className="gradient-line mt-4 w-24" />
        </div>

        {/* Featured project */}
        {projects.filter(p => p.featured).map((project) => (
          <div key={project.name} className="reveal mb-8">
            <div className="card-glass rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(124,58,237,0.3)" }}>
              {/* Featured badge bar */}
              <div className="px-6 py-3 flex items-center justify-between" style={{ background: "rgba(124,58,237,0.12)", borderBottom: "1px solid rgba(124,58,237,0.2)" }}>
                <div className="flex items-center gap-2">
                  <Star size={14} style={{ color: "#a78bfa" }} fill="#a78bfa" />
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#a78bfa", letterSpacing: "0.15em" }}>FEATURED PROJECT</span>
                </div>
                <span className="tech-tag" style={{ background: "rgba(124,58,237,0.2)", borderColor: "rgba(124,58,237,0.5)", color: "#a78bfa" }}>
                  AI Powered
                </span>
              </div>

                <div className="p-5 sm:p-8 grid md:grid-cols-2 gap-6 sm:gap-8">
                {/* Left */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span style={{ fontSize: "2rem" }}>{project.emoji}</span>
                    <div>
                      <h3 className="font-heading text-2xl" style={{ color: "#e8eaf6" }}>{project.name}</h3>
                      <p style={{ color: "#8b92a9", fontSize: "0.875rem" }}>{project.subtitle}</p>
                    </div>
                  </div>
                  <p style={{ color: "#8b92a9", fontSize: "0.9rem", lineHeight: "1.7", marginBottom: "1.5rem" }}>
                    {project.description}
                  </p>
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map(t => <span key={t} className="tech-tag">{t}</span>)}
                  </div>
                  {/* Links */}
                  <div className="flex gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center gap-2" style={{ padding: "0.5rem 1.25rem", fontSize: "0.875rem" }}>
                        <Github size={14} /> GitHub
                      </a>
                    )}
                  </div>
                </div>

                {/* Right: Architecture breakdown */}
                <div className="space-y-4">
                  <div className="rounded-xl p-5" style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <p className="section-label mb-3">Problem</p>
                    <p style={{ color: "#8b92a9", fontSize: "0.85rem", lineHeight: "1.6" }}>{project.problem}</p>
                  </div>
                  <div className="rounded-xl p-5" style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <p className="section-label mb-3">Approach</p>
                    <p style={{ color: "#8b92a9", fontSize: "0.85rem", lineHeight: "1.6" }}>{project.approach}</p>
                  </div>
                  <div className="rounded-xl p-5" style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <p className="section-label mb-3">Architecture</p>
                    <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#a78bfa", fontSize: "0.78rem", lineHeight: "1.7" }}>{project.architecture}</p>
                  </div>
                  <div className="rounded-xl p-5" style={{ background: "rgba(34,197,94,0.07)", border: "1px solid rgba(34,197,94,0.2)" }}>
                    <p className="section-label mb-3" style={{ color: "#22C55E" }}>Impact</p>
                    <p style={{ color: "#8b92a9", fontSize: "0.85rem", lineHeight: "1.6" }}>{project.impact}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Other projects grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, i) => (
            <div key={project.name} className="card-glass rounded-2xl p-6 reveal flex flex-col" style={{ animationDelay: `${i * 0.1}s` }}>
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <span style={{ fontSize: "1.75rem" }}>{project.emoji}</span>
                <span className="tech-tag text-xs" style={{
                  background: `${project.badgeColor}18`,
                  borderColor: `${project.badgeColor}44`,
                  color: project.badgeColor,
                }}>
                  {project.badge}
                </span>
              </div>

              <h3 className="font-heading text-lg mb-1" style={{ color: "#e8eaf6" }}>{project.name}</h3>
              <p style={{ color: "#8b92a9", fontSize: "0.8rem", marginBottom: "0.75rem" }}>{project.subtitle}</p>

              {/* Architecture flow */}
              <div className="rounded-lg p-3 mb-4" style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.05)" }}>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#a78bfa", fontSize: "0.7rem", lineHeight: "1.6" }}>
                  {project.architecture}
                </p>
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mb-5 flex-1">
                {project.techStack.map(t => (
                  <span key={t} className="tech-tag" style={{ fontSize: "0.68rem", padding: "0.15rem 0.5rem" }}>{t}</span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-2 mt-auto">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all hover:scale-105"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "#8b92a9", fontSize: "0.78rem" }}>
                    <Github size={12} /> GitHub
                  </a>
                )}
                {(project as { github_backend?: string }).github_backend && (
                  <a href={(project as { github_backend?: string }).github_backend} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all hover:scale-105"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "#8b92a9", fontSize: "0.78rem" }}>
                    <Github size={12} /> Backend
                  </a>
                )}
                {(project as { github_frontend?: string }).github_frontend && (
                  <a href={(project as { github_frontend?: string }).github_frontend} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all hover:scale-105"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "#8b92a9", fontSize: "0.78rem" }}>
                    <Github size={12} /> Frontend
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all hover:scale-105"
                    style={{ background: "rgba(37,99,235,0.15)", border: "1px solid rgba(37,99,235,0.3)", color: "#60a5fa", fontSize: "0.78rem" }}>
                    <ExternalLink size={12} /> Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
