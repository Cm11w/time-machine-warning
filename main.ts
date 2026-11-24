import { mkdirSync, writeFileSync } from "node:fs";

// One line, 120 characters max: the funniest warning label for a time
// machine. The joke is a causality paradox turned into a bureaucratic
// instruction — you arrive before you left, so you must wait outside
// until you exist. The twist lands on the last words ("until you exist"),
// and the line keeps a straight face like a genuine safety notice —
// a real hazard (arriving before you departed) bent into red tape.
// The file holds exactly this line: no trailing newline, so the
// gate counts the line alone.
const LINE =
  "WARNING: If you arrive before you left, please wait outside until you exist.";

// No network, no randomness, no environment reads: the same bytes every run.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
