/* Course content, part 2: the rest of A1 and the start of A2. */
window.COURSE = window.COURSE || { modules: [] };

window.COURSE.modules.push({
  id: "questions",
  level: "A1",
  title: "Negation and asking questions",
  subtitle: "Say no in six ways, and ask questions in the three registers French speakers actually use.",
  why: "<p>The TEF speaking task A and the TCF task 2 ask you to <b>get information from someone</b> — which means asking a stream of well-formed questions for several minutes. And negation is everywhere: in notices (<span class='fr'>il est interdit de...</span>, <span class='fr'>ne pas stationner</span>), in opinions, in listening traps where one small <span class='fr'>ne... plus</span> flips the meaning of a sentence.</p>",
  goals: [
    "Wrap ne... pas and five other negations around the verb correctly",
    "Ask yes/no questions three ways and choose the right register",
    "Use every question word, including qu'est-ce que and quel",
    "Ask a series of polite questions to get information"
  ],
  lessons: [
    {
      title: "Ne... pas and its family",
      body: "<p>French negation has two parts that <b>sandwich the conjugated verb</b>: <span class='fr'>ne</span> before it and <span class='fr'>pas</span> (or another word) after it. <span class='fr'>Ne</span> becomes <span class='fr'>n'</span> before a vowel.</p>",
      table: {
        head: ["Negation", "Meaning", "Example"],
        rows: [
          ["ne... pas", "not", "Je ne travaille pas le dimanche."],
          ["ne... jamais", "never", "Il ne prend jamais le métro."],
          ["ne... plus", "no longer, not anymore", "Nous n'habitons plus à Laval."],
          ["ne... rien", "nothing", "Je ne comprends rien."],
          ["ne... personne", "nobody", "Je ne connais personne ici."],
          ["ne... que", "only (not really negative)", "Il n'y a qu'une salle de bain."],
          ["ne... pas encore", "not yet", "Je n'ai pas encore reçu la réponse."]
        ],
        say: [2]
      },
      after: "<ul><li><b>Rien and personne can be subjects</b>: <span class='fr'>Personne ne répond. Rien n'est prêt.</span></li><li><b>With an infinitive, both parts go before it</b>: <span class='fr'>Il est important de ne pas oublier.</span> That's why signs say <span class='fr'>Ne pas fumer</span>.</li><li><b>Articles change</b>: <span class='fr'>un/une/des/du/de la → de</span> after the negation (see Module 2): <span class='fr'>Je n'ai plus d'argent.</span></li><li><b>In speech, ne often disappears</b>: <span class='fr'>Je sais pas</span>, <span class='fr'>C'est pas grave</span>. Understand it when you hear it, but <b>always write ne</b>, and keep it in the exam's speaking tasks too.</li></ul>",
      tip: "<span class='fr'>Ne... que</span> is not a negation of meaning: <span class='fr'>Je n'ai que dix dollars</span> means \"I only have ten dollars\" — you <em>do</em> have money. It's a favourite reading-comprehension trap."
    },
    {
      title: "Yes/no questions in three registers",
      body: "<p>The same question can be asked three ways. All are correct; they differ in formality.</p>",
      table: {
        head: ["Register", "How", "Example"],
        rows: [
          ["Everyday speech", "Statement + rising intonation", "Vous avez un rendez-vous ?"],
          ["Neutral — safest choice", "Est-ce que + statement", "Est-ce que vous avez un rendez-vous ?"],
          ["Formal / written", "Invert verb and pronoun, with a hyphen", "Avez-vous un rendez-vous ?"]
        ],
        say: [2]
      },
      after: "<p><b>Inversion details:</b> add <span class='fr'>-t-</span> when the verb ends in a vowel before il/elle/on: <span class='fr'>A-t-il...? Parle-t-elle...?</span> With a noun subject, keep the noun and add a pronoun: <span class='fr'>Le loyer comprend-il le chauffage ?</span> Avoid inverting <span class='fr'>je</span> except in fixed phrases (<span class='fr'>Puis-je...?</span>).</p><p><b>In the exam</b>, <span class='fr'>est-ce que</span> is the safest: it's always correct, it's easy to build, and you can use inversion for one or two questions to show range.</p>"
    },
    {
      title: "Question words",
      body: "<p>Question words can go at the start with <span class='fr'>est-ce que</span> or inversion, or at the end in casual speech (<span class='fr'>Tu pars quand ?</span>).</p>",
      table: {
        head: ["Word", "Meaning", "Example"],
        rows: [
          ["où", "where", "Où est-ce que vous habitez ?"],
          ["quand", "when", "Quand est-ce que l'appartement est libre ?"],
          ["comment", "how", "Comment est-ce qu'on paie le loyer ?"],
          ["combien (de)", "how much / how many", "Combien coûte le loyer ? Combien de chambres y a-t-il ?"],
          ["pourquoi", "why", "Pourquoi est-ce que le prix a augmenté ?"],
          ["qui", "who", "Qui s'occupe de l'entretien ?"],
          ["quel / quelle / quels / quelles", "which, what (+ noun)", "Quel est le montant du dépôt ? Quelle heure est-il ?"],
          ["qu'est-ce que / que", "what (object)", "Qu'est-ce que le loyer comprend ?"],
          ["qu'est-ce qui", "what (subject)", "Qu'est-ce qui est inclus ?"],
          ["à quelle heure / depuis quand / pour combien de temps", "at what time / since when / for how long", "À quelle heure ferme le bureau ?"]
        ],
        say: [2]
      },
      after: "<p><b>Qu'est-ce que vs qu'est-ce qui:</b> ask what the answer's role is. If the answer is the <em>subject</em> of the verb, use <span class='fr'>qui</span>; if it's the <em>object</em>, use <span class='fr'>que</span>. <span class='fr'>Qu'est-ce qui se passe ?</span> (What's happening? — \"something\" happens). <span class='fr'>Qu'est-ce que tu fais ?</span> (What are you doing? — you do \"something\").</p><p><b>Quel agrees</b> with the noun: <span class='fr'>quel quartier, quelle rue, quels documents, quelles options</span> — all pronounced the same.</p>"
    },
    {
      title: "Polite requests for information",
      body: "<p>In interaction tasks, bare questions can sound abrupt. Softeners make you sound natural and earn marks for sociolinguistic appropriateness:</p>",
      examples: [
        ["Excusez-moi, je voudrais savoir si l'appartement est encore libre.", "Excuse me, I'd like to know if the apartment is still available."],
        ["Pourriez-vous me dire combien coûte l'abonnement ?", "Could you tell me how much the membership costs?"],
        ["Est-ce qu'il serait possible de visiter samedi ?", "Would it be possible to visit on Saturday?"],
        ["J'aimerais aussi savoir si les animaux sont acceptés.", "I'd also like to know whether pets are allowed."],
        ["Une dernière question : est-ce que le stationnement est inclus ?", "One last question: is parking included?"]
      ],
      tip: "<b>Indirect questions</b> (<span class='fr'>je voudrais savoir si..., pourriez-vous me dire où...</span>) use normal word order and no est-ce que: <span class='fr'>Pourriez-vous me dire où se trouve la gare ?</span> — not <span class='fr'>où est-ce que se trouve</span>."
    }
  ],
  mistakes: [
    ["Je ne pas travaille.", "Je ne travaille pas.", "ne and pas go around the conjugated verb."],
    ["Je n'ai pas des enfants.", "Je n'ai pas d'enfants.", "des → de after a negation."],
    ["Qu'est-ce que se passe ?", "Qu'est-ce qui se passe ?", "The \"what\" is the subject here, so qui."],
    ["Quel est-ce que tu veux ?", "Qu'est-ce que tu veux ?", "quel goes with a noun or être; \"what\" alone as object is qu'est-ce que."],
    ["A il un chien ?", "A-t-il un chien ?", "Add -t- between two vowels in inversion."],
    ["Pouvez-vous me dire où est-ce que c'est ?", "Pouvez-vous me dire où c'est ?", "Indirect questions keep normal word order."]
  ],
  sounds: {
    points: [
      { title: "Hear the melody of a question", body: "<p>Intonation alone turns a statement into a question in speech. Listen for the rise at the end.</p>", say: ["Vous êtes libre samedi.", "Vous êtes libre samedi ?", "Est-ce que vous êtes libre samedi ?", "Êtes-vous libre samedi ?"] },
      { title: "The -t- in inversion", body: "<p>It's pronounced and links the two vowels.</p>", say: ["A-t-il un chien ?", "Y a-t-il un ascenseur ?", "Parle-t-elle anglais ?"] }
    ]
  },
  speak: {
    intro: "An interaction task in miniature: you're calling about an apartment. Shadow the questions, then do the task without the script.",
    lines: [
      ["Bonjour, je vous appelle au sujet de l'appartement à louer.", "Hello, I'm calling about the apartment for rent."],
      ["Est-ce qu'il est encore disponible ?", "Is it still available?"],
      ["Combien coûte le loyer, et est-ce que le chauffage est inclus ?", "How much is the rent, and is heating included?"],
      ["Il y a combien de chambres ?", "How many bedrooms are there?"],
      ["Est-ce que les animaux sont acceptés ?", "Are pets allowed?"],
      ["Quand est-ce que je pourrais le visiter ?", "When could I visit it?"],
      ["Merci beaucoup pour ces renseignements. Bonne journée !", "Thanks a lot for the information. Have a good day!"]
    ],
    task: "Set a 3-minute timer. You're calling a gym about membership. Ask at least eight different questions (price, hours, classes, parking, contract length, cancellation, trial, equipment) using all three registers at least once. Open and close politely."
  },
  vocab: [
    ["disponible / libre", "available / free"], ["le renseignement", "piece of information"], ["le loyer", "rent"], ["inclus(e)", "included"],
    ["le chauffage", "heating"], ["l'abonnement (m.)", "subscription, membership"], ["les frais (m.)", "fees"], ["l'horaire (m.)", "schedule, hours"],
    ["le stationnement", "parking (Qc)"], ["la visite", "viewing, visit"], ["interdit(e)", "forbidden"], ["encore / ne... plus", "still / no longer"]
  ],
  quiz: [
    { q: "\"We don't live in Toronto anymore.\"", o: ["Nous n'habitons pas plus à Toronto.", "Nous n'habitons plus à Toronto.", "Nous ne plus habitons à Toronto."], a: 1, why: "ne... plus wraps the conjugated verb." },
    { q: "<span class='fr'>Il n'y a qu'un bureau ouvert.</span> means…", o: ["There's no office open.", "There's only one office open.", "There isn't one office open."], a: 1, why: "ne... que means \"only\" — it isn't a real negation." },
    { q: "<span class='fr'>___ est inclus dans le prix ?</span>", o: ["Qu'est-ce que", "Qu'est-ce qui", "Quel"], a: 1, why: "\"What\" is the subject of est inclus, so qu'est-ce qui." },
    { q: "Formal inversion of <span class='fr'>il a un rendez-vous</span>:", o: ["A il un rendez-vous ?", "A-t-il un rendez-vous ?", "Est-il a un rendez-vous ?"], a: 1, why: "Add -t- between two vowels: a-t-il." },
    { q: "<span class='fr'>___ documents faut-il apporter ?</span>", o: ["Quel", "Quels", "Que"], a: 1, why: "quel agrees with documents: masculine plural = quels." },
    { q: "Which indirect question is correct?", o: ["Pouvez-vous me dire quand est-ce que ça ouvre ?", "Pouvez-vous me dire quand ça ouvre ?", "Pouvez-vous me dire quand ouvre-t-il ?"], a: 1, why: "Indirect questions use plain statement order." }
  ],
});

window.COURSE.modules.push({
  id: "describe",
  level: "A1",
  title: "Describing people, places and things",
  subtitle: "Adjective agreement and position, possessives, demonstratives — the words that make descriptions precise.",
  why: "<p>Describing your home, your city, a colleague or a product is a core A1–A2 skill and appears across all four exam sections. It's also where written French loses the most marks for small errors: an adjective that doesn't agree, <span class='fr'>son</span> used where <span class='fr'>sa</span> was needed, or an adjective in the wrong place.</p>",
  goals: [
    "Make adjectives agree in gender and number, including irregular forms",
    "Place adjectives before or after the noun, and know the ones that change meaning",
    "Use possessives (mon, ma, mes…) and demonstratives (ce, cette, ces)",
    "Describe your home and neighbourhood in detail"
  ],
  lessons: [
    {
      title: "Agreement: adjectives match the noun",
      body: "<p>An adjective takes the gender and number of its noun. The default is: <b>add -e for feminine, -s for plural</b>. If the masculine already ends in -e, the feminine doesn't change; if it ends in -s or -x, the masculine plural doesn't change.</p>",
      table: {
        head: ["Pattern", "Masculine", "Feminine", "Example"],
        rows: [
          ["+ e (heard: final consonant appears)", "grand, petit", "grande, petite", "une grande cuisine"],
          ["-e → no change", "calme, jeune", "calme, jeune", "une rue calme"],
          ["-eux → -euse", "heureux, sérieux", "heureuse, sérieuse", "une employée sérieuse"],
          ["-if → -ive", "actif, neuf", "active, neuve", "une voiture neuve"],
          ["-er → -ère", "cher, premier", "chère, première", "la première fois"],
          ["-en / -on → -enne / -onne", "canadien, bon", "canadienne, bonne", "une bonne idée"],
          ["-el → -elle", "naturel, actuel", "naturelle, actuelle", "la situation actuelle"],
          ["-eur → -euse (most)", "travailleur", "travailleuse", "une étudiante travailleuse"],
          ["-al → -aux (masc. plural)", "normal, social", "normale, sociale", "des problèmes sociaux"]
        ],
        say: [1, 2]
      },
      after: "<p><b>Irregulars to memorise:</b> <span class='fr'>beau/belle, nouveau/nouvelle, vieux/vieille, blanc/blanche, long/longue, gentil/gentille, frais/fraîche</span>. <b>Beau, nouveau, vieux</b> have a special form before a masculine noun starting with a vowel: <span class='fr'>un bel appartement, un nouvel emploi, un vieil ami</span>.</p><p><b>Mixed groups</b> take the masculine plural: <span class='fr'>Mon frère et ma sœur sont grands.</span></p>"
    },
    {
      title: "Position: most adjectives follow the noun",
      body: "<p>The default in French is <b>noun + adjective</b>: <span class='fr'>une ville tranquille, un appartement lumineux, un collègue sympathique</span>. Colours, nationalities, shapes and long adjectives always follow.</p><p>A short list of very common adjectives go <b>before</b>. Remember <b>BAGS</b>:</p>",
      table: {
        head: ["Category", "Adjectives", "Example"],
        rows: [
          ["<b>B</b>eauty", "beau, joli", "un joli quartier"],
          ["<b>A</b>ge", "jeune, vieux, nouveau", "un nouvel emploi"],
          ["<b>G</b>oodness", "bon, mauvais, meilleur", "une bonne expérience"],
          ["<b>S</b>ize", "grand, petit, gros, long", "un petit studio"],
          ["+ numbers and order", "premier, dernier, deux…", "le premier jour"]
        ],
        say: [2]
      },
      after: "<p><b>Before a plural adjective, des becomes de</b> in careful French: <span class='fr'>de grandes fenêtres, de bons résultats</span>.</p><p><b>Some adjectives change meaning with position</b>: <span class='fr'>mon ancien appartement</span> (my former apartment) vs <span class='fr'>un immeuble ancien</span> (an old building); <span class='fr'>un cher ami</span> (a dear friend) vs <span class='fr'>un restaurant cher</span> (an expensive restaurant); <span class='fr'>ma propre chambre</span> (my own room) vs <span class='fr'>une chambre propre</span> (a clean room); <span class='fr'>le dernier jour</span> (the final day) vs <span class='fr'>la semaine dernière</span> (last week).</p>"
    },
    {
      title: "Possessives: agree with the thing owned",
      body: "<p>French possessives agree with the <b>noun that is owned</b>, not with the owner. <span class='fr'>Sa voiture</span> can mean his car or her car — <span class='fr'>voiture</span> is feminine, that's all.</p>",
      table: {
        head: ["Owner", "Masc. singular", "Fem. singular", "Plural"],
        rows: [
          ["je", "mon", "ma", "mes"],
          ["tu", "ton", "ta", "tes"],
          ["il / elle / on", "son", "sa", "ses"],
          ["nous", "notre", "notre", "nos"],
          ["vous", "votre", "votre", "vos"],
          ["ils / elles", "leur", "leur", "leurs"]
        ]
      },
      after: "<p><b>Before a feminine noun starting with a vowel, use mon/ton/son</b> for the sound: <span class='fr'>mon amie, son adresse, ton école</span> (never <span class='fr'>ma amie</span>).</p><p><b>Body parts</b> usually take the definite article, not a possessive: <span class='fr'>J'ai mal au dos</span>, <span class='fr'>Il se lave les mains</span>.</p>"
    },
    {
      title: "Demonstratives: this, that, these",
      body: "<p><span class='fr'>Ce</span> (masc.), <span class='fr'>cet</span> (masc. before a vowel), <span class='fr'>cette</span> (fem.), <span class='fr'>ces</span> (plural). French doesn't distinguish \"this\" from \"that\" unless you add <span class='fr'>-ci</span> (here) or <span class='fr'>-là</span> (there): <span class='fr'>Je préfère cet appartement-ci à cet appartement-là.</span></p>",
      examples: [
        ["Ce quartier est très calme le soir.", "This neighbourhood is very quiet in the evening."],
        ["Cet hôpital a une bonne réputation.", "This hospital has a good reputation."],
        ["Cette semaine, je travaille de nuit.", "This week I'm working nights."],
        ["Ces documents sont obligatoires.", "These documents are mandatory."]
      ]
    },
    {
      title: "Building a rich description",
      body: "<p>B1 descriptions go beyond a list of adjectives. Combine agreement, position and these structures:</p><ul><li><b>Location</b>: <span class='fr'>près de, loin de, à côté de, en face de, au centre-ville, en banlieue, à dix minutes à pied de</span>.</li><li><b>Degrees</b>: <span class='fr'>très, assez, plutôt, un peu, trop</span> — <span class='fr'>un appartement plutôt petit mais très lumineux</span>.</li><li><b>Relative clause</b> (Module 14 for depth): <span class='fr'>un quartier où il y a beaucoup de parcs</span>.</li><li><b>Contrast</b>: <span class='fr'>L'appartement est petit, mais il est bien situé.</span></li></ul>",
      examples: [
        ["J'habite dans un petit appartement lumineux au troisième étage.", "I live in a small, bright apartment on the third floor."],
        ["Mon quartier est assez calme, mais il est un peu loin du centre-ville.", "My neighbourhood is fairly quiet, but it's a bit far from downtown."],
        ["Il y a une belle vue et de grandes fenêtres.", "There's a beautiful view and large windows."]
      ]
    }
  ],
  mistakes: [
    ["une maison blanc", "une maison blanche", "Adjectives agree; blanc → blanche is irregular."],
    ["un appartement petit", "un petit appartement", "Size adjectives (BAGS) go before the noun."],
    ["ma amie, sa adresse", "mon amie, son adresse", "mon/ton/son before a feminine vowel for the sound."],
    ["Son voiture (because the owner is a man)", "Sa voiture", "Possessives agree with the thing owned."],
    ["un beau appartement", "un bel appartement", "beau → bel before a masculine vowel."],
    ["des grands appartements", "de grands appartements", "des → de before a plural adjective in careful French."],
    ["J'ai mal à ma tête.", "J'ai mal à la tête.", "Body parts use the definite article."]
  ],
  sounds: {
    points: [
      { title: "Hear the feminine", body: "<p>The final consonant that appears in the feminine is often the only clue to gender in speech.</p>", say: ["petit", "petite", "grand", "grande", "heureux", "heureuse", "canadien", "canadienne", "premier", "première"] },
      { title: "bel, nouvel, vieil", body: "<p>These special forms sound exactly like the feminine and link to the vowel.</p>", say: ["un bel appartement", "un nouvel emploi", "un vieil ami", "cet hôpital"] }
    ]
  },
  speak: {
    lines: [
      ["J'habite dans un petit appartement au deuxième étage.", "I live in a small apartment on the second floor."],
      ["Il y a deux chambres et une grande cuisine lumineuse.", "There are two bedrooms and a large, bright kitchen."],
      ["Mon quartier est calme et il y a beaucoup d'arbres.", "My neighbourhood is quiet and there are lots of trees."],
      ["L'épicerie est à cinq minutes à pied.", "The grocery store is five minutes' walk away."],
      ["Ma voisine est une vieille dame très gentille.", "My neighbour is a very kind old lady."],
      ["Le seul problème, c'est que le loyer est un peu cher.", "The only problem is that the rent is a bit expensive."]
    ],
    task: "Describe your home and neighbourhood for 90 seconds: size, rooms, what you like, what you'd change, what's nearby. Use at least six adjectives (two before the noun), one possessive with <span class='fr'>sa</span> or <span class='fr'>son</span>, and one contrast with <span class='fr'>mais</span>."
  },
  vocab: [
    ["lumineux / lumineuse", "bright"], ["calme / tranquille", "quiet"], ["bruyant(e)", "noisy"], ["spacieux / spacieuse", "spacious"],
    ["bien situé(e)", "well located"], ["le centre-ville", "downtown"], ["la banlieue", "the suburbs"], ["l'étage (m.)", "floor, storey"],
    ["l'épicerie (f.)", "grocery store"], ["le voisin / la voisine", "neighbour"], ["à pied", "on foot"], ["en face de", "opposite"]
  ],
  quiz: [
    { q: "<span class='fr'>une ___ nouvelle</span> — which fits?", o: ["idée", "appartement", "quartier"], a: 0, why: "nouvelle is feminine; idée is feminine. (And nouveau goes before the noun: une nouvelle idée.)" },
    { q: "\"his car\" / \"her car\":", o: ["son voiture / sa voiture", "sa voiture / sa voiture", "son voiture / son voiture"], a: 1, why: "Possessives agree with voiture (feminine), whoever owns it." },
    { q: "Correct order?", o: ["une grande maison blanche", "une blanche grande maison", "une maison grande blanche"], a: 0, why: "Size (BAGS) before, colour after." },
    { q: "<span class='fr'>mon ancien collègue</span> means…", o: ["my old (elderly) colleague", "my former colleague", "my antique colleague"], a: 1, why: "Before the noun, ancien means former." },
    { q: "<span class='fr'>___ hôtel est complet.</span>", o: ["Ce", "Cet", "Cette"], a: 1, why: "cet before a masculine noun starting with a vowel or mute h." },
    { q: "Feminine of <span class='fr'>sérieux</span>:", o: ["sérieuxe", "sérieuse", "sérieusse"], a: 1, why: "-eux → -euse." }
  ],
});

window.COURSE.modules.push({
  id: "numbers",
  level: "A1",
  title: "Numbers, prices, dates and time",
  subtitle: "The details listening questions test most — and the part of French counting that trips everyone up.",
  why: "<p>Listening and reading questions constantly hinge on a number: a price, a date, a time, a room number, a deadline. The skill-by-skill checklist on the roadmap asks you to \"pick out numbers, dates, times and prices accurately under pressure\" — and French numbers from 70 to 99 are built in a way that punishes slow processing. This module drills them until they're automatic.</p>",
  goals: [
    "Say and understand numbers 0–1,000,000 at speed, especially 70–99",
    "Say prices in dollars and cents the Canadian way",
    "Give dates, days, months and years",
    "Tell time using both the 24-hour clock and everyday expressions"
  ],
  lessons: [
    {
      title: "0–69: mostly regular",
      body: "<p>Learn 0–16 by heart: <span class='fr'>zéro, un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix, onze, douze, treize, quatorze, quinze, seize</span>. Then 17–19 are \"ten-seven\" etc.: <span class='fr'>dix-sept, dix-huit, dix-neuf</span>.</p><p>Tens: <span class='fr'>vingt, trente, quarante, cinquante, soixante</span>. Add <b>et un</b> for 21, 31… 61 (<span class='fr'>vingt et un</span>) and a hyphen for the rest (<span class='fr'>vingt-deux, trente-sept</span>).</p>",
      examples: [["vingt et un, trente-quatre, quarante-huit, cinquante-cinq, soixante-six", "21, 34, 48, 55, 66"]]
    },
    {
      title: "70–99: the famous French arithmetic",
      body: "<p>Standard French (France and Canada) counts past 69 by adding to 60 and multiplying 20:</p>",
      table: {
        head: ["Number", "French", "Literally"],
        rows: [
          ["70", "soixante-dix", "sixty-ten"],
          ["71", "soixante et onze", "sixty and eleven"],
          ["75", "soixante-quinze", "sixty-fifteen"],
          ["80", "quatre-vingts", "four twenties"],
          ["81", "quatre-vingt-un", "four-twenty-one (no \"et\", no s)"],
          ["90", "quatre-vingt-dix", "four-twenty-ten"],
          ["92", "quatre-vingt-douze", "four-twenty-twelve"],
          ["99", "quatre-vingt-dix-neuf", "four-twenty-ten-nine"]
        ],
        say: [1]
      },
      after: "<p>Belgian and Swiss French use <span class='fr'>septante, nonante</span> (and Swiss <span class='fr'>huitante</span>) — you may hear them, but <b>Canada uses the standard forms</b>.</p><p><b>Hundreds and thousands:</b> <span class='fr'>cent, deux cents, deux cent cinquante</span> (the s drops when a number follows), <span class='fr'>mille</span> (never takes s: <span class='fr'>deux mille</span>), <span class='fr'>un million</span>. Years: <span class='fr'>deux mille vingt-six</span>.</p>",
      tip: "To process 90s fast in listening, train yourself to hear <span class='fr'>quatre-vingt-</span> as a single \"80 +\" chunk, then add what follows. Drill with prices and phone numbers daily for a week."
    },
    {
      title: "Prices, money and Canadian conventions",
      body: "<p>Canadian French writes the dollar sign <b>after</b> the amount with a space and uses a <b>comma</b> as the decimal separator: <span class='fr'>12,99 $</span>. Say it <span class='fr'>douze dollars quatre-vingt-dix-neuf</span>. Thousands use a space: <span class='fr'>1 250 $</span>.</p><p>You'll also hear informal Quebec words: <span class='fr'>une piastre / une piasse</span> (a dollar), <span class='fr'>un trente sous</span> (a quarter), <span class='fr'>une cenne</span> (a cent). Taxes: <span class='fr'>la TPS</span> (GST), <span class='fr'>la TVQ</span> (Quebec sales tax), <span class='fr'>la TVH</span> (HST).</p>",
      examples: [
        ["Ça coûte combien ? — Quarante-neuf dollars quatre-vingt-quinze, taxes en sus.", "How much is it? — $49.95 plus tax."],
        ["Le loyer est de mille trois cents dollars par mois.", "The rent is $1,300 a month."],
        ["Vous avez un rabais de quinze pour cent.", "You get a 15% discount."]
      ]
    },
    {
      title: "Dates, days and months",
      body: "<p>Days and months are <b>not capitalised</b> in French: <span class='fr'>lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche</span>; <span class='fr'>janvier, février, mars, avril, mai, juin, juillet, août, septembre, octobre, novembre, décembre</span>.</p><ul><li>Dates use cardinal numbers except the first: <span class='fr'>le premier juillet</span>, but <span class='fr'>le deux juillet, le quinze août</span>.</li><li>Order is day-month-year: <span class='fr'>le vendredi 14 mars 2027</span>. Written short: 14/03/2027 (Canada also uses ISO 2027-03-14 on forms).</li><li><b>\"On Monday\"</b> (one time) = <span class='fr'>lundi</span>; <b>\"on Mondays\"</b> (habit) = <span class='fr'>le lundi</span>.</li><li>Useful: <span class='fr'>en mars, au printemps, en été, en automne, en hiver, la semaine prochaine, le mois dernier, dans deux semaines, il y a trois jours</span>.</li></ul>",
      examples: [
        ["Mon rendez-vous est le mardi 3 juin à 14 h 30.", "My appointment is on Tuesday, June 3 at 2:30 p.m."],
        ["La date limite est le premier septembre.", "The deadline is September 1."]
      ]
    },
    {
      title: "Telling time",
      body: "<p>Official times (schedules, appointments, announcements) use the <b>24-hour clock</b>: <span class='fr'>Le train part à 17 h 45</span> = <span class='fr'>dix-sept heures quarante-cinq</span>. Written with an h: 9 h, 14 h 30.</p><p>In conversation, people use the 12-hour clock with expressions: <span class='fr'>et quart</span> (quarter past), <span class='fr'>et demie</span> (half past), <span class='fr'>moins le quart</span> (quarter to), <span class='fr'>midi</span>, <span class='fr'>minuit</span>, <span class='fr'>du matin / de l'après-midi / du soir</span>.</p>",
      table: {
        head: ["Time", "Official", "Conversational"],
        rows: [
          ["8:15", "huit heures quinze", "huit heures et quart"],
          ["12:30", "douze heures trente", "midi et demi"],
          ["15:45", "quinze heures quarante-cinq", "quatre heures moins le quart"],
          ["20:50", "vingt heures cinquante", "neuf heures moins dix"]
        ],
        say: [1, 2]
      },
      tip: "Listening trap: <span class='fr'>deux heures</span> vs <span class='fr'>douze heures</span>, and <span class='fr'>six</span>/<span class='fr'>dix</span> before heures (both link with [z]: <span class='fr'>six‿heures</span>, <span class='fr'>dix‿heures</span>). Write down numbers while listening, don't hold them in your head."
    }
  ],
  mistakes: [
    ["quatre-vingt (for 80)", "quatre-vingts", "80 takes an s — but it drops when another number follows: quatre-vingt-un."],
    ["vingt-un, quatre-vingt-et-un", "vingt et un, quatre-vingt-un", "21, 31… 61 and 71 use \"et\"; 81 and 91 don't. (The 1990 spelling reform also allows hyphens everywhere: vingt-et-un.)"],
    ["Lundi, Janvier", "lundi, janvier", "No capitals for days and months."],
    ["le un mai", "le premier mai", "Only the 1st uses premier."],
    ["$12.99", "12,99 $", "Canadian French: comma decimal, $ after the amount."],
    ["deux milles", "deux mille", "mille never takes s."]
  ],
  sounds: {
    points: [
      { title: "Tricky number pairs", body: "<p>These are easily confused at speed. Tap, repeat, and have someone test you.</p>", say: ["deux", "douze", "treize", "trente", "quatorze", "quarante", "seize", "soixante", "soixante-dix", "quatre-vingt-dix"] },
      { title: "Numbers change sound before a noun", body: "<p>Final consonants of six, huit, dix drop before a consonant and link [z]/[t] before a vowel.</p>", say: ["six", "six livres", "six‿ans", "huit", "huit jours", "dix‿heures"] }
    ]
  },
  speak: {
    lines: [
      ["Ça coûte quatre-vingt-dix-neuf dollars, taxes comprises.", "It's $99, taxes included."],
      ["Mon numéro, c'est le cinq, un, quatre, cinq, cinq, cinq, soixante-dix-sept, quatre-vingt-deux.", "My number is 514 555-7782 (the last four digits said in pairs)."],
      ["Je suis né le vingt-trois novembre mille neuf cent quatre-vingt-onze.", "I was born on November 23, 1991."],
      ["Le rendez-vous est jeudi prochain à quinze heures trente.", "The appointment is next Thursday at 3:30 p.m."],
      ["Le magasin ouvre à neuf heures et ferme à vingt et une heures.", "The store opens at 9 and closes at 9 p.m."]
    ],
    task: "Read aloud, as fast as you can while staying clear: today's date, your birth date, your phone number in pairs, and three prices from a receipt. Then have the listening mock exam play a recording and write down every number you hear."
  },
  vocab: [
    ["le prix", "price"], ["coûter", "to cost"], ["le rabais / la réduction", "discount"], ["taxes en sus / comprises", "plus tax / tax included"],
    ["le reçu", "receipt"], ["la date limite", "deadline"], ["la semaine prochaine", "next week"], ["il y a trois jours", "three days ago"],
    ["dans deux semaines", "in two weeks"], ["à l'heure / en retard / en avance", "on time / late / early"], ["midi / minuit", "noon / midnight"], ["la fin de semaine", "weekend (Qc)"]
  ],
  quiz: [
    { q: "Which is 96?", o: ["soixante-seize", "quatre-vingt-seize", "quatre-vingt-six"], a: 1, why: "4×20 + 16 = quatre-vingt-seize." },
    { q: "Which is 71?", o: ["soixante et onze", "septante et un", "soixante-dix-un"], a: 0, why: "Standard (and Canadian) French: soixante et onze." },
    { q: "\"September 1\" in French:", o: ["le un septembre", "le premier septembre", "le première Septembre"], a: 1, why: "Only the 1st uses premier (masculine, agreeing with jour), and months aren't capitalised." },
    { q: "Canadian French format for \$1,250.50:", o: ["$1,250.50", "1 250,50 $", "1.250,50$"], a: 1, why: "Space for thousands, comma decimal, $ after with a space." },
    { q: "<span class='fr'>Le magasin ferme à 18 h.</span> In conversation you'd say it closes at…", o: ["six heures du soir", "huit heures du soir", "six heures du matin"], a: 0, why: "18 h = 6 p.m. = six heures du soir." },
    { q: "\"I go to the gym on Tuesdays\" (every week):", o: ["Je vais au gym mardi.", "Je vais au gym le mardi.", "Je vais au gym en mardi."], a: 1, why: "le + day = a regular habit." }
  ],
});

window.COURSE.modules.push({
  id: "irregulars",
  level: "A1",
  title: "Key irregular verbs, near future and recent past",
  subtitle: "Aller, faire, venir, prendre, pouvoir, vouloir, devoir, savoir, connaître — and two shortcuts to talk about time.",
  why: "<p>A handful of irregular verbs account for a huge share of everyday French. They're also the most useful shortcuts in the language: with <span class='fr'>aller + infinitive</span> you can talk about the future and with <span class='fr'>venir de + infinitive</span> about the recent past — long before you learn the futur simple or the passé composé. With <span class='fr'>pouvoir, vouloir, devoir</span> + infinitive you can ask permission, make requests, and give advice.</p>",
  goals: [
    "Conjugate the nine most useful irregular verbs in the present",
    "Talk about plans with the futur proche and about what just happened with the passé récent",
    "Use modal verbs for ability, wishes, obligation and advice",
    "Choose between savoir and connaître, and the right preposition before places"
  ],
  lessons: [
    {
      title: "Aller, faire, venir, prendre",
      body: "<p>Learn these as sound patterns. <span class='fr'>Prendre</span> is the model for <span class='fr'>apprendre</span> and <span class='fr'>comprendre</span>; <span class='fr'>venir</span> for <span class='fr'>revenir, devenir, tenir, obtenir</span>.</p>",
      table: {
        head: ["", "aller (go)", "faire (do/make)", "venir (come)", "prendre (take)"],
        rows: [
          ["je", "vais", "fais", "viens", "prends"],
          ["tu", "vas", "fais", "viens", "prends"],
          ["il / elle / on", "va", "fait", "vient", "prend"],
          ["nous", "allons", "faisons", "venons", "prenons"],
          ["vous", "allez", "faites", "venez", "prenez"],
          ["ils / elles", "vont", "font", "viennent", "prennent"]
        ],
        say: [1, 2, 3, 4],
        pron: true
      },
      after: "<p><b>Faire</b> is everywhere in fixed expressions: <span class='fr'>faire les courses, faire le ménage, faire la cuisine, faire du sport, faire la queue, il fait beau / froid / -10 degrés</span>. Note <span class='fr'>nous faisons</span> is pronounced <span class='ipa'>[fəzɔ̃]</span>.</p>"
    },
    {
      title: "Pouvoir, vouloir, devoir — plus an infinitive",
      body: "<p>These modal verbs are followed directly by an <b>infinitive</b> (no \"to\"): <span class='fr'>Je peux venir, je veux partir, je dois travailler</span>.</p>",
      table: {
        head: ["", "pouvoir (can)", "vouloir (want)", "devoir (must)"],
        rows: [
          ["je", "peux", "veux", "dois"],
          ["tu", "peux", "veux", "dois"],
          ["il / elle / on", "peut", "veut", "doit"],
          ["nous", "pouvons", "voulons", "devons"],
          ["vous", "pouvez", "voulez", "devez"],
          ["ils / elles", "peuvent", "veulent", "doivent"]
        ],
        say: [1, 2, 3],
        pron: true
      },
      after: "<ul><li><b>Ability / permission</b>: <span class='fr'>Est-ce que je peux payer par carte ?</span></li><li><b>Wishes</b>: <span class='fr'>Je veux</span> is direct, even blunt; use <span class='fr'>je voudrais</span> (conditional, Module 13) to ask politely.</li><li><b>Obligation</b>: <span class='fr'>Vous devez présenter une pièce d'identité.</span> Impersonal: <span class='fr'>Il faut + infinitive</span> (one must): <span class='fr'>Il faut réserver.</span></li><li><b>Probability</b>: <span class='fr'>Il doit être malade</span> (He must be sick).</li><li><b>Advice</b> uses the conditional: <span class='fr'>Tu devrais consulter un médecin</span> (You should…).</li></ul>"
    },
    {
      title: "Savoir vs connaître",
      body: "<p>Both mean \"to know\", but they're not interchangeable.</p>",
      table: {
        head: ["", "savoir", "connaître"],
        rows: [
          ["Use for", "facts, information, how to do something", "people, places, works — familiarity"],
          ["Followed by", "que, si, où, quand… / an infinitive", "a noun"],
          ["Example", "Je sais où il habite. Je sais conduire.", "Je connais bien Montréal. Tu connais Marc ?"],
          ["je / nous / ils", "sais / savons / savent", "connais / connaissons / connaissent"]
        ]
      },
      tip: "<span class='fr'>Je sais nager</span> = I know how to swim (a skill — no \"comment\" needed). <span class='fr'>Je peux nager</span> = I'm able to swim right now (not injured, pool is open)."
    },
    {
      title: "The near future: aller + infinitive",
      body: "<p>The <b>futur proche</b> is the most common way to talk about plans in spoken French — often more common than the futur simple for anything personal and planned. Conjugate <span class='fr'>aller</span> and add an infinitive.</p><p>Negation goes around <span class='fr'>aller</span>: <span class='fr'>Je ne vais pas déménager.</span> Pronouns go before the infinitive: <span class='fr'>Je vais l'appeler demain.</span></p>",
      examples: [
        ["Je vais passer l'examen en mars.", "I'm going to take the exam in March."],
        ["Nous allons déménager à Québec l'été prochain.", "We're going to move to Quebec City next summer."],
        ["Il va pleuvoir cet après-midi.", "It's going to rain this afternoon."],
        ["Je ne vais pas accepter cette offre.", "I'm not going to accept this offer."]
      ]
    },
    {
      title: "The recent past: venir de + infinitive",
      body: "<p>To say something <b>has just</b> happened, use <span class='fr'>venir</span> (present) + <span class='fr'>de</span> + infinitive. It's precise and very common in announcements and messages.</p>",
      examples: [
        ["Je viens de recevoir votre message.", "I've just received your message."],
        ["Le train vient de partir.", "The train has just left."],
        ["Nous venons d'arriver au Canada.", "We've just arrived in Canada."]
      ],
      tip: "Don't confuse <span class='fr'>je viens de Montréal</span> (I come from Montreal) with <span class='fr'>je viens de manger</span> (I've just eaten). The infinitive is the signal."
    },
    {
      title: "Going to places: à, en, au, aux",
      body: "<p>The preposition for \"to\" or \"in\" a place depends on what kind of place it is.</p>",
      table: {
        head: ["Place", "Preposition", "Examples"],
        rows: [
          ["Cities", "à", "à Montréal, à Paris, à Toronto"],
          ["Feminine countries and provinces (most end in -e)", "en", "en France, en Colombie-Britannique, en Nouvelle-Écosse"],
          ["Masculine countries and provinces", "au", "au Canada, au Québec, au Manitoba, au Maroc"],
          ["Plural countries", "aux", "aux États-Unis, aux Philippines"],
          ["Countries starting with a vowel", "en", "en Iran, en Ontario, en Alberta"],
          ["Coming from", "de / du / des", "Je viens de France, du Canada, des États-Unis"]
        ],
        say: [2]
      },
      tip: "<span class='fr'>Québec</span> the city takes <span class='fr'>à</span> (à Québec); <span class='fr'>le Québec</span> the province takes <span class='fr'>au</span> (au Québec). A sentence in the exam can use both."
    }
  ],
  mistakes: [
    ["Je vais à aller au travail.", "Je vais aller au travail.", "aller + bare infinitive, no preposition."],
    ["Je peux à venir.", "Je peux venir.", "Modal verbs take a bare infinitive."],
    ["Je connais conduire.", "Je sais conduire.", "Skills and facts: savoir."],
    ["Je sais Marie.", "Je connais Marie.", "People: connaître."],
    ["Je viens de le Mexique.", "Je viens du Mexique.", "de + le = du."],
    ["en Canada, à États-Unis", "au Canada, aux États-Unis", "Masculine countries take au, plural ones aux."],
    ["Je veux un café. (to a server)", "Je voudrais un café, s'il vous plaît.", "je veux is too blunt for requests."]
  ],
  sounds: {
    points: [
      { title: "Singular vs plural you can hear", body: "<p>Unlike -er verbs, these irregulars change sound in the plural. Listen for the extra consonant.</p>", say: ["il peut", "ils peuvent", "elle veut", "elles veulent", "il doit", "ils doivent", "il vient", "ils viennent", "il prend", "ils prennent"] },
      { title: "vais / vas / va / vont", body: "<p>Short and easy to miss in fast speech. <span class='fr'>Je vais</span> often sounds like \"j'vais\", and in Quebec even \"m'as\" in very informal speech.</p>", say: ["je vais partir", "tu vas voir", "on va manger", "ils vont arriver"] }
    ]
  },
  speak: {
    lines: [
      ["Je viens d'arriver à Winnipeg avec ma famille.", "I've just arrived in Winnipeg with my family."],
      ["Je dois trouver un logement avant la fin du mois.", "I have to find a place to live before the end of the month."],
      ["Est-ce que vous pouvez m'aider à remplir ce formulaire ?", "Can you help me fill out this form?"],
      ["Je ne connais pas encore bien la ville.", "I don't know the city well yet."],
      ["La semaine prochaine, je vais commencer un nouveau travail.", "Next week I'm going to start a new job."],
      ["On va faire les courses samedi, tu veux venir ?", "We're going to do the shopping on Saturday, do you want to come?"]
    ],
    task: "Talk for 90 seconds about your plans for the next year: where you're going to live, work or study, what you have to do first, what you want to do, and one thing you've just done. Use <span class='fr'>aller + infinitive</span> at least four times, and <span class='fr'>devoir</span>, <span class='fr'>vouloir</span> and <span class='fr'>venir de</span> once each."
  },
  vocab: [
    ["déménager", "to move (house)"], ["trouver un logement", "to find housing"], ["remplir un formulaire", "to fill in a form"], ["obtenir", "to obtain"],
    ["la pièce d'identité", "ID document"], ["le permis de conduire", "driver's licence"], ["il faut", "it's necessary, one must"], ["faire la queue / la file", "to line up (Qc: faire la file)"],
    ["prochain(e)", "next"], ["dernier / dernière", "last"], ["bientôt", "soon"], ["tout de suite", "right away"]
  ],
  quiz: [
    { q: "\"They have to leave\":", o: ["Ils doivent partir.", "Ils doient partir.", "Ils devent partir."], a: 0, why: "devoir: ils doivent." },
    { q: "\"I've just finished\":", o: ["J'ai juste fini.", "Je viens de finir.", "Je vais finir."], a: 1, why: "venir de + infinitive = has just done." },
    { q: "<span class='fr'>Je ___ bien ce quartier.</span>", o: ["sais", "connais", "peux"], a: 1, why: "Familiarity with a place: connaître." },
    { q: "\"We're moving to Alberta.\"", o: ["Nous allons déménager à Alberta.", "Nous allons déménager en Alberta.", "Nous allons déménager au Alberta."], a: 1, why: "Places starting with a vowel take en: en Alberta, en Ontario." },
    { q: "Negative of <span class='fr'>Je vais travailler demain</span>:", o: ["Je vais ne pas travailler demain.", "Je ne vais pas travailler demain.", "Je ne vais travailler pas demain."], a: 1, why: "The negation wraps the conjugated verb aller." },
    { q: "<span class='fr'>Ils ___ le métro chaque matin.</span> (prendre)", o: ["prendent", "prennent", "prenent"], a: 1, why: "prendre: ils prennent (double n)." }
  ],
});

window.COURSE.modules.push({
  id: "reflexive",
  level: "A2",
  title: "Reflexive verbs, daily life and giving instructions",
  subtitle: "Se lever, s'habiller, s'occuper de… plus the imperative for directions, advice and instructions.",
  why: "<p>Reflexive (pronominal) verbs are how French describes daily routines, feelings and many everyday actions: <span class='fr'>se réveiller, se dépêcher, s'inquiéter, s'inscrire, se souvenir</span>. They're also needed to build the passé composé correctly in Module 9, because they always take <span class='fr'>être</span>. The imperative — telling people what to do — is the language of instructions, notices and advice, all of which appear in the reading section.</p>",
  goals: [
    "Conjugate reflexive verbs and place the pronoun correctly, including in negatives",
    "Tell the difference between reflexive and non-reflexive meanings",
    "Form the imperative, including with reflexive verbs and in the negative",
    "Understand instructions and give advice or directions"
  ],
  lessons: [
    {
      title: "How reflexive verbs work",
      body: "<p>A reflexive verb has a pronoun that matches the subject: the action \"returns\" to the subject. The pronoun goes <b>right before the verb</b>.</p>",
      table: {
        head: ["", "se lever (to get up)", "s'habiller (to get dressed)"],
        rows: [
          ["je", "me lève", "m'habille"],
          ["tu", "te lèves", "t'habilles"],
          ["il / elle / on", "se lève", "s'habille"],
          ["nous", "nous levons", "nous habillons"],
          ["vous", "vous levez", "vous habillez"],
          ["ils / elles", "se lèvent", "s'habillent"]
        ],
        say: [1, 2],
        pron: true
      },
      after: "<p><b>Negation</b> wraps pronoun + verb together: <span class='fr'>Je ne me lève pas tôt.</span> <b>With an infinitive</b>, the pronoun matches the subject: <span class='fr'>Je vais me coucher. Nous devons nous dépêcher.</span></p>"
    },
    {
      title: "Three kinds of reflexive meaning",
      body: "<p>Recognising the type helps you remember them:</p>",
      table: {
        head: ["Type", "Meaning", "Examples"],
        rows: [
          ["Truly reflexive", "you do it to yourself", "se laver, se brosser les dents, se raser, se blesser"],
          ["Reciprocal (plural)", "each other", "Ils se parlent tous les jours. Nous nous voyons le samedi."],
          ["Idiomatic", "the meaning changes with se", "s'appeler (be called), s'entendre (get along), s'occuper de (take care of), se rendre compte (realise), se passer (happen), s'en aller (leave)"]
        ]
      },
      after: "<p>Many common verbs change meaning when reflexive: <span class='fr'>ennuyer</span> (to bore someone) → <span class='fr'>s'ennuyer</span> (to be bored); <span class='fr'>inquiéter</span> (to worry someone) → <span class='fr'>s'inquiéter</span> (to worry); <span class='fr'>inscrire</span> (to register someone) → <span class='fr'>s'inscrire</span> (to sign up); <span class='fr'>tromper</span> (to deceive) → <span class='fr'>se tromper</span> (to make a mistake); <span class='fr'>souvenir</span> → <span class='fr'>se souvenir de</span> (to remember).</p>",
      examples: [
        ["Je m'occupe de mes parents la fin de semaine.", "I take care of my parents on weekends."],
        ["Je m'entends bien avec mes collègues.", "I get along well with my colleagues."],
        ["Je me suis trompé de numéro, désolé.", "I dialled the wrong number, sorry. (passé composé preview)"]
      ]
    },
    {
      title: "The imperative: giving instructions",
      body: "<p>Use the <b>tu</b>, <b>nous</b> (let's) or <b>vous</b> form of the present <b>without the subject</b>. For -er verbs (and aller), the tu form <b>drops its -s</b>: <span class='fr'>Parle ! Va !</span> — except before <span class='fr'>y</span> or <span class='fr'>en</span>: <span class='fr'>Vas-y !</span></p>",
      table: {
        head: ["Verb", "tu", "nous", "vous"],
        rows: [
          ["parler", "parle", "parlons", "parlez"],
          ["finir", "finis", "finissons", "finissez"],
          ["prendre", "prends", "prenons", "prenez"],
          ["être", "sois", "soyons", "soyez"],
          ["avoir", "aie", "ayons", "ayez"],
          ["savoir", "sache", "sachons", "sachez"]
        ],
        say: [1, 2, 3]
      },
      after: "<p><b>Reflexive verbs in the imperative:</b> affirmative — the pronoun goes <em>after</em> with a hyphen and <span class='fr'>te → toi</span>: <span class='fr'>Lève-toi ! Dépêchez-vous !</span>. Negative — the pronoun goes back in front: <span class='fr'>Ne te lève pas ! Ne vous inquiétez pas.</span></p><p><b>In notices</b>, instructions often use the infinitive instead: <span class='fr'>Ne pas déranger. Agiter avant usage. Remplir en lettres majuscules.</span></p>",
      examples: [
        ["Prenez la deuxième rue à droite, puis continuez tout droit.", "Take the second street on the right, then keep going straight."],
        ["Ne vous inquiétez pas, tout va bien se passer.", "Don't worry, everything will be fine."],
        ["Sachez que le bureau sera fermé lundi.", "Please note (be aware) that the office will be closed on Monday."],
        ["Allons-y !", "Let's go!"]
      ]
    }
  ],
  mistakes: [
    ["Je lève à sept heures.", "Je me lève à sept heures.", "se lever needs its pronoun; lever alone means to lift."],
    ["Je ne lève me pas.", "Je ne me lève pas.", "The negation wraps pronoun + verb."],
    ["Nous allons se coucher.", "Nous allons nous coucher.", "The pronoun matches the subject, even with an infinitive."],
    ["Parles plus lentement !", "Parle plus lentement !", "-er verbs drop -s in the tu imperative."],
    ["Lève-te !", "Lève-toi !", "te becomes toi after the verb."],
    ["Je me souviens ce jour.", "Je me souviens de ce jour.", "se souvenir de."]
  ],
  sounds: {
    points: [
      { title: "Pronoun + verb flow together", body: "<p>The reflexive pronoun is unstressed and fuses with the verb: <span class='fr'>je me lève</span> ≈ \"j'me lève\" in speech.</p>", say: ["je me lève", "tu te dépêches", "il s'appelle", "nous nous voyons", "vous vous inquiétez", "ils s'entendent"] }
    ]
  },
  speak: {
    lines: [
      ["Je me réveille à six heures, mais je me lève à six heures et quart.", "I wake up at six, but I get up at a quarter past."],
      ["Je me douche, je m'habille et je prends un café.", "I shower, get dressed and have a coffee."],
      ["Le soir, je m'occupe des enfants.", "In the evening I take care of the kids."],
      ["Je me couche vers onze heures.", "I go to bed around eleven."],
      ["Ne vous inquiétez pas, je m'en occupe.", "Don't worry, I'll take care of it."],
      ["Tournez à gauche au feu, puis continuez tout droit.", "Turn left at the light, then keep going straight."]
    ],
    task: "Explain to a new colleague how to get from your workplace to the nearest grocery store or bus stop, using at least five imperatives. Then describe your morning routine with six reflexive verbs."
  },
  vocab: [
    ["se réveiller", "to wake up"], ["se dépêcher", "to hurry"], ["s'inscrire (à)", "to sign up, register"], ["s'occuper de", "to take care of"],
    ["s'entendre avec", "to get along with"], ["s'inquiéter", "to worry"], ["se tromper", "to make a mistake"], ["se souvenir de", "to remember"],
    ["tout droit", "straight ahead"], ["à droite / à gauche", "on the right / left"], ["le feu (de circulation)", "traffic light"], ["le coin", "corner"]
  ],
  quiz: [
    { q: "\"We have to hurry.\"", o: ["Nous devons se dépêcher.", "Nous devons nous dépêcher.", "Nous nous devons dépêcher."], a: 1, why: "With an infinitive, the pronoun matches the subject: nous… nous dépêcher." },
    { q: "Negative imperative of <span class='fr'>Inquiète-toi</span>:", o: ["Ne inquiète-toi pas.", "Ne t'inquiète pas.", "Inquiète-toi ne pas."], a: 1, why: "In the negative, the pronoun returns before the verb: ne t'inquiète pas." },
    { q: "Imperative (tu) of <span class='fr'>écouter</span>:", o: ["Écoutes !", "Écoute !", "Tu écoutes !"], a: 1, why: "-er verbs drop the s in the tu imperative." },
    { q: "<span class='fr'>Je ___ bien avec mon patron.</span>", o: ["m'entends", "entends", "me entends"], a: 0, why: "s'entendre avec = to get along with; me → m' before a vowel." },
    { q: "\"Please note that…\" in a formal notice:", o: ["Sais que…", "Sachez que…", "Savez que…"], a: 1, why: "savoir has an irregular imperative: sache, sachons, sachez." }
  ],
});
