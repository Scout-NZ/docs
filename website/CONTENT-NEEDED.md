# CONTENT-NEEDED — Te Awhi website

Every gap in the built site is wrapped in a greppable marker. To find them all:

```
grep -rn "PLACEHOLDER\|FRONT-END ONLY" website/
```

This checklist groups those markers into work items, with a suggested owner
(owners drawn from the Notion content-gaps registers). Nothing below blocks
internal review of the site; every item blocks public launch unless noted.

## 1. Sign-offs on copy already in place

- [ ] **Crisis wording** (header panel on every page, contact page, footer).
      Confirm the 111 / 1737 wording and add any local crisis-team numbers.
      Owner: clinical leadership. *Blocks launch.*
- [ ] **Outcome and headline figures** with an internal source line for each,
      and confirm calendar vs financial year: 30+ years, 89 kaimahi,
      138 respite stays, Tipu Ora 28 to 55, 40% Kāinga Rua saving,
      200+ more people reached in 2025. Appears on Home, Stories & Impact,
      Tiaki Mai, Tipu Ora and Kāinga Rua pages. Owner: SLT. *Blocks launch.*
- [ ] **Pull-quotes from Tū Whānau** ("Talk to us like we are human beings",
      "A safe place...") require written consent. Home + Stories pages.
      Owner: comms with practice leads. *Blocks launch.*
- [ ] **Awhi Mai framing** is the interim draft; the "front door" description
      awaits the Tū Haumana position description. Owner: Kate / SLT.
- [ ] **Raranga Tahi (Whangārei) copy** requires clinical sign-off.
      Owner: clinical leadership. *Blocks launch of that page.*
- [ ] **Service naming**: internal names used (Tipu Ora, Kāinga Rua,
      Te Whānau Pātaka with macron); the current public site says Awhi Ora /
      Te Whanau Pataka. Confirm the public-facing names. Owner: SLT.
- [ ] **Pay and entitlement figures** on Join Us ($28.95/hr, $500 HealthNow,
      KiwiSaver, EAP, mirimiri, chiropractic). Owner: People and Culture.
- [ ] **Mana whenua acknowledgement** (footer): confirm specific iwi and hapū
      naming. Owner: cultural sign-off. *Blocks launch.*
- [ ] **Whakataukī use** in the hero and Te Taupunga on Our Kaupapa require
      cultural sign-off (wording is from the internal strategy documents,
      not machine-translated).

## 2. Facts to confirm or supply

- [ ] **Public phone, email, street and postal addresses** for both offices
      (currently: 386 Peachgrove Road Hamilton / 07 852 5413 /
      admin@tawct.org.nz; 9 Matipo Place Woodhill Whangārei / 09 430 2403 —
      all drawn from internal documents and marked "to confirm" there).
      Owner: operations. *Blocks launch.*
- [ ] **Charity registration (CC) number and NZBN** for the footer.
      Owner: finance/ops.
- [ ] **Social media links**, if any are to be listed. Owner: comms.
- [ ] **Cost note** ("most of our services are funded so whānau do not pay")
      to be confirmed by finance and SLT.

## 3. Content to create

- [ ] **Photography** (3 slots built and marked, more welcome):
      1. Home hero: a calm, lived-in space (marae ātea, whare interior, harakeke).
      2. Our Kaupapa: whenua or awa from Kirikiriroa or Whangārei.
      3. Join Us: kaimahi in real settings.
      Real, consented photography only; signed releases; no stock imagery of
      distressed faces. When placing images, add `width`/`height` attributes,
      `loading="lazy"` (below the fold), and descriptive alt text.
      Owner: SLT and comms. *High priority — placeholders are presentable
      but photography carries the warmth.*
- [ ] **Stories**: two summary story blocks are drafted from internal material
      and two quote blocks are in place, all pending consent and co-writing.
      Working list from the internal hub: Andrew, Tania, Thomas, Gabriel, Chris.
      Owner: comms with practice leads, using the consent process on the page.
- [ ] **Board listing** with consented photos and short bios (Our Kaupapa,
      Governance section). Owner: Tumuaki's office.
- [ ] **Senior leadership listing** with consent. Owner: Tumuaki's office.
- [ ] **Downloadable documents**: annual reports, financial statements, and
      the public-facing Raranga Tahi evaluation summary when approved.
      Owner: SLT / comms.
- [ ] **Role listings** for Join Us as vacancies open (the pattern card is in
      the page, ready to copy). Owner: People and Culture.
- [ ] **Full privacy and data-sovereignty statement** (interim statement is
      live on privacy.html). Owner: SLT / ops. *Blocks launch.*
- [ ] **Full accessibility statement** with a review date (interim statement
      is live on accessibility.html). Owner: web/ops.

## 4. Technical wiring (see BUILD-NOTES.md)

- [ ] **Contact form handler**: the form on contact.html is front-end only,
      marked with `<!-- FRONT-END ONLY -->`. Point its `action` at a form
      service or endpoint that fits the data-sovereignty stance.
      *Blocks launch — until then the form does not send.*
- [ ] **Open Graph image** (`og:image`): none is set. Supply a 1200x630
      image (ideally from the photo library) and add the tag to each page.
- [ ] **Official logo vectors**: the wordmark, A mark, and favicon on the
      site are SVG recreations traced from the supplied image files. If the
      original designer's vector files (AI/EPS/SVG) exist, swap them in —
      the three locations are listed in BUILD-NOTES.md under "The logo".
- [ ] **Domain**: canonical URLs are set to https://teawhi.co.nz — confirm
      this is the launch domain (the strategy documents also mention
      teawhi.org.nz).
