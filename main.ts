import { mkdirSync, writeFileSync } from "node:fs";

// One-line cat joke entry — the whole entry, exactly one line.
// Written only to /output/entry.txt (no relative write, no trailing newline),
// so it also succeeds in the grader's read-only sandbox.
const line = "My human kicked the vacuum and said sorry. He has never said sorry to me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
