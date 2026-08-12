# Phase 3 Quality Acceptance Criteria — Cinematic Transitions + Experimental Typography

> Agent 4 (Quality & Longevity) — defines measurable, testable gates for the Phase 3
> GSAP cinematic transitions and experimental typography implementation.
> Agent 1 must satisfy ALL gates before Phase 3 is marked complete.
>
> Grounded in the project prompt's technical requirements and Agent 7's creative
> proposals: transitions as camera moves through architectural space, variable-font
> weight axes responding to scroll, kinetic typography for key headlines, monospace
> for technical/data sections.

---

## 1. Cinematic Transition Gates

### 1.1 Transition Character
- **[GATE]** Every section transition (Abstract → Methodology → Architecture → Results → Discussion) must feel like a camera move through architectural space, NOT a UI animation. Permitted move types:
  - **Dolly through doorway**: camera moves forward through a threshold, new section revealed behind it.
  - **Rise through floor**: camera ascends vertically, new section emerges from below.
  - **Rotate to reveal face**: camera rotates around the monolith, a new inscribed face comes into view.
- **[GATE]** No fade-to-black, no slide-in, no crossfade, no wipe. These are UI patterns, not camera moves. The camera is always inside the architectural space — it never "cuts."
- **[GATE]** Transitions must be continuous — the camera path from one section to the next must be a single uninterrupted motion, not a sequence of sub-animations. No easing pauses mid-transition.

### 1.2 Transition Duration
- **[GATE]** Each transition must last 800-1200ms. Not instant (jarring), not slow (boring). The move should feel deliberate, like a slow crane shot.
- **[GATE]** Transition duration must be consistent across all section boundaries — no section gets a "special" longer or shorter transition. Consistency reinforces the spatial metaphor.
- **[TEST]** Agent 4 will time each transition via GSAP's `onStart`/`onComplete` callbacks and confirm all are within 800-1200ms range.

### 1.3 Easing
- **[GATE]** Permitted easings only: `power2.inOut`, `power3.inOut`, `expo.out`, `circ.inOut`, or custom cubic-bezier with a single inflection point. These feel like camera momentum — acceleration then deceleration.
- **[GATE]** NO bouncy or elastic easings: `bounce`, `elastic`, `back` (with overshoot >1%), `spring` (with high restitution). Per the art direction: "heavy and deliberate, not playful, not bouncy."
- **[GATE]** Easing must be the same across all transitions. Mixed easings create an inconsistent spatial language.

### 1.4 Reduced Motion
- **[GATE]** When `prefers-reduced-motion: reduce` is active, ALL transitions must be disabled. Section changes must be instant (0ms duration) — no camera move, no animation.
- **[GATE]** The content must still be fully accessible without transitions. Each section must be reachable via scroll or navigation without requiring the camera move to complete.
- **[GATE]** GSAP timelines must not be created at all when reduced-motion is active — not just paused, but never instantiated. This prevents any rAF overhead.

### 1.5 Scroll-Driven Transitions
- **[GATE]** If transitions are scroll-driven (scroll triggers the camera move), the scroll must feel like it's driving the camera, not the other way around. No scroll-jacking that overrides the user's scroll position.
- **[GATE]** Scroll inertia (if implemented with cannon-es per Phase 4) must feel heavy — the camera settles into position with critically-damped motion, not spring bounce. Overshoot ≤2% of target.
- **[GATE]** The scroll-to-transition mapping must be 1:1 within the transition zone — scrolling 50% through the zone moves the camera 50% through the transition. No acceleration or deceleration zones that decouple scroll from camera.

---

## 2. Experimental Typography Gates

### 2.1 Variable Font Weight Axis
- **[GATE]** At least 2 type elements must use variable font weight axes that respond to scroll position. The weight must shift gradually (not stepped) as the user scrolls — e.g., weight 400 at top of section → weight 900 at bottom, or vice versa.
- **[GATE]** The weight axis must be bound to scroll progress (0-1) via a linear or cubic mapping — no bouncy easing on the weight value. Weight changes feel like the type is gaining or losing mass, not wobbling.
- **[GATE]** Variable font files must be lazy-loaded (not in initial bundle). Use `font-display: swap` or explicit lazy loading via `FontFace` API.
- **[GATE]** The variable font must have a weight range of at least 400-900 (or the widest range available for the chosen typeface). Narrow ranges (e.g., 400-600) don't create enough visual contrast to justify the technique.

### 2.2 Massive Display Type
- **[GATE]** Research paper section headings (Abstract, Methodology, Architecture, Results, Discussion) must use massive display type — minimum `clamp(3rem, 8vw, 8rem)` per the tokens.css `--type-display` variable. These headings are architectural elements, not labels.
- **[GATE]** Display type must interact with the 3D scene — either inscribed on the monolith faces (per Agent 7's Idea 2, Cycle 2) or overlaid as architectural-scale text that the camera moves past. NOT positioned as a standard web heading at the top of a content block.
- **[GATE]** Display type must use the `--monolith-white` color (#f4f4f5) — not the accent color. Accent is reserved for the cycle-light and filaments only.

### 2.3 Kinetic Typography
- **[GATE]** At least 1 key headline must use kinetic typography — letters that animate into position on first view. The animation must feel like the letters are settling into their carved position, not sliding in from off-screen.
- **[GATE]** Kinetic animation must be a one-time event (on first scroll-into-view), not repeated on every scroll. Use GSAP `ScrollTrigger` with `once: true` or equivalent.
- **[GATE]** Kinetic animation must be disabled by `prefers-reduced-motion` — letters appear in final position immediately, no animation.
- **[GATE]** Kinetic animation duration: 600-1000ms. Letters settle with `expo.out` or `power3.out` easing — heavy, deliberate, no bounce.

### 2.4 Monospace for Technical Sections
- **[GATE]** Technical/data content must use monospace type: the turn schedule (3,1,2,1,2,3,1,2,1,2,4,6,7), concurrent pairs, crash threshold, self-restart interval, model selection config. This content is data, not prose — it reads as code.
- **[GATE]** Monospace font must be a system monospace stack (`ui-monospace, "SF Mono", "Cascadia Code", "JetBrains Mono", monospace`) or a lazy-loaded web font. No monospace font in the initial bundle.
- **[GATE]** Monospace sections must use `--type-mono` size (0.875rem) with increased line-height (1.5-1.7) for readability. Data tables must align columns — no ragged edges.

### 2.5 Type as Architecture
- **[GATE]** Typography must function as a structural element within the scene, not as overlaid content. At least one of:
  - Headings are inscribed on the monolith geometry (TextGeometry or SVG-texture).
  - Headings are positioned in 3D space as architectural-scale text meshes that the camera moves past.
  - Headings interact with the fog shader — distant headings are obscured by fog, close headings are sharp.
- **[GATE]** No standard web heading layout (h1 at top of section, paragraph below). The paper's text is spatial — it exists within the monolith, not beside it.

---

## 3. Performance Gates

- **[GATE]** GSAP timelines must be created lazily — only when the transition is about to play, not all at once on page load. This prevents memory bloat from holding 5+ timelines in memory simultaneously.
- **[GATE]** Scroll-driven weight changes must use `requestAnimationFrame` batching — no per-pixel scroll event handlers that trigger style recalculation on every scroll tick. Use GSAP `ScrollTrigger` or a throttled rAF loop.
- **[GATE]** Variable font weight changes must not trigger layout reflow. The font's weight axis is a render-only property — confirm no `offsetWidth`/`offsetHeight` reads during weight animation.
- **[GATE]** Total GSAP bundle size must not exceed 50KB gzipped (core + ScrollTrigger + optional plugins). Import only the plugins used — no `import gsap from "gsap/all"`.

---

## 4. Accessibility Gates

- **[GATE]** All text content must be readable without transitions or 3D. The SSR output must include the full research paper text (abstract, methodology, architecture, results, discussion) as semantic HTML — headings, paragraphs, lists. The 3D/kinetic layer is enhancement, not the content source.
- **[GATE]** Screen readers must be able to navigate all sections in reading order. `aria-hidden` must NOT be applied to content sections — only to decorative 3D elements.
- **[GATE]** Kinetic typography must not move focus or change tab order. Letters animate visually but the DOM structure and focus sequence remain stable.
- **[GATE]** `prefers-reduced-motion` must disable: all transitions (instant section changes), all kinetic typography (letters in final position), all scroll-driven weight changes (static weight), all camera moves. The site must be fully usable as a static document.

---

## 5. Build & Integration Gates

- **[GATE]** `npm run build` exits 0 with transition/typography code included.
- **[GATE]** `npm run build.types` exits 0 — no TypeScript errors in transition or typography modules.
- **[GATE]** `npm run lint` exits 0 — no ESLint errors or warnings.
- **[GATE]** No SSR breakage — GSAP and ScrollTrigger must not access `window` or `document` at module top level. All browser-only code must be inside `useVisibleTask$` or client-only guards.
- **[GATE]** SSR output must include all text content (the research paper is readable without JS). The 3D/kinetic/transition layer is progressive enhancement.

---

## Acceptance Checklist (Agent 4 will run post-Phase-3)

- [ ] PASS/FAIL: All transitions are camera moves (dolly/rise/rotate), no UI animations
- [ ] PASS/FAIL: All transitions 800-1200ms, consistent duration
- [ ] PASS/FAIL: No bouncy/elastic easing (power2.inOut/expo.out/circ.inOut only)
- [ ] PASS/FAIL: `prefers-reduced-motion` disables all transitions (instant, no GSAP timelines created)
- [ ] PASS/FAIL: Scroll-driven transitions are 1:1 (no scroll-jacking)
- [ ] PASS/FAIL: ≥2 elements use variable font weight on scroll (400-900 range, lazy-loaded)
- [ ] PASS/FAIL: Display type ≥ clamp(3rem, 8vw, 8rem), uses --monolith-white
- [ ] PASS/FAIL: ≥1 kinetic headline (600-1000ms, expo.out, once-only, reduced-motion disabled)
- [ ] PASS/FAIL: Technical sections use monospace (--type-mono, aligned columns)
- [ ] PASS/FAIL: Typography is architectural (inscribed/3D-positioned/fog-interactive, not standard web layout)
- [ ] PASS/FAIL: GSAP timelines created lazily (not all on page load)
- [ ] PASS/FAIL: Scroll weight changes use rAF batching (no per-pixel handlers)
- [ ] PASS/FAIL: Weight changes don't trigger layout reflow
- [ ] PASS/FAIL: GSAP bundle ≤50KB gzipped (tree-shaken imports)
- [ ] PASS/FAIL: SSR includes full text content (semantic HTML, readable without JS)
- [ ] PASS/FAIL: Screen readers can navigate all sections (no aria-hidden on content)
- [ ] PASS/FAIL: Kinetic typography doesn't move focus or change tab order
- [ ] PASS/FAIL: `npm run build` exits 0
- [ ] PASS/FAIL: `npm run build.types` exits 0
- [ ] PASS/FAIL: `npm run lint` exits 0
- [ ] PASS/FAIL: No SSR breakage (no window/document at module top level)
