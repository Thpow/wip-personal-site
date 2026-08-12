/**
 * 3D Monolith Scene Wrapper — Qwik component.
 *
 * Dynamic import of the 3D scene with Promise.race 5s timeout.
 * On success: mounts 3D canvas, shows HTML/CSS name overlay.
 * On timeout/failure: keeps static CSS monolith visible.
 * prefers-reduced-motion: skips 3D entirely.
 *
 * @module monolith/monolith-scene
 */
import {
  component$,
  useSignal,
  useStore,
  useVisibleTask$,
  type CSSProperties,
} from "@builder.io/qwik";

const PROFILE_BIO =
  "Student at UNC Charlotte, deeply invested in computers and software as both a hobby and career. Technical Intern at SAS since June 2022. BS Computer Science (Data Science) & MS Data Science and Business Analytics dual track.";

const TIMEOUT_MS = 5000;

// ─── Shared hero content styles ────────────────────────────────────────
const nameStyle: CSSProperties = {
  fontFamily: "ui-monospace, monospace",
  // Capped so the headline never runs into the viewport edges.
  fontSize: "clamp(2.25rem, 9vw, 8rem)",
  fontWeight: 900,
  color: "#f5f5f5",
  letterSpacing: "-0.04em",
  margin: 0,
  lineHeight: 1.02,
  textAlign: "center",
  maxWidth: "16ch",
};

const accentLineStyle: CSSProperties = {
  width: "clamp(2rem, 8vw, 6rem)",
  height: "1px",
  background: "#00e5ff",
  marginTop: "1.5rem",
  marginBottom: "2rem",
};

const bioStyle: CSSProperties = {
  fontFamily: "ui-monospace, monospace",
  fontSize: "clamp(0.7rem, 1.5vw, 0.85rem)",
  // Was 0.4 alpha — unreadable against the lit corridor behind it.
  color: "rgba(232, 240, 248, 0.78)",
  maxWidth: "58ch",
  textAlign: "center",
  lineHeight: 1.85,
  letterSpacing: "0.04em",
  margin: 0,
  padding: "0 1rem",
  textShadow: "0 0 24px rgba(4,6,9,0.95), 0 1px 3px rgba(0,0,0,0.9)",
};

export const MonolithScene = component$(() => {
  const containerRef = useSignal<HTMLDivElement>();
  const state = useStore<{ mounted: boolean; failed: boolean }>({
    mounted: false,
    failed: false,
  });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async ({ cleanup }) => {
    // Reduced-motion: skip 3D, keep static fallback
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const container = containerRef.value;
    if (!container) return;

    let dispose: (() => void) | null = null;
    let timeoutHandle: ReturnType<typeof setTimeout> | null = null;

    try {
      // Race the dynamic import against a timeout
      const importPromise = import("./scene").then((m) => {
        // Guard: if timeout already fired, don't mount 3D over the static fallback
        if (state.failed) return;
        const handle = m.init(container);
        dispose = handle.dispose;
        state.mounted = true;
        if (timeoutHandle) clearTimeout(timeoutHandle);
      });

      const timeoutPromise = new Promise<void>((resolve) => {
        timeoutHandle = setTimeout(() => {
          if (!state.mounted) {
            state.failed = true;
          }
          resolve();
        }, TIMEOUT_MS);
      });

      await Promise.race([importPromise, timeoutPromise]);
    } catch {
      // Import failure or init error — keep static fallback
      state.failed = true;
    } finally {
      if (timeoutHandle) clearTimeout(timeoutHandle);
    }

    cleanup(() => {
      if (dispose) dispose();
    });
  });

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "400px",
        background: "#050505",
        overflow: "hidden",
      }}
      aria-label="Digital Monolith — Thomas Powell"
    >
      {/* 3D canvas container — behind the overlay */}
      <div
        ref={containerRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
        aria-label="Interactive 3D monolith — drag to rotate"
      />

      {/* Static fallback — visible until 3D mounts, or permanently if 3D fails */}
      {!state.mounted && (
        <>
          {/* Radial-gradient fog overlay for depth — vignette darkens edges */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at center, transparent 0%, #000000 90%)",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1,
            }}
          >
            <h1
              style={{
                ...nameStyle,
                position: "relative",
              }}
            >
              THOMAS POWELL
            </h1>
            <div
              style={{
                ...accentLineStyle,
                position: "relative",
              }}
            />
            <p
              style={{
                ...bioStyle,
                position: "relative",
              }}
            >
              {PROFILE_BIO}
            </p>
          </div>
        </>
      )}

      {/* Scrim — keeps the headline legible over the lit corridor and
          darkens the frame edges so the 3D reads as depth, not clutter. */}
      {state.mounted && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 1,
            background:
              "radial-gradient(ellipse 70% 55% at 50% 52%, rgba(4,6,9,0.86) 0%, rgba(4,6,9,0.62) 45%, rgba(4,6,9,0.15) 75%, rgba(4,6,9,0.55) 100%)",
          }}
        />
      )}

      {/* HTML/CSS name overlay — in front of 3D canvas (zIndex 2) */}
      {state.mounted && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            zIndex: 2,
            padding: "0 6vw",
          }}
        >
          <h1
            style={{
              ...nameStyle,
              textShadow:
                "0 0 90px rgba(4,6,9,0.95), 0 0 32px rgba(4,6,9,0.9), 0 2px 4px rgba(0,0,0,0.8)",
            }}
          >
            THOMAS POWELL
          </h1>
          <div style={accentLineStyle} />
          <p style={bioStyle}>{PROFILE_BIO}</p>
        </div>
      )}

      {/* Scroll cue — always visible */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            fontFamily: "ui-monospace, monospace",
            fontSize: "9px",
            color: "rgba(245, 245, 245, 0.3)",
            letterSpacing: "0.3em",
          }}
        >
          SCROLL
        </span>
        <div
          style={{
            width: "1px",
            height: "32px",
            background:
              "linear-gradient(to bottom, rgba(0, 229, 255, 0.4), transparent)",
          }}
        />
      </div>
    </section>
  );
});
