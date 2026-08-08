# Villa — taste, sip, socialize

Website for Villa, a bar with a courtyard in Tympaki, Heraklion, Crete.
Bilingual (Greek primary, English second), two pages, no CMS.

- **Live pages:** `/` and `/menu` (Greek), `/en` and `/en/menu` (English)
- **Address:** Λεωφ. Κόκκινου Πύργου 156, Τυμπάκι 702 00
- **Reservations:** 694 2494413 · 2892 051991
- **Instagram:** [villa_taste_sip_socialize](https://www.instagram.com/villa_taste_sip_socialize/)

## Stack

React 19 + Next 16 (App Router) rendered through [vinext](https://github.com/cloudflare/vinext)
on a Cloudflare Worker. Vite for the build, Tailwind v4 for the reset only —
the design system is hand-written CSS in `app/globals.css`.

## Running it

```bash
npm install
```

```bash
npm run dev
```

`npm run build` runs a bounded build and validates the Worker artifact.
`npm test` builds and then checks the rendered HTML. `npm run lint` runs ESLint.

Node `>=22.13.0` is required. The build scripts are bash and need `curl`,
`flock` and GNU `timeout`.

## Where things live

| Path | What |
| --- | --- |
| `app/content.ts` | Every string on the site, both languages. Edit copy here. |
| `app/globals.css` | The whole design system — tokens, type scale, components. |
| `app/components/` | Page shells, header, footer, cards, the night rail. |
| `app/menu/MenuExplorer.tsx` | The filterable catalogue (the only stateful part). |
| `public/textures/` | The four stone surfaces used as section backgrounds. |
| `public/villa-scenes/` | Venue and dish photography. |
| `worker/index.ts` | Cloudflare Worker entry, including image optimization. |

## Design notes

**Colour** resolves from six tokens — `--night`, `--paper`, `--cream`,
`--brass`, `--brass-lit`, `--olive`. Everything else is mixed from those with
`color-mix`, so there is no raw hex in any component.

**Type** has three voices. Mansalva is the house voice and carries every
heading. Zen Old Mincho names the plates, and only the plates — a mincho serif
is where the sushi side of the kitchen shows up in the type rather than only in
the photography. Manrope handles labels, navigation and buttons.

**The stone.** Each section sits on a photographed slab behind a veil tuned so
the darkest 2% of the slab still clears 5.4:1 against the reading colour. The
veil strengths are the `--veil-*` tokens; lower the percentage for more stone.

**The rail** down the left margin is stamped 18:00 and 03:00 — the only two
times the venue publishes — with a lit dot that tracks scroll position. The
page is one evening.

**Motion** is CSS-driven. Cards arrive on `animation-timeline: view()` with a
per-card `animation-range` offset. Pointer effects (card tilt, event-card
parallax, the highlight on catalogue rows) all come from one hook,
`usePointerField`, which writes `--px`/`--py` and lets CSS decide the rest. It
does not run on coarse pointers or under `prefers-reduced-motion`.

Sections use `overflow: clip` rather than `hidden` on purpose: `hidden` would
make them scroll containers and every `view()` timeline inside would measure
against the section instead of the viewport.

## Content

`CONTENT_GENERAL_INFO.md` holds the full copy in both languages, including the
section intros that are not currently rendered on the pages.
