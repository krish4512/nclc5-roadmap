#!/usr/bin/env python3
"""Draw the site illustrations into assets/art/*.svg.

Every illustration is a framed panel (soft brand gradient, rounded corners)
holding one clear scene built from real interface pieces, with text large
enough to read at the size it is shown. Colours come from classes (c-card,
t-ink, st1…) mapped to the art tokens in assets/site.css, so the art follows
light and dark mode.

Edit a scene below, then run from the repository root:

    python3 tools/art.py && python3 tools/partials.py && node tools/page-previews.js
"""
import math
import pathlib

OUT = pathlib.Path(__file__).resolve().parent.parent / "assets" / "art"
OUT.mkdir(parents=True, exist_ok=True)

DEFS = """<defs>
<linearGradient id="pbg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" class="pb1"/><stop offset=".55" class="pb2"/><stop offset="1" class="pb3"/></linearGradient>
<radialGradient id="glow" cx=".5" cy=".5" r=".5"><stop offset="0" class="gw"/><stop offset="1" class="gw" stop-opacity="0"/></radialGradient>
<linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" class="st1"/><stop offset=".55" class="st2"/><stop offset="1" class="st3"/></linearGradient>
<linearGradient id="gh" x1="0" y1="0" x2="1" y2="0"><stop offset="0" class="st1"/><stop offset=".6" class="st2"/><stop offset="1" class="st3"/></linearGradient>
<linearGradient id="gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f7e2a4"/><stop offset="1" stop-color="#c58f2c"/></linearGradient>
<filter id="sh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="12" stdDeviation="14" flood-color="#141c4d" flood-opacity=".16"/></filter>
<filter id="shs" x="-30%" y="-40%" width="160%" height="190%"><feDropShadow dx="0" dy="5" stdDeviation="7" flood-color="#141c4d" flood-opacity=".16"/></filter>
<clipPath id="clip"><rect width="{W}" height="{H}" rx="{R}"/></clipPath>
</defs>"""


def svg(name, body, w=480, h=360, r=28, label="", cls="art"):
    defs = DEFS.replace("{W}", str(w)).replace("{H}", str(h)).replace("{R}", str(r))
    frame = (f'<g clip-path="url(#clip)"><rect width="{w}" height="{h}" fill="url(#pbg)"/>'
             f'<ellipse cx="{w*0.18}" cy="{h*0.1}" rx="{w*0.5}" ry="{h*0.5}" fill="url(#glow)"/>'
             f'<ellipse cx="{w*0.95}" cy="{h*1.0}" rx="{w*0.4}" ry="{h*0.45}" fill="url(#glow)" opacity=".6"/>'
             f'{body}</g>'
             f'<rect x=".5" y=".5" width="{w-1}" height="{h-1}" rx="{r}" fill="none" class="k-frame"/>')
    s = (f'<svg class="{cls}" viewBox="0 0 {w} {h}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="{label}">'
         f'{defs}{frame}</svg>\n')
    (OUT / f"{name}.svg").write_text(s, encoding="utf-8")


# ---------------------------------------------------------------- helpers
def card(x, y, w, h, r=20, cls="c-card", filt="sh", extra=""):
    return f'<g filter="url(#{filt})"><rect class="{cls}" x="{x}" y="{y}" width="{w}" height="{h}" rx="{r}" {extra}/></g>'


def t(x, y, s, size=15, w=600, cls="t-ink", a="start", extra=""):
    return f'<text class="{cls}" x="{x}" y="{y}" font-size="{size}" font-weight="{w}" text-anchor="{a}" {extra}>{s}</text>'


def label(x, y, s, cls="t-mute", a="start", size=12):
    return t(x, y, s, size, 700, cls, a, 'letter-spacing="1.2"')


def fr(x, y, s, size=20, a="start", cls="t-fr", extra=""):
    return f'<text class="{cls}" x="{x}" y="{y}" font-size="{size}" text-anchor="{a}" {extra}>{s}</text>'


def bar(x, y, w, h=8, cls="c-line"):
    return f'<rect class="{cls}" x="{x}" y="{y}" width="{w}" height="{h}" rx="{h/2}"/>'


def tick(cx, cy, r=11, color="#fff", sw=None):
    sw = sw or r * 0.24
    return (f'<path d="M{cx-r*.42} {cy+r*.02} L{cx-r*.1} {cy+r*.34} L{cx+r*.45} {cy-r*.3}" fill="none" '
            f'stroke="{color}" stroke-width="{sw}" stroke-linecap="round" stroke-linejoin="round"/>')


def check(cx, cy, r=12):
    return f'<circle class="c-good" cx="{cx}" cy="{cy}" r="{r}"/>' + tick(cx, cy, r)


def flame(cx, cy, s=1.0):
    return (f'<path fill="url(#g)" transform="translate({cx} {cy}) scale({s})" d="M0 -20 C 9 -11 15 -4 15 6 A15 15 0 0 1 -15 6 C -15 -3 -9 -7 -6 -15 C -3 -9 -1 -7 2 -5 C 3 -11 1 -16 0 -20Z"/>'
            f'<path fill="#fff" fill-opacity=".9" transform="translate({cx} {cy}) scale({s})" d="M0 0 C 4 4 6 7 6 10 A6 6 0 0 1 -6 10 C -6 6 -3 3 0 0Z"/>')


def clock(cx, cy, r=10):
    return (f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="none" class="k-g2" stroke-width="2.6"/>'
            f'<path d="M{cx} {cy-r*.55} v{r*.6} l{r*.42} {r*.3}" fill="none" class="k-g2" stroke-width="2.4" stroke-linecap="round"/>')


def pill(x, y, w, h, inner, cls="c-card", anim="fl1", filt="shs"):
    fill = 'fill="url(#gh)"' if cls == "grad" else f'class="{cls}"'
    return f'<g class="{anim}"><g filter="url(#{filt})"><rect {fill} x="{x}" y="{y}" width="{w}" height="{h}" rx="{h/2}"/></g>{inner}</g>'


def speaker(cx, cy, r=16):
    k = r / 16
    return (f'<circle cx="{cx}" cy="{cy}" r="{r}" class="c-soft"/>'
            f'<path transform="translate({cx-8*k} {cy-8*k}) scale({k})" d="M2 6h3l4-3.5v11L5 10H2z" class="c-g2"/>'
            f'<path transform="translate({cx-8*k} {cy-8*k}) scale({k})" d="M11.5 5.2a3.8 3.8 0 0 1 0 5.6" fill="none" class="k-g2" stroke-width="1.6" stroke-linecap="round"/>')


MAPLE = "M50 5 L57 20 L66 16 L63 38 L76 26 L79 33 L92 30 L87 44 L94 48 L72 64 L75 72 L53 69 L53 90 L47 90 L47 69 L25 72 L28 64 L6 48 L13 44 L8 30 L21 33 L24 26 L37 38 L34 16 L43 20 Z"


def maple(x, y, size, fill='fill="#e0554b"'):
    k = size / 100
    return f'<path {fill} transform="translate({x - 50*k} {y - 50*k}) scale({k})" d="{MAPLE}"/>'


# ---------------------------------------------------------------- learn
rows = [("done", "The sounds of French", "A1"), ("done", "The present tense", "A1"),
        ("now", "Passé composé", "A2"), ("lock", "The subjunctive", "B1")]
body = card(52, 46, 304, 268)
body += t(78, 86, "Your path to B1", 19, 800) + t(78, 108, "21 modules, in the right order", 13, 600, "t-mute")
for i, (st, title, lv) in enumerate(rows):
    y0 = 128 + i * 44
    if st == "now":
        body += f'<rect x="66" y="{y0}" width="276" height="38" rx="12" fill="url(#gh)"/>'
        body += f'<circle cx="88" cy="{y0+19}" r="10" fill="#fff"/><circle cx="88" cy="{y0+19}" r="4.5" fill="url(#g)"/>'
        body += t(108, y0 + 24, title, 15, 700, "", "start", 'fill="#fff"') + t(328, y0 + 24, lv, 12.5, 800, "", "end", 'fill="#fff" fill-opacity=".85"')
    else:
        body += (check(88, y0 + 19, 10) if st == "done" else f'<circle cx="88" cy="{y0+19}" r="10" class="c-line"/>')
        body += t(108, y0 + 24, title, 15, 600, "t-ink" if st == "done" else "t-mute") + t(328, y0 + 24, lv, 12.5, 800, "t-mute", "end")
        if i < 3:
            body += f'<rect x="78" y="{y0+40}" width="252" height="1" class="c-line"/>'
body += pill(326, 34, 132, 46, fr(392, 64, "Bonjour !", 20, "middle"), anim="fl2")
body += (f'<g class="fl1"><g filter="url(#sh)"><rect fill="url(#g)" x="348" y="250" width="112" height="90" rx="22"/></g>'
         + t(404, 293, "B1", 32, 800, "", "middle", 'fill="#fff"') + t(404, 318, "NCLC 5", 13, 700, "", "middle", 'fill="#fff" fill-opacity=".85"') + '</g>')
svg("learn", body, label="A learning path with finished modules, the current module and B1 ahead")

# ---------------------------------------------------------------- start (placement check)
body = card(44, 52, 312, 258)
body += label(68, 88, "QUESTION 4 / 12")
body += bar(68, 100, 264, 6) + f'<rect x="68" y="100" width="88" height="6" rx="3" fill="url(#gh)"/>'
body += fr(68, 146, "Hier, je ____ au cinéma.", 23)
body += t(68, 170, "Yesterday, I went to the cinema.", 13, 500, "t-mute")
body += '<rect x="68" y="190" width="264" height="44" rx="13" fill="url(#gh)"/>' + t(88, 218, "suis allé", 17, 700, "", "start", 'fill="#fff"') + tick(310, 212, 11)
body += '<rect x="68" y="244" width="264" height="44" rx="13" class="c-soft"/>' + t(88, 272, "ai allé", 17, 600, "t-mute")
body += (f'<g class="fl1"><g filter="url(#sh)"><rect class="c-card" x="330" y="56" width="128" height="96" rx="22"/></g>'
         + label(394, 88, "YOUR LEVEL", a="middle", size=11.5) + t(394, 132, "A2", 36, 800, "", "middle", 'fill="url(#g)"') + '</g>')
body += pill(330, 268, 128, 44, clock(354, 290) + t(374, 296, "2 minutes", 14, 700), anim="fl2")
svg("start", body, label="A placement question with the right answer chosen and a level of A2")

# ---------------------------------------------------------------- quiz (drills)
body = f'<g transform="rotate(-6 240 180)">{card(96, 70, 288, 222, 22, "c-soft2", "shs")}</g>'
body += f'<g transform="rotate(4 240 180)">{card(96, 64, 288, 222, 22, "c-soft", "shs")}</g>'
body += card(92, 60, 296, 236, 24)
body += label(116, 94, "FLASHCARD · 7 / 20")
body += fr(240, 166, "le délai", 48, "middle")
body += t(240, 196, "lead time, time needed", 15, 500, "t-mute", "middle")
body += '<rect x="116" y="232" width="118" height="42" rx="14" class="c-soft"/>' + t(175, 259, "Again", 15, 700, "", "middle", 'style="fill:var(--art-bad)"')
body += '<rect x="246" y="232" width="118" height="42" rx="14" fill="url(#gh)"/>' + t(305, 259, "Got it", 15, 700, "", "middle", 'fill="#fff"')
body += pill(340, 28, 120, 46, flame(366, 53, .82) + t(386, 57, "12 days", 15, 800))
svg("quiz", body, label="A French flashcard with Again and Got it buttons and a 12-day streak")

# ---------------------------------------------------------------- review (spaced repetition)
body = card(30, 50, 306, 262)
body += t(54, 88, "Memory", 18, 800) + t(54, 108, "with spaced review", 13, 600, "t-mute")
body += '<path d="M54 132 V268 H316" fill="none" class="k-line" stroke-width="2"/>'
body += '<path d="M66 142 C 110 232, 170 256, 314 262" fill="none" class="k-mute" stroke-width="2.5" stroke-dasharray="3 7" stroke-linecap="round"/>'
body += ('<path d="M66 142 C 82 190, 100 212, 124 218 L124 140 C 144 178, 166 194, 192 202 L192 136 C 214 168, 238 182, 262 188 '
         'L262 132 C 282 150, 300 158, 314 160" fill="none" stroke="url(#gh)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>')
for (x, y), d in zip([(66, 142), (124, 140), (192, 136), (262, 132)], ["Day 1", "Day 3", "Day 7", "Day 21"]):
    body += f'<circle cx="{x}" cy="{y}" r="7" class="c-card" stroke="url(#g)" stroke-width="4"/>' + t(x, 292, d, 12.5, 700, "t-mute", "middle")
body += (f'<g class="fl1"><g filter="url(#sh)"><rect fill="url(#g)" x="340" y="70" width="118" height="128" rx="26"/></g>'
         + t(399, 104, "TODAY", 12, 800, "", "middle", 'fill="#fff" fill-opacity=".85" letter-spacing="1.5"')
         + t(399, 154, "10", 44, 800, "", "middle", 'fill="#fff"') + t(399, 180, "cards due", 13, 600, "", "middle", 'fill="#fff" fill-opacity=".85"') + '</g>')
svg("review", body, label="A memory curve that climbs back up at each spaced review, with 10 cards due today")


# ---------------------------------------------------------------- speak (listen & repeat)
def wave(x, cy, n, fill, seed, step=12, hmax=34):
    out = ""
    for i in range(n):
        h = 8 + abs(math.sin(i * 0.9 + seed)) * (hmax * .6) + abs(math.sin(i * 2.3 + seed)) * (hmax * .4)
        out += f'<rect {fill} x="{x + i*step}" y="{cy - h/2:.1f}" width="6" height="{h:.1f}" rx="3"/>'
    return out


body = card(70, 58, 360, 252)
body += fr(130, 102, "Pardon, pouvez-vous", 22) + fr(130, 130, "répéter ?", 22)
body += label(98, 168, "MODEL", size=11.5) + wave(98, 192, 26, 'class="c-mute"', 0.4)
body += label(98, 232, "YOU", size=11.5) + wave(98, 256, 26, 'fill="url(#gh)"', 0.9)
body += (f'<g class="fl1"><g filter="url(#sh)"><circle cx="72" cy="80" r="38" fill="url(#g)"/></g>'
         '<rect x="63" y="58" width="18" height="30" rx="9" fill="#fff"/><path d="M55 80 a17 17 0 0 0 34 0" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round"/>'
         '<rect x="70.5" y="96" width="3" height="9" rx="1.5" fill="#fff"/></g>')
body += pill(318, 290, 144, 46, '<path d="M340 307 h22 l-5 -5 M362 319 h-22 l5 5" fill="none" class="k-g2" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>' + t(410, 318, "Compare", 15, 700, "t-ink", "middle"), anim="fl2")
svg("speak", body, label="A French sentence with the model voice and your recording as two sound waves")

# ---------------------------------------------------------------- exam
body = card(40, 44, 300, 276)
body += label(64, 80, "COMPRÉHENSION ORALE", size=11.5) + t(64, 106, "Question 12 / 39", 18, 800)
body += bar(64, 122, 236, 8, "c-mute") + bar(64, 138, 170, 8, "c-mute")
for i, o in enumerate("ABCD"):
    y0 = 164 + i * 38
    if o == "B":
        body += f'<rect x="64" y="{y0}" width="252" height="32" rx="11" fill="url(#gh)"/><circle cx="83" cy="{y0+16}" r="9" fill="#fff"/>'
        body += t(83, y0 + 20.5, o, 11.5, 800, "", "middle", 'fill="url(#g)"') + bar(102, y0 + 12, 120, 8, "c-white")
    else:
        body += f'<rect x="64" y="{y0}" width="252" height="32" rx="11" class="c-soft"/><circle cx="83" cy="{y0+16}" r="9" class="c-card"/>'
        body += t(83, y0 + 20.5, o, 11.5, 800, "t-mute", "middle") + bar(102, y0 + 12, [96, 0, 140, 80][i], 8, "c-mute")
body += (f'<g class="fl1"><g filter="url(#sh)"><circle class="c-card" cx="384" cy="104" r="68"/></g>'
         '<circle cx="384" cy="104" r="52" fill="none" class="k-line" stroke-width="10"/>'
         '<circle cx="384" cy="104" r="52" fill="none" stroke="url(#g)" stroke-width="10" stroke-linecap="round" stroke-dasharray="326.7" stroke-dashoffset="80" transform="rotate(-90 384 104)"/>'
         + t(384, 110, "34:12", 24, 800, "t-ink", "middle") + t(384, 130, "LEFT", 11, 800, "t-mute", "middle", 'letter-spacing="1.5"') + '</g>')
body += pill(300, 296, 158, 50, check(328, 321, 13) + t(398, 327, "NCLC 5", 17, 800, "t-ink", "middle"), anim="fl2")
svg("exam", body, label="A listening question with answer B chosen, a countdown timer and an NCLC 5 result")

# ---------------------------------------------------------------- topics (speaking)
body = (f'<g filter="url(#sh)"><path class="c-card" d="M60 44 h268 a22 22 0 0 1 22 22 v64 a22 22 0 0 1 -22 22 h-206 l-26 22 l4 -22 h-40 '
        'a22 22 0 0 1 -22 -22 v-64 a22 22 0 0 1 22 -22z"/></g>')
body += label(64, 76, "EXAMINATEUR", size=11.5) + fr(64, 110, "Vous cherchez un appartement.", 19) + fr(64, 136, "Posez-moi des questions.", 19)
body += (f'<g class="fl2"><g filter="url(#sh)"><path fill="url(#g)" d="M152 186 h268 a22 22 0 0 1 22 22 v54 a22 22 0 0 1 -22 22 h-36 l4 22 l-26 -22 h-210 '
         'a22 22 0 0 1 -22 -22 v-54 a22 22 0 0 1 22 -22z"/></g>'
         + t(156, 216, "VOUS", 11.5, 700, "", "start", 'fill="#fff" fill-opacity=".8" letter-spacing="1.2"')
         + fr(156, 250, "Quel est le loyer ?", 22, "start", "t-fr", 'style="fill:#fff"') + '</g>')
body += pill(30, 264, 112, 46, clock(56, 287) + t(76, 293, "3:30", 17, 800))
body += (f'<g class="fl1"><g transform="rotate(12 412 92)" filter="url(#sh)"><rect class="c-card" x="380" y="60" width="64" height="64" rx="15"/></g>'
         '<g transform="rotate(12 412 92)"><circle class="c-g1" cx="396" cy="76" r="5.5"/><circle class="c-g2" cx="412" cy="92" r="5.5"/><circle class="c-g3" cx="428" cy="108" r="5.5"/>'
         '<circle class="c-g1" cx="428" cy="76" r="5.5"/><circle class="c-g3" cx="396" cy="108" r="5.5"/></g></g>')
svg("topics", body, label="A speaking task: the examiner sets the scene and you ask a question, with a 3:30 timer and a die for a random topic")

# ---------------------------------------------------------------- writing
body = card(44, 30, 308, 300, 18)
body += label(68, 64, "TÂCHE 1 · 120–150 MOTS", size=11.5)
body += fr(68, 100, "L'année dernière, j'ai déménagé", 17.5) + fr(68, 128, "à Montréal. Le premier jour,", 17.5)
body += '<rect x="62" y="142" width="266" height="34" rx="9" class="c-good-soft"/>'
body += fr(70, 165, "j'ai allé", 17.5, "start", "t-fr", 'style="fill:var(--art-bad)"') + '<rect x="70" y="159" width="62" height="2" class="c-bad"/>'
body += fr(142, 165, "je suis allé", 17.5, "start", "t-fr", 'style="fill:var(--art-good);font-weight:700"')
body += fr(68, 202, "au bureau en métro.", 17.5)
for i, w in enumerate([250, 222, 240, 160]):
    body += bar(68, 222 + i * 20, w, 8, "c-mute")
body += (f'<g class="fl1"><g transform="rotate(36 400 200)" filter="url(#sh)"><rect fill="url(#g)" x="386" y="96" width="30" height="176" rx="13"/>'
         '<rect class="c-card" x="386" y="136" width="30" height="9" opacity=".5"/><path d="M386 270 L401 312 L416 270 Z" class="c-ink"/>'
         '<path d="M393 286 L401 312 L409 286 Z" class="c-gold"/></g></g>')
body += pill(340, 26, 118, 46, t(399, 55, "NCLC 7", 17, 800, "", "middle", 'fill="#fff"'), cls="grad", anim="fl2")
body += pill(330, 288, 128, 44, t(394, 315, "142 mots", 15, 800, "t-ink", "middle"))
svg("writing", body, label="A writing task with a mistake corrected, a pen and an NCLC 7 badge")

# ---------------------------------------------------------------- guides
body = card(52, 36, 304, 288)
body += f'<g clip-path="url(#hdr)"><rect x="52" y="36" width="304" height="84" fill="url(#gh)"/></g>'
body = body.replace("<g clip-path=\"url(#hdr)\">", "<clipPath id=\"hdr\"><rect x=\"52\" y=\"36\" width=\"304\" height=\"288\" rx=\"20\"/></clipPath><g clip-path=\"url(#hdr)\">")
body += t(76, 70, "FREE GUIDE", 11.5, 800, "", "start", 'fill="#fff" fill-opacity=".85" letter-spacing="1.4"') + t(76, 100, "NCLC 5 score chart", 20, 800, "", "start", 'fill="#fff"')
body += label(76, 148, "TCF CANADA · NCLC 5", size=11.5)
for i, (k, v) in enumerate([("Listening", "369+"), ("Reading", "375+"), ("Writing", "6 / 20"), ("Speaking", "6 / 20")]):
    y0 = 180 + i * 36
    body += t(76, y0, k, 15, 600) + t(332, y0, v, 16, 800, "", "end", 'fill="url(#gh)"')
    if i < 3:
        body += f'<rect x="76" y="{y0+13}" width="256" height="1" class="c-line"/>'
body += (f'<g class="fl1"><circle cx="392" cy="236" r="44" class="c-card" opacity=".55"/>'
         f'<g filter="url(#shs)"><circle cx="392" cy="236" r="44" fill="none" stroke="url(#g)" stroke-width="12"/></g>'
         '<rect fill="url(#g)" x="426" y="268" width="18" height="62" rx="9" transform="rotate(-45 435 299)"/></g>')
svg("guides", body, label="A free guide showing the NCLC 5 scores for each skill, under a magnifying glass")

# ---------------------------------------------------------------- contact
body = card(44, 40, 330, 280)
body += ('<g transform="translate(61 59) scale(0.59)"><path d="M16 5H48A11 11 0 0 1 59 16V39A11 11 0 0 1 48 50H27L16 59V50A11 11 0 0 1 5 39V16A11 11 0 0 1 16 5Z" fill="url(#g)"/>'  # the Prêt Français mark
         '<path d="M20.5 33.5L32 22L43.5 33.5" fill="none" stroke="#fff" stroke-width="7.5" stroke-linecap="round" stroke-linejoin="round"/></g>')
body += t(108, 74, "Prêt Français", 15, 800) + t(108, 93, "Replies within two business days", 12, 600, "t-mute")
body += '<rect x="44" y="110" width="330" height="1" class="c-line"/>'
body += '<rect x="64" y="128" width="224" height="44" rx="16" class="c-soft"/>' + t(82, 155, "Bonjour ! How can we help?", 14, 600)
body += '<rect x="134" y="184" width="220" height="44" rx="16" fill="url(#gh)"/>' + t(152, 211, "Where should I start?", 14, 600, "", "start", 'fill="#fff"')
body += '<rect x="64" y="240" width="250" height="44" rx="16" class="c-soft"/>' + t(82, 267, "Try the 2-minute check →", 14, 600)
body += (f'<g class="fl1"><g filter="url(#sh)"><circle cx="404" cy="96" r="44" fill="url(#g)"/></g>'
         '<rect x="380" y="80" width="48" height="34" rx="6" fill="none" stroke="#fff" stroke-width="3.2"/>'
         '<path d="M382 84 L404 100 L426 84" fill="none" stroke="#fff" stroke-width="3.2" stroke-linejoin="round" stroke-linecap="round"/></g>')
svg("contact", body, label="A support chat with a friendly reply and an envelope")

# ---------------------------------------------------------------- what's new
items = [("Full mock exam", "All four skills, timed"), ("Speaking topics", "60 TCF prompts"), ("Writing models", "NCLC 4, 5 and 7")]
body = card(44, 40, 316, 280)
body += t(68, 80, "What's new", 19, 800) + t(68, 100, "October 2026", 13, 600, "t-mute")
for i, (a, b) in enumerate(items):
    y0 = 124 + i * 62
    body += f'<rect x="68" y="{y0}" width="40" height="40" rx="12" fill="url(#g)"/>' + tick(88, y0 + 20, 12)
    body += t(122, y0 + 18, a, 15.5, 700) + t(122, y0 + 36, b, 12.5, 600, "t-mute")
    if i == 0:
        body += f'<rect x="282" y="{y0+6}" width="56" height="24" rx="12" fill="url(#gh)"/>' + t(310, y0 + 22.5, "NEW", 11.5, 800, "", "middle", 'fill="#fff" letter-spacing="1"')
    if i < 2:
        body += f'<rect x="68" y="{y0+52}" width="270" height="1" class="c-line"/>'
body += ('<g class="fl1"><g filter="url(#sh)"><rect fill="url(#g)" x="352" y="226" width="96" height="78" rx="14"/>'
         '<rect fill="url(#g)" x="342" y="204" width="116" height="30" rx="10"/></g>'
         '<rect class="c-card" x="391" y="204" width="18" height="100" opacity=".9"/>'
         '<path d="M400 204 C 380 178, 360 190, 378 203 Z M400 204 C 420 178, 440 190, 422 203 Z" class="c-card"/></g>')
svg("whats-new", body, label="A list of new features with a gift box")

# ---------------------------------------------------------------- certificate
body = f'<g transform="rotate(-3 210 190)">{card(38, 74, 330, 226, 12)}'
body += '<rect x="52" y="88" width="302" height="198" rx="6" fill="none" stroke="url(#gold)" stroke-width="2.5"/>'
body += t(203, 128, "CERTIFICATE OF COMPLETION", 11.5, 800, "", "middle", 'fill="#b2832a" letter-spacing="2"')
body += fr(203, 172, "Félicitations", 32, "middle")
body += bar(128, 196, 150, 8, "c-mute") + bar(150, 214, 106, 8, "c-line")
body += '<rect x="82" y="262" width="90" height="2" class="c-mute"/><rect x="234" y="262" width="90" height="2" class="c-mute"/></g>'
body += ('<g class="fl1"><path d="M370 250 l-18 80 l22 -12 l14 20 l12 -78z" fill="url(#g)"/><path d="M404 250 l18 80 l-22 -12 l-14 20 l-12 -78z" fill="url(#g)" opacity=".85"/>'
         '<g filter="url(#sh)"><circle cx="388" cy="232" r="54" fill="url(#gold)"/></g>'
         '<circle cx="388" cy="232" r="42" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="2" stroke-dasharray="3 5"/>'
         + t(388, 244, "B1", 32, 800, "", "middle", 'fill="#6b4a0f"') + '</g>')
body += ('<g class="fl2" filter="url(#shs)"><path class="c-ink" d="M76 54 L140 28 L204 54 L140 80 Z"/><path class="c-ink" d="M104 66 v22 c18 12 54 12 72 0 v-22 l-36 14z"/>'
         '<path d="M198 56 v26" class="k-g2" stroke-width="3"/><circle cx="198" cy="86" r="5" class="c-gold"/></g>')
svg("certificate", body, label="A certificate of completion with a gold B1 medal and a graduation cap")

# ---------------------------------------------------------------- 404
body = '<g filter="url(#sh)"><path class="c-card" d="M60 70 L170 44 L280 70 L400 44 L400 292 L280 318 L170 292 L60 318 Z"/></g>'
body += '<path class="c-soft" d="M170 44 L280 70 L280 318 L170 292 Z" opacity=".75"/>'
body += '<path d="M104 272 C 136 206, 204 258, 222 196 S 290 140, 314 178 S 344 214, 352 140" fill="none" class="k-g2" stroke-width="4" stroke-dasharray="3 10" stroke-linecap="round"/>'
body += '<circle cx="104" cy="272" r="9" fill="url(#g)"/>' + maple(126, 112, 46)
body += ('<g class="fl1"><g filter="url(#sh)"><path fill="url(#g)" d="M352 136 C 330 110, 318 96, 318 76 a34 34 0 0 1 68 0 c0 20 -12 34 -34 60z"/></g>'
         + t(352, 89, "?", 30, 800, "", "middle", 'fill="#fff"') + '</g>')
body += pill(306, 268, 120, 48, fr(366, 299, "Oups !", 22, "middle"), anim="fl2")
svg("404", body, label="A map with a winding route that ends at a question mark")


# ---------------------------------------------------------------- guide covers (480 × 220)
def cover(name, body, label_):
    svg(name, body, w=480, h=220, r=0, label=label_, cls="art cover")


hs = [40, 58, 78, 98, 118, 138, 156]
body = card(92, 26, 296, 172)
for i, h in enumerate(hs):
    body += (f'<rect x="{120 + i*36}" y="{172 - h*0.8:.1f}" width="24" height="{h*0.8:.1f}" rx="6" ' + ('fill="url(#g)"' if i == 1 else 'class="c-soft"') + '/>'
             + t(132 + i * 36, 188, str(i + 4), 11, 700, "t-mute", "middle"))
body += pill(110, 82, 92, 30, t(156, 102, "NCLC 5", 13, 800, "t-ink", "middle"))
cover("cover-score", body, "A bar chart of NCLC levels with level 5 highlighted")

body = (f'<g transform="rotate(-6 166 112)">{card(96, 42, 140, 140, 26)}' + t(166, 124, "TCF", 34, 800, "t-ink", "middle") + '</g>'
        f'<g transform="rotate(6 314 112)"><g filter="url(#sh)"><rect fill="url(#g)" x="244" y="42" width="140" height="140" rx="26"/></g>' + t(314, 124, "TEF", 34, 800, "", "middle", 'fill="#fff"') + '</g>'
        + card(212, 82, 56, 56, 28) + t(240, 117, "vs", 19, 800, "", "middle", 'fill="url(#g)"'))
cover("cover-tcf-tef", body, "TCF and TEF side by side")

body = ""
for i, (q, x, y, g) in enumerate([("Quel est le prix ?", 40, 34, False), ("Comment s'inscrire ?", 150, 88, True), ("Y a-t-il un parking ?", 70, 142, False)]):
    fill = 'fill="url(#gh)"' if g else 'class="c-card"'
    body += (f'<g filter="url(#shs)"><rect {fill} x="{x}" y="{y}" width="250" height="44" rx="22"/></g>'
             + fr(x + 125, y + 29, q, 19, "middle", "t-fr", 'style="fill:#fff"' if g else ""))
body += f'<g filter="url(#sh)"><circle fill="url(#g)" cx="420" cy="70" r="34"/></g>' + t(420, 83, "?", 36, 800, "", "middle", 'fill="#fff"')
cover("cover-task2", body, "Three French questions in speech bubbles")

body = card(56, 20, 270, 180)
for i, p in enumerate(["Opening", "Argument 1", "Argument 2", "Counterpoint", "Conclusion"]):
    y0 = 52 + i * 32
    on = i in (0, 4)
    body += (f'<circle cx="86" cy="{y0}" r="11" ' + ('fill="url(#g)"' if on else 'class="c-soft"') + '/>'
             + t(86, y0 + 4.5, str(i + 1), 12, 800, "" if on else "t-ink", "middle", 'fill="#fff"' if on else "")
             + t(108, y0 + 5, p, 14.5, 700) + bar(236, y0 - 3, 66 - i * 6, 6))
body += (card(338, 52, 116, 116, 58) + '<circle cx="396" cy="110" r="44" fill="none" class="k-line" stroke-width="9"/>'
         '<circle cx="396" cy="110" r="44" fill="none" stroke="url(#g)" stroke-width="9" stroke-linecap="round" stroke-dasharray="276.5" stroke-dashoffset="66" transform="rotate(-90 396 110)"/>'
         + t(396, 118, "4:30", 23, 800, "t-ink", "middle"))
cover("cover-task3", body, "The five parts of a Task 3 answer and a 4:30 timer")

body = card(48, 32, 310, 156) + label(72, 64, "1–2 HOURS A DAY", size=11.5)
for i, m in enumerate(["J", "F", "M", "A", "M", "J", "J", "A"]):
    body += t(82 + i * 34, 172, m, 11.5, 700, "t-mute", "middle")
body += '<path d="M82 146 C 132 140, 152 120, 194 112 S 276 80, 320 70" fill="none" stroke="url(#gh)" stroke-width="5" stroke-linecap="round"/>'
for x, y in [(82, 146), (194, 112), (320, 70)]:
    body += f'<circle cx="{x}" cy="{y}" r="6.5" class="c-card" stroke="url(#g)" stroke-width="3.5"/>'
body += f'<g filter="url(#sh)"><circle fill="url(#g)" cx="414" cy="110" r="42"/></g>' + t(414, 120, "B1", 28, 800, "", "middle", 'fill="#fff"')
cover("cover-b1", body, "A progress line across the months to B1")

# ---------------------------------------------------------------- learning journey (landing page)
road = "M40 230 C 160 230, 180 120, 300 130 S 440 250, 560 230 S 700 100, 820 110 S 960 150, 1000 140"
stops = [(180, 168, "A1", "The basics"), (430, 196, "A2", "Everyday French"), (690, 150, "B1", "Independent")]
j = (f'<path d="{road}" fill="none" class="k-line" stroke-width="30" stroke-linecap="round"/>'
     f'<path d="{road}" fill="none" stroke="url(#gh)" stroke-width="5" stroke-linecap="round" stroke-dasharray="1 14"/>')
for i, (x, y, lv, sub) in enumerate(stops):
    j += (f'<g class="fl{i % 2 + 1}">{card(x-72, y-114, 144, 76, 18)}'
          + t(x, y - 77, lv, 24, 800, "t-ink", "middle") + t(x, y - 55, sub, 13.5, 600, "t-mute", "middle")
          + f'<path d="M{x-8} {y-39} L{x} {y-29} L{x+8} {y-39}Z" class="c-card"/></g>'
          + f'<circle cx="{x}" cy="{y}" r="11" class="c-card" stroke="url(#g)" stroke-width="5"/>')
j += (f'<g class="fl1"><g filter="url(#sh)"><rect fill="url(#g)" x="852" y="10" width="170" height="96" rx="22"/></g>'
      + maple(890, 58, 40, 'fill="#fff"') + t(962, 56, "NCLC 5", 22, 800, "", "middle", 'fill="#fff"')
      + t(962, 80, "TCF · TEF", 13, 600, "", "middle", 'fill="#fff" fill-opacity=".85"') + '</g>'
      '<circle cx="940" cy="132" r="13" fill="url(#g)"/><circle cx="940" cy="132" r="5" fill="#fff"/>'
      '<circle cx="40" cy="230" r="13" class="c-card" stroke="url(#g)" stroke-width="5"/>'
      + pill(4, 262, 112, 38, t(60, 286, "Day 1", 15, 700, "t-ink", "middle")))
(OUT / "journey.svg").write_text(
    '<svg class="art" viewBox="0 0 1030 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A road from day one through A1, A2 and B1 to NCLC 5">'
    + DEFS.replace("{W}", "1030").replace("{H}", "310").replace("{R}", "0") + j + "</svg>\n", encoding="utf-8")

for old in ("today",):
    (OUT / f"{old}.svg").unlink(missing_ok=True)
print("wrote", len(list(OUT.glob("*.svg"))), "illustrations to assets/art/")
