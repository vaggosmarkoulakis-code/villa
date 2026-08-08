# Design Review: Villa (Τυμπάκι)

**Date**: 2026-08-07
**URL**: http://localhost:5173 (`/`, `/menu`, `/en`, `/en/menu`)
**Widths tested**: 319 / 375 / 768 / 1024 / 1440
**Method**: computed-style measurement in the live page (contrast ratios, line-box counts, box geometry) plus visual passes. Findings below cite the measured value, not an impression.

## Overall Impression

Confident and coherent — the warm paper/night palette, the gold hairlines and the display/body pairing read as a deliberate identity rather than a template. The problems are not taste problems: they are a handful of mechanical defects (one leaked `align-items`, one display size applied to headings it was not sized for) plus a missing action hierarchy. Fix the top three and this looks professionally made at every width.

---

## Findings

### High

- **Contact-strip tiles are unequal heights** at `.contact-strip` (home + menu) — the strip is `display: grid`, but it also matches the shared flex rule `.villa-lockup, .nav-links, .nav-actions, .hero-links, .contact-strip, .site-footer { display: flex; align-items: center }` in [globals.css](app/globals.css). The later `.contact-strip` block overrides `display` but never `align-items`, so the grid computes `align-items: center` and the tiles never stretch. Measured at 1440: row height 92px, tiles `64 / 64 / 92 / 64 / 64`, tops at `704 / 704 / 690 / 704 / 704`. At 768 it is `64 / 64 / 92 / 64 / 64` again. The address tile visibly bulges out of an otherwise even row. → `.contact-strip { align-items: stretch; }`

- **Display headings break into 4–5 ragged lines** at `.atmosphere-copy h2` and `.location-section h2`. The 92–94px step was sized for the one-word headings (`Signature.`, `Events.` — both 1 line). Applied to real sentences it collapses:
  - `.atmosphere-copy h2` — 94px in a 374px column → **5 lines**, line widths `280 / 236 / 374 / 224 / 240`. One line fills the column, the rest sit at ~60%.
  - `.location-section h2` — 92px in 501px → **4 lines**, widths `264 / 379 / 322 / 156`; the address ends on a 156px orphan (`156`).
  → add `text-wrap: balance` to the display-h2 group and give multi-word headings their own step, e.g. `clamp(40px, 5vw, 68px)`. The hero line already does this correctly (`text-wrap: balance` → a clean 433/376 break).

### Medium

- **Cards advertise interactivity they do not have** — `.signature-card` animates on hover (border colour, shadow, −6px lift, 900ms image zoom) and `.event-card` scales its image, but both are `<article>` elements with `cursor: auto` and no wrapping link. Every hover invites a click that does nothing. → wrap signature cards in a link to the menu route and event cards in `tel:`, or remove the lift/zoom.

- **No primary action anywhere** — every CTA on the site is the same 12px/900 uppercase text link: `Δες τον κατάλογο`, `Κλείσε τραπέζι`, `Βρες μας στον χάρτη`, `Δες το Instagram`. The hero's three quick links (`INFO` / `MENU` / `ΚΡΑΤΗΣΗ`) are also identical to each other. For a bar, the reservation is the money action and it never wins the squint test. → promote reservation to a filled or outlined button in the hero and the events section; keep text links for everything secondary.

- **Touch targets shrink in the tablet band (761–1180px)** — the ≥44px rules live inside `@media (max-width: 760px)`, so at 768px (a touch device) **16 interactive elements** measure under 44px: `.hero-links a` 18px tall, `.text-link` 18px, `.nav-cta` 17px, `.language-switch` 34×34, `.nav-links a` 37px. → move that block to `@media (hover: none), (max-width: 1024px)`.

- **Eight near-identical shadows** — `0 14px 42px/.14`, `0 28px 82px/.28`, `0 24px 70px/.14`, `0 26px 78px/.18`, `0 16px 42px/.26`, `0 16px 42px/.22`, `0 14px 40px/.05`, plus `--shadow: 0 28px 90px/.16`. Nobody can perceive 24px vs 26px vs 28px of blur offset; the inconsistency is what shows. → collapse to `--shadow-sm / --shadow-md / --shadow-lg`.

- **Stacked photography becomes disproportionately tall below 1180px** — `.atmosphere-section` drops to one column but `.atmosphere-media` keeps `aspect-ratio: 4/5` and `3/4` at full width. Measured: **865×1082 and 865×1154 at 1024**, 645×807 and 645×860 at 768. That is ~2,200px of consecutive photo between the pillars and the menu preview. → override to `aspect-ratio: 16/10` (or `max-height: 60vh`) inside the 1180 query.

- **The type scale has near-duplicate steps.** Rendered at 1440: **92px and 94px** (two display sizes 2px apart, from two different clamps), **34 / 35 / 36 / 40px** (four mid steps), and **15.12px vs 16.56px** for two texts doing the same job (`.pillar p` vs `.section-lead`). → one display step, one mid step, one body step.

- **Twelve labels render at 10px** — `.atmosphere-facts span`, `.signature-copy span`, `.menu-list span`, `.event-card-copy span`, `.map-details span`. Contrast is healthy (5.75–9.37:1); the issue is size: 10px uppercase at 0.26em tracking is at the edge of comfortable. → 11px floor.

- **Two Villa logos at the top of the menu page, on different left edges** — nav lockup at `x=153, y=25` (72×64), hero logo at `x=101, y=153` (188×169). 64px apart vertically, **53px apart horizontally**, so they read as a mistake rather than a repeat. (The 53px gap is structural: the floating nav's inner edge sits at 153px while page sections use a `max(20px, 7vw)` = 101px gutter.) → drop the hero logo on the menu page, or align it to the page gutter.

### Low

- `.footer-credit` measures **4.49:1** at 11px — one hundredth under AA. Alpha `0.46` → `0.56` clears it.
- Section padding: `.pillars` is 96px, every other section is 102px.
- Grid gutters: 14px (`.signature-row`, `.events-grid`) vs 10px (`.contact-strip`).
- Border radius: 8px (17 uses), 6px (`.site-nav`), 5px (`.map-details`).
- The `prefers-reduced-motion` block resets `animation-duration` but not `animation-delay`, so `.hero-tagline` (820ms) and `.hero-line` (1060ms) still pop in late for those users. → add `animation-delay: 0ms !important`.
- `.link-row .text-link + .text-link:hover` changes colour with `transition-duration: 0s` — an instant snap next to links that ease.
- No `loading="lazy"` on the nine photographs; signature thumbnails render at 162×223 from 1200×1400 sources.
- Filtering the menu collapses the list from 1005px to 253px with no height transition — the page jumps under the cursor.
- Signature cards are staggered on the home page (`nth-child(even) { margin-top: 44px }`) but flush on the menu page — the same component with two presentations.

### Not a finding

- **No dark mode.** The site commits to one fixed theme (warm paper sections, night sections) with no `prefers-color-scheme` handling. For a night bar that is a defensible identity choice, not an omission — noted here so it does not get "fixed" later by accident.

---

## What Looks Good

- **Token discipline.** Every colour resolves through `--paper / --cream / --gold / --gold-light / --night / --muted`; no raw hex in components.
- **Contrast on dark surfaces is strong** — 9.37:1 (kickers), 9.43:1 (pillar body), 15.66:1 (hero line), 17.71:1 (facts). Nothing disappears.
- **Layout shift is designed out.** Every photo container reserves space via `aspect-ratio` or `min-height` before the image loads.
- **`text-wrap: balance` on the hero line** produces a 433/376 break — the pattern the display headings need.
- **Focus is visible everywhere** — a gold 2px ring at 4px offset on every interactive element.
- **The menu filter is well built** — active state uses colour *and* an underline (not colour alone), rows stagger at 45ms, 12 → 3 rows correctly.
- **No horizontal scroll at any width tested**, including 319px.
- **Reduced motion is respected** at all — rare in this kind of site.

---

## Status after the redesign pass (same day)

Fixed and re-measured: contact-strip heights (all tiles equal, tops aligned), display heading wraps (5 lines → 3, 4 lines → 2 at 1440; 1 line each at 768), cards now real links, one primary button introduced, touch targets moved to `@media (hover: none)`, shadows collapsed to three tokens, stacked photos capped at 16/10 below 1180px (865×1154 → 645×403), type scale reduced to five steps with no near-duplicates, 10px labels raised to 11px, footer credit contrast 4.49 → 6.39, `prefers-reduced-motion` now clears animation delays, `.link-row` hover eased, duplicate logo removed from the menu hero, nav aligned to the page gutter (one left edge at 101px), radius unified to 8/4, gutters unified to 14px, `loading="lazy"` on all nine photographs.

Still open: the menu filter still collapses the list height with no transition, and the photographs are served at a single large size rather than a responsive `srcset`.

## Top 3 Fixes

1. `.contact-strip { align-items: stretch }` — one line, removes the most visible defect on two pages.
2. Give multi-word display headings their own smaller step plus `text-wrap: balance` — stops the 5-line and 4-line-with-orphan wraps.
3. Decide what the cards are: wrap `.signature-card` / `.event-card` in links, or strip the hover lift so they stop promising a click.
