# Leadership Redefined: the weeks after the Symposium

Two self-paced, narrated courses for the Vanderbilt Leadership Redefined cohort, plus a program home page.

Both courses are built on the **Vanderbilt Voyage Online** engine (`me5231979/Voyage_Online`) and match its look and copy density:

- one idea per page
- each page has a headline, one line of why, and one activity
- narration carries the depth
- details sit one tap away

## Live site

GitHub Pages serves the site from the `gh-pages` branch, which mirrors the course branch.

| Page | Link |
|---|---|
| Program home | https://me5231979.github.io/Leadership-Redefined/ |
| Course One | https://me5231979.github.io/Leadership-Redefined/course-one/ |
| Course Two | https://me5231979.github.io/Leadership-Redefined/course-two/ |

To publish, run `git push -f origin claude/eloquent-mendel-0qq5xp:gh-pages`.

## The courses

**Course One** runs the week of November 2, takes about 70 minutes, and has 17 tracked activities.

| Lesson | What it covers |
|---|---|
| 1. Vision and strategy | The vision and its areas of focus, four problems the vision answers, the reputation engine (feedback loop and three flywheels), a guess-the-number momentum page, the four growth sites, and the value stick |
| 2. Story and brand | Opens with the Chancellor's Communication video. Brand or reputation, spikes and systems, and a storyline builder |
| 3. Mission and margin | Opens with the Chancellor's Mission and Margin video. Two calls, a portfolio allocator on the mission and margin matrix, and a statement builder |
| 4. Your brief | Focus area practice, a draft of brief sections 1 to 3, a quick check, and the week's commitments |

**Course Two** runs the week of November 9, takes about 65 minutes, and has 17 tracked activities.

| Lesson | What it covers |
|---|---|
| 1. Entrepreneurial mindset | Opens with the Chancellor's video. Vice Chancellor Lutz's fundraising turnaround: the diagnosis, the numbers, the change moves, the four kinds of problem, and a reframe and pilot builder |
| 2. Reputational stewardship | Opens with the Chancellor's video. The four drivers of trust, three calls under pressure, and a reputational statement builder |
| 3. High-performing teams | Opens with the Chancellor's video. Candice Storey Lee fact or fiction, her six principles, three learning-zone calls, and a pod health check |
| 4. Your brief | Strong metrics, a draft of brief sections 4 to 7, a quick check, and the week's commitments |

### The teaching layer

Added after an instructional audit, which found that concepts were named on screen but taught only in the narration.

- **"The idea" cards on every concept page.** Each card gives a definition, how the concept works, and an example. Learners see them before they practice.
- **Worked examples for every builder** ("See a strong example").
- **A "Read along" transcript of the narration on every page,** so the depth is on screen for anyone not listening.
- **A wrap-up page after Lessons 1, 2, and 3.** Each shows three key ideas, then asks learners to explain one back in their own words.
- **An eight-situation knowledge check.** It tests whether learners can apply each idea, not whether they remember a definition. Passing is six of eight.

Answers typed into the builders save in the learner's browser only. They fold into:

- the brief drafts
- a Teams post starter
- a printable takeaway

## Files

- `course-*/index.html`: the pages.
- `course-*/content.js`: everything that drives the activities (drills, situations, tiles, builders, quiz, commitments).
- `course-*/narration-scripts.js`: the words for every narration clip.
- `course-*/config.js`: the contact address, video files and caption slots, and the narration folder.
- `assets/js/lr-engine.js`: the shared engine. It is the Voyage `app.js` made generic, plus three additions: builders, the allocator, and the self-check.
- `assets/js/pager.js`: book mode.
- `assets/css/`: the Voyage styles (`course.css`, `foundation.css`, `voyage.css`, `nav.css`) plus `lr.css`.
- `assets/video/`: the Chancellor's five intros: Communication, Mission and Margin, Entrepreneurial Mindset, Reputational Stewardship, High-Performing Teams.

## Narration

The scripts are in `course-*/narration-scripts.js`. There is one script per page (about 50 minutes across both courses), plus short clips for each stop, card, principle, and situation.

Every page script follows the same adult learning arc:
- a breadcrumb back to the last page
- why it matters to the learner this month
- the idea taught plainly, with an example
- a prompt to connect it to the learner's own work
- what to do on the page
- a breadcrumb forward

`node tools/narration-check.mjs course-one` confirms four things:
- every page has a script
- every page has a forward breadcrumb
- every teaching page has an experience prompt
- Listen reads the page aloud

### Until the voice is recorded

While `useBrowserVoice: true` is set in each `config.js`, Listen and Auto read each script aloud in the browser's built-in voice.

### Recording the real voice

1. Add the `ELEVENLABS_API_KEY` repository secret.
2. Run **Record narration with ElevenLabs** from the Actions tab.

The workflow records the clips in ElevenLabs voice `bfGb7JTLUnZebZRiFYyq` (set in `.github/tts.json`, with the same settings as Voyage Online), writes them to `assets/audio/<course>/`. It then sets `useBrowserVoice: false` so the recordings play, and publishes the site.

## Before launch

- **Captions.** Add a WebVTT captions file for each video in `assets/video/`, and set `captions` in each `config.js`. Captions are required for WCAG 2.2 AA.
- **Video for Vision and Strategy.** That section has no Chancellor intro video yet.
- **Candice Storey Lee quotes.** Verify them against their linked sources. They were gathered from search results; the source pages themselves were not opened.

## Testing

Serve the repo root first:

```
python3 -m http.server 8765
```

Then run the two checks:

- `node tools/smoke-v.mjs course-one [shotsDir]` drives every activity, then checks progress, persistence, overflow at 320px, and the console.
- `node tools/takeaway-check.mjs course-one` enters something in every field and makes a choice in every activity, then checks that each one appears in the printed takeaway, both live and after a reload.
- `node tools/a11y-audit.mjs path/to/axe.min.js course-one/ course-two/ index.html` runs axe-core with the WCAG 2.x A/AA tags at 1440px and 320px.

**Last run, 2026-10-02:**

- Smoke test: every activity completes in both courses (15/15 and 17/17), answers persist after reload, nothing overflows at 320px, and the console is clean.
- axe: zero serious or critical violations on both courses and the home page.
