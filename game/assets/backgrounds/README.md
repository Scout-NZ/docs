# Backgrounds

Drop generated scene art here.

- **home.png** — Pip's beach house, the Home scene backdrop. Generate it in
  Higgsfield at **16:9** using the prompt in `../../assets.json` (the "HOME scene
  backdrop" entry). Then either:
  1. commit the image here as `home.png` and set `HOME_BG = 'assets/backgrounds/home.png'`
     in `game/index.html`, **or**
  2. paste the Higgsfield image URL straight into the `HOME_BG` constant.

Until a URL/path is set, the Home scene draws a hand-coded fallback room, so the
game is always playable.
