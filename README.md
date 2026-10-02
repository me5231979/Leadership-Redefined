# Leadership Redefined: the weeks after the Symposium

Two self-paced courses for the Vanderbilt Leadership Redefined cohort, plus a program home page.

| Page | Week | Topics | Capstone work |
|---|---|---|---|
| `index.html` | All | Program home: four-week timeline, capstone requirements, Teams channel | None |
| `course-one/` | Week of Nov 2 | Vision, Strategy & the Future of Vanderbilt · Communication, Storytelling & Brand · Mission and Margin | Brief sections 1 to 3 |
| `course-two/` | Week of Nov 9 | Entrepreneurial Mindset · Reputational Stewardship · High-Performing Teams | Brief sections 4 to 7 |

The capstone brief is due Friday, November 20.

Both courses follow the Working Smarter reference pattern (`me5231979/Course_Library`, `learn/index.html`). That covers the book-mode pager, theme scopes, brand palette and type, progress engine, and the Chancellor's charge section. Each course has this section spine:

- welcome
- belief
- the Chancellor's charge
- how it works
- three teaching sections of four pages each
- capstone studio
- knowledge check (with an L1 feedback email)
- summary
- this week's checklist
- sources and glossary
- wrap-up

## What is in each teaching section

Each section has:

- a "you are here" line
- an eyebrow
- a headline with one italic word
- "The idea"
- interactive modules
- a **capstone ask** (an individual step, then a pod step)
- a **Teams post prompt**, adapted from the program's "Charting the Course" prompts

## Interactions

All are built in `src/app.js`. Each one is keyboard operable and announces its result to screen readers.

- **Flip cards and myth/fact toggles**
- **Sorters:** classify each statement, then read the expert explanation.
- **Explorable diagrams:** an SVG plus buttons that fill a live detail panel.
- **Dilemmas:** choose a response, then read our take.
- **Self-assessments:** sliders that roll up into bar charts and a written read.
- **Portfolio allocator:** points plotted live on the mission and margin matrix.
- **Builders:** fields that assemble into a draft the learner can copy or download as text. These produce the capstone artifacts.
- **Checklists**
- **Copyable pod meeting agendas**

## Sources

- Program content comes from the Leadership Redefined module decks and the LMS export (Modules 1 to 6).
- **Module 5 (Reputational Stewardship):** this deck has no speaker content. The section draws on Modules 1 and 2 and on the Chancellor's book *Reputation Rules*.
- **Module 6 (High-Performing Teams):** this deck has no Candice Storey Lee content. The section is built from her public interviews and statements, which are linked in the section and in Resources.
- **Verify the Lee quotations before launch.** They were gathered from search results; the linked pages themselves were not fetched to confirm exact wording.

## Build

Edit the files in `course-*/parts/*.html` and `course-*/course.json`, or the shared `src/` files. Then run:

```
python3 tools/build.py
```

The build writes `index.html`, `course-one/index.html` and `course-two/index.html`. Each is a single self-contained file that loads fonts and images from `assets/`. The build also fails loudly on em or en dashes (it prints `dashes=N`).

### Privacy contract

- Progress is per-section booleans plus the last-open page, stored in `localStorage` under `lr-c1-` / `lr-c2-`.
- Typed text is never stored, and nothing is sent anywhere.
- Copy and download happen on the learner's own device.

## Testing

Serve the repo root first:

```
python3 -m http.server 8765
```

### Smoke test

```
node tools/smoke.mjs course-one [shotsDir]
```

It checks that:

- every page and every interaction round-trips
- downloads fire
- the quiz scores correctly
- a cold deep link to `#p/capstone/2` routes to the right page
- nothing overflows at 320px
- the console is clean

### Accessibility audit

```
node tools/a11y-audit.mjs path/to/axe.min.js course-one/ course-two/ index.html
```

The audit runs axe-core with the WCAG 2.0, 2.1 and 2.2 A/AA tags. It checks every book page at 1440 and 320 wide, with flip cards, sorters, dilemmas, explore panels and checklists in their answered states.

## Accessibility run record

**2026-10-02:** passed.

- axe: zero serious or critical violations on every page of both courses and the home page, at 1440px and 320px.
- Smoke: both courses passed with no console errors and no horizontal overflow at 320px.
- Contrast fixes made in this build:
  - Oak `#946E24` falls to 4.19:1 on the cream card fill, so small labels on cards in light sections are black.
  - Cream sections use black accents.
  - The off-brand `#8C6822`, `#7A5C1E` and `#A94438` from the reference source are mapped to the approved palette.
- Book pages are `tabindex="0"` so scrollable pages are keyboard reachable.
