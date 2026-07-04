# Recherche documentaire, comment s'y prendre ? Comment bien définir ses équations de recherche et ses alertes?

Proposé par: Ladif Faysal Gorgha
Statut: Done

**Pourquoi la plupart des gens cherchent mal?**

Taper une question dans Google et cliquer sur le premier lien, ce n'est pas de la recherche documentaire. C'est de la navigation. La vraie recherche, c'est un processus structuré qui commence avant même d'ouvrir un moteur de recherche : elle commence dans la tête, avec une question bien posée.

La recherche documentaire sert à collecter, évaluer et synthétiser des sources fiables sur un sujet donné. Elle s'applique partout : rédaction académique, veille professionnelle, fact-checking, préparation d'un projet, état de l'art technique. Le problème n'est jamais l'accès à l'information. C'est le bruit. Il y a trop de contenu, trop peu de signal. La méthode existe justement pour inverser ce ratio.

**Étape 1** : Clarifier le sujet avant de chercher

Avant toute chose, il faut décomposer le sujet en concepts. Sur une feuille ou une page Notion, trois questions suffisent :

Quel est le concept central ? (le cœur de ce qu'on cherche)

Quels sont les concepts associés ? (ce qui gravite autour)

Quelles sont les limites du sujet ? (ce qu'on n'est pas en train de chercher)

Prenons un exemple concret : on travaille sur l'impact de l'IA générative sur l'emploi en Afrique subsaharienne. Le concept central est l'IA générative. Les concepts associés : automatisation, LLM, marchés du travail, compétences. Hors-champ : l'IA médicale spécifique, l'emploi en Europe, l'Afrique du Nord.

Cet exercice force à penser en termes de mots-clés, pas de phrases. C'est la base de tout ce qui suit.

**Étape 2** : Construire ses équations de recherche

Une équation de recherche, c'est une combinaison de mots-clés et d'opérateurs logiques soumise à une base de données ou un moteur de recherche pour obtenir des résultats précis. C'est la traduction formelle de la question de recherche.

Les opérateurs booléens : la base. Il en existe trois, et ils changent tout.

**AND** réduit les résultats : les deux termes doivent être présents.

Exemple :

“intelligence artificielle” AND “emploi” AND “Afrique”

**OR** élargit les résultats : au moins un des termes doit être présent.

Exemple 

"IA générative" OR "LLM" OR "ChatGPT"

**NOT** exclut un terme.

Exemple :

“automatisation” NOT “robotique industrielle”

**Les guillemets** : pour les expressions exactes

Les guillemets imposent une recherche de l'expression telle quelle, sans variation.

"intelligence artificielle générative" trouvera exactement cette séquence de mots.

Sans guillemets, le moteur peut renvoyer des résultats où les mots apparaissent séparément dans le document.

**La troncature** : pour capturer les variantes

**Le symbole *** (ou $ selon les bases) remplace zéro ou plusieurs caractères en fin de mot.

emploi* couvre : emploi, emplois, employé, employabilité, employer...automat* couvre : automatisation, automatiser, automatique...

C'est essentiel pour ne pas rater des résultats à cause d'une variation morphologique.Les parenthèses : pour structurer la logique

Comme en mathématiques, les parenthèses définissent l'ordre des opérations.

(IA OR "intelligence artificielle" OR LLM) AND (emploi* OR travail*) AND (Afrique OR "pays en développement"). Cette équation signifie : trouver des documents qui parlent d'IA sous une de ces formes, ET d'emploi sous une de ces formes, ET qui concernent l'Afrique ou les pays en développement.

L'opérateur de champ : pour aller plus loin

Sur des bases académiques comme Google Scholar, Scopus, Web of Science ou PubMed, il est possible de cibler un champ spécifique:

title:intelligence artificielle cherche dans le titre uniquement

abstract:emploi Afrique cherche dans le résumé

Sur Google classique :site:gov.sn IA renvoie uniquement des résultats depuis les sites .gov.snfiletype:pdf rapport emploi Afrique IA filtre sur les PDFs uniquementin

title:"IA générative" cherche le terme dans le titre de la page

**Étape 3** : Choisir les bonnes sources selon le besoin

Toutes les bases documentaires ne se valent pas et ne servent pas la même chose.

Pour la recherche académique générale : Google Scholar (gratuit, accès large). Pour la recherche scientifique avancée avec métriques de citations : Scopus et Web of Science (souvent accessibles via une université). Pour les sciences de la santé : PubMed (gratuit). Pour les sciences humaines et sociales : JSTOR (partiellement gratuit). Pour l'open access : OpenAlex et BASE (gratuits). Pour les preprints en sciences et tech : arXiv et HAL (gratuits). Pour la littérature francophone en SHS : Cairn.info (partiellement gratuit). Pour l'accès direct aux auteurs : ResearchGate (gratuit).

Pour une veille plus généraliste ou professionnelle, on complète avec Google Actualités, Feedly, Inoreader, LinkedIn et les newsletters spécialisées.

**Étape 4** : Affiner avec les filtres

Une bonne équation donne des dizaines, parfois des centaines de résultats. Les filtres permettent de zoomer sans reformuler :

Date de publication : privilégier les 3 à 5 dernières années sur les sujets évolutifs

Type de document : article, thèse, rapport, livre, actes de conférence

Langue : français, anglais, ou les deux

Accès : open access uniquement si on n'a pas d'abonnement

Nombre de citations : indicateur de pertinence et d'influence dans le champ

Sur Google Scholar, l'option "Cité par X fois" est particulièrement utile pour identifier les textes fondateurs d'un domaine.

**Étape 5** : Mettre en place des alertes intelligentes

Chercher une fois, c'est un état de l'art à un instant T. Chercher en continu, c'est de la veille. Les alertes automatisent la seconde.Google Alerts

Outil gratuit, simple, efficace pour le web général. En allant sur alerts.google.com, on crée une alerte avec une expression ou une équation.

Exemple : "IA générative" emploi Afrique

À configurer : la fréquence (en temps réel, quotidien, hebdomadaire), les sources (actualités, blogs, web, vidéos), la langue et la région, et la qualité des résultats (commencer par Uniquement les meilleurs résultats). Les alertes arrivent par email ou flux RSS.Google Scholar Alerts

Après une recherche sur Google Scholar, un bouton "Créer une alerte" apparaît en bas des résultats. Il notifie dès qu'un nouvel article correspond à l'équation saisie. Indispensable pour le suivi académique.Alertes RSS via Feedly ou Inoreader

RSS est un protocole d'abonnement à des flux de contenu : plutôt que d'aller sur chaque site, les mises à jour viennent à soi. La plupart des grands médias, revues et blogs tech disposent d'un flux RSS.

Feedly et Inoreader permettent de centraliser tous les flux en un seul endroit, de créer des collections thématiques, d'utiliser des mots-clés pour filtrer les articles dans les flux, et de partager ou exporter des résumés.Alertes sur LinkedIn

Pour la veille professionnelle, LinkedIn permet de suivre des hashtags, des auteurs, des entreprises. Coupler ça avec l'option "Activer les notifications" sur certains profils ou pages donne un flux pertinent sur les usages sectoriels.

**Étape 6** : Organiser ce qu'on trouve

La recherche sans organisation, c'est du sable qui passe entre les doigts. Deux outils à connaître absolument.

Zotero est un gestionnaire de références gratuit et open source. Il capte automatiquement les métadonnées des articles (titre, auteurs, DOI, résumé), génère des bibliographies aux normes (APA, Chicago, Vancouver...), et permet d'annoter les PDFs directement dans l'interface.

Notion ou Obsidian servent à construire une base de connaissances personnelle avec des liens entre les idées : idéal pour développer progressivement une synthèse plutôt que d'accumuler des onglets.

La règle d'or : chaque source doit être taguée dès qu'elle entre dans le système. Sujet, pertinence, date de lecture, statut (à lire / lu / synthétisé). Ne jamais remettre le classement à plus tard.

**Pour** **finir**

La recherche documentaire est une compétence, pas un talent. Elle se construit avec la pratique et quelques principes clairs. La qualité d'un travail (académique, professionnel ou personnel) dépend en grande partie de la qualité des sources qui l'alimentent. Et la qualité des sources dépend de la qualité des questions qu'on pose aux outils.Maîtriser ses équations de recherche, c'est maîtriser l'accès à la connaissance structurée. Dans un monde saturé d'information, c'est l'un des avantages les plus sous-estimés qu'on puisse développer.