#!/usr/bin/env node
/* Build the free one-page PDF cheat sheets from the course content.

   Reads assets/course-*.js (the same data learn.html renders) and
   assets/course-en.js (English glosses), lays each module out on one
   US Letter page, shrinks the type or trims the lowest-priority items
   until it fits, and writes:

     assets/cheatsheets/<module-id>.pdf       the summary page, then the module's
                                              cheat-code pictures (assets/course-visuals.js)
     assets/cheatsheets/all-modules.pdf       every sheet in one file
     assets/cheatsheets/thumbs/<module-id>.jpg  previews for cheatsheets.html
     assets/cheatsheets/manifest.js           the list cheatsheets.html shows

   Run from the repository root after editing course content:

     node tools/cheatsheets.js

   Needs Playwright with Chromium (npm i -g playwright). Fonts come from
   tools/fonts (Inter, SIL Open Font License) so the PDFs look the same on
   any machine. */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const MARK = fs.readFileSync(path.join(ROOT, "assets", "brand", "mark.svg"), "utf8");
const OUT = path.join(ROOT, "assets", "cheatsheets");
const THUMBS = path.join(OUT, "thumbs");

let chromium;
try { ({ chromium } = require("playwright")); }
catch (e) { ({ chromium } = require(path.join(execSync("npm root -g").toString().trim(), "playwright"))); }

/* ---------- load site data ---------- */
global.window = {};
require(path.join(ROOT, "assets", "config.js"));
for (const f of ["1", "2", "3", "4", "t2", "5"]) require(path.join(ROOT, "assets", "course-" + f + ".js"));
require(path.join(ROOT, "assets", "course-en.js"));
require(path.join(ROOT, "assets", "course-visuals.js"));
const VIS = window.NCLC_VISUALS;
const VIS_CSS = fs.readFileSync(path.join(ROOT, "assets", "course-visuals.css"), "utf8");
const SITE = window.SITE, M = window.COURSE.modules, EN = window.COURSE_EN;
const BASE = /example\.com/.test(SITE.url || "") ? "https://krish4512.github.io/nclc5-roadmap" : SITE.url.replace(/\/$/, "");
M.forEach((m, i) => { m.num = i; });

const LEVELS = {
  Start: { name: "Start here", color: "#6c47e4", hue: "violet" },
  A1: { name: "A1 · Foundations", color: "#2563eb", hue: "blue" },
  A2: { name: "A2 · Everyday French", color: "#0784a8", hue: "cyan" },
  B1: { name: "B1 · Independent user", color: "#e0620d", hue: "orange" },
  Exam: { name: "Exam performance", color: "#b42ac6", hue: "magenta" }
};

const strip = s => String(s || "").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
/* keep bold / italics / French highlighting, drop everything else */
function inline(html) {
  return String(html || "")
    .replace(/<span class='fr'[^>]*>/g, "<span class='fr'>")
    .replace(/<(?!\/?(b|strong|em|i|span)\b)[^>]+>/g, "")
    .replace(/<span(?! class='fr')[^>]*>/g, "<span>")
    .trim();
}
function en(text, mod) {
  const k = strip(text);
  return (EN.scoped[mod + "|" + k] || EN.map[k] || "");
}
function withPerson(person, form) {
  person = strip(person).split("/")[0].trim(); form = strip(form);
  if (!person || /^[-—]/.test(form)) return form;
  if (/^je$/i.test(person) && /^[aeiouyâàéèêëîïôûùüh]/i.test(form)) return "j'" + form;
  return person + " " + form;
}
function fonts() {
  const dir = path.join(__dirname, "fonts");
  const face = (family, file, weight, range) =>
    `@font-face{font-family:'${family}';font-weight:${weight};src:url(data:font/woff2;base64,${fs.readFileSync(path.join(dir, file)).toString("base64")}) format('woff2');unicode-range:${range};}`;
  const LAT = "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+20AC,U+2122,U+2190-2199,U+2212,U+2215";
  const EXT = "U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF";
  let css = "";
  for (const w of [400, 500, 600, 700]) css += face("Inter", `inter-latin-${w}-normal.woff2`, w, LAT) + face("Inter", `inter-latin-ext-${w}-normal.woff2`, w, EXT);
  for (const w of [700, 800]) css += face("Inter Tight", `inter-tight-latin-${w}-normal.woff2`, w, LAT) + face("Inter Tight", `inter-tight-latin-ext-${w}-normal.woff2`, w, EXT);
  return css;
}

/* ---------- pick what goes on a sheet ---------- */
function pickTables(m) {
  const all = [];
  m.lessons.forEach(L => (L.tables || (L.table ? [L.table] : [])).forEach(t => all.push(t)));
  const len = t => t.rows.reduce((n, r) => n + r.reduce((a, c) => a + strip(c).length, 0), 0) / Math.max(1, t.rows.length * t.head.length);
  /* conjugation / phrase tables with audio first, then compact ones */
  const scored = all.map((t, i) => ({ t, i, s: (t.say && t.say.length ? 0 : 1) * 100 + len(t) }));
  scored.sort((a, b) => a.s - b.s);
  return scored.slice(0, 2).sort((a, b) => a.i - b.i).map(x => x.t);
}
function spread(list, n) {
  if (list.length <= n) return list;
  const out = [];
  for (let i = 0; i < n; i++) out.push(list[Math.floor(i * list.length / n)]);
  return out;
}

function tableHtml(t, mod) {
  const say = t.say || [];
  let h = "<table>" + (t.cap ? "<caption>" + esc(strip(t.cap)) + "</caption>" : "") + "<thead><tr>" +
    t.head.map(c => "<th>" + esc(strip(c)) + "</th>").join("") + "</tr></thead><tbody>";
  t.rows.forEach((r, ri) => {
    h += "<tr class='drop' data-p='3' data-o='" + (100 - ri) + "'>";
    r.forEach((c, i) => {
      const key = t.pron && i > 0 ? withPerson(r[0], c) : c;
      const g = c && c !== "—" && (i > 0 || !t.pron) ? en(key, mod) : "";
      h += "<td" + (i === 0 ? " class='k'" : "") + ">" + inline(c) + (g ? "<small>" + esc(g) + "</small>" : "") + "</td>";
    });
    h += "</tr>";
  });
  return h + "</tbody></table>";
}

function sheet(m) {
  const L = LEVELS[m.level] || LEVELS.Start;
  const mod = m.id;
  const url = BASE + "/learn.html#" + m.id;
  const examples = [];
  m.lessons.forEach(Ls => (Ls.examples || []).forEach(e => examples.push(e)));
  if (m.speak) m.speak.lines.forEach(l => examples.push(l));
  /* full model answers are too long for a phrase list */
  const phrases = spread(examples.filter(e => strip(e[0]).length <= 140), 10);
  const tips = m.lessons.filter(Ls => Ls.tip).map(Ls => Ls.tip);
  const left = [], right = [];

  if (m.goals) left.push("<section><h2>You'll be able to</h2><ul class='goals'>" +
    m.goals.map((g, i) => "<li class='drop' data-p='1' data-o='" + (50 - i) + "'>" + inline(g) + "</li>").join("") + "</ul></section>");

  if (m.builder) {
    /* exam modules: the memorised template is the thing to print */
    left.push("<section class='tpl'><h2>" + esc(m.builder.title || "Your answer template") + "</h2>" +
      m.builder.parts.map((p, i) => {
        const fr = esc(p.text).replace(/\{(\w+)\}/g, "<b class='slot'>…</b>");
        const e = en(p.text, mod);
        return "<div class='part drop' data-p='2' data-o='" + (60 - i) + "'><h3>" + esc(p.title) + "</h3><p class='frt'>" + fr + "</p>" +
          (e ? "<p class='ent'>" + esc(e).replace(/\{(\w+)\}/g, "…") + "</p>" : "") + "</div>";
      }).join("") + "</section>");
  } else {
    pickTables(m).forEach(t => left.push("<section class='tbl'>" + tableHtml(t, mod) + "</section>"));
  }

  if (phrases.length) right.push("<section><h2>Key phrases</h2><ul class='ph'>" +
    phrases.map((e, i) => "<li class='drop' data-p='4' data-o='" + (50 - i) + "'><span class='fr'>" + inline(e[0]) + "</span><span class='e'>" + inline(e[1]) + "</span></li>").join("") + "</ul></section>");

  if (m.mistakes) right.push("<section><h2>Avoid these mistakes</h2><ul class='mis'>" +
    m.mistakes.slice(0, 7).map((x, i) => "<li class='drop' data-p='5' data-o='" + (50 - i) + "'><span class='w'>" + inline(x[0]) + "</span><span class='r'>" + inline(x[1]) + "</span><span class='y'>" + inline(x[2]) + "</span></li>").join("") + "</ul></section>");

  if (m.vocab) right.push("<section><h2>Must-know words</h2><ul class='voc'>" +
    m.vocab.slice(0, 14).map((v, i) => "<li class='drop' data-p='6' data-o='" + (50 - i) + "'><b>" + inline(v[0]) + "</b> " + inline(v[1]) + "</li>").join("") + "</ul></section>");

  if (tips.length) right.push("<section class='tip drop' data-p='7' data-o='1'><h2>Tip</h2><p>" + inline(tips[0]) + "</p></section>");

  return `<div class="page" style="--c:${L.color}">
  <header>
    <div class="brand"><span class="mark">${MARK}</span>${esc(SITE.brand)} <span class="free">Free cheat sheet</span></div>
    <div class="lvl">Module ${m.num} · ${esc(L.name)}</div>
    <h1>${esc(m.title)}</h1>
    <p class="sub">${esc(m.subtitle)}</p>
  </header>
  <main class="${m.builder ? "wide" : ""}">
    <div class="col">${left.join("")}</div>
    <div class="col">${right.join("")}</div>
  </main>
  <footer>
    <div><b>Full lessons with audio, drills and mock exams:</b> <a href="${url}">${esc(url.replace(/^https?:\/\//, ""))}</a></div>
    <div class="fine">Independent study resource, not affiliated with France Éducation international, CCI Paris Île-de-France or IRCC. © ${new Date().getFullYear()} ${esc(SITE.legalName)}</div>
  </footer>
</div>`;
}

/* the module's lesson pictures; fitCodes() lays them out and adds pages if needed */
function codes(m) {
  const L = LEVELS[m.level] || LEVELS.Start;
  const list = (VIS.data[m.id] || []).map((spec, i) => spec ? { spec, i } : null).filter(Boolean);
  if (!list.length) return "";
  const url = BASE + "/learn.html#" + m.id;
  const figs = list.map(x => "<div class='cc-fig'><span class='cc-n'>Lesson " + m.num + "." + (x.i + 1) + "</span>" + VIS.render(x.spec, L.hue) + "</div>").join("");
  return `<div class="page cc-page" style="--c:${L.color}">
  <header class="cc-head">
    <div class="brand"><span class="mark">${MARK}</span>${esc(SITE.brand)} <span class="free">Cheat codes</span></div>
    <div class="lvl">Module ${m.num} · ${esc(L.name)}</div>
    <h1>${esc(m.title)}: the rules at a glance</h1>
  </header>
  <div class="cc-body"><div class="cc-inner"><div class="cc-col"></div><div class="cc-col"></div></div><div class="cc-pool">${figs}</div></div>
  <footer>
    <div><b>Every rule with audio and practice questions:</b> <a href="${url}">${esc(url.replace(/^https?:\/\//, ""))}</a></div>
    <div class="fine">Independent study resource, not affiliated with France Éducation international, CCI Paris Île-de-France or IRCC. © ${new Date().getFullYear()} ${esc(SITE.legalName)}</div>
  </footer>
</div>`;
}

/* two balanced columns, scaled to fit; if the pictures would get too small,
   the rest continue on another page */
function fitCodes() {
  const MAXZ = 0.8, MINZ = 0.6;
  const fill = (page, figs, z) => {
    const body = page.querySelector(".cc-body"), inner = page.querySelector(".cc-inner"), cols = inner.querySelectorAll(".cc-col");
    inner.style.width = (body.clientWidth / z) + "px";
    inner.style.transform = "scale(" + z + ")";
    cols.forEach(c => { c.innerHTML = ""; });
    figs.forEach(f => {
      const [a, b] = cols;
      (a.offsetHeight <= b.offsetHeight ? a : b).appendChild(f);
    });
    return Math.max(cols[0].offsetHeight, cols[1].offsetHeight) * z <= body.clientHeight;
  };
  [...document.querySelectorAll(".cc-page")].forEach(first => {
    let page = first, figs = [...first.querySelectorAll(".cc-pool .cc-fig")];
    first.querySelector(".cc-pool").remove();
    let guard = 20;
    while (figs.length && guard--) {
      let z = MAXZ, ok = false;
      for (; z >= MINZ - 1e-9; z -= 0.025) { if (fill(page, figs, z)) { ok = true; break; } }
      if (ok || figs.length === 1) { if (!ok) fill(page, figs, MINZ); page.dataset.z = z.toFixed(3); break; }
      /* too many for one page: keep the first ones here, the rest on a new page */
      let keep = figs.length - 1;
      while (keep > 1 && !fill(page, figs.slice(0, keep), MINZ + 0.1)) keep--;
      fill(page, figs.slice(0, keep), MINZ + 0.1);
      page.dataset.z = (MINZ + 0.1).toFixed(3);
      const next = page.cloneNode(true);
      next.querySelectorAll(".cc-col").forEach(c => { c.innerHTML = ""; });
      next.querySelector("h1").textContent += " (continued)";
      page.after(next);
      page = next; figs = figs.slice(keep);
    }
  });
}

const CSS = `
@page { size: 8.5in 11in; margin: 0; }
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
body { font-family: Inter, "DejaVu Sans", sans-serif; color: #1d1d1f; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
.page { --fs: 9.4px; width: 8.5in; height: 11in; padding: 0.42in 0.46in 0.36in; display: flex; flex-direction: column; overflow: hidden; position: relative; font-size: var(--fs); line-height: 1.38; break-after: page; }
.page::before { content: ""; position: absolute; left: 0; right: 0; top: 0; height: 7px; background: linear-gradient(90deg, var(--c), color-mix(in srgb, var(--c) 40%, #c2419a)); }
header { border-bottom: 1px solid #e6e6eb; padding-bottom: 9px; margin-bottom: 11px; }
.brand { display: flex; align-items: center; gap: 6px; font-weight: 700; font-size: 10px; color: #515154; }
.mark { display: inline-block; width: 18px; height: 18px; vertical-align: -4px; }
.mark svg { width: 100%; height: 100%; display: block; }
.free { margin-left: auto; font-size: 8.5px; font-weight: 700; color: var(--c); border: 1px solid color-mix(in srgb, var(--c) 35%, #fff); background: color-mix(in srgb, var(--c) 8%, #fff); padding: 2px 8px; border-radius: 99px; }
.lvl { margin-top: 10px; font-size: 9px; font-weight: 700; color: var(--c); letter-spacing: 0.02em; }
h1 { font-family: "Inter Tight", Inter, sans-serif; font-weight: 800; font-size: 23px; letter-spacing: -0.015em; word-spacing: 0.04em; line-height: 1.08; margin: 3px 0 4px; }
.sub { margin: 0; color: #515154; font-size: 10.5px; }
main { flex: 1; display: grid; grid-template-columns: 1.08fr 1fr; gap: 16px; min-height: 0; }
main.wide { grid-template-columns: 1.35fr 1fr; }
.col { min-width: 0; display: flex; flex-direction: column; gap: 10px; }
section h2 { display: flex; align-items: center; gap: 6px; font-size: calc(var(--fs) * 1.02); font-weight: 700; letter-spacing: 0.01em; text-transform: uppercase; color: var(--c); margin: 0 0 5px; }
section h2::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--c); }
ul { list-style: none; margin: 0; padding: 0; }
.fr { font-weight: 600; color: #1d1d1f; }
.goals li { position: relative; padding-left: 13px; margin: 2px 0; }
.goals li::before { content: "✓"; position: absolute; left: 0; color: var(--c); font-weight: 700; }
table { width: 100%; border-collapse: collapse; border: 1px solid color-mix(in srgb, var(--c) 28%, #fff); border-radius: 7px; overflow: hidden; font-size: calc(var(--fs) * 0.98); }
caption { text-align: left; font-weight: 700; font-size: calc(var(--fs) * 0.95); color: var(--c); padding: 0 0 3px; }
th { text-align: left; font-size: calc(var(--fs) * 0.88); font-weight: 700; color: color-mix(in srgb, var(--c) 80%, #000); background: color-mix(in srgb, var(--c) 9%, #fff); padding: 4px 6px; }
td { padding: 3.5px 6px; border-top: 1px solid #ececf0; vertical-align: top; }
td.k { font-weight: 700; }
td small { display: block; color: #86868b; font-size: calc(var(--fs) * 0.84); line-height: 1.25; font-weight: 400; }
.ph li { display: flex; flex-direction: column; padding: 3px 0 3px 8px; border-left: 2px solid var(--c); margin-bottom: 4px; }
.ph .e { color: #6e6e73; font-size: calc(var(--fs) * 0.92); }
.mis li { display: grid; grid-template-columns: 1fr 1fr; gap: 0 8px; padding: 4px 0; border-top: 1px solid #ececf0; }
.mis li:first-child { border-top: none; }
.mis .w { color: #c0392b; text-decoration: line-through; text-decoration-color: rgba(192,57,43,.5); }
.mis .w::before { content: "✗ "; text-decoration: none; display: inline-block; }
.mis .r { color: #16865a; font-weight: 600; }
.mis .r::before { content: "✓ "; }
.mis .y { grid-column: 1 / -1; color: #6e6e73; font-size: calc(var(--fs) * 0.9); }
.mis .fr { color: inherit; }
.voc { columns: 2; column-gap: 12px; }
.voc li { break-inside: avoid; margin-bottom: 2px; }
.voc b { font-weight: 600; }
.tip { background: #fdf5e6; border: 1px solid #f3dfb8; border-radius: 8px; padding: 7px 9px; }
.tip h2 { color: #b06a00; }
.tip h2::before { background: #b06a00; }
.tip p { margin: 0; }
.tpl .part { margin-bottom: 7px; padding-left: 8px; border-left: 2px solid color-mix(in srgb, var(--c) 40%, #fff); }
.tpl h3 { margin: 0 0 2px; font-size: calc(var(--fs) * 0.92); color: var(--c); text-transform: uppercase; letter-spacing: 0.02em; }
.tpl .frt { margin: 0; font-weight: 500; }
.tpl .ent { margin: 2px 0 0; color: #86868b; font-size: calc(var(--fs) * 0.88); }
.slot { color: var(--c); }
footer { margin-top: 10px; padding-top: 8px; border-top: 1px solid #e6e6eb; font-size: 8.6px; color: #515154; }
footer a { color: var(--c); font-weight: 600; text-decoration: none; }
footer .fine { margin-top: 3px; font-size: 7.2px; color: #a1a1a6; }
/* cheat-code pages */
.cc-page { --surface: #fff; --surface-alt: #f5f5f7; --border: #e6e6eb; --border-strong: #d2d2d7; --ink: #1d1d1f; --ink-soft: #515154; --ink-faint: #86868b;
  --serif: "Inter Tight", Inter, sans-serif; --sans: Inter, sans-serif; --italic: Georgia, serif; --shadow-sm: none; }
.cc-head h1 { font-size: 19px; }
.cc-body { flex: 1; min-height: 0; overflow: hidden; position: relative; }
.cc-inner { display: flex; gap: 14px; align-items: flex-start; transform-origin: 0 0; }
.cc-col { flex: 1 1 0; min-width: 0; display: flex; flex-direction: column; gap: 12px; }
.cc-fig { break-inside: avoid; }
.cc-n { display: block; font-size: 11px; font-weight: 700; color: var(--c); margin: 0 0 4px 4px; letter-spacing: .02em; }
.cc-fig .vis { margin: 0; }
.cc-fig .vconj { grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); }
.cc-fig .vsc { grid-auto-flow: row; grid-template-columns: repeat(auto-fit, minmax(118px, 1fr)); }
.cc-fig .vsteps { grid-auto-flow: row; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); }
.cc-fig .vsteps li + li::before { display: none; }
.cc-page .cc-fig .vgrid table { table-layout: fixed; }
.cc-page .cc-fig .vgrid th, .cc-page .cc-fig .vgrid td { white-space: normal; overflow-wrap: anywhere; hyphens: auto; }
.hue { --c-soft: color-mix(in srgb, var(--c) 9%, #fff); --c-line: color-mix(in srgb, var(--c) 30%, #fff); --c-ink: color-mix(in srgb, var(--c) 85%, #1d1d1f); --c-glow: color-mix(in srgb, var(--c) 22%, transparent); }
.h-violet { --c: #6c47e4; } .h-blue { --c: #2563eb; } .h-cyan { --c: #0784a8; } .h-orange { --c: #e0620d; } .h-magenta { --c: #b42ac6; }
` + VIS_CSS;

/* shrink type, then drop the lowest-priority items, until the page fits */
function fitAll() {
  document.querySelectorAll(".page:not(.cc-page)").forEach(page => {
    const main = page.querySelector("main");
    const over = () => [...main.querySelectorAll(".col")].some(c => c.scrollHeight > main.clientHeight + 0.5);
    let fs = 9.4;
    while (over() && fs > 7.6) { fs -= 0.2; page.style.setProperty("--fs", fs + "px"); }
    let guard = 200;
    while (over() && guard--) {
      const items = [...page.querySelectorAll(".drop")].filter(el => el.isConnected);
      if (!items.length) break;
      items.sort((a, b) => (+b.dataset.p - +a.dataset.p) || (+a.dataset.o - +b.dataset.o));
      const el = items[0], parent = el.parentNode;
      el.remove();
      /* never leave a heading or an empty table behind */
      const sec = parent.closest("section");
      if (sec && !sec.querySelector(".drop, p, li:not(.drop)")) sec.remove();
      else if (parent.tagName === "TBODY" && !parent.children.length) parent.closest("section").remove();
    }
    page.dataset.fs = fs.toFixed(1);
    page.dataset.over = over() ? "1" : "0";
  });
}

(async () => {
  fs.mkdirSync(THUMBS, { recursive: true });
  const head = "<!doctype html><html lang='fr'><head><meta charset='utf-8'><style>" + fonts() + CSS + "</style></head><body>";
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 816, height: 1056 } });
  const thumb = await browser.newPage({ viewport: { width: 816, height: 1056 }, deviceScaleFactor: 0.5 });
  const report = [];
  for (const m of M) {
    await page.setContent(head + sheet(m) + codes(m) + "</body></html>", { waitUntil: "load" });
    await page.evaluate(() => document.fonts.ready);
    await page.evaluate(fitAll);
    await page.evaluate(fitCodes);
    const cc = await page.$$eval(".cc-page", ps => ps.map(p => p.dataset.z));
    /* anything cut off inside a picture: a scroll box that overflows, or text sticking out of its card */
    const clipped = await page.$$eval(".cc-page .vis *", els => els.filter(e => {
      if (e.scrollWidth > e.clientWidth + 1 && getComputedStyle(e).overflow !== "visible") return true;
      const box = e.parentElement && e.parentElement.closest(".vcol, .vcard, .vpair, .vbx, .vsc > div, .vsteps li, .vgrp");
      return !!box && e.getBoundingClientRect().right > box.getBoundingClientRect().right + 1;
    }).map(e => (e.className || e.tagName) + ":" + e.textContent.slice(0, 20)));
    const info = await page.$eval(".page", p => ({ fs: p.dataset.fs, over: p.dataset.over, dropped: 0 }));
    await page.pdf({ path: path.join(OUT, m.id + ".pdf"), width: "8.5in", height: "11in", printBackground: true });
    await thumb.setContent(await page.content(), { waitUntil: "load" });
    await thumb.evaluate(() => document.fonts.ready);
    await thumb.screenshot({ path: path.join(THUMBS, m.id + ".jpg"), type: "jpeg", quality: 80 });
    report.push(m.id + " fs=" + info.fs + (info.over === "1" ? " OVERFLOW" : "") + " codes=" + cc.length + "p z=" + cc.join(",") + (clipped.length ? " CLIPPED " + clipped.slice(0, 4).join(" | ") : ""));
  }
  await page.setContent(head + M.map(m => sheet(m) + codes(m)).join("") + "</body></html>", { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(fitAll);
  await page.evaluate(fitCodes);
  await page.pdf({ path: path.join(OUT, "all-modules.pdf"), width: "8.5in", height: "11in", printBackground: true });
  await browser.close();
  /* list read by cheatsheets.html */
  fs.writeFileSync(path.join(OUT, "manifest.js"), "/* Generated by tools/cheatsheets.js — do not edit. */\nwindow.CHEATSHEETS = " +
    JSON.stringify(M.map(m => ({ id: m.id, num: m.num, level: m.level, title: m.title, subtitle: m.subtitle })), null, 1) + ";\n");
  console.log(report.join("\n"));
})();
