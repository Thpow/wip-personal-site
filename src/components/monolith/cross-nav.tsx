import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

/**
 * CrossNav — persistent top-left page switcher.
 *
 * Two monospace links: "Research" (`/`) and "Portfolio" (`/portfolio`).
 * The link for the current route is dimmed and non-clickable (you're here).
 * Always visible regardless of scroll position, so either page is reachable
 * from the other at all times.
 *
 * Monolith aesthetic: barely visible labels, cyan underline on the active
 * page, no chrome.
 */
const PAGES = [
  { path: "/", label: "Research" },
  { path: "/portfolio", label: "Portfolio" },
] as const;

export const CrossNav = component$(() => {
  const loc = useLocation();
  const visible = useSignal(false);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    visible.value = true;
  });

  if (!visible.value) return null;

  return (
    <nav
      aria-label="Pages"
      style={{
        position: "fixed",
        top: "1rem",
        left: "1rem",
        zIndex: "var(--z-overlay, 100)",
        display: "flex",
        gap: "1.25rem",
        padding: "0.5rem 0.75rem",
        background: "rgba(5, 5, 5, 0.7)",
        backdropFilter: "blur(8px)",
        borderRadius: "2px",
      }}
    >
      {PAGES.map((page) => {
        const isHere = loc.url.pathname === page.path;
        return (
          <a
            key={page.path}
            href={page.path}
            aria-current={isHere ? "page" : undefined}
            style={{
              fontFamily: "ui-monospace, monospace",
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              color: isHere
                ? "var(--monolith-accent, #22d3ee)"
                : "rgba(244, 244, 245, 0.6)",
              borderBottom: isHere
                ? "1px solid var(--monolith-accent, #22d3ee)"
                : "1px solid transparent",
              paddingBottom: "2px",
              cursor: isHere ? "default" : "pointer",
              transition: "color 0.2s, border-color 0.2s",
            }}
          >
            {page.label}
          </a>
        );
      })}
    </nav>
  );
});
