import { component$ } from "@builder.io/qwik";
import { EXPERIENCE } from "~/data/experience";

export const ExperienceSection = component$(() => {
  return (
    <section
      id="experience"
      data-section="experience"
      role="region"
      aria-label="Experience"
      style={{
        background: "var(--monolith-black)",
        color: "var(--monolith-white)",
        padding: "var(--space-lg) var(--space-md)",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      {/* Section heading */}
      <h2
        style={{
          fontFamily: "ui-monospace, monospace",
          fontSize: "var(--type-heading)",
          fontWeight: 900,
          letterSpacing: "-0.01em",
          margin: 0,
          marginBottom: "var(--space-md)",
          color: "var(--monolith-white)",
        }}
      >
        <span style={{ color: "var(--monolith-accent)", marginRight: "0.75rem" }}>
          03
        </span>
        EXPERIENCE
      </h2>

      {/* Roles as ascending floors */}
      {EXPERIENCE.map((entry, i) => (
        <div
          key={entry.id}
          style={{
            borderTop: "1px solid rgba(244, 244, 245, 0.15)",
            paddingTop: "var(--space-md)",
            marginTop: i === 0 ? 0 : "var(--space-md)",
            paddingBottom: "var(--space-md)",
          }}
        >
          {/* Role title */}
          <div
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "var(--monolith-white)",
            }}
          >
            {entry.role}
          </div>

          {/* Company + location + dates — monospace white */}
          <div
            style={{
              fontFamily: "ui-monospace, monospace",
              fontSize: "12px",
              color: "var(--monolith-white)",
              opacity: 0.6,
              marginTop: "0.25rem",
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <span>{entry.company}</span>
            <span style={{ opacity: 0.6 }}>{entry.location}</span>
            <span style={{ opacity: 0.6 }}>{entry.dates}</span>
          </div>

          {/* Description */}
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "var(--type-body)",
              maxWidth: "640px",
              lineHeight: 1.7,
              marginTop: "var(--space-sm)",
              color: "var(--monolith-white)",
              opacity: 0.85,
            }}
          >
            {entry.summary}
          </p>

          {/* Highlights — vertical list with white markers */}
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "var(--space-sm) 0",
              maxWidth: "640px",
            }}
          >
            {entry.highlights.map((h, hi) => (
              <li
                key={hi}
                style={{
                  fontFamily: "ui-monospace, monospace",
                  fontSize: "13px",
                  lineHeight: 1.9,
                  color: "var(--monolith-white)",
                  opacity: 0.8,
                  paddingLeft: "1.5rem",
                  position: "relative",
                  marginBottom: "0.75rem",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    color: "var(--monolith-white)",
                    opacity: 0.4,
                  }}
                >
                  ▸
                </span>
                {h}
              </li>
            ))}
          </ul>

          {/* Tech stack — inline monospace tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.4rem",
              marginTop: "var(--space-sm)",
              maxWidth: "640px",
            }}
          >
            {entry.tech.map((t, ti) => (
              <span
                key={ti}
                style={{
                  fontFamily: "ui-monospace, monospace",
                  fontSize: "11px",
                  padding: "0.2rem 0.5rem",
                  border: "1px solid rgba(244, 244, 245, 0.2)",
                  color: "var(--monolith-white)",
                  opacity: 0.6,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
});
