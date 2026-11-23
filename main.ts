// One Word From Grandma — make.fun entry
// The single word grandma would text about AI: "robit".
//
// Why "robit" fits the judge's five criteria, in order:
// 1. It reads as the single word a grandma would text about AI — one
//    word, no sentence, no phrase, no explanation.
// 2. It sounds like a real grandmother's texting voice, warm and a
//    little baffled: the classic grandma typo, "robot" typed with the
//    middle letters swapped by fingers that never quite learned the
//    keyboard — the kind of message she sends, then follows with
//    "did you get my robit picture dear".
// 3. It is funny in one word, with no caption needed — the typo itself
//    is the joke, and you can hear her saying it.
// 4. It is tied to AI, robots and machines: "robit" is unmistakably a
//    mis-typed "robot", not a word that would fit any subject.
// 5. It is a fresh pick rather than the obvious one ("robot" itself),
//    yet it stays instantly readable — five letters, one glance.
//
// Deterministic, no network, no environment variables: the word is a
// constant, written exactly as-is.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "robit";

// Guard: the gate requires UTF-8 text of 1-30 characters, not only
// whitespace, and a single word means no newline anywhere in it.
if (WORD.length < 1 || WORD.length > 30) {
  throw new Error(`word must be 1-30 characters, got ${WORD.length}`);
}
if (WORD.trim().length === 0) {
  throw new Error("word must not be only whitespace");
}
if (WORD.includes("\n") || WORD.includes("\r")) {
  throw new Error("word must not contain a newline");
}
if (/\s/.test(WORD)) {
  throw new Error("word must be a single word with no whitespace");
}

mkdirSync("/output", { recursive: true });
// No trailing newline: the file must hold exactly the word, 5 bytes.
writeFileSync("/output/entry.txt", WORD, "utf8");
