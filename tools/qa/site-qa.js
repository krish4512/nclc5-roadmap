#!/usr/bin/env node
/* Browser QA for the whole site. Run: node tools/qa/site-qa.js  (or tools/qa/run.sh)
   Starts a local server if none is running on PORT (default 8765), then checks:
   every page at 1280 and 390 px in light and dark (JS errors, sideways scroll),
   internal links and anchors, the nav, every course module (title, steps, no
   leftover listen/speak sections, links), module progress, focus kits, visuals
   at 360 px, Try it, checkpoints, the mobile menu and theme toggle, and the paywall switch.
   Prints PASS/FAIL per check and exits 1 on any failure.
   SHOTS=1 also saves screenshots to tools/qa/shots/ (git-ignored). */
const fs = require("fs"), path = require("path"), http = require("http"), { spawn, execSync } = require("child_process");
const ROOT = path.join(__dirname, "..", "..");
const PORT = +(process.env.PORT || 8765), U = "http://localhost:" + PORT + "/";
const SHOTS = !!process.env.SHOTS, SHOT_DIR = path.join(__dirname, "shots");

function playwright() {
  try { return require("playwright"); } catch (e) {}
  return require(path.join(execSync("npm root -g").toString().trim(), "playwright"));
}
const up = () => new Promise(r => http.get(U, res => { res.resume(); r(true); }).on("error", () => r(false)));

const PAGES = ["today.html", "learn.html", "index.html", "start.html", "cheatsheets.html", "review.html", "exam.html",
  "pricing.html", "contact.html", "privacy.html", "terms.html", "404.html", "prep.html", "guide-nclc-5-score-chart.html",
  "guide-tcf-vs-tef.html", "guide-tcf-task-2.html", "guide-tcf-task-3.html", "guide-how-long-b1.html", "whats-new.html", "certificate.html"];
const NAV = { "today.html": "Today", "learn.html": "Course", "review.html": "Review", "exam.html": "Exam", "index.html": null, "pricing.html": null };

const results = [];
function check(name, problems) {
  results.push([name, problems]);
  console.log((problems.length ? "FAIL " : "PASS ") + name + (problems.length ? "\n  - " + problems.slice(0, 12).join("\n  - ") + (problems.length > 12 ? "\n  … " + (problems.length - 12) + " more" : "") : ""));
}
function linkProblems(from, hrefs) {
  const out = [];
  for (const h of hrefs) {
    if (!h || /^(https?:|mailto:|tel:|javascript:)/.test(h) || h === "#" || h.startsWith("#")) continue;
    const [file, hash] = h.split("#"), f = file.split("?")[0];
    if (!fs.existsSync(path.join(ROOT, f))) { out.push(from + " → broken link " + h); continue; }
    if (hash && f !== "learn.html" && !/^today\.html$/.test(f) && !fs.readFileSync(path.join(ROOT, f), "utf8").includes('id="' + hash + '"')) out.push(from + " → missing anchor " + h);
  }
  return out;
}

(async () => {
  let server = null;
  if (!(await up())) {
    server = spawn("python3", ["-m", "http.server", String(PORT)], { cwd: ROOT, stdio: "ignore" });
    for (let i = 0; i < 50 && !(await up()); i++) await new Promise(r => setTimeout(r, 100));
  }
  if (SHOTS) fs.mkdirSync(SHOT_DIR, { recursive: true });
  const shot = async (p, name) => { if (SHOTS) await p.screenshot({ path: path.join(SHOT_DIR, name + ".png") }); };
  const { chromium } = playwright();
  const b = await chromium.launch();
  try {
    /* 1. every page, two widths, two themes */
    const errs = [], over = [], links = [];
    for (const scheme of ["light", "dark"]) for (const w of [1280, 390]) {
      const ctx = await b.newContext({ viewport: { width: w, height: 900 }, colorScheme: scheme });
      for (const pg of PAGES) {
        const p = await ctx.newPage();
        p.on("pageerror", e => errs.push(pg + " " + w + " " + scheme + ": " + e.message));
        await p.goto(U + pg, { waitUntil: "load" }); await p.waitForTimeout(400);
        const sw = await p.evaluate(() => document.documentElement.scrollWidth);
        if (sw > w) over.push(pg + " at " + w + "px " + scheme + ": page is " + sw + "px wide");
        if (w === 1280 && scheme === "light") links.push(...linkProblems(pg, await p.$$eval("a[href]", as => as.map(a => a.getAttribute("href")))));
        if (w === 390) await shot(p, pg.replace(".html", "") + "-390-" + scheme);
        await p.close();
      }
      await ctx.close();
    }
    check("Pages load without JavaScript errors (" + PAGES.length + " pages × 4)", errs);
    check("No sideways scroll at 1280 and 390 px, light and dark", over);
    check("Internal links and anchors resolve", links);

    /* 2. nav: four places, the right one marked */
    const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
    const pe = []; p.on("pageerror", e => pe.push(e.message));
    const nav = [];
    for (const [pg, sec] of Object.entries(NAV)) {
      await p.goto(U + pg);
      const got = await p.$$eval("#site-nav a", a => a.map(x => x.textContent.trim() + (x.getAttribute("aria-current") ? "*" : "")));
      const want = ["Today", "Course", "Review", "Exam"].map(x => x + (x === sec ? "*" : "")).concat([pg === "pricing.html" ? "Get Pro*" : "Get Pro"]);
      if (JSON.stringify(got) !== JSON.stringify(want)) nav.push(pg + ": " + JSON.stringify(got) + " (want " + JSON.stringify(want) + ")");
    }
    check("Nav shows Today · Course · Review · Exam with the current page marked", nav);

    /* 3. every module */
    await p.goto(U + "learn.html"); await p.evaluate(() => localStorage.clear());
    const mods = await p.evaluate(() => COURSE.modules.map(m => ({ id: m.id, focus: !!m.focus, n: m.lessons.length })));
    const mp = [];
    for (const m of mods) {
      await p.goto(U + "learn.html#" + m.id); await p.waitForTimeout(150);
      const r = await p.evaluate(() => ({
        h1: (document.querySelector(".mod-head h1") || {}).textContent || "",
        lessons: document.querySelectorAll("article.lesson").length,
        chips: [...document.querySelectorAll(".toc-bar a")].map(a => a.textContent.replace(/^\d/, "")).join("·"),
        left: document.querySelectorAll("#sec-reading,#sec-listen,#sec-speak,.sayit-b,.shadow-list,.rl,.sound-card").length,
        sw: document.documentElement.scrollWidth,
        links: [...document.querySelectorAll("#view a[href]")].map(a => a.getAttribute("href")) }));
      if (!r.h1) mp.push(m.id + ": no heading");
      if (r.lessons !== m.n) mp.push(m.id + ": shows " + r.lessons + " of " + m.n + " lessons");
      const want = m.focus ? "Lessons·Check·Done" : "Lessons·Practice·Check·Done";
      if (r.chips !== want) mp.push(m.id + ": steps are " + r.chips + " (want " + want + ")");
      if (r.left) mp.push(m.id + ": " + r.left + " leftover listening/speaking blocks");
      if (r.sw > 1280) mp.push(m.id + ": page is " + r.sw + "px wide");
      mp.push(...linkProblems(m.id, r.links));
    }
    check("All " + mods.length + " modules render with the right steps and no listen/speak leftovers", mp);

    /* 4. progress ring and auto checklist reach 100% */
    const prog = [];
    await p.evaluate(() => { const m = COURSE.modules.find(x => x.id === "imparfait"), c = { imparfait: { tried: {}, wrote: 1, best: 90 } }; m.lessons.forEach((_, i) => c.imparfait.tried[i] = 1); localStorage.setItem("nclc5-course", JSON.stringify(c)); });
    await p.goto(U + "learn.html#imparfait"); await p.reload(); await p.waitForTimeout(400);
    const ring = await p.locator("#mring").innerText();
    if (!/100%/.test(ring)) prog.push("ring shows " + ring);
    if (!(await p.evaluate(() => JSON.parse(localStorage.getItem("nclc5-course")).imparfait.done))) prog.push("module not marked done");
    await shot(p, "module-done");
    check("Finishing practice + writing + check marks a module done", prog);

    /* 5. answering the check stores a score */
    const qc = [];
    await p.evaluate(() => localStorage.clear()); await p.goto(U + "learn.html#passe-compose"); await p.reload(); await p.waitForTimeout(300);
    for (const q of await p.$$(".quiz-q")) { const bt = await q.$(".opts button"); if (bt) await bt.click(); }
    const score = await p.textContent("#qscore").catch(() => "");
    if (!/Score:/.test(score || "")) qc.push("no score after answering: " + score);
    check("The module check can be answered and scored", qc);

    /* 6. visuals fit at 360 px */
    const vp = await b.newPage({ viewport: { width: 360, height: 800 } }); const vo = [];
    await vp.goto(U + "learn.html");
    for (const id of await vp.evaluate(() => Object.keys(NCLC_VISUALS.data))) {
      await vp.goto(U + "learn.html#" + id); await vp.waitForTimeout(250);
      const r = await vp.evaluate(() => { const out = []; document.querySelectorAll("figure.vis").forEach((f, i) => {
        f.querySelectorAll(".vcol li, .vcol, .vpair, .vcard, .vgrid, .vbx, .vgrp, .vsteps li, .vsc > div").forEach(e => { if (e.scrollWidth > e.clientWidth + 1) out.push("figure " + i + " ." + e.className.split(" ")[0] + " " + e.scrollWidth + ">" + e.clientWidth); });
      }); return out.concat(document.documentElement.scrollWidth > 360 ? ["page " + document.documentElement.scrollWidth + "px wide"] : []); });
      r.forEach(x => vo.push(id + ": " + x));
    }
    await vp.close();
    check("Cheat-code pictures fit on a 360 px phone", vo);

    /* 7. focus kits have no Practice step but a working checklist */
    const fk = [];
    for (const m of mods.filter(x => x.focus)) {
      await p.goto(U + "learn.html#" + m.id); await p.waitForTimeout(250);
      if (await p.$("#sec-practice")) fk.push(m.id + ": has a Practice section");
      if (!(await p.$("#auto-list"))) fk.push(m.id + ": no checklist");
    }
    check("TCF speaking kits: Lessons, Check, Done only", fk);

    /* 8. mobile menu + theme toggle */
    const ui = [];
    const mob = await b.newPage({ viewport: { width: 390, height: 800 } });
    await mob.goto(U + "index.html"); await mob.click("[data-menu-toggle]"); await mob.waitForTimeout(200);
    if ((await mob.$eval("#site-nav", n => getComputedStyle(n).display)) === "none") ui.push("mobile menu does not open");
    await shot(mob, "menu-390");
    await mob.click("[data-menu-toggle]"); await mob.click("[data-settings]"); await mob.click('[data-k="theme"][data-v="dark"]');
    const th = await mob.evaluate(() => [document.documentElement.getAttribute("data-theme"), localStorage.getItem("nclc5-theme")]);
    if (th[0] !== "dark" || th[1] !== "dark") ui.push("theme toggle gave " + JSON.stringify(th));
    await mob.close();
    check("Mobile menu opens and the Aa panel switches to dark", ui);

    /* 9. paywall switch in config.js */
    const pw = [];
    const pp = await b.newPage();
    await pp.route("**/assets/config.js", async r => { const res = await r.fetch(); r.fulfill({ response: res, body: (await res.text()).replace(/^(\s*)paywall:\s*false\s*,/m, "$1paywall: true,") }); });
    await pp.goto(U + "exam.html?s=writing"); await pp.waitForTimeout(300);
    if (!(await pp.$(".paywall"))) pw.push("exam writing is not locked when paywall: true");
    await pp.close();
    check("Turning the paywall on locks Pro features", pw);

    check("No JavaScript errors during the interactive checks", pe);
  } finally {
    await b.close();
    if (server) server.kill();
  }
  const failed = results.filter(r => r[1].length).length;
  console.log("\n" + (failed ? failed + " of " + results.length + " checks FAILED" : "All " + results.length + " checks passed") + (SHOTS ? " · screenshots in tools/qa/shots/" : ""));
  process.exit(failed ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
