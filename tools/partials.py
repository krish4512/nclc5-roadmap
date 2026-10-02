#!/usr/bin/env python3
"""Keep the shared <head> tags, site header and footer identical on every page.

Each page marks the regions this script owns:

    <!-- partial:head -->        ... <!-- /partial:head -->
    <!-- partial:header KEY -->  ... <!-- /partial:header -->
    <!-- partial:footer -->      ... <!-- /partial:footer -->
    <!-- partial:tabs -->         ... <!-- /partial:tabs -->      (the section's tabs)
    <!-- partial:art NAME -->     ... <!-- /partial:art -->       (assets/art/NAME.svg, inlined)

KEY is the section to highlight (today, learn, review, exam) or "none".
Tabs work out the section and active tab from the page's file name (TABS).
Edit the templates below, then run from the repository root:

    python3 tools/partials.py

The site itself needs no build step; this only rewrites the marked regions.
"""
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent

# The live address of the site, used for link previews (WhatsApp, Facebook,
# LinkedIn…), which need absolute URLs. Change it when you move to your own
# domain, then run this script again.
SITE_URL = "https://krish4512.github.io/nclc5-roadmap"

HEAD = """<!-- partial:head -->
<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)">
<link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="assets/icons/apple-touch-icon.png">
<meta name="apple-mobile-web-app-title" content="Prêt">
<link rel="manifest" href="site.webmanifest">
{SOCIAL}
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Inter+Tight:wght@600;700;800&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/site.css">
<script>(function(d){var r={};try{var t=localStorage.getItem("nclc5-theme");if(t==="dark"||t==="light")d.setAttribute("data-theme",t);r=JSON.parse(localStorage.getItem("nclc5-reading")||"{}")||{}}catch(e){}if(r.size)d.setAttribute("data-text",r.size);if(r.spacing)d.setAttribute("data-spacing","1");if(r.font==="readable"){d.setAttribute("data-font","readable");document.write('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&display=swap">')}if(r.motion==="reduce")d.setAttribute("data-motion","reduce");else if(!(window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches)&&"IntersectionObserver"in window)d.classList.add("js-motion")})(document.documentElement);</script>
<script src="assets/config.js"></script>
<script src="assets/site.js"></script>
<!-- /partial:head -->"""

# ---------------------------------------------------------------------------
# Site structure: four places to go. Nothing else.
#   Today  — your daily hub
#   Course — the modules, in order
#   Review — Daily review (spaced repetition)
#   Exam   — the mock exam, and Exam prep (speaking topics, writing models, guides)
# Only the Exam section has tabs. Links only appear once their page exists,
# so nothing ever links to a missing page.
# ---------------------------------------------------------------------------
NAV = [
    ("today", "today.html", "Today"),
    ("learn", "learn.html", "Course"),
    ("review", "review.html", "Review"),
    ("exam", "exam.html", "Exam"),
]

TABS = {
    "exam": [
        ("exam.html", "Mock exam"),
        ("prep.html", "Exam prep"),
    ],
}


def exists(href):
    return (ROOT / href.split("#")[0].split("?")[0]).exists()


def section_of(name):
    """Which section a page belongs to, and which tab is active."""
    if name.startswith("guide-"):
        return "exam", "prep.html"
    for sec, tabs in TABS.items():
        for href, _ in tabs:
            if href == name:
                return sec, href
    return None, None


MOON = '<svg class="moon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.7 14.6A8.6 8.6 0 0 1 9.4 3.3a.7.7 0 0 0-.9-.9A10 10 0 1 0 21.6 15.5a.7.7 0 0 0-.9-.9z"/></svg>'
SUN = '<svg class="sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.2" fill="currentColor"/><path stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6"/></svg>'
MENU = '<svg viewBox="0 0 24 24" aria-hidden="true"><path stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16"/></svg>'
AA = '<span class="aa" aria-hidden="true">Aa</span>'


def header(active):
    links = []
    for key, href, label in NAV:
        if not exists(href):
            continue
        cur = ' aria-current="page"' if key == active else ""
        links.append(f'      <a href="{href}"{cur}>{label}</a>')
    links.append('      <a class="nav-cta" href="pricing.html">Get Pro</a>')
    nav = "\n".join(links)
    return f"""<!-- partial:header {active} -->
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header">
  <div class="container">
    <a class="brand" href="index.html"><img class="brand-mark" src="assets/brand/mark.svg" alt="" width="30" height="30"><span class="wordmark">Prêt <span>Français</span></span></a>
    <nav class="nav" id="site-nav" aria-label="Main">
{nav}
    </nav>
    <div class="header-actions">
      <button type="button" class="icon-btn settings-btn" data-settings aria-haspopup="dialog" aria-label="Reading settings: theme, text size, font">{AA}</button>
      <a class="btn btn-primary btn-sm" href="pricing.html">Get Pro</a>
      <button type="button" class="icon-btn menu-toggle" data-menu-toggle aria-controls="site-nav" aria-expanded="false" aria-label="Menu">{MENU}</button>
    </div>
  </div>
</header>
<!-- /partial:header -->"""


def tabs(name):
    sec, active = section_of(name)
    if not sec:
        return "<!-- partial:tabs -->\n<!-- /partial:tabs -->"
    items = []
    for href, label in TABS[sec]:
        if not exists(href):
            continue
        cur = ' aria-current="page"' if href == active else ""
        items.append(f'<a href="{href}"{cur}>{label}</a>')
    return f"""<!-- partial:tabs -->
<nav class="tabs" aria-label="{dict((k, l) for k, _, l in NAV)[sec]}">
  <div class="container">{"".join(items)}</div>
</nav>
<!-- /partial:tabs -->"""


def footer():
    def col(title, links):
        lis = "\n".join(f'          <li><a href="{h}">{l}</a></li>' for h, l in links if exists(h))
        return f"""      <div>
        <h4>{title}</h4>
        <ul>
{lis}
        </ul>
      </div>"""
    cols = "\n".join([
        col("Study", [("today.html", "Today"), ("learn.html", "Course"), ("review.html", "Review"), ("exam.html", "Exam")]),
        col("Free", [("start.html", "Find your level"), ("cheatsheets.html", "Cheat sheets"), ("prep.html", "Exam prep"), ("whats-new.html", "What's new")]),
        col("Help", [("pricing.html", "Pricing"), ("contact.html", "Contact & FAQ"), ("privacy.html", "Privacy"), ("terms.html", "Terms")]),
    ])
    return f"""<!-- partial:footer -->
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-about">
        <a class="brand" href="index.html"><img class="brand-mark" src="assets/brand/mark.svg" alt="" width="30" height="30"><span class="wordmark">Prêt <span>Français</span></span></a>
        <p>A structured French course, daily review and timed mock exams for reaching NCLC / CLB 5 on the TCF Canada or TEF Canada.</p>
      </div>
{cols}
    </div>
    <div class="footer-legal">
      <p>Independent study resource. Not affiliated with or endorsed by France Éducation international (TCF), CCI Paris Île-de-France (TEF), or Immigration, Refugees and Citizenship Canada. No score is guaranteed.</p>
      <p>&copy; <span data-year>2026</span> <span data-site="legalName">Your Business Name</span></p>
    </div>
  </div>
</footer>
<!-- /partial:footer -->"""


def social(text, name):
    """Link-preview tags built from the page's own <title> and description."""
    title = re.search(r"<title>(.*?)</title>", text, re.S)
    desc = re.search(r'<meta name="description" content="(.*?)">', text, re.S)
    title = title.group(1).strip() if title else "Prêt Français"
    desc = desc.group(1).strip() if desc else "A research-based French course, drills and mock exams for NCLC 5 on the TCF Canada and TEF Canada."
    url = SITE_URL + "/" + ("" if name == "index.html" else name)
    stem = name[:-5] if name.endswith(".html") else name
    own = ROOT / "assets" / "og" / (stem + ".jpg")   # made by tools/page-previews.js
    image = SITE_URL + ("/assets/og/" + stem + ".jpg" if own.exists() else "/assets/og-image.jpg")
    return "\n".join([
        '<meta property="og:type" content="website">',
        '<meta property="og:site_name" content="Prêt Français">',
        f'<meta property="og:title" content="{title}">',
        f'<meta property="og:description" content="{desc}">',
        f'<meta property="og:url" content="{url}">',
        f'<meta property="og:image" content="{image}">',
        '<meta property="og:image:width" content="1200">',
        '<meta property="og:image:height" content="630">',
        f'<meta property="og:image:alt" content="{title}">',
        '<meta name="twitter:card" content="summary_large_image">',
        f'<meta name="twitter:image" content="{image}">',
    ])


def art(name):
    """Inline an illustration so it can follow the page's light/dark colours.
    Ids are prefixed so several illustrations can share one page."""
    svg = (ROOT / "assets" / "art" / (name + ".svg")).read_text(encoding="utf-8").strip()
    pre = "a-" + name + "-"
    svg = re.sub(r'id="([^"]+)"', lambda m: 'id="' + pre + m.group(1) + '"', svg)
    svg = re.sub(r'url\(#([^)]+)\)', lambda m: "url(#" + pre + m.group(1) + ")", svg)
    return "<!-- partial:art " + name + " -->\n" + svg + "\n<!-- /partial:art -->"


def render(text, name=""):
    head = HEAD.replace("{SOCIAL}", social(text, name))
    text = re.sub(r"<!-- partial:head -->.*?<!-- /partial:head -->", lambda m: head, text, flags=re.S)
    text = re.sub(r"<!-- partial:header (\w+) -->.*?<!-- /partial:header -->",
                  lambda m: header(m.group(1)), text, flags=re.S)
    text = re.sub(r"<!-- partial:footer -->.*?<!-- /partial:footer -->", lambda m: footer(), text, flags=re.S)
    text = re.sub(r"<!-- partial:tabs -->.*?<!-- /partial:tabs -->", lambda m: tabs(name), text, flags=re.S)
    text = re.sub(r"<!-- partial:art ([\w-]+) -->.*?<!-- /partial:art -->", lambda m: art(m.group(1)), text, flags=re.S)
    return text


def main():
    for page in sorted(ROOT.glob("*.html")):
        old = page.read_text(encoding="utf-8")
        new = render(old, page.name)
        if new != old:
            page.write_text(new, encoding="utf-8")
            print("updated", page.name)


if __name__ == "__main__":
    main()
