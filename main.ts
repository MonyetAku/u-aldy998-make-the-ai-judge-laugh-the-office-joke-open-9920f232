// Make the AI Judge Laugh: the Office Joke Open
// One-line office joke, written by this program to $MAKEFUN_OUTPUT_DIR/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "At standup I said I was blocked, my manager unblocked me by adding three tickets, and now I'm blocked on the unblocking.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, JOKE, "utf8");
}

main();
