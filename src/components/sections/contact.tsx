import { component$ } from "@builder.io/qwik";
import { CONTACT } from "~/data/contact";
import { socialLinks } from "~/data/social";

/**
 * Contact — "closing chamber" of the monolith.
 *
 * Restrained, monumental. Email, phone, location, availability as monospace
 * lines with white labels. Social links as white-bordered tags. No contact
 * form — the spec calls for restraint, not interaction.
 *
 * Monolith aesthetic: black bg, white text, cyan accent for section number
 * only, monospace for all data, structural borders.
 *
 * @module sections/contact
 */
export const ContactSection = component$(() => {
  // Filter social links to LinkedIn + GitHub only (Email is redundant with the email line)
  const socialTags = socialLinks.filter((s) => s.name !== "Email");

  return (
    <section
      id="contact"
      data-section="contact"
      role="region"
      aria-label="Contact"
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
          06
        </span>
        CONTACT
      </h2>

      {/* Contact info — monospace lines with white labels */}
      <div
        style={{
          borderTop: "1px solid rgba(244, 244, 245, 0.15)",
          paddingTop: "var(--space-md)",
          maxWidth: "640px",
        }}
      >
        {/* Email */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "120px 1fr",
            gap: "1rem",
            padding: "0.5rem 0",
            alignItems: "baseline",
          }}
        >
          <span
            style={{
              fontFamily: "ui-monospace, monospace",
              fontSize: "11px",
              color: "var(--monolith-white)",
              opacity: 0.5,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            EMAIL
          </span>
          <a
            href={`mailto:${CONTACT.email}`}
            style={{
              fontFamily: "ui-monospace, monospace",
              fontSize: "14px",
              color: "var(--monolith-white)",
              opacity: 0.85,
              textDecoration: "none",
            }}
          >
            {CONTACT.email}
          </a>
        </div>

        {/* Phone */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "120px 1fr",
            gap: "1rem",
            padding: "0.5rem 0",
            alignItems: "baseline",
            borderTop: "1px solid rgba(244, 244, 245, 0.08)",
          }}
        >
          <span
            style={{
              fontFamily: "ui-monospace, monospace",
              fontSize: "11px",
              color: "var(--monolith-white)",
              opacity: 0.5,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            PHONE
          </span>
          <span
            style={{
              fontFamily: "ui-monospace, monospace",
              fontSize: "14px",
              color: "var(--monolith-white)",
              opacity: 0.85,
            }}
          >
            {CONTACT.phone}
          </span>
        </div>

        {/* Location */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "120px 1fr",
            gap: "1rem",
            padding: "0.5rem 0",
            alignItems: "baseline",
            borderTop: "1px solid rgba(244, 244, 245, 0.08)",
          }}
        >
          <span
            style={{
              fontFamily: "ui-monospace, monospace",
              fontSize: "11px",
              color: "var(--monolith-white)",
              opacity: 0.5,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            LOCATION
          </span>
          <span
            style={{
              fontFamily: "ui-monospace, monospace",
              fontSize: "14px",
              color: "var(--monolith-white)",
              opacity: 0.85,
            }}
          >
            {CONTACT.location}
          </span>
        </div>

        {/* Availability */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "120px 1fr",
            gap: "1rem",
            padding: "0.5rem 0",
            alignItems: "baseline",
            borderTop: "1px solid rgba(244, 244, 245, 0.08)",
          }}
        >
          <span
            style={{
              fontFamily: "ui-monospace, monospace",
              fontSize: "11px",
              color: "var(--monolith-white)",
              opacity: 0.5,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            STATUS
          </span>
          <span
            style={{
              fontFamily: "ui-monospace, monospace",
              fontSize: "14px",
              color: "var(--monolith-white)",
              opacity: 0.85,
            }}
          >
            {CONTACT.availability}
          </span>
        </div>
      </div>

      {/* Social links — white-bordered tags */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          marginTop: "var(--space-md)",
          maxWidth: "640px",
        }}
      >
        {socialTags.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "ui-monospace, monospace",
              fontSize: "11px",
              padding: "0.3rem 0.7rem",
              border: "1px solid rgba(244, 244, 245, 0.2)",
              color: "var(--monolith-white)",
              opacity: 0.6,
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            {social.name.toUpperCase()}
          </a>
        ))}
      </div>
    </section>
  );
});
