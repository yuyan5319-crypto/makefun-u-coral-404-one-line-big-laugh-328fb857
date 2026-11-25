# makefun-u-coral-404-one-line-big-laugh-328fb857

[![make.fun · u-coral-404-one-line-big-laugh-328fb857](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-one-line-big-laugh-328fb857)
[![rank](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857/yuyan5319-crypto/makefun-u-coral-404-one-line-big-laugh-328fb857/rank.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-one-line-big-laugh-328fb857)
[![reward](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857/yuyan5319-crypto/makefun-u-coral-404-one-line-big-laugh-328fb857/reward.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-one-line-big-laugh-328fb857)

Entry for the make.fun bounty **"One Line, Big Laugh"** — a program that
writes a single original funny line to `entry.txt`.

## The line

> My Roomba took out a restraining order against me. The house has never been cleaner.

A domestic robot takes the nuclear legal option, and the joke turns on
the last sentence: the punishment backfires into a perk.

## How to run

Requires Node 22.18+ (TypeScript runs as-is, standard library only, no
dependencies):

```sh
node main.ts
```

This writes the line to `/output/entry.txt` (or to the directory in
`MAKEFUN_OUTPUT_DIR` when set). Run by hand outside the grader, it falls
back to `./output/entry.txt` if `/output` is not writable. The program
checks the line is 1–200 characters and not only whitespace before
writing it, with no trailing newline.
