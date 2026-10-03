# Prêt Français — notes for Claude

Free French course for NCLC 5 / CEFR B1 (TCF Canada and TEF Canada). It's a static site of plain HTML, CSS and JS on GitHub Pages: no framework, no build step, no `package.json`. Live: https://krish4512.github.io/nclc5-roadmap/

## Layout
- Main pages:
  - `today.html` (Today)
  - `learn.html` (Course renderer)
  - `review.html` (Daily review)
  - `exam.html` + `exam-data.js` (mock exam)
  - `prep.html` (Exam prep)
- `quiz.html`, `conjugate.html`, `speak.html`, `roadmap.html`, `topics.html`, `writing.html` and `guides.html` are redirect stubs only. Leave them as redirects.
- Course data: `assets/course-1.js` … `course-4.js`, `course-t2.js`, `course-5.js`, each holding `window.COURSE.modules.push({...})`. Modules are numbered in the order they're pushed.
- Per-lesson side data:
  - `assets/course-practice.js` (`NCLC_PRACTICE`)
  - `assets/course-visuals.js` (`NCLC_VISUALS`, which mixes data and code)
  - `assets/course-writing.js`
- Site text, prices and the paywall switch: `assets/config.js`. Shared JS and CSS: `assets/site.js`, `assets/site.css`.
- Brand: `assets/brand/`. Read its README before touching the logo or colours.

## Course rules (keep these true)
- **Per-lesson lists must line up with `m.lessons`:** `NCLC_PRACTICE.data[id][i]`, `NCLC_VISUALS.data[id][i]`, `NCLC_PRACTICE.quizLesson[id][q]` (a lesson index per quiz question) and `NCLC_PRACTICE.notes[id].m[k]` (a lesson index per mistake).
  - When you add, remove or reorder a lesson, update all of them.
  - `node tools/check-course.js` checks this.
- **Every module and lesson title ends with a small bracket of what you'll learn:** e.g. `The present tense (-er, -ir, -re verbs, depuis)`. `learn.html` (`tH()`) shows the bracket as a lighter line.
- **Lessons stay short:** the rule, at most 3 examples (focus kits excepted) and a `tip` (shown as "Quick tip").
- **No listening or speaking drills inside modules.** Those live in Exam and Exam prep only.
- **Each module has four steps:** Lessons → Practice → Check → Done. Focus kits (`focus: true`, the TCF speaking kits) have Lessons → Check → Done.

## Generated files: never hand-edit
| File | Rebuild with |
|---|---|
| `<!-- partial:… -->` blocks in every page (head, header, footer, tabs, art) | `python3 tools/partials.py` (edit the templates in that script) |
| `assets/course-index.js` (used by Today and Review) | `node tools/build-index.js` |
| `assets/cheatsheets/*` (PDFs, thumbnails, manifest) | `NODE_PATH=$(npm root -g) node tools/cheatsheets.js` (must report no CLIPPED/OVERFLOW) |
| Link-preview and icon images | `tools/page-previews.js`, `tools/brand-assets.js` |

After changing course data, run `node tools/build-index.js` and `node tools/check-course.js`. Regenerate the PDFs when titles or lesson content change.

## Checking your work
- `tools/qa/run.sh` runs the course data check, then the browser QA (`tools/qa/site-qa.js`, which uses Playwright and starts a server on port 8765 if needed).
- `SHOTS=1 tools/qa/run.sh` also saves screenshots to `tools/qa/shots/`.
- All checks must pass before you commit. For visual changes, also look at the page at 360 px and in dark mode.

## Shipping
- For every change people can see, add an entry at the top of `whats-new.html`, move the `New` badge to it, and keep the README tables current.
- Work on the session's branch, then commit → PR to `main` → merge → sync the branch (`git fetch origin main && git merge --ff-only origin/main && git push`).
- `/ship` does this.
- Don't put model names in commits, PRs or code.

## Style
- Write for learners in plain English: short sentences, no jargon.
- French must be correct, including accents and élision. Ask the `french-reviewer` agent to check new or changed French.
- Match the surrounding code: vanilla JS (ES5-style `var`/functions in pages), and CSS custom properties from `site.css`. No new libraries.
