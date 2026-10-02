/* Course visuals: one minimalist "cheat code" picture per lesson.

   NCLC_VISUALS.data[moduleId][lessonIndex] is a small spec (or null for no
   picture). NCLC_VISUALS.render(spec, hue) turns it into HTML that learn.html
   puts at the top of the lesson. Pictures are built from real text (not
   images), so they wrap on phones, follow dark mode and stay readable by
   screen readers. Wrap words in [[double brackets]] to highlight them, ~~tildes~~
   to strike them out.

   Types:
     eq     parts: [[main, sub, "h"?] | "+" | "=" | "→"], ex
     conj   cols: [{h, sub, rows: [[pronoun, stem, ending] | [pronoun, form]]}]
     vs     cols: [{h, sub, ex, tag, on}], mid ("vs" | "→")
     line   marks: [{h, sub, ex, now}], from, to
     pairs  items: [[french, meaning]]
     steps  items: [[main, sub]]
     groups groups: [{h, sub, items: []}]
     scale  left, right, items: [[main, sub]]
     ask    q, branches: [[if, then, example]]
     bars   items: [[label, value, sub]], unit
     grid   head: [], rows: [[]]
   Any spec can add a title and a note. */
(function () {
  function hl(s) {
    return String(s == null ? "" : s).replace(/\[\[(.+?)\]\]/g, "<b class='vh'>$1</b>").replace(/~~(.+?)~~/g, "<s>$1</s>");
  }
  function exs(list) {
    if (!list || !list.length) return "";
    return "<ul class='vex'>" + list.map(function (e) {
      return "<li><span class='vfr' lang='fr'>" + hl(e[0]) + "</span>" + (e[1] ? "<span class='ven'>" + hl(e[1]) + "</span>" : "") + "</li>";
    }).join("") + "</ul>";
  }
  function box(p) {
    if (typeof p === "string") return "<span class='vop' aria-hidden='true'>" + p + "</span>";
    return "<span class='vbx" + (p[2] === "h" ? " on" : "") + "'><b>" + hl(p[0]) + "</b>" + (p[1] ? "<small>" + hl(p[1]) + "</small>" : "") + "</span>";
  }
  var R = {
    eq: function (s) { return "<div class='veq'>" + s.parts.map(box).join("") + "</div>" + exs(s.ex); },
    conj: function (s) {
      return "<div class='vconj'>" + s.cols.map(function (c) {
        return "<div class='vcol'><div class='vch'><b lang='fr'>" + hl(c.h) + "</b>" + (c.sub ? "<small>" + hl(c.sub) + "</small>" : "") + "</div><ul>" +
          c.rows.map(function (r) {
            var form = r.length > 2 ? hl(r[1]) + (r[2] ? "<b class='vh'>" + r[2] + "</b>" : "") : hl(r[1]);
            return "<li><span class='vp'>" + r[0] + "</span><span class='vf' lang='fr'>" + form + "</span></li>";
          }).join("") + "</ul></div>";
      }).join("") + "</div>" + exs(s.ex);
    },
    vs: function (s) {
      return "<div class='vvs'>" + s.cols.map(function (c, i) {
        return (i && s.mid !== "·" ? "<span class='vmid' aria-hidden='true'>" + (s.mid || "vs") + "</span>" : "") +
          "<div class='vcard" + (c.on ? " on" : "") + "'>" + (c.tag ? "<span class='vtag'>" + hl(c.tag) + "</span>" : "") +
          "<b class='vct'>" + hl(c.h) + "</b>" + (c.sub ? "<p>" + hl(c.sub) + "</p>" : "") + exs(c.ex) + "</div>";
      }).join("") + "</div>";
    },
    line: function (s) {
      return "<div class='vline'>" + s.marks.map(function (m) {
        return "<div class='vmk" + (m.now ? " now" : "") + "'><i></i><b>" + hl(m.h) + "</b>" + (m.sub ? "<small>" + hl(m.sub) + "</small>" : "") +
          (m.ex ? "<span class='vfr' lang='fr'>" + hl(m.ex) + "</span>" : "") + "</div>";
      }).join("") + "</div>" + (s.from ? "<div class='vends'><span>" + s.from + "</span><span>" + s.to + "</span></div>" : "");
    },
    pairs: function (s) {
      return "<div class='vpairs'>" + s.items.map(function (p) {
        return "<div class='vpair'><b lang='fr'>" + hl(p[0]) + "</b><span>" + hl(p[1]) + "</span></div>";
      }).join("") + "</div>";
    },
    steps: function (s) {
      return "<ol class='vsteps'>" + s.items.map(function (p, i) {
        return "<li><span class='vn'>" + (i + 1) + "</span><b>" + hl(p[0]) + "</b>" + (p[1] ? "<small>" + hl(p[1]) + "</small>" : "") + "</li>";
      }).join("") + "</ol>" + exs(s.ex);
    },
    groups: function (s) {
      return "<div class='vgroups'>" + s.groups.map(function (g) {
        return "<div class='vgrp'><b class='vct'>" + hl(g.h) + "</b>" + (g.sub ? "<small>" + hl(g.sub) + "</small>" : "") +
          "<div class='vchips'>" + g.items.map(function (x) { return "<span lang='fr'>" + hl(x) + "</span>"; }).join("") + "</div></div>";
      }).join("") + "</div>";
    },
    scale: function (s) {
      return "<div class='vscale'><div class='vbar'><span>" + s.left + "</span><span>" + s.right + "</span></div><div class='vsc'>" +
        s.items.map(function (p) { return "<div><b lang='fr'>" + hl(p[0]) + "</b>" + (p[1] ? "<small>" + hl(p[1]) + "</small>" : "") + "</div>"; }).join("") + "</div></div>";
    },
    ask: function (s) {
      return "<div class='vask'><div class='vq'>" + hl(s.q) + "</div><div class='vbr'>" + s.branches.map(function (b) {
        return "<div class='vcard'><small>" + hl(b[0]) + "</small><b class='vct'>" + hl(b[1]) + "</b>" + (b[2] ? "<span class='vfr' lang='fr'>" + hl(b[2]) + "</span>" : "") + "</div>";
      }).join("") + "</div></div>";
    },
    bars: function (s) {
      var u = s.unit || "%";
      return "<div class='vbars'><div class='vstack'>" + s.items.map(function (it, i) {
        return "<span class='vs" + (i % 5) + "' style='flex:" + it[1] + "'>" + it[1] + u + "</span>";
      }).join("") + "</div><div class='vlegend'>" + s.items.map(function (it, i) {
        return "<div><i class='vs" + (i % 5) + "'></i><b>" + hl(it[0]) + "</b>" + (it[2] ? "<small>" + hl(it[2]) + "</small>" : "") + "</div>";
      }).join("") + "</div></div>";
    },
    grid: function (s) {
      return "<div class='vgrid'><table><thead><tr>" + s.head.map(function (h) { return "<th scope='col'>" + hl(h) + "</th>"; }).join("") + "</tr></thead><tbody>" +
        s.rows.map(function (r) {
          return "<tr>" + r.map(function (c, i) { return i ? "<td lang='fr'>" + hl(c) + "</td>" : "<th scope='row'>" + hl(c) + "</th>"; }).join("") + "</tr>";
        }).join("") + "</tbody></table></div>" + exs(s.ex);
    }
  };

  function render(spec, hue) {
    if (!spec || !R[spec.t]) return "";
    return "<figure class='vis hue h-" + (hue || "blue") + "'>" +
      "<figcaption class='vis-h'><span class='vis-k'>Cheat code</span><span class='vis-t'>" + hl(spec.title) + "</span></figcaption>" +
      "<div class='vis-b'>" + R[spec.t](spec) + "</div>" + (spec.note ? "<p class='vis-n'>" + hl(spec.note) + "</p>" : "") + "</figure>";
  }

  var D = {
    /* ------------------------------------------------------------ 0 · method */
    method: [
      { t: "bars", title: "Four kinds of practice, equal time", items: [["Input", 25, "listen and read for the message"], ["Output", 25, "speak and write to say something real"], ["Language study", 25, "grammar, words, sounds"], ["Fluency", 25, "easy material, at speed"]] },
      { t: "vs", title: "Rereading feels good. Testing works.", cols: [
        { h: "Reread", sub: "Feels easy · fades within a week", tag: "✗" },
        { h: "Test yourself", sub: "Feels harder · still there a week later", tag: "✓", on: 1 }] },
      { t: "line", title: "Space your reviews", marks: [
        { h: "Day 1", sub: "Do the module and pass the check" }, { h: "Day 2–3", sub: "Retake the check, redo the speaking task" },
        { h: "Day 7", sub: "Drill the practice set in Type it mode" }, { h: "Day 21", sub: "Reread the Mistakes, retake the check" }] },
      { t: "vs", title: "Mix topics once you know them", cols: [
        { h: "AAA · BBB · CCC", sub: "Blocked: fewer errors while practising" },
        { h: "ABC · CAB · BCA", sub: "Mixed: better results a week later", on: 1 }] },
      { t: "steps", title: "Understand first, then push yourself", items: [["Understand", "material where you know ~95% of the words"], ["Produce", "speak and write, mistakes and all"], ["Compare and fix", "check against the model, try again"]] },
      { t: "steps", title: "Shadowing in four moves", items: [["Listen", "one sentence"], ["Repeat at once", "no pause"], ["Copy the music", "rhythm, melody, linking"], ["Record and compare", "spot one difference"]] },
      { t: "grid", title: "How long to B1", head: ["Level", "1 h a day", "2 h a day"], rows: [["True beginner", "12–15 months", "6–8 months"], ["Around A2", "5–7 months", "3–4 months"], ["Around B1", "6–10 weeks", "4–6 weeks"]], note: "Little and often beats long, rare sessions." }
    ],
    /* ------------------------------------------------------------ 1 · sounds */
    sounds: [
      { t: "eq", title: "Equal beats, stress at the end of the group", parts: [["je"], ["vou"], ["drai"], ["z‿un"], ["ca"], ["fé", "stressed", "h"]], note: "Every syllable gets the same length. Only the last one of the group is a little stronger." },
      { t: "pairs", title: "Pure vowels: lips and tongue hold still", items: [["u · tu, rue", "say “ee”, then round your lips"], ["ou · tout, nous", "“oo”, very round, no glide"], ["é · été, parler", "short and tight, no “-ee” at the end"], ["è · mère, lait", "more open, like “bed”"]] },
      { t: "groups", title: "Three nasal vowels: the n / m is not said", groups: [
        { h: "an · en", sub: "[ɑ̃]", items: ["enfant", "temps", "chambre"] },
        { h: "on · om", sub: "[ɔ̃]", items: ["bon", "nom", "maison"] },
        { h: "in · ain · ein", sub: "[ɛ̃]", items: ["vin", "pain", "plein"] }] },
      { t: "pairs", title: "Consonants that trip English speakers", items: [["r", "back of the throat, a soft gargle"], ["h", "always silent: l'hôpital"], ["th", "just t: le thé"], ["ch", "English “sh”: chat"], ["gn", "“ny”: montagne"], ["s / ss", "poison [z] vs poisson [s]"]] },
      { t: "vs", title: "What you don't say at the end of a word", cols: [
        { h: "Usually silent", sub: "s, t, d, x, z, p and -ent on verbs", ex: [["Paris, petit, grand, ils parlent"]] },
        { h: "CaReFuL: said", sub: "c, r, f, l are usually pronounced", ex: [["sac, mer, neuf, sel"]], on: 1 }], note: "Except -er: parler, premier — the r is silent." },
      { t: "groups", title: "Three ways French links words", groups: [
        { h: "Liaison", sub: "a silent letter wakes up", items: ["les‿amis", "nous‿avons", "deux‿heures"] },
        { h: "Élision", sub: "a vowel drops", items: ["le ami → l'ami", "je ai → j'ai"] },
        { h: "Enchaînement", sub: "a sound slides over", items: ["il‿a", "une‿amie"] }] },
      { t: "pairs", title: "Canadian French: recognise it, aim for clear", items: [["petit → “p'tsi”", "t and d before i / u become ts / dz"], ["vite, route", "i, ou relax in closed syllables"], ["je suis → “chu”", "informal speech drops sounds"], ["la fin de semaine", "the weekend"], ["le dîner · le souper", "lunch · dinner"]], note: "Examiners score how clear you are, not your accent." }
    ],
    /* ------------------------------------------------------------ 2 · basics */
    basics: [
      { t: "vs", title: "Two ways to say “you”", cols: [
        { h: "tu", sub: "One person you know well: a friend, a child, family", ex: [["Tu as une minute ?"]] },
        { h: "vous", sub: "Polite, or more than one person: a stranger, a colleague, the examiner", ex: [["Vous avez une minute ?"]], on: 1 }], note: "In the exam, use vous unless the task makes it clear you're talking to a friend." },
      { t: "conj", title: "The two pillars", cols: [
        { h: "être", sub: "to be", rows: [["je", "suis"], ["tu", "es"], ["il / elle", "est"], ["nous", "sommes"], ["vous", "êtes"], ["ils / elles", "sont"]] },
        { h: "avoir", sub: "to have", rows: [["j'", "ai"], ["tu", "as"], ["il / elle", "a"], ["nous", "avons"], ["vous", "avez"], ["ils / elles", "ont"]] }] },
      { t: "pairs", title: "English “be” → French [[avoir]]", items: [["avoir faim", "to be hungry"], ["avoir soif", "to be thirsty"], ["avoir chaud / froid", "to feel hot / cold"], ["avoir 30 ans", "to be 30"], ["avoir sommeil", "to be sleepy"], ["avoir besoin de", "to need"]], note: "✗ Je suis chaud. → ✓ J'ai chaud." },
      { t: "groups", title: "Endings that give the gender away", groups: [
        { h: "Usually masculine", items: ["le fromage (-age)", "le logement (-ment)", "le bureau (-eau)", "le tourisme (-isme)"] },
        { h: "Usually feminine", items: ["la situation (-tion)", "la santé (-té)", "la voiture (-ure)"] }], note: "Always learn a noun with its article: la table, le bureau." },
      { t: "grid", title: "The little word before every noun", head: ["", "masc.", "fem.", "+ vowel", "plural"], rows: [["the · in general", "le", "la", "l'", "les"], ["a · one", "un", "une", "un / une", "des"], ["some · an amount", "du", "de la", "de l'", "des"]], note: "After a negative they become de: Il n'y a [[pas de]] place." },
      { t: "vs", title: "C'est or il / elle est?", cols: [
        { h: "C'est + un / une / le…", sub: "a determiner and a noun, a name, moi", ex: [["C'est [[un]] bon médecin."], ["C'est Marie."]] },
        { h: "Il / elle est + adjective", sub: "or a bare job or nationality", ex: [["Il est médecin."], ["Elle est canadienne."]], on: 1 }] }
    ],
    /* ------------------------------------------------------------ 3 · present */
    present: [
      { t: "conj", title: "Drop the ending, add these", cols: [
        { h: "parler", sub: "-er · 90% of verbs", rows: [["je", "parl", "e"], ["tu", "parl", "es"], ["il", "parl", "e"], ["nous", "parl", "ons"], ["vous", "parl", "ez"], ["ils", "parl", "ent"]] },
        { h: "finir", sub: "-ir", rows: [["je", "fin", "is"], ["tu", "fin", "is"], ["il", "fin", "it"], ["nous", "fin", "issons"], ["vous", "fin", "issez"], ["ils", "fin", "issent"]] },
        { h: "attendre", sub: "-re", rows: [["j'", "attend", "s"], ["tu", "attend", "s"], ["il", "attend", ""], ["nous", "attend", "ons"], ["vous", "attend", "ez"], ["ils", "attend", "ent"]] }] },
      { t: "pairs", title: "Spelling changes that keep the sound", items: [["nous man[[ge]]ons", "-ger: add e before -ons"], ["nous commen[[ç]]ons", "-cer: ç before -ons"], ["j'ach[[è]]te", "acheter: e → è when the ending is silent"], ["je préf[[è]]re", "préférer: é → è, same rule"]] },
      { t: "vs", title: "One French present, three English meanings", cols: [
        { h: "Habit", ex: [["Je travaille de 9 h à 17 h.", "I work 9 to 5."]] },
        { h: "Right now", ex: [["Je travaille.", "I'm working."]] },
        { h: "Since… still true", ex: [["Je travaille ici [[depuis]] trois ans.", "I've been working here for three years."]], on: 1 }], mid: "·" },
      { t: "vs", title: "Prepositions don't match English", cols: [
        { h: "No preposition in French", ex: [["chercher un emploi", "look [[for]]"], ["attendre le bus", "wait [[for]]"], ["écouter la radio", "listen [[to]]"]] },
        { h: "A preposition in French", ex: [["téléphoner [[à]] quelqu'un", "call someone"], ["répondre [[à]] une question", "answer a question"]], on: 1 }] },
      { t: "scale", title: "How often?", left: "never", right: "always", items: [["ne… jamais", "never"], ["parfois", "sometimes"], ["souvent", "often"], ["d'habitude", "usually"], ["toujours", "always"]], note: "Short frequency words go after the verb: Je prends [[souvent]] le métro." }
    ],
    /* ------------------------------------------------------------ 4 · questions */
    questions: [
      { t: "eq", title: "Negation is a sandwich around the verb", parts: [["ne"], ["verb", "conjugated", "h"], ["pas"]], ex: [["Je [[ne]] travaille [[pas]] le dimanche.", "not"], ["Il [[ne]] prend [[jamais]] le métro.", "never"], ["Nous [[n']]habitons [[plus]] à Laval.", "no longer"], ["Je [[ne]] comprends [[rien]].", "nothing"]] },
      { t: "scale", title: "One question, three registers", left: "everyday", right: "formal", items: [["Vous avez un rendez-vous ?", "voice goes up"], ["Est-ce que vous avez un rendez-vous ?", "safest choice"], ["Avez-vous un rendez-vous ?", "inversion"]] },
      { t: "pairs", title: "Question words", items: [["où", "where"], ["quand", "when"], ["comment", "how"], ["combien (de)", "how much / many"], ["pourquoi", "why"], ["qui", "who"], ["qu'est-ce que", "what"], ["quel / quelle", "which, what"]] },
      { t: "vs", mid: "→", title: "Soften it", cols: [
        { h: "Abrupt", ex: [["C'est combien ?"]] },
        { h: "Natural and polite", ex: [["[[Pourriez-vous me dire]] combien coûte l'abonnement ?"], ["[[Excusez-moi, je voudrais savoir si]] l'appartement est libre."]], on: 1 }] }
    ],
    /* ------------------------------------------------------------ 5 · describe */
    describe: [
      { t: "pairs", title: "Adjectives match the noun", items: [["petit → petit[[e]]", "feminine: add -e"], ["calme → calme", "already ends in -e: no change"], ["heur[[eux]] → heur[[euse]]", "-eux → -euse"], ["act[[if]] → act[[ive]]", "-if → -ive"], ["grand[[s]] · grande[[s]]", "plural: add -s"]] },
      { t: "vs", title: "Where the adjective goes", cols: [
        { h: "Most go after", ex: [["une ville [[tranquille]]"], ["un sac [[rouge]]"]] },
        { h: "BAGS go before", sub: "Beauty · Age · Goodness · Size", ex: [["un [[petit]] studio"], ["un [[nouvel]] emploi"]], on: 1 }] },
      { t: "grid", title: "Possessives agree with the thing owned", head: ["", "masc.", "fem.", "plural"], rows: [["je", "mon", "ma", "mes"], ["tu", "ton", "ta", "tes"], ["il / elle", "son", "sa", "ses"], ["nous", "notre", "notre", "nos"], ["vous", "votre", "votre", "vos"], ["ils / elles", "leur", "leur", "leurs"]], note: "[[sa]] voiture = his car or her car (voiture is feminine). Before a vowel: [[mon]] amie." },
      { t: "pairs", title: "This, that, these", items: [["[[ce]] quartier", "masculine"], ["[[cet]] hôpital", "masculine before a vowel"], ["[[cette]] semaine", "feminine"], ["[[ces]] documents", "plural"]], note: "Add -ci (here) or -là (there) to contrast: cet appartement-ci, cet appartement-là." },
      { t: "eq", title: "Build a B1 description", parts: [["un", "BAGS before"], ["petit", "", "h"], "+", ["appartement"], "+", ["lumineux", "after", "h"], "+", ["au troisième étage", "where"]], ex: [["Il est [[plutôt]] petit mais [[très]] lumineux.", "add degree words: très, assez, plutôt, un peu, trop"]] }
    ],
    /* ------------------------------------------------------------ 6 · numbers */
    numbers: [
      { t: "pairs", title: "0 to 69", items: [["17 · dix-sept", "10 + 7"], ["21 · vingt [[et]] un", "et for 21, 31… 61"], ["22 · vingt-deux", "hyphen for the rest"], ["30 · trente", ""], ["40 · quarante", ""], ["50 · cinquante", ""], ["60 · soixante", ""]] },
      { t: "pairs", title: "70 to 99: French arithmetic", items: [["70 · soixante-dix", "60 + 10"], ["71 · soixante et onze", "60 + 11"], ["80 · quatre-vingts", "4 × 20"], ["81 · quatre-vingt-un", "4 × 20 + 1"], ["90 · quatre-vingt-dix", "4 × 20 + 10"], ["99 · quatre-vingt-dix-neuf", "4 × 20 + 19"]] },
      { t: "pairs", title: "Money, the Canadian way", items: [["12,99 $", "douze dollars quatre-vingt-dix-neuf"], ["1 250 $", "a space for thousands"], ["taxes en sus", "plus taxes"], ["15 %", "quinze pour cent"]], note: "Comma for decimals, $ after the amount." },
      { t: "eq", title: "Saying a date", parts: [["le"], ["mardi", "no capital"], ["3", "plain number", "h"], ["juin", "no capital"], ["2026"]], note: "Only the 1st is different: le [[premier]] juillet." },
      { t: "grid", title: "Telling time", head: ["Time", "Official", "Everyday"], rows: [["8:15", "huit heures quinze", "huit heures et quart"], ["12:30", "douze heures trente", "midi et demi"], ["15:45", "quinze heures quarante-cinq", "quatre heures moins le quart"]] }
    ],
    /* ------------------------------------------------------------ 7 · irregulars */
    irregulars: [
      { t: "conj", title: "Four verbs you'll use every day", cols: [
        { h: "aller", sub: "go", rows: [["je", "vais"], ["tu", "vas"], ["il", "va"], ["nous", "allons"], ["vous", "allez"], ["ils", "vont"]] },
        { h: "faire", sub: "do, make", rows: [["je", "fais"], ["tu", "fais"], ["il", "fait"], ["nous", "faisons"], ["vous", "faites"], ["ils", "font"]] },
        { h: "venir", sub: "come", rows: [["je", "viens"], ["tu", "viens"], ["il", "vient"], ["nous", "venons"], ["vous", "venez"], ["ils", "viennent"]] },
        { h: "prendre", sub: "take", rows: [["je", "prends"], ["tu", "prends"], ["il", "prend"], ["nous", "prenons"], ["vous", "prenez"], ["ils", "prennent"]] }] },
      { t: "eq", title: "Can, want, must + infinitive", parts: [["pouvoir · vouloir · devoir", "conjugated", "h"], "+", ["infinitive", "no “to”"]], ex: [["Je [[peux]] venir.", "I can come."], ["Je [[veux]] partir.", "I want to leave."], ["Je [[dois]] travailler.", "I have to work."]] },
      { t: "vs", title: "Two verbs for “to know”", cols: [
        { h: "savoir", sub: "facts, information, how to do something", ex: [["Je sais où il habite."], ["Je sais conduire."]] },
        { h: "connaître", sub: "people, places — being familiar with", ex: [["Je connais bien Montréal."], ["Tu connais Marc ?"]], on: 1 }] },
      { t: "eq", title: "The near future", parts: [["aller", "present", "h"], "+", ["infinitive"], "=", ["going to…"]], ex: [["Je [[vais]] passer l'examen en mars.", "I'm going to take the exam in March."]], note: "Negation goes around aller: Je [[ne]] vais [[pas]] déménager." },
      { t: "line", title: "Just did · now · about to do", from: "past", to: "future", marks: [
        { h: "venir de + infinitive", sub: "has just happened", ex: "Je [[viens d']]arriver." }, { h: "now", now: 1 },
        { h: "aller + infinitive", sub: "is going to happen", ex: "Je [[vais]] partir." }] },
      { t: "pairs", title: "To or in a place", items: [["[[à]] Montréal", "cities"], ["[[en]] France · [[en]] Colombie-Britannique", "feminine countries and provinces"], ["[[au]] Canada · [[au]] Québec", "masculine"], ["[[aux]] États-Unis", "plural"]] }
    ],
    /* ------------------------------------------------------------ 8 · reflexive */
    reflexive: [
      { t: "conj", title: "The pronoun matches the subject", cols: [
        { h: "se lever", sub: "to get up", rows: [["je", "[[me]] lève"], ["tu", "[[te]] lèves"], ["il / elle", "[[se]] lève"], ["nous", "[[nous]] levons"], ["vous", "[[vous]] levez"], ["ils / elles", "[[se]] lèvent"]] }], note: "Before a vowel: je [[m']]habille, il [[s']]appelle." },
      { t: "groups", title: "Three kinds of reflexive verb", groups: [
        { h: "To yourself", items: ["se laver", "se raser", "se brosser les dents"] },
        { h: "Each other", items: ["Ils se parlent.", "Nous nous voyons le samedi."] },
        { h: "New meaning", items: ["s'appeler · be called", "s'entendre · get along", "s'occuper de · look after"] }] },
      { t: "grid", title: "Giving instructions", head: ["", "tu", "nous (let's)", "vous"], rows: [["parler", "parle", "parlons", "parlez"], ["finir", "finis", "finissons", "finissez"], ["prendre", "prends", "prenons", "prenez"], ["être", "sois", "soyons", "soyez"]], note: "-er verbs drop the s in the tu form: Parle ! Va ! — but Vas-y !" }
    ],
    /* ------------------------------------------------------------ 9 · passé composé */
    "passe-compose": [
      { t: "eq", title: "The passé composé", parts: [["avoir / être", "in the present", "h"], "+", ["past participle"]], ex: [["J'[[ai]] travaillé.", "-er → -é"], ["J'[[ai]] fini.", "-ir → -i"], ["J'[[ai]] attendu.", "-re → -u"]] },
      { t: "groups", title: "Irregular participles, grouped by sound", groups: [
        { h: "-u", items: ["eu", "bu", "lu", "pu", "su", "vu", "voulu", "venu", "reçu"] },
        { h: "-is", items: ["pris", "appris", "compris", "mis"] },
        { h: "-it", items: ["dit", "écrit", "fait", "conduit"] },
        { h: "-ert", items: ["ouvert", "offert", "découvert"] },
        { h: "one of a kind", items: ["été", "né", "mort"] }] },
      { t: "groups", title: "Verbs that use être", groups: [
        { h: "Coming and going", items: ["aller / venir", "arriver / partir", "entrer / sortir", "monter / descendre", "rentrer · retourner · revenir"] },
        { h: "Change of state", items: ["naître / mourir", "devenir", "rester", "tomber"] },
        { h: "Every reflexive verb", items: ["je me suis levé", "elle s'est inscrite"] }], note: "With être the participle agrees: il est arrivé, elle est arrivé[[e]], ils sont arrivé[[s]]." },
      { t: "pairs", title: "Where the little words go", items: [["Je [[n']]ai [[pas]] compris.", "negation wraps the auxiliary"], ["J'ai [[bien]] dormi.", "short adverbs go in the middle"], ["Je [[l']]ai vu.", "pronouns go before the auxiliary"], ["Je n'ai vu [[personne]].", "exception: personne goes last"]] },
      { t: "steps", title: "Tell it in order", items: [["D'abord", "first"], ["Ensuite · puis", "then"], ["Après", "afterwards"], ["Finalement", "in the end"]], ex: [["[[D'abord]], j'ai cherché un logement. [[Ensuite]], j'ai ouvert un compte bancaire."]] }
    ],
    /* ------------------------------------------------------------ 10 · imparfait */
    imparfait: [
      { t: "eq", title: "The most regular tense in French", parts: [["nous parl~~ons~~", "nous form, drop -ons"], "→", ["parl-", "stem"], "+", ["-ais · -ais · -ait · -ions · -iez · -aient", "endings", "h"]], note: "Only one irregular stem: être → [[ét-]] (j'étais)." },
      { t: "vs", title: "Think of a film", cols: [
        { h: "Imparfait = the scene", sub: "description, habits, what was going on", ex: [["Il [[faisait]] froid et j'[[étais]] fatigué…"]] },
        { h: "Passé composé = the plot", sub: "the events that move the story on", ex: [["…quand le téléphone [[a sonné]]."]], on: 1 }] },
      { t: "ask", title: "Which past?", q: "What does this verb do in the story?", branches: [["A completed event", "passé composé", "Le téléphone a sonné."], ["Background or description", "imparfait", "Il pleuvait."], ["A habit", "imparfait", "Je prenais le métro tous les jours."]] },
      { t: "vs", mid: "→", title: "Then and now", cols: [
        { h: "Avant · imparfait", ex: [["J'[[habitais]] dans une grande ville."]] },
        { h: "Maintenant · présent", ex: [["Je [[vis]] dans un village."]], on: 1 }] },
      { t: "pairs", title: "Four time expressions", items: [["[[depuis]] un an", "for / since — still going on · present"], ["[[ça fait]] un an [[que]]…", "it's been a year that… · present"], ["[[il y a]] six mois", "ago · passé composé"], ["[[pendant]] deux ans", "for (a finished period) · passé composé"]] }
    ],
    /* ------------------------------------------------------------ 11 · pronouns */
    pronouns: [
      { t: "vs", mid: "→", title: "Direct object → le, la, les", cols: [
        { h: "Noun", ex: [["Je prends [[le bus]]."], ["Je lis [[la lettre]]."]] },
        { h: "Pronoun, before the verb", ex: [["Je [[le]] prends."], ["Je [[la]] lis."]], on: 1 }], note: "Also: me, te, nous, vous — and les for them." },
      { t: "vs", mid: "→", title: "à + person → lui, leur", cols: [
        { h: "Noun", ex: [["Je parle [[à mon patron]]."], ["Je téléphone [[à mes parents]]."]] },
        { h: "Pronoun", ex: [["Je [[lui]] parle."], ["Je [[leur]] téléphone."]], on: 1 }] },
      { t: "vs", mid: "→", title: "Y = there, or à + thing", cols: [
        { h: "Noun", ex: [["Je vais [[à la banque]]."], ["Je pense [[à mon entretien]]."]] },
        { h: "y", ex: [["J'[[y]] vais."], ["J'[[y]] pense."]], on: 1 }] },
      { t: "vs", mid: "→", title: "En = some, of it, from there", cols: [
        { h: "Noun", ex: [["J'ai [[deux enfants]]."], ["J'ai besoin [[d'aide]]."]] },
        { h: "en", ex: [["J'[[en]] ai [[deux]]."], ["J'[[en]] ai besoin."]], on: 1 }], note: "With a number, keep the number at the end." },
      { t: "pairs", title: "Where the pronoun goes", items: [["Je [[le]] vois.", "simple tense: before the verb"], ["Je [[l']]ai vu.", "passé composé: before the auxiliary"], ["Je vais [[le]] voir.", "verb + infinitive: before the infinitive"], ["Envoyez-[[le]]-[[moi]] !", "positive command: after, with hyphens"]] }
    ],
    /* ------------------------------------------------------------ 12 · compare-future */
    "compare-future": [
      { t: "vs", mid: "·", title: "More, as, less", cols: [
        { h: "plus … que", tag: "+", ex: [["Le métro est [[plus]] rapide [[que]] l'autobus."]] },
        { h: "aussi … que", tag: "=", ex: [["Il parle [[aussi]] vite [[que]] moi."]] },
        { h: "moins … que", tag: "−", ex: [["C'est [[moins]] cher [[qu']]avant."]] }], note: "With nouns: plus de, autant de, moins de — J'ai [[autant de]] travail que toi." },
      { t: "vs", title: "Better: meilleur or mieux?", cols: [
        { h: "bon → meilleur", sub: "describes a noun", ex: [["Ce restaurant est [[meilleur]]."]] },
        { h: "bien → mieux", sub: "describes a verb or a situation", ex: [["Je dors [[mieux]] ici."]], on: 1 }], note: "Never “plus bon”. The best: la ville [[la plus]] chère du pays." },
      { t: "eq", title: "The futur simple", parts: [["infinitive", "-re verbs drop the e"], "+", ["-ai · -as · -a · -ons · -ez · -ont", "the endings of avoir", "h"]], ex: [["je parler[[ai]] · je finir[[ai]] · je prendr[[ai]]"]], note: "Irregular stems: être → [[ser-]], avoir → [[aur-]], aller → [[ir-]], faire → [[fer-]], pouvoir → [[pourr-]]." },
      { t: "vs", title: "Which future?", cols: [
        { h: "Futur proche · je vais partir", sub: "plans already decided, everyday speech" },
        { h: "Futur simple · je partirai", sub: "predictions, promises, formal announcements", on: 1 }], note: "After quand / dès que about the future, use the futur: Je vous écrirai [[quand]] je [[recevrai]] les documents." }
    ],
    /* ------------------------------------------------------------ 13 · conditional */
    conditional: [
      { t: "eq", title: "The conditional", parts: [["future stem", "aimer- · ser- · pourr-"], "+", ["-ais · -ais · -ait · -ions · -iez · -aient", "imparfait endings", "h"]], ex: [["j'aimer[[ais]] · je ser[[ais]] · je pourr[[ais]]"]] },
      { t: "vs", mid: "→", title: "From blunt to polite", cols: [
        { h: "Present", ex: [["Je veux un rendez-vous."], ["Vous pouvez m'aider ?"]] },
        { h: "Conditional", ex: [["Je [[voudrais]] un rendez-vous."], ["[[Pourriez]]-vous m'aider ?"]], on: 1 }] },
      { t: "pairs", title: "Giving advice", items: [["Tu [[devrais]] + infinitive", "you should"], ["Tu [[pourrais]] / On [[pourrait]]", "you could / we could"], ["Il [[faudrait]] + infinitive", "one should"], ["À ta place, je [[ferais]]…", "if I were you, I'd…"]] },
      { t: "vs", mid: "·", title: "The three si patterns", cols: [
        { h: "Likely", sub: "si + présent → présent / futur", ex: [["Si tu [[as]] le temps, viens me voir."]] },
        { h: "Imagined", sub: "si + imparfait → conditionnel", ex: [["Si j'[[avais]] le temps, je [[ferais]] du bénévolat."]], on: 1 },
        { h: "Regret", sub: "si + plus-que-parfait → conditionnel passé", ex: [["Si j'[[avais su]], je [[serais venu]]."]] }], note: "Never put the conditional or the futur right after si." },
      { t: "vs", title: "Two more uses to recognise", cols: [
        { h: "Future in the past", ex: [["Il m'a dit qu'il [[viendrait]].", "He said he would come."]] },
        { h: "Unconfirmed news", ex: [["L'accident [[aurait fait]] deux blessés.", "Reportedly injured two."]] }] }
    ],
    /* ------------------------------------------------------------ 14 · relatives */
    relatives: [
      { t: "vs", title: "Qui or que?", cols: [
        { h: "qui = subject", sub: "followed by a verb", ex: [["le collègue [[qui]] m'a aidé"]] },
        { h: "que = object", sub: "followed by a subject", ex: [["l'appartement [[que]] j'ai visité"]], on: 1 }], note: "Person or thing doesn't matter — only the role." },
      { t: "vs", title: "Où: where, and also “when”", cols: [
        { h: "Place", ex: [["la ville [[où]] j'habite"]] },
        { h: "Time", ex: [["le jour [[où]] je suis arrivé"]], on: 1 }] },
      { t: "vs", mid: "→", title: "Dont replaces de + noun", cols: [
        { h: "de + noun", ex: [["J'ai besoin [[de ce document]]."]] },
        { h: "dont", ex: [["C'est le document [[dont]] j'ai besoin."]], on: 1 }], note: "With de-verbs: parler de, avoir besoin de, se souvenir de, être fier de." },
      { t: "pairs", title: "“What” in the middle of a sentence", items: [["[[Ce qui]] me plaît, c'est l'ambiance.", "ce qui · subject"], ["Je ne comprends pas [[ce que]] vous dites.", "ce que · object"], ["C'est [[ce dont]] j'ai besoin.", "ce dont · with de"]] },
      { t: "pairs", title: "After a preposition", items: [["la personne avec [[qui]] je travaille", "people: qui"], ["le bureau dans [[lequel]] je travaille", "things: lequel"], ["la raison pour [[laquelle]]…", "laquelle · lesquels · lesquelles"], ["le projet [[auquel]] je pense", "à + lequel = auquel"]] }
    ],
    /* ------------------------------------------------------------ 15 · subjunctive */
    subjunctive: [
      { t: "eq", title: "Forming the subjunctive", parts: [["ils parl~~ent~~", "ils form, drop -ent"], "→", ["parl-", "stem"], "+", ["-e · -es · -e · -ions · -iez · -ent", "endings", "h"]], ex: [["que je parl[[e]] · que nous parl[[ions]]"]] },
      { t: "grid", title: "Irregular forms to know by heart", head: ["", "que je", "que nous"], rows: [["être", "sois", "soyons"], ["avoir", "aie", "ayons"], ["aller", "aille", "allions"], ["faire", "fasse", "fassions"], ["pouvoir", "puisse", "puissions"]] },
      { t: "groups", title: "Four families of triggers", groups: [
        { h: "Necessity", items: ["il faut que", "il est important que"] },
        { h: "Wish", items: ["vouloir que", "préférer que"] },
        { h: "Emotion", items: ["être content que", "avoir peur que"] },
        { h: "Doubt", items: ["douter que", "ne pas penser que"] }], note: "Also after pour que, avant que, bien que, à condition que — but après que takes the indicative." },
      { t: "vs", title: "Same subject? Use an infinitive", cols: [
        { h: "Two subjects → subjunctive", ex: [["Je veux que [[tu réussisses]]."]] },
        { h: "Same subject → infinitive", ex: [["Je veux [[réussir]]."]], on: 1 }] },
      { t: "vs", title: "The opinion trap", cols: [
        { h: "Je pense que… → indicative", ex: [["Je pense que c'[[est]] une bonne solution."]] },
        { h: "Je ne pense pas que… → subjunctive", ex: [["Je ne pense pas que ce [[soit]] une bonne solution."]], on: 1 }] }
    ],
    /* ------------------------------------------------------------ 16 · argue */
    argue: [
      { t: "groups", title: "The connector toolkit", groups: [
        { h: "Cause", items: ["parce que", "car", "puisque"] },
        { h: "Consequence", items: ["donc", "c'est pourquoi", "par conséquent"] },
        { h: "Contrast", items: ["mais", "cependant", "en revanche"] },
        { h: "Concession", items: ["même si", "bien que", "certes…"] },
        { h: "Addition", items: ["de plus", "en outre"] },
        { h: "Conclusion", items: ["bref", "en conclusion"] }], note: "Use at least four families in every opinion text." },
      { t: "steps", title: "The four-part argument", items: [["Position", "On se demande souvent si… Personnellement, je pense que…"], ["Reasons + examples", "D'abord… Par exemple… Ensuite…"], ["Concede, then counter", "Il est vrai que… Cependant…"], ["Conclude", "En conclusion… Il faudrait donc…"]] },
      { t: "scale", title: "How sure are you?", left: "cautious", right: "certain", items: [["Il me semble que…"], ["J'ai l'impression que…"], ["À mon avis…"], ["Je suis convaincu(e) que…"]] },
      { t: "vs", title: "Match the register", cols: [
        { h: "Informal · a friend", ex: [["Salut Marc,"], ["Tu peux m'envoyer… ?"], ["À bientôt !"]] },
        { h: "Formal · a company", ex: [["Madame, Monsieur,"], ["Pourriez-vous m'envoyer… ?"], ["Cordialement,"]], on: 1 }] },
      { t: "groups", title: "Never go silent", groups: [
        { h: "Thinking", items: ["Alors…", "Bon…", "Eh bien…"] },
        { h: "Clarifying", items: ["En fait…", "C'est-à-dire que…"] },
        { h: "Missing a word", items: ["C'est un truc qui sert à…", "Comment dire…"] }] }
    ],
    /* ------------------------------------------------------------ 17 · reported */
    reported: [
      { t: "line", title: "The past before the past", from: "earlier", to: "now", marks: [
        { h: "plus-que-parfait", sub: "happened first", ex: "le train [[était]] déjà [[parti]]" },
        { h: "passé composé", sub: "then", ex: "quand je [[suis arrivé]]" }, { h: "now", now: 1 }], note: "Form: avoir / être in the imparfait + past participle." },
      { t: "pairs", title: "After “il a dit que…”, tenses step back", items: [["présent → imparfait", "« Je suis malade. » → il [[était]] malade"], ["passé composé → plus-que-parfait", "« J'ai fini. » → il [[avait fini]]"], ["futur → conditionnel", "« Je viendrai. » → il [[viendrait]]"], ["aller + inf. → allait + inf.", "« Je vais appeler. » → il [[allait]] appeler"]] },
      { t: "pairs", title: "Reporting questions and orders", items: [["« Vous êtes libre ? »", "→ Elle m'a demandé [[si]] j'étais libre."], ["« Où habitez-vous ? »", "→ Il m'a demandé [[où]] j'habitais."], ["« Qu'est-ce que tu veux ? »", "→ Il m'a demandé [[ce que]] je voulais."], ["« Terminez le rapport. »", "→ Il m'a demandé [[de]] terminer le rapport."]] }
    ],
    /* ------------------------------------------------------------ 18 · exam */
    exam: [
      { t: "steps", title: "Listening, step by step", items: [["Read the options first", "predict: a price? a reason?"], ["Who, where, why?", "in the first seconds"], ["Write numbers down", "don't hold them in memory"], ["Watch the traps", "repeated words, negations, the final decision"]] },
      { t: "steps", title: "Reading, step by step", items: [["~90 s per question", "they get harder — don't burn time early"], ["Question first", "then scan the text"], ["What kind of document?", "notice, ad, email, article"], ["Look for paraphrase", "wrong answers copy the exact words"]] },
      { t: "vs", mid: "·", title: "TCF Canada writing: 60 minutes, 3 tasks", cols: [
        { h: "Task 1", sub: "A short message: invite, inform, ask", tag: "60–120 words" },
        { h: "Task 2", sub: "An article or story: narrate and describe", tag: "120–150 words" },
        { h: "Task 3", sub: "Compare two documents, give your view", tag: "120–180 words" }] },
      { t: "vs", mid: "·", title: "TCF Canada speaking: about 12 minutes", cols: [
        { h: "Task 1 · interview", sub: "Talk about yourself", tag: "~2 min" },
        { h: "Task 2 · interaction", sub: "Ask questions to get information", tag: "2 min prep + 3:30" },
        { h: "Task 3 · opinion", sub: "Give and defend a point of view", tag: "4:30, no prep" }] },
      { t: "line", title: "The last four weeks", marks: [
        { h: "4 weeks out", sub: "Every mock once. List your weakest section and top 5 errors." },
        { h: "3 weeks out", sub: "Weakest section daily. A timed task every other day." },
        { h: "2 weeks out", sub: "Recorded speaking simulations, single-play listening." },
        { h: "Final week", sub: "Light review, one last mock, sleep well." }] }
    ],
    /* ------------------------------------------------------------ 19 · tcf-t2 */
    "tcf-t2": [
      { t: "bars", unit: " s", title: "The shape of Task 2", items: [["Prepare", 120, "tu or vous? keywords for 10 questions"], ["Opening", 15, "greet, context, ask for time"], ["Questions", 180, "ask, react, link, ask again"], ["Closing", 15, "summarise, thank, goodbye"]] },
      { t: "vs", title: "Tu or vous? Decide first", cols: [
        { h: "vous", sub: "an employee, a landlord, a stranger, any professional", ex: [["Avez-vous une minute ?"], ["Pourriez-vous me dire… ?"]], on: 1 },
        { h: "tu", sub: "a friend, family, a colleague you know", ex: [["As-tu une minute ?"], ["Pourrais-tu me dire… ?"]] }], note: "Then never switch." },
      { t: "steps", title: "Open in three lines", items: [["Greet", "Bonjour madame ! J'espère que vous allez bien."], ["Give the context", "J'ai vu votre annonce pour…"], ["Ask for time", "Avez-vous une minute ?"]] },
      { t: "pairs", title: "The 10-question backbone", items: [["1 · Est-ce que… est possible ?", "availability"], ["2 · Quels sont les critères… ?", "requirements"], ["3 · Quel est le délai… ?", "timing"], ["4 · Combien coûte… ?", "price"], ["5 · Comment peut-on… ?", "procedure"], ["6 · Y a-t-il des restrictions ?", "limits"], ["7 · Faut-il… ?", "obligations"], ["8 · Que se passerait-il si… ?", "B1 boost"], ["9 · Que conseilleriez-vous… ?", "advice"], ["10 · Ma dernière question…", "wrap-up"]] },
      { t: "pairs", title: "Vary the form, not just the content", items: [["Est-ce que… ?", "yes / no"], ["Faut-il… ?", "obligation"], ["Y a-t-il… ?", "is there"], ["Quel est le délai… ?", "how long"], ["Comment peut-on… ?", "how"], ["Que se passerait-il si… ?", "what if"]] },
      { t: "eq", title: "B1 boost: one subjunctive question", parts: [["Est-il nécessaire", "a trigger"], "+", ["que"], "+", ["je sois", "subjunctive", "h"], ["présent en personne ?"]], ex: [["Faut-il que j'[[aie]] un justificatif ?"], ["Vaut-il mieux que je [[vienne]] le matin ?"]] },
      { t: "steps", title: "Link your questions", items: [["Ma première question est la suivante :"], ["Ensuite, je voudrais savoir…"], ["Pourriez-vous me dire… ?"], ["Ma dernière question porte sur…"]] },
      { t: "groups", title: "React before the next question", groups: [
        { h: "Acknowledge", items: ["Je vois, c'est noté."] },
        { h: "Surprise", items: ["Ah, je ne savais pas."] },
        { h: "Check", items: ["Si je comprends bien…"] },
        { h: "Evaluate", items: ["C'est un avantage non négligeable."] }] },
      { t: "steps", title: "Close in four moves", items: [["Summarise", "J'ai bien compris toutes les informations."], ["Thank", "Merci beaucoup pour votre temps."], ["Next step", "Je vais y réfléchir."], ["Goodbye", "Bonne journée !"]] },
      null,
      null
    ],
    /* ------------------------------------------------------------ 20 · tcf-t3 */
    "tcf-t3": [
      { t: "bars", unit: " s", title: "Five parts, about 4 minutes", items: [["Opening", 40], ["Argument 1", 70], ["Bridge + argument 2", 60], ["Counterpoint", 45], ["Conclusion", 30]] },
      { t: "steps", title: "The opening, word for word", items: [["Le sujet… porte sur [[le thème]],", "name the topic"], ["…la question de savoir [[si…]]", "restate the question"], ["C'est un sujet qui concerne tout le monde.", "say why it matters"], ["J'ai un avis nuancé.", "announce your view"]] },
      { t: "steps", title: "Argument 1 and the reset phrases", items: [["La première raison, c'est que…", "your strongest reason"], ["Je m'explique :", "expand"], ["Par exemple,", "a concrete case"], ["C'est le cas de…", "a real person or group"]] },
      { t: "steps", title: "Bridge to the second argument", items: [["Ce premier point m'amène au second :", "link"], ["Il faut considérer que…", "explain"], ["Pour ajouter à cette raison, je dirais que…", "add a detail"]] },
      { t: "vs", mid: "→", title: "Show the other side, then answer it", cols: [
        { h: "Concede", ex: [["D'un autre côté, certaines personnes pensent que…"]] },
        { h: "Push back", ex: [["En revanche, il ne fait aucun doute que…"]], on: 1 }] },
      { t: "steps", title: "Conclude in two sentences", items: [["Pour conclure, si je devais résumer ma pensée…", "your view in one sentence"], ["En fin de compte, il vaut mieux qu'un équilibre soit maintenu entre A et B.", "a balanced last word"]] },
      null, null, null
    ]
  };

  window.NCLC_VISUALS = { render: render, data: D };
})();
