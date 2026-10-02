#!/usr/bin/env python3
"""Draw the site illustrations into assets/art/*.svg.

Each illustration is plain SVG that uses classes (c-card, t-ink, st1…) instead of
fixed colours, so the colours come from the art tokens in assets/site.css and
follow light and dark mode. Edit a scene below, then run from the repository root:

    python3 tools/art.py && python3 tools/partials.py && node tools/page-previews.js
"""
import pathlib
OUT = pathlib.Path(__file__).resolve().parent.parent / "assets" / "art"

DEFS = """<defs>
<radialGradient id="bg" cx=".5" cy=".5" r=".5"><stop offset="0" class="sbg"/><stop offset=".65" class="sbg" stop-opacity=".55"/><stop offset="1" class="sbg" stop-opacity="0"/></radialGradient>
<linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" class="st1"/><stop offset=".55" class="st2"/><stop offset="1" class="st3"/></linearGradient>
<linearGradient id="gh" x1="0" y1="0" x2="1" y2="0"><stop offset="0" class="st1"/><stop offset=".55" class="st2"/><stop offset="1" class="st3"/></linearGradient>
<linearGradient id="gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f6dd95"/><stop offset="1" stop-color="#c9922e"/></linearGradient>
<linearGradient id="sun" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffcf6b"/><stop offset="1" stop-color="#f27a9b"/></linearGradient>
<filter id="sh" x="-40%" y="-40%" width="180%" height="190%"><feDropShadow dx="0" dy="10" stdDeviation="12" flood-color="#1b2559" flood-opacity=".14"/></filter>
<filter id="shs" x="-40%" y="-40%" width="180%" height="190%"><feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#1b2559" flood-opacity=".14"/></filter>
</defs>"""

def svg(name, body, vb="0 0 520 400", bg=True, label="", cls="art"):
    w, h = map(int, vb.split()[2:])
    back = f'<ellipse cx="{w/2}" cy="{h/2}" rx="{w*0.47}" ry="{h*0.49}" fill="url(#bg)"/>' if bg else ""
    s = f'<svg class="{cls}" viewBox="{vb}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="{label}">{DEFS}{back}{body}</svg>\n'
    (OUT / f"{name}.svg").write_text(s)

def spark(x, y, r=9, cls="fl3"):
    k = r * 0.28
    return f'<path class="{cls}" fill="url(#g)" d="M{x} {y-r} Q{x+k} {y-k} {x+r} {y} Q{x+k} {y+k} {x} {y+r} Q{x-k} {y+k} {x-r} {y} Q{x-k} {y-k} {x} {y-r}Z"/>'
def dot(x, y, r=4, cls="c-g2"):
    return f'<circle class="{cls}" cx="{x}" cy="{y}" r="{r}"/>'
def bar(x, y, w, h=8, cls="c-line"):
    return f'<rect class="{cls}" x="{x}" y="{y}" width="{w}" height="{h}" rx="{h/2}"/>'
def chip(x, y, w, text, h=34, cls="c-card", tcls="t-ink", fs=15, filt="shs", anim="", extra=""):
    return (f'<g class="{anim}" filter="url(#{filt})"><rect class="{cls}" x="{x}" y="{y}" width="{w}" height="{h}" rx="{h/2}"/>{extra}'
            f'<text class="{tcls}" x="{x + w/2}" y="{y + h/2 + fs*0.36}" font-size="{fs}" text-anchor="middle" font-weight="700">{text}</text></g>')
def flame(cx, cy, s=1.0, fill='fill="url(#g)"'):
    return (f'<path {fill} transform="translate({cx} {cy}) scale({s})" d="M0 -20 C 9 -11 15 -4 15 6 A15 15 0 0 1 -15 6 C -15 -3 -9 -7 -6 -15 C -3 -9 -1 -7 2 -5 C 3 -11 1 -16 0 -20Z"/>'
            f'<path fill="#fff" fill-opacity=".9" transform="translate({cx} {cy}) scale({s})" d="M0 0 C 4 4 6 7 6 10 A6 6 0 0 1 -6 10 C -6 6 -3 3 0 0Z"/>')

def check(cx, cy, r=13, cls="c-good"):
    return (f'<circle class="{cls}" cx="{cx}" cy="{cy}" r="{r}"/>'
            f'<path d="M{cx-r*.42} {cy+r*.02} L{cx-r*.1} {cy+r*.34} L{cx+r*.45} {cy-r*.3}" fill="none" stroke="#fff" stroke-width="{r*.24}" stroke-linecap="round" stroke-linejoin="round"/>')

# ---------- learn: open book, level path to B1, Bonjour bubble ----------
book = f'''
<g filter="url(#sh)">
  <path fill="url(#g)" d="M96 300 Q178 280 260 304 Q342 280 424 300 L424 318 Q342 298 260 322 Q178 298 96 318 Z"/>
  <path class="c-card" d="M106 298 Q183 278 258 300 L258 186 Q183 164 106 184 Z"/>
  <path class="c-card" d="M262 300 Q337 278 414 298 L414 184 Q337 164 262 186 Z"/>
</g>
<path class="c-line" d="M258 186 L262 186 L262 300 L258 300Z"/>
''' + "".join(f'<path d="M{124} {206+i*18} Q183 {191+i*18} {242} {204+i*18}" fill="none" class="k-mute" stroke-width="5" stroke-linecap="round"/>' for i in range(5)) + \
"".join(f'<path d="M{278} {204+i*18} Q337 {191+i*18} {396} {206+i*18}" fill="none" class="k-mute" stroke-width="5" stroke-linecap="round"/>' for i in (0,1,3,4)) + \
'<path d="M278 240 Q310 232 340 236" fill="none" stroke="url(#gh)" stroke-width="5" stroke-linecap="round"/>'
path = '''<path d="M150 150 C 200 92, 250 168, 300 112 S 372 70, 414 76" fill="none" class="k-g2" stroke-width="3" stroke-dasharray="2 9" stroke-linecap="round"/>'''
nodes = f'''
<g class="fl1" filter="url(#shs)"><circle class="c-card" cx="150" cy="150" r="22"/><text class="t-ink" x="150" y="156" font-size="15" font-weight="700" text-anchor="middle">A1</text></g>
<g class="fl2" filter="url(#shs)"><circle class="c-card" cx="300" cy="112" r="22"/><text class="t-ink" x="300" y="118" font-size="15" font-weight="700" text-anchor="middle">A2</text></g>
<g class="fl3" filter="url(#sh)"><circle fill="url(#g)" cx="414" cy="76" r="32"/><text x="414" y="84" font-size="21" font-weight="800" fill="#fff" text-anchor="middle">B1</text>
  <path d="M432 40 L432 8 L458 16 L432 24" fill="url(#g)"/><rect class="c-ink" x="430" y="6" width="3" height="40" rx="1.5"/></g>
'''
bubble = f'''<g class="fl2" filter="url(#sh)">
<path class="c-card" d="M22 236 h112 a18 18 0 0 1 18 18 v6 a18 18 0 0 1 -18 18 h-74 l-16 14 l2 -14 h-24 a18 18 0 0 1 -18 -18 v-6 a18 18 0 0 1 18 -18z"/>
<text class="t-fr" x="78" y="264" font-size="21" text-anchor="middle">Bonjour !</text></g>'''
svg("learn", path + book + nodes + bubble + spark(78, 96, 11) + spark(470, 214, 8, "fl1") + dot(222, 60, 4) + dot(470, 150, 3, "c-g3") + dot(60, 180, 3, "c-g1"),
    label="An open book with a path from A1 to A2 to B1")

# ---------- start: staircase A1 A2 B1 with "you are here" pin ----------
steps = f'''
<g filter="url(#sh)">
  <rect class="c-card" x="70" y="262" width="128" height="70" rx="16"/>
  <rect class="c-card" x="196" y="200" width="128" height="132" rx="16"/>
  <rect fill="url(#g)" x="322" y="134" width="128" height="198" rx="16"/>
</g>
<text class="t-mute" x="134" y="306" font-size="22" font-weight="800" text-anchor="middle">A1</text>
<text class="t-ink" x="260" y="276" font-size="22" font-weight="800" text-anchor="middle">A2</text>
<text x="386" y="244" font-size="26" font-weight="800" fill="#fff" text-anchor="middle">B1</text>
<text x="386" y="268" font-size="13" font-weight="600" fill="#fff" fill-opacity=".85" text-anchor="middle">NCLC 5</text>
{bar(96, 236, 76, 6, "c-line")}
{bar(222, 300, 76, 6, "c-line")}{bar(222, 314, 50, 6, "c-line")}
'''
pin = '''<g class="fl1">
<g filter="url(#sh)"><path fill="url(#g)" d="M260 186 C 240 160, 228 146, 228 128 a32 32 0 0 1 64 0 c0 18 -12 32 -32 58z"/></g>
<circle cx="260" cy="128" r="12" fill="#fff"/></g>
<ellipse cx="260" cy="200" rx="16" ry="4" class="c-line"/>'''
here = chip(148, 62, 112, "You are here", h=32, fs=13, anim="fl2")
timer = f'''<g class="fl3" filter="url(#shs)"><rect class="c-card" x="372" y="58" width="96" height="40" rx="20"/>
<circle cx="396" cy="78" r="10" fill="none" class="k-g2" stroke-width="3"/><path d="M396 72 v6 l4 3" fill="none" class="k-g2" stroke-width="2.5" stroke-linecap="round"/>
<text class="t-ink" x="440" y="84" font-size="15" font-weight="700" text-anchor="middle">2 min</text></g>'''
svg("start", steps + pin + here + timer + spark(80, 150, 10) + spark(480, 300, 8, "fl1") + dot(330, 80, 4) + dot(110, 210, 3, "c-g3"),
    label="Three steps labelled A1, A2 and B1 with a pin marking your level")

# ---------- quiz: flashcard stack with check / cross ----------
cards = f'''
<g transform="rotate(-10 250 210)" filter="url(#shs)"><rect class="c-soft2" x="140" y="110" width="220" height="150" rx="20"/></g>
<g transform="rotate(6 270 210)" filter="url(#shs)"><rect class="c-soft" x="160" y="104" width="220" height="150" rx="20"/></g>
<g class="fl1"><g filter="url(#sh)"><rect class="c-card" x="150" y="118" width="230" height="160" rx="22"/></g>
<text class="t-mute" x="174" y="150" font-size="12" font-weight="700" letter-spacing="1.5">FLASHCARD · 7 / 20</text>
<text class="t-fr" x="265" y="206" font-size="38" text-anchor="middle">le délai</text>
{bar(212, 228, 106, 7, "c-line")}
<rect fill="url(#gh)" x="174" y="256" width="182" height="5" rx="2.5" opacity=".9"/>
<rect class="c-card" x="292" y="256" width="64" height="5" rx="2.5" opacity=".7"/></g>
'''
btns = f'''<g class="fl2" filter="url(#sh)"><circle class="c-bad" cx="150" cy="300" r="24"/>
<path d="M141 291 l18 18 M159 291 l-18 18" stroke="#fff" stroke-width="4.5" stroke-linecap="round"/></g>
<g class="fl3" filter="url(#sh)">{check(384, 296, 26)}</g>'''
flamechip = f'''<g class="fl2" filter="url(#shs)"><rect class="c-card" x="372" y="62" width="104" height="44" rx="22"/>
{flame(400, 84, 0.95)}
<text class="t-ink" x="446" y="90" font-size="18" font-weight="800" text-anchor="middle">12</text></g>'''
svg("quiz", cards + btns + flamechip + spark(92, 110, 11) + spark(458, 210, 8, "fl1") + dot(110, 210, 3, "c-g1") + dot(300, 70, 4, "c-g3"),
    label="A stack of French flashcards with right and wrong buttons")

# ---------- review: forgetting curve with spaced reviews ----------
pts = [(118, 120), (196, 112), (282, 104), (384, 96)]
curve = "M118 120 C 140 190, 160 210, 196 218 L196 112 C 222 170, 246 188, 282 192 L282 104 C 312 148, 344 160, 384 162 L384 96 C 410 120, 430 128, 446 130"
chart = f'''
<g filter="url(#sh)"><rect class="c-card" x="76" y="58" width="390" height="252" rx="24"/></g>
<text class="t-ink" x="104" y="96" font-size="17" font-weight="800">Memory</text>
<path d="M104 116 V266 H446" fill="none" class="k-line" stroke-width="2"/>
<path d="M118 120 C 150 220, 200 250, 446 262" fill="none" class="k-mute" stroke-width="3" stroke-dasharray="3 7" stroke-linecap="round"/>
<path d="{curve}" fill="none" stroke="url(#gh)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
''' + "".join(f'<circle cx="{x}" cy="{y}" r="7" class="c-card" stroke="url(#g)" stroke-width="4"/>' for x, y in pts) + \
"".join(f'<text class="t-mute" x="{x}" y="290" font-size="12.5" font-weight="700" text-anchor="middle">{d}</text>' for (x, _), d in zip(pts, ["Day 1", "Day 3", "Day 7", "Day 21"]))
brain = f'''<g class="fl2">{chip(26, 168, 104, "Revoir ✓", h=36, fs=15, cls="c-card")}</g>'''
cal = f'''<g class="fl1" filter="url(#sh)"><rect fill="url(#g)" x="400" y="20" width="84" height="84" rx="20"/>
<text x="442" y="56" font-size="12" font-weight="700" fill="#fff" fill-opacity=".85" text-anchor="middle" letter-spacing="1">TODAY</text>
<text x="442" y="88" font-size="30" font-weight="800" fill="#fff" text-anchor="middle">10</text></g>'''
svg("review", chart + brain + cal + spark(60, 72, 10) + spark(480, 340, 8, "fl1") + dot(250, 340, 4, "c-g3") + dot(40, 290, 3, "c-g1"),
    label="A memory curve that rises again at each spaced review")

# ---------- exam: answer sheet + stopwatch + NCLC chip ----------
opts = ["A", "B", "C", "D"]
sheet = f'''<g transform="rotate(-4 220 210)"><g filter="url(#sh)"><rect class="c-card" x="96" y="70" width="230" height="280" rx="22"/></g>
<text class="t-mute" x="122" y="106" font-size="12" font-weight="700" letter-spacing="1.5">COMPRÉHENSION ORALE</text>
{bar(122, 122, 170, 8, "c-mute")}{bar(122, 138, 120, 8, "c-mute")}
''' + "".join(
    (f'<rect x="122" y="{164 + i*40}" width="178" height="30" rx="10" ' + ('fill="url(#gh)"' if o == "B" else 'class="c-soft"') + '/>'
     f'<circle cx="140" cy="{179 + i*40}" r="8" ' + ('fill="#fff"' if o == "B" else 'class="c-card"') + '/>'
     f'<text x="140" y="{183.5 + i*40}" font-size="11" font-weight="800" text-anchor="middle" ' + ('fill="url(#g)"' if o == "B" else 'class="t-mute"') + f'>{o}</text>'
     + bar(158, 175 + i*40, 70 + (i*23) % 60, 8, "c-white" if o == "B" else "c-mute"))
    for i, o in enumerate(opts)) + '</g>'
watch = f'''<g class="fl1"><g filter="url(#sh)">
<rect fill="url(#g)" x="355" y="62" width="30" height="20" rx="6"/>
<circle class="c-card" cx="370" cy="170" r="88"/></g>
<circle cx="370" cy="170" r="70" fill="none" class="k-line" stroke-width="12"/>
<circle cx="370" cy="170" r="70" fill="none" stroke="url(#g)" stroke-width="12" stroke-linecap="round" stroke-dasharray="439.8" stroke-dashoffset="110" transform="rotate(-90 370 170)"/>
<text class="t-ink" x="370" y="178" font-size="30" font-weight="800" text-anchor="middle">35:00</text>
<text class="t-mute" x="370" y="200" font-size="12" font-weight="700" text-anchor="middle" letter-spacing="1">MINUTES</text></g>'''
nclc = f'''<g class="fl2" filter="url(#sh)"><rect class="c-card" x="300" y="290" width="160" height="50" rx="25"/>{check(328, 315, 15)}
<text class="t-ink" x="398" y="321" font-size="17" font-weight="800" text-anchor="middle">NCLC 5</text></g>'''
svg("exam", sheet + watch + nclc + spark(56, 120, 11) + spark(480, 260, 8, "fl1") + dot(250, 46, 4, "c-g3") + dot(60, 300, 3, "c-g1"),
    label="An answer sheet, a stopwatch and an NCLC 5 result")


MAPLE = "M50 5 L57 20 L66 16 L63 38 L76 26 L79 33 L92 30 L87 44 L94 48 L72 64 L75 72 L53 69 L53 90 L47 90 L47 69 L25 72 L28 64 L6 48 L13 44 L8 30 L21 33 L24 26 L37 38 L34 16 L43 20 Z"
def maple(x, y, size, fill='fill="url(#g)"', cls=""):
    k = size / 100
    return f'<path class="{cls}" {fill} transform="translate({x - 50*k} {y - 50*k}) scale({k})" d="{MAPLE}"/>'
def speaker(cx, cy, r=14):
    return (f'<circle cx="{cx}" cy="{cy}" r="{r}" class="c-soft"/>'
            f'<path transform="translate({cx-7} {cy-7}) scale(0.875)" d="M2 6h3l4-3.5v11L5 10H2z" class="c-g2"/>'
            f'<path transform="translate({cx-7} {cy-7}) scale(0.875)" d="M11.5 5.5a3.5 3.5 0 0 1 0 5" fill="none" class="k-g2" stroke-width="1.6" stroke-linecap="round"/>')

# ---------- conjugate ----------
rows = [("je", "étais", False), ("tu", "étais", False), ("nous", "étions", True), ("ils", "étaient", False)]
conj = f'''<g filter="url(#sh)"><rect class="c-card" x="112" y="66" width="296" height="268" rx="26"/></g>
<text class="t-fr" x="140" y="122" font-size="44">être</text><text class="t-mute" x="236" y="120" font-size="15" font-weight="600">to be</text>
{speaker(376, 108, 16)}
<rect class="c-soft" x="140" y="140" width="240" height="32" rx="16"/>
<rect fill="url(#gh)" x="218" y="143" width="88" height="26" rx="13"/>
<text class="t-mute" x="178" y="161" font-size="12" font-weight="700" text-anchor="middle">Présent</text>
<text x="262" y="161" font-size="12" font-weight="700" fill="#fff" text-anchor="middle">Imparfait</text>
<text class="t-mute" x="343" y="161" font-size="12" font-weight="700" text-anchor="middle">Futur</text>
''' + "".join(
    (f'<rect x="140" y="{186+i*36}" width="240" height="30" rx="10" class="c-soft2"/>' if hl else f'<rect x="140" y="{215+i*36}" width="240" height="1.5" class="c-line"/>') +
    f'<text class="t-mute" x="154" y="{206+i*36}" font-size="14" font-weight="600">{pr}</text>'
    f'<text x="214" y="{206+i*36}" font-size="16" font-weight="800" ' + ('fill="url(#gh)"' if hl else 'class="t-ink"') + f'>{v}</text>'
    for i, (pr, v, hl) in enumerate(rows))
floats = chip(28, 96, 74, "suis", fs=16, anim="fl1") + chip(424, 186, 84, "serai", fs=16, anim="fl2") + chip(44, 268, 64, "été", fs=16, anim="fl3")
svg("conjugate", conj + floats + spark(464, 84, 10) + spark(80, 200, 7, "fl1") + dot(250, 360, 4, "c-g3") + dot(470, 300, 3, "c-g1"),
    label="A conjugation card for the verb être")

# ---------- speak ----------
mic = f'''<g class="fl1"><g filter="url(#sh)"><rect fill="url(#g)" x="98" y="96" width="74" height="132" rx="37"/></g>
<rect x="112" y="128" width="46" height="5" rx="2.5" fill="#fff" fill-opacity=".35"/><rect x="112" y="144" width="46" height="5" rx="2.5" fill="#fff" fill-opacity=".35"/><rect x="112" y="160" width="46" height="5" rx="2.5" fill="#fff" fill-opacity=".35"/>
<path d="M80 184 a55 55 0 0 0 110 0" fill="none" class="k-mute" stroke-width="8" stroke-linecap="round"/>
<rect class="c-mute" x="131" y="238" width="8" height="34" rx="4"/><rect class="c-mute" x="104" y="270" width="62" height="10" rx="5"/></g>'''
import math
def wave(x, y, n, cls, fill, seed):
    out = ""
    for i in range(n):
        h = 8 + abs(math.sin(i * 0.9 + seed)) * 30 + abs(math.sin(i * 2.3 + seed)) * 12
        out += f'<rect {cls} {fill} x="{x + i*11}" y="{y - h/2}" width="6" height="{h}" rx="3"/>'
    return out
panel = f'''<g filter="url(#sh)"><rect class="c-card" x="222" y="92" width="262" height="212" rx="24"/></g>
<text class="t-mute" x="246" y="126" font-size="12" font-weight="700" letter-spacing="1.5">MODEL</text>
{wave(246, 162, 20, 'class="c-mute"', '', 0.4)}
<text class="t-mute" x="246" y="208" font-size="12" font-weight="700" letter-spacing="1.5">YOU</text>
{wave(246, 244, 20, '', 'fill="url(#gh)"', 0.9)}
<rect class="c-line" x="246" y="276" width="214" height="1.5"/>'''
cmp = f'''<g class="fl2" filter="url(#sh)"><rect class="c-card" x="330" y="296" width="132" height="42" rx="21"/>
<path d="M350 312 h22 l-5 -5 M372 322 h-22 l5 5" fill="none" class="k-g2" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
<text class="t-ink" x="420" y="323" font-size="15" font-weight="700" text-anchor="middle">Compare</text></g>'''
bub = f'''<g class="fl3" filter="url(#sh)"><path class="c-card" d="M40 40 h120 a18 18 0 0 1 18 18 v4 a18 18 0 0 1 -18 18 h-80 l-14 14 l1 -14 h-27 a18 18 0 0 1 -18 -18 v-4 a18 18 0 0 1 18 -18z"/>
<text class="t-fr" x="99" y="67" font-size="21" text-anchor="middle">Pardon ?</text></g>'''
svg("speak", mic + panel + cmp + bub + spark(470, 56, 10) + spark(60, 300, 8, "fl1") + dot(210, 52, 4, "c-g3") + dot(206, 340, 3, "c-g1"),
    label="A microphone and two sound waves to compare: the model voice and you")

# ---------- topics ----------
ex = f'''<g class="fl1" filter="url(#sh)"><path class="c-card" d="M60 92 h210 a22 22 0 0 1 22 22 v62 a22 22 0 0 1 -22 22 h-160 l-26 22 l4 -22 h-28 a22 22 0 0 1 -22 -22 v-62 a22 22 0 0 1 22 -22z"/></g>
<text class="t-mute" x="80" y="122" font-size="12" font-weight="700" letter-spacing="1.5">TÂCHE 2</text>
{bar(80, 136, 180, 8, "c-mute")}{bar(80, 152, 150, 8, "c-mute")}{bar(80, 168, 110, 8, "c-mute")}'''
you = f'''<g class="fl2"><g filter="url(#sh)"><path fill="url(#g)" d="M228 214 h220 a22 22 0 0 1 22 22 v40 a22 22 0 0 1 -22 22 h-28 l4 22 l-26 -22 h-170 a22 22 0 0 1 -22 -22 v-40 a22 22 0 0 1 22 -22z"/></g>
<text class="t-fr" x="338" y="264" font-size="21" text-anchor="middle" style="fill:#fff">Quels sont vos horaires ?</text></g>'''
dice = f'''<g class="fl3"><g transform="rotate(14 420 110)" filter="url(#sh)"><rect class="c-card" x="380" y="70" width="80" height="80" rx="18"/>
<circle class="c-g1" cx="402" cy="92" r="6.5"/><circle class="c-g2" cx="420" cy="110" r="6.5"/><circle class="c-g3" cx="438" cy="128" r="6.5"/>
<circle class="c-g1" cx="438" cy="92" r="6.5"/><circle class="c-g3" cx="402" cy="128" r="6.5"/></g></g>'''
tmr = f'''<g class="fl1" filter="url(#shs)"><rect class="c-card" x="70" y="282" width="112" height="44" rx="22"/>
<circle cx="96" cy="304" r="11" fill="none" class="k-g2" stroke-width="3"/><path d="M96 297 v7 l5 3" fill="none" class="k-g2" stroke-width="2.5" stroke-linecap="round"/>
<text class="t-ink" x="146" y="311" font-size="18" font-weight="800" text-anchor="middle">3:30</text></g>'''
svg("topics", ex + you + dice + tmr + spark(320, 60, 10) + spark(484, 200, 7, "fl1") + dot(40, 230, 3, "c-g1") + dot(250, 360, 4, "c-g3"),
    label="Two speech bubbles, a die for a random topic and a 3:30 timer")

# ---------- writing ----------
paper = f'''<g transform="rotate(-3 240 210)"><g filter="url(#sh)"><rect class="c-card" x="90" y="56" width="290" height="300" rx="20"/></g>
<text class="t-mute" x="118" y="92" font-size="12" font-weight="700" letter-spacing="1.5">TÂCHE 1 · 120–150 MOTS</text>
{bar(118, 110, 220, 8, "c-mute")}{bar(118, 128, 190, 8, "c-mute")}
<text class="t-ink" x="118" y="176" font-size="17" font-family="var(--italic)" style="font-family:var(--italic)">L'année dernière,</text>
<text x="262" y="158" font-size="16.5" font-weight="700" class="c-good" style="font-family:var(--italic)">je suis allé</text>
<text class="t-ink" x="262" y="182" font-size="17" style="font-family:var(--italic);fill:var(--art-bad)">j'ai allé</text>
<rect x="260" y="176" width="70" height="2.5" class="c-bad"/>
{bar(118, 200, 230, 8, "c-mute")}{bar(118, 218, 200, 8, "c-mute")}{bar(118, 236, 222, 8, "c-mute")}
{bar(118, 262, 160, 8, "c-mute")}{bar(118, 280, 214, 8, "c-mute")}{bar(118, 298, 120, 8, "c-mute")}</g>'''
pen = f'''<g class="fl1"><g transform="rotate(38 400 220)" filter="url(#sh)">
<rect fill="url(#g)" x="384" y="96" width="32" height="190" rx="14"/>
<rect class="c-card" x="384" y="140" width="32" height="10" opacity=".55"/>
<path d="M384 284 L400 330 L416 284 Z" class="c-ink"/><path d="M392 300 L400 330 L408 300 Z" class="c-gold"/></g></g>'''
chips = f'''<g class="fl2" filter="url(#sh)"><rect fill="url(#g)" x="370" y="54" width="110" height="44" rx="22"/>
<text x="425" y="82" font-size="17" font-weight="800" fill="#fff" text-anchor="middle">NCLC 7</text></g>''' + chip(32, 300, 116, "126 mots", h=40, fs=16, anim="fl3")
svg("writing", paper + pen + chips + spark(60, 80, 10) + spark(470, 330, 8, "fl1") + dot(470, 150, 3, "c-g3") + dot(240, 380, 3, "c-g1"),
    label="A writing task with a corrected mistake, a pen and an NCLC 7 badge")

# ---------- guides ----------
gd = f'''<g transform="rotate(-9 230 200)" filter="url(#shs)"><rect class="c-soft2" x="118" y="70" width="210" height="270" rx="20"/></g>
<g class="fl1"><g filter="url(#sh)"><rect class="c-card" x="150" y="62" width="230" height="290" rx="22"/></g>
<rect fill="url(#gh)" x="150" y="62" width="230" height="74" rx="22"/><rect fill="url(#gh)" x="150" y="110" width="230" height="26"/>
<text x="174" y="96" font-size="12" font-weight="700" fill="#fff" fill-opacity=".85" letter-spacing="1.5">EXAM GUIDE</text>
<text x="174" y="122" font-size="20" font-weight="800" fill="#fff">NCLC 5 scores</text>
''' + "".join(f'<rect x="{176 + i*28}" y="{300 - h}" width="18" height="{h}" rx="5" ' + ('fill="url(#g)"' if i == 1 else 'class="c-soft"') + '/>' for i, h in enumerate([40, 64, 88, 110, 134, 150])) + \
f'''<rect x="168" y="301" width="190" height="2" class="c-line"/>{bar(174, 318, 150, 7, "c-mute")}{bar(174, 332, 100, 7, "c-mute")}
<g filter="url(#shs)"><rect class="c-card" x="176" y="198" width="74" height="26" rx="13"/></g><text class="t-ink" x="213" y="216" font-size="12.5" font-weight="800" text-anchor="middle">NCLC 5</text></g>'''
mag = f'''<g class="fl2"><g filter="url(#sh)"><circle class="c-card" cx="388" cy="252" r="48" fill-opacity=".55"/></g>
<circle cx="388" cy="252" r="48" fill="none" stroke="url(#g)" stroke-width="12"/>
<rect fill="url(#g)" x="424" y="284" width="18" height="64" rx="9" transform="rotate(-45 433 316)"/></g>'''
bm = f'''<g class="fl3" filter="url(#sh)"><path fill="url(#g)" d="M74 120 h46 v76 l-23 -16 l-23 16z"/></g>'''
svg("guides", gd + mag + bm + spark(460, 90, 10) + spark(70, 290, 8, "fl1") + dot(300, 36, 4, "c-g3") + dot(470, 180, 3, "c-g1"),
    label="An exam guide with a score chart and a magnifying glass")

# ---------- today ----------
sun = '<g class="fl3"><circle cx="388" cy="96" r="56" fill="url(#sun)" opacity=".95"/></g>'
week = ["L", "M", "M", "J", "V", "S", "D"]
cal = f'''<g class="fl1"><g filter="url(#sh)"><rect class="c-card" x="96" y="88" width="268" height="232" rx="26"/></g>
<rect fill="url(#gh)" x="96" y="88" width="268" height="62" rx="26"/><rect fill="url(#gh)" x="96" y="124" width="268" height="26"/>
<text x="124" y="128" font-size="15" font-weight="800" fill="#fff" letter-spacing="2">OCTOBRE</text>
<text x="336" y="130" font-size="24" font-weight="800" fill="#fff" text-anchor="end">2</text>
''' + "".join(
    f'<text class="t-mute" x="{132 + i*33}" y="182" font-size="12" font-weight="700" text-anchor="middle">{d}</text>' +
    (f'<circle cx="{132 + i*33}" cy="206" r="12" fill="url(#g)"/><path d="M{127+i*33} 206 l4 4 l7 -8" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>' if i < 5
     else f'<circle cx="{132 + i*33}" cy="206" r="12" class="c-soft"/>')
    for i, d in enumerate(week)) + \
f'''{bar(124, 244, 160, 9, "c-mute")}{bar(124, 264, 210, 9, "c-line")}{bar(124, 284, 120, 9, "c-line")}</g>'''
streak = f'''<g class="fl2" filter="url(#sh)"><rect class="c-card" x="300" y="268" width="168" height="54" rx="27"/>
{flame(332, 298, 1.05)}<text class="t-ink" x="356" y="301" font-size="17" font-weight="800">5 jours</text></g>'''
wod = f'''<g class="fl3" filter="url(#shs)"><rect class="c-card" x="24" y="230" width="104" height="44" rx="22"/>
<text class="t-fr" x="76" y="258" font-size="18" text-anchor="middle">le délai</text></g>'''
svg("today", sun + cal + streak + wod + spark(60, 90, 10) + spark(470, 210, 7, "fl1") + dot(250, 50, 4, "c-g3") + dot(230, 360, 3, "c-g1"),
    label="A calendar with five study days ticked, a sunrise and a five-day streak")

# ---------- contact ----------
env = f'''<g class="fl1"><g filter="url(#sh)"><rect class="c-card" x="96" y="140" width="250" height="170" rx="20"/></g>
<path d="M100 150 L221 236 L342 150" fill="none" class="k-line" stroke-width="3" stroke-linejoin="round"/>
<path d="M100 304 L190 226 M342 304 L252 226" fill="none" class="k-line" stroke-width="3"/>
<g filter="url(#shs)"><circle cx="221" cy="236" r="22" fill="url(#g)"/></g>
<path d="M221 247 c-9 -6 -13 -10 -13 -15 a6 6 0 0 1 13 -2 a6 6 0 0 1 13 2 c0 5 -4 9 -13 15z" fill="#fff"/></g>'''
plane = f'''<path d="M120 110 C 200 40, 300 120, 380 70" fill="none" class="k-g2" stroke-width="3" stroke-dasharray="2 9" stroke-linecap="round"/>
<g class="fl2"><g transform="translate(400 66) rotate(-18)" filter="url(#sh)">
<path d="M-34 -4 L36 -26 L10 30 L0 8 Z" fill="url(#g)"/><path d="M0 8 L36 -26 L-6 18 Z" class="c-card" opacity=".55"/></g></g>'''
bub = f'''<g class="fl3" filter="url(#sh)"><path class="c-card" d="M330 216 h120 a18 18 0 0 1 18 18 v4 a18 18 0 0 1 -18 18 h-26 l2 14 l-16 -14 h-80 a18 18 0 0 1 -18 -18 v-4 a18 18 0 0 1 18 -18z"/>
<text class="t-fr" x="390" y="243" font-size="21" text-anchor="middle">Merci !</text></g>'''
svg("contact", plane + env + bub + spark(70, 90, 10) + spark(470, 320, 8, "fl1") + dot(250, 360, 4, "c-g3") + dot(60, 250, 3, "c-g1"),
    label="An envelope with a heart and a paper airplane")

# ---------- 404 ----------
mp = f'''<g filter="url(#sh)">
<path class="c-card" d="M80 96 L190 70 L300 96 L420 70 L420 300 L300 326 L190 300 L80 326 Z"/></g>
<path class="c-soft" d="M190 70 L300 96 L300 326 L190 300 Z" opacity=".7"/>
<path d="M120 286 C 150 220, 220 270, 240 210 S 300 150, 330 190 S 360 230, 372 150" fill="none" class="k-g2" stroke-width="4" stroke-dasharray="3 10" stroke-linecap="round"/>
<circle cx="120" cy="286" r="8" fill="url(#g)"/>
{maple(150, 130, 44, 'fill="#e0554b"')}'''
qpin = f'''<g class="fl1"><g filter="url(#sh)"><path fill="url(#g)" d="M372 146 C 352 120, 340 106, 340 88 a32 32 0 0 1 64 0 c0 18 -12 32 -32 58z"/></g>
<text x="372" y="100" font-size="30" font-weight="800" fill="#fff" text-anchor="middle">?</text></g>'''
oups = chip(30, 190, 100, "Oups !", h=42, fs=19, anim="fl2", tcls="t-fr")
svg("404", mp + qpin + oups + spark(470, 230, 9) + spark(250, 40, 7, "fl1") + dot(470, 340, 3, "c-g3") + dot(50, 120, 4, "c-g1"),
    label="A map with a winding route that ends at a question mark")

# ---------- what's new ----------
gift = f'''<g class="fl1"><g filter="url(#sh)">
<rect fill="url(#g)" x="160" y="186" width="200" height="140" rx="18"/>
<g transform="rotate(-10 260 170)"><rect fill="url(#g)" x="146" y="148" width="228" height="44" rx="14"/></g></g>
<rect class="c-card" x="246" y="186" width="28" height="140" opacity=".9"/>
<g transform="rotate(-10 260 170)"><rect class="c-card" x="246" y="148" width="28" height="44" opacity=".9"/>
<path d="M260 148 C 230 110, 200 128, 224 146 Z M260 148 C 290 110, 320 128, 296 146 Z" class="c-card"/></g></g>'''
burst = "".join(spark(x, y, r, c) for x, y, r, c in [(150, 100, 13, "fl2"), (380, 92, 10, "fl3"), (262, 62, 9, "fl1"), (420, 170, 7, "fl2"), (110, 190, 7, "fl3")])
newc = f'''<g class="fl2" filter="url(#sh)"><rect class="c-card" x="330" y="262" width="142" height="46" rx="23"/>
<circle cx="356" cy="285" r="8" fill="url(#g)"/><text class="t-ink" x="414" y="291" font-size="17" font-weight="800" text-anchor="middle">Nouveau</text></g>'''
svg("whats-new", gift + burst + newc + dot(70, 280, 4, "c-g3") + dot(470, 60, 3, "c-g1"),
    label="A gift box with sparkles and a Nouveau label")

# ---------- certificate ----------
cert = f'''<g transform="rotate(-4 230 200)"><g filter="url(#sh)"><rect class="c-card" x="76" y="90" width="300" height="214" rx="12"/></g>
<rect x="88" y="102" width="276" height="190" rx="6" fill="none" stroke="url(#gold)" stroke-width="2.5"/>
<text x="226" y="140" font-size="11" font-weight="800" text-anchor="middle" letter-spacing="2.5" fill="#b2832a">CERTIFICAT</text>
<text class="t-fr" x="226" y="182" font-size="28" text-anchor="middle">Félicitations</text>
{bar(150, 206, 152, 7, "c-mute")}{bar(170, 222, 112, 7, "c-line")}
<rect x="118" y="262" width="80" height="2" class="c-mute"/><rect x="254" y="262" width="80" height="2" class="c-mute"/></g>'''
medal = f'''<g class="fl1"><path d="M376 250 l-18 84 l22 -12 l14 20 l12 -80z" fill="url(#g)"/><path d="M408 250 l18 84 l-22 -12 l-14 20 l-12 -80z" fill="url(#g)" opacity=".85"/>
<g filter="url(#sh)"><circle cx="392" cy="232" r="50" fill="url(#gold)"/></g>
<circle cx="392" cy="232" r="38" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="2" stroke-dasharray="3 5"/>
<text x="392" y="243" font-size="30" font-weight="800" text-anchor="middle" fill="#6b4a0f">B1</text></g>'''
cap = f'''<g class="fl2" filter="url(#sh)"><path class="c-ink" d="M110 70 L170 44 L230 70 L170 96 Z"/><path class="c-ink" d="M136 82 v22 c18 12 50 12 68 0 v-22 l-34 14z"/>
<path d="M224 72 v26" class="k-g2" stroke-width="3"/><circle cx="224" cy="102" r="5" class="c-gold"/></g>'''
svg("certificate", cert + medal + cap + spark(470, 100, 10) + spark(60, 330, 8, "fl1") + dot(300, 50, 4, "c-g3") + dot(470, 340, 3, "c-g1"),
    label="A certificate of completion with a gold B1 medal and a graduation cap")

# ---------- journey (landing) ----------
road = "M40 230 C 160 230, 180 120, 300 130 S 440 250, 560 230 S 700 100, 820 110 S 960 150, 1000 140"
stops = [(180, 168, "A1", "The basics"), (430, 196, "A2", "Everyday French"), (690, 150, "B1", "Independent")]
j = f'''<path d="{road}" fill="none" class="k-line" stroke-width="30" stroke-linecap="round"/>
<path d="{road}" fill="none" stroke="url(#gh)" stroke-width="5" stroke-linecap="round" stroke-dasharray="1 14"/>
''' + "".join(f'''<g class="fl{i+1}"><g filter="url(#sh)"><rect class="c-card" x="{x-70}" y="{y-112}" width="140" height="74" rx="18"/></g>
<text class="t-ink" x="{x}" y="{y-76}" font-size="24" font-weight="800" text-anchor="middle">{lv}</text>
<text class="t-mute" x="{x}" y="{y-54}" font-size="13" font-weight="600" text-anchor="middle">{sub}</text>
<path d="M{x-8} {y-38} L{x} {y-28} L{x+8} {y-38}Z" class="c-card"/></g>
<circle cx="{x}" cy="{y}" r="11" class="c-card" stroke="url(#g)" stroke-width="5"/>''' for i, (x, y, lv, sub) in enumerate(stops)) + \
f'''<g class="fl1"><g filter="url(#sh)"><rect fill="url(#g)" x="852" y="10" width="170" height="96" rx="22"/></g>
{maple(890, 58, 40, 'fill="#fff"')}<text x="962" y="54" font-size="22" font-weight="800" fill="#fff" text-anchor="middle">NCLC 5</text>
<text x="962" y="78" font-size="13" font-weight="600" fill="#fff" fill-opacity=".85" text-anchor="middle">TCF · TEF</text></g>
<circle cx="940" cy="132" r="13" fill="url(#g)"/><circle cx="940" cy="132" r="5" fill="#fff"/>
<circle cx="40" cy="230" r="13" class="c-card" stroke="url(#g)" stroke-width="5"/>
{chip(4, 262, 112, "Day 1", h=38, fs=15, anim="fl3")}'''
svg("journey", j + spark(560, 60, 10) + spark(300, 270, 8, "fl1") + dot(780, 250, 4, "c-g3") + dot(120, 100, 3, "c-g1"), vb="0 0 1030 300", bg=False,
    label="A road from day one through A1, A2 and B1 to NCLC 5")


# ---------- guide covers (480 x 220) ----------
def cover(name, body, label):
    back = '<rect class="c-soft" width="480" height="220"/><circle class="c-soft2" cx="430" cy="20" r="150"/><circle class="c-soft2" cx="40" cy="230" r="90" opacity=".7"/>'
    svg(name, back + body, vb="0 0 480 220", bg=False, label=label, cls="art cover")

hs = [40, 58, 78, 98, 118, 138, 156]
cover("cover-score", f'''<g filter="url(#sh)"><rect class="c-card" x="96" y="30" width="288" height="168" rx="20"/></g>
''' + "".join(f'<rect x="{124 + i*36}" y="{176 - h*0.85}" width="24" height="{h*0.85}" rx="6" ' + ('fill="url(#g)"' if i == 1 else 'class="c-soft"') + '/>'
               f'<text class="t-mute" x="{136 + i*36}" y="190" font-size="10" font-weight="700" text-anchor="middle">{i+4}</text>' for i, h in enumerate(hs)) +
      f'''<g class="fl1"><g filter="url(#shs)"><rect class="c-card" x="130" y="78" width="84" height="28" rx="14"/></g>
<text class="t-ink" x="172" y="97" font-size="13" font-weight="800" text-anchor="middle">NCLC 5</text></g>''' + spark(420, 170, 10) + spark(60, 60, 8, "fl1"),
      "A bar chart of NCLC levels with level 5 highlighted")

cover("cover-tcf-tef", f'''<g class="fl1" transform="rotate(-6 160 110)" filter="url(#sh)"><rect class="c-card" x="88" y="44" width="140" height="140" rx="24"/></g>
<text class="t-ink" x="158" y="122" font-size="34" font-weight="800" text-anchor="middle" transform="rotate(-6 160 110)">TCF</text>
<g class="fl2" transform="rotate(6 320 110)" filter="url(#sh)"><rect fill="url(#g)" x="252" y="44" width="140" height="140" rx="24"/></g>
<text x="322" y="122" font-size="34" font-weight="800" text-anchor="middle" fill="#fff" transform="rotate(6 320 110)">TEF</text>
<g filter="url(#sh)"><circle class="c-card" cx="240" cy="112" r="28"/></g><text x="240" y="120" font-size="20" font-weight="800" text-anchor="middle" fill="url(#g)">vs</text>''' + spark(430, 60, 9) + spark(50, 170, 8, "fl1"),
      "TCF and TEF side by side")

q = [("Quel est le prix ?", 34, 46, "c-card"), ("Comment s'inscrire ?", 150, 88, "g"), ("Y a-t-il un parking ?", 70, 132, "c-card")]
cover("cover-task2", "".join(
    f'''<g class="fl{i+1}" filter="url(#sh)"><rect {'fill="url(#gh)"' if c == "g" else 'class="c-card"'} x="{x}" y="{y}" width="{250}" height="42" rx="21"/></g>
<text class="t-fr" x="{x + 125}" y="{y + 28}" font-size="19" text-anchor="middle" {'style="fill:#fff"' if c == "g" else ''}>{t}</text>''' for i, (t, x, y, c) in enumerate(q)) +
      f'''<g class="fl2" filter="url(#sh)"><circle fill="url(#g)" cx="408" cy="64" r="34"/></g><text x="408" y="76" font-size="36" font-weight="800" fill="#fff" text-anchor="middle">?</text>''' + spark(430, 180, 9, "fl1"),
      "Three French questions in speech bubbles")

parts = ["Opening", "Argument 1", "Argument 2", "Counterpoint", "Conclusion"]
cover("cover-task3", f'''<g filter="url(#sh)"><rect class="c-card" x="60" y="22" width="260" height="178" rx="20"/></g>''' + "".join(
    f'<circle cx="92" cy="{52 + i*32}" r="11" ' + ('fill="url(#g)"' if i in (0, 4) else 'class="c-soft"') + f'/><text x="92" y="{56.5 + i*32}" font-size="12" font-weight="800" text-anchor="middle" ' + ('fill="#fff"' if i in (0, 4) else 'class="t-ink"') + f'>{i+1}</text>'
    f'<text class="t-ink" x="114" y="{57 + i*32}" font-size="14" font-weight="700">{t}</text>' + bar(230, 51 + i*32, 64 - i*6, 6, "c-line") for i, t in enumerate(parts)) +
      f'''<g class="fl1"><g filter="url(#sh)"><circle class="c-card" cx="390" cy="110" r="58"/></g>
<circle cx="390" cy="110" r="46" fill="none" class="k-line" stroke-width="9"/><circle cx="390" cy="110" r="46" fill="none" stroke="url(#g)" stroke-width="9" stroke-linecap="round" stroke-dasharray="289" stroke-dashoffset="70" transform="rotate(-90 390 110)"/>
<text class="t-ink" x="390" y="118" font-size="24" font-weight="800" text-anchor="middle">4:30</text></g>''' + spark(452, 196, 8, "fl2"),
      "The five parts of a Task 3 answer and a 4:30 timer")

months = ["J", "F", "M", "A", "M", "J", "J", "A"]
cover("cover-b1", f'''<g filter="url(#sh)"><rect class="c-card" x="56" y="40" width="300" height="146" rx="20"/></g>
<text class="t-mute" x="80" y="72" font-size="11" font-weight="800" letter-spacing="1.5">1–2 H A DAY</text>''' + "".join(
    f'<text class="t-mute" x="{90 + i*33}" y="170" font-size="11" font-weight="700" text-anchor="middle">{m}</text>' for i, m in enumerate(months)) +
      '<path d="M90 146 C 140 140, 160 120, 200 112 S 280 82, 321 70" fill="none" stroke="url(#gh)" stroke-width="5" stroke-linecap="round"/>' +
      "".join(f'<circle cx="{x}" cy="{y}" r="6" class="c-card" stroke="url(#g)" stroke-width="3.5"/>' for x, y in [(90, 146), (200, 112), (321, 70)]) +
      f'''<g class="fl1" filter="url(#sh)"><circle fill="url(#g)" cx="412" cy="96" r="40"/></g><text x="412" y="105" font-size="26" font-weight="800" fill="#fff" text-anchor="middle">B1</text>''' + spark(440, 180, 8, "fl2") + spark(40, 40, 8, "fl3"),
      "A progress line across the months to B1")
