import { component$ } from "@builder.io/qwik";
import { PAPER_SECTIONS } from "~/data/paper";

const HOOK_PHRASE = "the site is the output of the system it describes";

export const Results = component$(() => {
  const results = PAPER_SECTIONS.find((s) => s.id === "results");
  if (!results) return null;

  const paragraphs = results.content.split("\n\n");

  return (
    <section
      data-section="results"
      role="region"
      aria-label="Results"
      style={{
        maxWidth: "var(--measure)",
        padding: "var(--space-lg) var(--space-md)",
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
          04
        </span>
        RESULTS
      </h2>

      {paragraphs.map((para, i) => {
        // ## prefix → h3 subsection heading (cyan monospace, matches discussion.tsx)
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
        // The self-referential statement — visual climax
        const lowerPara = para.toLowerCase();
        if (lowerPara.includes(HOOK_PHRASE)) {
          const hookIdx = lowerPara.indexOf(HOOK_PHRASE);
          const before = para.slice(0, hookIdx);
          const hook = para.slice(hookIdx, hookIdx + HOOK_PHRASE.length);
          const after = para.slice(hookIdx + HOOK_PHRASE.length);

          return (
            <div key={i} style={{ marginBottom: "1.5rem" }}>
              {before && (
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "var(--type-body)",
                    lineHeight: 1.7,
                    marginBottom: "0.5rem",
                    color: "var(--monolith-white)",
                    opacity: 0.85,
                  }}
                >
                  {before.trim()}
                </p>
              )}
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1.5rem",
                  fontWeight: 900,
                  lineHeight: 1.3,
                  letterSpacing: "-0.02em",
                  color: "var(--monolith-white)",
                  margin: "var(--space-sm) 0",
                }}
              >
                {hook}
              </p>
              {after && (
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "var(--type-body)",
                    lineHeight: 1.7,
                    marginTop: "0.5rem",
                    color: "var(--monolith-white)",
                    opacity: 0.85,
                  }}
                >
                  {after.trim()}
                </p>
              )}
            </div>
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
    </section>
  );
});
