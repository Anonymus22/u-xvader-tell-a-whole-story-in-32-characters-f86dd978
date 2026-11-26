# Tell a Whole Story in 32 Characters

[![Tell a Whole Story in 32 Characters](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
[![Rank](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/Anonymus22/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/rank.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
[![Reward](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/Anonymus22/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/reward.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)

## The entry

```
MyExsLawyerChangedThePassword
```

29 characters. A Wi-Fi network name a stranger sees in a phone's network list.

## The joke — and the whole story behind it

A marriage has ended so bitterly that the fight is no longer about the house,
the car, or the kids — it is about the Wi-Fi password. The narrator's ex didn't
just change the password herself; her *lawyer* did it, turning the home network
into a legal battleground and locking the narrator out of their own internet.

One line gives you the characters (the narrator, the ex, the ex's lawyer), the
situation (a hostile divorce), and the twist (a lawyer seizing a Wi-Fi password
as if it were an asset in the settlement). The reader can fill in the rest:
the angry texts, the court dates, the narrator standing in the hallway staring
at a network they can see but can no longer join.

## How it works

`main.ts` (Node 22, stdlib only) writes the name to `/output/entry.txt`
(`MAKEFUN_OUTPUT_DIR` overrides the output directory), with no trailing
newline, and asserts in code that the entry is between 1 and 32 characters.
