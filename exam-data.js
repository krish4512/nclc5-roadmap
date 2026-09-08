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
      ]
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
      ]
    }
  ],

  /* ---------------------------------------------------------------- *
   * Expression orale — prep time then speaking time, with a rubric.
   * ---------------------------------------------------------------- */
  speaking: [
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
