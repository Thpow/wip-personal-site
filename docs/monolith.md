# Monolith Module — 3D Scene and Ambient UI

The monolith is the site's central metaphor: a hexagonal prism standing in void, its six faces representing the six agents of the Devin Autopilot system. The 3D scene is the hero — everything else is inscription on its surface or chambers carved within.

## Files

### Core 3D
- `scene.ts` — `createScene` (async, uses dynamic imports for Three.js addons), `createOrbitControls`, `createStaticOrbitControls`. Sets up the Three.js scene: hexagonal prism geometry, FogExp2 (density-based), cycle-light (a light that orbits the monolith), render loop via `requestAnimationFrame`. The cycle-light is the site's only ambient motion element.
- `camera.ts` — `createIntroTimeline`, `createStaticIntro`, `createCycleTimeline`, `createStaticCycleLight`, `disposeCycleTimeline`. GSAP-driven camera intro (the camera approaches the monolith on first load) and the cycle-light orbit animation. Reduced-motion fallbacks via `createStatic*` variants.
- `physics.ts` — `createPhysics`. cannon-es based cursor-pull physics: the monolith subtly responds to cursor position, creating a sense of mass and presence.
- `materials.ts` — `createMaterials`, `createNameLoader`. PBR materials for the 6 monolith faces (each face = one agent). TextGeometry for "THOMAS POWELL" carved into the Director face. Font loaded local-first (`/fonts/helvetiker_bold.typeface.json`) with unpkg CDN fallback.
- `shaders.ts` — GLSL shaders for the monolith faces (may be legacy/unused — verify on first render).

### Qwik Components
- `monolith-scene.tsx` — The main 3D component. `useVisibleTask$` for client-only initialization (Three.js requires `window`). Loading state: "INITIALIZING STRUCTURE" + cyan pulse dot. Mobile fallback detection via `window.matchMedia`. Scroll-slowing: when the research paper section is in view, the cycle-light timeline slows (the system "reads its own documentation"). `id="hero"` on the wrapper div for FaceNav targeting. Error state: falls back to mobile fallback on any WebGL error.
- `mobile-fallback.tsx` — CSS hexagon fallback for mobile / no-WebGL. Renders "THOMAS POWELL" as a CSS label. The hexagon uses `clip-path: polygon(...)` to match the 3D prism's silhouette.
- `sound-toggle.tsx` — Sound control button. `useVisibleTask$` with correct Qwik `cleanup` param pattern (not React's return-based cleanup). Disposes AudioContext on unmount.
- `sound.ts` — 3-layer Web Audio system: drone (low oscillator), hum (mid oscillator), shimmer (high noise). Master gain 0.08 (barely audible — restraint principle).
- `face-nav.tsx` — 7-dot navigation (squares not circles — architectural geometry). IntersectionObserver with `-45%` rootMargin (active section is the one near viewport center). Hover labels appear on mouse enter. `prefers-reduced-motion` support. `aria-label` on container + each dot. `aria-current` on active dot. Mobile guard (<768px hidden).
- `scroll-progress.tsx` — 2px vertical line on left edge of viewport. Cyan fill grows from top to bottom as user scrolls. `pointerEvents: none` (doesn't block clicks). `aria-hidden="true"` (decorative). `prefers-reduced-motion` support. Mobile guard.
- `monolith-nav.tsx` — Neutralized (1-line stub). Superseded by `face-nav.tsx`.

## Key Patterns
- **Dynamic imports**: `await import("./scene")` etc. — keeps Three.js out of the initial bundle.
- **`useVisibleTask$`**: All Three.js code runs client-only. The component body is SSR-safe (no `window`/`document` access outside the task).
- **Reduced-motion fallbacks**: Every animation has a `createStatic*` variant that renders the final state without motion.
- **Local-first font loading**: `materials.ts` tries `/fonts/helvetiker_bold.typeface.json` before falling back to unpkg CDN.

## Dependencies
- `three@^0.169.0` — 3D engine
- `@types/three@^0.169.0` — TypeScript types
- `gsap` — animation timeline
- `cannon-es` — physics

## Art-Direction Notes
- The cycle-light is the ONLY ambient motion element. Everything else is still.
- Fog density creates depth — the monolith recedes into void, not floats in space.
- The name "THOMAS POWELL" is carved into the structure (TextGeometry), not floating above it.
- Sound is barely audible (0.08 gain) — it's felt, not heard.
- The FaceNav uses squares (architectural) not circles (organic) — the monolith is geometric.
