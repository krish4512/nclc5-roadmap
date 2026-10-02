#!/usr/bin/env node
/* Render the PNG brand assets that can't be SVG:

     assets/icons/apple-touch-icon.png   180×180, iPhone / iPad home screen
     assets/icons/icon-192.png           Android home screen
     assets/icons/icon-512.png           Android splash / install prompt
     assets/icons/icon-maskable-512.png  Android adaptive icon (safe-zone padded)
     assets/og-image.jpg                 1200×630 link preview (WhatsApp, Facebook,
                                         LinkedIn, iMessage, X…)

   Run from the repository root:  node tools/brand-assets.js
   Needs Playwright with Chromium. Uses the fonts in tools/fonts and the
   cheat-sheet previews in assets/cheatsheets/thumbs. */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const MARK = fs.readFileSync(path.join(ROOT, "assets", "brand", "mark.svg"), "utf8");
const MARK_WHITE = fs.readFileSync(path.join(ROOT, "assets", "brand", "mark-white.svg"), "utf8");
let chromium;
try { ({ chromium } = require("playwright")); }
catch (e) { ({ chromium } = require(path.join(execSync("npm root -g").toString().trim(), "playwright"))); }

const font = (family, file, weight) =>
  `@font-face{font-family:'${family}';font-weight:${weight};src:url(data:font/woff2;base64,${fs.readFileSync(path.join(__dirname, "fonts", file)).toString("base64")}) format('woff2');}`;
const FONTS = font("Inter", "inter-latin-500-normal.woff2", 500) + font("Inter", "inter-latin-600-normal.woff2", 600) +
  font("Inter Tight", "inter-tight-latin-800-normal.woff2", 800);
const img = f => "data:image/jpeg;base64," + fs.readFileSync(path.join(ROOT, "assets", "cheatsheets", "thumbs", f)).toString("base64");
const GRAD = "linear-gradient(135deg, #2451d6 0%, #6c47e4 60%, #c2419a 100%)";

/* full-bleed square: iOS and Android round the corners themselves. The white mark
   (bubble + gradient circumflex) sits on the brand gradient; the maskable icon keeps
   it inside the 80% safe zone. */
const icon = (pad) => `<!doctype html><html><head><style>
html,body{margin:0;width:100%;height:100%}
body{display:grid;place-items:center;background:${GRAD}}
i{display:block;width:${pad ? 50 : 66}vw;height:${pad ? 50 : 66}vw;transform:translateY(4%)}
i svg{width:100%;height:100%;display:block}
</style></head><body><i>${MARK_WHITE}</i></body></html>`;

const og = `<!doctype html><html><head><style>${FONTS}
*{box-sizing:border-box}
html,body{margin:0;width:1200px;height:630px;overflow:hidden}
body{position:relative;background:#fbfbfd;font-family:Inter,sans-serif;color:#1d1d1f}
.blob{position:absolute;border-radius:50%;filter:blur(70px);opacity:.55}
.b1{width:520px;height:520px;left:-140px;top:-180px;background:#c9d6ff}
.b2{width:480px;height:480px;right:-60px;bottom:-220px;background:#e3d9ff}
.b3{width:340px;height:340px;right:300px;top:-160px;background:#ffd9ec;opacity:.45}
.brand{position:absolute;left:72px;top:64px;display:flex;align-items:center;gap:14px;font-weight:600;font-size:26px;letter-spacing:-0.01em}
.mark{width:56px;height:56px;display:block;filter:drop-shadow(0 10px 18px rgba(108,71,228,.35))}
.mark svg{width:100%;height:100%;display:block}
.wm b{font-weight:800}.wm span{font-weight:500;color:#515154}
h1{position:absolute;left:72px;top:150px;margin:0;font-family:'Inter Tight',sans-serif;font-weight:800;font-size:92px;line-height:.98;letter-spacing:-0.045em;width:640px}
h1 span{background:${GRAD};-webkit-background-clip:text;background-clip:text;color:transparent}
p{position:absolute;left:72px;top:384px;margin:0;width:560px;font-size:28px;line-height:1.35;color:#515154;font-weight:500;letter-spacing:-0.01em}
.chips{position:absolute;left:72px;bottom:62px;display:flex;gap:12px}
.chips span{font-size:20px;font-weight:600;padding:10px 18px;border-radius:999px;background:#fff;border:1px solid #e6e6eb;box-shadow:0 2px 8px rgba(0,0,0,.04)}
.sheet{position:absolute;width:300px;border-radius:10px;box-shadow:0 30px 60px -20px rgba(20,20,60,.35),0 0 0 1px rgba(0,0,0,.06);background:#fff}
.s1{right:250px;top:120px;transform:rotate(-8deg)}
.s2{right:40px;top:140px;transform:rotate(7deg)}
.s3{right:130px;top:90px;transform:rotate(-1deg)}
</style></head><body>
<i class="blob b1"></i><i class="blob b2"></i><i class="blob b3"></i>
<img class="sheet s1" src="${img("basics.jpg")}"><img class="sheet s2" src="${img("tcf-t3.jpg")}"><img class="sheet s3" src="${img("passe-compose.jpg")}">
<div class="brand"><span class="mark">${MARK}</span><span class="wm"><b>Prêt</b> <span>Français</span></span></div>
<h1>Your French, <span>exam-ready.</span></h1>
<p>A free, research-based French course for NCLC 5 on the TCF Canada and TEF Canada.</p>
<div class="chips"><span>21 modules</span><span>Daily review</span><span>Mock exams</span></div>
</body></html>`;

(async () => {
  const dir = path.join(ROOT, "assets", "icons");
  fs.mkdirSync(dir, { recursive: true });
  const browser = await chromium.launch();
  for (const [file, size, pad] of [["apple-touch-icon.png", 180, false], ["icon-192.png", 192, false], ["icon-512.png", 512, false], ["icon-maskable-512.png", 512, true]]) {
    const p = await browser.newPage({ viewport: { width: size, height: size } });
    await p.setContent(icon(pad)); await p.evaluate(() => document.fonts.ready);
    await p.screenshot({ path: path.join(dir, file) });
    await p.close();
  }
  const p = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await p.setContent(og, { waitUntil: "load" }); await p.evaluate(() => document.fonts.ready);
  await p.screenshot({ path: path.join(ROOT, "assets", "og-image.jpg"), type: "jpeg", quality: 86 });
  await browser.close();
  console.log("wrote assets/icons/*.png and assets/og-image.jpg");
})();
