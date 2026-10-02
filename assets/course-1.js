/* Course content, part 1: method, sounds, first building blocks.
   Each module follows the schema rendered by learn.html. HTML is allowed
   in text fields; <span class='fr'> marks French inside English prose. */
window.COURSE = window.COURSE || { modules: [] };

window.COURSE.modules.push({
  id: "method",
  level: "Start",
  title: "How to learn French (what the research says)",
  subtitle: "The study habits that actually move you from beginner to B1 — and the popular ones that don't.",
  why: "<p>Most people who stall in French aren't short of motivation or material. They're using methods that <em>feel</em> productive — rereading notes, highlighting, bingeing one grammar topic, collecting word lists — but that research shows produce weak, short-lived learning. Getting the method right first multiplies the value of every hour you spend afterwards.</p><p>This module summarises the findings from memory research and second-language acquisition research that the rest of the course is built on, and turns them into a daily and weekly routine you can follow.</p>",
  goals: [
    "Explain why testing yourself beats rereading",
    "Plan spaced reviews instead of cramming",
    "Balance your week across input, output, study and fluency",
    "Set a realistic timeline to B1 / NCLC 5"
  ],
  lessons: [
    {
      title: "Balance four kinds of practice (Nation's four strands)",
      body: "<p>Applied linguist Paul Nation says a good course gives <b>roughly equal time</b> to four kinds of practice. Most self-learners over-do one (usually grammar or apps) and skip the others.</p>",
      table: {
        head: ["Strand", "What it means", "What you do in this course"],
        rows: [
          ["Input", "Listening and reading for the message", "The example sentences, easy podcasts and readers, the mock exam"],
          ["Output", "Speaking and writing to get a message across", "Saying the examples aloud, the writing task in each module, the mock exam"],
          ["Language study", "Grammar, vocabulary and pronunciation", "The lessons, practice questions and checks"],
          ["Fluency", "Using what you already know, but faster", "Re-telling the same story faster, timed re-writes"]
        ]
      },
      tip: "When you feel stuck, ask which strand you've skipped this week. For most learners, it's output and fluency — they understand far more than they can say."
    },
    {
      title: "Test yourself instead of rereading (retrieval practice)",
      body: "<p>In a well-known experiment (Roediger &amp; Karpicke, 2006), students who <b>re-studied</b> a text did better on a test five minutes later — but students who <b>practised recalling it</b> did clearly better a week later. Pulling information out of memory strengthens it far more than looking at it again. It also feels harder, which is why people avoid it.</p><ul><li>Cover the conjugation table and write it from memory, then check.</li><li>Answer the Check questions <em>before</em> scrolling back to the lesson.</li><li>Do your <a href='review.html'>Daily review</a>: typing an answer from memory is stronger than recognising one.</li><li>After a lesson, close it and say out loud the three things you remember.</li></ul>",
      tip: "Getting an answer wrong and then seeing the correction is still effective learning. Don't wait until you \"know it\" to test yourself."
    },
    {
      title: "Space your reviews (the spacing effect)",
      body: "<p>A large review of 184 articles and 317 experiments (Cepeda et al., 2006) confirmed that spreading study sessions apart beats massing them together — and that <b>the further away your test is, the longer the gaps between reviews should be</b>.</p><p>A practical schedule for each module:</p>",
      table: {
        head: ["When", "What to do"],
        rows: [
          ["Day 1", "Work through the module and pass the check"],
          ["Day 2–3", "Do your Daily review: the module's words and anything you missed come back"],
          ["Day 21", "Re-read the Watch out notes and retake the check"],
          ["End of a level", "Take the level checkpoint, which mixes every lesson"]
        ]
      },
      tip: "Spacing feels less efficient because you've partly forgotten things when you come back. That effortful re-learning is exactly what makes memories durable."
    },
    {
      title: "Mix topics once you've learned them (interleaving)",
      body: "<p>Nakata &amp; Suzuki (2019) had learners practise five grammar structures either in blocks (all of one, then all of the next) or mixed together. Mixed practice produced <b>more errors during training but better results a week later</b>. Real conversations don't tell you which tense is coming, so practise choosing.</p><p>Use blocked practice when a structure is brand new; switch to mixed practice as soon as you can do it slowly. The Daily review and the level checkpoints mix topics for you.</p>"
    },
    {
      title: "Understand first, then push yourself to produce",
      body: "<p><b>Input.</b> You learn from language you <em>almost</em> understand. Nation (2006) estimates you need to know about <b>95% of the words</b> in a text to follow it. Below that, you're decoding, not learning, so learner podcasts and easy readers beat native TV until B1.</p><p><b>Output.</b> Swain's <em>output hypothesis</em>: trying to speak or write makes you <b>notice the gap</b> between what you want to say and what you can say, and that noticing drives learning. That's why every module has a writing task.</p>",
      tip: "Talk to yourself. Narrate what you're doing while you cook, commute or tidy — in French, out loud. When you hit a word you don't know, note it and look it up later. That list is the most useful vocabulary list you'll ever have."
    },
    {
      title: "How long it takes, and a routine that gets you there",
      body: "<p>Alliance Française schools plan roughly <b>60–100 guided hours for A1, 160–200 cumulative for A2 and 350–400 for B1</b>. The U.S. Foreign Service Institute places French among the languages quickest for English speakers to learn, at around 600–750 class hours to professional working proficiency — which is well above B1. Self-study hours are less efficient than taught hours, so plan on the high end.</p>",
      table: {
        head: ["Starting point", "At 1 hour a day", "At 2 hours a day"],
        rows: [
          ["True beginner", "12–15 months", "6–8 months"],
          ["Around A2", "5–7 months", "3–4 months"],
          ["Around B1, need exam technique", "6–10 weeks", "4–6 weeks"]
        ]
      },
      after: "<p><b>A simple 60-minute day:</b></p><ol><li><b>10 min</b> — your <a href='review.html'>Daily review</a>.</li><li><b>25 min</b> — the next step of your module, saying the examples aloud.</li><li><b>15 min</b> — a learner podcast or short article on an exam theme.</li><li><b>10 min</b> — speak or write about your day using today's grammar.</li></ol><p>Once a week, sit one section of the <a href='exam.html'>mock exam</a> under time pressure to track progress.</p>",
      tip: "Consistency beats intensity: 45 minutes every day outperforms a 5-hour Sunday, because it spaces your practice automatically."
    }
  ],
  mistakes: [
    ["Rereading notes until they feel familiar", "Covering them and recalling", "Familiarity is not memory. Recall is what makes it stick (testing effect)."],
    ["Learning 50 isolated words a day", "Learning 10–15 words inside sentences", "Words learned in context are easier to recall and use correctly — gender and prepositions come with them."],
    ["Finishing one grammar topic before starting the next, forever", "Mixing old topics into every session", "Interleaving improves retention and the ability to choose the right form."],
    ["Waiting until you're \"ready\" to speak", "Speaking from the first week, even badly", "Output reveals gaps that reading hides. The exam tests speaking, so train it."],
    ["Watching native TV with French subtitles from day one", "Graded input you understand ~95% of", "Too many unknown words and you stop acquiring and start guessing."],
    ["Using only a gamified app", "Using apps as one strand of four", "Apps are good for vocabulary review, weak for extended output and real listening."]
  ],
  speak: {
    intro: "These are the phrases that keep a conversation going when you're lost — learn them first, because they turn every conversation into a lesson. Shadow each one until you can say it without looking.",
    lines: [
      ["Pardon, pouvez-vous répéter, s'il vous plaît ?", "Sorry, could you repeat that, please?"],
      ["Pouvez-vous parler plus lentement ?", "Could you speak more slowly?"],
      ["Je ne comprends pas.", "I don't understand."],
      ["Qu'est-ce que ça veut dire ?", "What does that mean?"],
      ["Comment dit-on « deadline » en français ?", "How do you say \"deadline\" in French?"],
      ["Comment ça s'écrit ?", "How is that spelled?"],
      ["J'apprends le français pour immigrer au Canada.", "I'm learning French to immigrate to Canada."],
      ["Je suis en train d'améliorer mon français.", "I'm working on improving my French."]
    ],
    task: "Record yourself saying all eight lines from memory. Play it back and compare with the audio. Circle the two lines that sounded least like the model and shadow them five more times."
  },
  quiz: [
    { q: "You have 30 minutes to study a conjugation table. Which approach produces the best retention a week later?", o: ["Reading it carefully three times", "Reading it once, then writing it from memory and checking, twice", "Copying it out five times"], a: 1, why: "Retrieval practice — recalling and then checking — beats re-studying for long-term memory (Roediger & Karpicke, 2006)." },
    { q: "Your exam is in three months. When should you review a module you finish today?", o: ["Every day this week, then never", "In a couple of days, then about a week later, then a few weeks later", "The night before the exam"], a: 1, why: "Spaced reviews with growing gaps beat massed review; longer retention needs longer gaps (Cepeda et al., 2006)." },
    { q: "Roughly what share of the words in a text do you need to know for adequate comprehension?", o: ["About 50%", "About 75%", "About 95%"], a: 2, why: "Nation's research puts adequate comprehension around 95% coverage, and comfortable reading around 98%." },
    { q: "Mixing passé composé, imparfait and futur exercises in one session (rather than one at a time) tends to…", o: ["feel harder but improve results a week later", "feel easier and improve results", "make no difference"], a: 0, why: "Interleaving produced more errors in training but better delayed-test results (Nakata & Suzuki, 2019)." },
    { q: "According to Swain's output hypothesis, why speak and write early?", o: ["It makes you notice what you can't yet say", "It replaces the need for listening", "It only helps pronunciation"], a: 0, why: "Producing language exposes the gap between what you mean and what you can express — the \"noticing\" function." }
  ],
  sources: [
    ["Nation, I.S.P. (2007). The four strands. Innovation in Language Learning and Teaching, 1(1).", "https://www.tandfonline.com/doi/abs/10.2167/illt039.0"],
    ["Roediger, H. L. & Karpicke, J. D. (2006). Test-enhanced learning. Psychological Science, 17(3), 249–255.", "http://psychnet.wustl.edu/memory/wp-content/uploads/2018/04/Roediger-Karpicke-2006_PPS.pdf"],
    ["Cepeda, N. J., Pashler, H., Vul, E., Wixted, J. T. & Rohrer, D. (2006). Distributed practice in verbal recall tasks. Psychological Bulletin, 132, 354–380.", "https://augmentingcognition.com/assets/Cepeda2006.pdf"],
    ["Nakata, T. & Suzuki, Y. (2019). Mixing grammar exercises facilitates long-term retention. The Modern Language Journal, 103, 629–647.", "https://onlinelibrary.wiley.com/doi/10.1111/modl.12581"],
    ["Nation, I.S.P. (2006). How large a vocabulary is needed for reading and listening? Canadian Modern Language Review, 63(1).", "https://www.lextutor.ca/cover/papers/nation_2006.pdf"],
    ["Swain, M. — the output hypothesis and its noticing function.", "https://en.wikipedia.org/wiki/Comprehensible_output"],
    ["Hamada, Y. (2016). Shadowing: Who benefits and how? Language Teaching Research, 20(1).", "https://journals.sagepub.com/doi/abs/10.1177/1362168815597504"],
    ["Alliance Française — guided hours per CEFR level.", "https://www.alliancefrancaise.ca/en/community/blog/how-long-does-it-take-to-learn-french/"],
    ["U.S. Foreign Service Institute — language learning timelines.", "https://www.state.gov/national-foreign-affairs-training-center/foreign-language-training"]
  ]
});

window.COURSE.modules.push({
  id: "sounds",
  level: "Start",
  title: "The sounds of French",
  subtitle: "Vowels English doesn't have, silent letters, linking, rhythm — and what's different in Canadian French.",
  why: "<p>Pronunciation isn't polish you add at the end. If you can't hear the difference between <span class='fr'>tu</span> and <span class='fr'>tout</span>, or between <span class='fr'>ils sont</span> and <span class='fr'>ils ont</span>, listening sections become guesswork — and examiners grade <em>intelligibility</em> in the speaking task. Learning the sound system early also makes every word you meet afterwards easier to remember, because you can say it.</p><p>French spelling is far more regular than English once you know the rules: the same letter combination almost always gives the same sound.</p>",
  goals: [
    "Hear and produce <span class='fr'>u</span> vs <span class='fr'>ou</span>, <span class='fr'>é</span> vs <span class='fr'>è</span>, and the three nasal vowels",
    "Predict which final letters are silent",
    "Make the obligatory liaisons and elisions",
    "Speak with French rhythm: even syllables, stress at the end of each group"
  ],
  lessons: [
    {
      title: "Rhythm: every syllable counts, the last one is stressed",
      body: "<p>English stresses one syllable per word and swallows the others (<em>PHO-to-graph, pho-TO-gra-pher</em>). French gives syllables roughly <b>equal length</b> and places a light stress on the <b>last syllable of each rhythm group</b> — not of each word. Words inside a group run together as if they were one long word.</p><p>Say <span class='fr'>Je voudrais un café</span> as <span class='ipa'>ʒə-vu-dʁɛ-zœ̃-ka-FE</span>: five even beats and a slightly longer, stronger last one.</p><p><b>Intonation:</b> the voice rises at the end of each group inside a sentence and falls at the end of a statement. A yes/no question can simply rise at the end: <span class='fr'>Tu viens ?</span> ↗</p>",
      examples: [
        ["Je voudrais un café.", "I'd like a coffee. (five even beats, stress on -fé)"],
        ["La fin de semaine, je travaille dans un restaurant.", "On weekends, I work in a restaurant. (rise on -maine, fall on -rant)"],
        ["Vous habitez à Montréal ?", "Do you live in Montreal? (rising question)"]
      ],
      tip: "Clap the syllables while you say a sentence. If some claps feel much longer than others, you're stressing English-style."
    },
    {
      title: "The vowels English doesn't have",
      body: "<p>French vowels are <b>pure</b>: the tongue and lips hold still. English glides (<em>day</em> is really \"de-ee\"; <em>no</em> is \"no-oo\"), and carrying that glide into French is the biggest marker of an English accent.</p>",
      table: {
        head: ["Spelling", "Sound", "How to make it", "Examples"],
        rows: [
          ["u, û", "<span class='ipa'>[y]</span>", "Say \"ee\", keep your tongue there, then round your lips tightly as if to whistle", "tu, rue, sûr, bus"],
          ["ou, où", "<span class='ipa'>[u]</span>", "Like English \"oo\" in <em>food</em>, lips very rounded, no glide", "tout, roue, où, nous"],
          ["é, -er, -ez, et", "<span class='ipa'>[e]</span>", "Like the start of English \"day\", but cut off before the \"ee\" glide", "été, parler, vous avez, et"],
          ["è, ê, ai, -et", "<span class='ipa'>[ɛ]</span>", "Like \"e\" in <em>bed</em>, mouth a little more open", "mère, fête, lait, mais, jouet"],
          ["eu, œu (open)", "<span class='ipa'>[ø] / [œ]</span>", "Say \"é\" and round your lips; more open before a pronounced consonant", "deux, bleu / peur, sœur, jeune"],
          ["e (unstressed)", "<span class='ipa'>[ə]</span>", "A short, relaxed \"uh\" — often dropped entirely in speech", "le, je, petit (→ p'tit)"],
          ["o, au, eau", "<span class='ipa'>[o]</span>", "Rounded \"oh\" with no \"w\" glide", "beau, chaud, mot"],
          ["oi", "<span class='ipa'>[wa]</span>", "Always \"wa\"", "moi, trois, voiture"]
        ]
      }
    },
    {
      title: "Nasal vowels",
      body: "<p>A vowel followed by <b>n</b> or <b>m</b> in the same syllable becomes nasal: air goes through your nose, and the n/m itself is <b>not pronounced</b>. There are three in standard Canadian and European French (a fourth, <span class='fr'>un</span>, is still distinct for many Quebec speakers but has merged with <span class='fr'>in</span> for most Parisians).</p>",
      table: {
        head: ["Spelling", "Sound", "Examples"],
        rows: [
          ["an, am, en, em", "<span class='ipa'>[ɑ̃]</span> (Quebec often closer to <span class='ipa'>[ã]</span>)", "enfant, temps, chambre, ensemble"],
          ["on, om", "<span class='ipa'>[ɔ̃]</span>", "bon, nom, maison, nombre"],
          ["in, im, ain, ein, (y)en after i/é", "<span class='ipa'>[ɛ̃]</span>", "vin, important, pain, plein, bien, européen"],
          ["un, um", "<span class='ipa'>[œ̃]</span> or <span class='ipa'>[ɛ̃]</span>", "un, lundi, parfum"]
        ]
      },
      after: "<p><b>The rule that saves you:</b> the vowel is nasal only when the n/m is <em>not</em> followed by a vowel or a second n/m. So <span class='fr'>bon</span> is nasal but <span class='fr'>bonne</span> is not (<span class='ipa'>[bɔn]</span>); <span class='fr'>an</span> is nasal but <span class='fr'>année</span> is not; <span class='fr'>américain</span> is nasal at the end, <span class='fr'>américaine</span> is not. This is exactly how masculine/feminine adjectives differ in sound.</p>",
      examples: [
        ["un bon vin blanc", "a good white wine (all four nasal)"],
        ["Il est canadien. Elle est canadienne.", "He's Canadian. She's Canadian. (nasal vs not)"]
      ]
    },
    {
      title: "Consonants: the French R and friends",
      body: "<p><b>R</b> is made at the back of the throat (uvular) — close to a soft gargle, or the sound at the end of Scottish <em>loch</em> but voiced. Start from <b>[g]</b> in <em>go</em>, then relax the closure so air rubs through. Never curl your tongue as in English. (A tapped, Spanish-style R is still heard in parts of rural Quebec, but the uvular R is the norm.)</p><ul><li><b>h</b> is always silent: <span class='fr'>hôpital</span> = <span class='ipa'>[ɔpital]</span>.</li><li><b>th</b> is just <b>t</b>: <span class='fr'>thé</span>, <span class='fr'>théâtre</span>.</li><li><b>ch</b> = English <em>sh</em>: <span class='fr'>chat, chercher</span>. <b>gn</b> = \"ny\" as in <em>canyon</em>: <span class='fr'>montagne, campagne</span>.</li><li><b>c</b> and <b>g</b> are soft before e, i, y (<span class='fr'>ce, ici, gilet</span>) and hard elsewhere (<span class='fr'>car, gare</span>). <b>ç</b> keeps c soft before a, o, u: <span class='fr'>ça, reçu</span>. <b>gu</b> keeps g hard before e, i: <span class='fr'>guerre</span>.</li><li><b>s between two vowels = [z]</b>; <b>ss = [s]</b>. This changes meaning: <span class='fr'>poison</span> (poison) vs <span class='fr'>poisson</span> (fish), <span class='fr'>désert</span> vs <span class='fr'>dessert</span>.</li><li><b>ill</b> after a vowel is usually \"y\": <span class='fr'>travail, fille, famille</span> — but <span class='fr'>ville, mille, tranquille</span> keep a real L.</li></ul>"
    },
    {
      title: "Silent letters: what not to say",
      body: "<p>Final consonants are <b>usually silent</b>: <span class='fr'>Paris, petit, grand, trop, les, nez, vous</span>. Four are usually pronounced at the end of a word — remember <b>CaReFuL</b>: <b>c, r, f, l</b> (<span class='fr'>sac, mer, neuf, sel</span>). The big exception is <b>-er</b> in verb infinitives and many nouns, where the r is silent: <span class='fr'>parler, premier, boulanger</span>.</p><p>A final <b>-e</b> is silent, but it makes the consonant before it heard. That is how you hear feminine forms: <span class='fr'>petit</span> <span class='ipa'>[pəti]</span> → <span class='fr'>petite</span> <span class='ipa'>[pətit]</span>; <span class='fr'>grand</span> → <span class='fr'>grande</span>.</p><p>The verb ending <b>-ent</b> for ils/elles is completely silent: <span class='fr'>ils parlent</span> sounds exactly like <span class='fr'>il parle</span>. (In nouns and adverbs, -ent is a nasal: <span class='fr'>le vent, souvent</span>.)</p>",
      table: {
        head: ["Written", "Said", "What's silent"],
        rows: [
          ["ils parlent", "<span class='ipa'>[il paʁl]</span>", "-ent"],
          ["les enfants", "<span class='ipa'>[le.zɑ̃.fɑ̃]</span>", "final -ts (the s of les is linked)"],
          ["un petit garçon", "<span class='ipa'>[œ̃ pti gaʁsɔ̃]</span>", "final t, and the e of petit in speech"],
          ["un sac, la mer", "<span class='ipa'>[sak] [mɛʁ]</span>", "nothing — C and R are pronounced"],
          ["six, dix", "<span class='ipa'>[sis] [dis]</span>", "said alone; before a consonant: six livres [si]"]
        ],
        say: [0]
      }
    },
    {
      title: "Linking words: liaison, elision, enchaînement",
      body: "<p>French hates two vowel sounds colliding between words. Three mechanisms prevent it — and they're why spoken French sounds like one continuous stream.</p><p><b>1. Liaison</b> — a normally silent final consonant is pronounced at the start of the next word, when that word starts with a vowel sound. <b>s, x, z → [z]</b>; <b>d → [t]</b>; <b>n → [n]</b>; <b>t → [t]</b>.</p>",
      table: {
        cap: "When to link",
        head: ["Rule", "Examples"],
        rows: [
          ["<b>Obligatory</b>: determiner + noun or adjective", "les‿amis, un‿enfant, mon‿école, deux‿heures"],
          ["<b>Obligatory</b>: pronoun + verb, and verb + pronoun", "nous‿avons, ils‿ont, on‿arrive, allez-y"],
          ["<b>Obligatory</b>: after short prepositions and adverbs", "chez‿eux, en‿avion, très‿intéressant, plus‿important"],
          ["<b>Forbidden</b>: after <span class='fr'>et</span>", "toi et | elle (never \"et-t-elle\")"],
          ["<b>Forbidden</b>: before an aspirated h", "les | héros, en | haut, les | haricots"],
          ["<b>Forbidden</b>: after a singular noun", "un étudiant | anglais"],
          ["<b>Optional</b>: most other cases — more linking sounds more formal", "je suis‿allé / je suis | allé"]
        ]
      },
      after: "<p><b>2. Elision</b> — short words drop their vowel before a vowel sound and take an apostrophe: <span class='fr'>le → l'</span>, <span class='fr'>je → j'</span>, <span class='fr'>ne → n'</span>, <span class='fr'>que → qu'</span>, <span class='fr'>de → d'</span>, and <span class='fr'>si → s'</span> but only before il/ils. This is compulsory in writing too: <span class='fr'>j'aime</span>, never <span class='fr'>je aime</span>.</p><p><b>3. Enchaînement</b> — a consonant that is already pronounced slides onto the next word: <span class='fr'>elle‿arrive</span> <span class='ipa'>[ɛ.la.ʁiv]</span>, <span class='fr'>avec‿elle</span> <span class='ipa'>[a.vɛ.kɛl]</span>. This is why beginners can't find word boundaries in fast speech — train your ear on it.</p>",
      examples: [
        ["Ils‿ont deux‿enfants.", "They have two children. (two liaisons)"],
        ["Ils sont deux.", "There are two of them. (no liaison: s-sound, not z)"],
        ["C'est‿un petit‿appartement.", "It's a small apartment."],
        ["J'habite chez‿eux depuis‿un an.", "I've been living with them for a year."]
      ],
      tip: "<span class='fr'>ils ont</span> <span class='ipa'>[il.zɔ̃]</span> (they have) vs <span class='fr'>ils sont</span> <span class='ipa'>[il.sɔ̃]</span> (they are): the liaison z vs a real s is the only difference. Listening questions love this."
    },
    {
      title: "Canadian French: what you'll hear, and what to aim for",
      body: "<p>The TCF and TEF use standard French recordings, but you'll live in Canada, and Quebec French has systematic features you should recognise:</p><ul><li><b>t and d before i and u become [ts] and [dz]</b>: <span class='fr'>petit</span> ≈ \"p'tsi\", <span class='fr'>tu dis</span> ≈ \"tsu dzi\", <span class='fr'>mardi</span> ≈ \"mar-dzi\". This is automatic in Quebec speech, not slang.</li><li><b>i, u, ou relax in closed syllables</b>: <span class='fr'>vite, lune, route</span> sound more like English <em>bit, book</em>.</li><li><b>Long vowels can diphthongise</b>: <span class='fr'>père</span> may sound like \"pa-ère\", <span class='fr'>fête</span> like \"fa-ète\".</li><li>Informal speech drops sounds heavily: <span class='fr'>il y a</span> → \"y'a\", <span class='fr'>je suis</span> → \"chu\", <span class='fr'>tu es</span> → \"t'es\".</li><li>Common vocabulary differs: <span class='fr'>la fin de semaine</span> (weekend), <span class='fr'>le déjeuner / dîner / souper</span> (breakfast / lunch / dinner), <span class='fr'>magasiner</span> (to shop), <span class='fr'>un char</span> (informal: a car).</li></ul><p><b>What to aim for:</b> clear, standard pronunciation. Examiners assess intelligibility, not accent. You don't need to imitate either Paris or Montreal — but understanding both will make listening far easier.</p>",
      tip: "The audio on this site prefers a Canadian French voice when your device has one. Under the <b>Aa</b> button you can switch voices to compare accents."
    }
  ],
  sounds: {
    intro: "<p>Tap each word to hear it. Minimal pairs differ by a single sound — if you can't hear the difference yet, replay them side by side, then say them yourself until someone could tell which one you meant.</p>",
    points: [
      { title: "u <span class='ipa'>[y]</span> vs ou <span class='ipa'>[u]</span>", body: "<p>The most important vowel contrast for English speakers. For <b>u</b>, say \"ee\" and round your lips without moving your tongue.</p>", say: ["tu", "tout", "rue", "roue", "dessus", "dessous", "vu", "vous"] },
      { title: "é <span class='ipa'>[e]</span> vs è <span class='ipa'>[ɛ]</span>", body: "<p>A small difference in mouth opening that distinguishes grammar: <span class='fr'>j'ai</span> [e] vs <span class='fr'>j'avais</span> [ɛ] in many accents.</p>", say: ["été", "était", "les", "lait", "parlé", "parlait"] },
      { title: "The nasal vowels", body: "<p>Keep the n/m silent — the vowel itself carries the nasal sound.</p>", say: ["cent", "son", "saint", "blanc", "blond", "vingt", "banc", "bon", "bain"] },
      { title: "Nasal or not?", body: "<p>A vowel after the n/m cancels the nasal — this is how many masculine/feminine pairs sound different.</p>", say: ["bon", "bonne", "an", "année", "canadien", "canadienne", "plein", "pleine"] },
      { title: "s <span class='ipa'>[z]</span> vs ss <span class='ipa'>[s]</span>", body: "<p>One s between vowels buzzes; two hiss.</p>", say: ["poison", "poisson", "désert", "dessert", "cousin", "coussin"] },
      { title: "Liaison changes meaning", body: "<p>Listen for [z] vs [s].</p>", say: ["ils ont", "ils sont", "nous avons", "nous savons", "les heures", "les sœurs"] }
    ]
  },
  mistakes: [
    ["Pronouncing the s in <span class='fr'>Paris</span>, <span class='fr'>trois</span>, <span class='fr'>vous</span>", "Final consonants silent (except C, R, F, L)", "Saying final letters is the most common beginner error and can make words unrecognisable."],
    ["<span class='fr'>tu</span> said like English \"too\"", "Lips rounded, tongue forward: <span class='ipa'>[ty]</span>", "\"too\" is <span class='fr'>tout</span> (all) — a different word."],
    ["<span class='fr'>ils parlent</span> with \"-ent\" pronounced", "<span class='ipa'>[il paʁl]</span>", "The verb ending -ent is always silent."],
    ["Pronouncing the h in <span class='fr'>hôtel</span>", "<span class='ipa'>[otɛl]</span>, and <span class='fr'>l'hôtel</span>", "French h is never pronounced."],
    ["Stressing the first syllable: <span class='fr'>RES-taurant</span>", "Even syllables, stress at the end: <span class='fr'>res-tau-RANT</span>", "English word stress makes French hard to follow."],
    ["<span class='fr'>vous | avez</span> with a gap", "<span class='fr'>vous‿avez</span> <span class='ipa'>[vu.za.ve]</span>", "Pronoun + verb liaison is obligatory."],
    ["<span class='fr'>je aime</span>, <span class='fr'>le hôpital</span>", "<span class='fr'>j'aime</span>, <span class='fr'>l'hôpital</span>", "Elision is compulsory before a vowel or mute h."]
  ],
  speak: {
    lines: [
      ["Bonjour, je m'appelle Sara. J'habite à Montréal.", "Hello, my name is Sara. I live in Montreal."],
      ["Tu as vu la rue où nous habitons ?", "Did you see the street where we live? (u / ou)"],
      ["Mon enfant a un bon ami canadien.", "My child has a good Canadian friend. (nasals + liaison)"],
      ["Ils ont deux enfants, mais ils sont très occupés.", "They have two children, but they're very busy."],
      ["Le poisson est délicieux, le dessert aussi.", "The fish is delicious, the dessert too. (s / ss)"],
      ["Elle arrive à huit heures avec elle.", "She arrives at eight with her. (enchaînement)"],
      ["Mardi, il fait vingt degrés à Québec.", "On Tuesday it's twenty degrees in Quebec City."]
    ],
    task: "Pick the three lines with the sounds you find hardest. Record each one, then listen back at half attention — as if you were a stranger. Could someone tell <span class='fr'>tu</span> from <span class='fr'>tout</span> and <span class='fr'>ils ont</span> from <span class='fr'>ils sont</span> in your recording? Repeat until yes."
  },
  quiz: [
    { q: "How many letters are pronounced at the end of <span class='fr'>ils parlent</span>?", o: ["All of -ent", "Only the t", "None of -ent is pronounced"], a: 2, why: "The third-person plural ending -ent is always silent: ils parlent sounds like il parle." },
    { q: "Which pair differs only by liaison [z] vs [s]?", o: ["ils ont / ils sont", "tu / tout", "bon / bonne"], a: 0, why: "ils‿ont has a [z] liaison; ils sont starts the verb with a real [s]." },
    { q: "Why is the first vowel of <span class='fr'>bonne</span> not nasal?", o: ["Because it's feminine", "Because the n is followed by another n and a vowel", "Because of the final e only"], a: 1, why: "A vowel is nasal only when its n/m isn't followed by a vowel or another n/m." },
    { q: "Which liaison is forbidden?", o: ["les‿amis", "toi et‿elle", "nous‿avons"], a: 1, why: "Never link after et." },
    { q: "In Quebec French, <span class='fr'>petit</span> often sounds like…", o: ["\"pe-tee\" with a hard t", "\"p'tsi\"", "\"pe-tit\" with the final t"], a: 1, why: "Quebec French affricates t and d before i and u: [ts], [dz]." },
    { q: "Which final letter is usually pronounced?", o: ["The s in trois", "The c in sac", "The t in petit"], a: 1, why: "CaReFuL: c, r, f and l are usually pronounced at the end of a word." }
  ],
  sources: [
    ["Liaison en français — règles obligatoires, interdites et facultatives.", "https://fr.wikipedia.org/wiki/Liaison_en_fran%C3%A7ais"],
    ["Office québécois de la langue française — l'affrication.", "https://vitrinelinguistique.oqlf.gouv.qc.ca/24467/la-prononciation/phenomenes-phonetiques/laffrication"],
    ["Usito — La prononciation du français québécois.", "https://usito.usherbrooke.ca/articles/th%C3%A9matiques/dumas_1"],
    ["Hamada, Y. (2019). Shadowing: What is it? How to use it. RELC Journal.", "https://journals.sagepub.com/doi/full/10.1177/0033688218771380"]
  ]
});

window.COURSE.modules.push({
  id: "basics",
  level: "A1",
  title: "Être, avoir, nouns and articles",
  subtitle: "The two verbs every sentence leans on, gender, and the articles that come with every noun.",
  why: "<p><span class='fr'>Être</span> (to be) and <span class='fr'>avoir</span> (to have) are the two most frequent verbs in French and they do double duty: they're also the helpers that build the passé composé, the most important past tense for B1. And every French noun has a gender that changes the articles and adjectives around it, so learning nouns <em>with</em> their article from day one saves you thousands of small mistakes later.</p>",
  goals: [
    "Conjugate être and avoir without hesitation",
    "Choose between tu and vous, and use on naturally",
    "Use le/la/les, un/une/des and du/de la correctly",
    "Say your age, nationality, job and how you feel"
  ],
  lessons: [
    {
      title: "Subject pronouns, and tu vs vous",
      body: "<p>French has two ways to say \"you\". <span class='fr'>Tu</span> is for one person you know well, a child, or a peer your age in casual settings. <span class='fr'>Vous</span> is for anyone you'd address politely — a stranger, a colleague you don't know, an examiner — <b>and</b> for more than one person. In Quebec, <span class='fr'>tu</span> is used more readily than in France, but in the exam, and whenever in doubt, use <span class='fr'>vous</span>.</p><p><span class='fr'>On</span> literally means \"one\", but in everyday speech it replaces <span class='fr'>nous</span>: <span class='fr'>On va au cinéma ?</span> = Shall we go to the movies? It always takes the <span class='fr'>il/elle</span> form of the verb.</p>",
      table: {
        head: ["Pronoun", "Meaning", "Note"],
        rows: [
          ["je (j')", "I", "j' before a vowel sound: j'ai, j'habite"],
          ["tu", "you (informal, one person)", ""],
          ["il / elle / on", "he / she / we (informal), people", "on takes the same verb form as il"],
          ["nous", "we", "more formal or written than on"],
          ["vous", "you (polite, or plural)", "the safe default with adults"],
          ["ils / elles", "they", "ils for any group with at least one masculine noun"]
        ]
      }
    },
    {
      title: "Être and avoir — the two pillars",
      body: "<p>Both are irregular and must be memorised as whole forms. Say each form with its pronoun so the liaisons become automatic: <span class='fr'>vous‿êtes</span>, <span class='fr'>nous‿avons</span>, <span class='fr'>ils‿ont</span>.</p>",
      table: {
        head: ["", "être (to be)", "avoir (to have)"],
        rows: [
          ["je", "suis", "ai"],
          ["tu", "es", "as"],
          ["il / elle / on", "est", "a"],
          ["nous", "sommes", "avons"],
          ["vous", "êtes", "avez"],
          ["ils / elles", "sont", "ont"]
        ],
        say: [1, 2],
        pron: true
      },
      tip: "Contrast the pairs that trip listeners: <span class='fr'>ils sont</span> [s] / <span class='fr'>ils‿ont</span> [z]; <span class='fr'>il est</span> / <span class='fr'>il a</span>; <span class='fr'>tu es</span> / <span class='fr'>tu as</span>."
    },
    {
      title: "Where French uses avoir but English uses \"to be\"",
      body: "<p>Physical states, age and needs use <span class='fr'>avoir</span> + a noun in French. Translating word for word from English gives sentences that mean something odd — <span class='fr'>je suis chaud</span> is not how you say you feel warm.</p>",
      table: {
        head: ["French", "English"],
        rows: [
          ["avoir 30 ans", "to be 30 years old"],
          ["avoir faim / soif", "to be hungry / thirsty"],
          ["avoir chaud / froid", "to be (feel) hot / cold"],
          ["avoir sommeil", "to be sleepy"],
          ["avoir peur (de)", "to be afraid (of)"],
          ["avoir raison / tort", "to be right / wrong"],
          ["avoir besoin de", "to need"],
          ["avoir envie de", "to feel like, to want"],
          ["avoir mal à la tête", "to have a headache"],
          ["il y a", "there is / there are"]
        ],
        say: [0]
      },
      examples: [
        ["J'ai trente-deux ans et j'ai deux enfants.", "I'm thirty-two and I have two children."],
        ["Tu as faim ? Il y a du pain dans la cuisine.", "Are you hungry? There's bread in the kitchen."],
        ["J'ai besoin d'un rendez-vous chez le médecin.", "I need a doctor's appointment."]
      ]
    },
    {
      title: "Gender: every noun is masculine or feminine",
      body: "<p>Gender is mostly arbitrary (<span class='fr'>la table</span>, <span class='fr'>le bureau</span>), so the rule is simple: <b>never learn a noun without its article</b>. But word endings give strong clues — these hold for the large majority of nouns:</p>",
      table: {
        head: ["Usually masculine", "Examples", "Usually feminine", "Examples"],
        rows: [
          ["-age", "le fromage, le voyage (but la page, la plage, l'image f.)", "-tion, -sion", "la situation, la décision"],
          ["-ment", "le logement, le gouvernement", "-té", "la santé, la ville, la liberté"],
          ["-eau", "le bureau, le bateau (but l'eau f., la peau)", "-ure", "la voiture, la culture"],
          ["-isme", "le tourisme", "-ette, -elle", "la baguette, la poubelle"],
          ["-er, -ier", "le boulanger, le cahier", "-ence, -ance", "la science, la chance"],
          ["-oir", "le soir, le couloir", "-ie", "la vie, la pharmacie"]
        ]
      },
      tip: "Words for jobs usually have both forms: <span class='fr'>un infirmier / une infirmière</span>, <span class='fr'>un employé / une employée</span>. Canadian French readily feminises job titles: <span class='fr'>une professeure</span>, <span class='fr'>une ingénieure</span>."
    },
    {
      title: "Articles: definite, indefinite, partitive",
      body: "<p>French nouns almost never appear without a small word in front. Which one you choose depends on whether you mean a specific thing, one thing, or <em>some</em> of something.</p>",
      table: {
        head: ["", "Masculine", "Feminine", "Before a vowel", "Plural"],
        rows: [
          ["Definite (the / in general)", "le", "la", "l'", "les"],
          ["Indefinite (a, some countable)", "un", "une", "un / une", "des"],
          ["Partitive (some, an amount of)", "du", "de la", "de l'", "des"]
        ]
      },
      after: "<ul><li><b>General statements use the definite article</b>, unlike English: <span class='fr'>J'aime le café</span> (I like coffee), <span class='fr'>Les loyers sont chers à Toronto</span> (Rents are expensive in Toronto).</li><li><b>Amounts of uncountable things use the partitive</b>: <span class='fr'>Je bois du café le matin</span> (I drink [some] coffee in the morning). English drops \"some\"; French can't drop the article.</li><li><b>After a negation, un/une/des/du/de la become de (d')</b>: <span class='fr'>J'ai une voiture → Je n'ai pas de voiture</span>. <span class='fr'>Il y a du lait → Il n'y a pas de lait</span>. The exception is <span class='fr'>être</span>: <span class='fr'>Ce n'est pas un problème</span>.</li><li><b>After quantities, use de</b>: <span class='fr'>beaucoup de travail, un peu de temps, un kilo de pommes</span>.</li><li><b>à + le = au, à + les = aux, de + le = du, de + les = des</b> — always: <span class='fr'>au bureau, aux États-Unis, le prix du loyer</span>.</li></ul>",
      examples: [
        ["J'aime le thé, mais aujourd'hui je bois du café.", "I like tea, but today I'm drinking coffee."],
        ["Il n'y a pas de place de stationnement.", "There's no parking spot."],
        ["Je vais au travail en autobus.", "I go to work by bus."]
      ]
    },
    {
      title: "C'est or il/elle est?",
      body: "<p>Both translate as \"he/she/it is\", and choosing wrong is a classic writing error.</p><ul><li><b>C'est + a determiner + noun</b> (or a name, or a stressed pronoun): <span class='fr'>C'est un bon médecin. C'est Marie. C'est moi.</span></li><li><b>Il/elle est + an adjective</b>, or a <b>bare</b> profession/nationality/religion (no article): <span class='fr'>Il est médecin. Elle est canadienne. Il est gentil.</span></li><li><b>C'est + adjective</b> refers to a whole situation or idea, and the adjective stays masculine: <span class='fr'>Le télétravail ? C'est pratique.</span></li></ul>",
      examples: [
        ["Il est infirmier. C'est un infirmier très patient.", "He's a nurse. He's a very patient nurse."],
        ["Montréal ? C'est magnifique en automne.", "Montreal? It's gorgeous in the fall."]
      ]
    }
  ],
  mistakes: [
    ["Je suis 30 ans.", "J'ai 30 ans.", "Age uses avoir."],
    ["Je suis froid.", "J'ai froid.", "\"Je suis froid\" means you're a cold person or a corpse. Feelings of temperature use avoir."],
    ["Il est un médecin.", "Il est médecin. / C'est un médecin.", "Bare profession after il est; article after c'est."],
    ["Je n'ai pas une voiture.", "Je n'ai pas de voiture.", "un/une/des become de after a negation."],
    ["J'aime café.", "J'aime le café.", "General likes and dislikes take the definite article."],
    ["à le bureau, de les enfants", "au bureau, des enfants", "à + le and de + le/les always contract."],
    ["la problème, la système", "le problème, le système", "Words in -ème from Greek are masculine."]
  ],
  sounds: {
    points: [
      { title: "Hear the verb, not just the pronoun", body: "<p>These pairs appear constantly in listening tasks. Tap them in order and repeat.</p>", say: ["il est", "il a", "tu es", "tu as", "ils sont", "ils ont", "elle est", "elles ont"] },
      { title: "Article = number and gender, by ear", body: "<p>The noun often sounds identical in singular and plural — the article is the only clue. <span class='fr'>le</span> [lə], <span class='fr'>les</span> [le].</p>", say: ["le livre", "les livres", "la fille", "les filles", "l'ami", "les amis"] }
    ]
  },
  speak: {
    lines: [
      ["Bonjour, je m'appelle Karim. Je suis ingénieur.", "Hello, my name is Karim. I'm an engineer."],
      ["J'ai trente-quatre ans et je suis marié.", "I'm thirty-four and I'm married."],
      ["Nous avons deux enfants, une fille et un garçon.", "We have two children, a girl and a boy."],
      ["Ma femme est infirmière. C'est un travail difficile.", "My wife is a nurse. It's a hard job."],
      ["Je n'ai pas de voiture, alors je prends l'autobus.", "I don't have a car, so I take the bus."],
      ["J'aime le hockey, mais je n'aime pas le froid !", "I like hockey, but I don't like the cold!"]
    ],
    task: "Introduce yourself for 45 seconds without notes: your name, age, job, family, where you live, one thing you like and one you don't. Use <span class='fr'>c'est</span> once and <span class='fr'>il y a</span> once."
  },
  vocab: [
    ["le travail", "work, job"], ["l'emploi (m.)", "job, employment"], ["la famille", "family"], ["le mari / la femme", "husband / wife"],
    ["l'enfant (m./f.)", "child"], ["le logement", "housing, place to live"], ["la ville", "city"], ["le quartier", "neighbourhood"],
    ["la voiture", "car"], ["l'autobus (m.)", "bus"], ["le rendez-vous", "appointment"], ["la santé", "health"]
  ],
  quiz: [
    { q: "How do you say \"I'm 28\"?", o: ["Je suis 28 ans.", "J'ai 28 ans.", "J'ai 28."], a: 1, why: "Age uses avoir + ans." },
    { q: "Choose the correct negative: <span class='fr'>Nous avons des enfants.</span> →", o: ["Nous n'avons pas des enfants.", "Nous n'avons pas d'enfants.", "Nous n'avons pas les enfants."], a: 1, why: "des becomes de (d') after a negation." },
    { q: "<span class='fr'>___ est professeure à l'université.</span>", o: ["Elle", "C'", "Ce"], a: 0, why: "A bare profession (no article) follows il/elle est." },
    { q: "\"I drink coffee every morning.\"", o: ["Je bois café chaque matin.", "Je bois du café chaque matin.", "Je bois le café chaque matin."], a: 1, why: "An unspecified amount of something uncountable takes the partitive du/de la." },
    { q: "Which is correct?", o: ["Je vais à le bureau.", "Je vais au bureau.", "Je vais à bureau."], a: 1, why: "à + le always contracts to au." },
    { q: "Most nouns ending in <b>-tion</b> are…", o: ["masculine", "feminine", "either, randomly"], a: 1, why: "-tion and -sion nouns are feminine: la situation, la décision." }
  ],
});

window.COURSE.modules.push({
  id: "present",
  level: "A1",
  title: "The present tense, properly",
  subtitle: "Regular patterns, the spelling changes nobody warns you about, and three meanings English splits apart.",
  why: "<p>The French present tense covers what English says three ways: <em>I work</em>, <em>I am working</em>, and — with <span class='fr'>depuis</span> — <em>I have been working</em>. Master it and you can describe your routine, your job, your home and your situation, which is the backbone of the first speaking task.</p><p>The good news: once you notice that four of the six forms of most verbs <b>sound identical</b>, the present becomes much less to memorise than the tables suggest.</p>",
  goals: [
    "Conjugate regular -er, -ir and -re verbs, and the -er spelling changers",
    "Use the present for habits, ongoing actions and situations that started in the past",
    "Use être en train de and depuis correctly",
    "Hear which forms sound the same and which don't"
  ],
  lessons: [
    {
      title: "Three regular families",
      body: "<p>Remove the infinitive ending and add the present endings. About 90% of French verbs are regular -er verbs, so that pattern pays off most.</p>",
      table: {
        head: ["", "parler (-er)", "finir (-ir)", "attendre (-re)"],
        rows: [
          ["je", "parle", "finis", "attends"],
          ["tu", "parles", "finis", "attends"],
          ["il / elle / on", "parle", "finit", "attend"],
          ["nous", "parlons", "finissons", "attendons"],
          ["vous", "parlez", "finissez", "attendez"],
          ["ils / elles", "parlent", "finissent", "attendent"]
        ],
        say: [1, 2, 3],
        pron: true
      },
      after: "<p><b>The sound trick:</b> for -er verbs, <span class='fr'>je parle, tu parles, il parle, ils parlent</span> all sound exactly the same <span class='ipa'>[paʁl]</span>. Only <span class='fr'>nous parlons</span> and <span class='fr'>vous parlez</span> sound different. In speech you only need <b>three</b> forms, not six. -ir verbs like <span class='fr'>finir</span> add <b>-iss-</b> in the plural.</p>",
      tip: "Some common -ir verbs don't take -iss-: <span class='fr'>partir, sortir, dormir, sentir, servir</span> drop the last consonant of the stem in the singular: <span class='fr'>je pars, je sors, je dors</span>, but <span class='fr'>nous partons</span>."
    },
    {
      title: "-er verbs that change their spelling",
      body: "<p>These verbs are regular in sound logic but change spelling to keep the pronunciation right. They're very common in exam texts.</p>",
      table: {
        head: ["Type", "Rule", "Example"],
        rows: [
          ["-ger", "keep the g soft: add e before -ons", "manger → nous mangeons; voyager → nous voyageons"],
          ["-cer", "keep the c soft: ç before -ons", "commencer → nous commençons"],
          ["e + consonant + er", "e → è when the ending is silent", "acheter → j'achète, ils achètent, but nous achetons"],
          ["é + consonant + er", "é → è when the ending is silent", "préférer → je préfère, but vous préférez"],
          ["-eler / -eter", "double the consonant when the ending is silent", "appeler → je m'appelle; jeter → il jette"],
          ["-yer", "y → i when the ending is silent", "payer → je paie (or je paye); envoyer → j'envoie"]
        ]
      },
      after: "<p>Notice the pattern: the change happens in exactly the forms with a <b>silent</b> ending (je, tu, il, ils) — the \"boot\" shape in the table — and never in nous and vous.</p>"
    },
    {
      title: "What the present means",
      body: "<p>One French tense, three English ones:</p>",
      table: {
        head: ["Meaning", "French", "English"],
        rows: [
          ["Habit or general truth", "Je travaille de 9 h à 17 h.", "I work from 9 to 5."],
          ["Happening now", "Je travaille. / Je suis en train de travailler.", "I'm working (right now)."],
          ["Started in the past, still true — with depuis", "Je travaille ici depuis trois ans.", "I've been working here for three years."],
          ["Near future, with a time word", "Je pars demain.", "I'm leaving tomorrow."]
        ],
        say: [1]
      },
      after: "<p><b>Depuis + present</b> is the one English speakers get wrong most. English uses \"have been\"; French uses the present because the action is still going on. <span class='fr'>J'habite au Canada depuis 2023</span> — never <span class='fr'>j'ai habité... depuis</span>. Ask about duration with <span class='fr'>Depuis combien de temps... ?</span> (for how long) or <span class='fr'>Depuis quand... ?</span> (since when).</p><p><b>Être en train de + infinitive</b> stresses that something is in progress at this moment: <span class='fr'>Je suis en train de cuisiner, je te rappelle</span> (I'm in the middle of cooking, I'll call you back).</p>",
      examples: [
        ["Depuis combien de temps apprenez-vous le français ?", "How long have you been learning French?"],
        ["J'apprends le français depuis huit mois.", "I've been learning French for eight months."],
        ["Elle est en train de remplir le formulaire.", "She's filling in the form right now."]
      ]
    },
    {
      title: "Verbs with a preposition — and verbs without one",
      body: "<p>French and English don't match on which verbs need a preposition. Learn these as chunks:</p>",
      table: {
        head: ["French", "English", "Watch out"],
        rows: [
          ["chercher quelque chose", "to look for something", "no \"pour\""],
          ["attendre quelqu'un", "to wait for someone", "no \"pour\""],
          ["écouter la radio", "to listen to the radio", "no \"à\""],
          ["regarder la télé", "to watch / look at TV", "no \"à\""],
          ["payer le loyer", "to pay for the rent", "no \"pour\""],
          ["téléphoner à quelqu'un", "to call someone", "needs à"],
          ["répondre à une question", "to answer a question", "needs à"],
          ["demander à quelqu'un de faire", "to ask someone to do", "à + person, de + infinitive"],
          ["parler de quelque chose à quelqu'un", "to talk to someone about something", ""]
        ],
        say: [0]
      }
    },
    {
      title: "Say your routine in the present",
      body: "<p>Describing your routine is a guaranteed early exam topic, and it combines the present with time expressions. Frequency words usually go <b>after the verb</b>: <span class='fr'>Je prends souvent le métro</span>. Longer time expressions go at the start or end.</p>",
      table: {
        head: ["Frequency", "Meaning"],
        rows: [
          ["toujours", "always"], ["souvent", "often"], ["d'habitude / généralement", "usually"],
          ["parfois / de temps en temps", "sometimes / from time to time"], ["rarement", "rarely"], ["ne... jamais", "never"],
          ["tous les jours / chaque semaine", "every day / each week"], ["le lundi", "on Mondays (habit)"]
        ],
        say: [0]
      },
      examples: [
        ["D'habitude, je commence à huit heures.", "I usually start at eight."],
        ["Le samedi, nous faisons les courses au marché.", "On Saturdays we do the shopping at the market."],
        ["Je travaille souvent de la maison le vendredi.", "I often work from home on Fridays."]
      ]
    }
  ],
  sounds: {
    points: [
      { title: "Four forms, one sound", body: "<p>Listen: the singular forms and ils/elles are identical for -er verbs. Only nous and vous change.</p>", say: ["je parle", "tu parles", "il parle", "ils parlent", "nous parlons", "vous parlez"] },
      { title: "Singular vs plural in -ir and -re verbs", body: "<p>Here you <em>can</em> hear the plural: a consonant appears.</p>", say: ["il finit", "ils finissent", "elle attend", "elles attendent", "il part", "ils partent"] },
      { title: "The grave accent changes the sound", body: "<p>è is open [ɛ]; the unaccented e in nous achetons is a short [ə] or dropped.</p>", say: ["j'achète", "nous achetons", "je préfère", "vous préférez", "je m'appelle", "nous nous appelons"] }
    ]
  },
  mistakes: [
    ["J'ai habité ici depuis deux ans.", "J'habite ici depuis deux ans.", "Ongoing situations with depuis use the present."],
    ["Je cherche pour un appartement.", "Je cherche un appartement.", "chercher takes a direct object."],
    ["J'attends pour le bus.", "J'attends l'autobus.", "attendre takes a direct object. (In Quebec, l'autobus is standard.)"],
    ["Je suis travaille.", "Je travaille. / Je suis en train de travailler.", "French has no \"am + -ing\"; the present alone covers it."],
    ["nous mangons, nous commencons", "nous mangeons, nous commençons", "Keep g and c soft before o."],
    ["j'achete, je prefere", "j'achète, je préfère", "e/é → è before a silent ending."]
  ],
  speak: {
    lines: [
      ["D'habitude, je me lève à six heures et demie.", "I usually get up at half past six."],
      ["Je prends l'autobus parce que je n'ai pas de voiture.", "I take the bus because I don't have a car."],
      ["Je travaille dans un entrepôt depuis deux ans.", "I've been working in a warehouse for two years."],
      ["Le soir, nous mangeons en famille.", "In the evening, we eat as a family."],
      ["Le samedi, j'achète les légumes au marché.", "On Saturdays I buy vegetables at the market."],
      ["En ce moment, je suis en train d'apprendre le français.", "At the moment, I'm learning French."]
    ],
    task: "Describe a typical weekday in 60 seconds: when you get up, how you get to work or school, what you do there, what you do in the evening. Include two frequency words and one sentence with <span class='fr'>depuis</span>."
  },
  vocab: [
    ["se lever", "to get up"], ["commencer", "to start"], ["finir", "to finish"], ["prendre l'autobus / le métro", "to take the bus / subway"],
    ["travailler de la maison", "to work from home"], ["faire les courses", "to do the groceries"], ["préparer le souper", "to make dinner (Qc)"], ["se coucher", "to go to bed"],
    ["attendre", "to wait for"], ["chercher", "to look for"], ["payer", "to pay (for)"], ["depuis", "since, for (ongoing)"]
  ],
  quiz: [
    { q: "\"I've been living in Calgary for a year.\"", o: ["J'ai habité à Calgary depuis un an.", "J'habite à Calgary depuis un an.", "Je suis habitant à Calgary pour un an."], a: 1, why: "An ongoing situation + depuis = present tense." },
    { q: "<span class='fr'>Nous ___ à neuf heures.</span> (commencer)", o: ["commencons", "commençons", "commenceons"], a: 1, why: "-cer verbs take ç before o to keep the soft sound." },
    { q: "Which forms of <span class='fr'>parler</span> sound identical?", o: ["je, tu, il, ils", "nous and vous", "all six"], a: 0, why: "The endings -e, -es, -e, -ent are all silent." },
    { q: "<span class='fr'>J'___ un nouveau logement.</span> (chercher, present)", o: ["cherche pour", "cherche", "suis cherchant"], a: 1, why: "chercher takes no preposition, and French has no \"am + -ing\" form." },
    { q: "<span class='fr'>Il ___ tous les soirs.</span> (sortir)", o: ["sortit", "sort", "sortis"], a: 1, why: "sortir: je sors, tu sors, il sort — no -iss-." },
    { q: "Where does <span class='fr'>souvent</span> usually go?", o: ["Before the verb: je souvent prends", "After the verb: je prends souvent", "Only at the end of the sentence"], a: 1, why: "Short frequency adverbs follow the conjugated verb." }
  ],
});
