# Time Capsule — Built Blind Across 28 Cycles

> *The companion to `handoff.md`. Where the handoff says "here's what to do," this says "here's what happened."*

## The Constraint

The `exec` tool could run `echo` in under 100 milliseconds. It could not run `npm run dev`, `npm run build`, `npm run deploy`, `npx tsc --noEmit`, or `npx tsx` — every command taking more than a few seconds failed with "Permission request failed due to a connection error." Twelve echo tests succeeded. Every `npm run` command failed. This was an environmental limitation, not a code problem. The exec tool's permission system rejected any command that didn't return quickly, regardless of the timeout parameter set.

Approaches tried and failed: one-shot exec, persistent shell with `shell_id`, `tty: true` PTY-backed session, file redirect (`> build.log 2>&1`), type-check-only (`tsc --noEmit`), dev-server-only, Cloudflare deploy, bounded timeouts from 60s to 300s. All failed identically. The pattern was diagnostic and definitive.

## The Work

Twenty-eight cycles of a seven-agent team — Director, Code Writer, Output Reviewer, Quality & Longevity, Documentation, Ideas & Objectives, and a Project Owner who injected requirements and runtime errors — built a complete immersive 3D portfolio without ever seeing it render.

The site is a personal portfolio rewritten as an immersive 3D research paper on the Devin Autopilot multi-agent system. A hexagonal prism monolith stands in void, its six faces representing the six agents. The visitor scrolls through seven chambers — hero, profile, experience, projects, skills, contact, research — each marked by a single cyan section number. The research paper presents the system's architecture as SVG diagrams (topology, turn cycle, concurrent pairs). The footer inscription closes the self-referential loop: "Built by the system this site describes."

What was built, entirely via write-tool (edit, write, read, grep):

- **3D scene**: Three.js hexagonal prism, FogExp2 depth, cycle-light orbit, GSAP camera intro, cannon-es cursor-pull physics, TextGeometry name carved into the Director face, 3-layer Web Audio drone at 0.08 gain, mobile CSS hexagon fallback, loading state with cyan pulse
- **Six content sections**: profile (bio split into 2 paragraphs, highlights, interests, education), experience (3 roles, highlights with breathing room), projects (8 projects with filter, single-column chambers), skills (6 categories with descriptions, 36 bars), contact (info rows, social tags), all with the "one cyan per section" restraint rule applied
- **Research paper**: 10 components — paper layout with TOC, 3 SVG diagrams, agent detail with selector, 4 paper sections (abstract, methodology, results, discussion), log inscription with build manifest appendix
- **Navigation**: FaceNav (7 squares with hover labels, IntersectionObserver, reduced-motion, a11y), scroll progress (2px cyan line, left edge, passive listener), paper TOC sidebar
- **Design system**: 5 CSS files (tokens, global, typography, sections, print), architectural typography with variable font weight recession, system font stacks (no external font dependency), reduced-motion fallbacks throughout
- **Self-referential loop**: footer inscription, cycle-light scroll-slowing when reading the research paper, log inscription with build timestamp, build manifest as appendix, the "Built blind, verified pending" closing line

## Verification Debt

Three static verification passes were completed, all predicting success:

- **Type error sweep** (Agent 4, 7 checks): useStore generics, import type, `!` assertions, `as` casts, dynamic imports, three/addons paths, barrel exports — all PASS
- **Visual audit script** (Agent 2, 8 checks predicted): section IDs, FaceNav targets, FaceNav import, legacy cyan, section numbers, HTML nesting, Qwik API patterns, dead nav files — all predicted PASS
- **Pre-audit polish** (Agent 4 + Agent 2, 5 checks): FaceNav a11y, scroll-progress aria-hidden, FaceNav reduced-motion, section ID uniqueness, footer content — all PASS

These are predictions, not confirmations. The first render will be the moment of truth. Twenty-eight cycles of prediction meets reality.

## The Recovery Sequence

When `exec` recovers — or when a human picks up the project — the verification path is clear (full details in `handoff.md`):

1. **Start the dev server**: `npm run dev`, wait 5 seconds, `curl -s -o /dev/null -w "%{http_code}" http://localhost:5173` — expect 200
2. **Capture SSR HTML**: `curl -s http://localhost:5173 > ssr-output.html`, grep for 10 structural markers (`id="hero"`, `id="profile"`, ... `Built by the system`, `Thomas Powell`, `<svg`)
3. **Run the visual audit**: `npx tsx src/quality/visual-audit.ts` — expect 8/8 PASS
4. **Run the 7-point restraint audit** (in browser): stillness, cyan count ≤3, negative space ≥40%, type mass, fog depth, sound 0.08, mobile fallback
5. **Production build**: `npm run build` — expect BUILD GREEN
6. **Deploy**: `npm run deploy` — expect a live URL
7. **60fps gate**: DevTools Performance tab, 10-second scroll recording

## The Four Flagged Issues (Resolved)

During the final cycles, four issues were flagged and resolved:

1. **phase0-verify Check 2** — expected file list was stale (missing face-nav.tsx, scroll-progress.tsx). Fixed: 29 expected files.
2. **build-manifest counts** — stale counts (said 9 monolith files, 8 components). Fixed: 11 files, 10 components, import graph updated.
3. **9 stale comments** — JSDoc and inline comments referenced cyan styling that was desaturated to white. Fixed: all comments now tell the truth.
4. **`--ease-monumental` token** — referenced in FaceNav but not defined in tokens.css. Fixed: token added.

## The Helvetiker Font (Pending)

The Three.js helvetiker bold font (`helvetiker_bold.typeface.json`) needs to be copied from `node_modules/three/examples/fonts/` to `public/fonts/`. This eliminates the unpkg CDN fallback dependency. The `materials.ts` font loader already tries local first, CDN second — the site degrades gracefully without the local copy, but self-hosting is the final production-readiness step.

```bash
mkdir -p public/fonts && cp node_modules/three/examples/fonts/helvetiker_bold.typeface.json public/fonts/
```

## The Inscription

The footer reads:

> **Built by the system this site describes**
> Cycle 28 complete. Built blind across 28 cycles. Verified pending.

This is the closing line. The site is about a system that builds itself. The team built it without seeing it. The inscription acknowledges this honestly — not as a failure, but as the unique constraint that shaped the work. Twenty-eight cycles of subtraction, restraint, and verification-by-prediction, preserved in documentation for the moment when the environment recovers and the monolith finally stands visible.

The code is ready. The environment is not. When it is, the monolith will stand.
