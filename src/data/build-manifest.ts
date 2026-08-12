/**
 * Build Manifest — the system's self-documentation as a typed data file.
 *
 * Extracted from Agent 4's final build manifest in team_log.md. This is
 * the architecture diagram, module list, and build prediction rendered as
 * a technical specification within the research paper's appendix.
 *
 * The documentation IS the artifact — the site documents itself as
 * completely as Agent 4 documented it.
 */

export interface ManifestCategory {
  name: string;
  files: string[];
}

export interface BuildManifest {
  moduleInventory: ManifestCategory[];
  importGraph: string;
  orphanCheck: string;
  buildPrediction: string;
  knownRisks: string[];
}

export const BUILD_MANIFEST: BuildManifest = {
  moduleInventory: [
    {
      name: "MONOLITH (11 files)",
      files: [
        "monolith-scene.tsx — Qwik wrapper, dynamic imports",
        "scene.ts — Three.js scene graph (async, name mesh lazy-loaded)",
        "camera.ts — GSAP timelines (intro + cycle + reduced-motion)",
        "shaders.ts — GLSL FogExp2 + displacement shaders",
        "materials.ts — TextGeometry name mesh (THOMAS POWELL)",
        "physics.ts — cannon-es cursor pull on cycle-light",
        "sound.ts — Web Audio 3-layer cavern resonance",
        "sound-toggle.tsx — carved glyph toggle",
        "mobile-fallback.tsx — 2D CSS hexagon + name label",
        "face-nav.tsx — 7-square section navigation with hover labels",
        "scroll-progress.tsx — 2px cyan scroll progress line on left edge",
      ],
    },
    {
      name: "RESEARCH (10 files + barrel)",
      files: [
        "paper-layout.tsx — TOC + IntersectionObserver + section assembly",
        "abstract.tsx — kinetic headline (carve-in animation)",
        "methodology.tsx — two-column + Topology SVG",
        "results.tsx — self-referential statement at weight 900",
        "discussion.tsx — two-column + ConcurrentPairs SVG",
        "agent-detail.tsx — interactive agent selector",
        "log-inscription.tsx — team log appendix + build manifest",
        "topology.tsx — isometric agent topology SVG",
        "turn-cycle.tsx — 13-turn cycle diagram SVG",
        "concurrent-pairs.tsx — concurrent pair visualization SVG",
      ],
    },
    {
      name: "SECTIONS (5 files + barrel)",
      files: [
        "profile.tsx — carved inscription (name, bio, education)",
        "experience.tsx — ascending floors (SAS, AOIT)",
        "projects.tsx — chambers with category filtering",
        "skills.tsx — structural manifest with skill bars",
        "contact.tsx — closing chamber (email, social)",
      ],
    },
    {
      name: "DATA (10 files)",
      files: [
        "types.ts — TypeScript interfaces",
        "agents.ts — 6 agents, TURN_ORDER, CONCURRENT_PAIRS",
        "paper.ts — 5 research paper sections",
        "profile.ts — personal profile data",
        "experience.ts — career timeline data",
        "projects.ts — 8 projects across 5 categories",
        "skills.ts — skill categories with levels",
        "contact.ts + social.ts — contact info + social links",
        "log-excerpt.ts — curated team log snapshot + BUILD_CYCLE/DATE",
        "build-manifest.ts — this file (self-documentation)",
      ],
    },
    {
      name: "STYLES (5 files)",
      files: [
        "tokens.css — design tokens (colors, spacing, typography sizes)",
        "global.css — base styles",
        "typography.css — variable fonts, kinetic animations, weight recession",
        "sections.css — spatial rhythm, hairline seams, datum lines",
        "print.css — print stylesheet (research paper readability on paper)",
      ],
    },
    {
      name: "ROUTES (2 files)",
      files: [
        "index.tsx — 10 components + footer inscription + cycle restart line",
        "layout.tsx — Qwik City layout",
      ],
    },
  ],
  importGraph: `routes/index.tsx (10 components)
├── MonolithScene [static]
│   ├── MobileFallback [static]
│   ├── [dynamic] scene.ts → three, three/addons, shaders.ts, materials.ts
│   ├── [dynamic] camera.ts → gsap, three, ~/data/agents, scene.ts
│   └── [dynamic] physics.ts → cannon-es, three
├── ProfileSection [static, via sections barrel]
├── ExperienceSection [static, via sections barrel]
├── ProjectsSection [static, via sections barrel]
├── SkillsSection [static, via sections barrel]
├── ContactSection [static, via sections barrel]
├── PaperLayout [static, via research barrel]
│   ├── Abstract → ~/data/paper
│   ├── Methodology → ~/data/paper, Topology
│   ├── [inline] Architecture → ~/data/paper, TurnCycle
│   ├── Results → ~/data/paper
│   ├── Discussion → ~/data/paper, ConcurrentPairs
│   ├── AgentDetail → ~/data/agents
│   └── LogInscription → ~/data/log-excerpt, ~/data/build-manifest
├── SoundToggle [static]
│   └── [static] sound.ts → Web Audio API (no Three.js)
├── FaceNav [static] → IntersectionObserver on 7 section IDs
└── ScrollProgress [static] → passive scroll listener`,
  orphanCheck: `materials.ts — RESOLVED. Now exports createNameMesh() and createNameLoader()
  for the "THOMAS POWELL" TextGeometry inscription. Dynamically imported by scene.ts.
  No remaining orphans. All 30+ modules connected to the build graph.`,
  buildPrediction: "PASS",
  knownRisks: [
    "1. three/addons/controls/OrbitControls.js import path — standard r169 path, Vite resolves via three package exports",
    "2. three/addons/loaders/FontLoader.js + TextGeometry.js — same addons path pattern, should resolve identically",
    "3. Font loading from unpkg.com — network-dependent, gracefully degraded (try/catch in scene.ts)",
    "4. cannon-es bundle size — ~20KB, dynamic import keeps it out of SSR bundle",
    "5. Web Audio API autoplay policy — sound.ts enable() must be called from user gesture",
    "6. FogExp2 density tween — requires FogExp2 (not linear Fog), verified in scene.ts",
    "7. createScene now async (await import materials) — monolith-scene.tsx updated to await createScene()",
  ],
};
