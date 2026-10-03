/* Brain map: every module as a node in a top-down brain, coloured by how well
   you know it. Needs assets/course-index.js (modules with n / ls / focus).
     grey   — not started
     yellow — learning (started, check not passed yet)
     green  — understood (check 80%+, few missed answers left)
     red    — needs another look (check under 60%, or 3+ missed answers
              that Daily review hasn't cleared yet)
   Reads localStorage only: "nclc5-course" (progress), "nclc5-missed"
   (answers missed in the course) and "nclc5-srs" (Daily review boxes).
   Use: NCLC_BRAIN.render(element) */
(function () {
  var C = window.COURSE_INDEX || { modules: [] };
  var W = 400, H = 500, CX = 200, CY = 255, RX = 185, RY = 235;
  /* rows from the back of the brain (bottom) to the front (top) */
  var ROWS = [2, 3, 3, 3, 2, 3, 2, 3];
  var LV = { Start: "#6c47e4", A1: "#2563eb", A2: "#0b8fb3", B1: "#e0620d", Exam: "#b42ac6" };
  var LABEL = { "new": "Not started", learning: "Learning", good: "Understood", weak: "Needs another look" };

  function read(k, f) { try { return JSON.parse(localStorage.getItem(k) || "null") || f; } catch (e) { return f; } }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;"); }
  function tH(t) { var m = /^(.*?)\s*\(([^()]*)\)\s*$/.exec(String(t)); return m ? esc(m[1]) + " <span class='tb'>(" + esc(m[2]) + ")</span>" : esc(t); }
  function plain(t) { return String(t).replace(/\s*\([^()]*\)\s*$/, ""); }
  /* two hemispheres seen from above, with the notch between them front and back */
  var BRAIN = "M200 40 C 150 6, 40 40, 22 170 C 6 290, 40 450, 150 486 C 176 494, 192 488, 200 474 " +
              "C 208 488, 224 494, 250 486 C 360 450, 394 290, 378 170 C 360 40, 250 6, 200 40 Z";
  function hw(y) { var d = (y - CY) / RY; return RX * Math.sqrt(Math.max(0, 1 - d * d)); }

  /* node positions: rows snake left→right, then right→left, so the path is tidy */
  function layout(n) {
    var pts = [], r = 0, y = 448, left = n;
    while (left > 0 && r < ROWS.length) {
      var k = Math.min(ROWS[r], left), s = Math.min(70, hw(y) * 0.58), shift = r % 2 ? 12 : -12, row = [];
      for (var i = 0; i < k; i++) row.push({ x: CX + shift + (k === 1 ? 0 : (i - (k - 1) / 2) * (k === 2 ? s * 1.3 : s)), y: y });
      if (r % 2) row.reverse();
      pts = pts.concat(row); left -= k; r++; y -= 55;
    }
    return pts;
  }

  /* how well each module is known */
  function weakSpots() {
    var missed = read("nclc5-missed", {}), srs = read("nclc5-srs", {}), cards = srs.cards || {}, out = {};
    Object.keys(missed).forEach(function (id) {
      var x = missed[id], c = cards[id];
      if (x.mod && (!c || c.b < 2)) out[x.mod] = (out[x.mod] || 0) + 1;
    });
    return out;
  }
  function info(m, prog, weak) {
    var p = prog[m.id] || {}, tried = Object.keys(p.tried || {}).length, best = typeof p.best === "number" ? p.best : null;
    var w = weak[m.id] || 0, started = tried > 0 || p.wrote || best !== null || p.done, st;
    if (!started) st = "new";
    else if ((best !== null && best < 60) || w >= 3) st = "weak";
    else if ((best !== null && best >= 80) || p.done) st = "good";
    else st = "learning";
    return { st: st, tried: tried, best: best, wrote: !!p.wrote, weak: w, p: p };
  }

  function nextStep(m, f) {
    var base = "learn.html#" + encodeURIComponent(m.id);
    if (f.st === "new") return [base, "Start Module " + m.num];
    if (f.st === "weak") return [base + "/lessons", "Go over the lessons again"];
    if (f.st === "good") return f.weak ? ["review.html", "Clear your missed answers"] : [base, "Revisit Module " + m.num];
    if (!m.focus && f.tried < m.n) return [base + "/lessons", "Continue the lessons"];
    if (!m.focus && !f.wrote) return [base + "/write", "Do the writing task"];
    return [base + "/check", "Take the check"];
  }

  function panel(m, f) {
    var go = nextStep(m, f);
    var facts = [];
    if (!m.focus) facts.push("<li><b>" + f.tried + " of " + m.n + "</b> lessons practised<span class='bm-bar'><i style='width:" + Math.round(f.tried / Math.max(1, m.n) * 100) + "%'></i></span></li>");
    facts.push("<li>" + (f.best === null ? "Check <b>not taken yet</b>" : "Best check score <b>" + f.best + "%</b>" + (f.best >= 80 ? " ✓" : " (80% passes)")) + "</li>");
    if (!m.focus) facts.push("<li>Writing task <b>" + (f.wrote ? "done ✓" : "not done yet") + "</b></li>");
    if (f.weak) facts.push("<li><b>" + f.weak + "</b> missed answer" + (f.weak === 1 ? "" : "s") + " waiting in Daily review</li>");
    var lessons = (m.ls || []).map(function (t, i) {
      var ok = f.p.tried && f.p.tried[i];
      return "<li class='" + (ok ? "ok" : "") + "'><a href='learn.html#" + encodeURIComponent(m.id) + "/l" + i + "'><span class='bm-tick' aria-hidden='true'>" + (ok ? "✓" : "") + "</span>" + tH(t) +
        (ok ? "<span class='sr-only'> (practised)</span>" : "") + "</a></li>";
    }).join("");
    return "<p class='bm-k'>Module " + m.num + " · " + esc(m.level) + "</p>" +
      "<h3>" + tH(m.title) + "</h3>" +
      "<p class='bm-chip s-" + f.st + "'><i aria-hidden='true'></i>" + LABEL[f.st] + "</p>" +
      "<ul class='bm-facts'>" + facts.join("") + "</ul>" +
      "<a class='btn btn-primary btn-sm' href='" + go[0] + "'>" + esc(go[1]) + " →</a>" +
      (lessons ? "<details class='bm-ls'><summary>Lessons in this module</summary><ol>" + lessons + "</ol></details>" : "");
  }

  function svg(pts, F) {
    var s = "<svg viewBox='0 0 " + W + " " + H + "' aria-hidden='true' focusable='false'><defs><clipPath id='bm-clip'><path d='" + BRAIN + "'/></clipPath></defs>";
    /* level bands, back (Start) to front (Exam) */
    var bands = [["Start", 420, 500], ["A1", 310, 420], ["A2", 200, 310], ["B1", 90, 200], ["Exam", 0, 90]];
    s += "<g clip-path='url(#bm-clip)'>" + bands.map(function (b) { return "<rect x='0' y='" + b[1] + "' width='" + W + "' height='" + (b[2] - b[1]) + "' fill='" + LV[b[0]] + "' fill-opacity='.08'/>"; }).join("");
    /* folds of the cortex (decoration) */
    for (var i = 0; i < 7; i++) {
      var y = 70 + i * 62, a = 34 + (i % 3) * 8;
      s += "<path class='bm-fold' d='M" + (CX - hw(y) + 14) + " " + y + " q " + a + " -26 " + a * 2 + " 0 t " + a * 2 + " 0'/>";
      s += "<path class='bm-fold' d='M" + (CX + hw(y) - 14) + " " + (y + 22) + " q " + (-a) + " -26 " + (-a * 2) + " 0 t " + (-a * 2) + " 0'/>";
    }
    s += "</g>";
    s += "<path class='bm-out' d='" + BRAIN + "'/>";
    s += "<path class='bm-mid' d='M200 40 C 192 150, 208 340, 200 474'/>";
    /* the path through the course; lit where both ends are understood */
    for (var j = 1; j < pts.length; j++) {
      var a0 = pts[j - 1], b0 = pts[j], mx = (a0.x + b0.x) / 2, my = (a0.y + b0.y) / 2 - (a0.y === b0.y ? 10 : 0);
      var lit = F[j - 1].st === "good" && F[j].st === "good";
      s += "<path class='bm-link" + (lit ? " lit" : "") + "' d='M" + a0.x + " " + a0.y + " Q " + mx + " " + my + " " + b0.x + " " + b0.y + "'/>";
    }
    return s + "</svg>";
  }

  function render(el) {
    if (!el || !C.modules.length) return;
    var prog = read("nclc5-course", {}), weak = weakSpots(), M = C.modules;
    var F = M.map(function (m) { return info(m, prog, weak); });
    var pts = layout(M.length);
    var counts = { good: 0, learning: 0, weak: 0, "new": 0 };
    F.forEach(function (f) { counts[f.st]++; });
    /* show the most useful module first: something to fix, then in progress, then the next new one */
    var pick = -1;
    ["weak", "learning", "new"].some(function (st) { pick = F.map(function (f) { return f.st; }).indexOf(st); return pick >= 0; });
    if (pick < 0) pick = M.length - 1;

    var nodes = M.map(function (m, i) {
      var f = F[i], pt = pts[i];
      return "<button type='button' class='bm-node s-" + f.st + "' data-bm='" + i + "' style='left:" + (pt.x / W * 100).toFixed(2) + "%;top:" + (pt.y / H * 100).toFixed(2) + "%' " +
        "aria-pressed='" + (i === pick) + "' aria-label='Module " + m.num + ": " + esc(plain(m.title)) + ". " + LABEL[f.st] + ".'>" + m.num + "</button>";
    }).join("");
    el.innerHTML =
      "<ul class='bm-sum' aria-label='Summary'>" + ["good", "learning", "weak", "new"].map(function (st) {
        return "<li class='s-" + st + "'><i aria-hidden='true'></i><b>" + counts[st] + "</b> " + LABEL[st].toLowerCase() + "</li>";
      }).join("") + "</ul>" +
      "<div class='bm'><div><div class='bm-map'>" + svg(pts, F) + nodes + "</div>" +
      "<p class='bm-lv'><span>Back to front:</span>" + ["Start", "A1", "A2", "B1", "Exam"].map(function (l) { return "<span><i style='background:" + LV[l] + "'></i>" + l + "</span>"; }).join("") + "</p></div>" +
      "<div class='bm-panel' id='bm-panel' aria-live='polite'>" + panel(M[pick], F[pick]) + "</div></div>";

    el.addEventListener("click", function (e) {
      var b = e.target.closest("[data-bm]"); if (!b) return;
      var i = +b.getAttribute("data-bm");
      el.querySelectorAll("[data-bm]").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
      el.querySelector("#bm-panel").innerHTML = panel(M[i], F[i]);
    });
  }

  window.NCLC_BRAIN = { render: render, info: info };
})();
