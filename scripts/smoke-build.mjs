/**
 * Post-build smoke check for the Cloudflare Pages output.
 *
 * The `fix-worker` script in package.json rewrites the bare
 * "entry.cloudflare-pages" import specifier in dist/_worker.js to
 * "./entry.cloudflare-pages". That rewrite is a raw string replace: if the
 * adapter ever emits a different specifier, the replace silently no-ops, the
 * build still exits 0, and the deployed worker 500s at runtime.
 *
 * This script is the only thing that catches that. Run it after `npm run build`.
 */
import { existsSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const DIST = join(process.cwd(), "dist");
const WORKER = join(DIST, "_worker.js");
const FIXED_SPECIFIER = '"./entry.cloudflare-pages"';
const BARE_SPECIFIER = '"entry.cloudflare-pages"';

const failures = [];

function check(name, ok, remedy) {
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}`);
  if (!ok) failures.push({ name, remedy });
  return ok;
}

function isNonEmptyFile(path) {
  return existsSync(path) && statSync(path).isFile() && statSync(path).size > 0;
}

function isDir(path) {
  return existsSync(path) && statSync(path).isDirectory();
}

const workerExists = check(
  "dist/_worker.js exists and is non-empty",
  isNonEmptyFile(WORKER),
  "The Cloudflare Pages server build did not produce a worker. Run `npm run build` and check that `build.server` (vite build -c adapters/cloudflare-pages/vite.config.ts) completed.",
);

if (workerExists) {
  const worker = readFileSync(WORKER, "utf8");

  check(
    `dist/_worker.js contains ${FIXED_SPECIFIER}`,
    worker.includes(FIXED_SPECIFIER),
    "The relative entry specifier is missing. The `fix-worker` script in package.json did not apply. Inspect the import specifier actually emitted in dist/_worker.js and update `fix-worker` to match it.",
  );

  // Any occurrence of the bare specifier that is not part of the fixed one.
  const bareCount = worker.split(BARE_SPECIFIER).length - 1;
  const fixedCount = worker.split(FIXED_SPECIFIER).length - 1;
  check(
    "dist/_worker.js has no unfixed bare \"entry.cloudflare-pages\" specifier",
    bareCount - fixedCount === 0,
    "A bare \"entry.cloudflare-pages\" import survived. Cloudflare will fail to resolve it at runtime (production 500). The `fix-worker` replace in package.json only rewrites the FIRST occurrence — if the adapter now emits several, change it to a global replace.",
  );
}

check(
  "dist/index.html exists and is non-empty",
  isNonEmptyFile(join(DIST, "index.html")),
  "Static prerender produced no index.html. Check the `ssg.include` setting in adapters/cloudflare-pages/vite.config.ts.",
);

check(
  "dist/build/ exists",
  isDir(join(DIST, "build")),
  "The client bundle directory is missing. Check that `build.client` ran before `build.server` (the `qwik build` pipeline runs both).",
);

if (failures.length > 0) {
  console.error(`\n${failures.length} smoke check(s) failed:\n`);
  for (const { name, remedy } of failures) {
    console.error(`  - ${name}\n    ${remedy}\n`);
  }
  console.error(
    "This build must NOT be deployed. `npm run deploy` would ship a broken worker.",
  );
  process.exit(1);
}

console.log("\nAll smoke checks passed. dist/ is safe to deploy.");
