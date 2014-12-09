---
layout: post
title:  "Quelques bonnes méthodologies avec Git"
date:   2014-12-01
category: OUTIL
tags : git BP
author: dck
description : "Git est le gestionnaire de version à la mode, voici quelques bonnes pratiques à mettre en place pour vos projets"
---

Cet article fait suite à la conférence donnée au Chti Jug le 25 novembre sur l'utilisation avancée de Git. Cela m'a donné envie de vous
faire partager ces différentes astuces et bonnes pratiques à mettre en place sur vos projets.

## Des messages conventionnés

Un problème très fréquent avec Git est la mauvaise utilisation des messages de commit alors que ceux-ci sont très important lorsque vous devez
voir ce qui a été fait par le passé. Cyril nous a expliqué et montré que le projet [Angular.js](https://angularjs.org/) a crée des conventions
que je trouve également très intéressantes :

{% highlight html %}
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
{% endhighlight %}

### Un type de commit

Chaque commit est effectué dans un but précis, c'est pourquoi il est existe 7 types :

- **feat** : un fonctionnement a été ajouté
- **fix** : correction d'un bug
- **docs** : modification de la documentation
- **style** : modification n'impactant pas le fonctionnel
- **perf** : code améliorant les performances
- **test** : modification ou ajout de test
- **chore** : changement affectant les outils du projets (tâches gulp/grunt, etc..);


### La portée du commit

Votre commit affecte forcément une partie spécifique du site, comme par exemple le header, le footer ou encore un élément comme une
fiche produit d'un site e-commerce. Cela permet de voir tout de suite ce qu'affecte les modifications apportées dans ce commit.

### Le sujet du commit

Ici, on rappelle principalement le but du commit, un bug qui a été corrigé avec le numéro du ticket ou encore le développement d'une feature. Encore une fois,
le but est que ce soit clair pour les autres développeurs qui potentiellement liront le commit.
Angular recommande d'utiliser l'impératif dans la phrase et également de ne pas mettre en capital la 1<sup>ère</sup> lettre.

### Un message

Il ne vous reste plus qu'à expliquer vos modifications, un peu comme une FTU (Fiche de Tests Unitaires) vous devez faire un résumé de
ce que vous avez fait ans vos fichiers. Comme pour le sujet du commit, il est recommandé d'utiliser l'impératif.

