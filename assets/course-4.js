/* Course content, part 4: B1 structures and exam performance. */
window.COURSE = window.COURSE || { modules: [] };

window.COURSE.modules.push({
  id: "conditional",
  level: "B1",
  title: "The conditional: politeness, advice and hypotheses",
  subtitle: "Je voudrais, tu devrais, si j'avais… — the mood of requests, suggestions and imagined situations.",
  hours: "8–10 h",
  why: "<p>The conditional does three jobs B1 tasks reward directly: it makes requests polite (interaction tasks), it lets you give advice (<span class='fr'>tu devrais, il faudrait</span>), and it lets you argue about hypothetical situations (<span class='fr'>si on interdisait les voitures, l'air serait plus propre</span>). It's also how you soften opinions so they sound measured rather than blunt — which is exactly the tone a persuasive answer needs.</p>",
  goals: [
    "Form the conditional of any verb using the futur stems",
    "Make polite requests and give advice",
    "Use si + imparfait → conditionnel for hypotheses",
    "Distinguish the three si-clause patterns"
  ],
  lessons: [
    {
      title: "Formation: futur stem + imparfait endings",
      body: "<p>If you know the futur simple (Module 12), you already know the stems. Add the imparfait endings <b>-ais, -ais, -ait, -ions, -iez, -aient</b>.</p>",
      table: {
        head: ["", "aimer", "être (ser-)", "pouvoir (pourr-)"],
        rows: [
          ["je", "aimerais", "serais", "pourrais"],
          ["tu", "aimerais", "serais", "pourrais"],
          ["il / elle / on", "aimerait", "serait", "pourrait"],
          ["nous", "aimerions", "serions", "pourrions"],
          ["vous", "aimeriez", "seriez", "pourriez"],
          ["ils / elles", "aimeraient", "seraient", "pourraient"]
        ],
        say: [1, 2, 3],
        pron: true
      },
      after: "<p>The most useful forms to automate: <span class='fr'>je voudrais, j'aimerais, pourriez-vous, ce serait, il faudrait, tu devrais, on pourrait, ça me plairait</span>.</p>"
    },
    {
      title: "Politeness and softening",
      body: "<p>Swapping the present for the conditional turns a demand into a request, and a flat statement into a nuanced one.</p>",
      table: {
        head: ["Blunt (present)", "Polite / nuanced (conditional)"],
        rows: [
          ["Je veux un rendez-vous.", "Je voudrais un rendez-vous, s'il vous plaît."],
          ["Vous pouvez m'aider ?", "Pourriez-vous m'aider ?"],
          ["C'est une bonne idée.", "Ce serait une bonne idée."],
          ["Il faut changer ça.", "Il faudrait peut-être changer ça."],
          ["J'ai une question.", "J'aurais une question."]
        ],
        say: [0, 1]
      }
    },
    {
      title: "Giving advice and suggestions",
      body: "<ul><li><span class='fr'>Tu devrais / Vous devriez + infinitive</span> — you should.</li><li><span class='fr'>Tu pourrais / On pourrait + infinitive</span> — you could / we could.</li><li><span class='fr'>Il faudrait + infinitive</span> — one should, it would be necessary.</li><li><span class='fr'>À ta place, je + conditional</span> — if I were you.</li><li><span class='fr'>Ça vaudrait la peine de + infinitive</span> — it would be worth it.</li></ul>",
      examples: [
        ["Tu devrais t'inscrire à un cours du soir.", "You should sign up for an evening class."],
        ["À ta place, je parlerais directement au propriétaire.", "If I were you, I'd speak directly to the landlord."],
        ["On pourrait partager les frais de transport.", "We could share the transport costs."]
      ]
    },
    {
      title: "Hypotheses: the three si patterns",
      body: "<p>The tense after <span class='fr'>si</span> determines the tense in the main clause. There are three standard combinations — and one rule with no exceptions: <b>never put the conditional or futur right after si</b>.</p>",
      table: {
        head: ["Type", "si + …", "main clause", "Example"],
        rows: [
          ["Real / likely", "présent", "présent, futur or impératif", "Si tu as le temps, viens me voir."],
          ["Hypothetical (now/future)", "imparfait", "conditionnel présent", "Si j'avais plus de temps, je ferais du bénévolat."],
          ["Unreal past (regret)", "plus-que-parfait", "conditionnel passé", "Si j'avais su, je serais venu plus tôt."]
        ],
        say: [3]
      },
      after: "<p>The second pattern is the B1 workhorse for opinion tasks: <span class='fr'>Si le gouvernement réduisait le prix des transports en commun, moins de gens prendraient leur voiture.</span> The third (conditionnel passé = <span class='fr'>aurais/serais + participle</span>) is B1+; recognise it in reading and use it for one well-placed regret.</p>",
      tip: "Either clause can come first: <span class='fr'>Je ferais du bénévolat si j'avais plus de temps.</span> The tenses stay attached to their clauses."
    },
    {
      title: "Reported future and unconfirmed information",
      body: "<p>Two more uses you'll meet in reading and listening:</p><ul><li><b>Future in the past</b>: <span class='fr'>Il m'a dit qu'il viendrait.</span> (He told me he would come.) — see Module 17.</li><li><b>Unconfirmed news</b>: journalists use the conditional to report something not yet verified: <span class='fr'>Selon les premières informations, l'accident aurait fait deux blessés.</span> (According to early reports, the accident <em>reportedly</em> injured two people.) Reading questions sometimes test whether a fact is confirmed or not.</li></ul>"
    }
  ],
  mistakes: [
    ["Si j'aurais le temps, je viendrais.", "Si j'avais le temps, je viendrais.", "Never the conditional after si."],
    ["Si j'ai plus d'argent, j'achèterais une maison.", "Si j'avais plus d'argent, j'achèterais une maison.", "Conditionnel in the main clause ↔ imparfait after si."],
    ["Je veux un café. (to a server)", "Je voudrais un café.", "The conditional is the polite form for requests."],
    ["Tu dois voir un médecin. (as friendly advice)", "Tu devrais voir un médecin.", "devoir in the present is an obligation; devrais is advice."],
    ["je pouvrais, je voulerais", "je pourrais, je voudrais", "Same irregular stems as the futur."],
    ["j'aimerai (meaning \"I would like\")", "j'aimerais", "-ai is futur; -ais is conditional. It matters in writing."]
  ],
  sounds: {
    points: [
      { title: "Futur vs conditionnel", body: "<p>In standard French, futur <span class='fr'>-rai</span> ends in [ʁe] and conditionnel <span class='fr'>-rais</span> in [ʁɛ]. Many speakers merge them, so in listening rely on context (si + imparfait, politeness).</p>", say: ["je voudrai", "je voudrais", "je pourrai", "je pourrais", "je serai", "je serais"] },
      { title: "Polite requests: melody matters", body: "<p>A polite request has a gentle rise and a soft ending. Listen and copy the tone, not just the words.</p>", say: ["Pourriez-vous m'aider, s'il vous plaît ?", "J'aimerais prendre rendez-vous.", "Est-ce que ce serait possible ?"] }
    ]
  },
  speak: {
    lines: [
      ["Bonjour, je voudrais des renseignements sur vos cours du soir.", "Hello, I'd like some information about your evening classes."],
      ["Pourriez-vous me dire s'il reste des places ?", "Could you tell me if there are any spots left?"],
      ["Si j'avais plus de temps, je ferais du bénévolat.", "If I had more time, I'd volunteer."],
      ["À mon avis, il faudrait investir davantage dans les transports en commun.", "In my view, we should invest more in public transit."],
      ["Si les loyers étaient moins chers, les familles resteraient en ville.", "If rents were cheaper, families would stay in the city."],
      ["Tu devrais en parler à ton gestionnaire.", "You should talk to your manager about it."]
    ],
    task: "Answer out loud, 60 seconds each: What would you do if you won $100,000? What would you change about your city if you were mayor? A friend is stressed about the exam — give them four pieces of advice using four different structures (tu devrais, à ta place, il faudrait, tu pourrais)."
  },
  vocab: [
    ["à ta / votre place", "if I were you"], ["il faudrait", "we/one should"], ["ça vaudrait la peine", "it would be worth it"], ["davantage", "more"],
    ["réduire", "to reduce"], ["augmenter", "to increase"], ["investir", "to invest"], ["le bénévolat", "volunteering"],
    ["selon", "according to"], ["éventuellement", "possibly (false friend: not \"eventually\")"], ["un souhait", "a wish"], ["envisager", "to consider"]
  ],
  quiz: [
    { q: "<span class='fr'>Si j'___ le choix, je travaillerais de la maison.</span>", o: ["aurais", "avais", "ai"], a: 1, why: "Hypothesis: si + imparfait → conditionnel." },
    { q: "Most polite:", o: ["Je veux parler au directeur.", "Je voudrais parler au directeur.", "Je vais parler au directeur."], a: 1, why: "The conditional softens a request." },
    { q: "\"You should rest\" (friendly advice):", o: ["Tu dois te reposer.", "Tu devrais te reposer.", "Tu devras te reposer."], a: 1, why: "devrais = should (advice)." },
    { q: "<span class='fr'>S'il fait beau demain, nous ___ à la plage.</span>", o: ["irions", "irons", "allions"], a: 1, why: "Real condition: si + présent → futur." },
    { q: "In a news report, <span class='fr'>L'incendie aurait été causé par une cigarette</span> means the cause is…", o: ["confirmed", "reported but not confirmed", "impossible"], a: 1, why: "The journalistic conditional marks unverified information." }
  ],
  practice: [["Speaking task B: convince", "exam.html?s=speaking"], ["Opinions vocabulary", "quiz.html?set=vocab-opinions"]]
});

window.COURSE.modules.push({
  id: "relatives",
  level: "B1",
  title: "Relative pronouns: building longer sentences",
  subtitle: "Qui, que, où, dont, ce qui, ce que — join ideas the way B1 writers do.",
  hours: "6–8 h",
  why: "<p>Short, choppy sentences (<span class='fr'>J'ai un ami. Il habite à Gatineau. Il travaille au gouvernement.</span>) are a hallmark of A2 writing. Relative pronouns let you combine them into one fluent sentence — <span class='fr'>J'ai un ami qui habite à Gatineau et qui travaille au gouvernement</span> — which examiners reward as syntactic complexity. They also let you define and explain things when you lack a word (<span class='fr'>c'est l'endroit où on…</span>), a key speaking strategy.</p>",
  goals: [
    "Choose between qui and que by the role of the noun",
    "Use où for places and times",
    "Use dont with verbs and expressions taking de",
    "Use ce qui / ce que to mean \"what\" in the middle of a sentence"
  ],
  lessons: [
    {
      title: "Qui (subject) vs que (object)",
      body: "<p>The choice depends on the <b>role of the noun inside the relative clause</b>, not on whether it's a person or a thing (unlike English who/which).</p><ul><li><b>qui</b> = the noun is the <b>subject</b> of the next verb. It's usually followed directly by a verb. <span class='fr'>Le collègue <u>qui</u> m'a aidé</span> (the colleague helped me). Never elided: <span class='fr'>qui arrive</span>.</li><li><b>que (qu')</b> = the noun is the <b>object</b>; another subject follows. <span class='fr'>Le collègue <u>que</u> j'ai rencontré</span> (I met the colleague). Elides: <span class='fr'>qu'il</span>.</li></ul>",
      examples: [
        ["J'ai trouvé un appartement qui est proche du métro.", "I found an apartment that is close to the subway."],
        ["L'appartement que j'ai visité hier est trop cher.", "The apartment (that) I visited yesterday is too expensive."],
        ["C'est la collègue qu'on m'a présentée lundi.", "That's the colleague I was introduced to on Monday."]
      ],
      tip: "English often drops \"that\": <em>the job I want</em>. French never can: <span class='fr'>le poste que je veux</span>."
    },
    {
      title: "Où: place and time",
      body: "<p><span class='fr'>Où</span> replaces a place <b>and also a moment in time</b> — where English uses \"when\".</p>",
      examples: [
        ["La ville où j'habite est très multiculturelle.", "The city where I live is very multicultural."],
        ["Je me souviens du jour où je suis arrivé au Canada.", "I remember the day (when) I arrived in Canada."],
        ["C'est le moment où tout a changé.", "That's the moment when everything changed."]
      ]
    },
    {
      title: "Dont: replacing de + noun",
      body: "<p><span class='fr'>Dont</span> replaces a noun introduced by <b>de</b>. It's needed with verbs and expressions built with de: <span class='fr'>parler de, avoir besoin de, avoir peur de, se souvenir de, s'occuper de, être fier de, être responsable de</span> — and for possession (\"whose\").</p>",
      examples: [
        ["C'est le document dont j'ai besoin.", "That's the document I need. (avoir besoin de)"],
        ["Le projet dont je vous ai parlé commence en mai.", "The project I told you about starts in May. (parler de)"],
        ["C'est une réussite dont je suis fier.", "It's an achievement I'm proud of. (être fier de)"],
        ["J'ai une voisine dont le fils est médecin.", "I have a neighbour whose son is a doctor."]
      ],
      tip: "Test: rebuild the simple sentence. <span class='fr'>J'ai besoin <b>du</b> document</span> — there's a de, so <span class='fr'>dont</span>."
    },
    {
      title: "Ce qui, ce que, ce dont: \"what\" inside a sentence",
      body: "<p>When \"what\" means \"the thing that\" (not a question), use <span class='fr'>ce</span> + the relative. The qui/que/dont choice follows the same rules as above.</p>",
      table: {
        head: ["Form", "Role", "Example"],
        rows: [
          ["ce qui", "subject", "Ce qui me plaît, c'est l'ambiance. (What I like is the atmosphere.)"],
          ["ce que", "object", "Je ne comprends pas ce que vous voulez dire."],
          ["ce dont", "with de", "C'est exactement ce dont j'ai besoin."]
        ],
        say: [2]
      },
      after: "<p>The pattern <span class='fr'>Ce qui / Ce que …, c'est…</span> is a powerful way to <b>highlight</b> an idea in speaking and writing: <span class='fr'>Ce que je trouve difficile, c'est l'hiver. Ce qui compte, c'est l'expérience.</span></p>"
    },
    {
      title: "After prepositions: lequel, laquelle…",
      body: "<p>After prepositions other than de (avec, pour, dans, sur, chez…), use <span class='fr'>qui</span> for people and <span class='fr'>lequel / laquelle / lesquels / lesquelles</span> for things (agreeing with the noun). With à they contract: <span class='fr'>auquel, auxquels</span>.</p><p>At B1, recognise them in texts and use the common ones: <span class='fr'>la personne avec qui je travaille</span>, <span class='fr'>la raison pour laquelle je suis venu</span>, <span class='fr'>l'entreprise dans laquelle je travaille</span>.</p>"
    }
  ],
  mistakes: [
    ["Le livre qui j'ai lu", "Le livre que j'ai lu", "A new subject (je) follows → que."],
    ["La personne que m'a aidé", "La personne qui m'a aidé", "The noun is the subject of aider → qui."],
    ["Le jour quand je suis arrivé", "Le jour où je suis arrivé", "Time → où, not quand."],
    ["Le document que j'ai besoin", "Le document dont j'ai besoin", "avoir besoin de → dont."],
    ["Je ne sais pas qu'est-ce que tu veux.", "Je ne sais pas ce que tu veux.", "Indirect \"what\" = ce que, not the question form."],
    ["Le poste je veux", "Le poste que je veux", "French never drops the relative pronoun."]
  ],
  speak: {
    lines: [
      ["J'ai une amie qui travaille dans un hôpital à Sherbrooke.", "I have a friend who works in a hospital in Sherbrooke."],
      ["C'est le quartier où nous avons acheté notre première maison.", "That's the neighbourhood where we bought our first house."],
      ["Le cours que je suis en ligne est très bien organisé.", "The course I'm taking online is very well organised."],
      ["Voici les documents dont vous aurez besoin.", "Here are the documents you'll need."],
      ["Ce qui me manque le plus, c'est la cuisine de ma mère.", "What I miss most is my mother's cooking."],
      ["Ce que je trouve difficile, c'est de comprendre les gens quand ils parlent vite.", "What I find hard is understanding people when they talk fast."]
    ],
    task: "Describe three people in your life and one place you love, using a different relative pronoun for each (qui, que, où, dont). Then give two opinions with the highlighting pattern: <span class='fr'>Ce qui me plaît / Ce que je trouve difficile au Canada, c'est…</span>"
  },
  quiz: [
    { q: "<span class='fr'>C'est un collègue ___ je respecte beaucoup.</span>", o: ["qui", "que", "dont"], a: 1, why: "je is the subject; the colleague is the object → que." },
    { q: "<span class='fr'>Voici le formulaire ___ tu as besoin.</span>", o: ["que", "dont", "où"], a: 1, why: "avoir besoin de → dont." },
    { q: "<span class='fr'>Je me souviens de l'année ___ j'ai commencé à travailler.</span>", o: ["quand", "où", "que"], a: 1, why: "Time reference in a relative clause → où." },
    { q: "<span class='fr'>___ m'inquiète, c'est le coût du logement.</span>", o: ["Ce que", "Ce qui", "Qu'est-ce qui"], a: 1, why: "\"What\" is the subject of m'inquiète, and it's not a question → ce qui." },
    { q: "<span class='fr'>La personne avec ___ je travaille est très sympathique.</span>", o: ["que", "qui", "laquelle"], a: 1, why: "After a preposition, people take qui (lequel/laquelle is possible but qui is standard for people)." }
  ],
  practice: [["Writing task 2 (opinion)", "exam.html?s=writing"]]
});

window.COURSE.modules.push({
  id: "subjunctive",
  level: "B1",
  title: "The subjunctive: necessity, wishes, feelings and doubt",
  subtitle: "Il faut que, je veux que, je suis content que, bien que — the triggers you actually need at B1.",
  hours: "8–10 h",
  why: "<p>The present subjunctive is part of the B1 grammar inventory used by French teaching frameworks, and it appears constantly in everyday expressions — <span class='fr'>il faut que tu viennes, je veux que ça marche, avant que je parte</span>. You don't need every rule: you need the common triggers, the handful of irregular forms, and the ability to avoid it when you're unsure. Used correctly once or twice in a writing task, it's a clear signal of B1-level range.</p>",
  goals: [
    "Form the present subjunctive of regular and the 8 key irregular verbs",
    "Recognise the four families of triggers",
    "Know when to use an infinitive instead",
    "Handle penser / croire in positive vs negative"
  ],
  lessons: [
    {
      title: "Formation",
      body: "<p>Take the <b>ils/elles form of the present</b>, remove <b>-ent</b>, and add <b>-e, -es, -e, -ions, -iez, -ent</b>. For nous and vous, the form is the same as the imparfait.</p>",
      table: {
        head: ["", "parler (ils parlent)", "finir (ils finissent)", "prendre (ils prennent)"],
        rows: [
          ["que je", "parle", "finisse", "prenne"],
          ["que tu", "parles", "finisses", "prennes"],
          ["qu'il / elle / on", "parle", "finisse", "prenne"],
          ["que nous", "parlions", "finissions", "prenions"],
          ["que vous", "parliez", "finissiez", "preniez"],
          ["qu'ils / elles", "parlent", "finissent", "prennent"]
        ],
        say: [1, 2, 3]
      },
      after: "<p>For regular -er verbs, the je/tu/il/ils forms look and sound exactly like the present — so you're often using the subjunctive correctly without noticing.</p>"
    },
    {
      title: "The irregular forms you need",
      body: "",
      table: {
        head: ["Verb", "que je", "que nous", "qu'ils"],
        rows: [
          ["être", "sois", "soyons", "soient"],
          ["avoir", "aie", "ayons", "aient"],
          ["aller", "aille", "allions", "aillent"],
          ["faire", "fasse", "fassions", "fassent"],
          ["pouvoir", "puisse", "puissions", "puissent"],
          ["savoir", "sache", "sachions", "sachent"],
          ["vouloir", "veuille", "voulions", "veuillent"],
          ["venir", "vienne", "venions", "viennent"]
        ],
        say: [1]
      },
      tip: "Learn them in the phrases you'll actually use: <span class='fr'>il faut que je sois, il faut que j'aie, il faut que j'aille, il faut que je fasse, pour que tu puisses, avant que tu viennes</span>."
    },
    {
      title: "The four families of triggers",
      body: "<p>The subjunctive appears in a <span class='fr'>que</span> clause after expressions of:</p>",
      table: {
        head: ["Family", "Common triggers", "Example"],
        rows: [
          ["Necessity / obligation", "il faut que, il est nécessaire que, il est important que, il vaut mieux que", "Il faut que je fasse renouveler mon permis."],
          ["Will / wish / request", "vouloir que, souhaiter que, préférer que, demander que, exiger que", "Mon patron veut que je sois là à 8 h."],
          ["Emotion", "être content / triste / surpris que, avoir peur que, regretter que", "Je suis content que tu puisses venir."],
          ["Doubt / possibility", "douter que, il est possible que, ne pas penser que, ne pas croire que", "Je ne pense pas que ce soit une bonne idée."]
        ],
        say: [2]
      },
      after: "<p><b>Plus some conjunctions</b>: <span class='fr'>pour que</span> (so that), <span class='fr'>avant que</span> (before), <span class='fr'>jusqu'à ce que</span> (until), <span class='fr'>bien que</span> (although), <span class='fr'>à condition que</span> (provided that), <span class='fr'>sans que</span> (without). But <b>après que</b> takes the indicative.</p>"
    },
    {
      title: "Same subject? Use an infinitive",
      body: "<p>The subjunctive needs <b>two different subjects</b>. When the subject is the same, use an infinitive instead — it's simpler and more natural:</p>",
      table: {
        head: ["Two subjects → subjunctive", "Same subject → infinitive"],
        rows: [
          ["Je veux que tu réussisses.", "Je veux réussir."],
          ["Il est content que sa fille vienne.", "Il est content de venir."],
          ["Je t'appelle avant que tu partes.", "Je t'appelle avant de partir."],
          ["J'économise pour que mes enfants puissent étudier.", "J'économise pour pouvoir étudier."]
        ],
        say: [0, 1]
      },
      after: "<p><span class='fr'>Il faut</span> can do both: <span class='fr'>Il faut partir</span> (one must leave — general) / <span class='fr'>Il faut que tu partes</span> (you must leave — specific).</p>"
    },
    {
      title: "Penser, croire, espérer: the opinion trap",
      body: "<p>Affirmative opinion verbs express what you consider true, so they take the <b>indicative</b>. In the negative or a question, they express doubt and usually take the <b>subjunctive</b>.</p>",
      examples: [
        ["Je pense que c'est une bonne solution.", "I think it's a good solution. (indicative)"],
        ["Je ne pense pas que ce soit une bonne solution.", "I don't think it's a good solution. (subjunctive)"],
        ["Je crois qu'il a raison. / Je ne crois pas qu'il ait raison.", "I think he's right. / I don't think he's right."],
        ["J'espère que tu vas bien.", "I hope you're well. (espérer → always indicative)"]
      ],
      tip: "Can't remember the form under exam pressure? Rephrase: <span class='fr'>À mon avis, ce n'est pas une bonne solution</span> says the same thing with no subjunctive at all. Avoiding a structure you'd get wrong is a legitimate strategy."
    }
  ],
  mistakes: [
    ["Il faut que je vais au bureau.", "Il faut que j'aille au bureau.", "il faut que → subjunctive of aller."],
    ["Je veux que je parte.", "Je veux partir.", "Same subject → infinitive."],
    ["Je pense que ce soit vrai.", "Je pense que c'est vrai.", "Affirmative penser → indicative."],
    ["Je ne crois pas que c'est possible.", "Je ne crois pas que ce soit possible.", "Negative opinion → subjunctive."],
    ["J'espère que tu sois bien.", "J'espère que tu vas bien.", "espérer takes the indicative."],
    ["Il faut que tu fais attention.", "Il faut que tu fasses attention.", "faire → fasse."],
    ["après qu'il soit parti", "après qu'il est parti", "après que takes the indicative (though many speakers use the subjunctive)."]
  ],
  sounds: {
    points: [
      { title: "Hear the subjunctive", body: "<p>With irregular verbs the subjunctive has a distinct sound. Listen after <span class='fr'>il faut que</span>.</p>", say: ["il faut que je sois là", "il faut que j'aille", "il faut que tu fasses", "pour que tu puisses", "je ne pense pas que ce soit vrai", "avant que tu viennes"] }
    ]
  },
  speak: {
    lines: [
      ["Il faut que je fasse reconnaître mes diplômes.", "I have to get my degrees recognised."],
      ["Mon employeur veut que je suive une formation en sécurité.", "My employer wants me to take a safety training."],
      ["Je suis content que mes enfants puissent étudier ici.", "I'm glad my children can study here."],
      ["Je ne pense pas que ce soit trop tard pour changer de carrière.", "I don't think it's too late to change careers."],
      ["Je t'explique tout avant que tu partes.", "I'll explain everything before you leave."],
      ["Bien que ce soit difficile, j'aime beaucoup ma nouvelle vie.", "Although it's hard, I really love my new life."]
    ],
    task: "Give advice to a newcomer arriving in Canada next month: say five things <span class='fr'>il faut qu'il/elle fasse</span>, one thing you're happy about (<span class='fr'>je suis content que…</span>), and one thing you don't think is true about Canada (<span class='fr'>je ne pense pas que…</span>)."
  },
  quiz: [
    { q: "<span class='fr'>Il faut que vous ___ une pièce d'identité.</span> (avoir)", o: ["avez", "ayez", "auriez"], a: 1, why: "il faut que → subjunctive: que vous ayez." },
    { q: "<span class='fr'>Je pense que le télétravail ___ l'avenir.</span>", o: ["est", "soit", "serait"], a: 0, why: "Affirmative penser → indicative." },
    { q: "\"I want to succeed.\"", o: ["Je veux que je réussisse.", "Je veux réussir.", "Je veux que réussir."], a: 1, why: "Same subject → infinitive." },
    { q: "<span class='fr'>Je suis surpris qu'il ___ déjà parti.</span>", o: ["est", "soit", "sera"], a: 1, why: "Emotion + que + different subject → subjunctive." },
    { q: "<span class='fr'>Bien qu'il ___ froid, on sort.</span>", o: ["fait", "fasse", "ferait"], a: 1, why: "bien que always takes the subjunctive." }
  ],
  practice: [["Writing task 2 (opinion)", "exam.html?s=writing"]],
  sources: [
    ["Cap sur le FLE — Le subjonctif présent (B1).", "https://capsurlefle.com/fiche-de-grammaire-subjonctif-present-b1/"]
  ]
});

window.COURSE.modules.push({
  id: "argue",
  level: "B1",
  title: "Connectors, arguments and register",
  subtitle: "Structure an opinion, defend it, concede a point, and switch between formal and informal French.",
  hours: "8–10 h",
  why: "<p>This is the module that most directly converts grammar into points. The TCF writing task 3, the TEF writing section B and the argumentative speaking tasks all assess whether you can <b>present a viewpoint, support it with reasons and examples, acknowledge the other side, and conclude</b> — in a register that fits the situation. Connectors are the visible skeleton examiners look for; register errors (writing <span class='fr'>salut</span> to an employer) are penalised.</p>",
  goals: [
    "Use connectors of cause, consequence, contrast, concession, addition and conclusion",
    "Build a four-part argument: position → reasons → concession → conclusion",
    "Write formal emails and letters with the right openings and closings",
    "Recognise informal and Quebec speech in listening"
  ],
  lessons: [
    {
      title: "The connector toolkit",
      body: "<p>Aim to use connectors from at least four families in any opinion text. Vary them — repeating <span class='fr'>mais</span> five times shows limited range.</p>",
      table: {
        head: ["Function", "Everyday", "More formal (B1+)"],
        rows: [
          ["Cause", "parce que, car, comme", "puisque, étant donné que, grâce à (+), à cause de (−)"],
          ["Consequence", "donc, alors, c'est pourquoi", "par conséquent, ainsi, c'est la raison pour laquelle"],
          ["Contrast", "mais, par contre", "cependant, pourtant, en revanche, toutefois, alors que"],
          ["Concession", "même si", "bien que (+ subj.), il est vrai que… mais, certes… cependant"],
          ["Addition", "et, aussi, de plus", "en outre, par ailleurs, d'une part… d'autre part"],
          ["Example", "par exemple", "notamment, comme le montre…, prenons l'exemple de…"],
          ["Conclusion", "bref, pour finir", "en conclusion, pour conclure, en somme, finalement"]
        ],
        say: [1, 2]
      },
      tip: "<span class='fr'>Grâce à</span> introduces a positive cause, <span class='fr'>à cause de</span> a negative one: <span class='fr'>grâce à mon cours, à cause de la neige</span>. <span class='fr'>Car</span> can't start a sentence; <span class='fr'>comme</span> must start one."
    },
    {
      title: "The four-part argument",
      body: "<p>This structure works for both the writing opinion tasks and the speaking \"point de vue\" task:</p><ol><li><b>Introduce and take a position</b> — rephrase the question, then state your view: <span class='fr'>On se demande souvent si… Personnellement, je pense que…</span></li><li><b>Two or three reasons, each with an example</b> — <span class='fr'>D'abord… Par exemple… Ensuite… De plus…</span></li><li><b>Concede the other side, then counter it</b> — <span class='fr'>Il est vrai que… Cependant…</span>. This is what separates a B1 argument from an A2 list of opinions.</li><li><b>Conclude</b> — restate your position in new words, perhaps with a recommendation: <span class='fr'>En conclusion, … Il faudrait donc…</span></li></ol>",
      examples: [
        ["On se demande souvent s'il vaut mieux vivre en ville ou à la campagne.", "People often wonder whether it's better to live in the city or the countryside."],
        ["Personnellement, je préfère la ville, pour deux raisons principales.", "Personally, I prefer the city, for two main reasons."],
        ["D'abord, on y trouve plus facilement du travail. Par exemple, …", "First, it's easier to find work there. For example, …"],
        ["Il est vrai que la vie y coûte plus cher. Cependant, on peut se passer de voiture.", "It's true that life is more expensive there. However, you can do without a car."],
        ["En conclusion, malgré le coût, la ville offre plus d'opportunités.", "In conclusion, despite the cost, the city offers more opportunities."]
      ]
    },
    {
      title: "Expressing opinions with nuance",
      body: "",
      table: {
        head: ["Purpose", "Expressions"],
        rows: [
          ["Give your view", "à mon avis, selon moi, d'après moi, personnellement, je pense / je trouve / j'estime que"],
          ["Be certain", "je suis convaincu(e) que, il est évident que, sans aucun doute"],
          ["Be cautious", "il me semble que, j'ai l'impression que, dans une certaine mesure, ça dépend de"],
          ["Agree", "je suis d'accord avec…, c'est vrai que…, tout à fait"],
          ["Disagree politely", "je ne suis pas tout à fait d'accord, je comprends ce point de vue, mais…, au contraire"],
          ["Weigh both sides", "d'un côté… de l'autre, l'avantage / l'inconvénient, c'est que…"]
        ],
        say: [1]
      }
    },
    {
      title: "Register: formal vs informal",
      body: "<p>Examiners check that your language fits the task — a message to a friend vs a letter to a company.</p>",
      table: {
        head: ["", "Informal (friend, family)", "Formal (employer, landlord, company)"],
        rows: [
          ["You", "tu", "vous"],
          ["Opening", "Salut Marc, / Coucou !", "Madame, Monsieur, / Bonjour Madame Tremblay,"],
          ["Purpose", "Je t'écris pour te dire que…", "Je vous écris afin de… / Je me permets de vous contacter au sujet de…"],
          ["Request", "Tu peux m'envoyer… ?", "Pourriez-vous m'envoyer… ? / Je vous serais reconnaissant(e) de…"],
          ["Closing", "À bientôt ! / Bisous / À plus !", "Dans l'attente de votre réponse, je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées."],
          ["Quebec business email", "—", "Bonjour Madame… / … Cordialement, / Salutations,"]
        ]
      },
      after: "<p>In Quebec workplaces, emails are typically less ceremonious than in France: <span class='fr'>Bonjour Madame Côté,</span> … <span class='fr'>Cordialement,</span> is standard and correct. For formal complaint or application letters, keep the full formula.</p>"
    },
    {
      title: "Speaking fluently: fillers and repair",
      body: "<p>Silence is what costs you most in speaking tasks. Native speakers fill thinking time with discourse markers — using them buys you time and sounds natural:</p><ul><li><b>Thinking</b>: <span class='fr'>Alors… Bon… Eh bien… Voyons… Comment dire…</span></li><li><b>Clarifying</b>: <span class='fr'>En fait… C'est-à-dire que… Je veux dire…</span></li><li><b>When you lack a word</b>: describe it — <span class='fr'>C'est une sorte de…, c'est le truc qui sert à…, c'est l'endroit où…</span></li><li><b>Checking understanding</b>: <span class='fr'>Si je comprends bien, vous voulez dire que… ?</span></li></ul>",
      tip: "Informal Quebec markers you'll hear in listening: <span class='fr'>là</span> (at the end of phrases), <span class='fr'>genre</span>, <span class='fr'>fait que</span> (so), <span class='fr'>pis</span> (and then). Understand them; don't use them in the exam."
    }
  ],
  mistakes: [
    ["Car il fait froid, je reste.", "Comme il fait froid, je reste. / Je reste car il fait froid.", "car can't start a sentence; comme must."],
    ["Grâce à la tempête, le vol est annulé.", "À cause de la tempête, le vol est annulé.", "grâce à is for positive causes."],
    ["Mais… mais… mais…", "cependant, pourtant, en revanche", "Vary connectors to show range."],
    ["Salut Monsieur Tremblay,", "Bonjour Monsieur Tremblay, / Monsieur,", "Register mismatch in formal writing."],
    ["En conclusion, je pense que oui.", "En conclusion, même si…, je reste convaincu que…", "A conclusion should restate the position with its main reason."],
    ["Je suis d'accord avec (no object)", "Je suis d'accord avec vous / avec cette idée.", "d'accord avec needs a complement; alone: Je suis d'accord."]
  ],
  speak: {
    lines: [
      ["À mon avis, le télétravail présente plus d'avantages que d'inconvénients.", "In my view, remote work has more advantages than drawbacks."],
      ["D'une part, on gagne du temps, puisqu'on ne se déplace plus.", "On one hand, you save time since you no longer commute."],
      ["D'autre part, on peut mieux concilier travail et vie de famille.", "On the other, you can better balance work and family life."],
      ["Il est vrai qu'on peut se sentir isolé. Cependant, il suffit d'aller au bureau une fois par semaine.", "It's true you can feel isolated. However, going to the office once a week is enough."],
      ["En conclusion, je reste convaincu que c'est l'avenir du travail.", "In conclusion, I remain convinced it's the future of work."]
    ],
    task: "Speak for 3 minutes on: <em>Faut-il interdire les téléphones cellulaires à l'école ?</em> Follow the four-part structure, use connectors from at least five families, and include one concession with <span class='fr'>il est vrai que… cependant</span>. Record it and count your connectors."
  },
  vocab: [
    ["un avantage / un inconvénient", "an advantage / a drawback"], ["un argument", "an argument, a point"], ["soutenir", "to support (an idea)"], ["convaincre", "to convince"],
    ["concilier", "to reconcile, balance"], ["il suffit de", "all it takes is"], ["se passer de", "to do without"], ["malgré", "despite"],
    ["afin de / afin que", "in order to / so that"], ["à long terme", "in the long run"], ["un enjeu", "an issue, what's at stake"], ["favoriser", "to encourage, favour"]
  ],
  quiz: [
    { q: "Which connector introduces a concession?", o: ["par conséquent", "il est vrai que… cependant", "donc"], a: 1, why: "Concession acknowledges the other side before countering it." },
    { q: "<span class='fr'>___ la neige, l'école est fermée.</span>", o: ["Grâce à", "À cause de", "Car"], a: 1, why: "A negative cause → à cause de." },
    { q: "Best closing for a letter to a property management company:", o: ["Bisous,", "À plus !", "Dans l'attente de votre réponse, veuillez agréer mes salutations distinguées."], a: 2, why: "Formal register requires a formal closing." },
    { q: "Which sentence is grammatical?", o: ["Car je suis malade, je ne viens pas.", "Comme je suis malade, je ne viens pas.", "Je ne viens pas comme je suis malade."], a: 1, why: "comme opens the sentence; car can't." },
    { q: "You can't remember the word for \"stapler\". Best strategy in a speaking task:", o: ["Stop and apologise", "Say it in English", "C'est l'objet qui sert à attacher des feuilles."], a: 2, why: "Describing with a relative clause keeps you talking and shows range." }
  ],
  practice: [["Writing task 2 and 3", "exam.html?s=writing"], ["Opinions vocabulary", "quiz.html?set=vocab-opinions"]]
});

window.COURSE.modules.push({
  id: "reported",
  level: "B1",
  title: "The plus-que-parfait and reported speech",
  subtitle: "Talk about what had already happened, and report what someone said, asked or told you.",
  hours: "6–8 h",
  why: "<p>Two B1 structures that make narratives and reports precise. The plus-que-parfait places one past event before another (<span class='fr'>quand je suis arrivé, le train était déjà parti</span>). Reported speech is everywhere in listening and reading tasks — voicemails that report messages, articles that quote people — and lets you retell conversations in speaking tasks.</p>",
  goals: [
    "Form and use the plus-que-parfait",
    "Report statements, questions and orders",
    "Shift tenses and time expressions correctly in reported speech"
  ],
  lessons: [
    {
      title: "The plus-que-parfait: the past before the past",
      body: "<p>Form: <b>avoir or être in the imparfait + past participle</b>. The same être verbs and agreement rules as the passé composé apply.</p>",
      table: {
        head: ["", "finir", "partir"],
        rows: [
          ["j'", "avais fini", "étais parti(e)"],
          ["tu", "avais fini", "étais parti(e)"],
          ["il / elle", "avait fini", "était parti(e)"],
          ["nous", "avions fini", "étions parti(e)s"],
          ["vous", "aviez fini", "étiez parti(e)(s)"],
          ["ils / elles", "avaient fini", "étaient parti(e)s"]
        ],
        say: [1, 2]
      },
      examples: [
        ["Quand je suis arrivé à la gare, le train était déjà parti.", "When I got to the station, the train had already left."],
        ["Je n'avais jamais vu autant de neige avant de venir au Canada.", "I had never seen so much snow before coming to Canada."],
        ["Elle a réussi l'examen parce qu'elle s'était bien préparée.", "She passed the exam because she had prepared well."]
      ],
      tip: "It also forms the unreal past with si (Module 13): <span class='fr'>Si j'avais su, je serais venu.</span> — If I had known, I would have come."
    },
    {
      title: "Reporting statements",
      body: "<p>Introduce with <span class='fr'>dire que, expliquer que, répondre que, annoncer que, affirmer que</span>. If the reporting verb is in the <b>present</b>, keep the original tense. If it's in the <b>past</b>, shift the tenses back:</p>",
      table: {
        head: ["Direct speech", "Reported (after a past verb: Il a dit que…)"],
        rows: [
          ["présent — « Je suis malade. »", "imparfait — il était malade"],
          ["passé composé — « J'ai fini. »", "plus-que-parfait — il avait fini"],
          ["futur — « Je viendrai. »", "conditionnel — il viendrait"],
          ["futur proche — « Je vais appeler. »", "aller in imparfait — il allait appeler"],
          ["imparfait / conditionnel", "no change"]
        ],
        say: [0, 1]
      },
      after: "<p><b>Pronouns and possessives shift too</b>: <span class='fr'>« Je t'appelle »</span> → <span class='fr'>Il a dit qu'il m'appelait</span>. <b>Time words shift</b>: <span class='fr'>aujourd'hui → ce jour-là, demain → le lendemain, hier → la veille, la semaine prochaine → la semaine suivante</span>.</p>"
    },
    {
      title: "Reporting questions and orders",
      body: "<ul><li><b>Yes/no questions</b> → <span class='fr'>si</span>: <span class='fr'>« Vous êtes disponible ? » → Elle m'a demandé si j'étais disponible.</span></li><li><b>Question words stay</b>, with statement order: <span class='fr'>« Où habitez-vous ? » → Il m'a demandé où j'habitais.</span></li><li><b>Qu'est-ce que → ce que; qu'est-ce qui → ce qui</b>: <span class='fr'>« Qu'est-ce que tu veux ? » → Il m'a demandé ce que je voulais.</span></li><li><b>Orders</b> → <span class='fr'>de + infinitive</span>: <span class='fr'>« Rappelez-moi. » → Elle m'a demandé de la rappeler.</span></li></ul>",
      examples: [
        ["Le propriétaire m'a dit qu'il réparerait le chauffage le lendemain.", "The landlord told me he would fix the heating the next day."],
        ["La réceptionniste m'a demandé si j'avais ma carte d'assurance maladie.", "The receptionist asked me if I had my health card."],
        ["Mon gestionnaire m'a demandé de terminer le rapport avant vendredi.", "My manager asked me to finish the report before Friday."]
      ]
    }
  ],
  mistakes: [
    ["Il a dit qu'il viendra.", "Il a dit qu'il viendrait.", "Futur → conditionnel after a past reporting verb."],
    ["Elle m'a demandé est-ce que j'étais libre.", "Elle m'a demandé si j'étais libre.", "Reported yes/no questions use si."],
    ["Il m'a demandé qu'est-ce que je voulais.", "Il m'a demandé ce que je voulais.", "qu'est-ce que → ce que."],
    ["Il m'a dit que je rappelle.", "Il m'a dit de rappeler.", "Reported orders use de + infinitive."],
    ["Quand je suis arrivé, le film a déjà commencé.", "Quand je suis arrivé, le film avait déjà commencé.", "An earlier completed event → plus-que-parfait."]
  ],
  speak: {
    lines: [
      ["Hier, mon voisin m'a dit qu'il déménagerait le mois prochain.", "Yesterday my neighbour told me he'd be moving next month."],
      ["Il m'a demandé si je connaissais quelqu'un qui cherchait un appartement.", "He asked me if I knew anyone looking for an apartment."],
      ["Je lui ai répondu que ma collègue en cherchait un.", "I told him my colleague was looking for one."],
      ["Il m'a demandé de lui donner son numéro.", "He asked me to give him her number."],
      ["Quand elle l'a appelé, il avait déjà trouvé un locataire !", "When she called him, he had already found a tenant!"]
    ],
    task: "Retell a recent conversation (a phone call, a meeting, a talk with a neighbour) in reported speech for 90 seconds: report at least two statements, one yes/no question, one open question and one request. End with something that <em>had already</em> happened."
  },
  quiz: [
    { q: "« Je finirai demain. » → Il a dit qu'il…", o: ["finira le lendemain", "finirait le lendemain", "finissait demain"], a: 1, why: "futur → conditionnel; demain → le lendemain." },
    { q: "« Avez-vous vos documents ? » → Elle m'a demandé…", o: ["si j'avais mes documents", "est-ce que j'avais mes documents", "que j'avais mes documents"], a: 0, why: "Yes/no question → si + statement order, with tense shift." },
    { q: "\"I had already eaten when they arrived.\"", o: ["J'ai déjà mangé quand ils sont arrivés.", "J'avais déjà mangé quand ils sont arrivés.", "Je mangeais déjà quand ils arrivaient."], a: 1, why: "The earlier completed action → plus-que-parfait." },
    { q: "« Fermez la porte. » → Il nous a demandé…", o: ["que nous fermons la porte", "de fermer la porte", "si nous fermions la porte"], a: 1, why: "Orders → de + infinitive." }
  ],
  practice: [["Listening mock (reported messages)", "exam.html?s=listening"]]
});

window.COURSE.modules.push({
  id: "exam",
  level: "Exam",
  title: "Exam performance: TCF Canada and TEF Canada",
  subtitle: "Task-by-task strategy, what examiners score, and a four-week plan for the final stretch.",
  hours: "Ongoing, final 4–6 weeks",
  why: "<p>Reaching B1 and <em>scoring</em> NCLC 5 are related but different skills. The exam rewards specific behaviours: answering the exact task, filling the time, hitting the word count, showing range with the structures from Modules 9–17, and managing the clock in comprehension sections. This module turns everything you've learned into exam technique.</p><p>Formats below reflect published TCF Canada and TEF Canada descriptions at the time of writing — always check the current format with your test centre before booking.</p>",
  goals: [
    "Know the format and timing of every section on both tests",
    "Apply a strategy for each listening, reading, writing and speaking task",
    "Understand what examiners assess in writing and speaking",
    "Follow a structured plan for the last four weeks"
  ],
  lessons: [
    {
      title: "Listening (compréhension orale)",
      body: "<ul><li><b>Read the question and options before the audio starts.</b> Predict what you'll hear: a price? a reason? an opinion?</li><li><b>Identify the situation first</b> — who is speaking, where, and why — in the first few seconds (the roadmap checklist item L1). Context eliminates wrong options.</li><li><b>Write numbers down</b> as you hear them; don't hold them in memory.</li><li><b>Watch for traps</b>: options that repeat words from the audio but change the meaning; negations (<span class='fr'>ne… plus, ne… que</span>); opinion vs fact; the first thing mentioned vs the final decision (<span class='fr'>« Finalement, on a choisi… »</span>).</li><li><b>Some recordings play only once</b> (notably on the TEF). Train with single plays in the <a href='exam.html?s=listening'>listening mock</a>.</li><li><b>Don't leave blanks</b> — unless your test's current instructions say wrong answers lose points, an educated guess can only help. Check the rules in your convocation.</li></ul>"
    },
    {
      title: "Reading (compréhension écrite)",
      body: "<ul><li><b>Budget about 90 seconds per question.</b> Questions usually get harder as you go — don't burn time early.</li><li><b>Read the question first, then scan</b> the document for the relevant part. You rarely need every word.</li><li><b>Identify the document type</b> (notice, ad, email, article) and its purpose; many questions ask \"what is the aim of this document?\"</li><li><b>Distinguish fact from opinion</b> and certainty from possibility (the journalistic conditional, Module 13).</li><li><b>Beware synonyms</b>: the right answer usually paraphrases the text, while wrong answers copy its exact words.</li></ul>"
    },
    {
      title: "Writing (expression écrite)",
      body: "",
      table: {
        head: ["Test", "Tasks", "Length", "Strategy"],
        rows: [
          ["TCF Canada (60 min, 3 tasks)", "1: a short message (invite, inform, ask)", "60–120 words", "Answer every point in the prompt; correct register; greeting and sign-off."],
          ["", "2: an article, blog post or narrative for readers", "120–150 words", "Narrate with passé composé + imparfait; describe; give your impression."],
          ["", "3: compare two short documents and give your opinion", "120–180 words", "Part 1: summarise both views neutrally (40–60 words). Part 2: argue your view (80–120)."],
          ["TEF Canada (60 min, 2 sections)", "A: continue a news story (fait divers)", "80 words minimum", "Keep the style of a news article; logical events; past tenses."],
          ["", "B: a letter or post defending a point of view", "200 words minimum", "Four-part argument with examples; formal register; connectors."]
        ]
      },
      after: "<p><b>What's assessed</b> (in both tests, broadly): completing the task as set; coherence and organisation (connectors, paragraphs); range and accuracy of vocabulary; range and accuracy of grammar. <b>Practical rules:</b> plan for 3–5 minutes before writing; leave 5 minutes to proofread for agreement (adjectives, être participles), accents and verb endings; never copy sentences from the prompt; stay within the word range.</p>",
      tip: "Keep a personal checklist of your five most frequent errors (from your drill and mock-exam results) and proofread for exactly those. It's more effective than a general re-read."
    },
    {
      title: "Speaking (expression orale)",
      body: "",
      table: {
        head: ["Test", "Task", "Timing", "Strategy"],
        rows: [
          ["TCF Canada (≈12 min, 3 tasks)", "1: guided interview — talk about yourself", "~2 min, no preparation", "Family, work, hobbies, plans — with details and at least three tenses."],
          ["", "2: interaction — get information in an everyday situation", "~5 min 30 incl. 2 min preparation", "Plan 8–10 varied questions; follow up on answers; polite openings and closings."],
          ["", "3: express a point of view on a question", "~4 min 30, no preparation", "Position → reasons with examples → concession → conclusion. Keep talking."],
          ["TEF Canada (15 min, 2 sections)", "A: obtain information (e.g. about an ad) by phone", "~5 min", "Ask many well-formed questions in the vous register."],
          ["", "B: present a document and convince a friend", "~10 min", "Summarise, give arguments, answer objections, use the conditional."]
        ]
      },
      after: "<p><b>What's assessed</b>: task completion, fluency (few long pauses), coherence, vocabulary range, grammatical accuracy and range, and pronunciation/intelligibility. <b>Behaviours that score:</b> fill the whole time; use discourse markers instead of silence (Module 16); self-correct briefly when you notice an error; paraphrase when you lack a word; ask the examiner to repeat if needed — <span class='fr'>Pardon, pourriez-vous répéter la question ?</span> is perfectly acceptable.</p>"
    },
    {
      title: "The last four weeks",
      body: "",
      table: {
        head: ["Week", "Focus"],
        rows: [
          ["4 weeks out", "Sit every mock section once under exam conditions. List your weakest section and your five most frequent errors."],
          ["3 weeks out", "Target the weakest section daily. Re-do the modules behind your error list. Write one full timed task every other day."],
          ["2 weeks out", "Full speaking simulations with a timer, recorded. Listening with single plays only. Retake all module checks (spaced review)."],
          ["Final week", "Light review only: connectors, irregular verbs, your error checklist. One last full mock early in the week. Sleep well — memory consolidation needs it."]
        ]
      },
      after: "<p><b>On the day:</b> arrive early with your ID; read every instruction; in speaking, greet the examiner and take a breath before answering; in writing, count words roughly as you go.</p>"
    }
  ],
  mistakes: [
    ["Answering the topic you prepared instead of the question asked", "Rephrase the question in your first sentence, then answer it", "Task completion is scored first."],
    ["Stopping after 90 seconds in a 4-minute task", "Plan three reasons and examples — enough material for the full time", "Fluency and development are assessed across the whole task."],
    ["Writing 250 words for a 120–150 task", "Stay within the range", "Going far over can cost points and time."],
    ["Only simple present-tense sentences", "Show range: past, future, conditional, relative clauses, one subjunctive", "Grammatical range is part of the score."],
    ["Spending 5 minutes on one hard reading question", "Guess, flag, move on", "Every question is worth the same; later ones may be easier for you."],
    ["Memorising a whole model essay", "Memorise flexible phrases and structures", "Examiners spot memorised text that doesn't fit the prompt."]
  ],
  speak: {
    intro: "Useful exam phrases for opening, managing and closing speaking tasks. Shadow them until they come out automatically — they buy you thinking time under pressure.",
    lines: [
      ["Bonjour, je vous appelle au sujet de votre annonce.", "Hello, I'm calling about your ad."],
      ["Pardon, pourriez-vous répéter la question, s'il vous plaît ?", "Sorry, could you repeat the question, please?"],
      ["C'est une question intéressante. Alors, à mon avis…", "That's an interesting question. So, in my view…"],
      ["Je vais vous donner un exemple concret.", "Let me give you a concrete example."],
      ["Il est vrai que… mais d'un autre côté…", "It's true that… but on the other hand…"],
      ["Pour résumer, je dirais que…", "To sum up, I'd say that…"],
      ["Merci beaucoup pour votre temps. Bonne journée !", "Thank you very much for your time. Have a good day!"]
    ],
    task: "Do a full TCF-style speaking simulation now: 2 minutes presenting yourself; 3½ minutes asking about a yoga class (after 2 minutes of preparation); 4½ minutes on <em>Est-il préférable de vivre près de son travail ?</em> Use the <a href='exam.html?s=speaking'>speaking mock</a> for timers and recording."
  },
  quiz: [
    { q: "In a reading question, the option that copies exact words from the text is…", o: ["usually correct", "often a trap — correct answers tend to paraphrase", "always wrong"], a: 1, why: "Test writers paraphrase correct answers and use word-matching in distractors." },
    { q: "In the TCF writing task 3, the first part asks you to…", o: ["give your opinion immediately", "summarise both documents' viewpoints neutrally", "write a formal letter"], a: 1, why: "Part 1 presents both views; part 2 is your argued opinion." },
    { q: "You don't understand the examiner's question. Best move:", o: ["Guess and start talking", "Say nothing", "Politely ask them to repeat it"], a: 2, why: "Asking for repetition is normal interaction and costs nothing." },
    { q: "Three weeks before the exam, the most useful activity is…", o: ["learning a new grammar topic", "targeting your weakest section and most frequent errors", "reading native novels"], a: 1, why: "Targeted practice on known weaknesses gives the biggest score gains late in preparation." },
    { q: "A speaking answer that ends after one minute of a four-minute task…", o: ["is fine if it's accurate", "loses points for development and fluency", "gets extra points for concision"], a: 1, why: "Filling the time with developed ideas is part of what's assessed." }
  ],
  practice: [["Full mock exam", "exam.html"], ["Skill checklist", "roadmap.html#skills"], ["Score bands", "roadmap.html#scores"]],
  sources: [
    ["TCF Canada — expression orale format.", "https://tcf-canada.ca/expression-orale/"],
    ["Réussir TCF Canada — expression orale methodology.", "https://reussir-tcfcanada.com/expression-orale-la-methodologie/"],
    ["IRCC — approved language tests.", "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/language-test.html"],
    ["Niveaux de compétence linguistique canadiens (NCLC).", "https://www.language.ca/resourcesexpertise/on-clb/"]
  ]
});
