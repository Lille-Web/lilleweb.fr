---
layout: post
title:  "Créer des tâches avec npm"
category: JS
tags : Node.js npm task
author: dck
description : Créez facilement des tâches pour vos projets avec npm !
---

Peut être avez vous déjà essayer les différents task runner du moment, on retrouve [Grunt](http://gruntjs.com/) et [Gulp](http://gulpjs.com/) dans les plus connus et utilisés. Ici je vous propose une alternative légère car sans dépendance et également rapide à mettre en place dans des petits projets grâce à npm.


### Fonctionnement

Tout va se jouer dans notre `package.json`, en effet, npm est capable de lire et exécuter des commandes. 
Lorsque vous démarrez un projet, vous pouvez utiliser la commande `npm init` pour créer un fichier __package.json__ à l'aide d'un assistant en ligne de commande. Voici un exemple :

{% highlight js %}
{
  "name": "Test",
  "version": "0.0.0",
  "description": "Package npm by default",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Lille Web",
  "license": "ISC"
}
{% endhighlight %}

Pour créer une commande, c'est assez simple, vous pouvez repérer l'objet **scripts** qui contient ici une clé __test__.
Placez vous dans le répertoire contenant votre package.json si ce n'est pas déjà le cas et lancez la commande `npm run test`.
La commande echo est bien utilisée après c'est un cas particulier, vous pouvez vous amuser à en créer une similaire par exemple :

{% highlight js %}
{
  "name": "Test",
  "version": "0.0.0",
  "description": "Package npm by default",
  "main": "index.js",
  "scripts": {
    "hello": "echo 'Hello World !!'"
  },
  "author": "Lille Web",
  "license": "ISC"
}
{% endhighlight %}

Cela vous affichera un magnifique Hello World dans votre console.

### Utiliser des modules

Passons à des choses plus intéressantes, ici nous allons créer des tâches pour compiler des fichiers Less dans un projet. Il vous faut tout d'abord installer less via `npm install less --save` puis nous pouvons créer une tâche que j'appelerais ici **build-css** et qui va contenir ma commande :

{% highlight js %}
{
  "name": "Test",
  "version": "0.0.0",
  "description": "Package npm by default",
  "main": "index.js",
  "scripts": {
    "build-css": "lessc styles/less/*.less > styles/css/bundle.css"
  },
  "author": "Lille Web",
  "license": "ISC"
}
{% endhighlight %}

Voilà le travail ! Vous pouvez maintenant lancer la commande `npm run build-css` pour compiler vos fichiers less sans avoir à se rappeler du bon chemin et de la bonne syntaxte ! C'est idéal lorsque vous revenez sur un projet après de longues vacances.

Profitons en et rajoutons un peu plus de tâches, si comme moi vous êtes un fan inconditionnel de [Browserify](http://www.lilleweb.fr/js/2014/08/05/introduction-a-Browserify/) et que vous aimez l'inclure à vos projet une tâche sera parfaite pour lui !

N'oubliez pas d'installer le module en faisant `npm install browserify --save`. Dans mon cas, je vais appeler la tâche **build-js** :

{% highlight js %}
{
  "name": "Test",
  "version": "0.0.0",
  "description": "Package npm by default",
  "main": "index.js",
  "scripts": {
    "build-css": "lessc styles/less/*.less > styles/css/bundle.css",
    "build-js": "browerify js/modules/*.js > js/main.js"
  },
  "author": "Lille Web",
  "license": "ISC"
}
{% endhighlight %}

Ici une question se pose, ce n'est pas pratique du tout de devoir lancer les tâches en 2 fois ? Je vous l'accorde, c'est pour cela que nous allons créer une 3<sup>ème</sup> tâche qui va lancer les deux autres comme ceci :

{% highlight js %}
{
  "name": "Test",
  "version": "0.0.0",
  "description": "Package npm by default",
  "main": "index.js",
  "scripts": {
    "build-css": "lessc styles/less/*.less > styles/css/bundle.css",
    "build-js": "browerify js/modules/*.js > js/main.js",
    "build": "npm run build-css && npm run build-js"
  },
  "author": "Lille Web",
  "license": "ISC"
}
{% endhighlight %}

### Conclusion

Grâce aux tâches npm, nous pouvons nous passer des task runners les plus connus pour de petits projets grâce à sa souplesse et sa rapidité de mise en place.