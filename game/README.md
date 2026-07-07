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
- **CLAW** — swipe your claw at crabs right in front of you (short cooldown)
- **Land on a grey crab** from above to pop it — or claw it — to restore colour
- Grab the **watermelon slices** 🍉 for points
- Grab a floating **heart** ❤️ for an extra life (up to 5)
- Reach the **pink flag** to finish the level
- You have 3 ❤️ — don't get bumped by a crab from the side, and don't fall!

Keyboard also works on a computer: **arrow keys** to move, **space** to jump,
**X** (or K / J / Shift) to claw.

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
- The art style is a 16-bit-inspired pixel-platformer look with layered
  atmosphere: parallax silhouette skylines unique to each world (waterfalls,
  turning gears, crate mesas, giant glowing mushrooms, ruined towers), drifting
  ambient motes (leaves / bubbles / spores / ash), a starry night sky in the
  darker worlds, neighbour-aware textured tiles with vines and wildflowers,
  outlined sprites with squash-and-stretch, and a soft vignette for depth.
- It's a **prototype**: **6 themed worlds plus a boss stage** — Emerald Falls,
  Coral Gear Coast, Palm Cove, Box Mountains, Mushroom Marsh, Monochrome
  Wasteland, and finally **Ashclaw's Keep**. Each world has its own sky/palette,
  platform style (grass, wooden crate, mossy stone) and a wooden name banner.
  Deliberately easy and forgiving (crab count ramps up, every world has solid
  ground so a young player can always reach the flag, and the floating platforms
  are all placed within jumping reach).
- **Boss finale:** reach the end to face **General Ashclaw**, a giant spiky crab.
  Stomp or claw him six times — each hit brings back more colour — to win. His
  health shows in a bar at the top.
- **COLOUR TIDE — the core system.** Every world starts drained and shifts
  through four states as you play: **GREY → FADED → COLOURFUL → RAINBOW RUSH**.
  - The tide **rises** when you stomp/claw crabs (extra for Paint-Suckers),
    collect watermelons, or smash Grey Nests.
  - It **drains** while Paint-Sucker Crabs or Grey Nests stay alive, and dips
    when you get hit — the grey is always trying to return.
  - Clear every crab and nest and the level **stabilises**, triggering a one-time
    **RAINBOW RUSH**: confetti, a rainbow trail, double points, and boosted
    jump/speed/claw for a few seconds.
  - The world reacts: wildflowers bloom from FADED, butterflies and **hidden
    watermelons appear at COLOURFUL**, coral fans grow on Coral Gear Coast,
    tiny mushrooms sprout in Mushroom Marsh, and colourful worlds calm the
    crabs slightly. The claw also reaches further when the world is colourful.
- **New drain enemies:** the **Paint-Sucker Crab** (pulsing grey aura, visibly
  inhaling colour streaks) and the **Grey Nest** (spiky 3-hit mound that drains
  colour and hatches grey crabs until destroyed).
- Pinny the pineapple crab **always stays full colour** — as do the watermelons,
  the flag and the HUD — so they're always easy to see even in a grey world.
- **Collect watermelon slices** (🍉 counter) and earn **stars** (★) for defeating
  crabs. HUD shows a Pinny portrait, hearts, the Colour Tide meter (with state
  name and threshold ticks), and a level timer.
- **CRAB SHOP between levels:** spend watermelons on Jump Boost, Claw Power,
  Speed Boots, **Colour Boost** (start levels brighter and slow the grey drain),
  or an Extra Heart. Upgrades last the whole run.
- **Hybrid crab enemies that fight back**, each with its own attack:
  - **Grey** and **crate** crabs *charge* — they shake to wind up, then dash at
    Pinny (crate crabs are armoured and take two hits).
  - **Red** crabs fire a fast pinch shot.
  - **Flower** crabs puff drifting pollen.
  - **Mushroom** crabs float spores up into the air.
  - You can **swipe projectiles out of the air with the claw**, or just jump/dodge.
- **Boss** General Ashclaw also fires a fan of spores as you wear him down.
- Easy to extend — levels live in the `LEVELS` array near the top of the
  `<script>`, drawn as simple text maps:
  `X` = ground, `P` = Pinny's start, `G` = grey crab, `o` = fruit, `F` = flag.
- **Jump to a level:** add `#3` (etc.) to the end of the URL to start on that
  level — handy for showing off a favourite or picking up where you left off.
