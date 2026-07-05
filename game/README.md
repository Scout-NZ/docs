# 🍍🦀 Crabby World: The Colour Rescue

A tiny, simple 2D platformer prototype for phones — built for an 8-year-old to
pick up and play. One self-contained HTML file, no install, no build step.

## Story

The **grey crabs** have stolen all the colour from Crabby World! Play as
**Pinny**, the one-eyed pineapple crab, and bounce on the grey crabs to bring
the colour back to life. The more crabs you defeat, the more colourful the
world becomes (watch the **COLOUR** meter at the top).

## How to play

- **◀ ▶** — walk left / right
- **JUMP** — hop
- **Land on a grey crab** from above to pop it and restore colour
- Grab the **golden fruit** for points
- Reach the **pink flag** to finish the level
- You have 3 ❤️ — don't get bumped by a crab from the side, and don't fall!

Keyboard also works on a computer: **arrow keys** to move, **space** to jump.

## Play it on your phone

1. Open `game/index.html` in your phone's web browser.
   - Easiest way: email/AirDrop/message the file to yourself and tap it, or
     host this folder anywhere static (e.g. GitHub Pages) and open the link.
2. Turn your phone **sideways (landscape)** for the best view.
3. Tap **PLAY** and rescue the colour!

> Tip: In most mobile browsers you can tap the share menu and choose
> "Add to Home Screen" to make it feel like a real app (fullscreen, its own icon).

## Notes for grown-ups

- Everything is drawn with the HTML5 canvas — there are **no image or sound
  files**, so the whole game is just this one `index.html`.
- It's a **prototype**: **6 short levels**, deliberately easy and forgiving
  (the crab count ramps up as you go, and every level has solid ground so a
  young player can always reach the flag).
- Pinny the pineapple crab **always stays full colour** — only the world around
  her loses its colour, and it fills back in as you defeat the grey crabs.
- Easy to extend — levels live in the `LEVELS` array near the top of the
  `<script>`, drawn as simple text maps:
  `X` = ground, `P` = Pinny's start, `G` = grey crab, `o` = fruit, `F` = flag.
- **Jump to a level:** add `#3` (etc.) to the end of the URL to start on that
  level — handy for showing off a favourite or picking up where you left off.
