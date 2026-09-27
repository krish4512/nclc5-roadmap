#!/usr/bin/env python3
"""Keep the shared <head> tags, site header and footer identical on every page.

Each page marks the regions this script owns:

    <!-- partial:head -->        ... <!-- /partial:head -->
    <!-- partial:header KEY -->  ... <!-- /partial:header -->
    <!-- partial:footer -->      ... <!-- /partial:footer -->
    <!-- partial:related KEY --> ... <!-- /partial:related -->   ("Keep going" cards)

KEY is the nav item to highlight (learn, roadmap, practice, exam, pricing) or "none".
Edit the templates below, then run from the repository root:

    python3 tools/partials.py

The site itself needs no build step; this only rewrites the marked regions.
"""
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent

HEAD = """<!-- partial:head -->
<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)">
<link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
<link rel="manifest" href="site.webmanifest">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Inter+Tight:wght@600;700;800&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/site.css">
<script>try{var t=localStorage.getItem("nclc5-theme");if(t==="dark"||t==="light")document.documentElement.setAttribute("data-theme",t)}catch(e){}if(!(window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches)&&"IntersectionObserver"in window)document.documentElement.classList.add("js-motion");</script>
<script src="assets/config.js"></script>
<script src="assets/site.js"></script>
<!-- /partial:head -->"""

# Top-level nav items. Items with a submenu get a dropdown on desktop and a
# collapsible group in the mobile menu. Each submenu entry: (href, label, hint).
NAV = [
    ("learn", "learn.html", "Learn", [
        ("learn.html", "Course overview", "All 21 modules and your progress"),
        ("learn.html#method", "How to learn French", "The research-based method"),
        ("learn.html#sounds", "Pronunciation", "The sounds of French"),
        ("learn.html#basics", "A1 · Foundations", "Être, avoir, present tense, questions"),
        ("learn.html#reflexive", "A2 · Everyday French", "Passé composé, imparfait, pronouns"),
        ("learn.html#conditional", "B1 · Independent user", "Conditional, subjunctive, arguing"),
        ("learn.html#exam", "Exam technique", "TCF & TEF task by task"),
        ("learn.html#tcf-t2", "TCF task 2 kit", "Asking questions: the interaction task"),
        ("learn.html#tcf-t3", "TCF task 3 template", "Giving your opinion in 4:30"),
    ]),
    ("roadmap", "roadmap.html", "Roadmap", [
        ("roadmap.html", "Roadmap overview", "Your checklist and progress"),
        ("roadmap.html#scores", "Score bands", "What NCLC 5 means on each test"),
        ("roadmap.html#format", "Exam format", "Sections, tasks and timing"),
        ("roadmap.html#order", "Grammar order", "Conjugation tables with audio"),
        ("roadmap.html#vocab", "Vocabulary banks", "Ten exam themes"),
        ("roadmap.html#skills", "Skills checklist", "What examiners score"),
    ]),
    ("practice", "quiz.html", "Practice", [
        ("quiz.html", "All drill sets", "Pick a set and a mode"),
        ("quiz.html?set=conj", "Verb conjugations", "Every table on the roadmap"),
        ("quiz.html?set=verbs-all", "All verbs", "-er, -ir and -re verbs"),
        ("quiz.html?set=vocab-all", "All vocabulary", "Ten themes mixed"),
        ("quiz.html?set=weak", "Weak items review", "What you missed recently"),
    ]),
    ("exam", "exam.html", "Mock exam", [
        ("exam.html", "All sections", "Your scores and history"),
        ("exam.html?s=listening", "Listening", "20 questions · 18 min"),
        ("exam.html?s=reading", "Reading", "20 questions · 30 min"),
        ("exam.html?s=writing", "Writing", "3 tasks with a live coach"),
        ("exam.html?s=speaking", "Speaking", "3 tasks with timers and recording"),
    ]),
    ("pricing", "pricing.html", "Pricing", None),
]

CHEVRON = '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'

# "Keep going" cards shown near the bottom of each study page.
RELATED = {
    "learn": [
        ("roadmap.html", "Roadmap checklist", "Tick off grammar, vocabulary and skills as you master them."),
        ("quiz.html", "Practice drills", "Drill what you just learned in four modes."),
        ("exam.html", "Mock exam", "Test yourself under real exam timing."),
    ],
    "roadmap": [
        ("learn.html", "The full course", "Every roadmap topic explained in depth, with speaking drills."),
        ("quiz.html", "Practice drills", "Turn these tables into automatic recall."),
        ("learn.html#tcf-t2", "TCF task 2 kit", "Question patterns for the interaction task."),
        ("exam.html", "Mock exam", "See where you stand, section by section."),
    ],
    "practice": [
        ("learn.html", "The full course", "Lessons behind every drill set."),
        ("roadmap.html#vocab", "Vocabulary banks", "Review a theme before drilling it."),
        ("exam.html", "Mock exam", "Put your vocabulary to work under time pressure."),
    ],
    "exam": [
        ("learn.html#exam", "Exam technique", "Strategy for every section of the TCF and TEF."),
        ("learn.html#tcf-t2", "TCF task 2 kit", "Openings, 10-question sequence, reactions."),
        ("learn.html#tcf-t3", "TCF task 3 template", "A five-part opinion structure and builder."),
        ("learn.html#argue", "Connectors & arguments", "For the writing and opinion tasks."),
    ],
}

MOON = '<svg class="moon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.7 14.6A8.6 8.6 0 0 1 9.4 3.3a.7.7 0 0 0-.9-.9A10 10 0 1 0 21.6 15.5a.7.7 0 0 0-.9-.9z"/></svg>'
SUN = '<svg class="sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.2" fill="currentColor"/><path stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6"/></svg>'
MENU = '<svg viewBox="0 0 24 24" aria-hidden="true"><path stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16"/></svg>'


def header(active):
    links = []
    for key, href, label, sub in NAV:
        cur = ' aria-current="page"' if key == active else ""
        if not sub:
            links.append(f'      <a href="{href}"{cur}>{label}</a>')
            continue
        items = "\n".join(
            f'          <a href="{h}"><b>{l}</b><span>{hint}</span></a>' for h, l, hint in sub)
        links.append(f"""      <div class="nav-item" data-dd>
        <a class="nav-top" href="{href}"{cur}>{label}</a><button type="button" class="dd-toggle" aria-expanded="false" aria-label="{label} menu">{CHEVRON}</button>
        <div class="dd">
{items}
        </div>
      </div>""")
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
        <h4>Exam prep</h4>
        <ul>
          <li><a href="learn.html#exam">Exam technique</a></li>
          <li><a href="learn.html#tcf-t2">TCF task 2 kit</a></li>
          <li><a href="learn.html#tcf-t3">TCF task 3 template</a></li>
          <li><a href="exam.html?s=speaking">Speaking mock</a></li>
          <li><a href="exam.html?s=writing">Writing mock</a></li>
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


def related(key):
    cards = "\n".join(
        f'      <a class="related-card" href="{h}"><b>{t}</b><span>{d}</span><i aria-hidden="true">→</i></a>'
        for h, t, d in RELATED[key])
    return f"""<!-- partial:related {key} -->
<section class="related" aria-label="Keep going">
  <div class="container">
    <h2>Keep going</h2>
    <div class="related-grid">
{cards}
    </div>
  </div>
</section>
<!-- /partial:related -->"""


def render(text):
    text = re.sub(r"<!-- partial:head -->.*?<!-- /partial:head -->", lambda m: HEAD, text, flags=re.S)
    text = re.sub(r"<!-- partial:header (\w+) -->.*?<!-- /partial:header -->",
                  lambda m: header(m.group(1)), text, flags=re.S)
    text = re.sub(r"<!-- partial:footer -->.*?<!-- /partial:footer -->", lambda m: FOOTER, text, flags=re.S)
    text = re.sub(r"<!-- partial:related (\w+) -->.*?<!-- /partial:related -->",
                  lambda m: related(m.group(1)), text, flags=re.S)
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
