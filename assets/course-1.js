/* Course content, part 1: method, sounds, first building blocks.
   Each module follows the schema rendered by learn.html. HTML is allowed
   in text fields; <span class='fr'> marks French inside English prose. */
window.COURSE = window.COURSE || { modules: [] };

window.COURSE.modules.push({
  "id": "method",
  "level": "Start",
  "title": "How to learn French fast (memory tips)",
  "subtitle": "Four research-backed habits that make grammar and words stick.",
  "why": "<p>Most people who stall in French aren't short of motivation or material. They're using methods that <em>feel</em> productive — rereading notes, highlighting, bingeing one grammar topic, collecting word lists — but that research shows produce weak, short-lived learning. Getting the method right first multiplies the value of every hour you spend afterwards.</p><p>This module summarises the findings from memory research and second-language acquisition research that the rest of the course is built on, and turns them into a daily and weekly routine you can follow.</p>",
  "goals": [
    "Test yourself instead of rereading",
    "Space your reviews",
    "Mix topics once you know them",
    "Plan a realistic timeline to B1"
  ],
  "lessons": [
    {
      "title": "Test yourself (instead of rereading)",
      "body": "<p>Recalling something from memory makes it stick far better than reading it again (Roediger &amp; Karpicke, 2006). It feels harder — that's why it works.</p><ul><li>Cover a table and write it from memory, then check.</li><li>Answer the Check before looking back at the lesson.</li><li>Do your <a href='review.html'>Daily review</a> every day.</li></ul>",
      "tip": "A wrong answer followed by the correction still counts as learning — test yourself before you feel ready."
    },
    {
      "title": "Space your reviews (day 1, day 3, day 21)",
      "body": "<p>Spreading reviews out beats cramming (Cepeda et al., 2006). The further away your test, the longer the gaps can be.</p>",
      "table": {
        "head": [
          "When",
          "What to do"
        ],
        "rows": [
          [
            "Day 1",
            "Work through the module and pass the check"
          ],
          [
            "Day 2–3",
            "Do your Daily review: the module's words and anything you missed come back"
          ],
          [
            "Day 21",
            "Re-read the Watch out notes and retake the check"
          ],
          [
            "End of a level",
            "Take the level checkpoint, which mixes every lesson"
          ]
        ]
      },
      "tip": "Coming back when you've half-forgotten feels slow — that effort is what makes it last."
    },
    {
      "title": "Mix topics (once you know them)",
      "body": "<p>Mixing grammar topics in one session causes more mistakes today but better results a week later (Nakata &amp; Suzuki, 2019). Learn one topic at a time while it's new, then mix.</p>",
      "tip": "The Daily review and the level checkpoints mix topics for you."
    },
    {
      "title": "How long it takes (hours to B1)",
      "body": "<p>Schools plan roughly <b>350–400 guided hours</b> to reach B1. Self-study is slower, so plan on the high end.</p>",
      "table": {
        "head": [
          "Starting point",
          "At 1 hour a day",
          "At 2 hours a day"
        ],
        "rows": [
          [
            "True beginner",
            "12–15 months",
            "6–8 months"
          ],
          [
            "Around A2",
            "5–7 months",
            "3–4 months"
          ],
          [
            "Around B1, need exam technique",
            "6–10 weeks",
            "4–6 weeks"
          ]
        ]
      },
      "after": "<p><b>A simple 45-minute day:</b> 10 min Daily review · 25 min the next lesson · 10 min writing a few sentences with today's grammar.</p>",
      "tip": "Little and often wins: 45 minutes every day beats 5 hours on Sunday."
    }
  ],
  "mistakes": [
    [
      "Rereading notes until they feel familiar",
      "Covering them and recalling",
      "Familiarity is not memory. Recall is what makes it stick (testing effect)."
    ],
    [
      "Learning 50 isolated words a day",
      "Learning 10–15 words inside sentences",
      "Words learned in context are easier to recall and use correctly — gender and prepositions come with them."
    ],
    [
      "Finishing one grammar topic before starting the next, forever",
      "Mixing old topics into every session",
      "Interleaving improves retention and the ability to choose the right form."
    ]
  ],
  "speak": {
    "intro": "These are the phrases that keep a conversation going when you're lost — learn them first, because they turn every conversation into a lesson. Shadow each one until you can say it without looking.",
    "lines": [
      [
        "Pardon, pouvez-vous répéter, s'il vous plaît ?",
        "Sorry, could you repeat that, please?"
      ],
      [
        "Pouvez-vous parler plus lentement ?",
        "Could you speak more slowly?"
      ],
      [
        "Je ne comprends pas.",
        "I don't understand."
      ],
      [
        "Qu'est-ce que ça veut dire ?",
        "What does that mean?"
      ],
      [
        "Comment dit-on « deadline » en français ?",
        "How do you say \"deadline\" in French?"
      ],
      [
        "Comment ça s'écrit ?",
        "How is that spelled?"
      ],
      [
        "J'apprends le français pour immigrer au Canada.",
        "I'm learning French to immigrate to Canada."
      ],
      [
        "Je suis en train d'améliorer mon français.",
        "I'm working on improving my French."
      ]
    ],
    "task": "Record yourself saying all eight lines from memory. Play it back and compare with the audio. Circle the two lines that sounded least like the model and shadow them five more times."
  },
  "quiz": [
    {
      "q": "You have 30 minutes to study a conjugation table. Which approach produces the best retention a week later?",
      "o": [
        "Reading it carefully three times",
        "Reading it once, then writing it from memory and checking, twice",
        "Copying it out five times"
      ],
      "a": 1,
      "why": "Retrieval practice — recalling and then checking — beats re-studying for long-term memory (Roediger & Karpicke, 2006)."
    },
    {
      "q": "Your exam is in three months. When should you review a module you finish today?",
      "o": [
        "Every day this week, then never",
        "In a couple of days, then about a week later, then a few weeks later",
        "The night before the exam"
      ],
      "a": 1,
      "why": "Spaced reviews with growing gaps beat massed review; longer retention needs longer gaps (Cepeda et al., 2006)."
    },
    {
      "q": "Mixing passé composé, imparfait and futur exercises in one session (rather than one at a time) tends to…",
      "o": [
        "feel harder but improve results a week later",
        "feel easier and improve results",
        "make no difference"
      ],
      "a": 0,
      "why": "Interleaving produced more errors in training but better delayed-test results (Nakata & Suzuki, 2019)."
    }
  ],
  "sources": [
    [
      "Nation, I.S.P. (2007). The four strands. Innovation in Language Learning and Teaching, 1(1).",
      "https://www.tandfonline.com/doi/abs/10.2167/illt039.0"
    ],
    [
      "Roediger, H. L. & Karpicke, J. D. (2006). Test-enhanced learning. Psychological Science, 17(3), 249–255.",
      "http://psychnet.wustl.edu/memory/wp-content/uploads/2018/04/Roediger-Karpicke-2006_PPS.pdf"
    ],
    [
      "Cepeda, N. J., Pashler, H., Vul, E., Wixted, J. T. & Rohrer, D. (2006). Distributed practice in verbal recall tasks. Psychological Bulletin, 132, 354–380.",
      "https://augmentingcognition.com/assets/Cepeda2006.pdf"
    ],
    [
      "Nakata, T. & Suzuki, Y. (2019). Mixing grammar exercises facilitates long-term retention. The Modern Language Journal, 103, 629–647.",
      "https://onlinelibrary.wiley.com/doi/10.1111/modl.12581"
    ],
    [
      "Nation, I.S.P. (2006). How large a vocabulary is needed for reading and listening? Canadian Modern Language Review, 63(1).",
      "https://www.lextutor.ca/cover/papers/nation_2006.pdf"
    ],
    [
      "Swain, M. — the output hypothesis and its noticing function.",
      "https://en.wikipedia.org/wiki/Comprehensible_output"
    ],
    [
      "Hamada, Y. (2016). Shadowing: Who benefits and how? Language Teaching Research, 20(1).",
      "https://journals.sagepub.com/doi/abs/10.1177/1362168815597504"
    ],
    [
      "Alliance Française — guided hours per CEFR level.",
      "https://www.alliancefrancaise.ca/en/community/blog/how-long-does-it-take-to-learn-french/"
    ],
    [
      "U.S. Foreign Service Institute — language learning timelines.",
      "https://www.state.gov/national-foreign-affairs-training-center/foreign-language-training"
    ]
  ]
});

window.COURSE.modules.push({
  "id": "sounds",
  "level": "Start",
  "title": "French pronunciation (vowels, silent letters, liaison)",
  "subtitle": "How written French turns into sound — the rules that let you read any word.",
  "why": "<p>Pronunciation isn't polish you add at the end. If you can't hear the difference between <span class='fr'>tu</span> and <span class='fr'>tout</span>, or between <span class='fr'>ils sont</span> and <span class='fr'>ils ont</span>, listening sections become guesswork — and examiners grade <em>intelligibility</em> in the speaking task. Learning the sound system early also makes every word you meet afterwards easier to remember, because you can say it.</p><p>French spelling is far more regular than English once you know the rules: the same letter combination almost always gives the same sound.</p>",
  "goals": [
    "Know which letters are silent",
    "Recognise nasal vowels and French-only vowels",
    "Apply liaison and elision"
  ],
  "lessons": [
    {
      "title": "Rhythm (even syllables, stress at the end)",
      "body": "<p>English stresses one syllable per word. French gives every syllable about the same length and stresses only the <b>last syllable of a word group</b>: <span class='fr'>Je voudrais un café</span> = five even beats, the last one slightly longer.</p><p>Questions rise at the end: <span class='fr'>Tu viens ?</span> ↗</p>",
      "examples": [
        [
          "Je voudrais un café.",
          "I'd like a coffee. (five even beats, stress on -fé)"
        ],
        [
          "La fin de semaine, je travaille dans un restaurant.",
          "On weekends, I work in a restaurant. (rise on -maine, fall on -rant)"
        ]
      ],
      "tip": "Only the last syllable of each word group is stressed — never the first."
    },
    {
      "title": "French-only vowels (u, ou, é, è)",
      "body": "<p>French vowels are <b>pure</b>: the tongue and lips hold still. English glides (<em>day</em> is really \"de-ee\"; <em>no</em> is \"no-oo\"), and carrying that glide into French is the biggest marker of an English accent.</p>",
      "table": {
        "head": [
          "Spelling",
          "Sound",
          "How to make it",
          "Examples"
        ],
        "rows": [
          [
            "u, û",
            "<span class='ipa'>[y]</span>",
            "Say \"ee\", keep your tongue there, then round your lips tightly as if to whistle",
            "tu, rue, sûr, bus"
          ],
          [
            "ou, où",
            "<span class='ipa'>[u]</span>",
            "Like English \"oo\" in <em>food</em>, lips very rounded, no glide",
            "tout, roue, où, nous"
          ],
          [
            "é, -er, -ez, et",
            "<span class='ipa'>[e]</span>",
            "Like the start of English \"day\", but cut off before the \"ee\" glide",
            "été, parler, vous avez, et"
          ],
          [
            "è, ê, ai, -et",
            "<span class='ipa'>[ɛ]</span>",
            "Like \"e\" in <em>bed</em>, mouth a little more open",
            "mère, fête, lait, mais, jouet"
          ],
          [
            "eu, œu (open)",
            "<span class='ipa'>[ø] / [œ]</span>",
            "Say \"é\" and round your lips; more open before a pronounced consonant",
            "deux, bleu / peur, sœur, jeune"
          ],
          [
            "e (unstressed)",
            "<span class='ipa'>[ə]</span>",
            "A short, relaxed \"uh\" — often dropped entirely in speech",
            "le, je, petit (→ p'tit)"
          ],
          [
            "au, eau, ô, o ending a syllable",
            "<span class='ipa'>[o]</span>",
            "Rounded \"oh\" with no \"w\" glide. But o before a pronounced consonant is open [ɔ]: porte, bonne, école",
            "beau, chaud, mot"
          ],
          [
            "oi",
            "<span class='ipa'>[wa]</span>",
            "Always \"wa\"",
            "moi, trois, voiture"
          ]
        ]
      },
      "tip": "u and ou are different words: <span class='fr'>tu</span> (you) ≠ <span class='fr'>tout</span> (all)."
    },
    {
      "title": "Nasal vowels (an, on, in)",
      "body": "<p>A vowel followed by <b>n</b> or <b>m</b> in the same syllable is nasal — air goes through the nose and the n/m isn't pronounced.</p>",
      "table": {
        "head": [
          "Spelling",
          "Sound",
          "Examples"
        ],
        "rows": [
          [
            "an, am, en, em",
            "<span class='ipa'>[ɑ̃]</span> (Quebec often closer to <span class='ipa'>[ã]</span>)",
            "enfant, temps, chambre, ensemble"
          ],
          [
            "on, om",
            "<span class='ipa'>[ɔ̃]</span>",
            "bon, nom, maison, nombre"
          ],
          [
            "in, im, ain, ein, (y)en after i/é",
            "<span class='ipa'>[ɛ̃]</span>",
            "vin, important, pain, plein, bien, européen"
          ],
          [
            "un, um",
            "<span class='ipa'>[œ̃]</span> or <span class='ipa'>[ɛ̃]</span>",
            "un, lundi, parfum"
          ]
        ]
      },
      "after": "<p><b>The rule:</b> it's nasal only when the n/m is <em>not</em> followed by a vowel or a second n/m: <span class='fr'>bon</span> (nasal) vs <span class='fr'>bonne</span> (not). That's how masculine and feminine sound different: <span class='fr'>canadien / canadienne</span>.</p>",
      "examples": [
        [
          "un bon vin blanc",
          "a good white wine (all four nasal)"
        ],
        [
          "Il est canadien. Elle est canadienne.",
          "He's Canadian. She's Canadian. (nasal vs not)"
        ]
      ],
      "tip": "n or m + a vowel → not nasal. n or m + a consonant or the end of the word → nasal."
    },
    {
      "title": "Consonants (r, h, ch, gn, ç, s/ss)",
      "body": "<ul><li><b>r</b> is made at the back of the throat, like a soft gargle.</li><li><b>h</b> is always silent: <span class='fr'>hôpital</span>. <b>th</b> = t: <span class='fr'>thé</span>.</li><li><b>ch</b> = sh; <b>gn</b> = ny: <span class='fr'>montagne</span>.</li><li><b>c, g</b> are soft before e, i, y; <b>ç</b> keeps c soft: <span class='fr'>ça</span>.</li><li><b>s</b> between vowels = z; <b>ss</b> = s: <span class='fr'>poison / poisson</span>.</li></ul>",
      "tip": "One s between vowels buzzes (z), two hiss (s): désert vs dessert."
    },
    {
      "title": "Silent letters (final consonants, -ent)",
      "body": "<p>Final consonants are usually silent: <span class='fr'>petit, grand, trop, vous</span>. Except <b>C, R, F, L</b> — remember <b>CaReFuL</b>: <span class='fr'>sac, mer, neuf, sel</span> (but -er verbs keep the r silent: <span class='fr'>parler</span>).</p><p>A final -e makes the consonant before it heard: <span class='fr'>petit → petite</span>. The verb ending <b>-ent</b> is silent: <span class='fr'>ils parlent</span> sounds like <span class='fr'>il parle</span>.</p>",
      "table": {
        "head": [
          "Written",
          "Said",
          "What's silent"
        ],
        "rows": [
          [
            "ils parlent",
            "<span class='ipa'>[il paʁl]</span>",
            "-ent"
          ],
          [
            "les enfants",
            "<span class='ipa'>[le.zɑ̃.fɑ̃]</span>",
            "final -ts (the s of les is linked)"
          ],
          [
            "un petit garçon",
            "<span class='ipa'>[œ̃ pti gaʁsɔ̃]</span>",
            "final t, and the e of petit in speech"
          ],
          [
            "un sac, la mer",
            "<span class='ipa'>[sak] [mɛʁ]</span>",
            "nothing — C and R are pronounced"
          ],
          [
            "six, dix",
            "<span class='ipa'>[sis] [dis]</span>",
            "said alone; before a consonant: six livres [si]"
          ]
        ],
        "say": [
          0
        ]
      },
      "tip": "CaReFuL: c, r, f, l are the final letters you usually pronounce."
    },
    {
      "title": "Linking words (liaison, l', j')",
      "body": "<p>French links words so two vowel sounds don't collide. <b>Liaison:</b> a silent final consonant is pronounced before a vowel — s/x sound like z: <span class='fr'>les‿amis, nous‿avons</span>.</p>",
      "table": {
        "cap": "When to link",
        "head": [
          "Rule",
          "Examples"
        ],
        "rows": [
          [
            "<b>Obligatory</b>: determiner + noun or adjective",
            "les‿amis, un‿enfant, mon‿école, deux‿heures"
          ],
          [
            "<b>Obligatory</b>: pronoun + verb, and verb + pronoun",
            "nous‿avons, ils‿ont, on‿arrive, allez-y"
          ],
          [
            "<b>Obligatory</b>: after short prepositions and adverbs",
            "chez‿eux, en‿avion, très‿intéressant, plus‿important"
          ],
          [
            "<b>Forbidden</b>: after <span class='fr'>et</span>",
            "toi et | elle (never \"et-t-elle\")"
          ],
          [
            "<b>Forbidden</b>: before an aspirated h",
            "les | héros, en | haut, les | haricots"
          ],
          [
            "<b>Forbidden</b>: after a singular noun",
            "un étudiant | anglais"
          ],
          [
            "<b>Optional</b>: most other cases — more linking sounds more formal",
            "je suis‿allé / je suis | allé"
          ]
        ]
      },
      "after": "<p><b>Elision:</b> short words drop their vowel before a vowel: <span class='fr'>j'aime, l'ami, n'est, qu'il</span> — compulsory in writing too.</p>",
      "examples": [
        [
          "Ils‿ont deux‿enfants.",
          "They have two children. (two liaisons)"
        ],
        [
          "Ils sont deux.",
          "There are two of them. (no liaison: s-sound, not z)"
        ]
      ],
      "tip": "ils‿ont (z — they have) vs ils sont (s — they are): the only difference is z vs s."
    }
  ],
  "mistakes": [
    [
      "Pronouncing the s in <span class='fr'>Paris</span>, <span class='fr'>trois</span>, <span class='fr'>vous</span>",
      "Final consonants silent (except C, R, F, L)",
      "Saying final letters is the most common beginner error and can make words unrecognisable."
    ],
    [
      "<span class='fr'>tu</span> said like English \"too\"",
      "Lips rounded, tongue forward: <span class='ipa'>[ty]</span>",
      "\"too\" is <span class='fr'>tout</span> (all) — a different word."
    ],
    [
      "<span class='fr'>ils parlent</span> with \"-ent\" pronounced",
      "<span class='ipa'>[il paʁl]</span>",
      "The verb ending -ent is always silent."
    ],
    [
      "Pronouncing the h in <span class='fr'>hôtel</span>",
      "<span class='ipa'>[otɛl]</span>, and <span class='fr'>l'hôtel</span>",
      "French h is never pronounced."
    ],
    [
      "Stressing the first syllable: <span class='fr'>RES-taurant</span>",
      "Even syllables, stress at the end: <span class='fr'>res-tau-RANT</span>",
      "English word stress makes French hard to follow."
    ],
    [
      "<span class='fr'>vous | avez</span> with a gap",
      "<span class='fr'>vous‿avez</span> <span class='ipa'>[vu.za.ve]</span>",
      "Pronoun + verb liaison is obligatory."
    ],
    [
      "<span class='fr'>je aime</span>, <span class='fr'>le hôpital</span>",
      "<span class='fr'>j'aime</span>, <span class='fr'>l'hôpital</span>",
      "Elision is compulsory before a vowel or mute h."
    ]
  ],
  "speak": {
    "lines": [
      [
        "Bonjour, je m'appelle Sara. J'habite à Montréal.",
        "Hello, my name is Sara. I live in Montreal."
      ],
      [
        "Tu as vu la rue où nous habitons ?",
        "Did you see the street where we live? (u / ou)"
      ],
      [
        "Mon enfant a un bon ami canadien.",
        "My child has a good Canadian friend. (nasals + liaison)"
      ],
      [
        "Ils ont deux enfants, mais ils sont très occupés.",
        "They have two children, but they're very busy."
      ],
      [
        "Le poisson est délicieux, le dessert aussi.",
        "The fish is delicious, the dessert too. (s / ss)"
      ],
      [
        "Elle arrive à huit heures avec Hélène.",
        "She arrives at eight with Hélène. (enchaînement)"
      ],
      [
        "Mardi, il fait vingt degrés à Québec.",
        "On Tuesday it's twenty degrees in Quebec City."
      ]
    ],
    "task": "Pick the three lines with the sounds you find hardest. Record each one, then listen back at half attention — as if you were a stranger. Could someone tell <span class='fr'>tu</span> from <span class='fr'>tout</span> and <span class='fr'>ils ont</span> from <span class='fr'>ils sont</span> in your recording? Repeat until yes."
  },
  "quiz": [
    {
      "q": "How many letters are pronounced at the end of <span class='fr'>ils parlent</span>?",
      "o": [
        "All of -ent",
        "Only the t",
        "None of -ent is pronounced"
      ],
      "a": 2,
      "why": "The third-person plural ending -ent is always silent: ils parlent sounds like il parle."
    },
    {
      "q": "Which pair differs only by liaison [z] vs [s]?",
      "o": [
        "ils ont / ils sont",
        "tu / tout",
        "bon / bonne"
      ],
      "a": 0,
      "why": "ils‿ont has a [z] liaison; ils sont starts the verb with a real [s]."
    },
    {
      "q": "Why is the first vowel of <span class='fr'>bonne</span> not nasal?",
      "o": [
        "Because it's feminine",
        "Because the n is followed by another n and a vowel",
        "Because of the final e only"
      ],
      "a": 1,
      "why": "A vowel is nasal only when its n/m isn't followed by a vowel or another n/m."
    },
    {
      "q": "Which liaison is forbidden?",
      "o": [
        "les‿amis",
        "toi et‿elle",
        "nous‿avons"
      ],
      "a": 1,
      "why": "Never link after et."
    },
    {
      "q": "Which final letter is usually pronounced?",
      "o": [
        "The s in trois",
        "The c in sac",
        "The t in petit"
      ],
      "a": 1,
      "why": "CaReFuL: c, r, f and l are usually pronounced at the end of a word."
    }
  ],
  "sources": [
    [
      "Liaison en français — règles obligatoires, interdites et facultatives.",
      "https://fr.wikipedia.org/wiki/Liaison_en_fran%C3%A7ais"
    ],
    [
      "Office québécois de la langue française — l'affrication.",
      "https://vitrinelinguistique.oqlf.gouv.qc.ca/24467/la-prononciation/phenomenes-phonetiques/laffrication"
    ],
    [
      "Usito — La prononciation du français québécois.",
      "https://usito.usherbrooke.ca/articles/th%C3%A9matiques/dumas_1"
    ],
    [
      "Hamada, Y. (2019). Shadowing: What is it? How to use it. RELC Journal.",
      "https://journals.sagepub.com/doi/full/10.1177/0033688218771380"
    ]
  ]
});

window.COURSE.modules.push({
  "id": "basics",
  "level": "A1",
  "title": "Être, avoir and articles (je suis, j'ai, le, un, du)",
  "subtitle": "The two verbs every sentence needs, noun gender, and the little words before nouns.",
  "why": "<p><span class='fr'>Être</span> (to be) and <span class='fr'>avoir</span> (to have) are the two most frequent verbs in French and they do double duty: they're also the helpers that build the passé composé, the most important past tense for B1. And every French noun has a gender that changes the articles and adjectives around it, so learning nouns <em>with</em> their article from day one saves you thousands of small mistakes later.</p>",
  "goals": [
    "Use tu, vous and on correctly",
    "Conjugate être and avoir",
    "Use avoir for age, hunger and feelings",
    "Pick the right article: le, un, du, de"
  ],
  "lessons": [
    {
      "title": "Subject pronouns (je, tu, vous, on)",
      "body": "<p><span class='fr'>Tu</span> = one person you know well. <span class='fr'>Vous</span> = polite, or more than one person — use it in the exam and whenever unsure.</p><p><span class='fr'>On</span> means \"we\" in everyday French and takes the il/elle form: <span class='fr'>On va au cinéma ?</span></p>",
      "table": {
        "head": [
          "Pronoun",
          "Meaning",
          "Note"
        ],
        "rows": [
          [
            "je (j')",
            "I",
            "j' before a vowel sound: j'ai, j'habite"
          ],
          [
            "tu",
            "you (informal, one person)",
            ""
          ],
          [
            "il / elle / on",
            "he / she / we (informal), people",
            "on takes the same verb form as il"
          ],
          [
            "nous",
            "we",
            "more formal or written than on"
          ],
          [
            "vous",
            "you (polite, or plural)",
            "the safe default with adults"
          ],
          [
            "ils / elles",
            "they",
            "ils for any group with at least one masculine noun"
          ]
        ]
      },
      "tip": "Not sure whether to say tu or vous? Say vous."
    },
    {
      "title": "Être and avoir (suis, ai, est, a)",
      "body": "<p>Both are irregular — memorise each form together with its pronoun.</p>",
      "table": {
        "head": [
          "",
          "être (to be)",
          "avoir (to have)"
        ],
        "rows": [
          [
            "je",
            "suis",
            "ai"
          ],
          [
            "tu",
            "es",
            "as"
          ],
          [
            "il / elle / on",
            "est",
            "a"
          ],
          [
            "nous",
            "sommes",
            "avons"
          ],
          [
            "vous",
            "êtes",
            "avez"
          ],
          [
            "ils / elles",
            "sont",
            "ont"
          ]
        ],
        "say": [
          1,
          2
        ],
        "pron": true
      },
      "tip": "Look-alikes: il est (he is) / il a (he has); ils sont (they are) / ils ont (they have)."
    },
    {
      "title": "Avoir where English says “be” (faim, froid, 30 ans)",
      "body": "<p>Age, hunger, temperature and needs use <b>avoir + noun</b>: <span class='fr'>j'ai 30 ans, j'ai froid</span> — never <span class='fr'>je suis froid</span>.</p>",
      "table": {
        "head": [
          "French",
          "English"
        ],
        "rows": [
          [
            "avoir 30 ans",
            "to be 30 years old"
          ],
          [
            "avoir faim / soif",
            "to be hungry / thirsty"
          ],
          [
            "avoir chaud / froid",
            "to be (feel) hot / cold"
          ],
          [
            "avoir sommeil",
            "to be sleepy"
          ],
          [
            "avoir peur (de)",
            "to be afraid (of)"
          ],
          [
            "avoir raison / tort",
            "to be right / wrong"
          ],
          [
            "avoir besoin de",
            "to need"
          ],
          [
            "avoir envie de",
            "to feel like, to want"
          ],
          [
            "avoir mal à la tête",
            "to have a headache"
          ],
          [
            "il y a",
            "there is / there are"
          ]
        ],
        "say": [
          0
        ]
      },
      "examples": [
        [
          "J'ai trente-deux ans et j'ai deux enfants.",
          "I'm thirty-two and I have two children."
        ],
        [
          "Tu as faim ? Il y a du pain dans la cuisine.",
          "Are you hungry? There's bread in the kitchen."
        ]
      ],
      "tip": "English \"I am + a feeling or an age\" is usually French j'ai."
    },
    {
      "title": "Gender (masculine or feminine nouns)",
      "body": "<p>Always learn a noun with its article. Endings give strong clues:</p>",
      "table": {
        "head": [
          "Usually masculine",
          "Examples",
          "Usually feminine",
          "Examples"
        ],
        "rows": [
          [
            "-age",
            "le fromage, le voyage (but la page, la plage, l'image f.)",
            "-tion, -sion",
            "la situation, la décision"
          ],
          [
            "-ment",
            "le logement, le gouvernement",
            "-té",
            "la santé, la société, la liberté (but l'été, le côté m.)"
          ],
          [
            "-eau",
            "le bureau, le bateau (but l'eau f., la peau)",
            "-ure",
            "la voiture, la culture"
          ],
          [
            "-isme",
            "le tourisme",
            "-ette, -elle",
            "la baguette, la poubelle"
          ],
          [
            "-er, -ier",
            "le boulanger, le cahier",
            "-ence, -ance",
            "la science, la chance"
          ],
          [
            "-oir",
            "le soir, le couloir",
            "-ie",
            "la vie, la pharmacie"
          ]
        ]
      },
      "tip": "-tion, -té, -ure → feminine (except l'été, le côté). -age, -ment, -eau → usually masculine."
    },
    {
      "title": "Articles (le, un, du, de)",
      "body": "<p>French nouns almost always need a small word in front: <b>the</b> thing, <b>a</b> thing, or <b>some</b> of something.</p>",
      "table": {
        "head": [
          "",
          "Masculine",
          "Feminine",
          "Before a vowel",
          "Plural"
        ],
        "rows": [
          [
            "Definite (the / in general)",
            "le",
            "la",
            "l'",
            "les"
          ],
          [
            "Indefinite (a, some countable)",
            "un",
            "une",
            "un / une",
            "des"
          ],
          [
            "Partitive (some, an amount of)",
            "du",
            "de la",
            "de l'",
            "des"
          ]
        ]
      },
      "after": "<ul><li>General likes use le/la/les: <span class='fr'>J'aime le café.</span></li><li>An amount uses du/de la: <span class='fr'>Je bois du café.</span></li><li>After a negation, un/une/des/du/de la → <b>de</b>: <span class='fr'>pas de voiture</span>. le/la/les don't change (<span class='fr'>je n'aime pas le café</span>), and nothing changes after être (<span class='fr'>ce n'est pas un problème</span>).</li><li>After a quantity → <b>de</b>: <span class='fr'>beaucoup de travail</span></li><li>à + le = <b>au</b>, de + le = <b>du</b>: <span class='fr'>au bureau, le prix du loyer</span></li></ul>",
      "examples": [
        [
          "J'aime le thé, mais aujourd'hui je bois du café.",
          "I like tea, but today I'm drinking coffee."
        ],
        [
          "Il n'y a pas de place de stationnement.",
          "There's no parking spot."
        ]
      ],
      "tip": "Negative = de: J'ai une voiture → Je n'ai pas de voiture."
    },
    {
      "title": "C'est or il est? (c'est un…, il est + adjective)",
      "body": "<ul><li><b>C'est</b> + un/une/le + noun, or a name: <span class='fr'>C'est un bon médecin. C'est Marie.</span></li><li><b>Il/elle est</b> + adjective or a bare job: <span class='fr'>Il est médecin. Elle est canadienne.</span></li><li><b>C'est</b> + adjective for a whole idea: <span class='fr'>Le télétravail ? C'est pratique.</span></li></ul>",
      "examples": [
        [
          "Il est infirmier. C'est un infirmier très patient.",
          "He's a nurse. He's a very patient nurse."
        ]
      ],
      "tip": "Article after it? c'est. No article? il / elle est."
    }
  ],
  "mistakes": [
    [
      "Je suis 30 ans.",
      "J'ai 30 ans.",
      "Age uses avoir."
    ],
    [
      "Je suis froid.",
      "J'ai froid.",
      "\"Je suis froid\" means you're a cold person or a corpse. Feelings of temperature use avoir."
    ],
    [
      "Il est un médecin.",
      "Il est médecin. / C'est un médecin.",
      "Bare profession after il est; article after c'est."
    ],
    [
      "Je n'ai pas une voiture.",
      "Je n'ai pas de voiture.",
      "un/une/des become de after a negation."
    ],
    [
      "J'aime café.",
      "J'aime le café.",
      "General likes and dislikes take the definite article."
    ],
    [
      "à le bureau, de les enfants",
      "au bureau, des enfants",
      "à + le and de + le/les always contract."
    ],
    [
      "la problème, la système",
      "le problème, le système",
      "Words in -ème from Greek are masculine."
    ]
  ],
  "speak": {
    "lines": [
      [
        "Bonjour, je m'appelle Karim. Je suis ingénieur.",
        "Hello, my name is Karim. I'm an engineer."
      ],
      [
        "J'ai trente-quatre ans et je suis marié.",
        "I'm thirty-four and I'm married."
      ],
      [
        "Nous avons deux enfants, une fille et un garçon.",
        "We have two children, a girl and a boy."
      ],
      [
        "Ma femme est infirmière. C'est un travail difficile.",
        "My wife is a nurse. It's a hard job."
      ],
      [
        "Je n'ai pas de voiture, alors je prends l'autobus.",
        "I don't have a car, so I take the bus."
      ],
      [
        "J'aime le hockey, mais je n'aime pas le froid !",
        "I like hockey, but I don't like the cold!"
      ]
    ],
    "task": "Introduce yourself for 45 seconds without notes: your name, age, job, family, where you live, one thing you like and one you don't. Use <span class='fr'>c'est</span> once and <span class='fr'>il y a</span> once."
  },
  "vocab": [
    [
      "le travail",
      "work, job"
    ],
    [
      "l'emploi (m.)",
      "job, employment"
    ],
    [
      "la famille",
      "family"
    ],
    [
      "le mari / la femme",
      "husband / wife"
    ],
    [
      "l'enfant (m./f.)",
      "child"
    ],
    [
      "le logement",
      "housing, place to live"
    ],
    [
      "la ville",
      "city"
    ],
    [
      "le quartier",
      "neighbourhood"
    ],
    [
      "la voiture",
      "car"
    ],
    [
      "l'autobus (m.)",
      "bus"
    ],
    [
      "le rendez-vous",
      "appointment"
    ],
    [
      "la santé",
      "health"
    ]
  ],
  "quiz": [
    {
      "q": "How do you say \"I'm 28\"?",
      "o": [
        "Je suis 28 ans.",
        "J'ai 28 ans.",
        "J'ai 28."
      ],
      "a": 1,
      "why": "Age uses avoir + ans."
    },
    {
      "q": "Choose the correct negative: <span class='fr'>Nous avons des enfants.</span> →",
      "o": [
        "Nous n'avons pas des enfants.",
        "Nous n'avons pas d'enfants.",
        "Nous n'avons pas les enfants."
      ],
      "a": 1,
      "why": "des becomes de (d') after a negation."
    },
    {
      "q": "<span class='fr'>___ est professeure à l'université.</span>",
      "o": [
        "Elle",
        "C'",
        "Ce"
      ],
      "a": 0,
      "why": "A bare profession (no article) follows il/elle est."
    },
    {
      "q": "\"I drink coffee every morning.\"",
      "o": [
        "Je bois café chaque matin.",
        "Je bois du café chaque matin.",
        "Je bois le café chaque matin."
      ],
      "a": 1,
      "why": "An unspecified amount of something uncountable takes the partitive du/de la."
    },
    {
      "q": "Which is correct?",
      "o": [
        "Je vais à le bureau.",
        "Je vais au bureau.",
        "Je vais à bureau."
      ],
      "a": 1,
      "why": "à + le always contracts to au."
    },
    {
      "q": "Most nouns ending in <b>-tion</b> are…",
      "o": [
        "masculine",
        "feminine",
        "either, randomly"
      ],
      "a": 1,
      "why": "-tion and -sion nouns are feminine: la situation, la décision."
    }
  ]
});

window.COURSE.modules.push({
  "id": "present",
  "level": "A1",
  "title": "The present tense (-er, -ir, -re verbs, depuis)",
  "subtitle": "Regular verbs, spelling changes, and the three things the present means.",
  "why": "<p>The French present tense covers what English says three ways: <em>I work</em>, <em>I am working</em>, and — with <span class='fr'>depuis</span> — <em>I have been working</em>. Master it and you can describe your routine, your job, your home and your situation, which is the backbone of the first speaking task.</p><p>The good news: once you notice that four of the six forms of most verbs <b>sound identical</b>, the present becomes much less to memorise than the tables suggest.</p>",
  "goals": [
    "Conjugate regular -er, -ir and -re verbs",
    "Handle the spelling-change -er verbs",
    "Use the present with depuis and être en train de"
  ],
  "lessons": [
    {
      "title": "Regular verbs (parler, finir, attendre)",
      "body": "<p>Drop the infinitive ending and add the present endings. About 90% of verbs are regular -er verbs.</p>",
      "table": {
        "head": [
          "",
          "parler (-er)",
          "finir (-ir)",
          "attendre (-re)"
        ],
        "rows": [
          [
            "je",
            "parle",
            "finis",
            "attends"
          ],
          [
            "tu",
            "parles",
            "finis",
            "attends"
          ],
          [
            "il / elle / on",
            "parle",
            "finit",
            "attend"
          ],
          [
            "nous",
            "parlons",
            "finissons",
            "attendons"
          ],
          [
            "vous",
            "parlez",
            "finissez",
            "attendez"
          ],
          [
            "ils / elles",
            "parlent",
            "finissent",
            "attendent"
          ]
        ],
        "say": [
          1,
          2,
          3
        ],
        "pron": true
      },
      "after": "<p>-ir verbs like <span class='fr'>finir</span> add <b>-iss-</b> in the plural: <span class='fr'>nous finissons</span>. A few -ir verbs don't: <span class='fr'>sortir, partir, dormir → je sors, nous sortons</span>.</p>",
      "tip": "-er verbs: je, tu, il and ils forms sound the same — only nous (-ons) and vous (-ez) differ."
    },
    {
      "title": "Spelling-change verbs (manger, commencer, acheter)",
      "body": "<p>Some -er verbs change spelling to keep the sound right:</p>",
      "table": {
        "head": [
          "Type",
          "Rule",
          "Example"
        ],
        "rows": [
          [
            "-ger",
            "keep the g soft: add e before -ons",
            "manger → nous mangeons; voyager → nous voyageons"
          ],
          [
            "-cer",
            "keep the c soft: ç before -ons",
            "commencer → nous commençons"
          ],
          [
            "e + consonant + er",
            "e → è when the ending is silent",
            "acheter → j'achète, ils achètent, but nous achetons"
          ],
          [
            "é + consonant + er",
            "é → è when the ending is silent",
            "préférer → je préfère, but vous préférez"
          ],
          [
            "-eler / -eter",
            "double the consonant when the ending is silent",
            "appeler → je m'appelle; jeter → il jette"
          ],
          [
            "-yer",
            "y → i when the ending is silent",
            "payer → je paie (or je paye); envoyer → j'envoie"
          ]
        ]
      },
      "after": "<p>For the è, double-consonant and y → i verbs, the change happens in je, tu, il, ils — never in nous or vous. For -ger and -cer it's the reverse: the change comes only before -ons (<span class='fr'>nous mangeons, nous commençons</span>).</p>",
      "tip": "è, double-consonant and y → i verbs: the four changing forms (je, tu, il, ils) make a \"boot\" shape in the table."
    },
    {
      "title": "What the present means (now, habits, depuis)",
      "body": "<p>One French tense covers three English ones:</p>",
      "table": {
        "head": [
          "Meaning",
          "French",
          "English"
        ],
        "rows": [
          [
            "Habit or general truth",
            "Je travaille de 9 h à 17 h.",
            "I work from 9 to 5."
          ],
          [
            "Happening now",
            "Je travaille. / Je suis en train de travailler.",
            "I'm working (right now)."
          ],
          [
            "Started in the past, still true — with depuis",
            "Je travaille ici depuis trois ans.",
            "I've been working here for three years."
          ],
          [
            "Near future, with a time word",
            "Je pars demain.",
            "I'm leaving tomorrow."
          ]
        ],
        "say": [
          1
        ]
      },
      "after": "<p><b>depuis + present</b> = \"have been doing\": <span class='fr'>J'habite au Canada depuis 2023</span> — never <span class='fr'>j'ai habité… depuis</span>.</p>",
      "examples": [
        [
          "Depuis combien de temps apprenez-vous le français ?",
          "How long have you been learning French?"
        ],
        [
          "J'apprends le français depuis huit mois.",
          "I've been learning French for eight months."
        ]
      ],
      "tip": "Still true today? depuis + present."
    },
    {
      "title": "Verbs with no preposition (chercher, attendre, écouter)",
      "body": "<p>French and English don't match on which verbs need a preposition. Learn these as chunks:</p>",
      "table": {
        "head": [
          "French",
          "English",
          "Watch out"
        ],
        "rows": [
          [
            "chercher quelque chose",
            "to look for something",
            "no \"pour\""
          ],
          [
            "attendre quelqu'un",
            "to wait for someone",
            "no \"pour\""
          ],
          [
            "écouter la radio",
            "to listen to the radio",
            "no \"à\""
          ],
          [
            "regarder la télé",
            "to watch / look at TV",
            "no \"à\""
          ],
          [
            "payer le loyer",
            "to pay the rent",
            "no \"pour\" (payer quelque chose = to pay for something)"
          ],
          [
            "téléphoner à quelqu'un",
            "to call someone",
            "needs à"
          ],
          [
            "répondre à une question",
            "to answer a question",
            "needs à"
          ],
          [
            "demander à quelqu'un de faire",
            "to ask someone to do",
            "à + person, de + infinitive"
          ],
          [
            "parler de quelque chose à quelqu'un",
            "to talk to someone about something",
            ""
          ]
        ],
        "say": [
          0
        ]
      },
      "tip": "chercher, attendre, écouter, regarder take no preposition — never add pour or à."
    },
    {
      "title": "Routine and frequency (souvent, toujours, d'habitude)",
      "body": "<p>Short frequency words (souvent, toujours, rarement, parfois) go right after the verb: <span class='fr'>Je prends souvent le métro.</span> Longer ones (d'habitude, tous les jours, le samedi) go at the start or the end.</p>",
      "table": {
        "head": [
          "Frequency",
          "Meaning"
        ],
        "rows": [
          [
            "toujours",
            "always"
          ],
          [
            "souvent",
            "often"
          ],
          [
            "d'habitude / généralement",
            "usually"
          ],
          [
            "parfois / de temps en temps",
            "sometimes / from time to time"
          ],
          [
            "rarement",
            "rarely"
          ],
          [
            "ne... jamais",
            "never"
          ],
          [
            "tous les jours / chaque semaine",
            "every day / each week"
          ],
          [
            "le lundi",
            "on Mondays (habit)"
          ]
        ],
        "say": [
          0
        ]
      },
      "examples": [
        [
          "D'habitude, je commence à huit heures.",
          "I usually start at eight."
        ],
        [
          "Le samedi, nous faisons les courses au marché.",
          "On Saturdays we do the shopping at the market."
        ]
      ],
      "tip": "Write your own routine as five sentences — it's the first exam topic."
    }
  ],
  "mistakes": [
    [
      "J'ai habité ici depuis deux ans.",
      "J'habite ici depuis deux ans.",
      "Ongoing situations with depuis use the present."
    ],
    [
      "Je cherche pour un appartement.",
      "Je cherche un appartement.",
      "chercher takes a direct object."
    ],
    [
      "J'attends pour le bus.",
      "J'attends l'autobus.",
      "attendre takes a direct object. (In Quebec, l'autobus is standard.)"
    ],
    [
      "Je suis travaille.",
      "Je travaille. / Je suis en train de travailler.",
      "French has no \"am + -ing\"; the present alone covers it."
    ],
    [
      "nous mangons, nous commencons",
      "nous mangeons, nous commençons",
      "Keep g and c soft before o."
    ],
    [
      "j'achete, je prefere",
      "j'achète, je préfère",
      "e/é → è before a silent ending."
    ]
  ],
  "speak": {
    "lines": [
      [
        "D'habitude, je me lève à six heures et demie.",
        "I usually get up at half past six."
      ],
      [
        "Je prends l'autobus parce que je n'ai pas de voiture.",
        "I take the bus because I don't have a car."
      ],
      [
        "Je travaille dans un entrepôt depuis deux ans.",
        "I've been working in a warehouse for two years."
      ],
      [
        "Le soir, nous mangeons en famille.",
        "In the evening, we eat as a family."
      ],
      [
        "Le samedi, j'achète les légumes au marché.",
        "On Saturdays I buy vegetables at the market."
      ],
      [
        "En ce moment, je suis en train d'apprendre le français.",
        "At the moment, I'm learning French."
      ]
    ],
    "task": "Describe a typical weekday in 60 seconds: when you get up, how you get to work or school, what you do there, what you do in the evening. Include two frequency words and one sentence with <span class='fr'>depuis</span>."
  },
  "vocab": [
    [
      "se lever",
      "to get up"
    ],
    [
      "commencer",
      "to start"
    ],
    [
      "finir",
      "to finish"
    ],
    [
      "prendre l'autobus / le métro",
      "to take the bus / subway"
    ],
    [
      "travailler de chez soi, faire du télétravail",
      "to work from home (Québec also: travailler de la maison)"
    ],
    [
      "faire les courses",
      "to go grocery shopping"
    ],
    [
      "préparer le souper",
      "to make dinner (Qc)"
    ],
    [
      "se coucher",
      "to go to bed"
    ],
    [
      "attendre",
      "to wait for"
    ],
    [
      "chercher",
      "to look for"
    ],
    [
      "payer",
      "to pay (for)"
    ],
    [
      "depuis",
      "since, for (ongoing)"
    ]
  ],
  "quiz": [
    {
      "q": "\"I've been living in Calgary for a year.\"",
      "o": [
        "J'ai habité à Calgary depuis un an.",
        "J'habite à Calgary depuis un an.",
        "Je suis habitant à Calgary pour un an."
      ],
      "a": 1,
      "why": "An ongoing situation + depuis = present tense."
    },
    {
      "q": "<span class='fr'>Nous ___ à neuf heures.</span> (commencer)",
      "o": [
        "commencons",
        "commençons",
        "commenceons"
      ],
      "a": 1,
      "why": "-cer verbs take ç before o to keep the soft sound."
    },
    {
      "q": "Which forms of <span class='fr'>parler</span> sound identical?",
      "o": [
        "je, tu, il, ils",
        "nous and vous",
        "all six"
      ],
      "a": 0,
      "why": "The endings -e, -es, -e, -ent are all silent."
    },
    {
      "q": "<span class='fr'>Je ___ un nouveau logement.</span> (chercher, present)",
      "o": [
        "cherche pour",
        "cherche",
        "suis cherchant"
      ],
      "a": 1,
      "why": "chercher takes no preposition, and French has no \"am + -ing\" form."
    },
    {
      "q": "<span class='fr'>Il ___ tous les soirs.</span> (sortir)",
      "o": [
        "sortit",
        "sort",
        "sortis"
      ],
      "a": 1,
      "why": "sortir: je sors, tu sors, il sort — no -iss-."
    },
    {
      "q": "Where does <span class='fr'>souvent</span> usually go?",
      "o": [
        "Before the verb: je souvent prends",
        "After the verb: je prends souvent",
        "Only at the end of the sentence"
      ],
      "a": 1,
      "why": "Short frequency adverbs follow the conjugated verb."
    }
  ]
});
