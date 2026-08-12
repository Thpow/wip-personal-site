import { component$, useStyles$ } from "@builder.io/qwik";

// CSS for the mobile fallback — 2D hexagon with traveling cyan dot.
// Pure CSS animation, no JavaScript. Serves as SSR fallback too.
const STYLES = `
.mobile-fallback {
  position: relative;
  width: 280px;
  height: 320px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-hex {
  width: 200px;
  height: 230px;
  background: var(--monolith-black, #0a0a0c);
  border: 1px solid rgba(244, 244, 245, 0.2);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  position: relative;
}

/* Agent labels positioned around hexagon edges */
.agent-label {
  position: absolute;
  font-family: ui-monospace, monospace;
  font-size: 9px;
  color: var(--monolith-white, #f4f4f5);
  opacity: 0.6;
  letter-spacing: 0.05em;
  white-space: nowrap;
  pointer-events: none;
}
.agent-label--director { top: -4px; left: 50%; transform: translateX(-50%); }
.agent-label--coder    { top: 22%; right: -52px; }
.agent-label--reviewer { bottom: 22%; right: -52px; }
.agent-label--quality  { bottom: -4px; left: 50%; transform: translateX(-50%); }
.agent-label--docs     { bottom: 22%; left: -48px; }
.agent-label--ideas    { top: 22%; left: -40px; }

/* Traveling cyan dot — simplified 6-stop perimeter path */
.cycle-dot {
  width: 6px;
  height: 6px;
  background: var(--monolith-accent, #22d3ee);
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -3px;
  offset-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  animation: cycle-travel 10.4s linear infinite;
}

@keyframes cycle-travel {
  0%   { offset-distance: 0%; }
  16%  { offset-distance: 16%; }
  32%  { offset-distance: 32%; }
  48%  { offset-distance: 48%; }
  64%  { offset-distance: 64%; }
  80%  { offset-distance: 80%; }
  100% { offset-distance: 100%; }
}

@media (prefers-reduced-motion: reduce) {
  .cycle-dot {
    animation: none;
    /* Static at Director position (top, offset-distance 0%) */
    offset-distance: 0%;
  }
}

.fallback-note {
  text-align: center;
  font-family: ui-monospace, monospace;
  font-size: 10px;
  color: var(--monolith-white, #f4f4f5);
  opacity: 0.4;
  margin-top: 1rem;
  letter-spacing: 0.05em;
}

.fallback-name {
  text-align: center;
  font-family: ui-monospace, monospace;
  font-size: 14px;
  color: var(--monolith-white, #f4f4f5);
  letter-spacing: 0.15em;
  font-weight: 700;
  margin-top: 0.75rem;
}
`;

/**
 * Mobile fallback for the Digital Monolith 3D scene.
 *
 * Renders when the viewport is <768px wide or the device has <4 CPU cores.
 * Shows a 2D CSS hexagon with a cyan dot traveling the perimeter via
 * `offset-path` + `@keyframes` — a simplified 6-stop representation of
 * the 13-turn cycle. Pure CSS animation, no JavaScript, serves as SSR
 * fallback too.
 *
 * Per Agent 7's Cycle 6 Idea 4 spec.
 */
export const MobileFallback = component$(() => {
  useStyles$(STYLES);

  return (
    <div class="mobile-fallback" role="img" aria-label="Mobile fallback — 2D hexagon with cyan dot traveling the 6 agent positions">
      <div class="mobile-hex">
        <div class="cycle-dot" aria-hidden="true" />
        <span class="agent-label agent-label--director">3 DIRECTOR</span>
        <span class="agent-label agent-label--coder">1 CODER</span>
        <span class="agent-label agent-label--reviewer">2 REVIEWER</span>
        <span class="agent-label agent-label--quality">4 QUALITY</span>
        <span class="agent-label agent-label--docs">6 DOCS</span>
        <span class="agent-label agent-label--ideas">7 IDEAS</span>
      </div>
      <div class="fallback-note">2D FALLBACK — WEBGL DISABLED ON MOBILE</div>
      <div class="fallback-name">THOMAS POWELL</div>
    </div>
  );
});
