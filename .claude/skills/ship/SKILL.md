---
name: ship
description: Ship the current Prêt Français changes — rebuild generated files, run QA, add a What's new entry, commit, open a PR to main, merge it and sync the working branch.
disable-model-invocation: true
---

# Ship

Run these in order and stop at the first failure (fix it, or tell the user).

1. **Rebuild generated files** (only what's affected, but when unsure run all):
   ```bash
   python3 tools/partials.py
   node tools/build-index.js
   NODE_PATH=$(npm root -g) node tools/cheatsheets.js   # when course titles/content changed; must show no CLIPPED/OVERFLOW
   ```
2. **QA:** `tools/qa/run.sh` must end with "All N checks passed".
3. **What's new:** for a change learners can see, add an `<li>` at the top of the `<ol class="log">` in `whats-new.html`:
   - date it the day after the newest entry;
   - write 1–3 plain-English bullets;
   - move `<span class="new">New</span>` to it.

   Update README tables if files or features changed. Re-run `python3 tools/partials.py`.
4. **Commit** on the session's working branch (never on `main`):
   - a short title, then a body explaining what and why;
   - end with the attribution lines from the session's system reminder, if there is one;
   - no model names in the commit, PR or code.
5. **Push:** `git push -u origin <branch>`. Retry up to 4 times with backoff on network errors only.
6. **PR:** open one to `main` with the GitHub tools. The body has "What changed" and "Testing" (paste the QA result line), and ends with the PR attribution lines from the system reminder.
7. **Merge** the PR (merge commit), then sync:
   ```bash
   git fetch origin main && git merge --ff-only origin/main && git push origin <branch>
   ```
8. **Tell the user:**
   - the PR link as `[owner/repo#N](url)`;
   - what shipped, in one or two lines;
   - anything you skipped and why.
