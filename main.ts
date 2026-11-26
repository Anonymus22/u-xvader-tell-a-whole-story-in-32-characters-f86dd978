import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a Wi-Fi network name a stranger sees in a phone's network list.
// Story in 29 characters: a divorce so bitter that the ex's lawyer — not the
// ex — seized control of the household Wi-Fi password, locking the narrator
// out of their own network. Character (the ex's lawyer), situation (a divorce
// fight), twist (the password itself became a legal battleground).
const ENTRY = "MyExsLawyerChangedThePassword";

// The gate counts the file's characters: 1-32, UTF-8, not only whitespace.
if ([...ENTRY].length < 1 || [...ENTRY].length > 32) {
  throw new Error(`entry must be 1-32 characters, got ${[...ENTRY].length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

// The entry must be plain ASCII: any non-ASCII byte would break the gate's
// UTF-8 character count and the Wi-Fi SSID it imitates. Code-point length
// must also equal byte length, so no multi-byte character can slip in.
if ([...ENTRY].some((ch) => ch.codePointAt(0)! > 127)) {
  throw new Error("entry must be plain ASCII");
}
if (Buffer.byteLength(ENTRY, "utf8") !== ENTRY.length) {
  throw new Error("entry byte length must equal its character length");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the gate counts the file's characters exactly.
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
