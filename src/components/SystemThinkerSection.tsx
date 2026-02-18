"use client";

const thinkingSteps = [
  {
    step: "01",
    title: "Model as a Graph",
    description: "Represent the problem as nodes and edges. Identify relationships, dependencies, and constraints.",
    icon: "🔵",
    color: "#7C3AED",
  },
  {
    step: "02",
    title: "Choose Optimal Algorithm",
    description: "BFS for shortest path, Dijkstra for weighted graphs, 0-1 BFS for binary weights, DP for overlapping subproblems.",
    icon: "⚡",
    color: "#2563EB",
  },
  {
    step: "03",
    title: "Optimize Time & Space",
    description: "Analyze Big-O complexity. Reduce redundant computation. Use memoization, lazy evaluation, and efficient data structures.",
    icon: "📊",
    color: "#7C3AED",
  },
  {
    step: "04",
    title: "Validate Edge Cases",
    description: "Test boundary conditions, empty inputs, maximum constraints. Verify correctness before optimization.",
    icon: "✅",
    color: "#22C55E",
  },
];

const techMindset = [
  { label: "BFS / DFS", use: "Graph traversal, shortest path in unweighted graphs" },
  { label: "Dijkstra", use: "Weighted shortest path problems" },
  { label: "0-1 BFS", use: "Binary weight optimization" },
  { label: "Dynamic Programming", use: "Overlapping subproblems, optimal substructure" },
  { label: "Greedy", use: "Locally optimal choices leading to global optimum" },
];

export default function SystemThinkerSection() {
  return (
      <section id="system-thinker" className="relative py-16 sm:py-24">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "rgba(124,58,237,0.025)" }} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="mb-16 reveal">
          <p className="section-label mb-3">06 // System Thinking</p>
          <h2 className="font-heading text-4xl md:text-5xl gradient-text-bright">How I Think About Problems</h2>
          <div className="gradient-line mt-4 w-24" />
          <p className="mt-4" style={{ color: "#8b92a9", fontSize: "0.95rem", maxWidth: 520 }}>
            Structured problem decomposition is at the core of every system I build — from AI applications to algorithmic challenges.
          </p>
        </div>

        {/* Thinking steps */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {thinkingSteps.map((step, i) => (
            <div key={i} className="card-glass rounded-2xl p-6 reveal relative overflow-hidden" style={{ animationDelay: `${i * 0.1}s` }}>
              {/* Step number */}
              <div className="absolute top-3 right-4 font-heading text-5xl font-black"
                style={{ color: `${step.color}12`, lineHeight: 1 }}>
                {step.step}
              </div>

              <div className="mb-4 text-2xl">{step.icon}</div>
              <p className="font-heading text-base font-semibold mb-2" style={{ color: "#e8eaf6" }}>{step.title}</p>
              <p style={{ color: "#8b92a9", fontSize: "0.82rem", lineHeight: "1.65" }}>{step.description}</p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(90deg, transparent, ${step.color}55, transparent)` }} />
            </div>
          ))}
        </div>

        {/* Algorithm reference */}
        <div className="card-glass rounded-2xl p-7 reveal">
          <p className="section-label mb-5">Algorithm Selection Framework</p>
          <div className="overflow-x-auto scroll-x">
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 500 }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "8px 16px", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#7C3AED", letterSpacing: "0.1em", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                    ALGORITHM
                  </th>
                  <th style={{ textAlign: "left", padding: "8px 16px", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#7C3AED", letterSpacing: "0.1em", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                    WHEN TO USE
                  </th>
                </tr>
              </thead>
              <tbody>
                {techMindset.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <td style={{ padding: "10px 16px" }}>
                      <span className="tech-tag" style={{ fontSize: "0.75rem" }}>{row.label}</span>
                    </td>
                    <td style={{ padding: "10px 16px", color: "#8b92a9", fontSize: "0.85rem" }}>{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
