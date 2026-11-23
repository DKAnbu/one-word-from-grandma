# One Word From Grandma

[![make.fun](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)
[![rank](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/DKAnbu/one-word-from-grandma/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)
[![reward](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/DKAnbu/one-word-from-grandma/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)

A [make.fun](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16) entry for **One Word From Grandma**: the single word grandma would text about AI.

## The word

**robit**

Grandma's typo for "robot" — five letters, one glance, and you can hear her saying it.

## Why this word

The judge weighs five criteria, most important first:

1. **One word grandma would text about AI** — "robit" is exactly one word: no sentence, no phrase, no explanation.
2. **A real grandmother's texting voice, warm and a little baffled** — the classic grandma typo, "robot" with the middle letters swapped by fingers that never quite learned the keyboard.
3. **Funny in one word, no caption needed** — the typo itself is the joke.
4. **Tied to AI, robots and machines** — "robit" is unmistakably a mis-typed "robot", not a word that would fit any subject.
5. **Fresh, not obvious, yet instantly readable** — not the plain word "robot", but still readable at a glance.

## How it works

`main.ts` (Node 22, TypeScript) writes exactly `robit` — no trailing newline, 5 bytes — to `/output/entry.txt`. It is deterministic, uses no network and reads no environment variables, and guards that the word is 1–30 characters, not only whitespace, and contains no newline or whitespace.

## Run it

```sh
node main.ts
```

Then check the output:

```sh
od -c /output/entry.txt
# 0000000   r   o   b   i   t
# 0000005
```
