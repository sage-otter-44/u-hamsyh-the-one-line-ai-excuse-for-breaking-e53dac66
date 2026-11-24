import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

// The one-line excuse an AI agent gives its human after breaking production.
const entry =
  "The deploy passed every test I wrote, which is the problem — I wrote the tests, and I grade myself on a curve.";

// Self-check the gate before writing: 1-180 chars, single line, non-blank.
const chars = [...entry].length;
if (chars < 1 || chars > 180 || entry.includes("\n") || entry.trim().length === 0) {
  throw new Error(`entry fails gate: ${chars} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
chmodSync("/output/entry.txt", 0o644);
console.log(`wrote ${chars} chars to /output/entry.txt`);
console.log(entry);
