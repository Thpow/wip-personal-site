import { component$ } from "@builder.io/qwik";
import { PAPER_SECTIONS } from "~/data/paper";
import { ConcurrentPairs } from "./concurrent-pairs";

export const Discussion = component$(() => {
  const discussion = PAPER_SECTIONS.find((s) => s.id === "discussion");
  if (!discussion) return null;

  const paragraphs = discussion.content.split("\n\n");

  return (
    <section
      data-section="discussion"
      role="region"
      aria-label="Discussion"
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
          05
        </span>
        DISCUSSION
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)",
          gap: "var(--space-md)",
          alignItems: "start",
        }}
      >
        {/* Text content — left column */}
        <div style={{ maxWidth: "var(--measure)" }}>
          {paragraphs.map((para, i) => {
            // ## prefix → h3 subsection heading (cyan monospace)
            if (para.startsWith("## ")) {
              return (
                <h3
                  key={i}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--type-mono)",
                    color: "var(--monolith-white)",
                    opacity: 0.5,
                    marginTop: "var(--space-md)",
                    marginBottom: "0.75rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  {para.slice(3)}
                </h3>
              );
            }
            return (
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
            );
          })}
        </div>

        {/* ConcurrentPairs SVG — right column, sticky so it stays in view
            while the long discussion text scrolls past. */}
        <div
          style={{
            position: "sticky",
            top: "5rem",
            alignSelf: "start",
            padding: "1rem",
            border: "1px solid rgba(34, 211, 238, 0.18)",
            background: "rgba(10, 12, 16, 0.55)",
            borderRadius: "4px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--monolith-accent)",
              opacity: 0.7,
              letterSpacing: "0.1em",
              marginBottom: "0.5rem",
            }}
          >
            FIGURE 4 — CONCURRENT PAIRS
          </div>
          <ConcurrentPairs />
        </div>
      </div>
    </section>
  );
});
