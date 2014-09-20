---
layout: post
title:  "Introduction à MongoDB"
date:   2014-09-23
category: JS
tags : nosql database nodejs
author: dck
description : Faites un premier pas avec la base de donnée NoSQL la plus utilisé du marché !
icon: "/src/articles/8-mongodb/logo-mongo.png"
---

<img src="/src/articles/8-mongodb/logo-mongo.png" class="pull-left" alt="MongoDB logo" />
Beaucoup d'entres vous connait sans doute quelques **SGBDR**, les Systèmes de Gestion de Base de Données Relationnelles. On y retrouve dans les plus connus MySQL ou encore PostgreSQL.

Depuis l'arrivé de Node.js en 2009, une nouvelle catégorie de système de gestion de base de donnée a fait son apparition : le NoSQL.

## La différence 
Tout d'abord, vous pouvez constater que le NoSQL rentre dans la catégorie des SGBD et pas SGBR, et oui, ce n'est plus fondé sur des bases relationelles. Cela signifie que l'unité logique ne correspond plus à la table et la plupart des données ne sont pas manipulées avec SQL.

Ensuite vient les **performances**, il a été noté que la plupart des actions faites dans une base de donnée était la lecture ce qui est l'un des points forts des bases NoSQL.

Autre point important qui est à prendre en compte lors du début d'un projet, **l'évolutivité** (ou scalability) car la ou cela peut être assez compliqué dans certaines SGBDR, avec des bases NoSQL il suffit d'augmenter le nombre de serveurs.

Evidemment c'est bien plus que cela mais j'essaye de résumer au maximum d'autant plus que ce n'est pas du tout mon métier. J'invite une personne plus expérimenté que moi à prendre la parole !

### Installation
L'installation de Mongo est assez facile sur n'importe quel système d'exploitation.

#### Mac OS X
Pour les utilisateurs de Mac, je recommande d'installer via [Homebrew](http://brew.sh/) un gestionnaire de paquet similaire au vieux Macport. L'installation de Homebrew est très simple, vous avez besoin de Ruby sur votre machine (qui est présent par défaut) et il vous suffit de copier / coller ceci dans votre terminal :
{% highlight ruby %}
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
{% endhighlight %}

Une fois Homebrew installé, vous avez accès la commande `brew` dans votre terminal, il ne vous reste plus qu'à lancer la commande :
{% highlight ruby %}
brew install mongodb
{% endhighlight %}
