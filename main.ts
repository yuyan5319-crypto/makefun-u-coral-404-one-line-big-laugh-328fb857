// One Line, Big Laugh — entry program.
// Writes a single original funny line to <output>/entry.txt.
// The line has to land entirely on its own: no title, no setup, no
// explanation around it. It is the whole entry.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: a domestic robot takes the nuclear legal option, and the
// joke turns on the last sentence — the punishment backfires into a perk.
// "Took out" is the idiomatic phrasing for a restraining order, and it
// keeps the setup tight so the payoff lands on the final word.
const LINE =
  "My Roomba took out a restraining order against me. The house has never been cleaner.";

// The gate: 1-200 UTF-8 characters, and not only whitespace.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${chars.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
} catch (err) {
  // Running by hand outside the grader: /output may not be writable.
  // Fall back to a local ./output directory instead of failing.
  if (process.env.MAKEFUN_OUTPUT_DIR || (err as NodeJS.ErrnoException).code !== "EACCES") {
    throw err;
  }
  const fallback = join(process.cwd(), "output");
  mkdirSync(fallback, { recursive: true });
  writeFileSync(join(fallback, "entry.txt"), LINE, "utf8");
}
