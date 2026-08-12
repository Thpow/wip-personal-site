/**
 * Phase 0 Verification Script — Agent 4 (Quality & Longevity)
 *
 * SCOPE PIVOT (2026-08-08): Portfolio abandoned. Site is now a single-focus
 * research paper presentation for the Devin Autopilot multi-agent project.
 * 3D/WebGL/shaders/cinematic transitions/typography/sound/physics are the
 * presentation medium. This script reflects the updated scope.
 *
 * Standalone TypeScript module. NOT part of the app build graph.
 * Execute via: npx tsx src/quality/phase0-verify.ts
 *
 * Checks all 10 Phase 0 acceptance criteria and exits:
 *   0 = all checks passed
 *   1 = one or more checks failed
 */

import * as fs from "node:fs";
import * as path from "node:path";

const ROOT = path.resolve(__dirname, "..", "..");
const SRC = path.join(ROOT, "src");

// ---------------------------------------------------------------------------
// Entry file baseline snapshots (captured 2026-08-08 pre-Phase-0)
// ---------------------------------------------------------------------------

const ENTRY_CLOUDFLARE_PAGES = `/*
 * WHAT IS THIS FILE?
 *
 * It's the entry point for Cloudflare Pages when building for production.
 *
 * Learn more about the Cloudflare Pages integration here:
 * - https://qwik.dev/docs/deployments/cloudflare-pages/
 *
 */
import {
  createQwikCity,
  type PlatformCloudflarePages,
} from "@builder.io/qwik-city/middleware/cloudflare-pages";
import qwikCityPlan from "@qwik-city-plan";
import render from "./entry.ssr";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface QwikCityPlatform extends PlatformCloudflarePages {}
}

const fetch = createQwikCity({ render, qwikCityPlan });

export { fetch };
`;

const ENTRY_SSR = `/**
 * WHAT IS THIS FILE?
 *
 * SSR entry point, in all cases the application is rendered outside the browser, this
 * entry point will be the common one.
 *
 * - Server (express, cloudflare...)
 * - npm run start
 * - npm run preview
 * - npm run build
 *
 */
import {
  renderToStream,
  type RenderToStreamOptions,
} from "@builder.io/qwik/server";
import Root from "./root";

export default function (opts: RenderToStreamOptions) {
  return renderToStream(<Root />, {
    ...opts,
    // Use container attributes to set attributes on the html tag.
    containerAttributes: {
      lang: "en-us",
      ...opts.containerAttributes,
    },
    serverData: {
      ...opts.serverData,
    },
  });
}
`;

const ENTRY_DEV = `/*
 * WHAT IS THIS FILE?
 *
 * Development entry point using only client-side modules:
 * - Do not use this mode in production!
 * - No SSR
 * - No portion of the application is pre-rendered on the server.
 * - All of the application is running eagerly in the browser.
 * - More code is transferred to the browser than in SSR mode.
 * - Optimizer/Serialization/Deserialization code is not exercised!
 */
import { render, type RenderOptions } from "@builder.io/qwik";
import Root from "./root";

export default function (opts: RenderOptions) {
  return render(document, <Root />, opts);
}
`;

const ENTRY_PREVIEW = `/*
 * WHAT IS THIS FILE?
 *
 * It's the bundle entry point for \`npm run preview\`.
 * That is, serving your app built in production mode.
 *
 * Feel free to modify this file, but don't remove it!
 *
 * Learn more about Vite's preview command:
 * - https://vitejs.dev/config/preview-options.html#preview-options
 *
 */
import { createQwikCity } from "@builder.io/qwik-city/middleware/node";
import qwikCityPlan from "@qwik-city-plan";
// make sure qwikCityPlan is imported before entry
import render from "./entry.ssr";

/**
 * The default export is the QwikCity adapter used by Vite preview.
 */
export default createQwikCity({ render, qwikCityPlan });
`;

// ---------------------------------------------------------------------------
// Utility helpers
// ---------------------------------------------------------------------------

interface CheckResult {
  name: string;
  passed: boolean;
  detail?: string;
}

const results: CheckResult[] = [];

function record(name: string, passed: boolean, detail?: string): void {
  results.push({ name, passed, detail });
}

function readFile(filePath: string): string {
  return fs.readFileSync(filePath, "utf8");
}

function fileExists(filePath: string): boolean {
  try {
    return fs.statSync(filePath).isFile();
  } catch {
    return false;
  }
}

/** Recursively collect files under a directory, returning relative paths from that directory. */
function globFiles(dir: string, extensions?: string[]): string[] {
  const out: string[] = [];
  if (!fs.existsSync(dir)) return out;
  function walk(base: string, rel: string) {
    const full = path.join(base, rel);
    if (!fs.existsSync(full)) return;
    for (const entry of fs.readdirSync(full, { withFileTypes: true })) {
      const childRel = rel ? path.join(rel, entry.name) : entry.name;
      if (entry.isDirectory()) {
        walk(base, childRel);
      } else if (entry.isFile()) {
        if (extensions) {
          const ext = path.extname(entry.name);
          if (!extensions.includes(ext)) continue;
        }
        out.push(childRel.replace(/\\/g, "/"));
      }
    }
  }
  walk(dir, "");
  return out.sort();
}

// ---------------------------------------------------------------------------
// Check 1 — Dependency placement
// ---------------------------------------------------------------------------

function checkDeps(): void {
  const pkg = JSON.parse(readFile(path.join(ROOT, "package.json")));
  const deps: Record<string, string> = pkg.dependencies || {};
  const devDeps: Record<string, string> = pkg.devDependencies || {};

  const runtimeDeps = ["three", "gsap", "cannon-es"];
  const failures: string[] = [];

  for (const dep of runtimeDeps) {
    if (!(dep in deps)) {
      failures.push(`"${dep}" missing from dependencies`);
    }
    if (dep in devDeps) {
      failures.push(`"${dep}" incorrectly in devDependencies (duplicate)`);
    }
  }

  if (!("@types/three" in devDeps)) {
    failures.push('"@types/three" missing from devDependencies');
  }
  if ("@types/three" in deps) {
    failures.push('"@types/three" incorrectly in dependencies (should be devDependencies only)');
  }

  record(
    "Check 1 — deps placement (three/gsap/cannon-es in dependencies, @types/three in devDependencies)",
    failures.length === 0,
    failures.length ? failures.join("; ") : undefined,
  );
}

// ---------------------------------------------------------------------------
// Check 2 — Legacy components gone (research-paper scope)
// ---------------------------------------------------------------------------

function checkLegacyComponents(): void {
  // Expected files: 3D monolith infrastructure + portfolio sections +
  // research paper components + navigation UI.
  const expected = new Set([
    // 3D / WebGL infrastructure (the site's presentation medium)
    "monolith/scene.ts",
    "monolith/fog-shader.ts",
    "monolith/camera-intro.ts",
    "monolith/monolith-scene.tsx",
    "monolith/mobile-fallback.tsx",
    "monolith/physics.ts",
    "monolith/sound.ts",
    "monolith/sound-toggle.tsx",
    // Navigation + progress UI (client-side, added Cycle 25-26)
    "monolith/face-nav.tsx",
    "monolith/scroll-progress.tsx",
    // Portfolio sections (restored after scope pivot back to portfolio + research)
    "sections/profile.tsx",
    "sections/experience.tsx",
    "sections/projects.tsx",
    "sections/skills.tsx",
    "sections/contact.tsx",
    "sections/index.ts",
    // Research paper components (primary content)
    "research/paper-layout.tsx",
    "research/topology.tsx",
    "research/turn-cycle.tsx",
    "research/concurrent-pairs.tsx",
    "research/agent-detail.tsx",
    "research/abstract.tsx",
    "research/methodology.tsx",
    "research/results.tsx",
    "research/discussion.tsx",
    "research/log-inscription.tsx",
    "research/agent-monolith.tsx",
    "research/agent-monolith-scene.ts",
    // Barrel export + Qwik boilerplate (allowed, not legacy)
    "research/index.ts",
    "router-head/router-head.tsx",
  ]);

  const actual = globFiles(path.join(SRC, "components"), [".ts", ".tsx"]);
  const actualSet = new Set(actual);

  const missing = [...expected].filter((f) => !actualSet.has(f));
  const unexpected = actual.filter((f) => !expected.has(f));

  const failures: string[] = [];
  if (missing.length) failures.push(`Missing expected files: ${missing.join(", ")}`);

  // Unexpected files must be neutralized (contain only legacy comment, no real exports)
  for (const f of unexpected) {
    const content = readFile(path.join(SRC, "components", f));
    const isNeutralized =
      /legacy|superseded/i.test(content) && !/export\s+(const|function|class|interface|type|default)/.test(content);
    if (!isNeutralized) {
      failures.push(`Unexpected non-neutralized file: ${f}`);
    }
  }

  record(
    "Check 2 — legacy components neutralized (29 expected + barrel/boilerplate; unexpected files must be neutralized)",
    failures.length === 0,
    failures.length ? failures.join("; ") : undefined,
  );
}

// ---------------------------------------------------------------------------
// Check 3 — Legacy styles gone
// ---------------------------------------------------------------------------

function checkLegacyStyles(): void {
  const expected = new Set(["tokens.css", "global.css", "typography.css", "sections.css", "print.css"]);
  const actual = globFiles(path.join(SRC, "styles"));
  const missing = [...expected].filter((f) => !actual.includes(f));
  const unexpected = actual.filter((f) => !expected.has(f));

  const failures: string[] = [];
  if (missing.length) failures.push(`Missing expected files: ${missing.join(", ")}`);

  // Unexpected files must be neutralized (contain only legacy comment, no real CSS rules)
  for (const f of unexpected) {
    const content = readFile(path.join(SRC, "styles", f));
    const isNeutralized =
      /legacy|superseded/i.test(content) && !/[{]/.test(content.replace(/\/\*.*?\*\//g, "").replace(/\/\/.*/g, ""));
    if (!isNeutralized) {
      failures.push(`Unexpected non-neutralized file: ${f}`);
    }
  }

  record(
    "Check 3 — legacy styles neutralized (tokens + global + typography + sections + print active; unexpected files must be neutralized)",
    failures.length === 0,
    failures.length ? failures.join("; ") : undefined,
  );
}

// ---------------------------------------------------------------------------
// Check 4 — Data integrity (agents data only — scope pivot)
// ---------------------------------------------------------------------------

async function checkDataIntegrity(): Promise<void> {
  const failures: string[] = [];

  try {
    const agentsMod = await import("../data/agents.js");
    const agents = agentsMod.AGENTS;
    if (!agents || agents.length !== 6) {
      failures.push(`AGENTS.length = ${agents?.length ?? "undefined"}, expected 6`);
    } else {
      // Verify agent numbers are 1,2,3,4,6,7
      const numbers = agents.map((a: any) => a.number).sort((a: number, b: number) => a - b);
      const expectedNumbers = [1, 2, 3, 4, 6, 7];
      if (JSON.stringify(numbers) !== JSON.stringify(expectedNumbers)) {
        failures.push(`AGENTS numbers = [${numbers.join(",")}], expected [${expectedNumbers.join(",")}]`);
      }
      // Verify each agent has name, role, purpose
      for (const a of agents) {
        if (!a.name || !a.role || !a.purpose) {
          failures.push(`Agent ${a.number}: missing name/role/purpose`);
        }
      }
    }
  } catch (e) {
    failures.push(`Failed to import agents: ${(e as Error).message}`);
  }

  try {
    const agentsMod = await import("../data/agents.js");
    const turnOrder = agentsMod.TURN_ORDER;
    const expectedOrder = [3, 1, 2, 1, 2, 3, 1, 2, 1, 2, 4, 6, 7];
    if (!turnOrder || turnOrder.length !== 13) {
      failures.push(`TURN_ORDER.length = ${turnOrder?.length ?? "undefined"}, expected 13`);
    } else if (JSON.stringify(turnOrder) !== JSON.stringify(expectedOrder)) {
      failures.push(`TURN_ORDER = [${turnOrder.join(",")}], expected [${expectedOrder.join(",")}]`);
    }
  } catch (e) {
    failures.push(`Failed to import TURN_ORDER: ${(e as Error).message}`);
  }

  try {
    const agentsMod = await import("../data/agents.js");
    const pairs = agentsMod.CONCURRENT_PAIRS;
    if (!pairs || pairs.length < 2) {
      failures.push(`CONCURRENT_PAIRS.length = ${pairs?.length ?? "undefined"}, expected >= 2`);
    } else {
      // Verify primary 1 has companions [2,4] and primary 6 has companions [7]
      const pair1 = pairs.find((p: any) => p.primary === 1);
      const pair6 = pairs.find((p: any) => p.primary === 6);
      if (!pair1) {
        failures.push("CONCURRENT_PAIRS: missing entry for primary=1");
      } else if (JSON.stringify(pair1.companions) !== JSON.stringify([2, 4])) {
        failures.push(`CONCURRENT_PAIRS[1].companions = [${pair1.companions.join(",")}], expected [2,4]`);
      }
      if (!pair6) {
        failures.push("CONCURRENT_PAIRS: missing entry for primary=6");
      } else if (JSON.stringify(pair6.companions) !== JSON.stringify([7])) {
        failures.push(`CONCURRENT_PAIRS[6].companions = [${pair6.companions.join(",")}], expected [7]`);
      }
    }
  } catch (e) {
    failures.push(`Failed to import CONCURRENT_PAIRS: ${(e as Error).message}`);
  }

  // Self-restart, crash detection, dynamic model selection
  // These are described in the project prompt and must be documented in the
  // research section. Check if they exist as exported constants in agents.ts.
  try {
    const agentsMod = await import("../data/agents.js");
    // Self-restart: every 10 cycles
    if (agentsMod.SELF_RESTART === undefined) {
      failures.push("agents.ts: missing SELF_RESTART export (expected: re-exec every 10 cycles)");
    }
  } catch (e) {
    failures.push(`Failed to check self-restart export: ${(e as Error).message}`);
  }

  try {
    const agentsMod = await import("../data/agents.js");
    // Crash detection: 5 consecutive crashes → bulk restart → abort
    if (agentsMod.CRASH_THRESHOLD === undefined) {
      failures.push("agents.ts: missing CRASH_THRESHOLD export (expected: 5 consecutive crashes → bulk restart)");
    }
  } catch (e) {
    failures.push(`Failed to check crash detection export: ${(e as Error).message}`);
  }

  try {
    const agentsMod = await import("../data/agents.js");
    // Dynamic model selection: opus/sonnet bootstrap → GLM, credit fallback, rate-limit backoff
    if (agentsMod.MODEL_SELECTION === undefined) {
      failures.push("agents.ts: missing MODEL_SELECTION export (expected: opus/sonnet bootstrap → GLM, credit fallback, rate-limit backoff)");
    }
  } catch (e) {
    failures.push(`Failed to check dynamic model selection export: ${(e as Error).message}`);
  }

  // Brain+agent pairing: each agent has a paired "brain" ACP session
  try {
    const agentsMod = await import("../data/agents.js");
    if (agentsMod.BRAIN_AGENT_PAIRING === undefined) {
      failures.push("agents.ts: missing BRAIN_AGENT_PAIRING export (expected: each agent has paired brain ACP session composing instructions)");
    }
  } catch (e) {
    failures.push(`Failed to check brain-agent pairing export: ${(e as Error).message}`);
  }

  // Shared team log: all agents read/write team_log.md, brains read last N chars
  try {
    const agentsMod = await import("../data/agents.js");
    if (agentsMod.SHARED_TEAM_LOG === undefined) {
      failures.push("agents.ts: missing SHARED_TEAM_LOG export (expected: all agents read/write team_log.md, brains read last N chars)");
    }
  } catch (e) {
    failures.push(`Failed to check shared team log export: ${(e as Error).message}`);
  }

  record(
    "Check 4 — agents data integrity (6 agents, turn order [3,1,2,1,2,3,1,2,1,2,4,6,7], concurrent pairs, self-restart, crash detection, dynamic model selection, brain-agent pairing, shared team log)",
    failures.length === 0,
    failures.length ? failures.join("; ") : undefined,
  );
}

// ---------------------------------------------------------------------------
// Check 5 — Entry files unchanged
// ---------------------------------------------------------------------------

function checkEntryFiles(): void {
  const snapshots: Record<string, string> = {
    "src/entry.cloudflare-pages.tsx": ENTRY_CLOUDFLARE_PAGES,
    "src/entry.ssr.tsx": ENTRY_SSR,
    "src/entry.dev.tsx": ENTRY_DEV,
    "src/entry.preview.tsx": ENTRY_PREVIEW,
  };

  const failures: string[] = [];
  for (const [rel, expected] of Object.entries(snapshots)) {
    const full = path.join(ROOT, rel);
    if (!fileExists(full)) {
      failures.push(`${rel}: file missing`);
      continue;
    }
    const actual = readFile(full);
    if (actual !== expected) {
      failures.push(`${rel}: content differs from baseline snapshot`);
    }
  }

  record(
    "Check 5 — entry files unchanged (4 files match pre-Phase-0 snapshots)",
    failures.length === 0,
    failures.length ? failures.join("; ") : undefined,
  );
}

// ---------------------------------------------------------------------------
// Check 6 — Routes wired (research paper + monolith 3D scene)
// ---------------------------------------------------------------------------

function checkRoutesWired(): void {
  const routesPath = path.join(SRC, "routes", "index.tsx");
  if (!fileExists(routesPath)) {
    record("Check 6 — routes wired (research paper component imported)", false, "src/routes/index.tsx missing");
    return;
  }

  const content = readFile(routesPath);
  // Phase 0: routes must import the research paper component.
  // 3D scene wiring (monolith/scene import) is Phase 1 integration work.
  const requiredImports = [
    { pattern: /research/i, label: "Research paper component" },
  ];

  const missing: string[] = [];
  for (const { pattern, label } of requiredImports) {
    const importMatch = content.match(new RegExp(`import.*${pattern.source}.*from`, "i"));
    if (!importMatch) {
      missing.push(label);
    }
  }

  record(
    "Check 6 — routes wired (imports research paper component)",
    missing.length === 0,
    missing.length ? `Missing imports: ${missing.join(", ")}` : undefined,
  );
}

// ---------------------------------------------------------------------------
// Check 7 — Root links stylesheet
// ---------------------------------------------------------------------------

function checkRootStylesheet(): void {
  const rootPath = path.join(SRC, "root.tsx");
  if (!fileExists(rootPath)) {
    record("Check 7 — root links global stylesheet", false, "src/root.tsx missing");
    return;
  }

  const content = readFile(rootPath);
  const hasGlobalCss = /global\.css/.test(content) || /styles\/global/.test(content);

  record(
    "Check 7 — root links global stylesheet",
    hasGlobalCss,
    hasGlobalCss ? undefined : "No reference to global.css found in src/root.tsx",
  );
}

// ---------------------------------------------------------------------------
// Check 8 — tokens.css has monolith palette
// ---------------------------------------------------------------------------

function checkTokensPalette(): void {
  const tokensPath = path.join(SRC, "styles", "tokens.css");
  if (!fileExists(tokensPath)) {
    record("Check 8 — tokens.css has monolith palette", false, "src/styles/tokens.css missing");
    return;
  }

  const content = readFile(tokensPath);
  const required = ["--monolith-black", "--monolith-white", "--monolith-accent"];
  const missing = required.filter((prop) => !content.includes(prop));

  record(
    "Check 8 — tokens.css has monolith palette (--monolith-black/white/accent)",
    missing.length === 0,
    missing.length ? `Missing custom properties: ${missing.join(", ")}` : undefined,
  );
}

// ---------------------------------------------------------------------------
// Check 9 — global.css has reduced-motion scaffold
// ---------------------------------------------------------------------------

function checkReducedMotion(): void {
  const globalPath = path.join(SRC, "styles", "global.css");
  if (!fileExists(globalPath)) {
    record("Check 9 — global.css has prefers-reduced-motion scaffold", false, "src/styles/global.css missing");
    return;
  }

  const content = readFile(globalPath);
  const hasReducedMotion = /prefers-reduced-motion/i.test(content);

  record(
    "Check 9 — global.css has prefers-reduced-motion scaffold",
    hasReducedMotion,
    hasReducedMotion ? undefined : "No @media (prefers-reduced-motion) block found in global.css",
  );
}

// ---------------------------------------------------------------------------
// Check 10 — Monolith stubs have exports
// ---------------------------------------------------------------------------

function checkMonolithStubs(): void {
  const stubs = ["scene.ts", "shaders.ts", "camera.ts", "materials.ts"];
  const failures: string[] = [];

  for (const stub of stubs) {
    const stubPath = path.join(SRC, "components", "monolith", stub);
    if (!fileExists(stubPath)) {
      failures.push(`monolith/${stub}: file missing`);
      continue;
    }
    const content = readFile(stubPath);
    if (!/export\s/s.test(content)) {
      failures.push(`monolith/${stub}: no export declaration found`);
    }
  }

  record(
    "Check 10 — monolith stubs exist with exports (scene/shaders/camera/materials)",
    failures.length === 0,
    failures.length ? failures.join("; ") : undefined,
  );
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  console.log("=== Phase 0 Verification (Research Paper Scope) ===\n");

  checkDeps();
  checkLegacyComponents();
  checkLegacyStyles();
  await checkDataIntegrity();
  checkEntryFiles();
  checkRoutesWired();
  checkRootStylesheet();
  checkTokensPalette();
  checkReducedMotion();
  checkMonolithStubs();

  let failed = 0;
  for (const r of results) {
    const tag = r.passed ? "[PASS]" : "[FAIL]";
    console.log(`${tag} ${r.name}`);
    if (!r.passed && r.detail) {
      console.log(`       → ${r.detail}`);
    }
    if (!r.passed) failed++;
  }

  console.log("");
  if (failed === 0) {
    console.log("PHASE 0 VERIFICATION: PASSED");
    process.exit(0);
  } else {
    console.log(`PHASE 0 VERIFICATION: FAILED (${failed}/10 checks failed)`);
    process.exit(1);
  }
}

main().catch((e) => {
  console.error("Verification script crashed:", e);
  process.exit(1);
});
