# PLAN.md — Digital Monolith: Devin Autopilot Research Paper

> **SCOPE PIVOT**: The portfolio is abandoned. The site is now a single immersive 3D research paper about the Devin Autopilot multi-agent system.
> Art direction: **Digital Monolith / Impossible Architecture** — Escher meets Brutalism.
> Stillness over motion. Spectacle used deliberately. Deep black, cold white, one accent.

---

## PRESERVED DEPLOYMENT CONFIG (do NOT touch)

- `package.json` — scripts (`build`, `dev`, `deploy`, `serve`, `preview`, `verify`, `test`, `test.smoke`, `fix-worker`), engine constraints, qwik devDependencies
- `vite.config.ts` — `qwikCity()`, `qwikVite()`, `tsconfigPaths`, `base: '/'`, `errorOnDuplicatesPkgDeps`
- `adapters/cloudflare-pages/vite.config.ts` — `cloudflarePagesAdapter({ ssg: { include: ["/*"] } })`, SSR input `./src/entry.cloudflare-pages.tsx`
- `wrangler.toml` — `wip-personal-site`, `compatibility_date = "2024-08-21"`, flags `nodejs_compat`, `nodejs_als`
- `tsconfig.json` — path alias `~/* -> ./src/*`, jsx `react-jsx` @builder.io/qwik, `strict: true`
- `src/entry.{cloudflare-pages,ssr,dev,preview}.tsx` — Qwik entry points

New deps: `three`, `gsap`, `cannon-es` in `dependencies` (NOT devDependencies — `errorOnDuplicatesPkgDeps` blocks duplicates). `@types/three` in `devDependencies` only.

---

## PHASE 0 — FOUNDATION

**Goal:** Clean slate, deps installed, monolith stubs + research paper placeholders, design tokens, build passes.

### File targets
- **Wipe** all 29 legacy files under `src/components/**` (about/, ascii/, contact/, dna/, education/, experience/, hero/, layout/, liquid/, navigation/, projects/, research/, router-head/, sections/*).
- **Wipe** all 4 legacy files under `src/styles/**` (animations.css, neumorphism.css, tokens.css, tokens.spec.ts).
- **Install** `three`, `gsap`, `cannon-es` into `dependencies`; `@types/three` into `devDependencies`.
- **Create** `src/components/monolith/{scene,shaders,camera,materials}.ts` — stubs, each with at least one export.
- **Create** `src/components/research/{paper-layout,topology,turn-cycle,concurrent-pairs,agent-detail,abstract,methodology,results,discussion}.tsx` — minimal Qwik `component$` placeholders rendering a `<section>` with their name.
- **Overwrite** `src/styles/tokens.css` — Digital Monolith palette: `--monolith-black:#0a0a0c`, `--monolith-white:#f4f4f5`, `--monolith-accent:#22d3ee`, plus type scale (display/heading/body/mono), spacing rhythm, z-index layers.
- **Create** `src/styles/global.css` — base reset, `body { background: var(--monolith-black); color: var(--monolith-white); }`, font stack (system sans + monospace), `@media (prefers-reduced-motion: reduce)` scaffold.
- **Wire** `src/routes/index.tsx` — render research paper container (`PaperLayout`) + monolith 3D scene mount point.
- **Link** `src/root.tsx` — import `~/styles/global.css`.
- **Enrich** `src/data/agents.ts` — add 5 missing spec exports:
  - `SELF_RESTART` — every 10 cycles, process re-execs with latest code
  - `CRASH_THRESHOLD` — 5 consecutive crashes → bulk restart; if continues → abort with diagnostic report
  - `MODEL_SELECTION` — opus/sonnet bootstrap cycle → GLM; credit fallback mid-cycle; rate-limit backoff with retry
  - `BRAIN_AGENT_PAIRING` — each agent has a paired brain ACP session that composes instructions
  - `SHARED_TEAM_LOG` — all agents read/write `team_log.md`; brains read last N characters

### Acceptance criteria
- [ ] `npm run build` exits 0
- [ ] `npm run build.types` passes
- [ ] `npm run lint` passes
- [ ] No legacy files remain under `src/components/**` or `src/styles/**`
- [ ] `three`/`gsap`/`cannon-es` in `dependencies` only; `@types/three` in `devDependencies` only
- [ ] `agents.ts` exports `SELF_RESTART`, `CRASH_THRESHOLD`, `MODEL_SELECTION`, `BRAIN_AGENT_PAIRING`, `SHARED_TEAM_LOG`

---

## PHASE 1 — 3D SCENE

**Goal:** Three.js impossible architecture presenting the 6-agent system as monumental geometric forms.

### File targets
- `src/components/monolith/scene.ts` — scene graph: 6 agents as monumental geometric forms (monoliths), recursive staircase for turn cycle, self-folding structures for concurrent pairs, subtle orbit controls, fog
- `src/components/monolith/shaders.ts` — GLSL: atmospheric fog, depth-based color grading, displacement on agent-monolith surfaces, transition wipes between paper sections
- `src/components/monolith/camera.ts` — cinematic intro camera move (GSAP dolly), idle slow orbit
- `src/components/monolith/materials.ts` — ShaderMaterial wrappers, cold-white surfaces + cyan emissive accents on agent forms
- Mount via `useVisibleTask$` in paper layout; `prefers-reduced-motion` → static fallback; mobile → simplified geometry

### Acceptance criteria
- [ ] 60fps on desktop
- [ ] Renders without crash on mobile (degraded geometry)
- [ ] `prefers-reduced-motion: reduce` → static fallback, no rAF loop
- [ ] Scene lazy-loaded (not in initial SSR bundle)
- [ ] 6 agent forms visible as monumental geometric structures

---

## PHASE 2 — RESEARCH PAPER CONTENT

**Goal:** SVG diagrams, all 6 agents documented, theory craft sections, interactive diagrams.

### File targets
- `src/components/research/topology.tsx` — SVG: 6 agents + brain sessions, hover highlights connections, click expands agent detail
- `src/components/research/turn-cycle.tsx` — SVG: cycle (3,1,2,1,2,3,1,2,1,2,4,6,7), 13 turns, director opens/closes
- `src/components/research/concurrent-pairs.tsx` — SVG: writer+companion parallelism (1↔2,4 / 6↔7)
- `src/components/research/agent-detail.tsx` — expandable panel per agent: purpose, role, brain pairing
- `src/components/research/abstract.tsx` — research paper abstract
- `src/components/research/methodology.tsx` — methodology: architecture, turn schedule, concurrent pairs, brain+agent pairing
- `src/components/research/results.tsx` — results: self-restart, crash detection, dynamic model selection outcomes
- `src/components/research/discussion.tsx` — theory craft: why this architecture works, separation of concerns, emergent behavior
- `src/components/research/paper-layout.tsx` — orchestrates all sections in research-paper order

### Acceptance criteria
- [ ] All 6 agents documented (1 Coder, 2 Reviewer, 3 Director, 4 Quality, 6 Documentation, 7 Ideas)
- [ ] Turn cycle (3,1,2,1,2,3,1,2,1,2,4,6,7) rendered as SVG diagram
- [ ] Concurrent pairs (1↔2,4 and 6↔7) rendered as SVG
- [ ] Self-restart (every 10 cycles) documented
- [ ] Crash detection (5 consecutive → bulk restart → abort) documented
- [ ] Dynamic model selection (opus/sonnet → GLM, credit fallback, rate-limit backoff) documented
- [ ] Brain+agent pairing documented
- [ ] Shared team log documented
- [ ] SVG diagrams: crisp, scalable, monolith-aesthetic (geometric, high-contrast)
- [ ] Hover highlights agent connections; click expands agent details

---

## PHASE 3 — CINEMATIC TRANSITIONS + EXPERIMENTAL TYPOGRAPHY

**Goal:** GSAP camera-move transitions between paper sections, variable-font weight on scroll, monospace for technical sections.

### File targets
- `src/lib/transitions.ts` — GSAP transition choreography: dolly through doorways between chapters, rise through floors, rotate to reveal new face
- `src/lib/kinetic-type.ts` — variable font weight axis responding to scroll position
- Apply transitions to `paper-layout.tsx` section changes
- Massive display type for headings (Abstract, Methodology, Architecture, Results, Discussion)
- Monospace for technical/data sections (turn schedule, concurrent pairs, crash thresholds)

### Acceptance criteria
- [ ] Section transitions feel like camera moves through architectural space
- [ ] Variable font weight responds to scroll on headings
- [ ] Monospace used for technical/data sections
- [ ] `prefers-reduced-motion` disables all transitions

---

## PHASE 4 — SOUND + PHYSICS

**Goal:** Opt-in Web Audio ambient sound, cannon-es gravitational pull + scroll inertia, heavy/deliberate feel.

### File targets
- `src/components/monolith/audio.ts` — Web Audio API: low drones, reverb tails, UI click sounds on diagram interactions; muted by default, toggle persisted to localStorage
- `src/components/layout/audio-toggle.tsx` — tasteful mute/unmute control
- `src/lib/physics.ts` — cannon-es: gravitational pull on cursor in 3D scene, physics-based scroll inertia, objects settle with weight

### Acceptance criteria
- [ ] Sound muted by default, toggle persists across reloads
- [ ] Physics feels heavy/deliberate (not bouncy)
- [ ] Cursor gravitational pull works in 3D scene
- [ ] `prefers-reduced-motion` disables physics

---

## PHASE 5 — POLISH

**Goal:** Accessibility, performance, mobile degradation, art-direction iteration.

### File targets
- `src/components/layout/reduced-motion-guard.tsx` — global gate for all motion when `prefers-reduced-motion`
- Accessibility: aria labels on interactive 3D + SVG, text alternatives for shader-only content, keyboard nav for diagram interactions
- Performance: lazy-load audit, bundle size check, Lighthouse run
- Mobile: 3D degradation refinement, touch interaction for diagrams

### Acceptance criteria
- [ ] `prefers-reduced-motion` disables all motion, physics, shader animation, sound
- [ ] Keyboard navigation works across all interactive elements
- [ ] Lighthouse performance > 80 desktop, 60fps maintained
- [ ] `npm run verify` passes (types + lint + test + build + smoke)
- [ ] Mobile: 3D scene degrades gracefully, diagrams remain interactive

---

## EXECUTION ORDER

Strictly sequential. No Phase N+1 until Phase N acceptance passes.

```
Phase 0 → Phase 1 → Phase 2 → Phase 3 → Phase 4 → Phase 5
```

Each phase: Agent 1 implements → Agent 2 reviews diff → Agent 4 verifies acceptance → Agent 3 gates phase completion.
