// One Line, One Minute: The Vending Machine Pickup Line Contest.
// Entry program (Node 22): writes the machine's pickup line to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, not whitespace-only, one line, no trailing newline.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "Your dollar was too crumpled, so I sent it back. But you? I'd take you in any condition.";
const OUT = "/output/entry.txt";
const MAX_CHARS = 200;

const length = [...LINE].length;
if (length < 1 || length > MAX_CHARS) {
  throw new Error(`line is ${length} characters, gate needs 1-${MAX_CHARS}`);
}
if (LINE.trim() !== LINE) {
  throw new Error("line has leading or trailing whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, LINE, "utf8");

// Round-trip confirmation: read the file back and compare byte for byte.
const back = readFileSync(OUT, "utf8");
if (back !== LINE) {
  throw new Error("round-trip mismatch: entry.txt does not match the line");
}
console.log(`wrote ${length} characters to ${OUT}`);
