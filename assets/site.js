/* Shared behaviour for every page: theme toggle, mobile menu, config-driven
   text (brand, email, prices, checkout links) and the optional paywall. */
(function () {
  var SITE = window.SITE || {};
  var THEME_KEY = "nclc5-theme";
  var root = document.documentElement;

  /* ---------- theme ---------- */
  function currentTheme() {
    var set = root.getAttribute("data-theme");
    if (set) return set;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function wireTheme() {
    Array.prototype.forEach.call(document.querySelectorAll("[data-theme-toggle]"), function (btn) {
      function label() {
        btn.setAttribute("aria-label", currentTheme() === "dark" ? "Switch to light theme" : "Switch to dark theme");
      }
      label();
      btn.addEventListener("click", function () {
        var next = currentTheme() === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", next);
        try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
        label();
      });
    });
  }

  /* ---------- mobile menu ---------- */
  function wireMenu() {
    var btn = document.querySelector("[data-menu-toggle]");
    var nav = document.getElementById("site-nav");
    if (!btn || !nav) return;
    function set(open) {
      nav.classList.toggle("open", open);
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    }
    function isOpen() { return nav.classList.contains("open") && getComputedStyle(btn).display !== "none"; }
    btn.addEventListener("click", function () {
      set(!nav.classList.contains("open"));
      /* the nav sits before the button in the page, so move focus into it */
      if (isOpen()) { var a = nav.querySelector("a"); if (a) a.focus(); }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) { var inside = nav.contains(document.activeElement); set(false); if (inside || document.activeElement === document.body) btn.focus(); }
      /* Tab from the last link returns to the button */
      if (e.key === "Tab" && !e.shiftKey && isOpen()) {
        var links = nav.querySelectorAll("a");
        if (document.activeElement === links[links.length - 1]) { e.preventDefault(); btn.focus(); }
        else if (document.activeElement === btn) { e.preventDefault(); links[0].focus(); }
      }
    });
    nav.addEventListener("focusout", function (e) {
      if (isOpen() && e.relatedTarget && !nav.contains(e.relatedTarget) && e.relatedTarget !== btn) set(false);
    });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) set(false); });
  }

  /* ---------- dropdown menus ---------- */
  function wireDropdowns() {
    var items = Array.prototype.slice.call(document.querySelectorAll("[data-dd]"));
    if (!items.length) return;
    function close(except) {
      items.forEach(function (it) {
        if (it === except) return;
        it.classList.remove("open");
        var b = it.querySelector(".dd-toggle");
        if (b) b.setAttribute("aria-expanded", "false");
      });
    }
    items.forEach(function (it) {
      var btn = it.querySelector(".dd-toggle");
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        var open = !it.classList.contains("open");
        close(it);
        it.classList.toggle("open", open);
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
      /* after following a link (including hash links on the same page), fold the menu away */
      it.querySelectorAll(".dd a").forEach(function (a) {
        a.addEventListener("click", function () {
          close(null);
          if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
        });
      });
    });
    document.addEventListener("click", function (e) { if (!e.target.closest("[data-dd]")) close(null); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(null); });
  }

  /* ---------- motion ----------
     Content blocks fade up as they enter the viewport; siblings stagger.
     Works for content pages render later (course, drills, exam) through a
     MutationObserver. Everything stays visible if motion is reduced or
     IntersectionObserver is missing. */
  var REVEAL = [
    ".page-hero > *", ".section-title", ".section-lead", ".section .eyebrow",
    ".card", ".feature", ".step", ".stats > div", ".price-card", ".faq details",
    ".related h2", ".related-card", ".mod-card", ".lesson", ".sound-card", ".set-card", ".sec-card",
    ".principle", ".score-card", ".skill-card", ".format-table-wrap", ".howto-box", ".plain-card",
    ".stat", ".vocab-item", ".quiz-q", ".toc", ".prose > h2", ".contact-card", ".level-head",
    ".roadmap-stage", ".closing-grid .note", ".sources-card", ".weak-card", ".block > h2", "[data-reveal]"
  ].join(",");
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var io = null;

  function countUp(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    if (isNaN(target) || el._counted) return;
    el._counted = true;
    var suffix = el.getAttribute("data-suffix") || "";
    if (reduceMotion) { el.textContent = target + suffix; return; }
    var start = null, dur = 1400;
    function step(t) {
      if (!start) start = t;
      var k = Math.min(1, (t - start) / dur);
      var eased = 1 - Math.pow(1 - k, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (k < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function scanReveal(root) {
    if (!io) return;
    var els = (root || document).querySelectorAll(REVEAL);
    var perParent = new Map();
    Array.prototype.forEach.call(els, function (el) {
      if (el._revealed || el.closest(".site-header, .site-footer, .dd, .tr-dock")) return;
      el._revealed = true;
      if (!el.classList.contains("reveal-scale")) el.classList.add("reveal");
      var parent = el.parentNode;
      var n = perParent.get(parent) || 0;
      perParent.set(parent, n + 1);
      el.style.setProperty("--reveal-delay", Math.min(n, 6) * 0.07 + "s");
      io.observe(el);
    });
    Array.prototype.forEach.call((root || document).querySelectorAll("[data-count]"), function (el) {
      if (!el._countObserved) { el._countObserved = true; io.observe(el); }
    });
  }

  function wireMotion() {
    var root = document.documentElement;
    var header = document.querySelector(".site-header");
    var bar = document.createElement("div");
    bar.className = "scroll-progress";
    bar.setAttribute("aria-hidden", "true");
    document.body.appendChild(bar);
    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var y = window.scrollY || window.pageYOffset;
        if (header) header.classList.toggle("scrolled", y > 8);
        var max = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.transform = "scaleX(" + (max > 0 ? Math.min(1, y / max) : 0) + ")";
        ticking = false;
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (reduceMotion || !("IntersectionObserver" in window)) {
      root.classList.remove("js-motion");
      Array.prototype.forEach.call(document.querySelectorAll("[data-count]"), countUp);
      return;
    }
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        if (en.target.hasAttribute("data-count")) countUp(en.target);
        io.unobserve(en.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    scanReveal(document);
    var pending = false;
    new MutationObserver(function () {
      if (pending) return;
      pending = true;
      requestAnimationFrame(function () { pending = false; scanReveal(document); });
    }).observe(document.body, { childList: true, subtree: true });
    /* catch-up: a fast scroll or an anchor jump can carry elements past the
       viewport between observer callbacks. Once scrolling settles, anything
       above the bottom of the screen is shown; the 2.5s timer covers an
       observer that never fires at all. */
    function sweep() {
      Array.prototype.forEach.call(document.querySelectorAll(".reveal:not(.in), .reveal-scale:not(.in)"), function (el) {
        if (el.getBoundingClientRect().top < window.innerHeight) { el.classList.add("in"); io.unobserve(el); }
      });
    }
    var settle = null;
    window.addEventListener("scroll", function () { clearTimeout(settle); settle = setTimeout(sweep, 150); }, { passive: true });
    setTimeout(sweep, 2500);
  }

  /* ---------- config-driven text ---------- */
  function mailto(subject) {
    return "mailto:" + (SITE.email || "") + (subject ? "?subject=" + encodeURIComponent(subject) : "");
  }

  function fillConfig() {
    Array.prototype.forEach.call(document.querySelectorAll("[data-site]"), function (el) {
      var v = SITE[el.getAttribute("data-site")];
      if (v !== undefined && v !== null && v !== "") el.textContent = v;
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-site-mail]"), function (el) {
      el.setAttribute("href", mailto(el.getAttribute("data-site-mail")));
      if (!el.textContent.trim()) el.textContent = SITE.email || "";
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-year]"), function (el) {
      el.textContent = String(new Date().getFullYear());
    });

    var plans = SITE.plans || {};
    Array.prototype.forEach.call(document.querySelectorAll("[data-price]"), function (el) {
      var p = plans[el.getAttribute("data-price")];
      if (p) el.textContent = "$" + p.price;
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-period]"), function (el) {
      var p = plans[el.getAttribute("data-period")];
      if (p) el.textContent = (SITE.currency ? SITE.currency + " " : "") + "/ " + p.period;
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-site-plan]"), function (el) {
      var p = plans[el.getAttribute("data-site-plan")];
      if (p && p.name) el.textContent = p.name;
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-plan-note]"), function (el) {
      var p = plans[el.getAttribute("data-plan-note")];
      if (p) el.textContent = p.note || "";
    });

    /* Checkout: a Stripe Payment Link when configured, otherwise an email
       to the seller so the button is never a dead end. */
    Array.prototype.forEach.call(document.querySelectorAll("[data-checkout]"), function (el) {
      var key = el.getAttribute("data-checkout");
      var p = plans[key];
      if (p && p.link) {
        el.setAttribute("href", p.link);
        el.setAttribute("rel", "noopener");
      } else {
        el.setAttribute("href", mailto("Subscribe: " + (p ? p.name : "Pro")));
      }
    });

    Array.prototype.forEach.call(document.querySelectorAll("[data-portal]"), function (el) {
      if (SITE.customerPortal) {
        el.setAttribute("href", SITE.customerPortal);
        el.setAttribute("rel", "noopener");
      } else {
        el.setAttribute("href", mailto("Manage my subscription"));
      }
    });
  }

  /* ---------- toast ---------- */
  var toastEl = null, toastTimer = null;
  function toast(text) {
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.className = "toast";
      toastEl.setAttribute("role", "status");
      toastEl.setAttribute("aria-live", "polite");
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = text;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove("show"); }, 2600);
  }

  /* ---------- paywall ---------- */
  /* Returns true when the visitor may use a Pro feature. With the paywall
     off (the default) everyone may. Otherwise renders an upgrade card into
     `container` and returns false. */
  function requirePro(container, what) {
    if (!SITE.paywall) return true;
    var ok = false;
    try { ok = !!(SITE.hasPro && SITE.hasPro()); } catch (e) { ok = false; }
    if (ok) return true;
    if (container) {
      container.innerHTML =
        "<div class='card paywall'>" +
          "<span class='pill accent'>Pro feature</span>" +
          "<h2>" + (what || "This is part of Pro") + "</h2>" +
          "<p>Full timed mock exams, the writing coach, speaking recorder and weak-word review are included with a Pro subscription.</p>" +
          "<a class='btn btn-primary btn-lg' href='pricing.html'>See plans</a>" +
        "</div>";
    }
    return false;
  }

  /* ---------- daily study streak ----------
     A day counts once the learner actually does something (answers a
     question, plays audio, completes a module…). Days are stored as local
     YYYY-MM-DD strings; the streak survives until the end of the day after
     the last study day. */
  var DAYS_KEY = "nclc5-study-days";
  function dayStr(d) { return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2); }
  function addDays(d, n) { var x = new Date(d.getFullYear(), d.getMonth(), d.getDate()); x.setDate(x.getDate() + n); return x; }
  function readDays() {
    try { var a = JSON.parse(localStorage.getItem(DAYS_KEY) || "[]"); return Array.isArray(a) ? a : []; } catch (e) { return []; }
  }
  function streakInfo() {
    var days = readDays(), set = {}, now = new Date(), today = dayStr(now);
    days.forEach(function (d) { set[d] = 1; });
    var start = set[today] ? now : (set[dayStr(addDays(now, -1))] ? addDays(now, -1) : null);
    var current = 0;
    if (start) { var d = start; while (set[dayStr(d)]) { current++; d = addDays(d, -1); } }
    var best = 0, run = 0, prev = null;
    days.slice().sort().forEach(function (k) {
      var p = k.split("-"), dt = new Date(+p[0], +p[1] - 1, +p[2]);
      run = prev && dayStr(addDays(prev, 1)) === k ? run + 1 : 1;
      best = Math.max(best, run); prev = dt;
    });
    var week = [];
    for (var i = 6; i >= 0; i--) { var w = addDays(now, -i); week.push({ day: dayStr(w), label: "SMTWTFS".charAt(w.getDay()), done: !!set[dayStr(w)], today: i === 0 }); }
    return { current: current, best: Math.max(best, current), today: !!set[today], total: days.length, week: week };
  }
  var streakListeners = [];
  function markStudy() {
    var today = dayStr(new Date()), days = readDays();
    if (days.indexOf(today) !== -1) return false;
    days.push(today);
    days = days.sort().slice(-400);
    try { localStorage.setItem(DAYS_KEY, JSON.stringify(days)); } catch (e) { return false; }
    var info = streakInfo();
    toast(info.current > 1 ? "🔥 " + info.current + " days in a row — keep it going tomorrow!" : "🔥 Day 1 of your streak. Come back tomorrow to make it 2.");
    streakListeners.forEach(function (fn) { try { fn(info); } catch (e) {} });
    return true;
  }
  function onStreak(fn) { streakListeners.push(fn); }

  /* on phones the section tabs scroll sideways: bring the current one into view */
  function wireTabs() {
    var bar = document.querySelector(".tabs .container"), cur = bar && bar.querySelector("[aria-current]");
    if (bar && cur && bar.scrollWidth > bar.clientWidth) bar.scrollLeft = Math.max(0, cur.offsetLeft - bar.offsetLeft - 24);
  }

  /* ---------- reading settings (the "Aa" button) ----------
     Theme, text size, an easy-read font, extra spacing and animations.
     Saved in nclc5-reading (and nclc5-theme); the inline script in <head>
     applies them before the page paints. */
  var READ_KEY = "nclc5-reading";
  function readPrefs() { try { return JSON.parse(localStorage.getItem(READ_KEY) || "{}") || {}; } catch (e) { return {}; } }
  function applyPrefs(r) {
    if (r.size) root.setAttribute("data-text", r.size); else root.removeAttribute("data-text");
    if (r.spacing) root.setAttribute("data-spacing", "1"); else root.removeAttribute("data-spacing");
    if (r.font === "readable") {
      root.setAttribute("data-font", "readable");
      if (!document.getElementById("readable-font")) {
        var l = document.createElement("link");
        l.id = "readable-font"; l.rel = "stylesheet";
        l.href = "https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&display=swap";
        document.head.appendChild(l);
      }
    } else root.removeAttribute("data-font");
    if (r.motion === "reduce") {
      root.setAttribute("data-motion", "reduce");
      root.classList.remove("js-motion");
    } else root.removeAttribute("data-motion");
  }
  function wireSettings() {
    var btn = document.querySelector("[data-settings]");
    if (!btn) return;
    var pop = null;
    var OPTS = {
      theme: [["light", "Light"], ["dark", "Dark"], ["auto", "Auto"]],
      size: [["s", "Small"], ["", "Normal"], ["l", "Large"], ["xl", "Larger"]],
      font: [["", "Standard"], ["readable", "Easy-read"]],
      spacing: [["", "Normal"], ["1", "Wider"]],
      motion: [["", "On"], ["reduce", "Off"]]
    };
    var LABELS = { theme: "Theme", size: "Text size", font: "Font", spacing: "Spacing", motion: "Animations" };
    function current(k) {
      if (k === "theme") { var t = null; try { t = localStorage.getItem(THEME_KEY); } catch (e) {} return t === "dark" || t === "light" ? t : "auto"; }
      var v = readPrefs()[k]; return v ? String(v === true ? "1" : v) : "";
    }
    function render() {
      pop.innerHTML = "<h2 id='set-title'>Reading settings</h2>" + Object.keys(OPTS).map(function (k) {
        return "<div class='row'><span id='set-" + k + "'>" + LABELS[k] + "</span><div class='seg' role='group' aria-labelledby='set-" + k + "'>" +
          OPTS[k].map(function (o) { return "<button type='button' data-k='" + k + "' data-v='" + o[0] + "' aria-pressed='" + (current(k) === o[0]) + "'>" + o[1] + "</button>"; }).join("") +
          "</div></div>";
      }).join("") + audioRows() + "<div class='foot'><span>Saved on this device</span><button type='button' data-reset>Reset all</button></div>";
    }
    /* French audio: speed and voice (read by assets/speech.js) */
    function audioRows() {
      var S = window.NCLCSpeech;
      if (!S || !S.available()) return "";
      var slow = false; try { slow = localStorage.getItem("nclc5-roadmap-slow-speech") === "1"; } catch (e) {}
      var vs = S.voices ? S.voices() : [], cur = S.current ? S.current() : "";
      return "<div class='row'><span id='set-speed'>Audio speed</span><div class='seg' role='group' aria-labelledby='set-speed'>" +
        "<button type='button' data-k='speed' data-v='' aria-pressed='" + !slow + "'>Normal</button><button type='button' data-k='speed' data-v='1' aria-pressed='" + slow + "'>Slow</button></div></div>" +
        (vs.length > 1 ? "<div class='row'><label for='set-voice'>French voice</label><select id='set-voice' data-voice>" + vs.map(function (v) {
          return "<option" + (v.name === cur ? " selected" : "") + ">" + v.name.replace(/&/g, "&amp;").replace(/</g, "&lt;") + "</option>"; }).join("") + "</select></div>" : "");
    }
    function set(k, v) {
      if (k === "speed") {
        try { if (v) localStorage.setItem("nclc5-roadmap-slow-speech", "1"); else localStorage.removeItem("nclc5-roadmap-slow-speech"); } catch (e) {}
      } else if (k === "theme") {
        try { if (v === "auto") localStorage.removeItem(THEME_KEY); else localStorage.setItem(THEME_KEY, v); } catch (e) {}
        if (v === "auto") root.removeAttribute("data-theme"); else root.setAttribute("data-theme", v);
      } else {
        var r = readPrefs();
        if (v) r[k] = k === "spacing" ? true : v; else delete r[k];
        try { localStorage.setItem(READ_KEY, JSON.stringify(r)); } catch (e) {}
        applyPrefs(r);
      }
      render();
      /* render() rebuilds the panel: put focus back on the button just pressed */
      var f = pop.querySelector("[data-k='" + k + "'][data-v='" + (v == null ? "" : v) + "']"); if (f) f.focus();
    }
    function close() { if (pop) { pop.hidden = true; btn.setAttribute("aria-expanded", "false"); } }
    btn.setAttribute("aria-expanded", "false");
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      if (!pop) {
        pop = document.createElement("div");
        pop.className = "settings-pop"; pop.setAttribute("role", "dialog"); pop.setAttribute("aria-labelledby", "set-title"); pop.hidden = true;
        document.body.appendChild(pop);
        /* the panel lives at the end of the page: Tab from the button goes into it */
        btn.addEventListener("keydown", function (ev) {
          if (ev.key === "Tab" && !ev.shiftKey && !pop.hidden) { var first = pop.querySelector("button, select"); if (first) { ev.preventDefault(); first.focus(); } }
        });
        pop.addEventListener("keydown", function (ev) {
          if (ev.key !== "Tab") return;
          var all = pop.querySelectorAll("button, select");
          if (ev.shiftKey && document.activeElement === all[0]) { ev.preventDefault(); btn.focus(); }
          else if (!ev.shiftKey && document.activeElement === all[all.length - 1]) { ev.preventDefault(); close(); btn.focus(); }
        });
        pop.addEventListener("focusout", function (ev) {
          if (!pop.hidden && ev.relatedTarget && !pop.contains(ev.relatedTarget) && ev.relatedTarget !== btn) close();
        });
        pop.addEventListener("change", function (ev) {
          var sel = ev.target.closest("[data-voice]");
          if (!sel) return;
          try { localStorage.setItem("nclc5-roadmap-voice", sel.value); } catch (er) {}
          if (window.NCLCSpeech) { if (NCLCSpeech.refresh) NCLCSpeech.refresh(); NCLCSpeech.speak("Bonjour ! Voici ma voix."); }
        });
        pop.addEventListener("click", function (ev) {
          ev.stopPropagation();
          var b = ev.target.closest("[data-k]");
          if (b) set(b.getAttribute("data-k"), b.getAttribute("data-v"));
          else if (ev.target.closest("[data-voice]")) return;
          else if (ev.target.closest("[data-reset]")) {
            try { localStorage.removeItem(READ_KEY); localStorage.removeItem(THEME_KEY); } catch (er) {}
            root.removeAttribute("data-theme"); applyPrefs({}); render();
            var rb = pop.querySelector("[data-reset]"); if (rb) rb.focus();
          }
        });
      }
      if (pop.hidden) { render(); pop.hidden = false; btn.setAttribute("aria-expanded", "true"); var f = pop.querySelector("[aria-pressed='true']"); if (f) f.focus(); }
      else close();
    });
    document.addEventListener("click", close);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && pop && !pop.hidden) { close(); btn.focus(); } });
  }

  /* ---------- "Report a mistake" ----------
     NCLC.report("Module 9 · Lesson 9.2: …") opens a small form. With
     SITE.feedbackForm set (e.g. a Formspree URL) the report is posted there;
     otherwise it opens a pre-filled email to SITE.email. */
  var reportDlg = null, reportWhere = "";
  function buildReport() {
    reportDlg = document.createElement("dialog");
    reportDlg.className = "report-dlg";
    reportDlg.setAttribute("aria-labelledby", "rep-title");
    reportDlg.innerHTML =
      "<form class='rep' novalidate>" +
        "<h2 id='rep-title'>Report a mistake</h2>" +
        "<p class='rep-where' id='rep-where'></p>" +
        "<label for='rep-msg'>What's wrong?</label>" +
        "<textarea id='rep-msg' rows='4' required placeholder='e.g. The English for “j&#39;ai pris” should be “I took”, not “I take”.'></textarea>" +
        "<label for='rep-email'>Your email <span>(optional, if you'd like a reply)</span></label>" +
        "<input type='email' id='rep-email' autocomplete='email' placeholder='you@example.com'>" +
        "<p class='rep-err' id='rep-err' role='alert'></p>" +
        "<div class='rep-actions'><button type='button' class='btn btn-ghost' data-rep-cancel>Cancel</button><button type='submit' class='btn btn-primary'>Send report</button></div>" +
        "<p class='rep-fine'>Thank you — every report gets read and fixed.</p>" +
      "</form>";
    document.body.appendChild(reportDlg);
    reportDlg.querySelector("[data-rep-cancel]").addEventListener("click", function () { reportDlg.close(); });
    reportDlg.addEventListener("click", function (e) { if (e.target === reportDlg) reportDlg.close(); });
    /* pages can put focus back where the learner was (e.g. the drill's Next button) */
    reportDlg.addEventListener("close", function () { document.dispatchEvent(new CustomEvent("nclc:report-closed")); });
    reportDlg.querySelector("form").addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = document.getElementById("rep-msg").value.trim(), email = document.getElementById("rep-email").value.trim();
      var err = document.getElementById("rep-err");
      if (msg.length < 3) { err.textContent = "Please describe the mistake."; document.getElementById("rep-msg").focus(); return; }
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { err.textContent = "That email address doesn't look right."; document.getElementById("rep-email").focus(); return; }
      err.textContent = "";
      var page = location.href;
      if (SITE.feedbackForm) {
        var body = new FormData();
        body.append("where", reportWhere); body.append("message", msg); body.append("page", page);
        if (email) body.append("email", email);
        fetch(SITE.feedbackForm, { method: "POST", body: body, mode: "no-cors" }).catch(function () {});
        toast("Thanks — your report was sent.");
      } else {
        var text = "Where: " + reportWhere + "\nPage: " + page + "\n\nWhat's wrong:\n" + msg + (email ? "\n\nReply to: " + email : "");
        location.href = "mailto:" + (SITE.email || "") + "?subject=" + encodeURIComponent("Mistake report — " + reportWhere) + "&body=" + encodeURIComponent(text);
        toast("Opening your email app…");
      }
      document.getElementById("rep-msg").value = "";
      reportDlg.close();
    });
  }
  function report(where) {
    reportWhere = where || document.title;
    if (!reportDlg) buildReport();
    document.getElementById("rep-where").textContent = reportWhere;
    document.getElementById("rep-err").textContent = "";
    if (typeof reportDlg.showModal === "function") { reportDlg.showModal(); document.getElementById("rep-msg").focus(); }
    else location.href = "mailto:" + (SITE.email || "") + "?subject=" + encodeURIComponent("Mistake report — " + reportWhere);
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-report]");
    if (!b) return;
    e.preventDefault();
    report(b.getAttribute("data-report"));
  });

  /* ---------- badges & milestones ----------
     Worked out from what's already saved on this device; a toast announces
     any badge earned since the last page view. */
  var LEVEL_MODS = {
    A1: ["basics", "present", "questions", "describe", "numbers", "irregulars"],
    A2: ["reflexive", "passe-compose", "imparfait", "pronouns", "compare-future"],
    B1: ["conditional", "relatives", "subjunctive", "argue", "reported"]
  };
  function readJ(k, f) { try { return JSON.parse(localStorage.getItem(k) || "null") || f; } catch (e) { return f; } }
  function badges() {
    var prog = readJ("nclc5-course", {}), done = function (id) { return !!(prog[id] && prog[id].done); };
    var nDone = Object.keys(prog).filter(done).length;
    var st = streakInfo();
    var srs = readJ("nclc5-srs", {}), reviews = Object.keys(srs.log || {}).reduce(function (n, d) { return n + ((srs.log[d] || {}).n || 0); }, 0);
    var lvl = function (L) { return LEVEL_MODS[L].every(done); };
    var cps = readJ("nclc5-checkpoints", {});
    var list = [
      ["start", "👣", "First step", "Took the placement check or opened a module", !!(readJ("nclc5-placement", null) || readJ("nclc5-resume", null))],
      ["mod1", "✅", "First module", "Completed your first module", nDone >= 1],
      ["a1", "🧱", "A1 complete", "Finished every A1 module", lvl("A1")],
      ["a2", "🧭", "A2 complete", "Finished every A2 module", lvl("A2")],
      ["b1", "🎯", "B1 complete", "Finished every B1 module", lvl("B1")],
      ["course", "🎓", "Course complete", "All 22 modules done", nDone >= 22],
      ["s3", "🔥", "3-day streak", "Studied 3 days in a row", st.best >= 3],
      ["s7", "⚡", "7-day streak", "Studied a whole week in a row", st.best >= 7],
      ["s30", "🏆", "30-day streak", "A month without missing a day", st.best >= 30],
      ["drill", "💪", "First practice", "Answered every practice question for a lesson", Object.keys(prog).some(function (k) { return prog[k] && prog[k].tried && Object.keys(prog[k].tried).length; })],
      ["rev50", "🧠", "50 reviews", "Reviewed 50 cards in Daily review", reviews >= 50],
      ["mock", "📝", "First mock exam", "Completed a mock-exam section", Object.keys(readJ("nclc5-exam-scores", {})).length > 0],
      ["voice", "🎙️", "First recording", "Recorded yourself on a speaking topic", (+localStorage.getItem("nclc5-rec-count") || 0) > 0],
      ["cpA1", "🏁", "A1 checkpoint", "Passed the A1 checkpoint", !!(cps.A1 && cps.A1.passed)],
      ["cpA2", "🚩", "A2 checkpoint", "Passed the A2 checkpoint", !!(cps.A2 && cps.A2.passed)],
      ["cpB1", "🎖️", "B1 checkpoint", "Passed the B1 checkpoint", !!(cps.B1 && cps.B1.passed)]
    ];
    return list.map(function (b) { return { id: b[0], icon: b[1], name: b[2], desc: b[3], earned: b[4] }; });
  }
  function checkBadges() {
    var seen = readJ("nclc5-badges", null), all = badges();
    var earned = all.filter(function (b) { return b.earned; }).map(function (b) { return b.id; });
    if (seen) {
      var fresh = all.filter(function (b) { return b.earned && seen.indexOf(b.id) === -1; });
      if (fresh.length === 1) toast(fresh[0].icon + " New badge: " + fresh[0].name + "!");
      else if (fresh.length > 1) toast("🏅 " + fresh.length + " new badges — see them on Today");
    }
    try { localStorage.setItem("nclc5-badges", JSON.stringify(earned)); } catch (e) {}
  }
  onStreak(function () { setTimeout(checkBadges, 2800); });

  /* Illustrations: a page keeps its art in <template id="art-tpl"> (filled by
     tools/partials.py); script-rendered heroes leave an empty [data-art] slot. */
  function fillArt(root) {
    var t = document.getElementById("art-tpl");
    if (!t) return;
    (root || document).querySelectorAll("[data-art]").forEach(function (el) { if (!el.firstElementChild) el.appendChild(t.content.cloneNode(true)); });
  }
  function heroArt(on) { var a = document.getElementById("hero-art"); if (a) a.hidden = !on; }

  /* Answers you got wrong in the course ("Try it", module checks, checkpoints)
     are kept in "nclc5-missed" so Daily review can bring them back. */
  function miss(x) {
    try {
      var s = readJ("nclc5-missed", {}), h = 5381, key = x.q + "|" + x.a;
      for (var i = 0; i < key.length; i++) h = ((h << 5) + h + key.charCodeAt(i)) | 0;
      var id = "x" + (h >>> 0).toString(36);
      if (!s[id]) s[id] = { q: x.q, a: x.a, why: x.why || "", mod: x.mod || "", l: x.l == null ? null : x.l, at: Date.now() };
      var ids = Object.keys(s);
      if (ids.length > 300) ids.sort(function (a, b) { return s[a].at - s[b].at; }).slice(0, ids.length - 300).forEach(function (k) { delete s[k]; });
      localStorage.setItem("nclc5-missed", JSON.stringify(s));
    } catch (e) {}
  }

  /* scroll behaviour that respects reduced motion (OS setting or the Aa panel) */
  function sb() {
    var reduce = (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) || root.getAttribute("data-motion") === "reduce";
    return reduce ? "auto" : "smooth";
  }
  window.NCLC = { sb: sb, miss: miss, fillArt: fillArt, heroArt: heroArt, badges: badges, checkBadges: checkBadges, toast: toast, requirePro: requirePro, mailto: mailto, markStudy: markStudy, streak: streakInfo, onStreak: onStreak, report: report };

  /* ---------- skip link ----------
     On pages with a <base> (404), "#main" would point at the home page,
     so move focus to <main> directly. */
  function wireSkip() {
    var a = document.querySelector(".skip-link"), main = document.getElementById("main");
    if (!a || !main) return;
    if (!main.hasAttribute("tabindex")) main.setAttribute("tabindex", "-1");
    a.addEventListener("click", function (e) { e.preventDefault(); main.focus(); main.scrollIntoView(); });
  }

  function boot() { wireSkip(); wireTheme(); wireMenu(); wireDropdowns(); fillConfig(); wireMotion(); wireTabs(); wireSettings(); setTimeout(checkBadges, 1200); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
