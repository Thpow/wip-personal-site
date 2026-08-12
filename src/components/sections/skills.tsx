import { component$ } from "@builder.io/qwik";
import { SKILL_CATEGORIES } from "~/data/skills";

/**
 * Skills — "structural manifest" of the monolith.
 *
 * Presents skill categories as a grid of structural panels. Each skill has
 * a horizontal bar (white fill on black track) with a monospace percentage
 * label. No animation — the bars are static, representing fixed capability.
 *
 * Monolith aesthetic: black bg, white text, cyan accent for section number
 * and percentage numbers, monospace for data, structural borders.
 *
 * @module sections/skills
 */
export const SkillsSection = component$(() => {
  return (
    <section
      id="skills"
      data-section="skills"
      role="region"
      aria-label="Skills"
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
          05
        </span>
        SKILLS
      </h2>

      {/* Category grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "var(--space-md)",
        }}
      >
        {SKILL_CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            style={{
              borderTop: "1px solid rgba(244, 244, 245, 0.15)",
              paddingTop: "var(--space-sm)",
            }}
          >
            {/* Category label */}
            <div
              style={{
                fontFamily: "ui-monospace, monospace",
                fontSize: "12px",
                color: "var(--monolith-white)",
                opacity: 0.5,
                letterSpacing: "0.05em",
                marginBottom: "0.25rem",
                textTransform: "uppercase",
              }}
            >
              {cat.label}
            </div>

            {/* Category description */}
            <div
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "12px",
                color: "var(--monolith-white)",
                opacity: 0.4,
                lineHeight: 1.5,
                marginBottom: "var(--space-sm)",
              }}
            >
              {cat.description}
            </div>

            {/* Skill bars */}
            <div>
              {cat.skills.map((skill, si) => (
                <div
                  key={si}
                  style={{
                    marginBottom: "0.6rem",
                  }}
                >
                  {/* Skill name + percentage */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      marginBottom: "0.2rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "system-ui, sans-serif",
                        fontSize: "13px",
                        color: "var(--monolith-white)",
                        opacity: 0.85,
                      }}
                    >
                      {skill.name}
                    </span>
                    <span
                      style={{
                        fontFamily: "ui-monospace, monospace",
                        fontSize: "11px",
                        color: "var(--monolith-accent)",
                        opacity: 0.7,
                      }}
                    >
                      {skill.level}%
                    </span>
                  </div>

                  {/* Bar track + fill */}
                  <div
                    style={{
                      height: "3px",
                      background: "rgba(244, 244, 245, 0.08)",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        height: "100%",
                        width: `${skill.level}%`,
                        background: "rgba(244, 244, 245, 0.25)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});
