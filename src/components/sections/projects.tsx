import { component$, useStore } from "@builder.io/qwik";
import {
  PROJECTS,
  PROJECT_CATEGORIES,
  PROJECT_CATEGORY_LABELS,
} from "~/data/projects";
import type { Project, ProjectCategory } from "~/data/types";

/**
 * Projects showcase — "chambers" of the monolith.
 *
 * Each project is a chamber: a card with title, org, summary, and tech tags.
 * Clicking a chamber expands it to reveal features, challenges, and outcomes.
 * Category filtering via monospace filter buttons (All + 5 categories).
 *
 * Monolith aesthetic: black bg, white text, cyan accent for active filter
 * and section number, structural borders, monospace for technical data.
 *
 * @module sections/projects
 */
export const ProjectsSection = component$(() => {
  const filter = useStore<{ category: ProjectCategory | "all" }>({
    category: "all",
  });
  const selected = useStore<{ id: string | null }>({ id: null });

  const filtered: Project[] =
    filter.category === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter.category);

  const filterButtons: { label: string; value: ProjectCategory | "all" }[] = [
    { label: "All", value: "all" },
    ...PROJECT_CATEGORIES.map((c) => ({
      label: PROJECT_CATEGORY_LABELS[c]!,
      value: c,
    })),
  ];

  return (
    <section
      id="projects"
      data-section="projects"
      role="region"
      aria-label="Projects"
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
          04
        </span>
        PROJECTS
      </h2>

      {/* Filter buttons */}
      <div
        role="tablist"
        aria-label="Project category filter"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          marginBottom: "var(--space-md)",
        }}
      >
        {filterButtons.map((btn) => {
          const isActive = filter.category === btn.value;
          return (
            <button
              key={btn.value}
              role="tab"
              aria-selected={isActive}
              onClick$={() => {
                filter.category = btn.value;
                selected.id = null;
              }}
              style={{
                fontFamily: "ui-monospace, monospace",
                fontSize: "11px",
                padding: "0.3rem 0.7rem",
                border: "1px solid var(--monolith-accent)",
                color: isActive
                  ? "var(--monolith-black)"
                  : "var(--monolith-accent)",
                background: isActive
                  ? "var(--monolith-accent)"
                  : "transparent",
                opacity: isActive ? 1 : 0.5,
                cursor: "pointer",
                letterSpacing: "0.02em",
              }}
            >
              {btn.label}
            </button>
          );
        })}
      </div>

      {/* Project chambers */}
      <div>
        {filtered.map((project, i) => {
          const isExpanded = selected.id === project.id;
          return (
            <div
              key={project.id}
              style={{
                borderTop:
                  i === 0
                    ? "1px solid rgba(244, 244, 245, 0.15)"
                    : "1px solid rgba(244, 244, 245, 0.08)",
                paddingTop: "var(--space-md)",
                marginTop: i === 0 ? 0 : "var(--space-md)",
                paddingBottom: "var(--space-md)",
              }}
            >
              {/* Chamber header — clickable */}
              <button
                onClick$={() => {
                  selected.id = isExpanded ? null : project.id;
                }}
                aria-expanded={isExpanded}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  background: "transparent",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  color: "inherit",
                }}
              >
                {/* Title + org */}
                <div
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "var(--monolith-white)",
                  }}
                >
                  {project.title}
                  {project.org && (
                    <span
                      style={{
                        fontFamily: "ui-monospace, monospace",
                        fontSize: "12px",
                        color: "var(--monolith-white)",
                        marginLeft: "0.75rem",
                        opacity: 0.5,
                      }}
                    >
                      {project.org}
                    </span>
                  )}
                </div>

                {/* Category + summary */}
                <div
                  style={{
                    fontFamily: "ui-monospace, monospace",
                    fontSize: "11px",
                    color: "var(--monolith-white)",
                    opacity: 0.5,
                    marginTop: "0.25rem",
                  }}
                >
                  {PROJECT_CATEGORY_LABELS[project.category]}
                </div>
                <p
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "var(--type-body)",
                    maxWidth: "640px",
                    lineHeight: 1.6,
                    marginTop: "0.5rem",
                    color: "var(--monolith-white)",
                    opacity: 0.8,
                  }}
                >
                  {project.summary}
                </p>
              </button>

              {/* Tech tags — always visible */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                  marginTop: "var(--space-sm)",
                  maxWidth: "640px",
                }}
              >
                {project.tech.map((t, ti) => (
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

              {/* Expanded view — features, challenges, outcomes */}
              {isExpanded && (
                <div
                  style={{
                    marginTop: "var(--space-md)",
                    maxWidth: "640px",
                  }}
                >
                  {/* Features */}
                  <div style={{ marginBottom: "var(--space-sm)" }}>
                    <div
                      style={{
                        fontFamily: "ui-monospace, monospace",
                        fontSize: "11px",
                        color: "var(--monolith-white)",
                        opacity: 0.5,
                        marginBottom: "0.5rem",
                        letterSpacing: "0.05em",
                      }}
                    >
                      FEATURES
                    </div>
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                      }}
                    >
                      {project.features.map((f, fi) => (
                        <li
                          key={fi}
                          style={{
                            fontFamily: "ui-monospace, monospace",
                            fontSize: "13px",
                            lineHeight: 1.9,
                            color: "var(--monolith-white)",
                            opacity: 0.8,
                            paddingLeft: "1.5rem",
                            position: "relative",
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
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Challenges */}
                  <div style={{ marginBottom: "var(--space-sm)" }}>
                    <div
                      style={{
                        fontFamily: "ui-monospace, monospace",
                        fontSize: "11px",
                        color: "var(--monolith-white)",
                        opacity: 0.5,
                        marginBottom: "0.5rem",
                        letterSpacing: "0.05em",
                      }}
                    >
                      CHALLENGES
                    </div>
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                      }}
                    >
                      {project.challenges.map((c, ci) => (
                        <li
                          key={ci}
                          style={{
                            fontFamily: "ui-monospace, monospace",
                            fontSize: "13px",
                            lineHeight: 1.9,
                            color: "var(--monolith-white)",
                            opacity: 0.7,
                            paddingLeft: "1.5rem",
                            position: "relative",
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
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcomes */}
                  <div>
                    <div
                      style={{
                        fontFamily: "ui-monospace, monospace",
                        fontSize: "11px",
                        color: "var(--monolith-white)",
                        opacity: 0.5,
                        marginBottom: "0.5rem",
                        letterSpacing: "0.05em",
                      }}
                    >
                      OUTCOMES
                    </div>
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                      }}
                    >
                      {project.outcomes.map((o, oi) => (
                        <li
                          key={oi}
                          style={{
                            fontFamily: "ui-monospace, monospace",
                            fontSize: "13px",
                            lineHeight: 1.9,
                            color: "var(--monolith-white)",
                            opacity: 0.9,
                            paddingLeft: "1.5rem",
                            position: "relative",
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
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
});
