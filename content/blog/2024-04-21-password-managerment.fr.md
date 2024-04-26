+++
title = "🔑 Gestion de ses mots de passe"
[taxonomies]
categories=["blog"]
+++

## _Je pers toujours mes mots de passe!_

Par moment, la famille et les amis sont conscients qu'il y a quelques failles dans leur gestion de mots passe. Je leur dis en général que je m'y connais pas plus que n'importe qui sinon c'est trop long. Mais des fois il me semble que je me prends moins la tête que la moyenne et c'est pas sympa de pas partager les conseils. Et puis comme ça je pourrai dire : _"beh tu lis pas mon blog?"_

<!-- more -->

## Introduction

Tout est dit ici dans les grandes lignes : <https://www.cybermalveillance.gouv.fr/tous-nos-contenus/bonnes-pratiques/mots-de-passe>

### Pourquesque?

On va partir du principe que vous n'êtes pas recherchés par la CIA ou que des structures ayant de gros moyens, veulent vous nuire personnellement. Dans ce cas là il y a [des outils et des organisations](https://securitylab.amnesty.org/) pour vous aider mais c'est pas le sujet.

Le but ici est de se prémunir des attaques d'opportunités : tentatives de connexion automatiques qui ont lieux suite à un vol de données d'un site sur lequel vous êtes passé comme décrit plus bas.

On va quand même prendre en compte le fait qu'il est sain de garder un peu de vie privée même à l'intérieur de son foyer et que n'importe quel colporteur de passage* ne puisse pas se servir et prendre le contrôle de votre vie numérique.

### Conclusion de l'introduction

Il faut bien être conscient que la sécurité nuit clairement à l'expérience utilisateur. Il faut donc trouver la solution la moins pénible qui protège suffisamment pour ne pas être le maillon faible: la personne la plus facile à poutrer (comme on dit dans le milieu)

C'est du boulot, ça n'apporte rien mais il y a beaucoup à perdre si on ne le fait pas.

## Double facteur

Si vous perdez vos mots de passe, il faut être sûr de pouvoir les récupérer et donc de ne pas perdre l'accès à son compte mail. Pour cela, et pour tous les services important, quand c'est possible, il vaut mieux activer l'authentification à 2 facteurs (2FA) afin d'empêcher quelqu'un qui récupère un mot de passe d'accéder à votre compte.

2FA c'est à dire, qu'en plus de votre mot de passe, il vous sera demandé un code temporaire.

- soit qui vous seras envoyé pour sms
- soit qui sera généré par une application OTP (pour smartphone) telle que celle-ci <https://freeotp.github.io/> (peut être mieux quand on capte pas toujours)

⚠️ Attention: risque de s'enfermer dehors en cas de perte de téléphone :

- être sûr de pouvoir recommander une carte sim avec le même numéro
- sauvegarde des codes de récupération pour les applis OTP dans un endroit chiffré: et encore une fois, je me rends compte que : oui c'est compliqué!

## Les mots de passe

Le plus probable c'est qu'un jour, sur un site, votre mot de passe fuite. Des scripts automatisés essayent alors tous les "gros" site avec les même identifiants de connection, ou des variantes générées de façon subtile. Donc 1ere étape c'est d'avoir des mots de passe différents pour chaque site. Donc il **faut** que ce soit impossible de se souvenir de tous ses mots de passe!

Comment avoir des mots de passe robustes sans avoir besoin de les retenir?

### Avec Firefox et la fondation Mozilla

Vous pouvez vous créer un compte Firefox <https://accounts.firefox.com/>
Se logguer dans le navigateur Firefox. On peut alors synchroniser ses favoris et les mots de passe <https://support.mozilla.org/fr/kb/configurer-synchronisation-ordinateur>. On peut notamment le synchroniser avec firefox sur votre téléphone et donc avoir vos mots de passe dans la poche... si vous arrivez à trouver le bon menu 😓

Veillez quand même à créer un mot de passe principal pour accéder aux mots de passe enregistrés dans Firefox : <https://support.mozilla.org/fr/kb/utiliser-mot-passe-principal-proteger-identifiants> sinon n'importe qui qui a un accès à une session ouverte sur votre ordinateur pourra voir vos mots de passe!

### Avec un fichier Keepass

Un fichier keepass (*.kdbx) est un simple fichier dont le format est assez répandu mais nécessite quand même d'installer un logiciel quelque soit votre système d'exploitation. Ce fichier est chiffré et on ne peut l'ouvrir qu'avec un mot de passe.

👍 Avantages :

- c'est juste un fichier on peut facilement le copier et faire des sauvegarde
- Il existe des outils et des plugins sur tous les OS
- On peut écrire un peu ce qu'on veut et mettre plus d'info que simplement login mot de passe

⚠️ Attention à:

- bien le synchroniser entre les différents devices
- ne pas oublier le mot de passe de celui-là

Bon pour être exhaustif, il faudrait aussi expliquer comment installer le programme qui lit le fichier Keepass et que, si vous utilisez un drive pour stocker vos fichiers, il y a surement un plugin qui permettra d'ouvrir ce fichier de mot passe depuis un navigateur mais ça c'est niveau 6.

### Avec un cahier: conseil pour ma mère 🧓

Faire des phrases et les noter dans un cahier avec un petit _tweak_ facile à retenir. Ex : remplacer tous les "s" par des 6 ou faire une faute systématique de façon à ce que si quelqu'un tombe sur le carnet de mot de passe, il ne puisse pas l'utiliser.

> Les responsables de sécurité informatique diraient que ce serait facile à bruteforcer mais il y a peu de chance que le carnet de ma mère leak sur le darkweb et, que je sache 🤔, personne n'a de grief contre elle assez gros pour prendre la peine d'essayer d'en tirer quelque chose.

## Dernier petit détail

Pour être passé par là, il peut être intéressant d'organiser ce que vous voudriez communiquer à vos proches en cas de décès:

- voulez vous, ou pas, déléguer tout vos comptes à une autre personne?
- quelles sont les informations qui peuvent être utiles ou que vous souhaitez transmettre? Typiquement : EDF, téléphone, les photos...
- quelles sont les parties de votre vie privée qui doivent être oubliées. Ca ne fait pas de mal de dire explicitement que l'historique de vos interactions n'a pas vocation à être consulté s'il n'y a pas de raisons judiciaire... enfin bref

## Les vieux rappels évidents et autres bonnes pratiques

Des mesures les moins contraignantes au plus geek:

- ne cliquez pas sur les liens douteux, vérifiez le domaines dans les urls
- évitez d'installer des logiciels dont on peut douter des fonctionnalités mais je ne sais toujours pas comment gérer ça sur Windows 🤷
- de façon générale on se porte pas plus mal si les navigations s’effectuent en navigation privée si vous n'avez pas besoin d'être logué sur un service en particulier.
- préférez F-Droid pour les applications Android
- ne croyez pas ce que vous lisez sur les réseaux sociaux et mangez des fruits!

Il y a des endroits pour se faire aider : <https://lesrelaisnumeriques.org>. Oh et puis si vous avez des questions et que vous passez à Cologne dans le Gers et que vous voulez vous plaindre à quelqu'un je vous montrerai comment envoyer vos grief à @GDarmanin.

`* je vis au 19ème siècle apparemment`
