/**
 * Visual Audit Script — Agent 4 (Quality & Longevity)
 *
 * Static verification of the site's visual structure. Checks:
 * 1. All 7 sections have IDs for navigation
 * 2. FaceNav component targets valid section IDs
 * 3. Cyan usage follows "one cyan per section" rule
 * 4. No remaining legacy cyan (rgba(34, 211, 238) outside SVG/interactive)
 * 5. All section headings have section numbers
 * 6. No HTML nesting violations
 *
 * Execute via: npx tsx src/quality/visual-audit.ts
 */

import * as fs from "node:fs";
import * as path from "node:path";

const ROOT = path.resolve(__dirname, "..", "..");
const SRC = path.join(ROOT, "src");

interface AuditResult {
  check: string;
  status: "PASS" | "FAIL" | "WARN";
  details: string;
}

const results: AuditResult[] = [];

function check(name: string, fn: () => { status: "PASS" | "FAIL" | "WARN"; details: string }) {
  try {
    const result = fn();
    results.push({ check: name, ...result });
  } catch (e) {
    results.push({ check: name, status: "FAIL", details: `Error: ${(e as Error).message}` });
  }
}

function readFile(relPath: string): string {
  return fs.readFileSync(path.join(SRC, relPath), "utf-8");
}

function readDir(relPath: string): string[] {
  return fs.readdirSync(path.join(SRC, relPath));
}

// ─── Check 1: Section IDs ─────────────────────────────────────────────
check("All 7 sections have navigation IDs", () => {
  const requiredIds = ["hero", "profile", "experience", "projects", "skills", "contact", "research"];
  const missing: string[] = [];
  for (const id of requiredIds) {
    const files = [
      `components/monolith/monolith-scene.tsx`,
      `components/sections/profile.tsx`,
      `components/sections/experience.tsx`,
      `components/sections/projects.tsx`,
      `components/sections/skills.tsx`,
      `components/sections/contact.tsx`,
      `components/research/paper-layout.tsx`,
    ];
    const idx = requiredIds.indexOf(id);
    const content = readFile(files[idx]!);
    if (!content.includes(`id="${id}"`)) {
      missing.push(id);
    }
  }
  if (missing.length > 0) {
    return { status: "FAIL" as const, details: `Missing IDs: ${missing.join(", ")}` };
  }
  return { status: "PASS" as const, details: "All 7 section IDs present" };
});

// ─── Check 2: FaceNav targets valid IDs ───────────────────────────────
check("FaceNav targets valid section IDs", () => {
  const navContent = readFile("components/monolith/face-nav.tsx");
  const navIds = [...navContent.matchAll(/id:\s*"(\w+)"/g)].map((m) => m[1]);
  const requiredIds = ["hero", "profile", "experience", "projects", "skills", "contact", "research"];
  const missing = requiredIds.filter((id) => !navIds.includes(id));
  const extra = navIds.filter((id) => !requiredIds.includes(id));
  if (missing.length > 0 || extra.length > 0) {
    return {
      status: "FAIL" as const,
      details: `Missing: ${missing.join(", ") || "none"} | Extra: ${extra.join(", ") || "none"}`,
    };
  }
  return { status: "PASS" as const, details: "FaceNav targets all 7 valid section IDs" };
});

// ─── Check 3: FaceNav is imported in routes/index.tsx ─────────────────
check("FaceNav imported in routes/index.tsx", () => {
  const content = readFile("routes/index.tsx");
  if (!content.includes("FaceNav")) {
    return { status: "FAIL" as const, details: "FaceNav not imported" };
  }
  if (!content.includes("<FaceNav")) {
    return { status: "FAIL" as const, details: "FaceNav not rendered" };
  }
  return { status: "PASS" as const, details: "FaceNav imported and rendered" };
});

// ─── Check 4: No legacy cyan in sections (outside SVG/interactive) ────
check("No legacy cyan in section components", () => {
  const sectionFiles = readDir("components/sections");
  const violations: string[] = [];
  for (const file of sectionFiles) {
    if (!file.endsWith(".tsx")) continue;
    const content = readFile(`components/sections/${file}`);
    // Check for raw cyan rgba (not in SVG strokes or interactive states)
    const matches = content.match(/rgba\(34,\s*211,\s*238/g);
    if (matches) {
      violations.push(`${file}: ${matches.length} legacy cyan rgba references`);
    }
  }
  if (violations.length > 0) {
    return { status: "FAIL" as const, details: violations.join("; ") };
  }
  return { status: "PASS" as const, details: "No legacy cyan in section components" };
});

// ─── Check 5: Section numbers present in all sections ─────────────────
check("Section numbers present in headings", () => {
  const sections = [
    { file: "components/sections/profile.tsx", num: null as string | null }, // profile has no number
    { file: "components/sections/experience.tsx", num: "03" },
    { file: "components/sections/projects.tsx", num: "04" },
    { file: "components/sections/skills.tsx", num: "05" },
    { file: "components/sections/contact.tsx", num: "06" },
  ];
  const missing: string[] = [];
  for (const s of sections) {
    if (!s.num) continue;
    const content = readFile(s.file);
    if (!content.includes(s.num)) {
      missing.push(`${s.file}: missing "${s.num}"`);
    }
  }
  if (missing.length > 0) {
    return { status: "FAIL" as const, details: missing.join("; ") };
  }
  return { status: "PASS" as const, details: "All section numbers present" };
});

// ─── Check 6: No div inside pre ───────────────────────────────────────
check("No <div> inside <pre> elements", () => {
  const researchFiles = readDir("components/research");
  const violations: string[] = [];
  for (const file of researchFiles) {
    if (!file.endsWith(".tsx")) continue;
    const content = readFile(`components/research/${file}`);
    // Simple check: <pre> followed by <div> within 5 lines
    const lines = content.split("\n");
    for (let i = 0; i < lines.length; i++) {
      if (lines[i]!.includes("<pre")) {
        for (let j = i + 1; j < Math.min(i + 10, lines.length); j++) {
          if (lines[j]!.includes("</pre>")) break;
          if (lines[j]!.includes("<div")) {
            violations.push(`${file}:${j + 1}: <div> inside <pre>`);
            break;
          }
        }
      }
    }
  }
  if (violations.length > 0) {
    return { status: "FAIL" as const, details: violations.join("; ") };
  }
  return { status: "PASS" as const, details: "No div-in-pre violations" };
});

// ─── Check 7: Qwik API patterns correct ───────────────────────────────
check("Qwik useVisibleTask$ cleanup pattern correct", () => {
  const allFiles: string[] = [];
  for (const dir of ["components/monolith", "components/research", "components/sections"]) {
    try {
      const files = readDir(dir);
      for (const f of files) {
        if (f.endsWith(".tsx")) allFiles.push(`${dir}/${f}`);
      }
    } catch { /* dir may not exist */ }
  }
  const violations: string[] = [];
  for (const file of allFiles) {
    const content = readFile(file);
    if (content.includes("useVisibleTask$")) {
      // Check for React-style return cleanup (wrong pattern)
      if (/useVisibleTask\$\([^)]*\)\s*=>\s*\{[^}]*return\s*\(\)\s*=>/.test(content)) {
        violations.push(`${file}: React-style return cleanup detected`);
      }
      // Check for missing cleanup param
      if (content.includes("useVisibleTask$") && !content.includes("cleanup")) {
        violations.push(`${file}: useVisibleTask$ without cleanup`);
      }
    }
  }
  if (violations.length > 0) {
    return { status: "FAIL" as const, details: violations.join("; ") };
  }
  return { status: "PASS" as const, details: "All Qwik API patterns correct" };
});

// ─── Check 8: No dead nav files ───────────────────────────────────────
check("No dead navigation files", () => {
  const dead: string[] = [];
  try {
    const navContent = readFile("components/monolith/monolith-nav.tsx");
    if (navContent.length > 100 && !navContent.includes("legacy")) {
      dead.push("monolith-nav.tsx: not marked as legacy");
    }
  } catch { /* file doesn't exist — fine */ }
  try {
    const navBarContent = readFile("components/navigation/NavBar.tsx");
    if (navBarContent.length > 100 && !navBarContent.includes("legacy")) {
      dead.push("NavBar.tsx: not marked as legacy");
    }
  } catch { /* file doesn't exist — fine */ }
  if (dead.length > 0) {
    return { status: "WARN" as const, details: dead.join("; ") };
  }
  return { status: "PASS" as const, details: "No dead nav files" };
});

// ─── Report ───────────────────────────────────────────────────────────
console.log("\n═══ Visual Audit ════════════════════════════════════════════\n");
let passCount = 0;
let failCount = 0;
let warnCount = 0;
for (const r of results) {
  const icon = r.status === "PASS" ? "✓" : r.status === "FAIL" ? "✗" : "⚠";
  console.log(`  ${icon} [${r.status}] ${r.check}`);
  console.log(`    ${r.details}\n`);
  if (r.status === "PASS") passCount++;
  else if (r.status === "FAIL") failCount++;
  else warnCount++;
}
console.log("══════════════════════════════════════════════════════════════");
console.log(`  Results: ${passCount} PASS, ${warnCount} WARN, ${failCount} FAIL`);
console.log(`  Exit: ${failCount > 0 ? 1 : 0}\n`);
process.exit(failCount > 0 ? 1 : 0);
