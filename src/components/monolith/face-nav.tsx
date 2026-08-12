import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";

/**
 * FaceNav — minimal fixed-position vertical navigation.
 *
 * Represents the faces of the monolith. Each marker is a small square
 * (architectural, not organic); the active face is marked with a cyan
 * square. Hovering reveals a monospace label to the left. Clicking
 * scrolls to that section. Hidden on mobile (<768px).
 *
 * The set of sections is passed in as a prop so each route can list its
 * own anchors (research paper sections on `/`, portfolio sections on
 * `/portfolio`).
 *
 * Monolith aesthetic: barely visible white squares, cyan only on the
 * active face. Labels appear on hover — the structure is navigated by
 * shape, not text.
 */
export interface FaceNavSection {
  id: string;
  label: string;
}

interface FaceNavProps {
  sections: FaceNavSection[];
}

export const FaceNav = component$((props: FaceNavProps) => {
  const SECTIONS = props.sections;
  const state = useStore<{ active: string; visible: boolean; hovered: string | null; reducedMotion: boolean }>({
    active: SECTIONS[0]?.id ?? "hero",
    visible: false,
    hovered: null,
    reducedMotion: false,
  });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(
    async ({ cleanup }) => {
      // Hide on mobile
      if (window.innerWidth < 768) return;
      state.visible = true;
      state.reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              state.active = entry.target.id;
            }
          }
        },
        { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
      );

      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el) observer.observe(el);
      }

      cleanup(() => observer.disconnect());
    },
  );

  if (!state.visible) return null;

  return (
    <nav
      aria-label="Section navigation"
      style={{
        position: "fixed",
        right: "1.5rem",
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        zIndex: "var(--z-overlay, 100)",
      }}
    >
      {SECTIONS.map((s) => {
        const isActive = state.active === s.id;
        const isHovered = state.hovered === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            aria-label={s.label}
            aria-current={isActive ? "true" : undefined}
            onMouseEnter$={() => { state.hovered = s.id; }}
            onMouseLeave$={() => { state.hovered = null; }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "0.5rem",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            {/* Hover label — monospace, appears to the left of the square */}
            {isHovered && (
              <span
                style={{
                  fontFamily: "ui-monospace, monospace",
                  fontSize: "10px",
                  color: "var(--monolith-white, #f4f4f5)",
                  opacity: 0.7,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                {s.label}
              </span>
            )}
            {/* Square marker — architectural, not organic */}
            <span
              style={{
                display: "block",
                width: isActive ? "10px" : "5px",
                height: isActive ? "10px" : "5px",
                background: isActive
                  ? "var(--monolith-accent, #22d3ee)"
                  : "rgba(244, 244, 245, 0.25)",
                transition: state.reducedMotion ? "none" : "width 0.3s var(--ease-monumental, cubic-bezier(0.16,1,0.3,1)), height 0.3s var(--ease-monumental, cubic-bezier(0.16,1,0.3,1)), background 0.3s",
                flexShrink: 0,
              }}
            />
          </a>
        );
      })}
    </nav>
  );
});
