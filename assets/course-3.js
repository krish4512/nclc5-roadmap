/* Course content, part 3: the A2 core — the past, pronouns, comparing, the future. */
window.COURSE = window.COURSE || { modules: [] };

window.COURSE.modules.push({
  id: "passe-compose",
  level: "A2",
  title: "The passé composé: talking about what happened",
  subtitle: "Avoir or être, irregular past participles, agreement, and where negatives and pronouns go.",
  hours: "10–12 h",
  why: "<p>The passé composé is the main tense for completed past events in both spoken and written French. The roadmap notes that answers stuck in the present cap you around A2 — the writing task \"recount an experience\" and the speaking tasks all expect you to narrate in the past. This is the single most important tense to automate on the way to NCLC 5.</p>",
  goals: [
    "Form the passé composé with avoir, including 25 common irregular participles",
    "Know which verbs take être, and make the participle agree",
    "Place negations, adverbs and pronouns correctly",
    "Narrate a sequence of past events"
  ],
  lessons: [
    {
      title: "Formation: auxiliary + past participle",
      body: "<p>Conjugate <span class='fr'>avoir</span> (or <span class='fr'>être</span>) in the present, then add the past participle. Regular participles: <b>-er → -é</b>, <b>-ir → -i</b>, <b>-re → -u</b>.</p>",
      table: {
        head: ["", "travailler", "finir", "attendre"],
        rows: [
          ["j'", "ai travaillé", "ai fini", "ai attendu"],
          ["tu", "as travaillé", "as fini", "as attendu"],
          ["il / elle / on", "a travaillé", "a fini", "a attendu"],
          ["nous", "avons travaillé", "avons fini", "avons attendu"],
          ["vous", "avez travaillé", "avez fini", "avez attendu"],
          ["ils / elles", "ont travaillé", "ont fini", "ont attendu"]
        ],
        say: [1, 2, 3],
        pron: true
      },
      after: "<p>One passé composé covers several English forms: <span class='fr'>j'ai travaillé</span> = I worked / I have worked / I did work.</p>"
    },
    {
      title: "Irregular past participles you must know",
      body: "<p>These are among the most frequent verbs in the language. Group them by ending to learn faster:</p>",
      table: {
        head: ["Ending", "Verbs"],
        rows: [
          ["-u", "avoir → eu, boire → bu, connaître → connu, croire → cru, devoir → dû, lire → lu, pouvoir → pu, recevoir → reçu, savoir → su, voir → vu, vouloir → voulu, vivre → vécu, venir → venu, tenir → tenu, falloir → fallu, pleuvoir → plu"],
          ["-is", "prendre → pris (apprendre → appris, comprendre → compris), mettre → mis, permettre → permis"],
          ["-it", "dire → dit, écrire → écrit, faire → fait, conduire → conduit, traduire → traduit"],
          ["-ert", "ouvrir → ouvert, offrir → offert, découvrir → découvert, souffrir → souffert"],
          ["other", "être → été, naître → né, mourir → mort"]
        ]
      },
      tip: "Learn each participle inside a sentence you'd actually say: <span class='fr'>J'ai reçu ma carte de résident permanent. J'ai pris l'avion. J'ai fait une demande.</span>"
    },
    {
      title: "Verbs that take être",
      body: "<p>About twenty verbs — mostly <b>movement or change of state</b> — use <span class='fr'>être</span>. A common memory aid is <b>DR &amp; MRS VANDERTRAMP</b>:</p>",
      table: {
        head: ["Verb", "Participle", "Verb", "Participle"],
        rows: [
          ["devenir", "devenu", "venir", "venu"],
          ["revenir", "revenu", "aller", "allé"],
          ["monter", "monté", "naître", "né"],
          ["rester", "resté", "descendre", "descendu"],
          ["sortir", "sorti", "entrer", "entré"],
          ["rentrer", "rentré", "retourner", "retourné"],
          ["tomber", "tombé", "arriver", "arrivé"],
          ["mourir", "mort", "partir", "parti"],
          ["passer (par)", "passé", "", ""]
        ]
      },
      after: "<p><b>Plus every reflexive verb</b>: <span class='fr'>je me suis levé, elle s'est inscrite, nous nous sommes rencontrés</span>.</p><p><b>Agreement with être:</b> the participle agrees with the <b>subject</b>, like an adjective: <span class='fr'>il est arrivé, elle est arrivée, ils sont arrivés, elles sont arrivées</span>. Usually you can't hear it (arrivé/arrivée sound the same), but in writing it's marked.</p><p><b>Some être verbs switch to avoir when they have a direct object</b>, and the meaning changes: <span class='fr'>Je suis sorti</span> (I went out) vs <span class='fr'>J'ai sorti la poubelle</span> (I took out the garbage); <span class='fr'>Elle est montée</span> (she went up) vs <span class='fr'>Elle a monté les valises</span> (she carried up the suitcases). Same for <span class='fr'>descendre, rentrer, passer, retourner</span>.</p>"
    },
    {
      title: "Word order: negatives, adverbs, pronouns",
      body: "<ul><li><b>Negation wraps the auxiliary</b>: <span class='fr'>Je n'ai pas compris. Il n'est jamais venu. Nous n'avons rien acheté.</span> Exception: <span class='fr'>personne</span> goes after the participle: <span class='fr'>Je n'ai vu personne.</span></li><li><b>Short adverbs go between auxiliary and participle</b>: <span class='fr'>J'ai bien dormi. Tu as déjà mangé ? Il a beaucoup travaillé. J'ai mal compris.</span></li><li><b>Object pronouns go before the auxiliary</b>: <span class='fr'>Je l'ai vu. Je lui ai téléphoné. Je ne l'ai pas reçu.</span></li><li><b>Agreement with avoir</b>: the participle agrees with a <b>direct object placed before it</b> (usually a pronoun): <span class='fr'>Cette lettre ? Je l'ai écrite.</span> This is a written-exam detail — learn it after the basics are solid.</li></ul>",
      examples: [
        ["Je n'ai pas encore reçu ma confirmation.", "I haven't received my confirmation yet."],
        ["Nous avons toujours habité en ville.", "We've always lived in the city."],
        ["Elle s'est inscrite à un cours de français en ligne.", "She signed up for an online French course."],
        ["Les documents ? Je les ai envoyés hier.", "The documents? I sent them yesterday."]
      ]
    },
    {
      title: "Narrating a sequence",
      body: "<p>Combine the passé composé with sequencing connectors to tell a clear story — exactly what the \"recount an experience\" writing task checks:</p>",
      table: {
        head: ["Connector", "Meaning"],
        rows: [
          ["d'abord / tout d'abord", "first"], ["ensuite / puis", "then, next"], ["après / après ça", "after, afterwards"],
          ["au bout de (dix minutes)", "after (ten minutes)"], ["finalement / enfin", "finally, in the end"], ["il y a (deux ans)", "(two years) ago"]
        ],
        say: [0]
      },
      examples: [
        ["Il y a deux ans, j'ai quitté mon pays et je suis arrivé à Halifax.", "Two years ago I left my country and arrived in Halifax."],
        ["D'abord, j'ai cherché un logement. Ensuite, j'ai ouvert un compte bancaire.", "First I looked for housing. Then I opened a bank account."],
        ["Finalement, j'ai trouvé un emploi dans une entreprise de construction.", "Finally I found a job with a construction company."]
      ],
      tip: "<span class='fr'>Il y a + time</span> = \"ago\" with the passé composé. Don't confuse it with <span class='fr'>depuis + present</span> (Module 3), which is for situations still going on."
    }
  ],
  mistakes: [
    ["J'ai allé au bureau.", "Je suis allé(e) au bureau.", "aller is an être verb."],
    ["Elle est arrivé.", "Elle est arrivée.", "With être, the participle agrees with the subject."],
    ["J'ai prendu le bus.", "J'ai pris l'autobus.", "prendre → pris."],
    ["Je n'ai compris pas.", "Je n'ai pas compris.", "The negation wraps the auxiliary."],
    ["J'ai levé à 7 h.", "Je me suis levé(e) à 7 h.", "Reflexive verbs take être in the passé composé."],
    ["J'ai habité ici depuis 2022.", "J'habite ici depuis 2022. / J'ai habité là-bas pendant deux ans.", "depuis + present for ongoing; pendant + passé composé for finished periods."],
    ["J'ai vu lui.", "Je l'ai vu.", "Object pronouns go before the auxiliary."]
  ],
  sounds: {
    points: [
      { title: "Present vs passé composé by ear", body: "<p>The auxiliary is often the only difference. Listen for <span class='fr'>j'ai / il a / ils ont</span> before the verb.</p>", say: ["je travaille", "j'ai travaillé", "il finit", "il a fini", "ils partent", "ils sont partis"] },
      { title: "je / j'ai", body: "<p><span class='fr'>je parle</span> [ʒə] vs <span class='fr'>j'ai parlé</span> [ʒe]: a single vowel separates present from past.</p>", say: ["je parle", "j'ai parlé", "je mange", "j'ai mangé", "je donne", "j'ai donné"] }
    ]
  },
  speak: {
    lines: [
      ["Je suis arrivé au Canada en février deux mille vingt-quatre.", "I arrived in Canada in February 2024."],
      ["D'abord, j'ai habité chez un ami pendant un mois.", "First, I stayed at a friend's place for a month."],
      ["Ensuite, j'ai trouvé un petit appartement à Laval.", "Then I found a small apartment in Laval."],
      ["Je me suis inscrit à un cours de français le soir.", "I signed up for an evening French course."],
      ["Je n'ai pas encore trouvé de travail dans mon domaine.", "I haven't found work in my field yet."],
      ["Finalement, ma femme et les enfants sont venus me rejoindre.", "Finally, my wife and kids came to join me."]
    ],
    task: "Tell the story of your last weekend, or of the day you arrived somewhere new, in 90 seconds. Use at least eight verbs in the passé composé — including three être verbs and one reflexive — and four sequencing connectors."
  },
  vocab: [
    ["arriver", "to arrive"], ["partir", "to leave"], ["quitter (un lieu)", "to leave (a place)"], ["rester", "to stay"],
    ["recevoir", "to receive"], ["envoyer", "to send"], ["obtenir", "to obtain, get"], ["faire une demande", "to apply"],
    ["pendant", "for, during (finished period)"], ["il y a", "ago"], ["déjà", "already, ever"], ["pas encore", "not yet"]
  ],
  quiz: [
    { q: "<span class='fr'>Hier, nous ___ au cinéma.</span>", o: ["avons allé", "sommes allés", "sommes allé"], a: 1, why: "aller takes être; the participle agrees with nous (plural)." },
    { q: "Past participle of <span class='fr'>mettre</span>:", o: ["metté", "mis", "mettu"], a: 1, why: "mettre → mis (like prendre → pris)." },
    { q: "\"She got up early.\"", o: ["Elle a levé tôt.", "Elle s'est levée tôt.", "Elle s'a levé tôt."], a: 1, why: "Reflexive → être; agreement with elle: levée." },
    { q: "\"I didn't understand.\"", o: ["Je n'ai compris pas.", "Je n'ai pas compris.", "Je ne pas ai compris."], a: 1, why: "ne… pas wraps the auxiliary." },
    { q: "<span class='fr'>J'___ la poubelle.</span> (sortir = take out)", o: ["ai sorti", "suis sorti", "suis sortie"], a: 0, why: "With a direct object, sortir takes avoir." },
    { q: "\"I lived in Lyon for three years (I don't anymore).\"", o: ["J'habite à Lyon depuis trois ans.", "J'ai habité à Lyon pendant trois ans.", "J'ai habité à Lyon depuis trois ans."], a: 1, why: "A finished period: passé composé + pendant." }
  ],
  practice: [["Recounting an experience vocabulary", "quiz.html?set=vocab-story"], ["Writing task 1 (narrate)", "exam.html?s=writing"]]
});

window.COURSE.modules.push({
  id: "imparfait",
  level: "A2",
  title: "The imparfait, and choosing between the two pasts",
  subtitle: "Background vs event, habit vs single action — the distinction that defines a B1 narrative.",
  hours: "10–12 h",
  why: "<p>English speakers find this the hardest choice in French grammar because English marks the same difference inconsistently (\"I lived\", \"I used to live\", \"I was living\"). Yet examiners read for it: the writing rubric for narration explicitly expects both tenses together — events in the passé composé, setting and habits in the imparfait. Getting this right is one of the clearest markers separating A2 from B1.</p>",
  goals: [
    "Form the imparfait of any verb (only être is irregular)",
    "Use the imparfait for descriptions, habits, and actions in progress",
    "Choose between imparfait and passé composé in a story",
    "Talk about how things used to be and how they've changed"
  ],
  lessons: [
    {
      title: "Formation: the most regular tense in French",
      body: "<p>Take the <b>nous form of the present</b>, remove <b>-ons</b>, and add the endings <b>-ais, -ais, -ait, -ions, -iez, -aient</b>. The only irregular stem is <span class='fr'>être → ét-</span>.</p>",
      table: {
        head: ["", "parler (nous parlons)", "faire (nous faisons)", "être (ét-)"],
        rows: [
          ["je", "parlais", "faisais", "étais"],
          ["tu", "parlais", "faisais", "étais"],
          ["il / elle / on", "parlait", "faisait", "était"],
          ["nous", "parlions", "faisions", "étions"],
          ["vous", "parliez", "faisiez", "étiez"],
          ["ils / elles", "parlaient", "faisaient", "étaient"]
        ],
        say: [1, 2, 3],
        pron: true
      },
      after: "<p>Four of the six forms (je, tu, il, ils) sound identical <span class='ipa'>[paʁlɛ]</span>. Spelling changers keep their nous stem: <span class='fr'>nous mangeons → je mangeais</span>, <span class='fr'>nous commençons → je commençais</span>. Impersonal forms to know: <span class='fr'>il y avait</span> (there was/were), <span class='fr'>il faisait beau</span>, <span class='fr'>il fallait</span> (one had to).</p>"
    },
    {
      title: "What the imparfait is for",
      body: "<p>Think of a film: the imparfait sets the scene and describes what was going on; the passé composé moves the plot forward.</p>",
      table: {
        head: ["Use", "Example", "English"],
        rows: [
          ["Description of people, places, weather, feelings", "Il faisait froid et j'étais fatigué.", "It was cold and I was tired."],
          ["Habits and repeated actions (used to / would)", "Quand j'étais petit, j'allais chez ma grand-mère chaque été.", "When I was little I used to go to my grandmother's every summer."],
          ["An action in progress (was doing)", "Je regardais la télé…", "I was watching TV…"],
          ["Age and time in the past", "J'avais vingt ans. Il était minuit.", "I was twenty. It was midnight."],
          ["Polite suggestions and wishes", "Je voulais vous demander… / Si on allait au cinéma ?", "I wanted to ask you… / How about going to the movies?"]
        ],
        say: [1]
      }
    },
    {
      title: "Imparfait or passé composé? The decision rules",
      body: "<p>Ask what the verb does in the story:</p><ol><li><b>Is it a completed event that moves the story on?</b> → passé composé. <span class='fr'>Le téléphone a sonné.</span></li><li><b>Is it background, description, or what was going on?</b> → imparfait. <span class='fr'>Il pleuvait.</span></li><li><b>Was it a habit?</b> → imparfait. <span class='fr'>Je prenais le métro tous les jours.</span></li><li><b>A single time, or a specific number of times?</b> → passé composé, even if it lasted a while: <span class='fr'>J'ai vécu trois ans à Dakar. J'ai appelé cinq fois.</span></li></ol><p><b>The interruption pattern</b> combines both in one sentence — examiners love it: <span class='fr'>Je <u>regardais</u> la télé quand le téléphone <u>a sonné</u>.</span> The imparfait is the ongoing action; the passé composé interrupts it.</p>",
      table: {
        cap: "Signal words",
        head: ["Usually imparfait", "Usually passé composé"],
        rows: [
          ["d'habitude, souvent, tous les jours, chaque fois, le lundi, autrefois, à l'époque, pendant que", "un jour, soudain, tout à coup, à ce moment-là, une fois, hier, le 3 mars, deux fois, pendant (+ fixed period)"]
        ]
      },
      examples: [
        ["Il faisait beau, alors nous sommes allés au parc.", "The weather was nice, so we went to the park."],
        ["Pendant que je cuisinais, les enfants faisaient leurs devoirs.", "While I was cooking, the kids were doing their homework."],
        ["Je dormais quand l'alarme a sonné.", "I was sleeping when the alarm went off."],
        ["Avant, je travaillais de nuit. Mais l'année dernière, j'ai changé de poste.", "I used to work nights. But last year I changed positions."]
      ],
      tip: "Some verbs change meaning between the two: <span class='fr'>je savais</span> (I knew) vs <span class='fr'>j'ai su</span> (I found out); <span class='fr'>je connaissais</span> (I knew someone) vs <span class='fr'>j'ai connu</span> (I met); <span class='fr'>je pouvais</span> (I was able) vs <span class='fr'>j'ai pu</span> (I managed to)."
    },
    {
      title: "Then and now: talking about change",
      body: "<p>A very common B1 speaking topic: compare your life before and after a change (moving, a new job, having children). Use the imparfait for \"before\" and the present for \"now\":</p>",
      examples: [
        ["Avant, j'habitais dans une grande ville ; maintenant, je vis dans un village.", "Before, I lived in a big city; now I live in a village."],
        ["Dans mon pays, je travaillais comme comptable. Ici, je suis en train de faire reconnaître mes diplômes.", "In my country I worked as an accountant. Here I'm getting my degrees recognised."],
        ["À l'époque, il n'y avait pas de téléphone intelligent.", "Back then, there were no smartphones."]
      ]
    },
    {
      title: "Time expressions: depuis, il y a, pendant, ça fait",
      body: "<p>These four are constantly confused. Here's the whole system:</p>",
      table: {
        head: ["Expression", "Meaning", "Tense", "Example"],
        rows: [
          ["depuis + duration/date", "for / since (still going on)", "present", "J'apprends le français depuis un an."],
          ["ça fait + duration + que", "it's been … that (still going on)", "present", "Ça fait un an que j'apprends le français."],
          ["il y a + duration", "ago", "passé composé", "Je suis arrivé il y a six mois."],
          ["pendant + duration", "for (a finished period)", "passé composé (or any tense)", "J'ai travaillé là-bas pendant cinq ans."],
          ["en + duration", "within, in (time taken)", "any", "J'ai fini le rapport en deux heures."]
        ],
        say: [3]
      }
    }
  ],
  mistakes: [
    ["Quand j'ai été petit, j'ai joué au foot.", "Quand j'étais petit, je jouais au foot.", "Childhood habits and states → imparfait."],
    ["Je dormais quand l'alarme sonnait.", "Je dormais quand l'alarme a sonné.", "The interrupting event is a completed action → passé composé."],
    ["J'habitais à Dakar pendant trois ans.", "J'ai habité à Dakar pendant trois ans.", "A defined, completed period → passé composé."],
    ["Hier, il a fait beau et j'ai été content.", "Hier, il faisait beau et j'étais content.", "Weather and feelings as background → imparfait."],
    ["nous étudiions → nous étudions (confused)", "Imparfait: nous étudiions (double i)", "Verbs ending in -ier have ii in the nous/vous imparfait."],
    ["Je suis ici il y a deux ans.", "Je suis ici depuis deux ans.", "Still here now → depuis + present."]
  ],
  sounds: {
    points: [
      { title: "Imparfait vs passé composé by ear", body: "<p>In many accents the [ɛ] of the imparfait and the [e] of the participle sound close. Listen for the auxiliary: if you hear <span class='fr'>j'ai / il a</span>, it's the passé composé.</p>", say: ["je parlais", "j'ai parlé", "il travaillait", "il a travaillé", "nous étions", "nous avons été"] },
      { title: "-ions / -iez", body: "<p>The nous and vous forms add a [j] sound: parlions [paʁljɔ̃]. With -ier verbs it's written ii but pronounced as one long [ij].</p>", say: ["nous parlions", "vous parliez", "nous étudiions", "vous oubliiez"] }
    ]
  },
  speak: {
    lines: [
      ["Quand j'étais enfant, j'habitais dans un petit village.", "When I was a child, I lived in a small village."],
      ["Chaque matin, je marchais trente minutes pour aller à l'école.", "Every morning I walked thirty minutes to get to school."],
      ["Un jour, il neigeait tellement que l'école a fermé.", "One day it was snowing so much that the school closed."],
      ["Je faisais mes devoirs quand mon père est rentré avec une surprise.", "I was doing my homework when my father came home with a surprise."],
      ["Avant, je ne parlais pas français. Maintenant, je le parle tous les jours.", "Before, I didn't speak French. Now I speak it every day."],
      ["Ça fait trois ans que nous vivons ici.", "We've been living here for three years."]
    ],
    task: "Tell a 2-minute story about a memorable day. First set the scene in the imparfait (where you were, the weather, how you felt, what was happening), then narrate the events in the passé composé, including at least one \"I was … when …\" sentence. Finish with what you learned, in the present."
  },
  vocab: [
    ["autrefois / avant", "in the past / before"], ["à l'époque", "back then"], ["d'habitude", "usually"], ["pendant que", "while"],
    ["soudain / tout à coup", "suddenly"], ["à ce moment-là", "at that moment"], ["un souvenir", "a memory"], ["se souvenir de", "to remember"],
    ["l'enfance (f.)", "childhood"], ["changer de (travail)", "to change (jobs)"], ["ça fait … que", "it's been … that"], ["au bout d'un moment", "after a while"]
  ],
  quiz: [
    { q: "<span class='fr'>Quand j'___ jeune, je jouais du piano.</span>", o: ["ai été", "étais", "suis"], a: 1, why: "A state in the past (age, childhood) → imparfait." },
    { q: "<span class='fr'>Je lisais quand quelqu'un ___ à la porte.</span>", o: ["frappait", "a frappé", "frappe"], a: 1, why: "The interrupting, completed event → passé composé." },
    { q: "Imparfait of <span class='fr'>nous commençons</span> → je…", o: ["commencais", "commençais", "commenceais"], a: 1, why: "Keep the ç from the nous stem before a." },
    { q: "\"I worked there for two years (finished).\"", o: ["Je travaillais là pendant deux ans.", "J'ai travaillé là-bas pendant deux ans.", "Je travaille là-bas depuis deux ans."], a: 1, why: "A defined, completed period → passé composé + pendant." },
    { q: "<span class='fr'>Hier soir, il ___ très froid.</span> (background)", o: ["a fait", "faisait", "fait"], a: 1, why: "Weather as background → imparfait." },
    { q: "<span class='fr'>J'ai su la nouvelle hier.</span> means…", o: ["I knew the news yesterday.", "I found out the news yesterday.", "I used to know the news."], a: 1, why: "savoir in the passé composé = to find out." }
  ],
  practice: [["Writing task 1: narrate", "exam.html?s=writing"], ["Recounting an experience", "quiz.html?set=vocab-story"]]
});

window.COURSE.modules.push({
  id: "pronouns",
  level: "A2",
  title: "Object pronouns, y and en",
  subtitle: "Stop repeating nouns: le, la, lui, leur, y and en, and the order they go in.",
  hours: "8–10 h",
  why: "<p>Native speakers avoid repeating nouns: <span class='fr'>Tu as appelé le propriétaire ? — Oui, je l'ai appelé.</span> Learners who can't use pronouns sound repetitive and lose points for lexical and grammatical range. Pronouns also appear in almost every listening dialogue, and misreading <span class='fr'>lui</span> (to him or her) or <span class='fr'>en</span> (some of it) can make you choose the wrong answer.</p>",
  goals: [
    "Replace direct and indirect objects with the right pronoun",
    "Use y for places and à + thing, and en for de + thing and quantities",
    "Place pronouns correctly in every tense, with infinitives and in commands",
    "Combine two pronouns in the right order"
  ],
  lessons: [
    {
      title: "Direct object pronouns (COD)",
      body: "<p>A direct object follows the verb with no preposition: <span class='fr'>Je vois <u>Marie</u>. Je prends <u>le bus</u>.</span> Replace it with a pronoun that goes <b>before the verb</b>.</p>",
      table: {
        head: ["Person", "Pronoun", "Example"],
        rows: [
          ["me / you", "me (m'), te (t')", "Il me connaît. Je t'attends."],
          ["him, it (masc.)", "le (l')", "Le contrat ? Je le signe demain."],
          ["her, it (fem.)", "la (l')", "La lettre ? Je la lis."],
          ["us / you (pl.)", "nous, vous", "Ils nous invitent."],
          ["them", "les", "Les documents ? Je les apporte."]
        ],
        say: [2]
      }
    },
    {
      title: "Indirect object pronouns (COI)",
      body: "<p>An indirect object follows <b>à + a person</b>: <span class='fr'>Je parle <u>à mon patron</u>.</span> Replace it with <span class='fr'>lui</span> (to him/her) or <span class='fr'>leur</span> (to them). <span class='fr'>Me, te, nous, vous</span> are the same as for direct objects.</p><p>Verbs that take à + person (and therefore lui/leur) include: <span class='fr'>parler à, téléphoner à, répondre à, demander à, dire à, écrire à, envoyer à, donner à, expliquer à, conseiller à, plaire à, ressembler à</span>.</p>",
      examples: [
        ["J'ai écrit à la propriétaire. → Je lui ai écrit.", "I wrote to the landlady. → I wrote to her."],
        ["Tu téléphones à tes parents ? — Oui, je leur téléphone le dimanche.", "Do you call your parents? — Yes, I call them on Sundays."],
        ["Le poste me plaît beaucoup.", "I really like the job. (literally: the job pleases me)"]
      ],
      tip: "<span class='fr'>Leur</span> as a pronoun never takes an s (<span class='fr'>je leur parle</span>). <span class='fr'>Leurs</span> with an s is only the possessive (<span class='fr'>leurs enfants</span>). And English \"call someone\" vs French <span class='fr'>téléphoner <b>à</b> quelqu'un</span> but <span class='fr'>appeler quelqu'un</span> (direct): <span class='fr'>je lui téléphone / je l'appelle</span>."
    },
    {
      title: "Y: there, and à + thing",
      body: "<p><span class='fr'>Y</span> replaces <b>a place</b> (introduced by à, en, dans, chez, sur…) or <b>à + a thing or idea</b>.</p>",
      examples: [
        ["Tu vas à la banque ? — Oui, j'y vais cet après-midi.", "Are you going to the bank? — Yes, I'm going (there) this afternoon."],
        ["J'habite à Moncton depuis 2021. J'y suis bien.", "I've lived in Moncton since 2021. I'm happy there."],
        ["Tu penses à ton entretien ? — Oui, j'y pense tout le temps.", "Are you thinking about your interview? — Yes, I think about it all the time."],
        ["Il y a un problème.", "There's a problem. (fixed expression)"]
      ],
      tip: "For <b>people</b> after penser à / s'intéresser à, use a stressed pronoun instead of y: <span class='fr'>Je pense à ma mère → Je pense à elle.</span>"
    },
    {
      title: "En: some, of it, from there",
      body: "<p><span class='fr'>En</span> replaces <b>de + a thing</b>, and any noun after a <b>quantity</b> or a partitive article (du, de la, des). With numbers and quantities, keep the number at the end.</p>",
      examples: [
        ["Tu as des enfants ? — Oui, j'en ai deux.", "Do you have children? — Yes, I have two (of them)."],
        ["Il reste du café ? — Non, il n'y en a plus.", "Is there any coffee left? — No, there's none left."],
        ["Tu as besoin d'aide ? — Oui, j'en ai besoin.", "Do you need help? — Yes, I need it."],
        ["Tu viens de la bibliothèque ? — Oui, j'en viens.", "Are you coming from the library? — Yes, I'm coming from there."],
        ["On parle de la réunion ? — Oui, parlons-en.", "Shall we talk about the meeting? — Yes, let's talk about it."]
      ],
      tip: "English often drops \"of them\"; French can't. <span class='fr'>J'ai deux</span> alone is incomplete — say <span class='fr'>J'en ai deux</span>."
    },
    {
      title: "Where pronouns go — every case",
      body: "",
      table: {
        head: ["Situation", "Position", "Example"],
        rows: [
          ["Simple tense", "before the verb", "Je le vois. Je ne le vois pas."],
          ["Passé composé", "before the auxiliary", "Je l'ai vu. Je ne l'ai pas vu."],
          ["Verb + infinitive", "before the infinitive", "Je vais le voir. Je peux lui parler. Je veux y aller."],
          ["Affirmative command", "after, with hyphens; me → moi", "Envoyez-le-moi. Allez-y. Donnez-m'en."],
          ["Negative command", "before, normal order", "Ne le faites pas. Ne m'en parlez pas."]
        ],
        say: [2]
      },
      after: "<p><b>Two pronouns together</b> follow a fixed order:</p><p style='font-family:var(--mono);font-size:14px;background:var(--bg);padding:10px 12px;border-radius:8px'>me / te / se / nous / vous  →  le / la / les  →  lui / leur  →  y  →  en</p><p><span class='fr'>Il me l'a donné</span> (he gave it to me), <span class='fr'>Je le lui ai dit</span> (I told him/her), <span class='fr'>Il y en a trois</span> (there are three of them).</p>"
    }
  ],
  mistakes: [
    ["Je lui vois.", "Je le vois. / Je la vois.", "voir takes a direct object → le/la."],
    ["Je la téléphone.", "Je lui téléphone.", "téléphoner à → indirect → lui."],
    ["Je leurs parle.", "Je leur parle.", "The pronoun leur never takes s."],
    ["J'ai deux.", "J'en ai deux.", "Quantities need en."],
    ["Je vais y aller pas.", "Je ne vais pas y aller.", "The negation wraps the conjugated verb; the pronoun stays with the infinitive."],
    ["Je l'ai vu hier. (talking about Marie, in writing)", "Je l'ai vue hier.", "Written agreement: preceding direct object → participle agrees."],
    ["Donne-me le.", "Donne-le-moi.", "Commands: pronouns after, direct before indirect, me → moi."]
  ],
  sounds: {
    points: [
      { title: "Tiny words, big meaning", body: "<p>Object pronouns are short and unstressed. Train your ear to catch them in fast speech.</p>", say: ["je le vois", "je lui parle", "je leur parle", "j'y vais", "j'en ai deux", "il y en a", "je l'ai vu"] },
      { title: "Liaison with en and y", body: "<p><span class='fr'>en</span> and <span class='fr'>y</span> trigger liaison with the pronoun before them.</p>", say: ["nous‿y allons", "vous‿en avez", "ils‿en veulent", "allez-y", "donnez-m'en"] }
    ]
  },
  speak: {
    lines: [
      ["Le formulaire ? Je l'ai déjà rempli, et je l'ai envoyé hier.", "The form? I've already filled it in, and I sent it yesterday."],
      ["J'ai parlé à ma gestionnaire et je lui ai expliqué la situation.", "I spoke to my manager and explained the situation to her."],
      ["Vous avez des questions ? — Oui, j'en ai deux.", "Do you have any questions? — Yes, I have two."],
      ["Le bureau de Service Canada ? J'y vais demain matin.", "The Service Canada office? I'm going there tomorrow morning."],
      ["Mes collègues ? Je leur écris souvent, mais je ne les vois pas beaucoup.", "My colleagues? I write to them often, but I don't see them much."],
      ["Ne vous en faites pas, je vais m'en occuper.", "Don't worry, I'll take care of it."]
    ],
    task: "Answer these out loud using pronouns, never repeating the noun: Do you call your family often? Have you visited Quebec City? How many languages do you speak? Did you send your documents? Are you thinking about the exam? Do you need a car?"
  },
  quiz: [
    { q: "<span class='fr'>Tu as vu les résultats ? — Oui, je ___ ai vus.</span>", o: ["les", "leur", "en"], a: 0, why: "voir takes a direct object; les résultats → les (and the participle agrees: vus)." },
    { q: "<span class='fr'>Tu écris à tes amis ? — Oui, je ___ écris.</span>", o: ["les", "leur", "leurs"], a: 1, why: "écrire à + people → leur (never with s)." },
    { q: "<span class='fr'>Combien de chambres il y a ? — Il y ___ a trois.</span>", o: ["y", "en", "les"], a: 1, why: "A number + noun → en, with the number kept." },
    { q: "\"I'm going to call her\" (appeler):", o: ["Je vais lui appeler.", "Je la vais appeler.", "Je vais l'appeler."], a: 2, why: "appeler takes a direct object, and the pronoun goes before the infinitive." },
    { q: "Correct order: \"He gave it to me.\"", o: ["Il l'a me donné.", "Il me l'a donné.", "Il lui me l'a donné."], a: 1, why: "me comes before le; both before the auxiliary." },
    { q: "<span class='fr'>Tu vas au marché ? — Oui, j'___ vais.</span>", o: ["en", "y", "le"], a: 1, why: "A place introduced by à → y." }
  ],
  practice: [["Speaking task: get information", "exam.html?s=speaking"], ["Verb drills (mixed)", "quiz.html?set=conj"]]
});

window.COURSE.modules.push({
  id: "compare-future",
  level: "A2",
  title: "Comparing, and the futur simple",
  subtitle: "More than, less than, the best — and a future tense for predictions, promises and plans.",
  hours: "7–9 h",
  why: "<p>Comparison is the engine of opinion tasks: <em>which is better, working from home or at the office?</em> You need <span class='fr'>plus… que</span>, <span class='fr'>meilleur</span> vs <span class='fr'>mieux</span>, and superlatives. The futur simple is expected at B1 for predictions, promises, and formal plans — and it's used in notices and announcements (<span class='fr'>Le bureau sera fermé…</span>) that appear in reading and listening.</p>",
  goals: [
    "Compare adjectives, adverbs, nouns and verbs",
    "Use meilleur, mieux, pire correctly",
    "Form the futur simple, including irregular stems",
    "Use quand + futur and si + présent → futur"
  ],
  lessons: [
    {
      title: "Comparatives",
      body: "",
      table: {
        head: ["Compare", "Structure", "Example"],
        rows: [
          ["Adjectives / adverbs", "plus / moins / aussi + adj. + que", "Le métro est plus rapide que l'autobus. Il parle aussi vite que moi."],
          ["Nouns", "plus de / moins de / autant de + noun + que", "Il y a plus de circulation qu'avant. J'ai autant de travail que toi."],
          ["Verbs", "verb + plus / moins / autant + que", "Je travaille plus qu'avant. Elle voyage autant que moi."]
        ],
        say: [2]
      },
      after: "<p>After <span class='fr'>que</span>, use stressed pronouns: <span class='fr'>moi, toi, lui, elle, nous, vous, eux, elles</span>.</p>"
    },
    {
      title: "Meilleur, mieux, pire — and superlatives",
      body: "<p><span class='fr'>Bon</span> (adjective) → <b>meilleur</b>; <span class='fr'>bien</span> (adverb) → <b>mieux</b>. Never say <span class='fr'>plus bon</span>.</p><ul><li><span class='fr'>Ce restaurant est meilleur</span> (the restaurant is better — describes a noun).</li><li><span class='fr'>Je dors mieux ici</span> (I sleep better — describes a verb). <span class='fr'>C'est mieux</span> (That's better — a situation).</li><li><span class='fr'>Pire</span> = worse (adjective), especially for serious things: <span class='fr'>La situation est pire qu'avant.</span></li></ul><p><b>Superlatives</b> add le/la/les: <span class='fr'>le plus grand, la moins chère, les meilleurs</span>. If the adjective normally goes after the noun, repeat the article: <span class='fr'>la ville la plus chère du Canada</span>. \"In\" after a superlative is <span class='fr'>de</span>: <span class='fr'>le meilleur quartier de la ville</span>.</p>",
      examples: [
        ["C'est la meilleure décision de ma vie.", "It's the best decision of my life."],
        ["Vancouver est la ville la plus chère du pays.", "Vancouver is the most expensive city in the country."],
        ["Je parle mieux français qu'il y a un an.", "I speak French better than a year ago."]
      ]
    },
    {
      title: "Futur simple: formation",
      body: "<p>Take the <b>infinitive</b> (drop the final -e of -re verbs) and add endings that look like <span class='fr'>avoir</span>: <b>-ai, -as, -a, -ons, -ez, -ont</b>. Every form contains an <b>r</b> sound before the ending — that's your listening cue.</p>",
      table: {
        head: ["", "parler", "finir", "prendre"],
        rows: [
          ["je", "parlerai", "finirai", "prendrai"],
          ["tu", "parleras", "finiras", "prendras"],
          ["il / elle / on", "parlera", "finira", "prendra"],
          ["nous", "parlerons", "finirons", "prendrons"],
          ["vous", "parlerez", "finirez", "prendrez"],
          ["ils / elles", "parleront", "finiront", "prendront"]
        ],
        say: [1, 2, 3],
        pron: true
      },
      after: "<p><b>Irregular stems</b> — the same stems are reused in the conditional (Module 13):</p>",
      tip: "Stems: <span class='fr'>être → ser-, avoir → aur-, aller → ir-, faire → fer-, pouvoir → pourr-, vouloir → voudr-, devoir → devr-, savoir → saur-, venir → viendr-, voir → verr-, envoyer → enverr-, recevoir → recevr-, falloir → il faudra, pleuvoir → il pleuvra</span>. Learn them as a chant: <em>ser, aur, ir, fer, pourr, voudr, devr, saur, viendr, verr</em>."
    },
    {
      title: "Futur simple vs futur proche, and time clauses",
      body: "<ul><li><b>Futur proche</b> (<span class='fr'>je vais partir</span>) — plans already decided, the near future, informal speech.</li><li><b>Futur simple</b> (<span class='fr'>je partirai</span>) — predictions, promises, formal announcements, written plans, and the distant or uncertain future.</li></ul><p><b>After quand, lorsque, dès que, aussitôt que</b> referring to the future, French uses the <b>futur</b>, where English uses the present: <span class='fr'>Quand j'aurai ma résidence permanente, je chercherai un emploi au gouvernement.</span> (When I get…)</p><p><b>Si + present → futur</b> for real conditions: <span class='fr'>S'il fait beau, nous irons au parc.</span> Never put the futur after <span class='fr'>si</span>.</p>",
      examples: [
        ["Le bureau sera fermé lundi en raison du congé férié.", "The office will be closed on Monday for the statutory holiday."],
        ["Je vous enverrai les documents dès que je les recevrai.", "I'll send you the documents as soon as I receive them."],
        ["Si je réussis l'examen, je pourrai déposer ma demande.", "If I pass the exam, I'll be able to submit my application."],
        ["Dans dix ans, on travaillera probablement quatre jours par semaine.", "In ten years we'll probably work four days a week."]
      ]
    }
  ],
  mistakes: [
    ["plus bon, plus bien", "meilleur, mieux", "bon and bien have irregular comparatives."],
    ["Il chante meilleur que moi.", "Il chante mieux que moi.", "A verb is modified by the adverb mieux."],
    ["la plus chère ville", "la ville la plus chère", "For adjectives that follow the noun, the superlative follows too, with a second article."],
    ["la meilleure ville dans le Canada", "la meilleure ville du Canada", "\"in\" after a superlative = de."],
    ["Quand j'ai le temps demain, je t'appellerai.", "Quand j'aurai le temps demain, je t'appellerai.", "Future time after quand → futur."],
    ["Si j'aurai le temps…", "Si j'ai le temps…", "Never futur after si."],
    ["je allerai, je faisrai", "j'irai, je ferai", "Irregular stems."]
  ],
  sounds: {
    points: [
      { title: "Hear the future", body: "<p>The futur always has an r before the ending. The futur je form [ʁe] and the conditional je form [ʁɛ] are close in many accents — context usually decides.</p>", say: ["je parle", "je parlerai", "il finit", "il finira", "nous allons", "nous irons", "ils font", "ils feront"] }
    ]
  },
  speak: {
    lines: [
      ["À mon avis, le métro est plus pratique que la voiture en ville.", "In my opinion, the subway is more practical than the car in the city."],
      ["Il y a moins de circulation, et c'est beaucoup moins cher.", "There's less traffic, and it's much cheaper."],
      ["Mais en hiver, la voiture est plus confortable.", "But in winter, the car is more comfortable."],
      ["L'année prochaine, je passerai le TEF et j'obtiendrai mon NCLC 5.", "Next year I'll take the TEF and get my NCLC 5."],
      ["Quand j'aurai ma résidence permanente, je ferai venir mes parents.", "When I have my permanent residence, I'll bring my parents over."],
      ["Si tout va bien, nous achèterons une maison dans trois ans.", "If all goes well, we'll buy a house in three years."]
    ],
    task: "Compare two cities you know (or two jobs) on five points — cost, weather, transport, work, quality of life — using plus/moins/aussi, meilleur/mieux and one superlative. Then describe where you'll be in five years, using at least five verbs in the futur simple and one sentence with quand + futur."
  },
  quiz: [
    { q: "<span class='fr'>Elle parle français ___ que moi.</span>", o: ["meilleur", "mieux", "plus bien"], a: 1, why: "Modifying the verb parler → adverb mieux." },
    { q: "\"the most interesting neighbourhood in the city\"", o: ["le quartier le plus intéressant de la ville", "le plus intéressant quartier dans la ville", "le quartier plus intéressant de la ville"], a: 0, why: "Article repeated for a post-noun adjective, and \"in\" = de." },
    { q: "Futur of <span class='fr'>je vais</span> (aller):", o: ["j'allerai", "j'irai", "je vais aller"], a: 1, why: "aller → ir-: j'irai." },
    { q: "<span class='fr'>Quand tu ___ à Ottawa, appelle-moi.</span>", o: ["arrives", "arriveras", "arrivais"], a: 1, why: "Future time after quand → futur." },
    { q: "<span class='fr'>S'il ___ demain, on restera à la maison.</span>", o: ["pleuvra", "pleut", "pleuvait"], a: 1, why: "si + present → futur in the main clause." },
    { q: "\"There's as much work as last year.\"", o: ["Il y a aussi de travail que l'année dernière.", "Il y a autant de travail que l'année dernière.", "Il y a si travail que l'année dernière."], a: 1, why: "With nouns: autant de … que." }
  ],
  practice: [["Opinions vocabulary", "quiz.html?set=vocab-opinions"], ["Futur simple table on the roadmap", "roadmap.html#order"]]
});
