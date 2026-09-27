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

  function boot() { wireTheme(); wireMenu(); wireDropdowns(); fillConfig(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
