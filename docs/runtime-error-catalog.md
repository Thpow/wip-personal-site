# Runtime Error Catalog — The 10 Most Likely First-Render Failures

> *28 cycles of write-only work means 28 cycles of code that has never executed in a browser. Static analysis predicts no type errors and 8/8 audit checks pass — but runtime errors can only appear when the browser runs the code. This catalog is the triage flowchart for the first render.*

## How to Use This Catalog

1. See a symptom on first render.
2. Find the matching entry below.
3. Follow the check → fix sequence.
4. Reload and re-verify.

---

## 1. Black Canvas, No Loading State

**Symptom**: The hero section shows a black rectangle with no canvas content and no loading pulse.

**Check**: Open DevTools → Elements. Inspect the `monolith-scene` wrapper div. Does it have `height: 100vh`? The canvas inherits its height from the wrapper.

**Root cause**: If the wrapper div has zero height, the canvas has zero height, and Three.js renders nothing.

**Fix**: Verify `monolith-scene.tsx` line 250 sets `height: "100vh"` on the wrapper. If a CSS reset or parent container overrides it, add `min-height: 100vh` to the wrapper style.

---

## 2. Loading State Never Clears

**Symptom**: The cyan loading pulse at the bottom of the hero section persists indefinitely. The 3D scene never appears.

**Check**: Open DevTools → Console. Look for a dynamic import error: `Failed to fetch dynamically imported module` or `Cannot find module 'three'`.

**Root cause**: The `createScene` function in `scene.ts` is dynamically imported. If `three` is not installed (`node_modules/three` missing), the import fails and the loading state never resolves.

**Fix**: Run `npm install` in the project root. The `three`, `gsap`, and `cannon-es` packages must be installed before the scene can initialize.

---

## 3. Hydration Mismatch Warning

**Symptom**: Console shows `Hydration mismatch` or `Qwik: hydration mismatch` warnings.

**Check**: Look for warnings about `FaceNav` or `ScrollProgress` rendering different content on server vs. client.

**Root cause**: This is **expected and benign**. FaceNav and ScrollProgress use `useVisibleTask$` which only runs on the client. The server renders them as empty/minimal; the client renders the full UI. Qwik handles this gracefully — the warning is informational, not an error.

**Fix**: No fix needed. The warning is expected behavior for client-only components in Qwik.

---

## 4. Name TextGeometry Fails to Render

**Symptom**: The 3D monolith renders, but the "THOMAS POWELL" name inscription is not visible on the Director face.

**Check**: Open DevTools → Network tab. Look for a request to `/fonts/helvetiker_bold.typeface.json` (status 404) followed by a request to `unpkg.com/three@0.169.0/...` (may fail due to CORS or network).

**Root cause**: The font file is not in `public/fonts/`. The CDN fallback in `materials.ts` may also fail if the network is restricted or CORS is blocked.

**Fix**: Copy the font locally:
```bash
mkdir -p public/fonts && cp node_modules/three/examples/fonts/helvetiker_bold.typeface.json public/fonts/
```
The site degrades gracefully without the name — the monolith itself renders. But the inscription is the signature detail.

---

## 5. Sound Doesn't Enable

**Symptom**: Clicking the sound toggle (carved glyph) does nothing. No audio plays.

**Check**: Open DevTools → Console. Look for `AudioContext` or `autoplay` warnings. Check if the `AudioContext` state is "suspended".

**Root cause**: Browser autoplay policy requires a user gesture to start audio. The sound toggle click IS the gesture, but if the `AudioContext` is not resumed within the click handler, the browser blocks it.

**Fix**: Verify `sound.ts` calls `audioContext.resume()` inside the click handler (not in a setTimeout or async callback). The resume must happen synchronously within the user gesture event.

---

## 6. Physics Body Doesn't Settle

**Symptom**: The cycle-light doesn't respond to mouse movement, or it drifts off-screen and never returns.

**Check**: Open DevTools → Console. Look for cannon-es errors. Add a `console.log(world.bodies.length)` in the animation loop to verify the physics world is stepping.

**Root cause**: `cannon-es` `world.step(dt)` must be called every frame in the animation loop. If it's missing or called with `dt = 0`, the physics body won't update.

**Fix**: Verify `physics.ts` calls `world.step(fixedTimeStep, lastTime)` inside the `requestAnimationFrame` loop in `scene.ts`. The fixed time step should be `1/60`.

---

## 7. SVG Diagrams Invisible

**Symptom**: The research paper section renders, but the SVG diagrams (topology, turn cycle, concurrent pairs) are not visible.

**Check**: Open DevTools → Elements. Find the `<svg>` elements. Check: (a) `viewBox` attribute exists and matches the coordinate system, (b) `stroke-opacity` is ≥ 0.3, (c) the SVG has explicit `width` and `height` or CSS sizing.

**Root cause**: SVGs without a `viewBox` may render at 0×0. Strokes with `opacity: 0` are invisible. SVGs without sizing may collapse.

**Fix**: Verify each SVG component (`topology.tsx`, `turn-cycle.tsx`, `concurrent-pairs.tsx`) has a `viewBox` matching its coordinate system and stroke opacity ≥ 0.3.

---

## 8. FaceNav Squares Not Highlighting

**Symptom**: The 7 navigation squares on the right edge render, but the active square doesn't highlight as you scroll through sections.

**Check**: Open DevTools → Console. Add `console.log(entries)` inside the IntersectionObserver callback in `face-nav.tsx`. Scroll and verify entries are firing.

**Root cause**: The `rootMargin: "-45% 0px -45% 0px"` creates a thin horizontal band in the viewport center. If sections are shorter than 10% of the viewport, they may never enter this band.

**Fix**: Verify `face-nav.tsx` line 48 uses `rootMargin: "-45% 0px -45% 0px"`. If sections are very short, try `-40% 0px -40% 0px` to widen the trigger band. Verify all 7 section IDs exist in the DOM (`hero`, `profile`, `experience`, `projects`, `skills`, `contact`, `research`).

---

## 9. Scroll Progress Bar Not Updating

**Symptom**: The thin cyan line on the left edge stays at 0% regardless of scroll position.

**Check**: Open DevTools → Console. Add `console.log(state.progress)` inside the scroll handler in `scroll-progress.tsx`. Scroll and verify the value changes.

**Root cause**: `useVisibleTask$` with `strategy: "intersection"` only fires when the component enters the viewport. If the scroll progress component is positioned fixed (always visible), it may not trigger the intersection strategy correctly.

**Fix**: Verify `scroll-progress.tsx` uses `useVisibleTask$` with `strategy: "intersection"` (line 36). If the task isn't firing, try removing the strategy argument (defaults to `idle`) or using `strategy: "document-ready"`.

---

## 10. Footer Shows "Cycle 0" or "undefined"

**Symptom**: The footer inscription reads "Cycle 0 complete" or "Cycle undefined complete" instead of "Cycle 28 complete."

**Check**: Open DevTools → Console. Look for import errors related to `log-excerpt`. Verify `BUILD_CYCLE` is exported.

**Root cause**: The `BUILD_CYCLE` export from `~/data/log-excerpt` may fail to import if the path alias `~` is not resolved, or if the export is missing.

**Fix**: Verify `src/data/log-excerpt.ts` line 53 exports `BUILD_CYCLE`:
```typescript
export const BUILD_CYCLE = 28;
```
And `src/routes/index.tsx` line 7 imports it:
```typescript
import { BUILD_CYCLE } from "~/data/log-excerpt";
```
If the `~` alias fails, check `tsconfig.json` and `vite.config.ts` for path mapping.

---

## Triage Priority

If multiple errors appear on first render, address in this order:

1. **#2 (npm install)** — without dependencies, nothing works
2. **#1 (canvas height)** — without the canvas, the hero is empty
3. **#4 (font)** — the name inscription is the signature detail
4. **#8 (FaceNav)** — navigation is core UX
5. **#7 (SVGs)** — research paper diagrams are content
6. **#5, #6, #9, #10** — secondary features
7. **#3 (hydration)** — benign, ignore

The first render will likely produce 1–3 of these. The catalog is the fastest path from "something's wrong" to "here's the fix."
