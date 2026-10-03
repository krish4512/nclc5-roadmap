---
name: site-qa
description: Run the Prêt Français site checks — course data alignment plus the full Playwright browser QA (every page at 1280/390 px in light and dark, links, nav, all modules, visuals at 360 px, progress, check scoring, menu, theme, paywall). Use after changing pages, course data, CSS or JS, before committing, or when the user asks to test, QA or check the site.
---

# Site QA

1. Run the full check from the repo root:

   ```bash
   tools/qa/run.sh
   ```

   It runs `node tools/check-course.js` (fast, no browser), then `tools/qa/site-qa.js`. That script starts `python3 -m http.server 8765` itself if nothing is listening on the port, and needs Playwright (global install is fine).

2. Read the output. Each check prints `PASS` or `FAIL` with up to 12 problems, and the script exits 1 if any check fails.
   - **Course check failures:** a per-lesson list is out of step, or a title is missing its `(bracket)`. Fix the course data (see CLAUDE.md, "Course rules").
   - **Sideways scroll / visuals:** reproduce at the width named, fix the CSS, re-run.
   - **Broken link / missing anchor:** fix the link or add the `id`.
   - **JS errors:** open the page named and fix the error.

3. For visual changes, re-run with screenshots and look at the ones for the pages you changed:

   ```bash
   SHOTS=1 tools/qa/run.sh   # saves to tools/qa/shots/ (git-ignored)
   ```

4. Report: how many checks passed, and for each failure, what it was and what you changed. Don't call it done while anything fails. Never weaken or delete a check to get green; fix the site, or tell the user why a check is wrong.

When you add a feature, add a check for it to `tools/qa/site-qa.js` in the same style: `check(name, problems[])`.
