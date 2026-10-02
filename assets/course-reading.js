/* "Real life": one short authentic-style text per module — a text message, a
   notice, an email, a voicemail, a dialogue — built from that module's
   grammar, set in everyday Canadian life, with three comprehension questions.

   NCLC_READING[moduleId] = {
     kind: "text" | "email" | "notice" | "voicemail" | "dialogue" | "post" | "ad",
     title, intro (English, what this is),
     lines: [[speaker or "", French, English], …],
     q: [{ c: "question", o: ["right", "wrong", …], why: "…" }, …]   (same shape as course-practice.js)
   } */
window.NCLC_READING = {
  method: {
    kind: "post", title: "Forum : « Comment vous apprenez le français ? »",
    intro: "A post on a forum for newcomers preparing for the TCF.",
    lines: [
      ["Priya", "Bonjour à tous ! J'apprends le français depuis six mois pour le TCF Canada.", "Hi everyone! I've been learning French for six months for the TCF Canada."],
      ["", "Avant, je relisais mes notes tous les soirs, mais j'oubliais tout.", "Before, I reread my notes every evening, but I forgot everything."],
      ["", "Maintenant, je fais des petits tests, je révise le lendemain, puis une semaine plus tard.", "Now I do little tests, I review the next day, then a week later."],
      ["", "J'écoute aussi un balado facile pendant vingt minutes et je répète les phrases à voix haute.", "I also listen to an easy podcast for twenty minutes and repeat the sentences out loud."],
      ["", "Et vous, qu'est-ce qui marche pour vous ?", "And you, what works for you?"]
    ],
    q: [
      { c: "What did Priya do before?", o: ["She reread her notes every evening", "She took little tests", "She listened to podcasts"], why: "« Avant, je relisais mes notes tous les soirs. »" },
      { c: "When does she review now?", o: ["The next day, then a week later", "Only the night before the exam", "Every hour"], why: "« je révise le lendemain, puis une semaine plus tard » — spaced review." },
      { c: "What does she do with the podcast?", o: ["Repeats the sentences out loud", "Translates every word", "Writes it down"], why: "« je répète les phrases à voix haute » — that's shadowing." }
    ]
  },
  sounds: {
    kind: "dialogue", title: "Au café, à Québec",
    intro: "Ordering at a café. Listen for the liaisons and the linked words.",
    lines: [
      ["Serveur", "Bonjour ! Vous êtes prêts à commander ?", "Hello! Are you ready to order?"],
      ["Léa", "Oui. Je voudrais un café au lait et un croissant, s'il vous plaît.", "Yes. I'd like a latte and a croissant, please."],
      ["Omar", "Pour moi, un thé vert. Est-ce que vous avez des muffins aux bleuets ?", "For me, a green tea. Do you have blueberry muffins?"],
      ["Serveur", "Oui, il en reste deux. C'est huit dollars en tout.", "Yes, there are two left. That's eight dollars in all."],
      ["Omar", "Parfait, on prend les deux muffins !", "Perfect, we'll take both muffins!"]
    ],
    q: [
      { c: "What does Léa order?", o: ["A latte and a croissant", "A green tea", "Two muffins"], why: "« un café au lait et un croissant »." },
      { c: "How many blueberry muffins are left?", o: ["Two", "Eight", "None"], why: "« il en reste deux »." },
      { c: "In « Vous‿êtes », the s of vous sounds like…", o: ["z", "s", "nothing"], why: "Liaison: s becomes [z] before a vowel." }
    ]
  },
  basics: {
    kind: "text", title: "Un texto de votre nouvelle voisine",
    intro: "Your new neighbour introduces herself by text message.",
    lines: [
      ["Sofia", "Salut ! Je suis Sofia, ta voisine du 3e étage.", "Hi! I'm Sofia, your neighbour on the 3rd floor."],
      ["", "Je suis infirmière à l'hôpital et j'ai deux enfants, Lucas et Emma.", "I'm a nurse at the hospital and I have two children, Lucas and Emma."],
      ["", "Samedi, on fait une petite fête dans la cour. Il y a du gâteau et de la limonade.", "On Saturday we're having a little party in the yard. There's cake and lemonade."],
      ["", "Tu as le temps de passer ? Tu es la bienvenue !", "Do you have time to drop by? You're welcome!"]
    ],
    q: [
      { c: "What is Sofia's job?", o: ["She's a nurse", "She's a teacher", "She's a cook"], why: "« Je suis infirmière » — être + a bare profession." },
      { c: "How many children does she have?", o: ["Two", "Three", "One"], why: "« j'ai deux enfants »." },
      { c: "What will there be at the party?", o: ["Cake and lemonade", "Pizza", "Coffee only"], why: "« du gâteau et de la limonade » — partitive articles." }
    ]
  },
  present: {
    kind: "post", title: "Ma journée type",
    intro: "A newcomer describes a typical weekday on a community blog.",
    lines: [
      ["Karim", "Je me présente : je m'appelle Karim et je travaille dans un entrepôt à Laval.", "Let me introduce myself: my name is Karim and I work in a warehouse in Laval."],
      ["", "Je commence à sept heures, alors je prends l'autobus à six heures et quart.", "I start at seven, so I take the bus at a quarter past six."],
      ["", "Le midi, nous mangeons ensemble à la cafétéria.", "At lunchtime, we eat together in the cafeteria."],
      ["", "L'après-midi, je finis à quinze heures et j'attends ma fille devant l'école.", "In the afternoon I finish at three and wait for my daughter in front of the school."],
      ["", "J'apprends le français depuis un an, et je parle souvent avec mes collègues.", "I've been learning French for a year, and I often talk with my colleagues."]
    ],
    q: [
      { c: "What time does Karim start work?", o: ["At seven", "At six fifteen", "At three"], why: "« Je commence à sept heures »; the bus is at 6:15." },
      { c: "Where does he wait for his daughter?", o: ["In front of the school", "At the cafeteria", "At the warehouse"], why: "« j'attends ma fille devant l'école » — attendre, no « pour »." },
      { c: "How long has he been learning French?", o: ["For a year, and he still is", "He learned it a year ago", "He started yesterday"], why: "« depuis un an » + present = still going on." }
    ]
  },
  questions: {
    kind: "dialogue", title: "Au téléphone avec un propriétaire",
    intro: "Calling about an apartment for rent.",
    lines: [
      ["Vous", "Bonjour, monsieur. Je vous appelle pour l'appartement sur la rue Saint-Denis. Est-ce qu'il est encore libre ?", "Hello, sir. I'm calling about the apartment on Saint-Denis Street. Is it still available?"],
      ["Propriétaire", "Oui, il est libre à partir du premier juillet.", "Yes, it's free from July 1st."],
      ["Vous", "Combien coûte le loyer ? Et le chauffage, il est inclus ?", "How much is the rent? And is heating included?"],
      ["Propriétaire", "C'est 1 350 $ par mois. Non, le chauffage n'est pas inclus, et il n'y a pas de stationnement.", "It's $1,350 a month. No, heating isn't included, and there's no parking."],
      ["Vous", "Pourriez-vous me dire quand je peux le visiter ?", "Could you tell me when I can visit it?"],
      ["Propriétaire", "Samedi matin, si ça vous va.", "Saturday morning, if that works for you."]
    ],
    q: [
      { c: "When is the apartment available?", o: ["July 1st", "Saturday", "Right now"], why: "« libre à partir du premier juillet »." },
      { c: "Is heating included?", o: ["No", "Yes", "Only in winter"], why: "« le chauffage n'est pas inclus »." },
      { c: "What else is missing?", o: ["Parking", "A kitchen", "Windows"], why: "« il n'y a pas de stationnement »." }
    ]
  },
  describe: {
    kind: "ad", title: "À louer : 4 ½ à Sherbrooke",
    intro: "A rental listing. (In Quebec, a « 4 ½ » has two bedrooms, a living room and a kitchen.)",
    lines: [
      ["", "Beau 4 ½ lumineux au deuxième étage, dans un quartier calme et familial.", "Beautiful bright 4½ on the second floor, in a quiet, family neighbourhood."],
      ["", "Grande cuisine rénovée, deux chambres fermées et un petit balcon.", "Large renovated kitchen, two closed bedrooms and a small balcony."],
      ["", "À cinq minutes à pied de l'université et près d'une épicerie.", "Five minutes' walk from the university and near a grocery store."],
      ["", "Ce logement est idéal pour un jeune couple ou des étudiants sérieux.", "This apartment is ideal for a young couple or serious students."],
      ["", "Animaux non acceptés.", "No pets."]
    ],
    q: [
      { c: "How is the neighbourhood described?", o: ["Quiet and family-friendly", "Noisy and lively", "Far from everything"], why: "« un quartier calme et familial »." },
      { c: "What's near the apartment?", o: ["The university and a grocery store", "A hospital", "A park and a school"], why: "« À cinq minutes à pied de l'université et près d'une épicerie »." },
      { c: "Can you bring your cat?", o: ["No", "Yes", "Only a small one"], why: "« Animaux non acceptés »." }
    ]
  },
  numbers: {
    kind: "notice", title: "Pharmacie du Quartier : horaire et promotions",
    intro: "A sign on a pharmacy door.",
    lines: [
      ["", "Ouvert du lundi au vendredi de 9 h à 21 h, le samedi de 10 h à 18 h.", "Open Monday to Friday from 9 a.m. to 9 p.m., Saturday from 10 a.m. to 6 p.m."],
      ["", "Fermé le dimanche et le lundi 13 octobre (Action de grâce).", "Closed on Sundays and on Monday, October 13 (Thanksgiving)."],
      ["", "Cette semaine : vitamines D à 12,99 $ au lieu de 15,99 $.", "This week: vitamin D at $12.99 instead of $15.99."],
      ["", "Vaccin contre la grippe : sans rendez-vous, le mardi de 14 h à 16 h 30.", "Flu shot: no appointment needed, Tuesdays from 2 to 4:30 p.m."],
      ["", "Taxes en sus.", "Plus taxes."]
    ],
    q: [
      { c: "What time does the pharmacy close on Saturday?", o: ["6 p.m.", "9 p.m.", "It's closed"], why: "« le samedi de 10 h à 18 h »." },
      { c: "How much are the vitamins this week?", o: ["$12.99 plus taxes", "$15.99", "$12.99 taxes included"], why: "« 12,99 $ … Taxes en sus »." },
      { c: "When can you get a flu shot without an appointment?", o: ["Tuesday, 2 to 4:30 p.m.", "Every day", "Monday, October 13"], why: "« le mardi de 14 h à 16 h 30 »." }
    ]
  },
  irregulars: {
    kind: "voicemail", title: "Un message vocal de votre collègue",
    intro: "Your colleague Martin leaves you a voicemail.",
    lines: [
      ["Martin", "Salut, c'est Martin ! Je viens de sortir de la réunion.", "Hi, it's Martin! I've just come out of the meeting."],
      ["", "Le patron veut nous voir demain matin. Tu peux venir à huit heures ?", "The boss wants to see us tomorrow morning. Can you come at eight?"],
      ["", "Moi, je vais prendre le train de sept heures, alors je dois partir tôt.", "I'm going to take the seven o'clock train, so I have to leave early."],
      ["", "Tu sais où est la nouvelle salle ? Je ne connais pas encore l'étage.", "Do you know where the new room is? I don't know the floor yet."],
      ["", "Rappelle-moi ce soir. Merci !", "Call me back tonight. Thanks!"]
    ],
    q: [
      { c: "What has Martin just done?", o: ["Come out of a meeting", "Arrived at work", "Taken the train"], why: "« Je viens de sortir de la réunion » — venir de = just did." },
      { c: "What is he going to do tomorrow?", o: ["Take the 7 o'clock train", "Stay home", "Drive to work"], why: "« je vais prendre le train de sept heures » — aller + infinitive." },
      { c: "What doesn't he know yet?", o: ["Which floor the new room is on", "The boss's name", "What time it is"], why: "« Je ne connais pas encore l'étage »." }
    ]
  },
  reflexive: {
    kind: "notice", title: "Piscine municipale : consignes",
    intro: "Rules posted at a city swimming pool.",
    lines: [
      ["", "Douchez-vous avant d'entrer dans la piscine.", "Shower before entering the pool."],
      ["", "Ne courez pas autour du bassin.", "Don't run around the pool."],
      ["", "Les enfants de moins de 8 ans doivent se baigner avec un adulte.", "Children under 8 must swim with an adult."],
      ["", "Changez-vous dans les vestiaires et rangez vos effets dans un casier.", "Change in the locker rooms and put your things in a locker."],
      ["", "En cas de problème, adressez-vous au sauveteur.", "If there's a problem, speak to the lifeguard."]
    ],
    q: [
      { c: "What must you do before entering the pool?", o: ["Take a shower", "Run a lap", "Talk to the lifeguard"], why: "« Douchez-vous avant d'entrer » — a reflexive imperative." },
      { c: "Who must swim with an adult?", o: ["Children under 8", "Everyone", "Beginners"], why: "« Les enfants de moins de 8 ans doivent se baigner avec un adulte »." },
      { c: "« Ne courez pas » means…", o: ["Don't run", "Don't swim", "Don't shout"], why: "Negative imperative of courir." }
    ]
  },
  "passe-compose": {
    kind: "post", title: "Ma première semaine au Canada",
    intro: "A short post in a newcomers' Facebook group.",
    lines: [
      ["Ana", "Je suis arrivée à Halifax lundi dernier avec mon mari.", "I arrived in Halifax last Monday with my husband."],
      ["", "D'abord, nous avons cherché un logement et nous avons trouvé un petit appartement près du port.", "First, we looked for housing and found a small apartment near the harbour."],
      ["", "Ensuite, j'ai ouvert un compte bancaire et j'ai fait ma demande de carte santé.", "Then I opened a bank account and applied for my health card."],
      ["", "Mercredi, nous sommes allés au centre d'accueil pour les nouveaux arrivants.", "On Wednesday we went to the welcome centre for newcomers."],
      ["", "Finalement, samedi, je me suis reposée !", "Finally, on Saturday, I rested!"]
    ],
    q: [
      { c: "When did Ana arrive?", o: ["Last Monday", "On Wednesday", "On Saturday"], why: "« Je suis arrivée à Halifax lundi dernier » — arriver takes être, and arrivée agrees." },
      { c: "What did she do after finding an apartment?", o: ["Opened a bank account", "Went to the harbour", "Rested"], why: "« Ensuite, j'ai ouvert un compte bancaire »." },
      { c: "Where did they go on Wednesday?", o: ["To a welcome centre for newcomers", "To the hospital", "To a bank"], why: "« nous sommes allés au centre d'accueil »." }
    ]
  },
  imparfait: {
    kind: "post", title: "Mon premier hiver à Montréal",
    intro: "A blog post looking back on a first winter.",
    lines: [
      ["Diego", "Quand je suis arrivé en décembre, il faisait moins vingt-cinq.", "When I arrived in December, it was minus twenty-five."],
      ["", "Je n'avais pas de bottes et mon manteau était trop léger.", "I didn't have boots and my coat was too light."],
      ["", "Chaque matin, je marchais jusqu'au métro et j'avais froid aux pieds.", "Every morning I walked to the metro and my feet were cold."],
      ["", "Un jour, ma voisine m'a vu dans l'escalier et elle m'a donné de vieilles bottes.", "One day my neighbour saw me on the stairs and gave me some old boots."],
      ["", "Depuis, je l'invite à souper chaque mois !", "Since then, I invite her to dinner every month!"]
    ],
    q: [
      { c: "What was the weather like when he arrived?", o: ["Minus twenty-five", "Mild", "Rainy"], why: "« il faisait moins vingt-cinq » — weather = imparfait." },
      { c: "What did he do every morning?", o: ["Walked to the metro", "Drove to work", "Took a taxi"], why: "« Chaque matin, je marchais… » — a habit = imparfait." },
      { c: "What happened one day?", o: ["His neighbour gave him boots", "He bought a new coat", "He moved"], why: "« Un jour… elle m'a donné de vieilles bottes » — a single event = passé composé." }
    ]
  },
  pronouns: {
    kind: "dialogue", title: "À la banque",
    intro: "Opening a bank account at the counter.",
    lines: [
      ["Conseillère", "Vous avez votre passeport ?", "Do you have your passport?"],
      ["Vous", "Oui, je l'ai ici. Et ma confirmation de résidence permanente aussi.", "Yes, I have it here. And my permanent residence confirmation too."],
      ["Conseillère", "Parfait. Vous voulez une carte de crédit ?", "Perfect. Would you like a credit card?"],
      ["Vous", "Oui, j'en voudrais une, s'il vous plaît.", "Yes, I'd like one, please."],
      ["Conseillère", "Je vous l'envoie par la poste. Vous la recevrez dans dix jours.", "I'll send it to you by mail. You'll receive it in ten days."],
      ["Vous", "Et pour l'application mobile, je dois y aller où ?", "And for the mobile app, where do I have to go?"],
      ["Conseillère", "Sur notre site. Je vous montre comment faire.", "On our website. I'll show you how."]
    ],
    q: [
      { c: "In « je l'ai ici », l' replaces…", o: ["the passport", "the bank", "the card"], why: "le passeport → le → l' before ai." },
      { c: "How will the credit card arrive?", o: ["By mail, in ten days", "Today, at the counter", "By email"], why: "« Je vous l'envoie par la poste… dans dix jours »." },
      { c: "In « j'en voudrais une », en refers to…", o: ["a credit card", "the passport", "the website"], why: "en replaces « une carte de crédit », keeping the number une." }
    ]
  },
  "compare-future": {
    kind: "email", title: "Courriel d'une amie qui déménage",
    intro: "A friend writes about her upcoming move.",
    lines: [
      ["Julie", "Allô ! Grande nouvelle : nous déménagerons à Calgary en mars.", "Hi! Big news: we'll be moving to Calgary in March."],
      ["", "Les logements y sont moins chers qu'à Vancouver, et les salaires sont aussi bons.", "Housing there is cheaper than in Vancouver, and salaries are just as good."],
      ["", "L'hiver sera plus froid, mais il fait plus soleil qu'ici !", "The winter will be colder, but it's sunnier than here!"],
      ["", "Quand nous serons installés, tu viendras nous voir ?", "When we're settled, will you come and see us?"],
      ["", "Ce sera la meilleure décision de notre vie, j'en suis sûre.", "It will be the best decision of our life, I'm sure of it."]
    ],
    q: [
      { c: "When is Julie moving?", o: ["In March", "Next week", "She already moved"], why: "« nous déménagerons à Calgary en mars » — futur simple." },
      { c: "How does housing in Calgary compare with Vancouver?", o: ["It's cheaper", "It's more expensive", "It's the same"], why: "« moins chers qu'à Vancouver »." },
      { c: "What's the downside she mentions?", o: ["Colder winters", "Lower salaries", "Less sun"], why: "« L'hiver sera plus froid »." }
    ]
  },
  conditional: {
    kind: "email", title: "Courriel au gestionnaire de l'immeuble",
    intro: "A polite email to a building manager about a problem.",
    lines: [
      ["", "Bonjour Monsieur Gagnon,", "Hello Mr. Gagnon,"],
      ["", "Le chauffage de mon appartement (no 204) ne fonctionne plus depuis lundi.", "The heating in my apartment (no. 204) hasn't been working since Monday."],
      ["", "Pourriez-vous envoyer un technicien cette semaine ?", "Could you send a technician this week?"],
      ["", "Je serais disponible jeudi après 16 h. Si ce n'était pas possible, je pourrais aussi être là samedi matin.", "I'd be available Thursday after 4 p.m. If that weren't possible, I could also be there Saturday morning."],
      ["", "Je vous remercie de votre aide. Cordialement, Amina Diallo", "Thank you for your help. Regards, Amina Diallo"]
    ],
    q: [
      { c: "What's the problem?", o: ["The heating doesn't work", "The water is cold", "The door is broken"], why: "« Le chauffage… ne fonctionne plus depuis lundi »." },
      { c: "When would Amina be available first?", o: ["Thursday after 4 p.m.", "Monday morning", "Sunday"], why: "« Je serais disponible jeudi après 16 h » — the conditional softens it." },
      { c: "Why does she write « Pourriez-vous… » instead of « Pouvez-vous… » ?", o: ["To be more polite", "Because it's in the past", "It's a mistake"], why: "The conditional turns a request into a polite one." }
    ]
  },
  relatives: {
    kind: "post", title: "Une personne qui m'a aidé",
    intro: "A short tribute in a community newsletter.",
    lines: [
      ["Hassan", "Je voudrais remercier Mme Tremblay, la bénévole qui m'a aidé à mon arrivée.", "I'd like to thank Mrs. Tremblay, the volunteer who helped me when I arrived."],
      ["", "C'est elle qui m'a trouvé le cours de français que je suis encore aujourd'hui.", "She's the one who found me the French course I'm still taking today."],
      ["", "Le centre où elle travaille aide plus de deux cents familles par année.", "The centre where she works helps more than two hundred families a year."],
      ["", "Ce qui m'a le plus touché, c'est sa patience.", "What touched me most was her patience."],
      ["", "C'est exactement le genre de personne dont notre quartier a besoin.", "She's exactly the kind of person our neighbourhood needs."]
    ],
    q: [
      { c: "Who is Mrs. Tremblay?", o: ["A volunteer who helped Hassan", "His French teacher", "His landlord"], why: "« la bénévole qui m'a aidé »." },
      { c: "What touched Hassan most?", o: ["Her patience", "Her French", "Her centre"], why: "« Ce qui m'a le plus touché, c'est sa patience »." },
      { c: "In « le genre de personne dont notre quartier a besoin », dont replaces…", o: ["de + the person (avoir besoin de)", "the neighbourhood", "a place"], why: "avoir besoin de quelqu'un → dont." }
    ]
  },
  subjunctive: {
    kind: "notice", title: "Note de service : nouvelles consignes",
    intro: "An internal memo at a company.",
    lines: [
      ["", "À tous les employés,", "To all employees,"],
      ["", "À partir du 1er novembre, il faut que chaque employé porte sa carte d'identité au bureau.", "From November 1, every employee must wear their ID card at the office."],
      ["", "Nous souhaitons aussi que vous réserviez les salles de réunion en ligne.", "We'd also like you to book meeting rooms online."],
      ["", "Bien que le stationnement soit gratuit, il est important que vous vous inscriviez à l'accueil.", "Although parking is free, it's important that you register at reception."],
      ["", "Merci de votre collaboration. — La direction", "Thank you for your cooperation. — Management"]
    ],
    q: [
      { c: "What must every employee do from November 1?", o: ["Wear their ID card", "Pay for parking", "Work from home"], why: "« il faut que chaque employé porte sa carte » — il faut que + subjunctive." },
      { c: "How should meeting rooms be booked?", o: ["Online", "At reception", "By phone"], why: "« que vous réserviez les salles de réunion en ligne »." },
      { c: "Is parking free?", o: ["Yes, but you must register", "No", "Only on weekends"], why: "« Bien que le stationnement soit gratuit… il est important que vous vous inscriviez »." }
    ]
  },
  argue: {
    kind: "post", title: "Courrier des lecteurs : le télétravail",
    intro: "A reader's letter to a local newspaper.",
    lines: [
      ["", "On se demande souvent si le télétravail est une bonne chose.", "People often wonder whether working from home is a good thing."],
      ["", "Personnellement, je pense que oui, pour deux raisons.", "Personally, I think so, for two reasons."],
      ["", "D'abord, on gagne du temps, puisqu'on ne passe plus une heure dans la circulation. De plus, on pollue moins.", "First, you save time, since you no longer spend an hour in traffic. Moreover, you pollute less."],
      ["", "Il est vrai que certaines personnes se sentent seules. Cependant, deux jours au bureau par semaine suffisent pour garder le contact.", "It's true that some people feel lonely. However, two days a week at the office are enough to stay in touch."],
      ["", "En conclusion, les entreprises devraient offrir un modèle hybride.", "In conclusion, companies should offer a hybrid model."]
    ],
    q: [
      { c: "What is the writer's opinion?", o: ["For working from home, with a hybrid model", "Against working from home", "No opinion"], why: "« je pense que oui… les entreprises devraient offrir un modèle hybride »." },
      { c: "Which word introduces the concession?", o: ["Il est vrai que", "D'abord", "De plus"], why: "« Il est vrai que… Cependant… » — concede, then counter." },
      { c: "What two benefits does the writer give?", o: ["Saving time and polluting less", "Higher pay and more holidays", "Less work and more sleep"], why: "« on gagne du temps… De plus, on pollue moins »." }
    ]
  },
  reported: {
    kind: "text", title: "Texto : ce que le médecin a dit",
    intro: "A text to your partner after a doctor's appointment.",
    lines: [
      ["Moi", "Je sors de la clinique. Le médecin m'a dit que ce n'était pas grave.", "I'm just leaving the clinic. The doctor told me it wasn't serious."],
      ["", "Il m'a demandé si j'avais de la fièvre depuis longtemps.", "He asked me if I'd had a fever for long."],
      ["", "Il a expliqué qu'il m'enverrait l'ordonnance à la pharmacie.", "He explained that he would send the prescription to the pharmacy."],
      ["", "Quand je suis arrivé, la salle d'attente s'était déjà vidée, alors j'ai attendu seulement dix minutes !", "When I arrived, the waiting room had already emptied, so I only waited ten minutes!"],
      ["", "Il m'a dit de me reposer deux jours.", "He told me to rest for two days."]
    ],
    q: [
      { c: "What did the doctor say?", o: ["It wasn't serious", "It was serious", "Come back tomorrow"], why: "« le médecin m'a dit que ce n'était pas grave » — présent → imparfait." },
      { c: "What will the doctor do with the prescription?", o: ["Send it to the pharmacy", "Give it by hand", "Email it"], why: "« il m'enverrait l'ordonnance à la pharmacie » — futur → conditionnel." },
      { c: "Why was the wait short?", o: ["The waiting room had already emptied", "It was early", "He had an appointment"], why: "« s'était déjà vidée » — plus-que-parfait: it happened before he arrived." }
    ]
  },
  exam: {
    kind: "email", title: "Votre convocation au TCF Canada",
    intro: "The kind of email a test centre sends before the exam.",
    lines: [
      ["", "Madame, Monsieur,", "Dear Sir or Madam,"],
      ["", "Votre session du TCF Canada aura lieu le samedi 15 novembre à 8 h 30.", "Your TCF Canada session will take place on Saturday, November 15 at 8:30 a.m."],
      ["", "Présentez-vous trente minutes avant le début de l'épreuve avec une pièce d'identité valide.", "Arrive thirty minutes before the start of the test with valid photo ID."],
      ["", "Les téléphones portables seront déposés à l'accueil.", "Cell phones will be left at reception."],
      ["", "L'épreuve d'expression orale se déroulera l'après-midi. Votre horaire précis vous sera remis sur place.", "The speaking test will take place in the afternoon. Your exact time will be given to you on site."]
    ],
    q: [
      { c: "What time should you arrive?", o: ["8:00", "8:30", "In the afternoon"], why: "The test starts at 8:30; arrive thirty minutes before." },
      { c: "What must you bring?", o: ["Valid photo ID", "Your phone", "A dictionary"], why: "« une pièce d'identité valide »." },
      { c: "When is the speaking test?", o: ["In the afternoon", "Before the written tests", "Another day"], why: "« L'épreuve d'expression orale se déroulera l'après-midi »." }
    ]
  },
  "tcf-t2": {
    kind: "ad", title: "Annonce : cours de yoga au parc",
    intro: "An ad like the ones in TCF speaking task 2. Read it, then imagine the questions you'd ask.",
    lines: [
      ["", "Yoga en plein air tout l'été !", "Outdoor yoga all summer!"],
      ["", "Tous les samedis à 9 h, au parc Jarry. Tous les niveaux sont les bienvenus.", "Every Saturday at 9 a.m., at Jarry Park. All levels welcome."],
      ["", "15 $ la séance ou 100 $ pour dix séances. Premier cours gratuit.", "$15 per session or $100 for ten sessions. First class free."],
      ["", "Apportez votre tapis et une bouteille d'eau. En cas de pluie, le cours est annulé.", "Bring your mat and a water bottle. If it rains, the class is cancelled."],
      ["", "Inscription en ligne ou sur place.", "Sign up online or on site."]
    ],
    q: [
      { c: "How much is the first class?", o: ["Free", "$15", "$10"], why: "« Premier cours gratuit »." },
      { c: "What happens if it rains?", o: ["The class is cancelled", "It moves indoors", "It's shorter"], why: "« En cas de pluie, le cours est annulé »." },
      { c: "A good task-2 question about this ad would be…", o: ["Est-il possible de louer un tapis sur place ?", "Tu aimes le yoga ?", "C'est quoi ?"], why: "It asks for new information, politely and with vous — the ad says to bring your own mat." }
    ]
  },
  "tcf-t3": {
    kind: "post", title: "Opinion : faut-il interdire les téléphones à l'école ?",
    intro: "A short opinion piece — the kind of question you defend in TCF speaking task 3.",
    lines: [
      ["", "Le sujet divise les parents : faut-il interdire les téléphones à l'école ?", "The topic divides parents: should phones be banned at school?"],
      ["", "La première raison de le faire, c'est la concentration. Je m'explique : une notification suffit pour perdre le fil.", "The first reason to do it is concentration. Let me explain: one notification is enough to lose the thread."],
      ["", "D'un autre côté, certains pensent que le téléphone rassure les parents en cas d'urgence.", "On the other hand, some think the phone reassures parents in an emergency."],
      ["", "En revanche, l'école peut toujours joindre les familles par le secrétariat.", "However, the school can always reach families through the office."],
      ["", "Pour conclure, il vaut mieux qu'un équilibre soit trouvé : le téléphone dans le sac, pas sur la table.", "To conclude, it's better to find a balance: the phone in the bag, not on the desk."]
    ],
    q: [
      { c: "What's the first argument for a ban?", o: ["Concentration", "Cost", "Safety"], why: "« La première raison de le faire, c'est la concentration »." },
      { c: "What's the counterpoint?", o: ["Phones reassure parents in an emergency", "Phones are expensive", "Students need games"], why: "« D'un autre côté, certains pensent que le téléphone rassure les parents »." },
      { c: "What does the writer conclude?", o: ["A balance: phones stay in the bag", "Ban phones completely", "Allow phones everywhere"], why: "« il vaut mieux qu'un équilibre soit trouvé »." }
    ]
  }
};
