---
layout: post
title:  "Introduction à MongoDB"
date:   2014-09-23
category: JS
tags : nosql database nodejs sgbd mongodb
author: dck
description : Faites un premier pas avec le système de gestion de base de donnée NoSQL la plus utilisé du marché !
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

A la fin de l'installation, il ne vous reste plus qu'à créer un espace les dossiers **/data/db** pour stocker les bases de données, un simple `sudo mkdir -p /data/db` fera l'affaire.

Vous pouvez dès à présent utiliser la commande **mongod** pour lancer MongoDB.

#### Windows
Pour Windows, je vous recommande de [télécharger l'installeur](http://www.mongodb.org/downloads?_ga=1.37199524.509237057.1411072824)

Encore une fois, Mongo a besoin d'un répertoire pour stocker les bases, ouvrez un prompt Windows et tapez `md \data\db` ou pour les moins courageux directement en GUI.

Voilà, il ne vous reste plus qu'à executer le fichier .exe comme ceci : `C:\Program Files\MongoDB\bin\mongod.exe`

#### Linux 
Pour Linux cela dépend de votre distribution, pour ceux sur Ubuntu un package est disponible, vous n'avez qu'à taper : `sudo apt-get install mongodb-org` et 
