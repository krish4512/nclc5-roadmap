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
    btn.addEventListener("click", function () { set(!nav.classList.contains("open")); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") set(false); });
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

  window.NCLC = { toast: toast, requirePro: requirePro, mailto: mailto };

  function boot() { wireTheme(); wireMenu(); wireDropdowns(); fillConfig(); wireMotion(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
