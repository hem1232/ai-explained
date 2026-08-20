# AI, Explained — starter site

A plain HTML/CSS/JS starter for a comprehensive AI/ML learning site. No build step,
no framework — open `index.html` directly in a browser or deploy the folder as-is
to any static host (GitHub Pages, Netlify, Vercel, S3, etc).

## What's built

- `index.html` — homepage with hero + the interactive "Concept Constellation"
  (an SVG map of topics/relationships that doubles as navigation)
- `tracks.html` — full 10-track curriculum index, with anchors matching the
  constellation's links
- `concepts/what-is-ai.html` — **Foundations** track, fully built gold-standard page
- `concepts/neural-networks.html` — **Deep Learning** track, fully built, with an
  interactive hover diagram
- `concepts/transformers.html` — **NLP/LLM** track, fully built, advanced-level example
- `styles/main.css` — the whole design system (colors, type, components)
- `scripts/main.js` — shared header/footer injection, mobile nav, diagram tooltip wiring

Everything else in `tracks.html` (the other ~30 topics) is mapped and linked but not
yet written — that's your content backlog.

## The content template (use this for every new page)

Every concept page follows the same seven blocks — copy `concepts/what-is-ai.html`
as your starting point for a new page:

1. **Plain-English version** — explain it like you would to a smart friend outside the field
2. **Formal version** — the precise technical explanation, terminology included
3. **Flow diagram** — an inline SVG showing the actual process (see `.diagram-card`
   CSS class; use `.interactive-diagram` + `data-tip` attributes for hover explanations,
   see `neural-networks.html` for the pattern)
4. **Worked example** — real numbers or a concrete walkthrough (`.example-box`)
5. **Where this shows up** — a real product/company using it (`.usecase-box`)
6. **Common misconceptions** — 2–3 myth/fact pairs (`.misconception`)
7. **Where to go next** — 2–3 links to prerequisite/follow-on concepts (`.next-steps`)

## Adding a new concept page

1. Copy an existing file in `concepts/` as your template
2. Update: `<title>`, meta description, sidebar links, kicker/track name, and all
   seven content blocks
3. Add the page to `NAV_LINKS` in `scripts/main.js` if it should appear in the
   top nav, and link to it from `tracks.html` and the homepage constellation
   (swap a `tracks.html#...` placeholder link for the new page's real URL)

## Design system reference

Colors, type, and component classes are all defined in `styles/main.css` with
comments. Key tokens:

- `--signal-blue` — primary actions, Foundations track
- `--signal-teal` — Deep Learning/NLP track, "relationship" lines
- `--signal-amber` — worked examples, Applied/Frontier track
- Fonts: Fraunces (headings), Inter (body), IBM Plex Mono (code/labels)

## Suggested next steps

- Write out the remaining ~30 mapped topics using the template above —
  prioritize Core ML and the rest of the LLM Ecosystem track first (highest
  search demand)
- Add a search bar (even a simple client-side fuzzy search over a JSON index
  of all pages would work well without a framework)
- Consider a lightweight static-site generator (11ty is a good no-framework-feel
  option) once you have 15–20 pages, to avoid hand-editing the header/footer
  markup on every file
- Add `og:image` / social preview cards per page once designs stabilize
