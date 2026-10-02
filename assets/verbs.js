/* French verb conjugator with English for every form.

   Rules for the regular families (and their spelling changes) plus full data
   for the irregular verbs. window.NCLC_VERBS.conjugate("parler") returns
   { inf, en, aux, pp, group, note, tenses: { present: [[fr, en] × 6], … } }.

   Tenses: present, passe (passé composé), imparfait, futur, conditionnel,
   subjonctif, imperatif. Only standard (traditional) spellings are produced. */
(function () {
  "use strict";

  /* ------------------------------------------------------------------ *
   * Verb list: "infinitive|family|English|options"
   *   family: er cer ger eer (e→è) eer2 (é→è) dbl (l/t doubled) yer
   *           ir (finir) re (vendre) tir (partir) vrir indre uire aitre
   *           venir prendre mettre cevoir crire battre cueillir irr
   *   English: base form; {self} = myself/yourself… ; first word is the verb
   *   options: st (stative: imparfait in English is the simple past),
   *            pp=…, fut=…, x=past/pp of the English verb if irregular
   * ------------------------------------------------------------------ */
  var LIST = [
    /* irregular core */
    "être|irr|be|st", "avoir|irr|have|st", "aller|irr|go", "faire|irr|do / make", "pouvoir|irr|be able to / can", "vouloir|irr|want|st",
    "devoir|irr|have to / must", "savoir|irr|know|st", "voir|irr|see", "revoir|irr|see again", "prévoir|irr|plan / foresee",
    "croire|irr|believe|st", "dire|irr|say / tell", "interdire|irr|forbid", "lire|irr|read", "relire|irr|reread", "élire|irr|elect",
    "boire|irr|drink", "vivre|irr|live", "survivre|irr|survive", "suivre|irr|follow", "poursuivre|irr|pursue",
    "courir|irr|run", "parcourir|irr|travel through", "mourir|irr|die", "naître|irr|be born", "rire|irr|laugh", "sourire|irr|smile",
    "plaire|irr|please|st", "falloir|irr|be necessary", "pleuvoir|irr|rain", "valoir|irr|be worth|st", "fuir|irr|flee",
    "conclure|irr|conclude", "résoudre|irr|solve", "convaincre|irr|convince", "se taire|irr|be quiet",
    /* -er regular */
    "parler|er|speak", "aimer|er|like / love|st", "adorer|er|love|st", "détester|er|hate|st", "préférer|eer2|prefer|st",
    "habiter|er|live", "travailler|er|work", "étudier|er|study", "chercher|er|look for", "trouver|er|find", "donner|er|give",
    "demander|er|ask", "penser|er|think", "regarder|er|watch / look at", "écouter|er|listen", "jouer|er|play", "rester|er|stay",
    "arriver|er|arrive", "entrer|er|enter / go in", "rentrer|er|go home / come back", "tomber|er|fall", "monter|er|go up / get on",
    "retourner|er|go back", "passer|er|spend (time) / pass", "montrer|er|show", "porter|er|carry / wear", "apporter|er|bring",
    "acheter|eer|buy", "lever|eer|lift / raise", "mener|eer|lead", "amener|eer|bring (someone)", "emmener|eer|take (someone)",
    "peser|eer|weigh|st", "geler|eer|freeze", "appeler|dbl|call", "rappeler|dbl|call back / remind", "jeter|dbl|throw (away)",
    "épeler|dbl|spell", "renouveler|dbl|renew",
    "commencer|cer|begin", "annoncer|cer|announce", "avancer|cer|move forward", "placer|cer|place", "remplacer|cer|replace",
    "lancer|cer|launch / throw", "prononcer|cer|pronounce", "menacer|cer|threaten", "effacer|cer|erase", "renoncer|cer|give up",
    "manger|ger|eat", "voyager|ger|travel", "changer|ger|change", "partager|ger|share", "nager|ger|swim", "bouger|ger|move",
    "corriger|ger|correct", "diriger|ger|manage / direct", "encourager|ger|encourage", "exiger|ger|demand", "obliger|ger|force",
    "ranger|ger|tidy up", "arranger|ger|arrange", "déménager|ger|move (house)", "échanger|ger|exchange", "protéger|eer2ger|protect",
    "espérer|eer2|hope", "répéter|eer2|repeat", "compléter|eer2|complete", "considérer|eer2|consider", "suggérer|eer2|suggest",
    "posséder|eer2|own|st", "célébrer|eer2|celebrate", "inquiéter|eer2|worry (someone)", "gérer|eer2|manage", "libérer|eer2|free",
    "payer|yer|pay", "essayer|yer|try", "envoyer|yer|send", "nettoyer|yer|clean", "employer|yer|employ / use", "appuyer|yer|press",
    "tutoyer|yer|say \"tu\" to", "vouvoyer|yer|say \"vous\" to", "renvoyer|yer|send back / fire",
    "accepter|er|accept", "accompagner|er|go with", "aider|er|help", "ajouter|er|add", "améliorer|er|improve", "annuler|er|cancel",
    "apprécier|er|appreciate", "assister|er|attend", "attraper|er|catch", "augmenter|er|increase", "baisser|er|lower / drop",
    "cacher|er|hide", "chanter|er|sing", "chauffer|er|heat", "coûter|er|cost|st", "compter|er|count", "conseiller|er|advise",
    "continuer|er|continue", "créer|er|create", "cuisiner|er|cook", "danser|er|dance", "décider|er|decide", "déjeuner|er|have lunch",
    "demeurer|er|live / remain", "dépenser|er|spend (money)", "désirer|er|wish for|st", "dessiner|er|draw", "deviner|er|guess",
    "dîner|er|have dinner", "discuter|er|discuss / chat", "durer|er|last", "économiser|er|save (money)", "embaucher|er|hire",
    "emprunter|er|borrow", "enseigner|er|teach", "éviter|er|avoid", "expliquer|er|explain", "exprimer|er|express",
    "fermer|er|close", "fêter|er|celebrate", "fumer|er|smoke", "gagner|er|earn / win", "garder|er|keep", "goûter|er|taste",
    "imaginer|er|imagine", "informer|er|inform", "intéresser|er|interest|st", "inviter|er|invite", "laisser|er|leave (something) / let",
    "laver|er|wash", "louer|er|rent", "manquer|er|miss", "marcher|er|walk", "mériter|er|deserve|st", "organiser|er|organize",
    "oublier|er|forget", "pardonner|er|forgive", "participer|er|take part", "pleurer|er|cry", "poser|er|put / ask (a question)",
    "pousser|er|push / grow", "prêter|er|lend", "profiter|er|enjoy / take advantage", "proposer|er|suggest / offer",
    "quitter|er|leave (a place)", "raconter|er|tell (a story)", "recommander|er|recommend", "refuser|er|refuse",
    "remarquer|er|notice", "remercier|er|thank", "rencontrer|er|meet", "réparer|er|repair", "réserver|er|book",
    "respecter|er|respect", "ressembler|er|look like|st", "retrouver|er|find again / meet up", "réussir|ir|succeed / pass",
    "rêver|er|dream", "sauter|er|jump", "sembler|er|seem|st", "signer|er|sign", "signifier|er|mean|st", "skier|er|ski",
    "sonner|er|ring", "souhaiter|er|wish", "supporter|er|stand (bear)|st", "téléphoner|er|phone", "terminer|er|finish",
    "tourner|er|turn", "tousser|er|cough", "traverser|er|cross", "tromper|er|deceive", "utiliser|er|use", "visiter|er|visit (a place)",
    "voler|er|fly / steal", "voter|er|vote", "exister|er|exist|st", "dépendre|re|depend|st",
    /* -ir like finir */
    "finir|ir|finish", "choisir|ir|choose", "remplir|ir|fill (in)", "grandir|ir|grow up", "réfléchir|ir|think (carefully)",
    "agir|ir|act", "obéir|ir|obey", "établir|ir|establish", "investir|ir|invest", "bâtir|ir|build", "nourrir|ir|feed",
    "guérir|ir|heal / recover", "saisir|ir|seize / grasp", "maigrir|ir|lose weight", "grossir|ir|gain weight", "rougir|ir|blush",
    "vieillir|ir|grow old", "applaudir|ir|applaud", "accomplir|ir|accomplish", "avertir|ir|warn", "définir|ir|define",
    "garantir|ir|guarantee", "fournir|ir|provide", "punir|ir|punish", "ralentir|ir|slow down", "unir|ir|unite", "réunir|ir|gather",
    "atterrir|ir|land",
    /* -re like vendre */
    "vendre|re|sell", "attendre|re|wait (for)", "entendre|re|hear", "répondre|re|answer", "perdre|re|lose", "rendre|re|give back",
    "descendre|re|go down / get off", "défendre|re|defend / forbid", "étendre|re|spread / extend", "mordre|re|bite",
    "prétendre|re|claim", "confondre|re|mix up", "correspondre|re|correspond", "tondre|re|mow", "fondre|re|melt",
    "rompre|re|break (up)", "interrompre|re|interrupt",
    /* partir type */
    "partir|tir|leave", "repartir|tir|leave again", "sortir|tir|go out", "dormir|tir|sleep", "sentir|tir|feel / smell",
    "ressentir|tir|feel (an emotion)", "servir|tir|serve", "mentir|tir|lie (tell a lie)",
    /* ouvrir type */
    "ouvrir|vrir|open|pp=ouvert", "couvrir|vrir|cover|pp=couvert", "découvrir|vrir|discover|pp=découvert",
    "offrir|vrir|offer / give (a gift)|pp=offert", "souffrir|vrir|suffer|pp=souffert",
    /* other families */
    "peindre|indre|paint", "craindre|indre|fear|st", "éteindre|indre|turn off", "atteindre|indre|reach", "joindre|indre|reach / attach",
    "rejoindre|indre|join", "plaindre|indre|pity",
    "conduire|uire|drive", "construire|uire|build", "produire|uire|produce", "traduire|uire|translate", "réduire|uire|reduce",
    "détruire|uire|destroy", "introduire|uire|introduce", "cuire|uire|cook",
    "connaître|aitre|know (a person / place)|st|pp=connu", "reconnaître|aitre|recognize|pp=reconnu",
    "paraître|aitre|seem|st|pp=paru", "apparaître|aitre|appear|pp=apparu", "disparaître|aitre|disappear|pp=disparu",
    "venir|venir|come", "devenir|venir|become", "revenir|venir|come back", "intervenir|venir|intervene", "prévenir|venir|warn",
    "tenir|venir|hold", "obtenir|venir|get / obtain", "retenir|venir|hold back / remember", "appartenir|venir|belong|st",
    "contenir|venir|contain|st", "maintenir|venir|maintain", "soutenir|venir|support", "entretenir|venir|maintain / look after",
    "prendre|prendre|take", "apprendre|prendre|learn", "comprendre|prendre|understand|st", "surprendre|prendre|surprise",
    "reprendre|prendre|take back / resume", "entreprendre|prendre|undertake",
    "mettre|mettre|put", "permettre|mettre|allow", "promettre|mettre|promise", "admettre|mettre|admit", "remettre|mettre|put back / hand in",
    "transmettre|mettre|pass on", "soumettre|mettre|submit",
    "recevoir|cevoir|receive", "apercevoir|cevoir|catch sight of", "décevoir|cevoir|disappoint",
    "écrire|crire|write", "décrire|crire|describe", "inscrire|crire|register (someone)",
    "battre|battre|beat", "combattre|battre|fight", "débattre|battre|debate",
    "cueillir|cueillir|pick", "accueillir|cueillir|welcome",
    /* pronominal */
    "s'appeler|dbl|be called|st", "se lever|eer|get up", "se promener|eer|go for a walk", "se laver|er|wash {self}",
    "se réveiller|er|wake up", "se coucher|er|go to bed", "s'habiller|er|get dressed", "se dépêcher|er|hurry",
    "se reposer|er|rest", "s'amuser|er|have fun", "s'occuper|er|take care (of)", "se marier|er|get married",
    "se tromper|er|make a mistake", "se préparer|er|get ready", "se trouver|er|be located|st", "s'intéresser|er|be interested|st",
    "se brosser|er|brush (teeth, hair)", "se maquiller|er|put on makeup", "se raser|er|shave", "s'inquiéter|eer2|worry",
    "s'ennuyer|yer|be bored", "s'inscrire|crire|sign up", "se souvenir|venir|remember|st", "se sentir|tir|feel", "se plaindre|indre|complain",
    "se détendre|re|relax", "se rendre|re|go (to a place)", "s'endormir|tir|fall asleep", "se perdre|re|get lost"
  ];

  var AUX_ETRE = { aller: 1, venir: 1, devenir: 1, revenir: 1, intervenir: 1, arriver: 1, partir: 1, repartir: 1, sortir: 1,
    entrer: 1, rentrer: 1, rester: 1, tomber: 1, monter: 1, descendre: 1, retourner: 1, naître: 1, mourir: 1, apparaître: 1 };
  var NOTES = {
    sortir: "With a direct object it takes avoir: j'ai sorti la poubelle (I took out the garbage).",
    monter: "With a direct object it takes avoir: j'ai monté les valises (I carried the suitcases up).",
    descendre: "With a direct object it takes avoir: j'ai descendu l'escalier (I went down the stairs).",
    rentrer: "With a direct object it takes avoir: j'ai rentré la voiture (I brought the car in).",
    retourner: "With a direct object it takes avoir: j'ai retourné le formulaire (I sent the form back).",
    passer: "Takes être when it means \"to pass by / go through\": je suis passé(e) par Montréal.",
    payer: "-ayer verbs may also keep the y: je paye, je payerai. Both are correct.",
    essayer: "-ayer verbs may also keep the y: j'essaye, j'essayerai. Both are correct.",
    falloir: "Only used with il: il faut (it is necessary / you have to).",
    pleuvoir: "Only used with il: il pleut (it is raining).",
    devoir: "The past participle dû keeps its accent only in the masculine singular: due, dus, dues."
  };

  /* full data for the irregular verbs: present, future stem, subjunctive
     (if not regular from ils/nous), past participle, imperative */
  var IRR = {
    "être": { pr: "suis es est sommes êtes sont", imp: "ét", fut: "ser", subj: "sois sois soit soyons soyez soient", pp: "été", impv: "sois soyons soyez" },
    "avoir": { pr: "ai as a avons avez ont", fut: "aur", subj: "aie aies ait ayons ayez aient", pp: "eu", impv: "aie ayons ayez" },
    "aller": { pr: "vais vas va allons allez vont", fut: "ir", subj: "aille ailles aille allions alliez aillent", pp: "allé", impv: "va allons allez" },
    "faire": { pr: "fais fais fait faisons faites font", fut: "fer", subj: "fasse fasses fasse fassions fassiez fassent", pp: "fait", impv: "fais faisons faites" },
    "pouvoir": { pr: "peux peux peut pouvons pouvez peuvent", fut: "pourr", subj: "puisse puisses puisse puissions puissiez puissent", pp: "pu", impv: "" },
    "vouloir": { pr: "veux veux veut voulons voulez veulent", fut: "voudr", subj: "veuille veuilles veuille voulions vouliez veuillent", pp: "voulu", impv: "veuille veuillons veuillez" },
    "devoir": { pr: "dois dois doit devons devez doivent", fut: "devr", pp: "dû", impv: "" },
    "savoir": { pr: "sais sais sait savons savez savent", fut: "saur", subj: "sache saches sache sachions sachiez sachent", pp: "su", impv: "sache sachons sachez" },
    "voir": { pr: "vois vois voit voyons voyez voient", fut: "verr", pp: "vu" },
    "revoir": { pr: "revois revois revoit revoyons revoyez revoient", fut: "reverr", pp: "revu" },
    "prévoir": { pr: "prévois prévois prévoit prévoyons prévoyez prévoient", fut: "prévoir", pp: "prévu" },
    "croire": { pr: "crois crois croit croyons croyez croient", fut: "croir", pp: "cru" },
    "dire": { pr: "dis dis dit disons dites disent", fut: "dir", pp: "dit" },
    "interdire": { pr: "interdis interdis interdit interdisons interdisez interdisent", fut: "interdir", pp: "interdit" },
    "lire": { pr: "lis lis lit lisons lisez lisent", fut: "lir", pp: "lu" },
    "relire": { pr: "relis relis relit relisons relisez relisent", fut: "relir", pp: "relu" },
    "élire": { pr: "élis élis élit élisons élisez élisent", fut: "élir", pp: "élu" },
    "boire": { pr: "bois bois boit buvons buvez boivent", fut: "boir", pp: "bu" },
    "vivre": { pr: "vis vis vit vivons vivez vivent", fut: "vivr", pp: "vécu" },
    "survivre": { pr: "survis survis survit survivons survivez survivent", fut: "survivr", pp: "survécu" },
    "suivre": { pr: "suis suis suit suivons suivez suivent", fut: "suivr", pp: "suivi" },
    "poursuivre": { pr: "poursuis poursuis poursuit poursuivons poursuivez poursuivent", fut: "poursuivr", pp: "poursuivi" },
    "courir": { pr: "cours cours court courons courez courent", fut: "courr", pp: "couru" },
    "parcourir": { pr: "parcours parcours parcourt parcourons parcourez parcourent", fut: "parcourr", pp: "parcouru" },
    "mourir": { pr: "meurs meurs meurt mourons mourez meurent", fut: "mourr", pp: "mort" },
    "naître": { pr: "nais nais naît naissons naissez naissent", fut: "naîtr", pp: "né", impv: "" },
    "rire": { pr: "ris ris rit rions riez rient", fut: "rir", pp: "ri" },
    "sourire": { pr: "souris souris sourit sourions souriez sourient", fut: "sourir", pp: "souri" },
    "plaire": { pr: "plais plais plaît plaisons plaisez plaisent", fut: "plair", pp: "plu" },
    "falloir": { only3: 1, pr: "- - faut - - -", imp: "fall", fut: "faudr", subj: "- - faille - - -", pp: "fallu", impv: "" },
    "pleuvoir": { only3: 1, pr: "- - pleut - - -", imp: "pleuv", fut: "pleuvr", subj: "- - pleuve - - -", pp: "plu", impv: "" },
    "valoir": { pr: "vaux vaux vaut valons valez valent", fut: "vaudr", subj: "vaille vailles vaille valions valiez vaillent", pp: "valu" },
    "fuir": { pr: "fuis fuis fuit fuyons fuyez fuient", fut: "fuir", pp: "fui" },
    "conclure": { pr: "conclus conclus conclut concluons concluez concluent", fut: "conclur", pp: "conclu" },
    "résoudre": { pr: "résous résous résout résolvons résolvez résolvent", fut: "résoudr", pp: "résolu" },
    "convaincre": { pr: "convaincs convaincs convainc convainquons convainquez convainquent", fut: "convaincr", pp: "convaincu" },
    "taire": { pr: "tais tais tait taisons taisez taisent", fut: "tair", pp: "tu" }
  };

  /* ------------------------------ helpers ----------------------------- */
  function vowelStart(w) { return /^[aeiouyâàäéèêëîïôöûùüœh]/i.test(w); }
  function lastReplace(s, a, b) { var i = s.lastIndexOf(a); return i < 0 ? s : s.slice(0, i) + b + s.slice(i + a.length); }

  function parse(line) {
    var p = line.split("|"), inf = p[0], opts = {};
    (p.slice(3).join("|") || "").split("|").forEach(function (o) {
      if (!o) return;
      var kv = o.split("="); opts[kv[0]] = kv.length > 1 ? kv[1] : true;
    });
    var pron = /^(se |s')/.test(inf), base = inf.replace(/^(se |s')/, "");
    return { inf: inf, base: base, pron: pron, fam: p[1], en: p[2], opts: opts };
  }

  /* present tense, six forms, for the base (non-pronominal) verb */
  function present(v) {
    var b = v.base, f = v.fam;
    if (f === "irr") return IRR[b].pr.split(" ");
    var st, sg, pl;
    if (/^(er|cer|ger|eer|eer2|eer2ger|dbl|yer|cueillir)$/.test(f)) {
      st = b.slice(0, -2);                      /* parl, commenc, achet… */
      if (f === "cueillir") st = b.slice(0, -2); /* cueill */
      var strong = st;                          /* stem for je, tu, il, ils */
      if (f === "eer") strong = lastReplace(st, "e", "è");
      if (f === "eer2" || f === "eer2ger") strong = lastReplace(st, "é", "è");
      if (f === "dbl") strong = st + st.slice(-1);
      if (f === "yer") strong = st.slice(0, -1) + "i";
      var nous = st + (f === "cer" ? "" : "") ;
      var nousForm = f === "cer" ? st.slice(0, -1) + "çons" : (f === "ger" || f === "eer2ger") ? st + "eons" : st + "ons";
      return [strong + "e", strong + "es", strong + "e", nousForm, st + "ez", strong + "ent"];
    }
    if (f === "ir") { st = b.slice(0, -2); return [st + "is", st + "is", st + "it", st + "issons", st + "issez", st + "issent"]; }
    if (f === "re") { st = b.slice(0, -2); var t = /p$/.test(st) ? "t" : ""; return [st + "s", st + "s", st + t, st + "ons", st + "ez", st + "ent"]; }
    if (f === "tir") { st = b.slice(0, -2); var s1 = st.slice(0, -1); return [s1 + "s", s1 + "s", s1 + "t", st + "ons", st + "ez", st + "ent"]; }
    if (f === "vrir") { st = b.slice(0, -2); return [st + "e", st + "es", st + "e", st + "ons", st + "ez", st + "ent"]; }
    if (f === "indre") { st = b.slice(0, -3); var g = st.slice(0, -1) + "gn"; return [st + "s", st + "s", st + "t", g + "ons", g + "ez", g + "ent"]; }
    if (f === "uire") { st = b.slice(0, -2); return [st + "s", st + "s", st + "t", st + "sons", st + "sez", st + "sent"]; }
    if (f === "aitre") { st = b.slice(0, -5); return [st + "ais", st + "ais", st + "aît", st + "aissons", st + "aissez", st + "aissent"]; }
    if (f === "venir") { var pre = b.replace(/(venir|tenir)$/, ""), r = b.slice(pre.length, pre.length + 1); /* v or t */
      return [pre + r + "iens", pre + r + "iens", pre + r + "ient", pre + r + "enons", pre + r + "enez", pre + r + "iennent"]; }
    if (f === "prendre") { st = b.slice(0, -3); return [st + "ds", st + "ds", st + "d", st + "ons", st + "ez", st + "nent"]; }
    if (f === "mettre") { st = b.slice(0, -3); return [st + "s", st + "s", st, st + "tons", st + "tez", st + "tent"]; }
    if (f === "cevoir") { st = b.slice(0, -6); return [st + "çois", st + "çois", st + "çoit", st + "cevons", st + "cevez", st + "çoivent"]; }
    if (f === "crire") { st = b.slice(0, -2); return [st + "s", st + "s", st + "t", st + "vons", st + "vez", st + "vent"]; }
    if (f === "battre") { st = b.slice(0, -3); return [st + "s", st + "s", st, st + "tons", st + "tez", st + "tent"]; }
    throw new Error("unknown family " + f);
  }

  function pastParticiple(v) {
    var b = v.base, f = v.fam;
    if (v.opts.pp) return v.opts.pp;
    if (f === "irr") return IRR[b].pp;
    if (/er$/.test(f) || /^(cer|ger|eer|eer2|eer2ger|dbl|yer)$/.test(f)) return b.slice(0, -2) + "é";
    if (f === "ir" || f === "tir" || f === "cueillir") return b.slice(0, -2) + "i";
    if (f === "re" || f === "battre") return b.slice(0, -2) + "u";
    if (f === "indre") return b.slice(0, -3) + "t";
    if (f === "uire") return b.slice(0, -2) + "t";
    if (f === "venir") return b.slice(0, -2) + "u";               /* venu, tenu */
    if (f === "prendre") return b.slice(0, -7) + "pris";        /* prendre → pris, apprendre → appris */
    if (f === "mettre") return b.slice(0, -6) + "mis";          /* mettre → mis, permettre → permis */
    if (f === "cevoir") return b.slice(0, -6) + "çu";
    if (f === "crire") return b.slice(0, -2) + "t";
    return b;
  }

  function futureStem(v) {
    var b = v.base, f = v.fam;
    if (v.opts.fut) return v.opts.fut;
    if (f === "irr") return IRR[b].fut;
    if (b === "envoyer" || b === "renvoyer") return b.slice(0, -5) + "verr";  /* enverr-, renverr- */
    if (f === "eer") return lastReplace(b.slice(0, -2), "e", "è") + "er";
    if (f === "dbl") { var s = b.slice(0, -2); return s + s.slice(-1) + "er"; }
    if (f === "yer") return b.slice(0, -3) + "ier";
    if (f === "cueillir") return b.slice(0, -2) + "er";
    if (f === "venir") return b.slice(0, -4) + "iendr";             /* viendr-, tiendr- */
    if (f === "cevoir") return b.slice(0, -3) + "r";                /* recevr- */
    if (/re$/.test(b)) return b.slice(0, -1);
    return b;
  }

  var ENDINGS = {
    imparfait: ["ais", "ais", "ait", "ions", "iez", "aient"],
    futur: ["ai", "as", "a", "ons", "ez", "ont"],
    conditionnel: ["ais", "ais", "ait", "ions", "iez", "aient"],
    subjonctif: ["e", "es", "e", "ions", "iez", "ent"]
  };
  /* ç / ge only before a and o */
  function softJoin(stem, end) {
    if (/ç$/.test(stem) && /^[ie]/.test(end)) return stem.slice(0, -1) + "c" + end;
    if (/ge$/.test(stem) && /^[ie]/.test(end)) return stem.slice(0, -1) + end;
    return stem + end;
  }

  function frenchForms(v) {
    var pr = present(v), irr = IRR[v.base], out = {};
    out.present = pr;
    var impStem = irr && irr.imp ? irr.imp : pr[3].replace(/ons$/, "");
    out.imparfait = ENDINGS.imparfait.map(function (e) { return softJoin(impStem, e); });
    var fs = futureStem(v);
    out.futur = ENDINGS.futur.map(function (e) { return fs + e; });
    out.conditionnel = ENDINGS.conditionnel.map(function (e) { return fs + e; });
    if (irr && irr.subj) out.subjonctif = irr.subj.split(" ");
    else {
      var strong = pr[5].replace(/ent$/, ""), weak = impStem;
      out.subjonctif = ENDINGS.subjonctif.map(function (e, i) { return i === 3 || i === 4 ? softJoin(weak, e) : strong + e; });
    }
    if (irr && irr.impv !== undefined) out.imperatif = irr.impv ? irr.impv.split(" ") : null;
    else {
      var tu = pr[1];
      if (/es$/.test(tu) && !/^(irr)$/.test(v.fam)) tu = tu.slice(0, -1);
      out.imperatif = [tu, pr[3], pr[4]];
    }
    return out;
  }

  /* ------------------------------ English ----------------------------- */
  var EN_IRR = {
    be: ["was", "been"], have: ["had", "had"], do: ["did", "done"], go: ["went", "gone"], make: ["made", "made"],
    say: ["said", "said"], tell: ["told", "told"], see: ["saw", "seen"], know: ["knew", "known"], think: ["thought", "thought"],
    get: ["got", "gotten"], give: ["gave", "given"], find: ["found", "found"], become: ["became", "become"], leave: ["left", "left"],
    feel: ["felt", "felt"], put: ["put", "put"], bring: ["brought", "brought"], begin: ["began", "begun"], keep: ["kept", "kept"],
    hold: ["held", "held"], write: ["wrote", "written"], hear: ["heard", "heard"], meet: ["met", "met"], run: ["ran", "run"],
    pay: ["paid", "paid"], speak: ["spoke", "spoken"], read: ["read", "read"], lose: ["lost", "lost"], fall: ["fell", "fallen"],
    send: ["sent", "sent"], build: ["built", "built"], understand: ["understood", "understood"], spend: ["spent", "spent"],
    drive: ["drove", "driven"], buy: ["bought", "bought"], choose: ["chose", "chosen"], throw: ["threw", "thrown"],
    sell: ["sold", "sold"], teach: ["taught", "taught"], eat: ["ate", "eaten"], drink: ["drank", "drunk"], sleep: ["slept", "slept"],
    wake: ["woke", "woken"], forget: ["forgot", "forgotten"], lead: ["led", "led"], beat: ["beat", "beaten"], win: ["won", "won"],
    wear: ["wore", "worn"], catch: ["caught", "caught"], cost: ["cost", "cost"], let: ["let", "let"], hide: ["hid", "hidden"],
    break: ["broke", "broken"], steal: ["stole", "stolen"], forbid: ["forbade", "forbidden"], swim: ["swam", "swum"],
    sing: ["sang", "sung"], draw: ["drew", "drawn"], show: ["showed", "shown"], fight: ["fought", "fought"], flee: ["fled", "fled"],
    freeze: ["froze", "frozen"], fly: ["flew", "flown"], forgive: ["forgave", "forgiven"], grow: ["grew", "grown"],
    come: ["came", "come"], take: ["took", "taken"], mean: ["meant", "meant"], lend: ["lent", "lent"], ring: ["rang", "rung"],
    bite: ["bit", "bitten"], shave: ["shaved", "shaved"], light: ["lit", "lit"], seek: ["sought", "sought"], lie: ["lied", "lied"],
    mow: ["mowed", "mown"], undertake: ["undertook", "undertaken"], arise: ["arose", "arisen"], foresee: ["foresaw", "foreseen"],
    reread: ["reread", "reread"], overcome: ["overcame", "overcome"], withhold: ["withheld", "withheld"], spread: ["spread", "spread"]
  };
  var DOUBLE = { stop: 1, plan: 1, prefer: 1, admit: 1, regret: 1, permit: 1, commit: 1, forget: 1, begin: 1, run: 1, sit: 1, get: 1,
    put: 1, swim: 1, win: 1, shut: 1, cut: 1, let: 1, set: 1, travel: 1, cancel: 1, control: 1, refer: 1, occur: 1, submit: 1,
    transmit: 1, omit: 1, drop: 1, shop: 1, chat: 1, jog: 1, beg: 1, rob: 1, ban: 1, ski: 0 };
  function s3(w) {
    if (w === "have") return "has"; if (w === "be") return "is"; if (w === "do") return "does"; if (w === "go") return "goes";
    if (w === "can" || w === "must") return w;
    if (/(s|sh|ch|x|z|o)$/.test(w)) return w + "es";
    if (/[^aeiou]y$/.test(w)) return w.slice(0, -1) + "ies";
    return w + "s";
  }
  function dbl(w) { return DOUBLE[w] ? w + w.slice(-1) : w; }
  function past(w) { if (EN_IRR[w]) return EN_IRR[w][0]; if (/e$/.test(w)) return w + "d"; if (/[^aeiou]y$/.test(w)) return w.slice(0, -1) + "ied"; return dbl(w) + "ed"; }
  function ppEn(w) { if (EN_IRR[w]) return EN_IRR[w][1]; return past(w); }
  function ing(w) {
    if (/ie$/.test(w)) return w.slice(0, -2) + "ying";
    if (/[^eoy]e$/.test(w) && w !== "be") return w.slice(0, -1) + "ing";
    return dbl(w) + "ing";
  }
  var SUBJ = ["I", "you", "he/she", "we", "you", "they"];
  var SELF = ["myself", "yourself", "himself/herself", "ourselves", "yourselves", "themselves"];
  var BE = ["am", "are", "is", "are", "are", "are"], WAS = ["was", "were", "was", "were", "were", "were"];

  /* "look for" → head "look", rest "for"; "do / make" → first option only for forms */
  function splitEn(en) {
    var first = en.split(" / ")[0].replace(/\s*\([^)]*\)\s*/g, " ").trim();
    var words = first.split(" ");
    return { head: words[0], rest: words.slice(1).join(" "), label: en };
  }
  function fill(rest, i) { return rest ? " " + rest.replace("{self}", SELF[i]) : ""; }

  function englishForms(v) {
    var e = splitEn(v.en), h = e.head, R = function (i) { return fill(e.rest, i); }, st = !!v.opts.st;
    var t = {};
    var special = {
      can: function () {
        t.present = SUBJ.map(function (s, i) { return s + " can"; });
        t.passe = SUBJ.map(function (s, i) { return s + " " + WAS[i] + " able to"; });
        t.imparfait = SUBJ.map(function (s, i) { return s + " could"; });
        t.futur = SUBJ.map(function (s) { return s + " will be able to"; });
        t.conditionnel = SUBJ.map(function (s) { return s + " could"; });
        t.subjonctif = SUBJ.map(function (s) { return "(that) " + s + " can"; });
      },
      must: function () {
        t.present = SUBJ.map(function (s, i) { return s + " " + (i === 2 ? "has" : "have") + " to"; });
        t.passe = SUBJ.map(function (s) { return s + " had to"; });
        t.imparfait = SUBJ.map(function (s) { return s + " had to / was supposed to"; });
        t.futur = SUBJ.map(function (s) { return s + " will have to"; });
        t.conditionnel = SUBJ.map(function (s) { return s + " should"; });
        t.subjonctif = SUBJ.map(function (s, i) { return "(that) " + s + " " + (i === 2 ? "has" : "have") + " to"; });
      }
    };
    if (v.base === "pouvoir") special.can();
    else if (v.base === "devoir") special.must();
    else if (v.base === "falloir") {
      t.present = [null, null, "it is necessary / you have to", null, null, null];
      t.passe = [null, null, "it was necessary / you had to", null, null, null];
      t.imparfait = [null, null, "it was necessary / you had to", null, null, null];
      t.futur = [null, null, "it will be necessary", null, null, null];
      t.conditionnel = [null, null, "it would be necessary / you should", null, null, null];
      t.subjonctif = [null, null, "(that) it be necessary", null, null, null];
    } else if (v.base === "pleuvoir") {
      t.present = [null, null, "it is raining / it rains", null, null, null];
      t.passe = [null, null, "it rained", null, null, null];
      t.imparfait = [null, null, "it was raining", null, null, null];
      t.futur = [null, null, "it will rain", null, null, null];
      t.conditionnel = [null, null, "it would rain", null, null, null];
      t.subjonctif = [null, null, "(that) it rain", null, null, null];
    } else {
      t.present = SUBJ.map(function (s, i) { return s + " " + (h === "be" ? BE[i] : i === 2 ? s3(h) : h) + R(i); });
      t.passe = SUBJ.map(function (s, i) { return s + " " + (h === "be" ? WAS[i] : past(h)) + R(i); });
      t.imparfait = SUBJ.map(function (s, i) {
        if (st || h === "be") return s + " " + (h === "be" ? WAS[i] : past(h)) + R(i);
        return s + " " + WAS[i] + " " + ing(h) + R(i);
      });
      t.futur = SUBJ.map(function (s, i) { return s + " will " + h + R(i); });
      t.conditionnel = SUBJ.map(function (s, i) { return s + " would " + (v.base === "vouloir" ? "like" : h) + R(i); });
      t.subjonctif = SUBJ.map(function (s, i) { return "(that) " + s + " " + (h === "be" ? BE[i] : i === 2 ? s3(h) : h) + R(i); });
    }
    if (/^(pouvoir|devoir|falloir|pleuvoir)$/.test(v.base)) t.imperatif = null;
    else if (v.base === "vouloir") t.imperatif = ["please… (kindly)", "let's be willing to…", "please… (formal requests: veuillez)"];
    else {
      var self = /\{self\}/.test(e.rest);
      t.imperatif = [h + R(1) + "!", "let's " + h + (self ? fill(e.rest, 3) : R(3)) + "!", h + R(4) + "!"];
    }
    return t;
  }

  /* --------------------------- assemble forms -------------------------- */
  var PERS = ["je", "tu", "il/elle/on", "nous", "vous", "ils/elles"];
  var REFL = ["me", "te", "se", "nous", "vous", "se"];
  var AUX_A = ["ai", "as", "a", "avons", "avez", "ont"], AUX_E = ["suis", "es", "est", "sommes", "êtes", "sont"];
  var AGREE = ["(e)", "(e)", "(e)", "(e)s", "(e)(s)", "(e)s"];

  function withSubject(i, verb, pron, impersonal) {
    if (impersonal) return "il " + verb;
    var w = verb;
    if (pron) w = (vowelStart(verb) && i !== 3 && i !== 4 ? REFL[i].slice(0, 1) + "'" : REFL[i] + " ") + verb;
    if (i === 0 && vowelStart(w)) return "j'" + w;
    return PERS[i] + " " + w;
  }

  function conjugate(inf) {
    var line = null;
    for (var k = 0; k < LIST.length; k++) if (LIST[k].split("|")[0] === inf) { line = LIST[k]; break; }
    if (!line) return null;
    var v = parse(line);
    var fr = frenchForms(v), en = englishForms(v), pp = pastParticiple(v);
    var etre = v.pron || AUX_ETRE[v.base];
    var only3 = IRR[v.base] && IRR[v.base].only3;
    var T = {};
    ["present", "imparfait", "futur", "conditionnel"].forEach(function (k) {
      T[k] = fr[k].map(function (f, i) { return only3 && i !== 2 ? null : [withSubject(i, f, v.pron, only3), en[k][i]]; });
    });
    T.subjonctif = fr.subjonctif.map(function (f, i) {
      if (only3 && i !== 2) return null;
      var s = withSubject(i, f, v.pron, only3);
      return [(/^[aeiouyhé]/i.test(s) && !/^(je|tu|nous|vous)\b/.test(s) ? "qu'" : "que ") + s, en.subjonctif[i]];
    });
    T.passe = PERS.map(function (p, i) {
      if (only3 && i !== 2) return null;
      var aux = etre ? AUX_E[i] : AUX_A[i];
      var part = etre ? pp + AGREE[i] : pp;
      return [withSubject(i, aux + " " + part, v.pron, only3), en.passe[i]];
    });
    if (fr.imperatif && en.imperatif) {
      var refl = ["toi", "nous", "vous"];
      T.imperatif = fr.imperatif.map(function (f, j) {
        return [v.pron ? f + "-" + refl[j] : f, en.imperatif[j]];
      });
    } else T.imperatif = null;
    var group = v.fam === "irr" ? "Irregular" :
      /^(er|cer|ger|eer|eer2|eer2ger|dbl|yer)$/.test(v.fam) ? "Regular -er verb" + (v.fam === "er" ? "" : " (spelling change)") :
      v.fam === "ir" ? "Regular -ir verb (like finir)" : v.fam === "re" ? "Regular -re verb (like vendre)" : "Irregular (" + ({ tir: "like partir", vrir: "like ouvrir", indre: "like peindre", uire: "like conduire", aitre: "like connaître", venir: "like venir", prendre: "like prendre", mettre: "like mettre", cevoir: "like recevoir", crire: "like écrire", battre: "like battre", cueillir: "like cueillir" }[v.fam] || "") + ")";
    return { inf: v.inf, en: "to " + v.en.replace("{self}", "oneself"), aux: etre ? "être" : "avoir", pp: pp, group: group, pron: v.pron,
      note: NOTES[v.base] || "", tenses: T };
  }

  window.NCLC_VERBS = {
    list: LIST.map(function (l) { var p = l.split("|"); return { inf: p[0], en: "to " + p[2].replace("{self}", "oneself") }; }),
    conjugate: conjugate
  };
})();
