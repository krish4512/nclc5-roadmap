/* "Your turn" writing: one short exam-style task per module, checked live in
   the browser (no server, no AI).

   NCLC_WRITING[moduleId] = {
     prompt (French), en (English), min, max (words),
     checks: [{ label, re, n (matches needed, default 1), tip }]   ← things to include
     watch:  [{ re, tip }]                                          ← classic mistakes
     model (French), modelEn (English)
   }
   Checks only look for evidence of each structure; they can't judge every
   sentence, so the model answer is there to compare with. */
window.NCLC_WRITING = {
  basics: {
    prompt: "Présentez-vous à votre nouveau voisin : votre nom, votre âge, votre travail et votre famille.",
    en: "Introduce yourself to your new neighbour: your name, age, job and family.", min: 40, max: 70,
    checks: [
      { label: "être (je suis, il est…)", re: /\b(je suis|tu es|il est|elle est|on est|nous sommes|vous êtes|ils sont|elles sont)\b/gi, tip: "Say what you are: Je suis infirmière." },
      { label: "avoir (j'ai, il a…)", re: /\b(j'ai|j’ai|tu as|il a|elle a|on a|nous avons|vous avez|ils ont|elles ont)\b/gi, tip: "Say what you have: J'ai deux enfants." },
      { label: "Your age with avoir", re: /\b(j'ai|j’ai)\s+[\wà-ÿ-]+\s+ans\b/gi, tip: "Age uses avoir: J'ai trente ans." },
      { label: "Articles (un, une, le, la, des…)", re: /\b(un|une|des|le|la|les|du)\b/gi, n: 3, tip: "Every noun needs a little word in front." }
    ],
    watch: [
      { re: /\bje suis\s+(\d+|[\wà-ÿ-]+\s+ans)\b/gi, tip: "Age uses avoir: « J'ai 30 ans », not « je suis 30 »." },
      { re: /\bje suis (chaud|froid|faim|soif)\b/gi, tip: "Hot, cold, hunger and thirst use avoir: « J'ai chaud »." }
    ],
    model: "Bonjour ! Je m'appelle Nadia et je suis votre nouvelle voisine. J'ai trente-quatre ans. Je suis comptable dans une petite entreprise du centre-ville. J'ai un mari, Karim, et deux enfants : une fille de huit ans et un garçon de cinq ans. Nous avons aussi un chat. Nous sommes très contents d'habiter ici !",
    modelEn: "Hello! My name is Nadia and I'm your new neighbour. I'm thirty-four. I'm an accountant at a small company downtown. I have a husband, Karim, and two children: an eight-year-old girl and a five-year-old boy. We also have a cat. We're very happy to live here!"
  },
  present: {
    prompt: "Décrivez une journée typique de semaine : à quelle heure vous commencez, ce que vous faites, avec qui.",
    en: "Describe a typical weekday: what time you start, what you do, and with whom.", min: 50, max: 90,
    checks: [
      { label: "At least 5 sentences with a subject", re: /\b(je|j'|j’|il|elle|on|nous|vous|ils|elles)\s?[a-zà-ÿ]{2,}/gi, n: 5, tip: "Build each sentence around a subject and a verb." },
      { label: "Times of day", re: /\b(\d{1,2}\s?h(\s?\d{2})?|heures?|le matin|le soir|l'après-midi|le midi)\b/gi, n: 2, tip: "Add times: à 8 h, le soir…" },
      { label: "A frequency word", re: /\b(souvent|toujours|parfois|d'habitude|généralement|jamais|de temps en temps)\b/gi, tip: "Je prends souvent le métro." },
      { label: "depuis (since / for)", re: /\bdepuis\b/gi, tip: "Say how long: J'habite ici depuis deux ans." }
    ],
    watch: [
      { re: /\b(cherche|cherches|cherchons|cherchez|cherchent|attends|attend|attendons|attendez|attendent)\s+pour\b/gi, tip: "chercher and attendre take no « pour »: « J'attends le bus »." },
      { re: /\b(écoute|écoutes|écoutons|écoutez|écoutent|regarde|regardes|regardons|regardez|regardent)\s+(à|a)\s/gi, tip: "écouter and regarder take no « à »: « J'écoute la radio »." }
    ],
    model: "D'habitude, je me lève à six heures. Je commence à travailler à huit heures dans un bureau au centre-ville. Je prends souvent le métro avec ma collègue Julie. Le midi, nous mangeons ensemble à la cafétéria. Je finis à seize heures et j'attends mon fils devant l'école. Le soir, nous préparons le souper et je regarde un peu la télé. J'habite à Montréal depuis deux ans.",
    modelEn: "Usually I get up at six. I start work at eight in an office downtown. I often take the metro with my colleague Julie. At lunch we eat together in the cafeteria. I finish at four and wait for my son in front of the school. In the evening we make dinner and I watch a bit of TV. I've been living in Montreal for two years."
  },
  questions: {
    prompt: "Vous voulez louer un appartement. Écrivez cinq questions polies et variées au propriétaire.",
    en: "You want to rent an apartment. Write five polite, varied questions to the landlord.", min: 30, max: 90,
    checks: [
      { label: "Five questions", re: /\?/g, n: 5, tip: "End each question with « ? »." },
      { label: "Est-ce que…", re: /\best-ce qu/gi, tip: "Est-ce que le chauffage est inclus ?" },
      { label: "An inversion (Avez-vous… ?)", re: /\b[a-zà-ÿ]+-(vous|il|elle|on|t-il|t-elle|ils|elles)\b/gi, tip: "Formal: Pourriez-vous… ? Y a-t-il… ?" },
      { label: "Question words", re: /\b(où|quand|comment|combien|pourquoi|quel|quelle|quels|quelles)\b/gi, n: 2, tip: "Combien coûte… ? Quand… ?" },
      { label: "A polite opener", re: /\b(pourriez-vous|je voudrais savoir|excusez-moi|serait-il possible)\b/gi, tip: "Pourriez-vous me dire… ?" }
    ],
    watch: [
      { re: /\bquel\s+(types|documents|horaires|frais|services)\b/gi, tip: "quel agrees with its noun: « quels documents »." },
      { re: /\bquelle\s+(est|sont)\s+le\b/gi, tip: "Check agreement: « quel est le… », « quelle est la… »." }
    ],
    model: "Bonjour, monsieur. Est-ce que l'appartement est encore libre ? Combien coûte le loyer, et le chauffage est-il inclus ? Quand est-ce que je pourrais le visiter ? Y a-t-il un stationnement ou un espace pour les vélos ? Pourriez-vous me dire quels documents je dois apporter ?",
    modelEn: "Hello, sir. Is the apartment still available? How much is the rent, and is heating included? When could I visit it? Is there parking or a space for bikes? Could you tell me which documents I need to bring?"
  },
  describe: {
    prompt: "Décrivez votre logement et votre quartier à un ami qui va venir vous voir.",
    en: "Describe your home and neighbourhood to a friend who is coming to visit.", min: 60, max: 100,
    checks: [
      { label: "A BAGS adjective before a noun", re: /\b(petit|petite|petits|petites|grand|grande|grands|grandes|beau|bel|belle|beaux|joli|jolie|nouveau|nouvel|nouvelle|vieux|vieil|vieille|bon|bonne|mauvais|mauvaise)\s+[a-zà-ÿ]{3,}/gi, tip: "un petit balcon, une grande cuisine." },
      { label: "Where it is", re: /\b(près de|près du|loin de|loin du|à côté de|à côté du|en face de|en face du|au centre-ville|en banlieue|à \w+ minutes)\b/gi, tip: "près du métro, à dix minutes à pied de…" },
      { label: "Degree words", re: /\b(très|assez|plutôt|un peu|trop)\b/gi, n: 2, tip: "plutôt petit mais très lumineux." },
      { label: "A possessive (mon, ma, mes…)", re: /\b(mon|ma|mes|notre|nos)\b/gi, tip: "mon appartement, ma rue." }
    ],
    watch: [
      { re: /\bmon\s+(cuisine|chambre|maison|rue|ville|voisine|salle)\b/gi, tip: "Feminine nouns take ma: « ma cuisine »." },
      { re: /\b(une|la)\s+[a-zà-ÿ]+\s+(petit|grand|beau|joli|nouveau|vieux|bon)\b/gi, tip: "Check BAGS placement and agreement: « une petite cuisine »." }
    ],
    model: "J'habite dans un petit appartement au troisième étage. La cuisine est plutôt petite, mais le salon est très lumineux et il y a un beau balcon. Ma chambre donne sur une rue calme. Le quartier est assez familial : il y a un grand parc en face de l'immeuble et une épicerie à côté. C'est à dix minutes à pied du métro, alors c'est facile de venir !",
    modelEn: "I live in a small apartment on the third floor. The kitchen is rather small, but the living room is very bright and there's a nice balcony. My bedroom looks onto a quiet street. The neighbourhood is quite family-friendly: there's a big park across from the building and a grocery store next door. It's a ten-minute walk from the metro, so it's easy to get here!"
  },
  numbers: {
    prompt: "Écrivez un courriel à une clinique dentaire pour prendre rendez-vous : le jour, la date, l'heure et votre question sur le prix.",
    en: "Email a dental clinic to book an appointment: the day, date, time and a question about the price.", min: 40, max: 80,
    checks: [
      { label: "A day of the week", re: /\b(lundi|mardi|mercredi|jeudi|vendredi|samedi|dimanche)\b/gi, tip: "le mardi 3 juin." },
      { label: "A month", re: /\b(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)\b/gi, tip: "Dates are day-month: le 3 juin." },
      { label: "A time", re: /\b\d{1,2}\s?h(\s?\d{2})?\b|\bheures?\b/gi, tip: "Write times like 14 h 30." },
      { label: "A price or a question about cost", re: /(\d+([,.]\d{2})?\s?\$)|\bdollars?\b|\bcombien\b|\bprix\b|\bcoûte\b/gi, tip: "Combien coûte un nettoyage ?" }
    ],
    watch: [
      { re: /(?<![.!?]\s)(?<!^)\b(Lundi|Mardi|Mercredi|Jeudi|Vendredi|Samedi|Dimanche|Janvier|Février|Mars|Avril|Mai|Juin|Juillet|Août|Septembre|Octobre|Novembre|Décembre)\b/g, tip: "Days and months take no capital letter in French." },
      { re: /\$\s?\d/g, tip: "In Canadian French the $ goes after the amount: « 120 $ »." }
    ],
    model: "Bonjour, je voudrais prendre rendez-vous pour un nettoyage. Je suis disponible le mardi 3 juin à 14 h 30 ou le jeudi 5 juin en matinée. Pourriez-vous me dire combien coûte un nettoyage sans assurance ? Est-ce que le prix est d'environ 120 $ ? Merci beaucoup. Sami Haddad, 514 555-0199",
    modelEn: "Hello, I'd like to book an appointment for a cleaning. I'm available Tuesday June 3 at 2:30 p.m. or Thursday June 5 in the morning. Could you tell me how much a cleaning costs without insurance? Is the price about $120? Thank you very much. Sami Haddad, 514 555-0199"
  },
  irregulars: {
    prompt: "Écrivez un texto à un ami : dites-lui ce que vous venez de faire et ce que vous allez faire ce week-end.",
    en: "Text a friend: tell them what you've just done and what you're going to do this weekend.", min: 40, max: 80,
    checks: [
      { label: "venir de + infinitive (just did)", re: /\b(viens|vient|venons|venez|viennent)\s+d(e\s|'|’)/gi, tip: "Je viens de finir mon cours." },
      { label: "aller + infinitive (going to)", re: /\b(vais|vas|va|allons|allez|vont)\s+[a-zà-ÿ]+(er|ir|re)\b/gi, tip: "Je vais faire du vélo." },
      { label: "pouvoir / vouloir / devoir", re: /\b(peux|peut|pouvons|pouvez|peuvent|veux|veut|voulons|voulez|veulent|dois|doit|devons|devez|doivent)\b/gi, tip: "Tu veux venir ? Je dois travailler." },
      { label: "A place with à / au / en", re: /\b(à|au|aux|en)\s+[A-ZÉ][a-zà-ÿ]+/g, tip: "à Québec, au parc, en Ontario." }
    ],
    watch: [
      { re: /\b(vais|vas|va|allons|allez|vont)\s+à\s+[a-zà-ÿ]+(er|ir)\b/gi, tip: "No « à » before the infinitive: « Je vais visiter… »." },
      { re: /\b(viens|vient)\s+(finir|arriver|partir|manger|terminer)\b/gi, tip: "Recent past needs de: « Je viens de finir »." }
    ],
    model: "Salut Léo ! Je viens de finir mon cours de français et je suis très contente. Ce week-end, je vais aller à Québec avec ma sœur. Samedi, nous allons visiter le Vieux-Québec et dimanche, on va faire du vélo au bord du fleuve. Tu veux venir avec nous ? Tu peux prendre le train vendredi soir. Réponds-moi vite !",
    modelEn: "Hi Léo! I've just finished my French class and I'm really happy. This weekend I'm going to go to Quebec City with my sister. On Saturday we're going to visit Old Quebec and on Sunday we're going to bike along the river. Do you want to come with us? You can take the train on Friday evening. Answer me quickly!"
  },
  reflexive: {
    prompt: "Décrivez votre routine du matin, puis donnez deux conseils à un nouvel arrivant pour son premier hiver.",
    en: "Describe your morning routine, then give a newcomer two tips for their first winter.", min: 50, max: 90,
    checks: [
      { label: "Two reflexive verbs", re: /\b(je me|je m'|je m’|tu te|tu t'|il se|elle se|il s'|elle s'|on se|on s'|nous nous|vous vous|ils se|elles se)\b/gi, n: 2, tip: "Je me lève, je m'habille…" },
      { label: "Advice with an imperative", re: /\b(prenez|achetez|habillez-vous|couvrez-vous|faites|allez|soyez|essayez|pensez|gardez|portez|inscrivez-vous|n'oubliez pas|ne sortez pas|prends|achète|habille-toi|n'oublie pas)\b/gi, n: 2, tip: "Achetez de bonnes bottes ! N'oubliez pas vos gants." },
      { label: "Sequence words", re: /\b(d'abord|ensuite|puis|après|enfin)\b/gi, tip: "D'abord… ensuite…" }
    ],
    watch: [
      { re: /\bje lève\b(?!\s+(la|le|les|mon|ma|mes))/gi, tip: "Getting up is reflexive: « je me lève »." },
      { re: /\bje habille\b|\bje me habille\b/gi, tip: "Elide before a vowel: « je m'habille »." }
    ],
    model: "Le matin, je me réveille à six heures et demie. D'abord, je me douche, puis je m'habille et je me prépare un café. Ensuite, je me dépêche pour prendre l'autobus. Pour votre premier hiver, achetez de bonnes bottes et un manteau chaud. Habillez-vous en couches et n'oubliez pas votre tuque et vos mitaines !",
    modelEn: "In the morning I wake up at six-thirty. First I shower, then I get dressed and make myself a coffee. Then I hurry to catch the bus. For your first winter, buy good boots and a warm coat. Dress in layers and don't forget your toque and mittens!"
  },
  "passe-compose": {
    prompt: "Racontez votre premier jour au Canada (ou dans une nouvelle ville) : ce que vous avez fait, dans l'ordre.",
    en: "Tell the story of your first day in Canada (or in a new city): what you did, in order.", min: 50, max: 100,
    checks: [
      { label: "Passé composé with avoir", re: /\b(j'ai|j’ai|tu as|il a|elle a|on a|nous avons|vous avez|ils ont|elles ont)\s+(pas\s+|bien\s+|déjà\s+|beaucoup\s+)?[a-zà-ÿ]+(é|i|u|is|it|ert|ait)\b/gi, n: 2, tip: "J'ai cherché un logement." },
      { label: "Passé composé with être", re: /\b(je suis|tu es|il est|elle est|on est|nous sommes|vous êtes|ils sont|elles sont)\s+(allé|arrivé|parti|sorti|entré|rentré|resté|tombé|venu|revenu|devenu|monté|descendu|retourné|né)e?s?\b/gi, tip: "Je suis arrivé(e) à…" },
      { label: "Sequence connectors", re: /\b(d'abord|ensuite|puis|après|finalement|enfin)\b/gi, n: 2, tip: "D'abord… ensuite… finalement…" }
    ],
    watch: [
      { re: /\b(j'ai|j’ai|il a|elle a|nous avons|vous avez|ils ont)\s+(allé|arrivé|parti|venu|resté|sorti|tombé|entré|né)\b/gi, tip: "Movement verbs use être: « je suis arrivé »." },
      { re: /\belle est (allé|arrivé|parti|venu|resté|sorti|tombé|entré)\b/gi, tip: "With être, add -e for « elle »: « elle est arrivée »." }
    ],
    model: "Je suis arrivé à Toronto un matin de septembre. D'abord, j'ai pris le train jusqu'au centre-ville et j'ai trouvé mon auberge. Ensuite, je suis allé à la banque et j'ai ouvert un compte. L'après-midi, j'ai acheté une carte SIM et j'ai appelé ma famille. Finalement, le soir, je suis sorti marcher près du lac. J'étais fatigué, mais très content.",
    modelEn: "I arrived in Toronto one September morning. First I took the train downtown and found my hostel. Then I went to the bank and opened an account. In the afternoon I bought a SIM card and called my family. Finally, in the evening, I went out for a walk near the lake. I was tired, but very happy."
  },
  imparfait: {
    prompt: "Comparez votre vie avant votre arrivée et votre vie maintenant (logement, travail, habitudes).",
    en: "Compare your life before you arrived and your life now (housing, work, habits).", min: 50, max: 100,
    checks: [
      { label: "Verbs in the imparfait", re: /\b(?!mais\b|jamais\b|français\b|anglais\b|vrais\b|frais\b|palais\b|j'ai\b)[a-zà-ÿ']+(ais|ait|aient|ions|iez)\b/gi, n: 3, tip: "J'habitais, je travaillais, il faisait…" },
      { label: "A “before” marker", re: /\b(avant|à l'époque|autrefois|quand j'étais|dans mon pays)\b/gi, tip: "Avant, j'habitais…" },
      { label: "A “now” marker", re: /\b(maintenant|aujourd'hui|depuis|ici)\b/gi, tip: "Maintenant, je vis…" }
    ],
    watch: [
      { re: /\bquand j'ai été (petit|petite|jeune|enfant)\b/gi, tip: "Background states use the imparfait: « quand j'étais petit »." },
      { re: /\bavant,? j'ai (habité|travaillé|eu)\b/gi, tip: "Habits and situations before: « Avant, j'habitais… »." }
    ],
    model: "Avant, j'habitais à Casablanca avec mes parents. Je travaillais comme ingénieur et je prenais la voiture tous les jours. Il faisait chaud presque toute l'année ! Maintenant, je vis à Ottawa dans un petit appartement. Je travaille dans un laboratoire et je prends l'autobus. L'hiver est difficile, mais j'aime ma nouvelle vie et j'ai beaucoup d'amis ici.",
    modelEn: "Before, I lived in Casablanca with my parents. I worked as an engineer and drove every day. It was hot almost all year! Now I live in Ottawa in a small apartment. I work in a lab and take the bus. Winter is hard, but I love my new life and I have lots of friends here."
  },
  pronouns: {
    prompt: "Répondez à ce message en utilisant des pronoms : « Tu as vu le nouveau film ? Tu as appelé tes parents ? Tu vas à la fête samedi ? Tu as acheté des fruits ? »",
    en: "Answer this message using pronouns: “Did you see the new film? Did you call your parents? Are you going to the party on Saturday? Did you buy fruit?”", min: 30, max: 80,
    checks: [
      { label: "le / la / les / l'", re: /\b(je|tu|il|elle|on|nous|vous|ne)\s+(l'|l’|le|la|les)\s*[a-zà-ÿ]/gi, tip: "Le film ? Je l'ai vu." },
      { label: "lui / leur", re: /\b(lui|leur)\b/gi, tip: "Mes parents ? Je leur ai téléphoné." },
      { label: "y", re: /\b(j'y|j’y|y vais|y aller|n'y|y suis)\b/gi, tip: "La fête ? Oui, j'y vais." },
      { label: "en", re: /\b(j'en|j’en|en ai|en acheter|n'en|en reste)\b/gi, tip: "Des fruits ? J'en ai acheté." }
    ],
    watch: [
      { re: /\bje ai\b|\bje en\b|\bje y\b/gi, tip: "Elide before a vowel: « j'ai », « j'en », « j'y »." },
      { re: /\bje les\s+(ai\s+)?(téléphoné|parlé|écrit)\b/gi, tip: "téléphoner / parler / écrire à + people → leur: « je leur ai téléphoné »." }
    ],
    model: "Salut ! Le nouveau film ? Oui, je l'ai vu hier, il est super. Mes parents ? Je leur ai téléphoné dimanche, ils vont bien. La fête de samedi ? Oui, j'y vais, bien sûr ! Et les fruits, j'en ai acheté ce matin au marché. À samedi !",
    modelEn: "Hi! The new film? Yes, I saw it yesterday, it's great. My parents? I called them on Sunday, they're fine. Saturday's party? Yes, I'm going, of course! And the fruit, I bought some this morning at the market. See you Saturday!"
  },
  "compare-future": {
    prompt: "Comparez votre ville à une autre ville que vous connaissez, puis dites ce que vous ferez l'année prochaine.",
    en: "Compare your city with another city you know, then say what you'll do next year.", min: 50, max: 100,
    checks: [
      { label: "Comparisons (plus / moins / aussi … que)", re: /\b(plus|moins|aussi)\s+[a-zà-ÿ]+\s+(que|qu')|\b(meilleur|meilleure|meilleurs|mieux|pire|autant de|plus de|moins de)\b/gi, n: 2, tip: "Montréal est plus grande que Québec." },
      { label: "Futur simple", re: /\b(?!vrai\b|mirai\b)[a-zà-ÿ]+(erai|iras?|irai|rai|ras|ra|rons|rez|ront)\b/gi, n: 2, tip: "J'irai, je travaillerai, nous déménagerons." },
      { label: "quand + futur", re: /\bquand\s+(je|j'|tu|il|elle|on|nous|vous|ils|elles)\s*[a-zà-ÿ]+(rai|ras|ra|rons|rez|ront)\b/gi, tip: "Quand j'aurai mon diplôme, je…" }
    ],
    watch: [
      { re: /\bplus bon(ne)?s?\b/gi, tip: "Never « plus bon »: use « meilleur »." },
      { re: /\bplus mieux\b/gi, tip: "mieux already means “better”." }
    ],
    model: "Je vis à Gatineau, une ville plus petite et plus calme qu'Ottawa. Les loyers sont moins chers, mais il y a moins de restaurants. Les transports sont aussi pratiques qu'à Ottawa. L'année prochaine, je finirai ma formation et je chercherai un emploi en informatique. Quand j'aurai un bon salaire, nous achèterons une maison près de la rivière.",
    modelEn: "I live in Gatineau, a smaller and quieter city than Ottawa. Rents are cheaper, but there are fewer restaurants. Transit is as convenient as in Ottawa. Next year I'll finish my training and look for a job in IT. When I have a good salary, we'll buy a house near the river."
  },
  conditional: {
    prompt: "Écrivez un courriel poli au gestionnaire de votre immeuble : signalez un problème et proposez des disponibilités.",
    en: "Write a polite email to your building manager: report a problem and suggest when you're available.", min: 50, max: 110,
    checks: [
      { label: "A formal greeting", re: /\b(madame|monsieur|bonjour)\b/gi, tip: "Bonjour Monsieur Gagnon," },
      { label: "Conditional verbs", re: /\b[a-zà-ÿ]+(rais|rait|rions|riez|raient)\b/gi, n: 2, tip: "Je serais disponible… Pourriez-vous… ?" },
      { label: "A polite request", re: /\b(pourriez-vous|je voudrais|serait-il possible|je vous serais reconnaissant|auriez-vous)\b/gi, tip: "Pourriez-vous envoyer un technicien ?" },
      { label: "A formal closing", re: /\b(cordialement|salutations|je vous remercie|merci de votre)\b/gi, tip: "Je vous remercie de votre aide. Cordialement," }
    ],
    watch: [
      { re: /\bsi\s+(je|j'|tu|il|elle|on|nous|vous|ils|elles)\s*[a-zà-ÿ]+(rais|rait|rions|riez|raient)\b/gi, tip: "Never the conditional right after si: « si c'était possible »." },
      { re: /\b(tu|ton|ta|tes)\b/gi, tip: "A building manager gets vous, not tu." }
    ],
    model: "Bonjour Monsieur Gagnon,\nLe robinet de la cuisine de mon appartement (no 204) fuit depuis trois jours. Pourriez-vous envoyer un plombier cette semaine ? Je serais disponible mercredi après 17 h. Si ce n'était pas possible, je pourrais aussi être là samedi matin. Je vous remercie de votre aide.\nCordialement,\nLucía Torres",
    modelEn: "Hello Mr. Gagnon,\nThe kitchen tap in my apartment (no. 204) has been leaking for three days. Could you send a plumber this week? I'd be available Wednesday after 5 p.m. If that weren't possible, I could also be there Saturday morning. Thank you for your help.\nRegards,\nLucía Torres"
  },
  relatives: {
    prompt: "Décrivez une personne importante pour vous et expliquez pourquoi.",
    en: "Describe a person who is important to you and explain why.", min: 60, max: 100,
    checks: [
      { label: "qui", re: /\bqui\b/gi, tip: "une amie qui m'aide…" },
      { label: "que / qu'", re: /\b(que|qu'|qu’)(?!\s?est-ce)/gi, tip: "la ville que j'aime…" },
      { label: "où or dont", re: /\b(où|dont)\b/gi, tip: "le jour où…, la personne dont je parle…" },
      { label: "ce qui / ce que", re: /\bce (qui|que|qu'|qu’|dont)\b/gi, tip: "Ce que j'admire, c'est…" }
    ],
    watch: [
      { re: /\b(personne|femme|homme|amie?|collègue|professeure?)\s+que\s+(m'a|m'aide|est|habite|travaille)\b/gi, tip: "Subject of the next verb → qui: « une amie qui m'aide »." }
    ],
    model: "La personne qui compte le plus pour moi, c'est ma grand-mère. C'est elle qui m'a appris à cuisiner. Elle habite dans le village où je suis né. Ce que j'admire chez elle, c'est son courage : elle a élevé six enfants seule. C'est aussi la personne dont je suis le plus fier. Chaque dimanche, je l'appelle et elle me raconte des histoires que j'adore.",
    modelEn: "The person who matters most to me is my grandmother. She's the one who taught me to cook. She lives in the village where I was born. What I admire about her is her courage: she raised six children alone. She's also the person I'm proudest of. Every Sunday I call her and she tells me stories I love."
  },
  subjunctive: {
    prompt: "Vous êtes responsable d'un club de soccer. Écrivez les règles pour les nouveaux membres.",
    en: "You run a soccer club. Write the rules for new members.", min: 50, max: 90,
    checks: [
      { label: "Two subjunctive triggers", re: /\b(il faut que|il faut qu'|il est important que|il est nécessaire que|il vaut mieux que|nous souhaitons que|nous voulons que|je veux que|bien que|pour que|avant que|à condition que)\b/gi, n: 2, tip: "Il faut que…, Il est important que…" },
      { label: "Subjunctive forms", re: /\b(soit|soient|sois|soyez|ait|aient|ayez|aille|aillent|alliez|fasse|fassent|fassiez|puisse|puissent|puissiez|sache|sachiez|preniez|veniez|arriviez|apportiez|respectiez|portiez|payiez|préveniez|écriviez|téléphoniez)\b/gi, n: 2, tip: "que vous soyez, que vous ayez, que vous fassiez…" }
    ],
    watch: [
      { re: /\bil faut que (vous|tu|nous) (êtes|es|sommes|avez|as|avons|allez|vas|faites|fais|pouvez|peux)\b/gi, tip: "After il faut que, use the subjunctive: « que vous soyez », « que vous ayez »." },
      { re: /\bje pense que (ce|il|elle) (soit|ait)\b/gi, tip: "Affirmative opinions take the indicative: « je pense que c'est »." }
    ],
    model: "Bienvenue au club ! Il faut que vous soyez à l'heure à chaque entraînement. Il est important que vous ayez des souliers à crampons et une bouteille d'eau. Si vous êtes absent, nous voulons que vous préveniez l'entraîneur avant midi. Bien que le club soit gratuit, il faut que chaque membre fasse un peu de bénévolat pendant la saison.",
    modelEn: "Welcome to the club! You must be on time for every practice. It's important that you have cleats and a water bottle. If you're absent, we want you to let the coach know before noon. Although the club is free, every member has to do some volunteering during the season."
  },
  argue: {
    prompt: "Donnez votre opinion : « Le télétravail est-il une bonne solution ? » Utilisez le plan en quatre parties.",
    en: "Give your opinion: “Is working from home a good solution?” Use the four-part plan.", min: 80, max: 160,
    checks: [
      { label: "Your opinion", re: /\b(à mon avis|selon moi|d'après moi|personnellement|je pense que|je trouve que|j'estime que)\b/gi, tip: "Personnellement, je pense que…" },
      { label: "Cause", re: /\b(parce que|parce qu'|car|puisque|puisqu'|comme|étant donné que|grâce à)/gi, tip: "parce que, car, puisque…" },
      { label: "Consequence", re: /\b(donc|alors|c'est pourquoi|par conséquent|ainsi)\b/gi, tip: "donc, par conséquent…" },
      { label: "Concession + contrast", re: /\b(il est vrai que|même si|bien que|certes|cependant|pourtant|en revanche|toutefois)\b/gi, n: 2, tip: "Il est vrai que… Cependant…" },
      { label: "Conclusion", re: /\b(en conclusion|pour conclure|bref|en somme|finalement)\b/gi, tip: "En conclusion, …" }
    ],
    watch: [
      { re: /\bmalgré que\b/gi, tip: "Use « bien que » (+ subjunctive) or « malgré » + noun." }
    ],
    model: "On se demande souvent si le télétravail est une bonne solution. Personnellement, je pense que oui, à condition de garder un équilibre. D'abord, on gagne du temps, puisqu'on ne passe plus une heure dans la circulation. Ensuite, on peut mieux organiser sa journée, donc on est souvent plus efficace. Il est vrai que certaines personnes se sentent seules à la maison. Cependant, deux jours au bureau par semaine suffisent pour garder le contact avec l'équipe. En conclusion, les entreprises devraient proposer un modèle hybride.",
    modelEn: "People often wonder whether working from home is a good solution. Personally, I think so, as long as you keep a balance. First, you save time, since you no longer spend an hour in traffic. Then you can organise your day better, so you're often more efficient. It's true that some people feel lonely at home. However, two days a week at the office are enough to stay in touch with the team. In conclusion, companies should offer a hybrid model."
  },
  reported: {
    prompt: "Racontez une conversation récente avec votre médecin ou votre patron : ce qu'il ou elle vous a dit et demandé.",
    en: "Report a recent conversation with your doctor or boss: what they told you and asked you.", min: 50, max: 100,
    checks: [
      { label: "Reporting verbs", re: /\b(m'a dit|a dit|m'a demandé|a demandé|a expliqué|m'a expliqué|a répondu|a annoncé)\b/gi, n: 2, tip: "Il m'a dit que… Elle m'a demandé si…" },
      { label: "A reported question (si / où / ce que)", re: /\bdemandé\s+(si|s'|où|quand|comment|pourquoi|combien|ce que|ce qui)\b/gi, tip: "Elle m'a demandé si j'avais…" },
      { label: "Tense shift (imparfait / conditionnel)", re: /\b(que|qu')\s*(je|j'|il|elle|on|nous|vous|ils|elles|c'|ce n'|ce|ça)\s*[a-zà-ÿ]+(ais|ait|aient|rais|rait|raient)\b/gi, tip: "…qu'il viendrait, que c'était…" },
      { label: "An order: de + infinitive", re: /\b(m'a dit|m'a demandé|nous a demandé|lui a dit)\s+de\s+[a-zà-ÿ]+/gi, tip: "Il m'a dit de me reposer." }
    ],
    watch: [
      { re: /\bdemandé\s+est-ce que\b/gi, tip: "Reported yes/no questions use si, not est-ce que." },
      { re: /\bm'a dit que (je|il|elle) (vais|va|viendra)\b/gi, tip: "After a past reporting verb, shift: « il m'a dit qu'il allait / viendrait »." }
    ],
    model: "Hier, j'ai vu ma médecin. Elle m'a demandé si j'avais de la fièvre et depuis quand je toussais. Je lui ai répondu que ça faisait une semaine. Elle m'a expliqué que ce n'était pas grave, mais qu'elle m'enverrait une ordonnance à la pharmacie. Elle m'a dit de me reposer pendant deux jours et de boire beaucoup d'eau.",
    modelEn: "Yesterday I saw my doctor. She asked me if I had a fever and how long I'd been coughing. I answered that it had been a week. She explained that it wasn't serious, but that she would send a prescription to the pharmacy. She told me to rest for two days and drink lots of water."
  },
  exam: {
    prompt: "TCF, tâche 1 : écrivez un message à un ami pour l'inviter à votre fête d'anniversaire (date, heure, lieu, ce qu'il faut apporter).",
    en: "TCF task 1: write a message inviting a friend to your birthday party (date, time, place, what to bring).", min: 60, max: 120,
    checks: [
      { label: "A greeting", re: /\b(salut|bonjour|coucou|cher|chère|allô)\b/gi, tip: "Salut Marie !" },
      { label: "tu register throughout", re: /\b(tu|te|t'|ton|ta|tes|toi)\b/gi, n: 2, tip: "With a friend: tu, ton, ta…" },
      { label: "Date and time", re: /\b(lundi|mardi|mercredi|jeudi|vendredi|samedi|dimanche|\d{1,2}\s?h(\s?\d{2})?|heures?)\b/gi, n: 2, tip: "samedi 12 avril à 19 h" },
      { label: "The place", re: /\b(chez moi|chez nous|au|à la|à l'|dans le|dans la|adresse)\b/gi, tip: "chez moi, au 25 rue…" },
      { label: "A closing", re: /\b(à bientôt|bisous|à plus|amitiés|à samedi|à vendredi|je t'embrasse)\b/gi, tip: "À bientôt !" }
    ],
    watch: [
      { re: /\b(vous|votre|vos)\b/gi, tip: "Writing to a friend: stay with tu throughout." }
    ],
    model: "Salut Marie !\nJe fête mes trente ans le samedi 12 avril et j'aimerais beaucoup que tu viennes ! La fête commence à 19 h chez moi, au 25 rue Laurier. Il y aura de la musique et un grand repas. Est-ce que tu pourrais apporter un dessert ou une salade ? Dis-moi avant mercredi si tu peux venir. Tu peux aussi venir avec ton copain.\nÀ bientôt !\nSara",
    modelEn: "Hi Marie!\nI'm celebrating my thirtieth birthday on Saturday, April 12 and I'd really like you to come! The party starts at 7 p.m. at my place, 25 Laurier Street. There'll be music and a big meal. Could you bring a dessert or a salad? Let me know before Wednesday if you can come. You can bring your boyfriend too.\nSee you soon!\nSara"
  },
  "tcf-t2": {
    prompt: "Situation : vous voulez vous inscrire à un club de randonnée. Écrivez huit questions variées que vous poserez au responsable (vous).",
    en: "Situation: you want to join a hiking club. Write eight varied questions you'll ask the person in charge (vous).", min: 50, max: 140,
    checks: [
      { label: "Eight questions", re: /\?/g, n: 8, tip: "End each question with « ? »." },
      { label: "Est-ce que… / Y a-t-il… / Faut-il…", re: /\b(est-ce qu|y a-t-il|faut-il|est-il possible)/gi, n: 2, tip: "Y a-t-il… ? Faut-il… ?" },
      { label: "Quel / quels / quelle…", re: /\b(quel|quelle|quels|quelles)\b/gi, tip: "Quels sont les tarifs ?" },
      { label: "Combien / comment / où", re: /\b(combien|comment|où)\b/gi, n: 2, tip: "Combien coûte… ? Comment peut-on… ?" },
      { label: "A B1 boost (conditional or subjunctive)", re: /\b(que se passerait-il|serait-il possible|que conseilleriez-vous|pourriez-vous|est-il nécessaire que|faut-il que)\b/gi, tip: "Que se passerait-il si je devais annuler ?" }
    ],
    watch: [
      { re: /\b(tu|ton|ta|tes)\b/gi, tip: "The person in charge gets vous — keep it consistent." }
    ],
    model: "Est-ce que le club accepte les débutants ? Quels sont les niveaux de difficulté des randonnées ? Combien coûte l'inscription pour une année ? Y a-t-il un guide professionnel pendant les sorties ? Faut-il avoir son propre équipement ? Comment peut-on s'inscrire aux sorties de la fin de semaine ? Où ont lieu les randonnées, en général ? Que se passerait-il si je devais annuler à la dernière minute ?",
    modelEn: "Does the club accept beginners? What are the difficulty levels of the hikes? How much is a one-year membership? Is there a professional guide on outings? Do you need your own equipment? How can you sign up for weekend outings? Where do the hikes usually take place? What would happen if I had to cancel at the last minute?"
  },
  "tcf-t3": {
    prompt: "Écrivez votre réponse complète à la question : « Les réseaux sociaux rapprochent-ils vraiment les gens ? » Suivez le modèle en cinq parties.",
    en: "Write your full answer to: “Do social networks really bring people closer?” Follow the five-part template.", min: 150, max: 260,
    checks: [
      { label: "The opening (le sujet… la question de savoir)", re: /\b(le sujet sur lequel|la question de savoir)\b/gi, tip: "Le sujet sur lequel je vais m'exprimer porte sur…" },
      { label: "Argument 1 (la première raison)", re: /\bla première raison\b/gi, tip: "La première raison, c'est que…" },
      { label: "Reset phrases", re: /\b(je m'explique|par exemple|c'est le cas de)\b/gi, n: 2, tip: "Je m'explique : … Par exemple, …" },
      { label: "The bridge", re: /\b(m'amène|il faut considérer que|pour ajouter à cette raison)\b/gi, tip: "Ce premier point m'amène au second…" },
      { label: "The counterpoint", re: /\b(d'un autre côté|en revanche)\b/gi, n: 2, tip: "D'un autre côté… En revanche…" },
      { label: "The conclusion", re: /\b(pour conclure|en fin de compte)\b/gi, tip: "Pour conclure… En fin de compte…" }
    ],
    watch: [
      { re: /\bde l'autre côté\b/gi, tip: "Use « d'un autre côté » for “on the other hand”." },
      { re: /\bà la fin\b/gi, tip: "To conclude, use « en fin de compte », not « à la fin »." }
    ],
    model: "Alors, le sujet sur lequel je vais m'exprimer aujourd'hui porte sur les réseaux sociaux, et plus précisément sur la question de savoir s'ils rapprochent vraiment les gens. J'ai un avis nuancé sur ce sujet. La première raison de dire oui, c'est qu'ils permettent de garder le contact à distance. Je m'explique : quand on immigre, on peut parler à sa famille chaque jour. Par exemple, je vois mes neveux grandir grâce aux vidéos. Ce premier point m'amène au second : on peut trouver des gens qui partagent nos passions. Il faut considérer que beaucoup de nouveaux arrivants trouvent leur premier réseau en ligne. D'un autre côté, certaines personnes pensent que les écrans nous isolent. En revanche, il ne fait aucun doute que le problème vient surtout de l'excès. Pour conclure, je dirais que les réseaux rapprochent ceux qui sont loin, mais peuvent éloigner ceux qui sont proches. En fin de compte, il vaut mieux qu'un équilibre soit maintenu.",
    modelEn: "So, the topic I'm going to talk about today is social networks, and more precisely whether they really bring people closer. I have a nuanced view. The first reason to say yes is that they let us stay in touch at a distance. Let me explain: when you immigrate, you can talk to your family every day. For example, I watch my nephews grow up through videos. This first point leads me to the second: you can find people who share your passions. We have to consider that many newcomers find their first network online. On the other hand, some people think screens isolate us. However, there's no doubt the problem mostly comes from excess. To conclude, I'd say social networks bring together those who are far away, but can drive apart those who are close. In the end, it's better to keep a balance."
  }
};
