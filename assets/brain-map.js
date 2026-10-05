/* Brain map: every module as a named topic inside a brain, coloured by how
   well you know it. Needs assets/course-index.js (modules with n / ls / focus).
     grey   — not started
     yellow — learning (started, check not passed yet)
     green  — understood (check 80%+, few missed answers left)
     red    — needs another look (check under 60%, or 3+ missed answers
              that Daily review hasn't cleared yet)
   Reads localStorage only: "nclc5-course" (progress), "nclc5-missed"
   (answers missed in the course) and "nclc5-srs" (Daily review boxes).
   Use: NCLC_BRAIN.render(element) */
(function () {
  /* the module list: from course-index.js (Today) or the full course (learn.html) */
  function modules() {
    if (window.COURSE_INDEX && COURSE_INDEX.modules.length) return COURSE_INDEX.modules;
    var strip = function (t) { return String(t || "").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim(); };
    return ((window.COURSE && COURSE.modules) || []).map(function (m, i) {
      return { id: m.id, num: i, level: m.level, title: m.title, n: m.lessons.length, ls: m.lessons.map(function (L) { return strip(L.title); }), focus: !!m.focus };
    });
  }
  var LEVELS = [["Start", "Start here"], ["A1", "A1 · Foundations"], ["A2", "A2 · Everyday French"], ["B1", "B1 · Independent"], ["Exam", "Exam skills"]];
  var LABEL = { "new": "Not started", learning: "Learning", good: "Understood", weak: "Needs another look" };
  var ICON = { "new": "", learning: "…", good: "✓", weak: "!" };
  /* short names that fit on the map; anything missing falls back to the title */
  var SHORT = {
    method: "Memory tips", sounds: "Pronunciation", basics: "Être, avoir, articles", present: "Present tense",
    questions: "Negation & questions", describe: "Describing things", numbers: "Numbers, prices, time",
    irregulars: "Irregular verbs", reflexive: "Reflexive verbs", "passe-compose": "Passé composé",
    imparfait: "Imparfait", pronouns: "Object pronouns", "compare-future": "Comparing & future",
    conditional: "Conditional", relatives: "qui, que, où, dont", subjunctive: "Subjunctive",
    argue: "Connectors & opinions", reported: "Reported speech", exam: "Exam strategy",
    "tcf-t2": "TCF speaking task 2", "tcf-t3": "TCF speaking task 3", themes: "Task 3 themes"
  };

  function read(k, f) { try { return JSON.parse(localStorage.getItem(k) || "null") || f; } catch (e) { return f; } }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;"); }
  function tH(t) { var m = /^(.*?)\s*\(([^()]*)\)\s*$/.exec(String(t)); return m ? esc(m[1]) + " <span class='tb'>(" + esc(m[2]) + ")</span>" : esc(t); }
  function plain(t) { return String(t).replace(/\s*\([^()]*\)\s*$/, ""); }
  function short(m) { return SHORT[m.id] || plain(m.title).replace(/^The /, ""); }

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
    if (f.st === "new") return [base, "Start this topic"];
    if (f.st === "weak") return [base + "/lessons", "Go over the lessons again"];
    if (f.st === "good") return f.weak ? ["review.html", "Clear your missed answers"] : [base, "Revisit this topic"];
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
      return "<li class='" + (ok ? "ok" : "") + "'><a href='learn.html#" + encodeURIComponent(m.id) + "/l" + i + "'><span class='bm-tick' aria-hidden='true'>" + (ok ? "✓" : "") + "</span><span>" + tH(t) + "</span>" +
        (ok ? "<span class='sr-only'> (practised)</span>" : "") + "</a></li>";
    }).join("");
    return "<p class='bm-k'>Module " + m.num + " · " + esc(m.level) + "</p>" +
      "<h3>" + tH(m.title) + "</h3>" +
      "<p class='bm-chip s-" + f.st + "'><i aria-hidden='true'></i>" + LABEL[f.st] + "</p>" +
      "<ul class='bm-facts'>" + facts.join("") + "</ul>" +
      "<a class='btn btn-primary btn-sm' href='" + go[0] + "'>" + esc(go[1]) + " →</a>" +
      (lessons ? "<details class='bm-ls' open><summary>What you learn here</summary><ol>" + lessons + "</ol></details>" : "");
  }

  function render(el) {
    var M = modules();
    if (!el || !M.length) return;
    var prog = read("nclc5-course", {}), weak = weakSpots();
    var F = M.map(function (m) { return info(m, prog, weak); });
    var groups = { good: [], learning: [], weak: [], "new": [] };
    F.forEach(function (f, i) { groups[f.st].push(i); });
    /* open on the most useful topic: something to fix, then in progress, then the next new one */
    var pick = -1;
    ["weak", "learning", "new"].some(function (st) { if (groups[st].length) { pick = groups[st][0]; return true; } return false; });
    if (pick < 0) pick = M.length - 1;

    function node(i) {
      var m = M[i], f = F[i];
      return "<button type='button' class='bm-node s-" + f.st + "' data-bm='" + i + "' aria-pressed='" + (i === pick) + "' " +
        "aria-label='" + esc(short(m)) + " (module " + m.num + "): " + LABEL[f.st] + "'>" +
        "<span class='bm-n' aria-hidden='true'>" + m.num + "</span><span class='bm-t'>" + esc(short(m)) + "</span>" +
        (ICON[f.st] ? "<span class='bm-i' aria-hidden='true'>" + ICON[f.st] + "</span>" : "") + "</button>";
    }
    var lobes = LEVELS.map(function (L, li) {
      var ids = M.map(function (m, i) { return m.level === L[0] ? i : -1; }).filter(function (i) { return i >= 0; });
      if (!ids.length) return "";
      return "<div class='bm-lobe bm-lobe-" + li + "'><p class='bm-lobe-h'>" + esc(L[1]) + "</p><div class='bm-nodes'>" + ids.map(node).join("") + "</div></div>";
    }).join("");

    /* the same picture in words: which topics are where */
    function list(st) {
      if (!groups[st].length) return "";
      return "<li class='s-" + st + "'><i aria-hidden='true'></i><span><b>" + LABEL[st] + " (" + groups[st].length + "):</b> " +
        groups[st].map(function (i) { return esc(short(M[i])); }).join(", ") + "</span></li>";
    }
    var words = groups["new"].length === M.length
      ? "<p class='bm-none'>Nothing covered yet. Start a module and its topic lights up here.</p>"
      : "<ul class='bm-words'>" + list("good") + list("learning") + list("weak") + "<li class='s-new'><i aria-hidden='true'></i><span><b>Not started:</b> " + groups["new"].length + " topic" + (groups["new"].length === 1 ? "" : "s") + "</span></li></ul>";

    el.innerHTML = words +
      "<div class='bm'><div class='bm-map'>" +
        lobes + "</div>" +
      "<div class='bm-panel' id='bm-panel' aria-live='polite'>" + panel(M[pick], F[pick]) + "</div></div>";

    el.addEventListener("click", function (e) {
      var b = e.target.closest("[data-bm]"); if (!b) return;
      var i = +b.getAttribute("data-bm");
      el.querySelectorAll("[data-bm]").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
      el.querySelector("#bm-panel").innerHTML = panel(M[i], F[i]);
      if (window.matchMedia && matchMedia("(max-width: 760px)").matches) el.querySelector("#bm-panel").scrollIntoView({ behavior: window.NCLC && NCLC.sb ? NCLC.sb() : "smooth", block: "nearest" });
    });
  }

  window.NCLC_BRAIN = { render: render, info: info, short: short };
})();
