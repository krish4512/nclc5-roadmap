/* Mock exam bank for the NCLC 5 roadmap.
   Kept separate from the runner so questions can be edited without touching
   the exam logic. Everything is written at CEFR B1 / NCLC 5 level and draws
   on the same everyday themes the roadmap's vocabulary sections cover. */
window.NCLC_EXAM = {

  /* ---------------------------------------------------------------- *
   * Compréhension orale — the audio is spoken by the browser's French
   * voice; `text` doubles as the transcript shown after answering.
   * ---------------------------------------------------------------- */
  listening: [
    {
      text: "Bonjour, vous êtes bien au cabinet du docteur Tremblay. Nos bureaux sont fermés jusqu'à lundi. En cas d'urgence, composez le 811.",
      q: "Que doit faire une personne en cas d'urgence ?",
      options: ["Rappeler lundi matin", "Composer le 811", "Se rendre au cabinet", "Laisser un message"],
      answer: 1,
      why: "Le message dit : « En cas d'urgence, composez le 811 »."
    },
    {
      text: "Attention. Le train à destination de Montréal partira du quai numéro sept, et non du quai numéro trois. Le départ est retardé de vingt minutes.",
      q: "Quel changement est annoncé ?",
      options: ["Le train est annulé", "Le quai et l'heure de départ ont changé", "Le train part plus tôt", "Le prix du billet a augmenté"],
      answer: 1,
      why: "Deux changements : le quai (sept au lieu de trois) et un retard de vingt minutes."
    },
    {
      text: "Je cherche un appartement meublé, deux chambres, dans un quartier calme. Mon budget est de mille deux cents dollars par mois, charges comprises.",
      q: "Qu'est-ce qui est important pour cette personne ?",
      options: ["Un logement neuf", "Un appartement meublé dans un quartier calme", "Vivre au centre-ville", "Avoir un grand jardin"],
      answer: 1,
      why: "Elle précise « meublé », « deux chambres » et « un quartier calme »."
    },
    {
      text: "Chers collègues, la réunion de jeudi est reportée à mardi prochain, à quatorze heures, dans la salle B. Merci de confirmer votre présence avant vendredi.",
      q: "Que demande-t-on aux collègues ?",
      options: ["De préparer un rapport", "De confirmer leur présence", "D'annuler la réunion", "De réserver une salle"],
      answer: 1,
      why: "« Merci de confirmer votre présence avant vendredi. »"
    },
    {
      text: "Pour bénéficier du rabais, présentez votre carte de membre à la caisse. L'offre se termine dimanche.",
      q: "Comment obtenir la réduction ?",
      options: ["En achetant en ligne", "En présentant sa carte de membre", "En payant en espèces", "En venant lundi"],
      answer: 1,
      why: "Il faut présenter la carte de membre à la caisse."
    },
    {
      text: "J'ai commencé un cours du soir en informatique. C'est fatigant après le travail, mais la formation est gratuite et je progresse vite.",
      q: "Que pense cette personne de sa formation ?",
      options: ["Elle est trop chère", "Elle est fatigante mais utile", "Elle est trop facile", "Elle veut arrêter"],
      answer: 1,
      why: "« C'est fatigant… mais la formation est gratuite et je progresse vite. » L'opinion est nuancée, pas négative."
    },
    {
      text: "Madame, votre ordonnance sera prête dans une quinzaine de minutes. Vous pouvez patienter ici ou revenir plus tard dans la journée.",
      q: "Que propose le pharmacien ?",
      options: ["De revenir demain", "D'attendre ou de revenir plus tard", "De changer de pharmacie", "De payer immédiatement"],
      answer: 1,
      why: "Deux possibilités sont offertes : patienter ou revenir plus tard."
    },
    {
      text: "Nous avons bien reçu votre candidature. Votre profil nous intéresse et nous aimerions vous rencontrer jeudi matin pour un entretien.",
      q: "Pourquoi téléphone-t-on à cette personne ?",
      options: ["Pour refuser sa candidature", "Pour proposer un entretien", "Pour lui offrir le poste", "Pour demander un document"],
      answer: 1,
      why: "On propose une rencontre : un entretien, pas encore une embauche."
    },
    {
      text: "En raison de travaux, la ligne deux sera interrompue entre huit heures et seize heures. Un service d'autobus est prévu entre les stations concernées.",
      q: "Quelle solution est proposée aux usagers ?",
      options: ["Un remboursement", "Un service d'autobus", "Une autre ligne de métro", "Aucune solution"],
      answer: 1,
      why: "« Un service d'autobus est prévu entre les stations concernées. »"
    },
    {
      text: "Quand j'étais petite, nous passions tous les étés chez ma grand-mère, à la campagne. Il n'y avait pas de télévision, mais on ne s'ennuyait jamais.",
      q: "De quoi parle cette personne ?",
      options: ["De souvenirs d'enfance", "D'un voyage récent", "D'un déménagement", "D'un problème de famille"],
      answer: 0,
      why: "L'imparfait (« j'étais », « nous passions ») signale un souvenir répété du passé."
    },
    {
      text: "Bonjour, ici Julie, de l'agence immobilière. La visite de l'appartement prévue demain à dix heures est déplacée à quinze heures. Rappelez-moi si cet horaire ne vous convient pas.",
      q: "Pourquoi Julie appelle-t-elle ?",
      options: ["Pour changer l'heure de la visite", "Pour annuler la visite", "Pour proposer un autre appartement", "Pour demander un dépôt"],
      answer: 0,
      why: "La visite est « déplacée à quinze heures » : seule l'heure change."
    },
    {
      text: "Ce soir, de fortes chutes de neige sont attendues dans la région de Québec. On conseille aux automobilistes d'éviter les déplacements non essentiels jusqu'à demain midi.",
      q: "Que conseille-t-on aux automobilistes ?",
      options: ["De rouler lentement toute la nuit", "De limiter leurs déplacements", "De changer leurs pneus", "De prendre l'autoroute"],
      answer: 1,
      why: "« Éviter les déplacements non essentiels » veut dire ne sortir que si c'est nécessaire."
    },
    {
      text: "Bienvenue au service à la clientèle de votre compagnie d'électricité. Pour signaler une panne, faites le un. Pour une question sur votre facture, faites le deux. Pour parler à un agent, restez en ligne.",
      q: "Que faut-il faire pour poser une question sur sa facture ?",
      options: ["Faire le un", "Rester en ligne", "Faire le deux", "Rappeler plus tard"],
      answer: 2,
      why: "« Pour une question sur votre facture, faites le deux. »"
    },
    {
      text: "Salut Marc, c'est Léa. Je suis désolée, je ne pourrai pas venir au cinéma ce soir : ma fille est malade. On pourrait y aller samedi, si tu veux ?",
      q: "Que propose Léa ?",
      options: ["D'annuler la sortie pour de bon", "De venir chez elle ce soir", "D'emmener sa fille au cinéma", "D'aller au cinéma samedi"],
      answer: 3,
      why: "« On pourrait y aller samedi » — elle reporte la sortie, elle ne l'annule pas."
    },
    {
      text: "Personnellement, je préfère aller au travail à vélo. C'est bon pour la santé et je ne perds plus de temps dans les bouchons. Par contre, en hiver, c'est plus compliqué.",
      q: "Quel inconvénient cette personne mentionne-t-elle ?",
      options: ["Le vélo est difficile en hiver", "Le vélo coûte cher", "Le trajet est trop long", "Il n'y a pas de piste cyclable"],
      answer: 0,
      why: "« Par contre » introduit l'inconvénient : « en hiver, c'est plus compliqué »."
    },
    {
      text: "À partir du premier mars, les employés pourront choisir leurs horaires, à condition d'être présents entre dix heures et quinze heures.",
      q: "Quelle condition est imposée aux employés ?",
      options: ["Commencer à huit heures", "Être présents entre dix heures et quinze heures", "Travailler le samedi", "Demander une autorisation chaque jour"],
      answer: 1,
      why: "« À condition d'être présents entre dix heures et quinze heures. »"
    },
    {
      text: "La bibliothèque organise un atelier gratuit de conversation en français tous les mercredis soir. L'inscription est obligatoire, car le nombre de places est limité à douze personnes.",
      q: "Pourquoi faut-il s'inscrire ?",
      options: ["Parce que l'atelier est payant", "Parce qu'il faut passer un test", "Parce que les places sont limitées", "Parce que l'atelier change de jour"],
      answer: 2,
      why: "« Car le nombre de places est limité à douze personnes. » L'atelier est gratuit."
    },
    {
      text: "Prenez un comprimé matin et soir pendant sept jours, toujours avec un repas. Si la fièvre ne baisse pas après trois jours, revenez me voir.",
      q: "Dans quel cas le patient doit-il revenir voir le médecin ?",
      options: ["Après sept jours de traitement", "Chaque matin", "S'il oublie un comprimé", "Si la fièvre ne baisse pas après trois jours"],
      answer: 3,
      why: "« Si la fièvre ne baisse pas après trois jours, revenez me voir. »"
    },
    {
      text: "Selon un sondage publié ce matin, plus de la moitié des Canadiens aimeraient travailler quatre jours par semaine, même avec un salaire légèrement réduit.",
      q: "Qu'apprend-on dans ce sondage ?",
      options: ["Beaucoup de Canadiens accepteraient de gagner un peu moins pour travailler quatre jours", "La plupart des Canadiens veulent un salaire plus élevé", "Les Canadiens travaillent déjà quatre jours par semaine", "Les Canadiens refusent toute baisse de salaire"],
      answer: 0,
      why: "« Même avec un salaire légèrement réduit » : ils accepteraient de gagner un peu moins."
    },
    {
      text: "Désolé, madame, ce modèle n'est plus disponible en magasin. Je peux le commander pour vous : vous le recevrez chez vous dans cinq jours ouvrables, sans frais de livraison.",
      q: "Que propose le vendeur ?",
      options: ["Un autre modèle", "De commander l'article avec une livraison gratuite", "Un rabais de cinq pour cent", "De revenir chercher l'article dans cinq jours"],
      answer: 1,
      why: "Il propose de commander l'article, livré à domicile « sans frais de livraison »."
    }
  ],

  /* ---------------------------------------------------------------- *
   * Compréhension écrite — short authentic-style documents.
   * ---------------------------------------------------------------- */
  reading: [
    {
      text: "AVIS AUX LOCATAIRES\nL'eau sera coupée le mardi 14 mai, de 9 h à 13 h, pour des travaux de plomberie. Merci de prévoir vos besoins en eau à l'avance.\nLa direction",
      q: "Que doivent faire les locataires ?",
      options: ["Quitter l'immeuble", "Prévoir de l'eau à l'avance", "Appeler un plombier", "Payer des frais de travaux"],
      answer: 1,
      why: "« Merci de prévoir vos besoins en eau à l'avance. »"
    },
    {
      text: "OFFRE D'EMPLOI — Serveur / serveuse\nTemps partiel, 20 h par semaine, soirs et fins de semaine. Expérience souhaitée mais non exigée : formation offerte.\nEnvoyez votre CV à emploi@cafedunord.ca",
      q: "Que dit l'annonce au sujet de l'expérience ?",
      options: ["Elle est obligatoire", "Elle est souhaitée mais pas obligatoire", "Elle n'est pas mentionnée", "Elle doit être de deux ans"],
      answer: 1,
      why: "« souhaitée mais non exigée » — utile, mais pas une condition."
    },
    {
      text: "Bonjour Marc,\nJe ne pourrai pas venir à la réunion de demain : je dois accompagner ma fille chez le médecin. Peux-tu m'envoyer le compte rendu ?\nMerci, Sophie",
      q: "Que demande Sophie à Marc ?",
      options: ["De reporter la réunion", "De lui envoyer le compte rendu", "De l'accompagner chez le médecin", "D'annuler son rendez-vous"],
      answer: 1,
      why: "Elle prévient de son absence et demande le compte rendu."
    },
    {
      text: "Le télétravail séduit de plus en plus d'employés. Selon une étude récente, 68 % des personnes interrogées souhaitent travailler à domicile au moins deux jours par semaine. Les employeurs, eux, s'inquiètent surtout de la cohésion des équipes.",
      q: "Quelle est la principale inquiétude des employeurs ?",
      options: ["La baisse de la productivité", "La cohésion des équipes", "Le coût des bureaux", "La sécurité informatique"],
      answer: 1,
      why: "Le texte oppose le souhait des employés à l'inquiétude des employeurs : « la cohésion des équipes »."
    },
    {
      text: "BIBLIOTHÈQUE MUNICIPALE — Horaire d'été\nDu mardi au vendredi : 10 h à 18 h\nSamedi : 10 h à 16 h\nFermé le dimanche et le lundi",
      q: "Quand la bibliothèque est-elle ouverte ?",
      options: ["Tous les jours", "Du mardi au samedi", "Seulement en semaine", "Le dimanche uniquement"],
      answer: 1,
      why: "Ouverte mardi à vendredi et le samedi ; fermée dimanche et lundi."
    },
    {
      text: "Pour renouveler votre bail, vous devez informer le propriétaire par écrit au moins trois mois avant la fin du contrat. Sans avis écrit, le bail est reconduit automatiquement aux mêmes conditions.",
      q: "Que se passe-t-il si le locataire n'envoie pas d'avis écrit ?",
      options: ["Le bail se termine", "Le bail est reconduit automatiquement", "Le loyer augmente", "Le locataire paie une pénalité"],
      answer: 1,
      why: "« Sans avis écrit, le bail est reconduit automatiquement aux mêmes conditions. »"
    },
    {
      text: "RECHERCHE COLOCATAIRE\nChambre libre dès le 1er juillet dans un appartement de trois chambres. 600 $ par mois, charges comprises. Non-fumeur, pas d'animaux. À cinq minutes du métro.",
      q: "Quelle est une des conditions à respecter ?",
      options: ["Payer les charges en plus du loyer", "Ne pas fumer", "Avoir une voiture", "Emménager en août"],
      answer: 1,
      why: "« Non-fumeur, pas d'animaux. » Les charges sont déjà comprises."
    },
    {
      text: "Rappel : les inscriptions aux cours de français se terminent le 15 août. Les places sont limitées et attribuées selon l'ordre d'arrivée des demandes.",
      q: "Comment les places sont-elles attribuées ?",
      options: ["Par tirage au sort", "Selon l'ordre d'arrivée des demandes", "Selon le niveau des candidats", "Après un entretien"],
      answer: 1,
      why: "« attribuées selon l'ordre d'arrivée des demandes » — premier arrivé, premier servi."
    },
    {
      text: "Depuis son arrivée à Québec, Amina a suivi une formation en comptabilité et travaille aujourd'hui dans un cabinet. Elle raconte que le plus difficile n'a pas été la langue, mais de faire reconnaître ses diplômes obtenus à l'étranger.",
      q: "Quelle a été la principale difficulté d'Amina ?",
      options: ["Apprendre le français", "Faire reconnaître ses diplômes", "Trouver un logement", "S'habituer au climat"],
      answer: 1,
      why: "« le plus difficile n'a pas été la langue, mais de faire reconnaître ses diplômes »."
    },
    {
      text: "POLITIQUE DE RETOUR\nLes articles peuvent être échangés dans les 30 jours suivant l'achat, sur présentation du reçu. Les articles en solde ne sont ni repris ni échangés.",
      q: "Que peut-on faire avec un article acheté en solde ?",
      options: ["L'échanger dans les 30 jours", "Ni le retourner ni l'échanger", "Le retourner avec le reçu", "Se faire rembourser"],
      answer: 1,
      why: "La dernière phrase exclut les articles en solde de toute reprise ou échange."
    },
    {
      text: "Objet : Confirmation d'inscription\nMadame, Monsieur,\nNous confirmons votre inscription au cours « Français au travail » (niveau B1). Les cours commencent le 9 septembre. Veuillez apporter une pièce d'identité lors de la première séance.\nLe secrétariat",
      q: "Que faut-il apporter au premier cours ?",
      options: ["Un manuel de français", "Une preuve de paiement", "Une pièce d'identité", "Un certificat de niveau"],
      answer: 2,
      why: "« Veuillez apporter une pièce d'identité lors de la première séance. »"
    },
    {
      text: "À VENDRE — Vélo de ville\nTrès bon état, utilisé deux saisons. 250 $ (prix neuf : 600 $). Casque inclus.\nVisites possibles le soir après 18 h. Écrire à Paul : paul.vente@courriel.ca",
      q: "Quand peut-on aller voir le vélo ?",
      options: ["Le soir après 18 h", "Le matin seulement", "Uniquement la fin de semaine", "À n'importe quelle heure"],
      answer: 0,
      why: "« Visites possibles le soir après 18 h. »"
    },
    {
      text: "PISCINE MUNICIPALE — Règlement\nLe bonnet de bain est obligatoire. Les enfants de moins de 8 ans doivent être accompagnés d'un adulte dans l'eau. Il est interdit de manger au bord du bassin.",
      q: "Quelle règle concerne les jeunes enfants ?",
      options: ["Ils ne peuvent pas entrer dans la piscine", "Ils doivent être accompagnés d'un adulte dans l'eau", "Ils doivent porter une ceinture de natation", "Ils peuvent manger au bord du bassin"],
      answer: 1,
      why: "Les moins de 8 ans « doivent être accompagnés d'un adulte dans l'eau »."
    },
    {
      text: "De plus en plus de familles choisissent de cultiver leurs légumes dans des jardins communautaires. Ces espaces permettent non seulement de manger sainement à moindre coût, mais aussi de rencontrer ses voisins.",
      q: "Selon le texte, quel est un avantage des jardins communautaires ?",
      options: ["Ils remplacent les supermarchés", "Ils sont réservés aux enfants", "Ils rapportent de l'argent aux familles", "Ils favorisent les rencontres entre voisins"],
      answer: 3,
      why: "« Non seulement… mais aussi de rencontrer ses voisins » : deux avantages, dont le lien social."
    },
    {
      text: "NOTE DE SERVICE\nÀ compter du lundi 3 juin, le stationnement de l'entreprise sera fermé pour travaux pendant deux semaines. Les employés sont invités à utiliser les transports en commun ; les billets seront remboursés sur présentation des reçus.",
      q: "Comment l'entreprise aide-t-elle les employés ?",
      options: ["Elle loue un autre stationnement", "Elle autorise le télétravail", "Elle rembourse les billets de transport en commun", "Elle prête des vélos"],
      answer: 2,
      why: "« Les billets seront remboursés sur présentation des reçus. »"
    },
    {
      text: "Salut ! Le souper chez Karim est toujours samedi, mais il commence à 19 h au lieu de 18 h. Chacun apporte un dessert. Tu peux me confirmer si tu viens ?\nInès",
      q: "Qu'est-ce qui a changé pour le souper ?",
      options: ["L'heure", "Le jour", "Le lieu", "Le menu"],
      answer: 0,
      why: "Le jour ne change pas (« toujours samedi ») ; seule l'heure passe de 18 h à 19 h."
    },
    {
      text: "Pour certains, les réseaux sociaux isolent les jeunes. Pourtant, une enquête récente montre que la majorité des adolescents les utilisent surtout pour rester en contact avec des amis qu'ils voient déjà en personne.",
      q: "Que montre l'enquête ?",
      options: ["Les réseaux sociaux isolent la majorité des jeunes", "Les jeunes s'en servent surtout pour garder contact avec leurs amis", "Les adolescents n'ont plus d'amis en personne", "Les jeunes passent moins de temps en ligne"],
      answer: 1,
      why: "« Pourtant » annonce un résultat qui contredit l'idée reçue : ils restent en contact avec leurs amis."
    },
    {
      text: "RÈGLEMENT DE L'IMMEUBLE\nLes ordures doivent être déposées dans les bacs le mardi soir seulement. Le recyclage est ramassé le jeudi. Aucun meuble ne doit être laissé dans le couloir.",
      q: "Quand faut-il sortir les ordures ?",
      options: ["Le jeudi matin", "Tous les soirs", "Le lundi", "Le mardi soir"],
      answer: 3,
      why: "« Le mardi soir seulement. » Le jeudi concerne le recyclage."
    },
    {
      text: "OFFRE D'EMPLOI — Réceptionniste bilingue\nClinique dentaire. Français et anglais exigés. Horaire : du lundi au jeudi, de 8 h à 16 h. Salaire selon l'expérience. Entrée en poste immédiate.",
      q: "Quelle compétence est exigée ?",
      options: ["Un diplôme en médecine dentaire", "Parler français et anglais", "Travailler la fin de semaine", "Posséder une voiture"],
      answer: 1,
      why: "« Français et anglais exigés » — le poste est bilingue."
    },
    {
      text: "Quand je suis arrivé à Montréal, je ne connaissais personne. C'est en faisant du bénévolat dans une banque alimentaire que je me suis fait mes premiers amis et que j'ai amélioré mon français.",
      q: "Comment cette personne a-t-elle amélioré son français ?",
      options: ["En suivant un cours intensif", "En regardant la télévision", "En faisant du bénévolat", "En travaillant dans un restaurant"],
      answer: 2,
      why: "« C'est en faisant du bénévolat… que j'ai amélioré mon français. »"
    }
  ],

  /* ---------------------------------------------------------------- *
   * Expression écrite — timed prompts with a self-check rubric.
   * These cannot be auto-graded; the rubric is what you mark against.
   * ---------------------------------------------------------------- */
  writing: [
    {
      title: "Tâche 1 — Raconter une expérience",
      minutes: 25,
      words: "120–150 mots",
      prompt: "Racontez une expérience marquante que vous avez vécue (un déménagement, un premier jour de travail, un voyage). Décrivez la situation, ce qui s'est passé, et ce que vous en avez retenu.",
      rubric: [
        "Passé composé et imparfait employés ensemble : les événements au passé composé, le décor et les habitudes à l'imparfait.",
        "Au moins trois connecteurs de séquence : d'abord, ensuite / puis, enfin.",
        "Une phrase qui combine les deux temps, du type « Je regardais… quand… a sonné ».",
        "Un paragraphe de conclusion qui dit ce que vous avez appris.",
        "Le nombre de mots demandé est respecté, sans recopier l'énoncé."
      ],
      model: "L'année dernière, j'ai déménagé à Montréal pour commencer un nouveau travail. Au début, tout était difficile : je ne connaissais personne, il faisait très froid et je ne comprenais pas toujours l'accent québécois. D'abord, j'ai cherché un appartement près du métro. Ensuite, je me suis inscrit à un cours de français du soir. Un jour, pendant que j'attendais l'autobus, une voisine m'a proposé de m'accompagner au marché. Nous avons parlé pendant une heure et elle m'a présenté ses amis. Enfin, après quelques mois, je me sentais chez moi.\n\nAvec le recul, j'ai appris qu'il faut oser parler aux gens, même quand on fait des erreurs. Cette expérience m'a rendu plus patient et plus confiant. Aujourd'hui, je conseille à tous les nouveaux arrivants de faire la même chose."
    },
    {
      title: "Tâche 2 — Donner et justifier une opinion",
      minutes: 30,
      words: "150–180 mots",
      prompt: "Selon vous, vaut-il mieux travailler à domicile ou au bureau ? Donnez votre opinion et justifiez-la avec au moins deux arguments, en mentionnant un inconvénient de la solution que vous préférez.",
      rubric: [
        "Une opinion claire annoncée dès l'introduction : à mon avis, je pense que…",
        "Structure en deux temps : d'une part… d'autre part…, plus en outre ou de plus.",
        "Au moins un connecteur de cause (parce que, car) et un de contraste (cependant, par contre).",
        "Un inconvénient reconnu — un texte à une seule face plafonne la note.",
        "Une conclusion qui reprend la position sans la répéter mot pour mot."
      ],
      model: "À mon avis, travailler à domicile présente plus d'avantages que travailler au bureau, surtout pour les personnes qui habitent loin.\n\nD'une part, le télétravail permet d'économiser beaucoup de temps. Par exemple, je n'ai plus besoin de passer une heure dans les transports chaque matin, donc je commence ma journée moins fatigué. D'autre part, on peut mieux organiser sa vie de famille, car on est présent quand les enfants rentrent de l'école. De plus, on dépense moins d'argent pour l'essence et les repas au restaurant.\n\nCependant, je reconnais que le travail à domicile a un inconvénient important : on peut se sentir isolé, parce qu'on voit moins ses collègues. C'est pourquoi je pense qu'il faut aller au bureau au moins une fois par semaine.\n\nEn conclusion, le télétravail me semble la meilleure solution, à condition de garder un lien régulier avec l'équipe."
    },
    {
      title: "Tâche 3 — Comparer deux points de vue",
      minutes: 30,
      words: "120–180 mots",
      prompt: "Document 1 : « Il faut interdire les voitures au centre-ville. L'air serait plus propre, les rues plus calmes, et les piétons se sentiraient en sécurité. »\nDocument 2 : « Interdire les voitures, c'est pénaliser les personnes âgées, les familles et les commerçants, qui ont besoin de venir en voiture. »\n\nPremière partie (40 à 60 mots) : présentez les deux points de vue.\nDeuxième partie (80 à 120 mots) : donnez votre opinion sur le sujet.",
      rubric: [
        "La première partie reformule les deux opinions avec vos mots, sans recopier les documents.",
        "Un connecteur d'opposition relie les deux points de vue : alors que, tandis que, en revanche.",
        "Votre opinion est clairement annoncée au début de la deuxième partie.",
        "Au moins deux arguments, dont un appuyé par un exemple concret.",
        "La longueur de chaque partie est respectée."
      ],
      model: "Les deux documents parlent de la place des voitures au centre-ville. Selon le premier, il faudrait les interdire, parce que l'air serait plus pur et les rues plus sûres pour les piétons. En revanche, le second auteur pense qu'une interdiction pénaliserait les personnes âgées, les familles et les commerçants.\n\nPersonnellement, je suis plutôt favorable à une limitation des voitures, mais pas à une interdiction totale. D'abord, la pollution est un vrai problème pour la santé, surtout pour les enfants. Dans ma ville, les rues piétonnes sont toujours pleines de monde la fin de semaine, et les commerces y fonctionnent bien. Cependant, il faut penser aux personnes qui ont du mal à marcher. On pourrait donc réserver l'accès en voiture aux livraisons, aux taxis et aux personnes à mobilité réduite, tout en développant les transports en commun. Ainsi, le centre-ville resterait vivant et accessible à tous."
    }
  ],

  /* ---------------------------------------------------------------- *
   * Expression orale — prep time then speaking time, with a rubric.
   * ---------------------------------------------------------------- */
  speaking: [
    {
      title: "Tâche 1 — Entretien dirigé",
      prepSeconds: 0,
      speakSeconds: 120,
      prompt: "L'examinateur vous demande de vous présenter. Parlez de votre famille, de votre travail ou de vos études, de vos loisirs, et de vos projets au Canada.",
      rubric: [
        "Vous abordez les quatre thèmes : famille, travail ou études, loisirs, projets.",
        "Le présent pour décrire, le passé composé pour votre parcours, le futur proche ou le futur simple pour vos projets.",
        "Des phrases complètes et reliées (et, mais, parce que), pas une liste de mots.",
        "Au moins un détail précis par thème : un lieu, une date, un exemple.",
        "Vous parlez sans interruption pendant les deux minutes."
      ]
    },
    {
      title: "Tâche A — Obtenir des renseignements",
      prepSeconds: 60,
      speakSeconds: 300,
      prompt: "Vous voyez cette annonce : « Appartement 3½ à louer, quartier tranquille, libre le 1er juillet. » Vous téléphonez au propriétaire. Posez toutes les questions nécessaires pour décider si le logement vous convient.",
      rubric: [
        "Au moins cinq questions différentes (loyer, charges, meublé ou non, transports, animaux, date de visite).",
        "Des questions bien formées — est-ce que suffit et évite les erreurs d'inversion.",
        "Une formule d'ouverture et de clôture polies : Bonjour, je vous appelle au sujet de… / Merci beaucoup, au revoir.",
        "Vous relancez au moins une fois à partir de la réponse imaginée, au lieu de lire une liste.",
        "Vous parlez pendant toute la durée sans blanc prolongé."
      ]
    },
    {
      title: "Tâche B — Convaincre",
      prepSeconds: 60,
      speakSeconds: 300,
      prompt: "Un ami hésite à s'inscrire à un cours de français du soir. Convainquez-le de s'inscrire avec vous, en répondant à ses objections (le temps, la fatigue, le coût).",
      rubric: [
        "Une position défendue, pas seulement décrite.",
        "Au moins deux arguments développés, chacun avec un exemple concret.",
        "Les objections sont nommées puis répondues : « Tu dis que… cependant… ».",
        "Le conditionnel de politesse ou d'hypothèse : tu pourrais, ce serait, si tu venais…",
        "Une conclusion qui demande une décision : « Alors, on s'inscrit ensemble ? »"
      ]
    }
  ]
};
