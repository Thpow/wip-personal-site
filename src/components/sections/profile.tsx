import { component$ } from "@builder.io/qwik";
import { PROFILE } from "~/data/profile";

export const ProfileSection = component$(() => {
  return (
    <section
      id="profile"
      data-section="profile"
      role="region"
      aria-label="Profile"
      style={{
        background: "var(--monolith-black)",
        color: "var(--monolith-white)",
        padding: "var(--space-lg) var(--space-md)",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      {/* Name — carved architectural heading */}
      <h2
        style={{
          fontFamily: "ui-monospace, monospace",
          fontWeight: 900,
          fontSize: "var(--type-heading)",
          letterSpacing: "-0.03em",
          lineHeight: 1,
          margin: 0,
          color: "var(--monolith-white)",
        }}
      >
        {PROFILE.name}
      </h2>

      {/* Title — monospace cyan subtitle (profile's single accent — no section number) */}
      <div
        style={{
          fontFamily: "ui-monospace, monospace",
          fontSize: "var(--type-mono)",
          color: "var(--monolith-accent)",
          marginTop: "var(--space-sm)",
          letterSpacing: "0.02em",
        }}
      >
        {PROFILE.title}
      </div>

      {/* Bio — restrained body text, split into two paragraphs */}
      {(() => {
        const splitMarker = "interning at SAS since June 2022.";
        const idx = PROFILE.bio.indexOf(splitMarker);
        if (idx === -1) {
          return (
            <p
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "var(--type-body)",
                maxWidth: "640px",
                lineHeight: 1.8,
                marginTop: "var(--space-md)",
                color: "var(--monolith-white)",
                opacity: 0.85,
              }}
            >
              {PROFILE.bio}
            </p>
          );
        }
        const para1 = PROFILE.bio.slice(0, idx + splitMarker.length);
        const para2 = PROFILE.bio.slice(idx + splitMarker.length).trim();
        return (
          <>
            <p
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "var(--type-body)",
                maxWidth: "640px",
                lineHeight: 1.8,
                marginTop: "var(--space-md)",
                color: "var(--monolith-white)",
                opacity: 0.85,
              }}
            >
              {para1}
            </p>
            {para2 && (
              <p
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "var(--type-body)",
                  maxWidth: "640px",
                  lineHeight: 1.8,
                  marginTop: "1rem",
                  color: "var(--monolith-white)",
                  opacity: 0.85,
                }}
              >
                {para2}
              </p>
            )}
          </>
        );
      })()}

      {/* Highlights — vertical list with white markers */}
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: "var(--space-md) 0",
          maxWidth: "640px",
        }}
      >
        {PROFILE.highlights.map((h, i) => (
          <li
            key={i}
            style={{
              fontFamily: "ui-monospace, monospace",
              fontSize: "14px",
              lineHeight: 2,
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
            {h}
          </li>
        ))}
      </ul>

      {/* Interests — inline tags */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          margin: "var(--space-md) 0",
          maxWidth: "640px",
        }}
      >
        {PROFILE.interests.map((interest, i) => (
          <span
            key={i}
            style={{
              fontFamily: "ui-monospace, monospace",
              fontSize: "11px",
              padding: "0.25rem 0.6rem",
              border: "1px solid rgba(244, 244, 245, 0.2)",
              color: "var(--monolith-white)",
              opacity: 0.5,
              letterSpacing: "0.02em",
            }}
          >
            {interest}
          </span>
        ))}
      </div>

      {/* Education — 3-row structural grid */}
      <div
        style={{
          marginTop: "var(--space-md)",
          maxWidth: "640px",
        }}
      >
        {PROFILE.education.map((edu, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "0.5rem 1rem",
              padding: "var(--space-sm) 0",
              borderTop:
                i === 0
                  ? "1px solid rgba(244, 244, 245, 0.15)"
                  : "1px solid rgba(244, 244, 245, 0.08)",
              alignItems: "baseline",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "var(--type-body)",
                  color: "var(--monolith-white)",
                  fontWeight: 500,
                }}
              >
                {edu.degree}
                {edu.gpa && (
                  <span
                    style={{
                      fontFamily: "ui-monospace, monospace",
                      fontSize: "12px",
                      color: "var(--monolith-white)",
                      marginLeft: "0.5rem",
                      opacity: 0.5,
                    }}
                  >
                    ({edu.gpa})
                  </span>
                )}
              </div>
              <div
                style={{
                  fontFamily: "ui-monospace, monospace",
                  fontSize: "12px",
                  color: "var(--monolith-white)",
                  opacity: 0.5,
                  marginTop: "0.25rem",
                }}
              >
                {edu.institution}
              </div>
            </div>
            <div
              style={{
                fontFamily: "ui-monospace, monospace",
                fontSize: "12px",
                color: "var(--monolith-white)",
                opacity: 0.6,
                textAlign: "right",
                whiteSpace: "nowrap",
              }}
            >
              {edu.dates}
            </div>
          </div>
        ))}
      </div>

      {/* Certifications — single monospace line */}
      <div
        style={{
          fontFamily: "ui-monospace, monospace",
          fontSize: "12px",
          color: "var(--monolith-white)",
          opacity: 0.5,
          marginTop: "var(--space-md)",
          maxWidth: "640px",
        }}
      >
        {PROFILE.certifications.join(", ")}
      </div>
    </section>
  );
});
