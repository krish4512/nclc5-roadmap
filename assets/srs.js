/* Daily review: a small spaced-repetition scheduler (Leitner boxes).
   Needs assets/course-index.js. Cards come from the modules you've reached:
     w — a word or phrase (French → English)
     s — a sentence from a speaking drill (French → English)
     m — a common mistake (spot the error → the correct version)
     x — an answer you got wrong in the course ("nclc5-missed", saved by NCLC.miss)
   Progress lives in localStorage "nclc5-srs":
     { cards: { id: { b: box, due: "YYYY-MM-DD", n: reviews, lapses } }, log: { day: count }, perDay } */
(function () {
  var KEY = "nclc5-srs";
  var DAYS = [0, 1, 3, 7, 14, 30, 60, 120];   /* interval for each box, in days */
  var C = window.COURSE_INDEX || { modules: [], vocab: [], mistakes: [], lines: [] };

  function pad(n) { return ("0" + n).slice(-2); }
  function day(d) { d = d || new Date(); return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }
  function addDays(n) { var d = new Date(); d.setDate(d.getDate() + n); return day(d); }
  function read(k, f) { try { return JSON.parse(localStorage.getItem(k) || "null") || f; } catch (e) { return f; } }
  function hash(s) { var h = 5381; for (var i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return (h >>> 0).toString(36); }

  function state() { var s = read(KEY, {}); s.cards = s.cards || {}; s.log = s.log || {}; s.perDay = s.perDay || 10; return s; }
  function save(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {} }

  var NUM = {}; C.modules.forEach(function (m) { NUM[m.id] = m.num; });
  var TITLE = {}; C.modules.forEach(function (m) { TITLE[m.id] = m.title; });

  /* how far into the course you are: the furthest of modules done, the
     module you're on, and your placement result (at least Module 2) */
  function frontier() {
    var f = 2;
    var prog = read("nclc5-course", {});
    Object.keys(prog).forEach(function (id) { if (prog[id] && (prog[id].done || prog[id].best) && NUM[id] != null) f = Math.max(f, NUM[id]); });
    var r = read("nclc5-resume", null);
    if (r && r.next && r.next.num != null) f = Math.max(f, r.next.num);
    var p = read("nclc5-placement", null);
    if (p && p.startNum != null) f = Math.max(f, p.startNum);
    return f;
  }

  function deck() {
    var f = frontier(), cards = [];
    C.vocab.forEach(function (v) { if (NUM[v[2]] <= f) cards.push({ id: "w" + hash(v[0] + v[1]), t: "w", fr: v[0], en: v[1], mod: v[2] }); });
    C.lines.forEach(function (l) { if (NUM[l[2]] <= f) cards.push({ id: "s" + hash(l[0]), t: "s", fr: l[0], en: l[1], mod: l[2] }); });
    C.mistakes.forEach(function (x) { if (NUM[x[3]] <= f) cards.push({ id: "m" + hash(x[0] + x[1]), t: "m", wrong: x[0], fr: x[1], why: x[2], en: x[4], mod: x[3] }); });
    /* course order, so new cards follow the order you learned them */
    cards.sort(function (a, b) { return NUM[a.mod] - NUM[b.mod]; });
    /* your own mistakes come first, oldest first */
    var missed = read("nclc5-missed", {});
    var mine = Object.keys(missed).map(function (id) { var x = missed[id]; return { id: id, t: "x", q: x.q, fr: x.a, why: x.why, mod: x.mod, l: x.l, at: x.at }; });
    mine.sort(function (a, b) { return a.at - b.at; });
    return mine.concat(cards);
  }

  function newToday(s) { return (s.log[day()] && s.log[day()].fresh) || 0; }

  /* today's queue: everything due, then new cards up to the daily limit */
  function queue() {
    var s = state(), today = day(), due = [], fresh = [];
    var room = Math.max(0, s.perDay - newToday(s));
    deck().forEach(function (c) {
      var st = s.cards[c.id];
      if (st) { if (st.due <= today) due.push(c); }
      else if (fresh.length < room) fresh.push(c);
    });
    /* interleave card types a little so a session isn't all one kind */
    due.sort(function (a, b) { return (s.cards[a.id].due < s.cards[b.id].due ? -1 : 1); });
    return { due: due, fresh: fresh, all: due.concat(fresh) };
  }

  /* rating: 0 = again, 1 = good, 2 = easy. Returns the new interval in days. */
  function rate(card, r) {
    var s = state(), st = s.cards[card.id], isNew = !st;
    st = st || { b: 0, n: 0, lapses: 0 };
    if (r === 0) { st.b = 1; st.lapses++; }
    else st.b = Math.min(DAYS.length - 1, st.b + (r === 2 ? 2 : 1));
    var gap = r === 0 ? 0 : DAYS[st.b];
    st.due = addDays(gap);
    st.n++;
    s.cards[card.id] = st;
    var lg = s.log[day()] || { n: 0, fresh: 0 };
    lg.n++; if (isNew) lg.fresh++;
    s.log[day()] = lg;
    save(s);
    return gap;
  }
  /* what each button would do, for labels like "3 days" */
  function preview(card) {
    var st = state().cards[card.id] || { b: 0 };
    return [0, DAYS[Math.min(DAYS.length - 1, st.b + 1)], DAYS[Math.min(DAYS.length - 1, st.b + 2)]];
  }
  function stats() {
    var s = state(), ids = Object.keys(s.cards), today = day();
    var learned = ids.filter(function (id) { return s.cards[id].b >= 3; }).length;
    var total = Object.keys(s.log).reduce(function (n, d) { return n + (s.log[d].n || 0); }, 0);
    return { seen: ids.length, learned: learned, reviewsToday: (s.log[today] && s.log[today].n) || 0, totalReviews: total, deckSize: deck().length, perDay: s.perDay };
  }
  function setPerDay(n) { var s = state(); s.perDay = n; save(s); }

  window.NCLC_SRS = { queue: queue, rate: rate, preview: preview, stats: stats, setPerDay: setPerDay, title: function (id) { return TITLE[id] || ""; }, num: function (id) { return NUM[id]; }, day: day };
})();
