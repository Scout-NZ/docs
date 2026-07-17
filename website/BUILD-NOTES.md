# BUILD-NOTES — Te Awhi website

A complete, production-ready static site: vanilla HTML/CSS/JS, no frameworks,
no build step. Every page works opened straight from the file system and
deploys unchanged to any static host.

## What is here

```
website/
├── index.html                  Home
├── kaupapa.html                Our Kaupapa (values, history, governance)
├── services/
│   ├── index.html              Services overview
│   ├── awhi-mai.html           ┐
│   ├── awhi-whanau.html        │
│   ├── tiaki-mai.html          │ seven service pages, all built from
│   ├── awhi-atu.html           │ the same repeatable template
│   ├── raranga-tahi.html       │
│   ├── tipu-ora-kainga-rua.html│
│   └── te-whanau-pataka.html   ┘
├── stories.html                Our Stories / Impact
├── careers.html                Join Us
├── contact.html                Contact / Get Support (+ crisis section)
├── privacy.html                Interim privacy statement
├── accessibility.html          Interim accessibility statement
├── assets/
│   ├── css/design-tokens.css   THE single source of truth for all style values
│   ├── css/styles.css          Components; references tokens only
│   ├── js/main.js              Progressive enhancement only (~2 KB)
│   ├── fonts/*.woff2           Fraunces + Albert Sans, self-hosted (see below)
│   └── img/favicon.svg
├── CONTENT-NEEDED.md           The content checklist for the team
└── BUILD-NOTES.md              This file
```

## Deployment

Copy the `website/` directory contents to any static host (Netlify, Cloudflare
Pages, GitHub Pages, S3, or plain nginx/Apache). There is nothing to compile.
Suggested host config, none of it required:

- Serve `index.html` at the root; 404s can point at `index.html` or a custom page.
- Cache `assets/` aggressively (fonts and CSS are fingerprint-free, so use
  `Cache-Control: max-age=86400` or add fingerprints if you later automate).
- The canonical URLs assume `https://teawhi.co.nz` — update the
  `<link rel="canonical">` and `og:url` tags if the domain differs.

## Design tokens

`assets/css/design-tokens.css` holds every colour, font, size, spacing,
radius, shadow, and motion value, with the WCAG contrast results recorded in
the header comment. `styles.css` and inline `style=""` attributes reference
tokens only — a grep for `#[0-9a-f]` or `px` values in the HTML returns
nothing outside SVG artwork.

One deliberate exception: **inline SVG artwork** (logo, koru motif, awa line,
favicon) carries literal colour values, because SVG fills cannot reference an
external stylesheet's custom properties when the favicon is loaded standalone.
Those literals mirror `--colour-pounamu-800`, `--colour-pounamu-600`,
`--colour-kokowai-600`, and `--colour-gold`. If the palette ever changes,
update the tokens file first, then these four values in the SVGs.

Contrast rule encoded in the tokens: kōkōwai-600 never sits directly on
pounamu-950 (2.89:1). On dark bands, accents use `--accent-on-dark` (gold)
or the kōkōwai-100 tint.

## Fonts and data sovereignty

Fraunces (display) and Albert Sans (body) are **self-hosted** as subset
variable woff2 files (latin + latin-ext, ~178 KB total, cached after first
page). No Google Fonts CDN, no analytics, no third-party requests of any
kind: visiting this site sends data to no one but the host. This implements
the data-sovereignty stance from the SLT website workshop. The latin-ext
subsets carry the macrons; system serif/sans fallbacks are defined so the
site reads correctly even if fonts fail.

## The awa motif

The animated river line (`.awa`) is an inline SVG in each page, generated
with a per-instance gradient id. With JavaScript, it draws itself when
scrolled into view; without JavaScript, or under `prefers-reduced-motion`,
the full line simply shows. To place one, copy any `<div class="awa"
data-animate>` block. Remove `data-animate` for an always-static line.

## Crisis pathway

"Need help now?" in the header of every page is a native `<details>` element:
one tap opens the panel, the second tap dials 111 or 1737 (`tel:` links).
It works with JavaScript disabled; JS only adds Escape-to-close and
click-outside-to-close. The same content repeats in the footer and on
contact.html#urgent. Wording awaits clinical sign-off (see CONTENT-NEEDED).

## Navigation behaviour

The nav is progressive enhancement done conservatively:

- **No JavaScript**: the toggle button stays `[hidden]`; the nav renders as a
  visible stacked list under the header. Navigation can never be locked away.
- **With JavaScript**: `main.js` reveals the toggle, collapses the nav on
  small screens, and maintains `aria-expanded`.
- **≥ 1024px**: the nav is a horizontal row; the toggle is display:none.

## How to add a service page

1. Copy any existing `services/*.html` file (they share one template).
2. Update: `<title>`, `<meta name="description">`, canonical/og URLs,
   the `<h1>`, lead paragraph, the `.service-meta` chips (rohe + access
   pathway), the four content cards, the numbered "How to get support"
   steps, and the related-services links.
3. Add the service to: the services overview grid (`services/index.html`),
   the home services grid, and the footer services list on every page
   (a find-and-replace across files for the footer block keeps them in sync).
4. Keep the access pathway honest: clinical-referral services use the shared
   three-step wording; self-referral services (like Te Whānau Pātaka) say so
   plainly.

## How to add a story

Copy a `<figure class="story">` block on `stories.html`. Every story must
have written consent (the consent commitments are stated on the page itself
— co-written, reviewed before publishing, removable at any time). Attribute
by service or theme via `.story-service`, never by diagnosis.

## How to list a role

Copy the pattern card in `careers.html#roles` (marked with
`ROLE LISTING PATTERN`). Replace the tag, heading, body, and link. Keep the
expression-of-interest card at the end even when roles are listed.

## Decisions to review

1. **Two rohe framing** (Kirikiriroa head office + Whangārei) — confirmed by
   you at plan stage, matching the Notion strategy.
2. **Design tokens without the prototype** — the prototype file never reached
   the build environment; the token values were proposed from the brief
   (pounamu, kōkōwai, Fraunces/Albert Sans, awa motif) plus the Notion brand
   documents, and confirmed by you at plan stage. If the prototype surfaces
   and differs, only `design-tokens.css` (and the four SVG literals) change.
3. **Internal service names used** (Tipu Ora / Kāinga Rua / Te Whānau Pātaka)
   pending the leadership naming decision.
4. **No analytics** shipped. If analytics are added later, choose a
   sovereignty-respecting option (self-hosted, e.g. Plausible/Umami) and
   update privacy.html to match.
5. **Utility pages beyond scope** — privacy.html and accessibility.html were
   added as interim pages because the SLT workshop lists both as launch
   must-haves and the footer links to them.
6. **Em/en dashes** are excluded from all copy, te reo is never italicised,
   and macrons render in both font subsets — per the Notion voice rules.

## Verification run (2026-07-17)

- 15 pages: HTML structure parsed clean; one `<h1>` per page; heading order
  has no skips; `<main>`, skip link, and landmarks on every page.
- All internal links and anchors resolve; zero broken references.
- Contrast: every colour pairing computed against WCAG 2.1 AA (results in
  design-tokens.css header).
- Rendered checks in headless Chromium at 360, 768, and 1440 widths:
  layout, nav collapsed/open states, crisis panel open (tel links reachable
  in two taps), no-JS rendering (nav visible, content readable, awa static),
  `prefers-reduced-motion` (awa dash offset 0, no animation), first Tab
  lands on the skip link.
- Weight: heaviest page 228 KB including all CSS/JS/fonts (budget 500 KB
  excluding images); fonts are 178 KB of that and cache across pages.
