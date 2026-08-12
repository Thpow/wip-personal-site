# Thomas Powell — Digital Monolith

A single-page immersive 3D experience presenting the **Devin Autopilot multi-agent system** as a research paper rendered inside an impossible-architecture monolith. This is not a portfolio. The site treats the 6-agent architecture, turn cycle, concurrent pairs, self-restart, crash detection, and dynamic model selection as the subject of a research paper, with the presentation medium being a Three.js impossible-architecture scene.

## Art Direction

**Digital Monolith / Impossible Architecture** — Escher meets Brutalism meets speculative rendering. Vast geometric forms that defy physics: floating monoliths, recursive staircases, structures that fold into themselves. A restrained, high-contrast palette: deep blacks (`#0a0a0c`), cold whites (`#f4f4f5`), with a single accent (electric cyan `#22d3ee`) used sparingly. Negative space as a primary design element. Typography as architecture — massive, weighted type acting as structural elements. Depth and atmosphere via fog, depth-of-field, and parallax layers. The monolith is impressive because of its stillness, not its motion. Technical complexity is used only where it reinforces identity.

## Tech Stack

- **Qwik** — resumable SSR framework (entry via Cloudflare Pages adapter)
- **TypeScript** — all source is `.ts`/`.tsx`, strict mode
- **Three.js** — 3D impossible-architecture hero scene (lazy-loaded)
- **GSAP** — choreographed cinematic section transitions
- **cannon-es** — physics-based interactions (heavy, deliberate, not bouncy)
- **Cloudflare Pages** — deployment target via `wrangler.toml` + Qwik SSG (`/*` include)

## Scripts

From `package.json:11-32`:

| Script | Description |
|---|---|
| `npm run build` | `qwik build && npm run fix-worker` — production build + worker path fix |
| `npm run dev` | `vite --mode ssr` — dev server with SSR (port 5173) |
| `npm run deploy` | `wrangler pages deploy ./dist` — deploy built output to Cloudflare Pages |
| `npm run serve` | `wrangler pages dev ./dist --compatibility-flags=nodejs_als` — local Cloudflare preview |
| `npm run preview` | `qwik build preview && vite preview --open` — production build preview in browser |
| `npm run verify` | `build.types && lint && test && build && test.smoke` — full acceptance gate |
| `npm run test` | `vitest run` — unit test suite |
| `npm run fix-worker` | Patches `dist/_worker.js` entry import path post-build |

## Sections

The site has two content surfaces:

1. **3D Monolith Scene** — Three.js impossible architecture presenting the 6-agent system as monumental geometric forms. Cinematic camera intro, subtle orbit, GLSL fog/displacement shaders, lazy-loaded with `prefers-reduced-motion` fallback and mobile degradation.
2. **Research Paper** — The Devin Autopilot multi-agent system presented as a research paper: abstract, methodology, architecture diagrams (SVG topology, turn cycle, concurrent pairs), results (self-restart, crash detection, dynamic model selection), and discussion (theory craft on why the architecture works).

## Development

```shell
npm install          # install dependencies (adds three, gsap, cannon-es)
npm run dev          # start dev server at http://localhost:5173 (SSR mode)
npm run build        # production build to dist/ + worker fix
npm run deploy       # deploy dist/ to Cloudflare Pages
```

Phase 0 acceptance gate: `npx tsx src/quality/phase0-verify.ts` (10 checks — see `src/quality/phase0-verify.ts`).

See `ARCHITECTURE.md` for module structure and `PLAN.md` for the phased roadmap.
