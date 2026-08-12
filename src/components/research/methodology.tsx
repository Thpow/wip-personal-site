import { component$ } from "@builder.io/qwik";
import { PAPER_SECTIONS } from "~/data/paper";
import { AgentMonolith } from "./agent-monolith";

export const Methodology = component$(() => {
  const methodology = PAPER_SECTIONS.find((s) => s.id === "methodology");
  if (!methodology) return null;

  const paragraphs = methodology.content.split("\n\n");

  return (
    <section
      data-section="methodology"
      role="region"
      aria-label="Methodology"
      style={{
        padding: "var(--space-lg) var(--space-md)",
        maxWidth: "100%",
      }}
    >
      <h2
        class="section-heading"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "var(--type-heading)",
          fontWeight: 900,
          letterSpacing: "-0.01em",
          marginBottom: "var(--space-md)",
          color: "var(--monolith-white)",
        }}
      >
        <span style={{ color: "var(--monolith-accent)", marginRight: "0.75rem" }}>
          02
        </span>
        METHODOLOGY
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "var(--space-md)",
          alignItems: "start",
        }}
      >
        {/* Text content — left column */}
        <div style={{ maxWidth: "var(--measure)" }}>
          {paragraphs.map((para, i) => (
            <p
              key={i}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "var(--type-body)",
                lineHeight: 1.7,
                marginBottom: "1rem",
                color: "var(--monolith-white)",
                opacity: 0.85,
              }}
            >
              {para}
            </p>
          ))}
        </div>

        {/* 3D Agent Monolith — right column (falls back to SVG Topology) */}
        <div>
          <AgentMonolith />
        </div>
      </div>
    </section>
  );
});
