#Test Technique Back n°1

####Informations générales:

* L'objectif du test de : appréhender votre niveau technique, votre capacité à expliciter des concepts
 et à résonner.
 
* Ce test est à effectuer en autonomie et ne pas comporter d'éléments copier-coller depuis une
 quelconque ressource.
 
 * Vous pouvez poser des hypothèses pour pouvoir mener à bien le test. N'oubliez pas de les
 indiquer dans l'email de votre rendu.
 
 * Vous pouvez poser des questions au besoin, si vous estimez qu'il vous manque des informations.
 
 * Le test ne doit pas durer plus de 1 heure. Envoyez votre avancement une fois ce temps écoulé.
 
 *Vous devez effectuer votre rendu par email en réponse à cet email.
 
 * Votre code doit être disponible sur un Git publique d'accès, indiqué clairement dans l'email du
 rendu.
 
 # A. Énoncé et Questions:

Vous êtes dans la peau d'un.e développeur.se travaillant sur un nouveau projet pour une application
métier d'édition de contenu à imprimer.

Vous êtes responsable de la réalisation du front de l'application. Il a été décidé que l'application serait
en Typescript avec React.
zDurant la réunion de cadrage vous avez eu les informations suivantes:

* L'application doit posséder un système d'authentification avec une gestion des roles simple
(utilisateur, admin)

* L'administrateur doit pouvoir ajouter un certain nombre de documents type avec les données
nécessaires à la génération. Ces documents sont considérés comme des "templates".

* Un utilisateur peut accéder uniquement à ses documents générés

* Un utilisateur doit pouvoir générer un document depuis un "template" créer par un administrateur
en fournissant les champs requis.

###Questions de réflexion:
Vous devez répondre aux questions suivantes (chaque question attend une réponse suivie d'une
explication):

* Quelle base(s) de données allez-vous utiliser ?   
    * J'utiliserais une base de données NoSql (MongoDB), pour la rapidité et pour sa compatibilité avec les backend.
    
* Quelles librairies allez-vous utiliser pour communiquer votre base de données ?
    *Pour une BD je vais utiliser mongoose qui est la librairie par default pour les connexions avec les bd NoSql
* Quelles sont les routes nécessaires ?
    * login
    * create/template
    * user/doc
    * user/generate/{adminId}/{templateId}
    
* Comment allez-vous gérer la validation du contenu des requêtes ?
    * En creant un middleware de validation de contenu , pour les paramètres 
* Comment allez-vous gérer la pagination des requêtes ?
    * pour la gestion de la pagination il faudrais limiter le nombre d'element recuperer par requeteet recuperer un nombre precs apres le dernier element selectionner la derniere   
* Comment allez-vous gérer l'authentification ?
    *  Gerer lauthentifictaion avec un SECURITE token . le premier element en tete est le JWT(Json Web Token)
        meme s'il presente des faille il reste toujours le plus rapide a mettre en place On peut toujours y associer un middleware avec des process interne pour le solidifier 
         
* Bonus: Comment allez-vous gérer les permissions d'accès ?
    * les permissions d'acces seront gerer par les role et un ajout acces sur des collections specifique


## B. Cas pratique:
Vous devez mettre en place une api avec le framework Javascript/Typescript de votre choix permettant
la transformation d'un contenu Markdown en fichier PDF.

Votre API peut contenir autant de route que nécessaire.

Vous pouvez aborder le problème à votre guise tant qu'il est possible via un ou plusieurs appels de
transformer du Markdown en PDF.

Le résultat doit absolument être un fichier PDF