#!/usr/bin/env python3
"""Keep the shared <head> tags, site header and footer identical on every page.

Each page marks the regions this script owns:

    <!-- partial:head -->        ... <!-- /partial:head -->
    <!-- partial:header KEY -->  ... <!-- /partial:header -->
    <!-- partial:footer -->      ... <!-- /partial:footer -->

KEY is the nav item to highlight (learn, roadmap, practice, exam, pricing) or "none".
Edit the templates below, then run from the repository root:

    python3 tools/partials.py

The site itself needs no build step; this only rewrites the marked regions.
"""
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent

HEAD = """<!-- partial:head -->
<meta name="theme-color" content="#7a1f2b">
<link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
<link rel="manifest" href="site.webmanifest">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,500;8..60,600;8..60,700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/site.css">
<script>try{var t=localStorage.getItem("nclc5-theme");if(t==="dark"||t==="light")document.documentElement.setAttribute("data-theme",t)}catch(e){}</script>
<script src="assets/config.js"></script>
<script src="assets/site.js"></script>
<!-- /partial:head -->"""

NAV = [
    ("learn", "learn.html", "Learn"),
    ("roadmap", "roadmap.html", "Roadmap"),
    ("practice", "quiz.html", "Practice"),
    ("exam", "exam.html", "Mock exam"),
    ("pricing", "pricing.html", "Pricing"),
]

MOON = '<svg class="moon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.7 14.6A8.6 8.6 0 0 1 9.4 3.3a.7.7 0 0 0-.9-.9A10 10 0 1 0 21.6 15.5a.7.7 0 0 0-.9-.9z"/></svg>'
SUN = '<svg class="sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.2" fill="currentColor"/><path stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6"/></svg>'
MENU = '<svg viewBox="0 0 24 24" aria-hidden="true"><path stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16"/></svg>'


def header(active):
    links = []
    for key, href, label in NAV:
        cur = ' aria-current="page"' if key == active else ""
        links.append(f'      <a href="{href}"{cur}>{label}</a>')
    links.append('      <a class="nav-cta" href="pricing.html">Get Pro</a>')
    nav = "\n".join(links)
    return f"""<!-- partial:header {active} -->
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header">
  <div class="container">
    <a class="brand" href="index.html"><span class="brand-mark" aria-hidden="true">B1</span><span data-site="brand">NCLC 5 Roadmap</span></a>
    <nav class="nav" id="site-nav" aria-label="Main">
{nav}
    </nav>
    <div class="header-actions">
      <button type="button" class="icon-btn theme-toggle" data-theme-toggle aria-label="Toggle dark theme">{MOON}{SUN}</button>
      <a class="btn btn-primary btn-sm" href="pricing.html">Get Pro</a>
      <button type="button" class="icon-btn menu-toggle" data-menu-toggle aria-controls="site-nav" aria-expanded="false" aria-label="Menu">{MENU}</button>
    </div>
  </div>
</header>
<!-- /partial:header -->"""


FOOTER = """<!-- partial:footer -->
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-about">
        <a class="brand" href="index.html"><span class="brand-mark" aria-hidden="true">B1</span><span data-site="brand">NCLC 5 Roadmap</span></a>
        <p>A structured French study plan, drills and timed mock exams for reaching NCLC / CLB 5 on the TCF Canada or TEF Canada.</p>
      </div>
      <div>
        <h4>Study</h4>
        <ul>
          <li><a href="learn.html">French course</a></li>
          <li><a href="roadmap.html">Roadmap</a></li>
          <li><a href="quiz.html">Practice drills</a></li>
          <li><a href="exam.html">Mock exam</a></li>
        </ul>
      </div>
      <div>
        <h4>Account</h4>
        <ul>
          <li><a href="pricing.html">Pricing</a></li>
          <li><a href="#" data-portal>Manage subscription</a></li>
          <li><a href="contact.html">Contact &amp; FAQ</a></li>
        </ul>
      </div>
      <div>
        <h4>Legal</h4>
        <ul>
          <li><a href="terms.html">Terms of service</a></li>
          <li><a href="privacy.html">Privacy policy</a></li>
          <li><a href="terms.html#refunds">Refund policy</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-legal">
      <p>Independent study resource. Not affiliated with or endorsed by France Éducation international (TCF), CCI Paris Île-de-France (TEF), or Immigration, Refugees and Citizenship Canada. No score is guaranteed.</p>
      <p>&copy; <span data-year>2026</span> <span data-site="legalName">Your Business Name</span></p>
    </div>
  </div>
</footer>
<!-- /partial:footer -->"""


def render(text):
    text = re.sub(r"<!-- partial:head -->.*?<!-- /partial:head -->", lambda m: HEAD, text, flags=re.S)
    text = re.sub(r"<!-- partial:header (\w+) -->.*?<!-- /partial:header -->",
                  lambda m: header(m.group(1)), text, flags=re.S)
    text = re.sub(r"<!-- partial:footer -->.*?<!-- /partial:footer -->", lambda m: FOOTER, text, flags=re.S)
    return text


def main():
    for page in sorted(ROOT.glob("*.html")):
        old = page.read_text(encoding="utf-8")
        new = render(old)
        if new != old:
            page.write_text(new, encoding="utf-8")
            print("updated", page.name)


if __name__ == "__main__":
    main()
