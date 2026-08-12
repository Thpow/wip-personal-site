# Research Module — Multi-Agent Research Paper

The research paper is the site's conceptual core: the Devin Autopilot multi-agent system presented as an academic paper, rendered as an immersive 3D research document. The paper is both the content and the self-referential thesis — the system describes itself.

## Files

### Layout
- `paper-layout.tsx` — Grid layout with TOC sidebar (200px) + content (1fr). IntersectionObserver tracks active section for TOC highlighting. TOC active link uses cyan (navigation feedback — justified). `id="research"` for FaceNav targeting. Subsection headings and "CONTENTS" label are white (desaturated from cyan).

### SVG Diagrams (informational accent — cyan strokes justified)
- `topology.tsx` — SVG diagram of the 7-agent topology. Nodes positioned in a hexagonal arrangement. Hover/selected states. Legend panel. Cyan strokes are the informational accent (the diagrams ARE the data).
- `turn-cycle.tsx` — SVG diagram of the turn cycle (how agents take turns). Hover info panel. Legend. Cyan strokes.
- `concurrent-pairs.tsx` — SVG diagram of concurrent agent pairs. Hover states. Legend markers. Cyan strokes.

### Paper Sections
- `abstract.tsx` — Paper abstract. Kinetic headline (variable font weight recession). Section number in cyan. `renderHookWords()` returns `<span>` elements (phrasing content — valid inside `<p>`).
- `methodology.tsx` — Methodology section. Section number in cyan.
- `results.tsx` — Results section. Section number in cyan.
- `discussion.tsx` — Discussion section. Section number in cyan. Subsection labels are white (desaturated).
- `agent-detail.tsx` — Agent selector (6 buttons) + detail view. Filter buttons use cyan for active state (interactive feedback — justified). Shows agent role, description, brain-agent pairing.

### Appendix
- `log-inscription.tsx` — Team log excerpt + build manifest. Two `<details>` elements (collapsible). Timestamp highlight in cyan (informational syntax highlighting — justified). The log excerpt is a curated static snapshot. The build manifest shows module inventory, import graph, orphan check, and build prediction. **Note**: The outer container was changed from `<pre>` to `<div>` to fix an HTML nesting violation (Qwik enforces HTML spec — `<pre>` only accepts phrasing content, not `<div>`).

### Barrel
- `index.ts` — Exports all 10 research components.

## Key Patterns
- **TOC sidebar**: IntersectionObserver updates `activeSection` in a `useStore`. The store's initial value is `PAPER_SECTIONS[0]!.id` (deterministic — no hydration mismatch).
- **SVG diagrams**: All use `useStore` for hover/selected state. Initial values are `null` (no active state on server — no hydration mismatch). Cyan strokes are the informational accent.
- **`<details>` for appendices**: Collapsible elements allow the user to control density. The print stylesheet forces them open.
- **HTML nesting compliance**: Qwik's JSX runtime enforces HTML spec nesting at render time. The `<pre>` → `<div>` fix in `log-inscription.tsx` was a critical runtime fix.

## Dependencies
- Data from `~/data/agents`, `~/data/paper`, `~/data/log-excerpt`, `~/data/build-manifest`
- `BUILD_CYCLE` and `BUILD_DATE` from `~/data/log-excerpt`

## Art-Direction Notes
- The research paper is the site's self-referential thesis: the system describes itself, and the description is displayed within the system's output.
- The SVG diagrams are the informational accent — cyan strokes are justified because the diagrams ARE the data.
- The TOC active link is navigation feedback — cyan is justified.
- The log inscription is a "carved inscription" — a fossil of the system's history, not a live feed.
- The build manifest as appendix is the 5th element of the self-referential loop (footer + cycle-light scroll-slowing + log inscription + build timestamp + build manifest).
