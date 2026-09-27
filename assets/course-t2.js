/* Course content: TCF speaking task 2 — question framing.
   Built from the learner's own "Question framing for Task 2 speaking"
   board, with language corrections noted in-module. Loaded before the
   task 3 module so the two appear in exam order. */
window.COURSE = window.COURSE || { modules: [] };

window.COURSE.modules.push({
  id: "tcf-t2",
  level: "Exam",
  title: "TCF speaking task 2: asking questions like a pro",
  subtitle: "A ready-made kit for the interaction task: openings, a 10-question sequence, question patterns, transitions, reactions and closings.",
  hours: "4–5 h, then daily practice",
  why: "<p>In TCF Canada speaking <b>task 2</b>, you get a short scenario — <span class='fr'>« Vous venez d'arriver dans une ville. Vous appelez l'agence des transports en commun pour obtenir des informations. »</span> — then about <b>2 minutes to prepare</b> and <b>3½ minutes of conversation</b> with the examiner, who plays the other person. The task tests whether you can <b>obtain information</b> in an everyday situation: ask varied, well-formed questions, follow up on the answers, and keep the exchange polite and natural.</p><p>The candidates who struggle usually know enough French — they just run out of question patterns after four questions, or ask a list without ever reacting to what they hear. This module gives you a <b>kit</b> of fixed phrases for every stage of the conversation. As with the task 3 template, the point is that the structure comes out automatically, so your attention goes to the scenario (fixed phrases like these are linked to being perceived as more proficient — Boers et al., 2006).</p>",
  goals: [
    "Decide instantly between tu and vous, and stay consistent",
    "Open and close the conversation politely, from memory",
    "Ask 10+ varied questions using at least six different patterns",
    "React to every answer before moving on",
    "Use one or two subjunctive questions for B1 range"
  ],
  lessons: [
    {
      title: "The shape of the conversation, and how to use your 2 minutes",
      body: "<p>Use the preparation time to <b>decide the register</b> and <b>jot keywords</b> for about ten questions — not full sentences. Then follow this shape:</p>",
      table: {
        head: ["Stage", "What you do", "Time"],
        rows: [
          ["Preparation", "tu or vous? Keywords for ~10 questions using the 10-question sequence below", "2 min"],
          ["Opening", "Greet, give the context, ask if they have time", "~15 s"],
          ["Questions", "Ask, <b>react to the answer</b>, transition, ask the next", "~3 min"],
          ["Closing", "Summarise, thank, say what you'll do next, say goodbye", "~15 s"]
        ]
      },
      tip: "Aim for <b>8 to 12 questions</b>. Fewer and you'll run out of time to show range; more and you won't have time to react to answers — and reacting is part of what's assessed."
    },
    {
      title: "Tu or vous? Decide first, then stay consistent",
      body: "<p>Your first preparation decision (<em>faut-il vouvoyer ou tutoyer ?</em>). Read the scenario: <b>who is the other person?</b></p><ul><li><b>vous</b> — an employee, agency, store, service desk, landlord, stranger, or anyone in a professional role: <span class='fr'>Je travaille à l'accueil d'une billetterie…</span></li><li><b>tu</b> — a friend, a family member, or a colleague you're close to: <span class='fr'>Votre ami(e) fait partie d'un club de randonnée…</span> (In Quebec workplaces, colleagues usually say tu.)</li></ul><p>Then <b>stay consistent</b> — mixing <span class='fr'>tu</span> and <span class='fr'>vous</span> is the most common register error in this task. Everything changes together:</p>",
      table: {
        head: ["vous (formal)", "tu (informal)"],
        rows: [
          ["Avez-vous une minute ?", "As-tu une minute ?"],
          ["Pourriez-vous me dire… ?", "Pourrais-tu me dire… ?"],
          ["Que me conseillez-vous ?", "Qu'est-ce que tu me conseilles ?"],
          ["votre annonce, vos horaires", "ton club, tes collègues"],
          ["Je vous remercie. Au revoir !", "Merci beaucoup ! On se parle bientôt."]
        ],
        say: [0, 1]
      }
    },
    {
      title: "Opening lines",
      body: "<p>Memorise one opening and adapt the middle sentence to the scenario:</p>",
      examples: [
        ["Bonjour madame ! J'espère que vous allez bien.", "Hello! I hope you're well. (vous)"],
        ["Salut ! J'espère que tu vas bien.", "Hi! I hope you're doing well. (tu)"],
        ["J'ai vu votre annonce pour les cours de yoga. / J'ai entendu dire que tu faisais partie d'un club de randonnée.", "I saw your ad for yoga classes. / I heard you're in a hiking club."],
        ["Ça m'intéresse beaucoup, mais j'ai quelques questions à vous poser pour prendre une décision.", "I'm very interested, but I have a few questions before I decide."],
        ["Avez-vous une minute ? / Avez-vous le temps de répondre à mes questions ?", "Do you have a minute? / Do you have time to answer my questions?"]
      ],
      tip: "Make the opening fit the scenario: if they called <em>you</em> or you're at their counter, skip \"do you have a minute\" and go straight to <span class='fr'>Je voudrais quelques renseignements sur…</span>"
    },
    {
      title: "The 10-question sequence (works for any scenario)",
      body: "<p>This is the backbone. During preparation, fill each line with the scenario's details — you'll never run out of questions:</p>",
      table: {
        head: ["#", "Pattern", "What it covers"],
        rows: [
          ["1", "Ma première question est la suivante : est-ce que [le service] est disponible / possible ?", "availability"],
          ["2", "Quels sont les documents / les critères / les avantages… ?", "requirements, benefits"],
          ["3", "Quel est le délai pour [action] ?", "timing"],
          ["4", "Combien coûte [le service] ? / Quels sont les tarifs ?", "price"],
          ["5", "Comment peut-on [faire l'action] ?", "procedure"],
          ["6", "Y a-t-il des inconvénients / des restrictions ?", "limits"],
          ["7", "Faut-il [condition] ?", "obligations"],
          ["8", "Que se passerait-il si [problème] ?", "B1 boost: conditional"],
          ["9", "Que conseilleriez-vous à quelqu'un dans ma situation ?", "B1 boost: advice"],
          ["10", "Ma dernière question porte sur [le détail restant].", "wrap-up"]
        ],
        say: [1]
      },
      tip: "Questions 8 and 9 are your B1 boost: the conditional (<span class='fr'>se passerait-il, conseilleriez-vous</span>) shows range that simple present-tense questions can't."
    },
    {
      title: "Question patterns by type",
      body: "<p>Vary the <b>form</b> of your questions, not just the content. Pick from each family:</p>",
      tables: [
        { cap: "Yes / no", head: ["Pattern", "Example"], rows: [
          ["Est-ce que… ?", "Est-ce que le stationnement est inclus ?"],
          ["Faut-il… ?", "Faut-il réserver à l'avance ?"],
          ["Y a-t-il… ?", "Y a-t-il des réductions pour les étudiants ?"],
          ["Est-il possible de… ?", "Est-il possible de payer par carte ?"],
          ["Doit-on / Dois-je… ?", "Dois-je apporter mon propre équipement ?"]
        ], say: [1] },
        { cap: "Quel / quelle", head: ["Pattern", "Example"], rows: [
          ["Quel type de… ?", "Quel type de spectacles proposez-vous ?"],
          ["Quels sont les… ?", "Quels sont les horaires d'ouverture ?"],
          ["Quelles sont les conditions… ?", "Quelles sont les conditions d'inscription ?"],
          ["Quel est le délai… ?", "Quel est le délai de livraison ?"],
          ["Quel est le prix / le coût… ?", "Quel est le prix d'un abonnement mensuel ?"]
        ], say: [1] },
        { cap: "Comment / combien", head: ["Pattern", "Example"], rows: [
          ["Comment peut-on… ?", "Comment peut-on acheter les billets ?"],
          ["Comment se déroule… ?", "Comment se déroule une séance ?"],
          ["Combien de temps faut-il ?", "Combien de temps faut-il pour aller au centre-ville ?"],
          ["Combien coûte… ?", "Combien coûte un billet aller-retour ?"],
          ["Combien de… faut-il prévoir ?", "Combien d'argent faut-il prévoir pour le repas ?"]
        ], say: [1] },
        { cap: "Où / à qui / de quelle manière", head: ["Pattern", "Example"], rows: [
          ["Où peut-on… ?", "Où peut-on trouver un plan du réseau ?"],
          ["À qui dois-je m'adresser pour… ?", "À qui dois-je m'adresser pour un remboursement ?"],
          ["De quelle manière… ?", "De quelle manière puis-je vous contacter ?"],
          ["Dans quel cas… ?", "Dans quel cas les frais sont-ils remboursés ?"]
        ], say: [1] },
        { cap: "Quand / à partir de", head: ["Pattern", "Example"], rows: [
          ["À partir de quand… ?", "À partir de quand l'appartement est-il libre ?"],
          ["Jusqu'à quand… ?", "Jusqu'à quand les inscriptions sont-elles ouvertes ?"],
          ["Quand aura lieu… ?", "Quand aura lieu la prochaine course ?"],
          ["Depuis combien de temps… ?", "Depuis combien de temps le club existe-t-il ?"]
        ], say: [1] },
        { cap: "Conditional / hypothetical (B1)", head: ["Pattern", "Example"], rows: [
          ["Que se passerait-il si… ?", "Que se passerait-il si je devais annuler ?"],
          ["Dans le cas où…, que faudrait-il faire ?", "Dans le cas où le colis n'arrive pas, que faudrait-il faire ?"],
          ["Serait-il possible de… ?", "Serait-il possible de visiter samedi ?"],
          ["Dans quelle mesure… ?", "Dans quelle mesure le programme est-il adapté aux débutants ?"],
          ["En cas de problème, à qui faudrait-il s'adresser ?", "En cas de problème, à qui faudrait-il s'adresser ?"]
        ], say: [1] },
        { cap: "Opinion / advice", head: ["Pattern", "Example"], rows: [
          ["Pourquoi recommanderiez-vous… ?", "Pourquoi recommanderiez-vous ce quartier ?"],
          ["Quels sont les avantages de… ?", "Quels sont les avantages de l'abonnement annuel ?"],
          ["Y a-t-il des inconvénients à… ?", "Y a-t-il des inconvénients à commander en ligne ?"],
          ["Que conseillez-vous à quelqu'un qui… ?", "Que conseillez-vous à quelqu'un qui n'a jamais fait de randonnée ?"],
          ["Qu'est-ce qui distingue… de… ?", "Qu'est-ce qui distingue votre salle des autres ?"]
        ], say: [1] }
      ]
    },
    {
      title: "B1 boost: questions with the subjunctive",
      body: "<p>One or two of these per conversation show clear B1 range. They all follow <span class='fr'>que</span> + a different subject (Module 15).</p>",
      tables: [
        { cap: "Il faut que / il est nécessaire que", head: ["Question"], rows: [
          ["Est-il nécessaire que je sois présent en personne ?"],
          ["Faut-il que j'aie un justificatif pour… ?"],
          ["Est-il indispensable que je fasse une demande à l'avance ?"],
          ["Est-il obligatoire que le dossier soit complet dès le départ ?"]
        ], say: [0] },
        { cap: "Il est important que / il vaut mieux que", head: ["Question"], rows: [
          ["Est-il important que je puisse… ?"],
          ["Vaut-il mieux que je vienne le matin ?"],
          ["Est-il préférable que je réserve en ligne ?"],
          ["Est-il conseillé que j'aille sur place, ou puis-je tout faire en ligne ?"]
        ], say: [0] },
        { cap: "Il est possible que / y a-t-il un risque que", head: ["Question"], rows: [
          ["Est-il possible que le délai soit réduit dans certains cas ?"],
          ["Y a-t-il un risque que ma demande soit refusée ?"],
          ["Est-il probable que les conditions changent prochainement ?"],
          ["Pensez-vous qu'il soit possible de… dans mon cas ?"]
        ], say: [0] },
        { cap: "Pour que / avant que / à condition que", head: ["Question"], rows: [
          ["Que faut-il faire pour que ma demande soit acceptée ?"],
          ["Y a-t-il des démarches à faire avant que le dossier soit traité ?"],
          ["Le service est-il gratuit, à condition qu'on remplisse certains critères ?"],
          ["Que se passe-t-il dans le cas où la demande ne serait pas validée ?"]
        ], say: [0] },
        { cap: "Remember — the irregular subjunctive forms you'll need most", head: ["Verb", "que je", "qu'il / elle"], rows: [
          ["être", "sois", "soit"], ["avoir", "aie", "ait"], ["aller", "aille", "aille"],
          ["pouvoir", "puisse", "puisse"], ["faire", "fasse", "fasse"], ["venir", "vienne", "vienne"]
        ] }
      ],
      tip: "<span class='fr'>Dans le cas où</span> is followed by the <b>conditional</b>, not the subjunctive: <span class='fr'>dans le cas où la demande <u>ne serait pas</u> validée</span>."
    },
    {
      title: "Transitions between questions",
      body: "<p>Linking your questions makes the exchange sound like a conversation, not an interrogation:</p>",
      examples: [
        ["Ma première question est la suivante : …", "My first question is…"],
        ["Ensuite, je voudrais savoir…", "Next, I'd like to know…"],
        ["Pourriez-vous me dire… ? / Pourrais-tu me dire… ?", "Could you tell me…?"],
        ["J'aimerais également savoir…", "I'd also like to know…"],
        ["Cela m'amène à ma prochaine question : …", "That brings me to my next question…"],
        ["Dans ce cas, j'aimerais aussi savoir…", "In that case, I'd also like to know…"],
        ["Justement, à ce sujet, …", "Actually, on that subject…"],
        ["En lien avec ce que vous venez de dire, …", "Following on from what you just said…"],
        ["Puisque vous mentionnez cela, je me demande…", "Since you mention that, I wonder…"]
      ],
      tip: "The last three are the strongest: they build your next question on the examiner's answer, which proves you're listening — exactly what an interaction task measures."
    },
    {
      title: "Reacting to the answers",
      body: "<p>After each answer, react in one short phrase <b>before</b> your next question. Four kinds of reaction:</p>",
      tables: [
        { cap: "Acknowledge", head: ["Phrase"], rows: [
          ["Je vois, c'est noté."], ["D'accord, je comprends bien."], ["Très bien, merci pour cette précision."], ["C'est clair pour moi maintenant."], ["Je prends bonne note de cela."]
        ], say: [0] },
        { cap: "Surprise / interest", head: ["Phrase"], rows: [
          ["Ah, je ne savais pas que c'était le cas."], ["C'est intéressant à savoir."], ["Je ne m'y attendais pas, mais c'est rassurant."], ["C'est plus simple que je ne le pensais."], ["Effectivement, c'est logique."]
        ], say: [0] },
        { cap: "Reformulate to confirm", head: ["Phrase"], rows: [
          ["Si je comprends bien, cela signifie que…"], ["Donc, si j'ai bien compris, il faudrait…"], ["En d'autres termes, vous voulez dire que… ?"], ["Autrement dit, cela implique que…"], ["Cela veut dire qu'il est préférable de… ?"]
        ], say: [0] },
        { cap: "Evaluate / comment", head: ["Phrase"], rows: [
          ["C'est une contrainte importante à prendre en compte."], ["C'est un avantage non négligeable."], ["Ça semble raisonnable dans ce contexte."], ["C'est bon à savoir, surtout dans mon cas."], ["Je comprends, même si ça représente un défi."]
        ], say: [0] }
      ]
    },
    {
      title: "Closing lines",
      body: "<p>Summarise, thank, say what you'll do next. Memorise one version:</p>",
      examples: [
        ["D'accord, madame. J'ai bien compris toutes les informations, et elles me semblent très intéressantes.", "All right. I've understood all the information, and it sounds very interesting."],
        ["Après en avoir discuté avec ma famille, je vous répondrai bientôt.", "After discussing it with my family, I'll get back to you soon."],
        ["Je vais y réfléchir et je reviendrai vers vous dès que possible.", "I'll think about it and get back to you as soon as possible."],
        ["Elles sont très claires et utiles pour moi. Merci beaucoup pour votre temps.", "It's all very clear and useful for me. Thank you very much for your time."],
        ["Bonne journée ! / Bonne soirée ! / Au revoir ! (tu : On se parle bientôt !)", "Have a good day / evening! Goodbye! (tu: Talk soon!)"]
      ]
    },
    {
      title: "Scenario bank: the situations from your practice",
      body: "<p>Each scenario below is one you practised, with a set of well-formed questions (corrected where needed). Use them as models, then build your own in the builder.</p>",
      tables: [
        { cap: "Transports — you've just arrived in a city (vous)", head: ["Questions"], rows: [
          ["Quels types de transport en commun sont disponibles dans cette ville ?"],
          ["Où peut-on trouver les informations sur le réseau ? Avez-vous un site web ou un plan de la ville ?"],
          ["Quels sont les horaires du métro et de l'autobus ?"],
          ["Y a-t-il des transports disponibles pendant la nuit ?"],
          ["Où puis-je acheter les billets, et combien coûte un billet ?"],
          ["Existe-t-il une carte mensuelle ou des tarifs réduits ?"]
        ], say: [0] },
        { cap: "A friend must move heavy things without a vehicle (tu)", head: ["Questions"], rows: [
          ["Quels types d'objets as-tu besoin de transporter ?"],
          ["Combien d'objets y a-t-il à transporter ? Est-ce qu'ils sont fragiles ou lourds ?"],
          ["Où est-ce que tu veux les transporter ? C'est près de chez toi ?"],
          ["Quand dois-tu les transporter ?"],
          ["As-tu quelqu'un qui peut t'aider à les porter ?"],
          ["Y a-t-il un ascenseur, ou seulement des escaliers au nouvel endroit ?"],
          ["Quel est ton budget ? Tu préfères louer un camion ou utiliser un service de livraison ?"],
          ["Est-ce que tu penses tout transporter en une journée, ou sur plusieurs jours ?"]
        ], say: [0] },
        { cap: "A colleague's spring running race (tu)", head: ["Questions"], rows: [
          ["Où se déroule la course ? Qui l'organise ?"],
          ["Quelle est la distance ? Y a-t-il un seul parcours ou plusieurs ?"],
          ["Faut-il payer pour s'inscrire ?"],
          ["La course soutient-elle une association caritative ?"],
          ["Y a-t-il un âge minimum ?"]
        ], say: [0] },
        { cap: "A friend's hiking club (tu)", head: ["Questions"], rows: [
          ["Où ont lieu les randonnées, en général ?"],
          ["Est-ce que vous partez en groupe ? Y a-t-il un guide professionnel ?"],
          ["Quels sont les niveaux de difficulté ?"],
          ["Quel est l'âge minimum ? Quel est l'âge moyen des participants ?"],
          ["Quelle est la meilleure saison pour aller à la montagne : l'hiver ou l'été ?"],
          ["Quel type d'équipement est-ce qu'il faut apporter ?"]
        ], say: [0] },
        { cap: "Ordering groceries online for the first time (vous)", head: ["Questions"], rows: [
          ["Comment puis-je passer une commande en ligne ?"],
          ["Le service est-il seulement pour la livraison, ou puis-je aussi commander pour le ramassage en magasin ?"],
          ["Quels sont les frais de livraison ? Y a-t-il un montant minimum pour commander ?"],
          ["Y a-t-il des réductions pour les nouveaux clients ?"],
          ["Quel est le délai de livraison en général ? Puis-je choisir l'heure ?"],
          ["Que se passe-t-il si un produit n'est pas disponible ?"],
          ["Quels sont les moyens de paiement acceptés ?"]
        ], say: [0] },
        { cap: "A theatre ticket office while you're on vacation (vous)", head: ["Questions"], rows: [
          ["Quels types de spectacles proposez-vous ?"],
          ["Quels sont les horaires des spectacles, en général ?"],
          ["Comment puis-je réserver ma place ? Combien coûtent les billets ?"],
          ["Y a-t-il des réductions pour les étudiants ou les familles ?"],
          ["Faut-il arriver en avance ?"]
        ], say: [0] },
        { cap: "A colleague's wedding (tu)", head: ["Questions"], rows: [
          ["Où a eu lieu le mariage ? Combien de personnes y ont assisté ?"],
          ["Comment s'est passée la cérémonie ?"],
          ["Comment était la salle de réception ?"],
          ["Qu'est-ce que tu as le plus apprécié ?"],
          ["Comment était le repas ? Quelles animations y avait-il ?"]
        ], say: [0] }
      ],
      tip: "Past-event scenarios (the wedding) need past tenses: passé composé for what happened (<span class='fr'>Comment s'est passée la cérémonie ?</span>) and imparfait for descriptions (<span class='fr'>Comment était la salle ?</span>)."
    },
    {
      title: "Notes on the handwritten board",
      body: "<p>Your framework is excellent. These small language points were corrected in this module so you memorise the natural version:</p><ul><li><span class='fr'>J'écoute que…</span> → <span class='fr'>J'ai entendu dire que…</span> / <span class='fr'>J'ai vu que…</span> — to report something you heard, use <span class='fr'>entendre dire que</span>.</li><li><span class='fr'>Effectivement, ça fait sens</span> → <span class='fr'>Effectivement, c'est logique</span> — <span class='fr'>ça fait sens</span> is an anglicism; <span class='fr'>ça a du sens</span> or <span class='fr'>c'est logique</span> are standard.</li><li><span class='fr'>Quel types des objets</span> → <span class='fr'>Quels types d'objets</span>; <span class='fr'>Combien des objets</span> → <span class='fr'>Combien d'objets</span> — after <span class='fr'>combien</span> and <span class='fr'>type</span>, use <span class='fr'>de</span> with no article.</li><li><span class='fr'>Quel sont les frais</span> → <span class='fr'>Quels sont les frais</span> — <span class='fr'>quel</span> agrees with the plural noun.</li><li><span class='fr'>des transport disponible</span> → <span class='fr'>des transports disponibles</span> — plural agreement.</li><li><span class='fr'>Est-ce tu penses transporter…</span> → <span class='fr'>Est-ce que tu penses tout transporter…</span> — don't drop <span class='fr'>que</span>.</li><li><span class='fr'>Qu'est-ce qui distingue — de</span> is correct; also useful: <span class='fr'>Quelle est la différence entre… et… ?</span></li><li><span class='fr'>Que se passe-t-il dans le cas où la demande ne soit pas validée</span> → <span class='fr'>…ne serait pas validée</span> — <span class='fr'>dans le cas où</span> takes the conditional.</li></ul>"
    }
  ],
  builder: {
    title: "Build your question script",
    seconds: 210,
    intro: "<p>Pick a scenario, then fill each blank with the <b>content only</b> — the transitions and question frames are added for you. The script is written in the <b>vous</b> form; for a <b>tu</b> scenario, practise changing the verbs as you speak. Then press <b>Read it to me</b>, and practise with the <b>3:30 timer</b> — pausing after each question to imagine the answer and react to it. Press <b>Fill with the example</b> to see the transport scenario.</p>",
    groups: [
      { title: "Opening", fields: [
        { id: "person", label: "Who you're talking to", pre: "Bonjour", ph: "madame" },
        { id: "context", label: "Context: what you saw or heard", ph: "Je viens d'arriver dans la ville et je voudrais utiliser les transports en commun" }
      ] },
      { title: "Questions 1–5", fields: [
        { id: "q1", label: "1 · Availability", pre: "…est-ce que", ph: "le métro fonctionne tous les jours" },
        { id: "q2", label: "2 · Requirements / benefits", pre: "Quels sont", ph: "les différents types de billets disponibles" },
        { id: "q3", label: "3 · Timing", pre: "Quel est le délai pour", ph: "obtenir une carte mensuelle" },
        { id: "q4", label: "4 · Price", pre: "Combien coûte", ph: "un billet simple" },
        { id: "q5", label: "5 · Procedure", pre: "Comment peut-on", ph: "acheter les billets" }
      ] },
      { title: "Questions 6–10", fields: [
        { id: "q6", label: "6 · Limits", pre: "Y a-t-il des restrictions", ph: "pour les vélos dans le métro" },
        { id: "q7", label: "7 · Obligation", pre: "Faut-il", ph: "valider son billet à chaque trajet" },
        { id: "q8", label: "8 · Hypothetical (B1)", pre: "Que se passerait-il si", ph: "je perdais ma carte" },
        { id: "q9", label: "9 · Advice (B1)", pre: "…à quelqu'un qui", ph: "vient d'arriver et ne connaît pas encore la ville" },
        { id: "q10", label: "10 · Last detail", pre: "Ma dernière question porte sur", ph: "les transports pendant la nuit" }
      ] },
      { title: "Closing", fields: [
        { id: "next", label: "What you'll do next", pre: "Je vais", ph: "acheter une carte mensuelle dès demain" }
      ] }
    ],
    parts: [
      { title: "Opening", text: "Bonjour {person} ! J'espère que vous allez bien. {context}, et j'ai quelques questions à vous poser. Avez-vous une minute ?" },
      { title: "Question 1", text: "Ma première question est la suivante : est-ce que {q1} ?" },
      { title: "React + question 2", text: "D'accord, je comprends bien. Ensuite, je voudrais savoir : quels sont {q2} ?" },
      { title: "React + question 3", text: "Très bien, merci pour cette précision. Pourriez-vous me dire quel est le délai pour {q3} ?" },
      { title: "React + question 4", text: "C'est bon à savoir. J'aimerais également savoir combien coûte {q4}." },
      { title: "React + question 5", text: "Ah, c'est plus raisonnable que je ne le pensais. Cela m'amène à ma prochaine question : comment peut-on {q5} ?" },
      { title: "React + question 6", text: "Je vois, c'est noté. Dans ce cas, y a-t-il des restrictions {q6} ?" },
      { title: "React + question 7", text: "C'est une contrainte importante à prendre en compte. Justement, à ce sujet : faut-il {q7} ?" },
      { title: "React + question 8", text: "Si je comprends bien, il faut donc être organisé. En lien avec ce que vous venez de dire, que se passerait-il si {q8} ?" },
      { title: "React + question 9", text: "Je ne m'y attendais pas, mais c'est rassurant. Que conseilleriez-vous à quelqu'un qui {q9} ?" },
      { title: "React + question 10", text: "Merci, c'est un conseil très utile. Ma dernière question porte sur {q10}." },
      { title: "Closing", text: "D'accord. J'ai bien compris toutes les informations, et elles sont très claires et utiles pour moi. Je vais {next}. Merci beaucoup pour votre temps, et bonne journée !" }
    ],
    example: {
      person: "madame",
      context: "Je viens d'arriver dans cette ville et je voudrais utiliser les transports en commun",
      q1: "le métro fonctionne tous les jours de la semaine",
      q2: "les différents types de billets disponibles",
      q3: "obtenir une carte de transport mensuelle",
      q4: "un billet simple",
      q5: "acheter les billets, en ligne ou seulement en station",
      q6: "pour les vélos dans le métro",
      q7: "valider son billet à chaque trajet",
      q8: "je perdais ma carte mensuelle",
      q9: "vient d'arriver et ne connaît pas encore la ville",
      q10: "les transports pendant la nuit : y a-t-il des autobus de nuit",
      next: "acheter une carte mensuelle dès demain"
    }
  },
  mistakes: [
    ["Avez-vous une minute ? … Tu peux me dire… ?", "Pick tu or vous and keep it", "Mixing registers is the most common error in this task."],
    ["Asking ten questions without reacting", "React to each answer, then transition", "The task assesses interaction, not a questionnaire."],
    ["Quel types des objets…", "Quels types d'objets…", "quel agrees; type de + noun without article."],
    ["Combien des personnes…", "Combien de personnes…", "combien de + noun without article."],
    ["Qu'est-ce que c'est le prix ?", "Quel est le prix ? / Combien ça coûte ?", "Don't stack question forms."],
    ["Pouvez-vous me dire où est-ce que c'est ?", "Pouvez-vous me dire où c'est ?", "Indirect questions keep statement order (Module 4)."],
    ["Effectivement, ça fait sens.", "Effectivement, c'est logique.", "\"ça fait sens\" is an anglicism."],
    ["Asking the same yes/no form every time", "Mix est-ce que, inversion, quel, combien, comment, conditional", "Range of question forms is part of the score."]
  ],
  speak: {
    intro: "Shadow the fixed phrases until they come out automatically: the opening, the transitions, the reactions and the closing. These are the parts you can prepare before exam day.",
    lines: [
      ["Bonjour madame ! J'espère que vous allez bien.", "Hello! I hope you're well."],
      ["Ça m'intéresse beaucoup, mais j'ai quelques questions à vous poser pour prendre une décision.", "I'm very interested, but I have a few questions before I decide."],
      ["Ma première question est la suivante : est-ce que le service est disponible la fin de semaine ?", "My first question is: is the service available on weekends?"],
      ["D'accord, je comprends bien. Ensuite, je voudrais savoir quels sont les tarifs.", "OK, I understand. Next, I'd like to know the rates."],
      ["Ah, je ne savais pas que c'était le cas. C'est intéressant à savoir.", "Oh, I didn't know that. That's good to know."],
      ["Si je comprends bien, cela signifie qu'il faut réserver à l'avance ?", "If I understand correctly, that means I need to book ahead?"],
      ["Puisque vous mentionnez cela, je me demande s'il y a des frais d'annulation.", "Since you mention that, I wonder whether there are cancellation fees."],
      ["Que se passerait-il si je devais annuler à la dernière minute ?", "What would happen if I had to cancel at the last minute?"],
      ["Est-il nécessaire que je sois présent en personne ?", "Do I need to be there in person?"],
      ["Je vais y réfléchir et je reviendrai vers vous dès que possible. Merci beaucoup pour votre temps !", "I'll think about it and get back to you as soon as possible. Thanks so much for your time!"]
    ],
    task: "Pick a scenario from the bank. Set a 2-minute timer and write <b>keywords only</b> for ten questions using the 10-question sequence. Then, with a 3:30 timer, ask them out loud — after each one, invent a short answer, react to it with a different phrase each time, and use a transition into the next question. Record yourself and count: how many different question forms did you use?"
  },
  vocab: [
    ["obtenir des informations", "to get information"], ["un renseignement", "a piece of information"], ["les tarifs (m.)", "rates, prices"], ["les frais (m.)", "fees"],
    ["le délai", "time needed, lead time"], ["une démarche", "a step, procedure"], ["un justificatif", "proof, supporting document"], ["les critères (m.)", "criteria"],
    ["disponible", "available"], ["une inscription", "registration"], ["un remboursement", "refund"], ["prendre bonne note de", "to take note of"]
  ],
  quiz: [
    { q: "The scenario says: <span class='fr'>« Vous appelez le service client d'un supermarché. »</span> Which register?", o: ["tu", "vous", "either, mixed"], a: 1, why: "A customer service employee → vous, consistently." },
    { q: "Which is correct?", o: ["Quel types des cours proposez-vous ?", "Quels types de cours proposez-vous ?", "Quelles types de cours proposez-vous ?"], a: 1, why: "quels agrees with types (masculine plural); type de + noun without article." },
    { q: "After the examiner answers, the best next move is…", o: ["Ask the next question immediately", "React briefly, then transition to the next question", "Repeat their answer word for word"], a: 1, why: "Reacting shows you're listening — the heart of an interaction task." },
    { q: "Best B1 boost question:", o: ["Il y a un parking ?", "Que se passerait-il si j'arrivais en retard ?", "C'est combien ?"], a: 1, why: "The conditional with si + imparfait shows grammatical range." },
    { q: "<span class='fr'>Est-il nécessaire que je ___ présent ?</span>", o: ["suis", "sois", "serai"], a: 1, why: "il est nécessaire que → subjunctive: que je sois." },
    { q: "Which transition proves you listened to the answer?", o: ["Ma première question est…", "Puisque vous mentionnez cela, je me demande…", "J'ai une autre question."], a: 1, why: "Building on what the examiner just said shows real interaction." }
  ],
  practice: [["Speaking mock with timers", "exam.html?s=speaking"], ["Negation & questions module", "learn.html#questions"], ["Subjunctive module", "learn.html#subjunctive"]],
  sources: [
    ["TCF Canada — expression orale, task formats and timing.", "https://tcf-canada.ca/expression-orale/"],
    ["Tâche 2 de l'expression orale TCF Canada : la méthode.", "https://tcfcad.com/blog/preparer-tache-2-expression-orale-tcf.html"],
    ["Boers, F. et al. (2006). Formulaic sequences and perceived oral proficiency. Language Teaching Research, 10(3), 245–261.", "https://journals.sagepub.com/doi/10.1191/1362168806lr195oa"]
  ]
});
