---
layout: post
title:  "Les bases de Git"
date:   2015-01-26
category: OUTILS
tags : git gestion projet add pull push commit
author: john
navigationMenu : true
description : Découvrez et comprenez les bases de Git.
---

Nous avons jugé intéressant de faire un ensemble d'articles assez complets sur les outils indispensables. Nous balaierons aussi bien les outils de versioning (sujet de cet article) que des éditeurs de texte, ou même des extensions pour votre navigateur !
Si vous souhaitez des conseils sur certains types d’outils, des applications, des extensions ou tout autre chose, n’hésitez pas à nous le dire en commentaire ou sur <a href="https://twitter.com/lille_web">Tiwiter</a> ! 

Dans ce premier article, nous verrons les bases de Git, nous vulgariserons certains concepts.

Après cet article, si vous ne connaissiez pas ce genre d'outils, vous serez capable de comprendre son utilité et surtout de l'utiliser dans sa forme la plus basique. D'autres articles viendront pour aborder d'autres concepts importants mais également pour vous présenter les bonnes manières de faire. 

## Git ? 

<img src="/src/articles/gitBase/gitLogo.png" title="logo git" alt="Le logo de git"/>

Git est présenté par Wikipedia comme un " logiciel de gestions de versions décentralisé ". Développés par Junio Hamano et Linus Torvalds, la communauté y contribue beaucoup car Git est sous licence libre.  

Concrètement, Git permet de nombreuses choses :

- Héberger un projet
- Contribuer à plusieurs sur le même projet en gérant les conflits
- Créer différentes " branches " afin de développer des fonctionnalités sans altérer le comportement principal
- Pouvoir " remonter dans le temps ", c’est-à-dire récupérer une ancienne version de certains fichiers. Très utile dans le cas où votre version actuelle devient inutilisable.
- ...

Il existe bien d’autres fonctions qui vous permettent de gérer au mieux vos projets. Nous verrons ici comment créer un nouveau projet ou en récupérer un existant et comment " envoyer " de nouveaux fichiers dans votre projet. 

Git a la particularité de seulement traiter les fichiers modifiés, créés, supprimés.

Si vous souhaitez plus d’informations sur Git, je vous invite à lire la page <a href=" http://fr.wikipedia.org/wiki/Git">Wikipedia</a>.

Il est nécessaire de comprendre que Git doit tourner sur un serveur Linux qui hébergera les différents fichiers. 

## Github ou Bitbucket ?

Vous avez certainement déjà entendu parler de Github, mais savez-vous ce que c’est réellement ? 

Comme vous avez pu le comprendre, Git ne peut être utilisé seul, il est nécessaire d’avoir un serveur correctement configuré. Afin de pouvoir utiliser Git sans avoir à installer et configurer un serveur, vous pouvez utiliser des services comme Github ou Bitbucket.

**Github et Bitbucket sont donc différents de Git**. Ces deux services (il en existe bien évidemment d’autres mais nous nous attarderons sur ces deux-là) permettent d’utiliser Git sans avoir soi même un serveur Git. Ils ne sont pas Git. 

### Github


<img src="/src/articles/gitBase/github_logo.png" title="git init" alt="Retour console d'un git init"/>

Sûrement le service le plus connu et assurément le plus utilisé, Github vous permet de créer sans limite des `repository` publics.

Les `repository` sont littéralement des dépôts où vous allez pouvoir envoyer votre projet. Lorsqu’ils sont publics, tous les fichiers de votre projet (sauf ceux que vous avez décidé d’ignorer) peuvent être visualisés par les autres utilisateurs de Github. Des modifications ou même de nouvelles fonctionnalités peuvent être proposées, nous verrons dans un prochain article comment faire. 

Github permet également d’avoir des repos privés via un système d’abonnement. Si vous êtes étudiant, il est possible d’avoir 5 repos privés gratuitement.

La plateforme Github est très rarement hors-ligne.

GitHub est donc très orienté social. Il est en effet très intéressant de poster un projet libre afin d’avoir des retours sur la qualité du code, de demander de l’aide, ou proposer des modifications. La communauté est très active. Sa fiabilité incroyable en fait aussi un choix très intéressant ! Vous pouvez par exemple voir <a href="https://status.github.com/graphs/past_month"> ici </a> que l'app server availability sur un mois est de 100%.

Découvez <a href=" https://github.com/ "> Github </a>.

### Bitbucket

<img src="/src/articles/gitBase/bitBucket_logo.png" title="git init" alt="Retour console d'un git init"/>

BitBucket est beaucoup moins connu que Github mais possède des arguments de poids. 

En effet, Bitbucket vous permet de créer gratuitement et en illimité des repos publics mais aussi privés ! Seule contrainte des repos privés, ils sont limités à 5 contributeurs. 

Malheureusement la communauté est beaucoup moins active et la plateforme est très légèrement moins fiable (je me suis déjà retrouvé avec l’impossibilité d’accéder à mes fichiers à un moment où j’en avais vraiment besoin …). La Website Availability, sur le dernier mois, est tout de même de 99.997% d’après <a href="http://status.bitbucket.org/#month "> cette page </a>. C’est rare, mais ça peut arriver.

BitBucket est donc le choix le plus pertinent si vous devez mettre en place un projet privé où le code ne doit pas être partagé et que vous ne souhaitez pas souscrire à un abonnement payant. 

Découvrez <a href="https://bitbucket.org/"  >Bitbucket </a>.

## Installer Git côté client

Afin d’utiliser Git, il est indispensable d’avoir installé Git sur sa machine pour avoir accès aux lignes de commandes ou à l’interface graphique. Sur OS X, il est présent dans les Xcode command line tools. Dans tous les cas vous pouvez vous rendre sur le <a href="http://git-scm.com/" > site de Git</a>.

## Débuter un projet

### Créer un nouveau projet 

Pour pouvoir envoyer votre projet sur votre serveur Git ou sur Github/Bitbucket, il est nécessaire d’initialiser votre dossier. Pour cela, une seule commande : 

`git init`

<img src="/src/articles/gitBase/gitInit.png" title="git init" alt="Retour console d'un git init"/>

Comme vous pouvez le voir, Git a créé un dossier caché nommé `.git`. Votre projet est prêt.

Vous devez maintenant enregistrer le serveur distant grâce à `remote`.

`git remote add origin https://github.com/JohnathanSUP/deviceLight.git`

Vous pouvez vérifier grâce à `git remote -v` que votre serveur a bien été enregistré.

### Récupérer un projet existant

Grâce à Git, vous pouvez bien évidemment récupérer un projet déjà existant. Pour cela il existe une commande très simple : 

`git clone https://github.com/JohnathanSUP/deviceLight.git`

Ici je récupère par exemple le repos public qui se trouve dans mon répertoire Github et qui s'appelle deviceLight.

Git créera un dossier ayant le nom de votre projet et qui contiendra toutes les sources présentes sur Git.  

## Les commandes de bases

### Pull

`git pull origin master`

Cette commande vous permet de récupérer la dernière version du projet. Comme je l’ai précisé précédemment, seuls les nouveaux fichiers ou ceux qui ont été modifié seront traités. En cas de conflit vous devez merger. Nous verrons ça en détail dans un autre article.

### Add

`git add --all`

`add` vous permet d’indiquer à Git les fichiers à tracker. En rajoutant `—all`, vous lui indiquez de rajouter tous les fichiers qu'il ne tracke pas déjà. 

### Commit

`git commit -m " Message de commit "`

Après avoir rajouté les fichiers à tracker, vous devez enregistrer vos changements dans votre repos. Le message de commit sera géré grâce au paramètre `-m`.

### Push

`git push origin master`

Et pour finir, vous devez envoyer vos changements grâce au lien ici appelé origin et sur la branche master.

## Allons plus loin

Vous pouvez trouver une explication complète des commandes présentées ici et de bien d'autres sur la <a href="http://git-scm.com/doc"> doc de Git</a>.

### Ignorer des fichiers

Certains fichiers ne doivent pas être envoyés sur Git. On peut penser à vos fichiers de configurations qui contiennent très souvent vos identifiants de base de données ou vos clés d’API par exemple.

Pour indiquer à Git qu’il ne faut pas tracker certains dossiers et/ou fichiers vous devez créer un fichier `.gitignore` à la racine de votre repos (en parallèle du dossier caché `.git`).

Voici un exemple de fichier gitignore : 

{% highlight bash %}

conf.php
private/

{% endhighlight %}

Cet exemple de `.gitignore` permet de ne pas tracker (et donc de ne pas partager) le fichier conf.php et le dossier private. Vous devez donc renseigner par ligne vos chemins de fichiers et de dossier que vous souhaitez ignorer. 

### La Documentation

Vous pouvez directement vous rendre sur la <a href="http://git-scm.com/documentation" title="la doc de git"> doc de Git </a> pour avoir des détails de chaque commandes que l'on a vue entre autres.

## Et après ?

Nous avons prévu d'écrire plusieurs autres articles sur Git qui vont aborder de nombreuses thèmes, dont les branches, les forks, les bonnes pratiques, ect ...