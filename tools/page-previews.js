#!/usr/bin/env node
/* Render a link-preview image (1200×630) for each page that has an
   illustration, into assets/og/PAGE.jpg. tools/partials.py then points that
   page's og:image at it; pages without one keep assets/og-image.jpg.

   Run from the repository root after changing the art or the PAGES list:
     node tools/page-previews.js && python3 tools/partials.py
   Needs Playwright with Chromium. */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
let chromium;
try { ({ chromium } = require("playwright")); }
catch (e) { ({ chromium } = require(path.join(execSync("npm root -g").toString().trim(), "playwright"))); }

/* page → [art, eyebrow, title, line] */
const PAGES = {
  "learn": ["learn", "The course", "From first sounds to NCLC 5", "21 research-based modules, A1 to B1."],
  "start": ["start", "Placement check", "Where should you start?", "12 questions · 2 minutes · free."],
  "review": ["review", "Review", "Daily review", "Spaced repetition: see each card just before you forget it."],
  "exam": ["exam", "Exam", "TCF & TEF mock exam", "All four skills, timed, with an estimated NCLC."],
  "prep": ["topics", "Exam prep", "Speaking, writing and guides", "60 speaking topics, writing models, free guides."],
  "guide-nclc-5-score-chart": ["cover-score", "Free guide", "NCLC 5 score chart", "TCF and TEF Canada scores, skill by skill."],
  "guide-tcf-vs-tef": ["cover-tcf-tef", "Free guide", "TCF Canada vs TEF Canada", "Format, timing and scoring compared."],
  "guide-tcf-task-2": ["cover-task2", "Free guide", "TCF speaking Task 2", "Question patterns and a full example."],
  "guide-tcf-task-3": ["cover-task3", "Free guide", "TCF speaking Task 3", "A five-part template and a model answer."],
  "guide-how-long-b1": ["cover-b1", "Free guide", "How long to reach B1?", "Realistic timelines at 1 or 2 hours a day."],
  "whats-new": ["whats-new", "Updates", "What's new", "New features, newest first."],
  "certificate": ["certificate", "Course complete", "Your certificate", "Finish all 21 modules to unlock it."],
  "contact": ["contact", "Help", "Contact & FAQ", "A real person replies within two business days."]
};

const font = (family, file, weight) =>
  `@font-face{font-family:'${family}';font-weight:${weight};src:url(data:font/woff2;base64,${fs.readFileSync(path.join(__dirname, "fonts", file)).toString("base64")}) format('woff2');}`;
const FONTS = font("Inter", "inter-latin-500-normal.woff2", 500) + font("Inter", "inter-latin-600-normal.woff2", 600) +
  font("Inter", "inter-latin-700-normal.woff2", 700) + font("Inter Tight", "inter-tight-latin-800-normal.woff2", 800);
const GRAD = "linear-gradient(135deg, #2451d6 0%, #6c47e4 60%, #c2419a 100%)";
/* the illustration colours and classes, straight from the site's stylesheet */
const css = fs.readFileSync(path.join(ROOT, "assets", "site.css"), "utf8");
const ART_CSS = css.slice(css.indexOf("/* ---------------- illustrations"), css.indexOf("/* page heroes"));
const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

const page = ([art, eyebrow, title, line]) => {
  const wide = art.startsWith("cover-");
  return `<!doctype html><html><head><style>${FONTS}
:root{--sans:Inter,sans-serif;--italic:Georgia,serif}
${ART_CSS}
*{box-sizing:border-box}
html,body{margin:0;width:1200px;height:630px;overflow:hidden}
body{position:relative;background:#fbfbfd;font-family:Inter,sans-serif;color:#1d1d1f}
.blob{position:absolute;border-radius:50%;filter:blur(70px);opacity:.55}
.b1{width:520px;height:520px;left:-160px;top:-200px;background:#c9d6ff}
.b2{width:520px;height:520px;right:-80px;bottom:-240px;background:#e3d9ff}
.brand{position:absolute;left:72px;top:60px;display:flex;align-items:center;gap:14px;font-weight:600;font-size:24px}
.mark{width:48px;height:48px;border-radius:13px;background:${GRAD};display:grid;place-items:center;color:#fff;font-family:'Inter Tight';font-weight:800;font-size:30px;line-height:1;padding-bottom:3px;box-sizing:border-box}
.copy{position:absolute;left:72px;top:170px;width:${wide ? 520 : 510}px}
.eb{font-size:22px;font-weight:700;color:#2451d6;margin:0 0 14px}
h1{margin:0;font-family:'Inter Tight',sans-serif;font-weight:800;font-size:${title.length > 26 ? 60 : 72}px;line-height:1.02;letter-spacing:-0.04em}
p{margin:22px 0 0;font-size:27px;line-height:1.35;color:#515154;font-weight:500}
.art-box{position:absolute;right:${wide ? 48 : 40}px;top:${wide ? 150 : 90}px;width:${wide ? 560 : 560}px}
.art-box .art.cover{border-radius:28px;box-shadow:0 30px 60px -24px rgba(20,20,60,.3),0 0 0 1px rgba(0,0,0,.05)}
.url{position:absolute;left:72px;bottom:54px;font-size:20px;font-weight:600;color:#86868b}
</style></head><body>
<i class="blob b1"></i><i class="blob b2"></i>
<div class="brand"><span class="mark">ê</span>Prêt Français</div>
<div class="copy"><div class="eb">${esc(eyebrow)}</div><h1>${esc(title)}</h1><p>${esc(line)}</p></div>
<div class="art-box">${fs.readFileSync(path.join(ROOT, "assets", "art", art + ".svg"), "utf8")}</div>
<div class="url">Free French course for the TCF &amp; TEF Canada</div>
</body></html>`;
};

(async () => {
  const dir = path.join(ROOT, "assets", "og");
  fs.mkdirSync(dir, { recursive: true });
  const browser = await chromium.launch();
  const p = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  for (const [name, spec] of Object.entries(PAGES)) {
    await p.setContent(page(spec), { waitUntil: "load" }); await p.evaluate(() => document.fonts.ready);
    await p.screenshot({ path: path.join(dir, name + ".jpg"), type: "jpeg", quality: 84 });
  }
  await browser.close();
  console.log("wrote " + Object.keys(PAGES).length + " previews to assets/og/");
})();
