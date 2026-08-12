# Phase 1 Quality Acceptance Criteria — 3D Scene Implementation

> Agent 4 (Quality & Longevity) — defines measurable, testable gates for the Phase 1
> Three.js / WebGL / GLSL implementation. These criteria gate Phase 1 completion.
> Agent 1 must satisfy ALL gates before Phase 1 is marked complete.
>
> Grounded in Agent 7's creative proposals (`.autopilot/ideas.md` cycles 2-3):
> - Hexagonal Monolith with Traveling Light (Cycle 3, Idea 1 — top pick)
> - Geological Strata / Vertical Reading (Cycle 3, Idea 2)
> - Shadow Architecture / Brain+Agent Pairing (Cycle 3, Idea 3)
> - Scars in the Stone / Process Resilience (Cycle 3, Idea 4)
> - Inscribed Architecture (Cycle 2, Idea 1)
> - Escher Cycle / Penrose Staircase (Cycle 2, Idea 2)
> - Cavern Resonance / Sound Design (Cycle 2, Idea 3)

---

## 1. Performance Gates

### 1.1 Frame Rate
- **[GATE]** Sustained 60fps on desktop (Chrome, Firefox, Safari) measured via `requestAnimationFrame` timestamps over a 10-second idle-orbit window. Frame time must not exceed 16.67ms for >95% of frames.
- **[GATE]** Sustained 30fps minimum on mid-range mobile (iPhone 12 / Pixel 6 equivalent). Frame time must not exceed 33.33ms for >90% of frames.
- **[TEST]** Agent 4 will run a perf audit by instrumenting the rAF loop with a rolling frame-time tracker and reporting p50/p95/p99 frame times.

### 1.2 GPU Memory
- **[GATE]** Total GPU memory allocation must not exceed 50MB. This includes geometry buffers, textures, render targets, and shader programs.
- **[TEST]** Measure via `renderer.info.memory` (Three.js) — `geometries`, `textures`, and `programs` counts. If `renderer.info` is unavailable, estimate from buffer sizes.
- **[GATE]** No texture larger than 2048×2048. SVG-to-texture mappings (for inscribed diagrams per Cycle 2 Idea 1) must be generated at display resolution, not oversized.

### 1.3 Lazy Loading
- **[GATE]** The Three.js scene module (`src/components/monolith/scene.ts`) must NOT be in the initial SSR bundle. Verify via build output analysis — the module should appear in a separate chunk loaded on demand.
- **[GATE]** The 3D scene must mount only after the hero/monolith section is visible, using `IntersectionObserver` (or Qwik's `useVisibleTask$`). The scene must not initialize WebGL context until the canvas is in the viewport.
- **[TEST]** Agent 4 will inspect the build output (`dist/` chunks) to confirm scene code is in a lazy chunk, not the main bundle.

### 1.4 Mobile Degradation
- **[GATE]** When `window.innerWidth < 768` OR `navigator.hardwareConcurrency < 4`, the scene must degrade:
  - Reduce polygon count by ≥50% (simplified hexagonal prism, no shadow slabs, no seam lines).
  - OR render a static fallback (text + SVG diagram of the hexagonal monolith with agent faces labeled).
- **[GATE]** When WebGL context is unavailable (no `WebGLRenderingContext`), render the static fallback exclusively — no canvas element in the DOM.
- **[TEST]** Agent 4 will test by simulating mobile viewport + low core count in devtools and confirming either reduced geometry or static fallback renders.

---

## 2. Accessibility Gates

### 2.1 Reduced Motion
- **[GATE]** When `prefers-reduced-motion: reduce` is active, the 3D scene must be FULLY disabled. No `requestAnimationFrame` loop, no WebGL context creation, no GSAP timeline.
- **[GATE]** The static fallback must render in its place: text descriptions of each agent face + an SVG diagram of the hexagonal monolith with the 6 agents labeled and the turn-cycle path drawn as a static sequence.
- **[GATE]** The traveling cycle-light (the one moving element) must not animate. It can render as a static highlight on the current turn's face if the cycle is paused, or be omitted entirely.
- **[TEST]** Agent 4 will set `prefers-reduced-motion: reduce` in devtools and confirm: no canvas, no rAF, static SVG + text present.

### 2.2 WebGL Context Loss
- **[GATE]** A `webglcontextlost` event listener must be registered on the canvas. On context loss:
  - The rAF loop must stop.
  - The scene must either restore (call `renderer.forceContextRestore()` and rebuild) or degrade to the static fallback.
  - No uncaught exceptions or console errors.
- **[GATE]** A `webglcontextrestored` event listener must be registered if restoration is attempted. On restore, the scene must rebuild geometries, materials, and shaders without page reload.
- **[TEST]** Agent 4 will simulate context loss via `canvas.getContext('webgl').getExtension('WEBGL_lose_context').loseContext()` and confirm graceful handling.

### 2.3 ARIA and Keyboard
- **[GATE]** The canvas element must have `aria-label` describing the scene: e.g., "3D monolith representing the Devin Autopilot multi-agent system — 6 agents as inscribed faces with a traveling cycle indicator."
- **[GATE]** The canvas must have `role="img"` (static scene) or `role="application"` (interactive orbit). If interactive, keyboard controls (arrow keys for orbit) must be documented in an `aria-describedby` element.
- **[GATE]** Keyboard focus must not be trapped by the canvas. Tab navigation must move past the canvas to the next focusable element (research paper content, nav controls).
- **[GATE]** All interactive 3D elements (orbit controls, agent-face click-to-expand) must have keyboard equivalents. Clicking an agent face to see detail must also be achievable via keyboard (focus + Enter).
- **[TEST]** Agent 4 will navigate the page with keyboard only and confirm: canvas is focusable or bypassed, all interactive features reachable, no focus trap.

---

## 3. Shader Quality Gates

### 3.1 GLSL Compilation
- **[GATE]** All GLSL shaders must compile without warnings on Chrome, Firefox, and Safari. No `GLSL` compiler warnings in the console.
- **[GATE]** Shaders must work on WebGL1 (Safari) AND WebGL2. No WebGL2-only extensions without a WebGL1 fallback path.
- **[TEST]** Agent 4 will open the site in Safari (or Safari Tech Preview) and check the console for shader compilation errors or warnings.

### 3.2 Fog Shader (Atmospheric Fog)
- **[GATE]** The fog shader must use the depth buffer (`gl_FragCoord.z` or a linearized depth value) for fog calculation — NOT fake fog (distance from camera origin in world space without depth perspective).
- **[GATE]** Fog density must be configurable via a uniform (`uFogDensity` or similar) so it can be adjusted per-section (thicker fog for deeper strata per Cycle 3 Idea 2).
- **[GATE]** Fog color must derive from `--monolith-black` (#0a0a0c) — the fog IS the void between structures.

### 3.3 Displacement Shader (Monolith Surface)
- **[GATE]** Surface displacement must be subtle — maximum 0.05 units in object space. The monolith must look like stone, not liquid. Displacement should suggest material texture, not deformation.
- **[GATE]** Displacement must be driven by a noise function (Perlin/Simplex) sampled at low frequency — no high-frequency noise that creates a "bumpy" or "grungy" look. The surface is smooth stone with barely-perceptible variation.
- **[GATE]** Displacement must be disabled in the mobile-degraded path (static or simplified geometry).

### 3.4 Color Grading Shader
- **[GATE]** Depth-based color grading must shift toward `--monolith-black` at depth and toward `--monolith-white` at the surface. The accent color (#22d3ee) must NOT be applied via the grading shader — it is reserved for the traveling cycle-light only.
- **[GATE]** No post-processing bloom or glow on the monolith itself. Bloom is permitted ONLY on the cycle-light point (single source) to make it read as illumination, not as a material property.

### 3.5 Transition Shader (Section Wipes)
- **[GATE]** If transition wipes are used between research paper sections (Cycle 2 Idea 1 — orbiting between inscribed faces), the wipe must be a camera move, not a screen-space effect. The camera rotates to the next face; no fade-to-black, no slide animation.
- **[GATE]** Transition duration: 800-1200ms. Not instant (jarring), not slow (boring). The move should feel like a deliberate camera dolly, not a UI animation.

---

## 4. Art Direction Gates

### 4.1 Stillness Principle (Critical Design Principle)
- **[GATE]** Only ONE moving element at a time in the 3D scene. Per Agent 7's top pick (Cycle 3 Idea 1), the single moving element is the traveling cycle-light. The monolith geometry is absolutely static.
- **[GATE]** The only exception to "one moving element" is the camera orbit (user-initiated) and the section transition (user-initiated navigation). No ambient idle animation on the geometry — no breathing, no floating, no rotation-without-input.
- **[GATE]** Self-restart visualization (Cycle 3 Idea 4) — the 0.5° micro-rotation — must happen ONCE per 10-cycle boundary, not continuously. It is a discrete event, not an animation loop.
- **[GATE]** Crash detection visualization — the red flicker — must happen ONCE on threshold breach, not pulse continuously. It is an alarm, not a state.

### 4.2 Color Restraint
- **[GATE]** The accent color (#22d3ee, electric cyan) must appear in ≤3 places in the 3D scene:
  1. The traveling cycle-light (primary use).
  2. The brain-agent filament (Cycle 3 Idea 3 — thin connecting line between face and shadow-slab).
  3. The rim-light brightening on the active agent face (when the cycle-light lands).
- **[GATE]** The crash-detection red flicker is the ONLY non-cyan, non-monochrome color permitted in the entire site. It must appear at most once per session (on threshold breach) and last ≤500ms.
- **[GATE]** No gradients on the monolith surface. The surface is flat monochrome (white-on-black) with depth-based fog providing the only tonal variation.

### 4.3 Negative Space
- **[GATE]** Negative space (empty black void) must occupy ≥40% of the viewport at all times. The monolith does not fill the screen — it is surrounded by void. This is the "silence between structures" from the art direction brief.
- **[GATE]** The camera framing must keep the monolith occupying ≤50% of the viewport width. The structure is monumental because of its context (void), not its size relative to the frame.
- **[TEST]** Agent 4 will take a screenshot of the idle scene and measure the percentage of pure-black pixels. Must be ≥40%.

### 4.4 Physics Feel
- **[GATE]** If cannon-es physics is applied to cursor interaction (gravitational pull on the cycle-light or camera), the physics must feel HEAVY and DELIBERATE — not bouncy, not elastic.
- **[GATE]** No `easeOutBounce`, no `easeOutElastic`, no spring physics with high restitution. Permitted easings: `easeInOutCubic`, `easeOutQuart`, `power2.inOut` (GSAP), or linear.
- **[GATE]** Objects that "settle into place" (per the project prompt) must approach their rest position with critically-damped motion — overshoot ≤2% of target distance, settle time ≤500ms.

---

## 5. Idea-Specific Gates

### 5.1 Hexagonal Monolith (Cycle 3, Idea 1 — Top Pick)
- **[GATE]** The central structure is a hexagonal prism with 6 vertical faces, each dedicated to one agent (1, 2, 3, 4, 6, 7). Face order around the prism must follow a logical grouping: 3 (Director) and 4 (Quality) on opposite faces, 1 (Coder) and 2 (Reviewer) adjacent, 6 (Documentation) and 7 (Ideas) adjacent.
- **[GATE]** Each face must display the agent's name, role, and purpose as carved inscription (text rendered on the geometry surface, not as HTML overlay).
- **[GATE]** The traveling cycle-light must visit faces in TURN_ORDER sequence: [3, 1, 2, 1, 2, 3, 1, 2, 1, 2, 4, 6, 7]. The light lands on a face, lingers 800-1200ms, then moves to the next.
- **[GATE]** Concurrent pairs must split the light: when the turn is Agent 1, the light splits into 3 points landing on faces 1, 2, and 4 simultaneously. When the turn is Agent 6, the light splits into 2 points on faces 6 and 7. The light merges back to a single point on non-concurrent turns.
- **[GATE]** The cycle-light must be the ONLY animated element during idle (no user interaction). The geometry, camera, and materials are static.

### 5.2 Geological Strata (Cycle 3, Idea 2)
- **[GATE]** If vertical strata are implemented, each research paper section (Abstract, Methodology, Architecture, Results, Discussion) must be a horizontal layer at a distinct depth. Abstract = top (capstone), Discussion = bottom (foundation slab).
- **[GATE]** Fog density must increase with depth — deeper layers are more obscured. The fog shader's `uFogDensity` uniform must be set per-layer, increasing as the camera descends.
- **[GATE]** Scroll must drive camera descent (not page scroll). The camera moves through the structure; the page itself does not scroll in the 3D-active state. On mobile/static fallback, page scroll is used with fog-gradient dividers between sections.

### 5.3 Shadow Architecture (Cycle 3, Idea 3)
- **[GATE]** Each agent face must have a translucent shadow-slab offset 0.5 units behind it, representing the brain session. The shadow-slab must use a lower opacity material (≤30% alpha) and a desaturated color (shifted toward gray, not pure white).
- **[GATE]** A thin cyan filament (≤0.02 units wide) must connect each shadow-slab to its corresponding face. This is one of the ≤3 permitted accent-color uses.
- **[GATE]** Shadow slabs must NOT receive the traveling cycle-light. They are structurally present but never illuminated by the cycle. This reinforces "brains compose, agents act."

### 5.4 Scars in the Stone (Cycle 3, Idea 4)
- **[GATE]** Self-restart visualization: 10 faint horizontal seam lines across the monolith, spaced evenly. Seams must be ≤0.01 units deep (barely visible geometry detail). The structure is continuous across seams — no visible gap.
- **[GATE]** Crash detection visualization: 1 hairline fracture at the base of the monolith. The fracture must be ≤0.005 units wide and only visible when the cycle-light passes near it (catches the light via rim illumination).
- **[GATE]** Both features must be absent in the mobile-degraded path (simplified geometry has no seams or fractures).

### 5.5 Inscribed Architecture (Cycle 2, Idea 1)
- **[GATE]** If the research paper text is inscribed on the monolith faces (not separate HTML), the text must be rendered as geometry (extruded text meshes or SVG-textures mapped onto faces), NOT as HTML overlays positioned in 3D space.
- **[GATE]** Text must be legible at the default camera distance. If the user must orbit closer to read, a visual cue (subtle rim brightening) must indicate readable faces.

### 5.6 Escher Cycle (Cycle 2, Idea 2)
- **[GATE]** If the turn-cycle is rendered as a Penrose staircase, the impossible geometry must be achieved through camera angle, not through non-manifold geometry. The staircase must look impossible from the default view but resolve to a plausible 3D structure from other angles.
- **[GATE]** Each of the 13 steps must be hover-interactive (highlight the acting agent) and click-interactive (expand agent detail). This interaction must work via keyboard as well as mouse.

### 5.7 Cavern Resonance (Cycle 2, Idea 3 — Sound)
- **[GATE]** Sound is Phase 4 scope, but if any audio is implemented in Phase 1 (ambient drone), it must be muted by default with an opt-in toggle.
- **[GATE]** The toggle must persist to `localStorage` and respect the mute state on page reload.
- **[GATE]** No audio may auto-play under any circumstances. The Web Audio API context must be created only after user interaction (the toggle click).

---

## 6. Build & Integration Gates

- **[GATE]** `npm run build` must exit 0 with the 3D scene code included.
- **[GATE]** `npm run build.types` must exit 0 — no TypeScript errors in the monolith/ or research/ modules.
- **[GATE]** `npm run lint` must exit 0 — no ESLint errors or warnings.
- **[GATE]** The 3D scene must not break SSR. The canvas must not render during SSR (no `window`/`document` access at module top level). All browser-only code must be inside `useVisibleTask$` or client-only guards.
- **[GATE]** The site must still render meaningful content with JavaScript disabled — the static fallback (text + SVG) must be in the SSR output, replaced by the canvas only after hydration.

---

## Acceptance Checklist (Agent 4 will run post-Phase-1)

- [ ] PASS/FAIL: 60fps sustained on desktop (p95 frame time ≤16.67ms)
- [ ] PASS/FAIL: 30fps sustained on mobile (p95 frame time ≤33.33ms)
- [ ] PASS/FAIL: GPU memory ≤50MB
- [ ] PASS/FAIL: 3D scene lazy-loaded (not in SSR bundle)
- [ ] PASS/FAIL: Mobile degradation active (viewport <768px or cores <4)
- [ ] PASS/FAIL: `prefers-reduced-motion` renders static fallback, no rAF
- [ ] PASS/FAIL: WebGL context loss handled gracefully
- [ ] PASS/FAIL: Canvas has `aria-label`, no keyboard trap
- [ ] PASS/FAIL: All GLSL compiles without warnings (Chrome + Safari)
- [ ] PASS/FAIL: Fog shader uses depth buffer
- [ ] PASS/FAIL: Displacement ≤0.05 units, low-frequency noise
- [ ] PASS/FAIL: Only one moving element (cycle-light) during idle
- [ ] PASS/FAIL: Accent color in ≤3 places
- [ ] PASS/FAIL: Negative space ≥40% of viewport
- [ ] PASS/FAIL: No bouncy/elastic physics easing
- [ ] PASS/FAIL: Hexagonal prism with 6 agent faces, inscribed text
- [ ] PASS/FAIL: Cycle-light follows TURN_ORDER sequence
- [ ] PASS/FAIL: Concurrent pairs split the light correctly
- [ ] PASS/FAIL: Shadow slabs present, translucent, no cycle-light
- [ ] PASS/FAIL: Seam lines (10) and fracture (1) present on desktop
- [ ] PASS/FAIL: `npm run build` exits 0
- [ ] PASS/FAIL: `npm run build.types` exits 0
- [ ] PASS/FAIL: `npm run lint` exits 0
- [ ] PASS/FAIL: SSR renders static fallback (no canvas in SSR output)
- [ ] PASS/FAIL: Site renders with JS disabled (static content visible)
