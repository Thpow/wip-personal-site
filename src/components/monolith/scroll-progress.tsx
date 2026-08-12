import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";

/**
 * ScrollProgress — thin cyan line on the left edge that grows as the user scrolls.
 *
 * A single 2px-wide vertical bar fixed to the left edge of the viewport.
 * Its height represents scroll progress (0% → 100%). The bar is cyan —
 * the only persistent cyan element outside the 3D scene and FaceNav active
 * state. It reinforces the "ascending the monolith" metaphor.
 *
 * Hidden on mobile (<768px). Respects prefers-reduced-motion (no transition).
 */
export const ScrollProgress = component$(() => {
  const state = useStore<{ progress: number; visible: boolean; reducedMotion: boolean }>({
    progress: 0,
    visible: false,
    reducedMotion: false,
  });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(
    async ({ cleanup }) => {
      if (window.innerWidth < 768) return;
      state.visible = true;
      state.reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const onScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        state.progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      };

      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      cleanup(() => window.removeEventListener("scroll", onScroll));
    },
  );

  if (!state.visible) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "2px",
        height: "100vh",
        background: "rgba(244, 244, 245, 0.05)",
        zIndex: "var(--z-overlay, 100)",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: "100%",
          height: `${state.progress * 100}%`,
          background: "var(--monolith-accent, #22d3ee)",
          opacity: 0.6,
          transition: state.reducedMotion ? "none" : "height 0.1s linear",
        }}
      />
    </div>
  );
});
