---
layout: post
title:  "Créer une API avec Express - Partie 1"
category: JS
tags : Node.js API
author: dck
description : "Créer rapidement une application pour vos applications web grâce ce web framework Node.js"
---

<img src="/src/articles/4-express-part-1/expresslogo.png" class="pull-left" alt="Express logo" />
Aujourd'hui, lorsque que souhaitez créer votre site internet, on rencontre toujours le même cas de figure, le choix du langage serveur. 
Dans ces choix, on distingue en top 3 les indémodables PHP, Java ou encore .NET. 

Etant moi même développeur front-end, il me serait inintéressant de perdre mon temps à apprendre un nouveau langage alors que l'on peut très bien utiliser [Node.js](http://nodejs.org) et le framework web Express.

Cet article correspond à une série car le sujet est assez long à traiter, aujourd'hui nous allons voir comment fonctionne Express et mettre en place le modèle de notre application.

### Un framework

Un framework se traduit généralement en français "boite à outils", qui selon moi, défini bien Express. En effet, il dispose d'une API bien fourni mais possède également des "plugins" nommés __middleware__.

Express est l'un des module [npm](http://npmjs.org) les plus favorisé (actuellement 6<sup>ème</sup>) grâce à sa simplicité et sa souplesse. Comme il l'indique [sur sa page npm](https://www.npmjs.org/package/express), vous pouvez créer un serveur web en quelques lignes :
{% highlight js %}
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(3000);
{% endhighlight %} 

Pour certains développeurs Ruby, cela peut leur rappeler le framework Sinatra qui fonctionne de manière assez verbeuse également.

### Installation
L'installation d'Express est très rapide ! Vous avez besoin de [Node.js](http://nodejs.org) pour installer le module npm dans votre répertoire courant :
{% highlight js %}
npm install express 
{% endhighlight %}

Pour pouvoir tester notre API, je vous conseille d'installer [Postman](https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm), c'est une très bon extension Chrome qui offre énormement de possibilités.

### Fonctionnement

Comme vous avez pu le constater dans le code précedent, Express possède une API verbeuse qui permet de créer facilement une API RESTful. 
REST pour **RE**presentational **S**tate **T**ransfer est une architecture assez conventioniste qui repose sur les verbes HTTP qui sont principalement :

- GET 
- POST
- PUT
- DELETE

Chacun de ces verbes est utilisé dans un but précis, par exemple un **POST** est généralement utilisé pour la création ou encore **PUT** qui lui est utilisé pour de la mise à jour de donnée.

### Structure de l'API

Lorsque vous développez une API, il est recommandé d'utiliser des namespaces pour chacun de vos éléments. Ici nous allons donc créer un namespace **/api/**, dans ce namespace, nous allons en créer un nouveau appelé **/posts**.

Voilà à quoi devra ressembler nos URLs :

- /api/posts/
- /api/posts/:id
- /api/posts/
- /api/posts/:id
- /api/posts/:id

### Création du modèle

Etant assez conventioniste, je suis me suis naturellement dirigé vers le pattern **MVC** (Modèle Vue Contrôleur) qui pour moi permet de bien structurer son application. 

Notre modèle est représenté ici par des articles, nous allons donc créer un objet __Post__ qui contiendra les diverses méthodes permettant d'effectuer des requêtes en bases de données.

**Choisir une base de donnée**

Comme pour les autres langages, nous avons l'embarrat du choix, entre les bases NoSQL qui montent en puissance (MongoDB, Redis, ..) ou les choix plus classiques comme MySQL ou PostgreSQL tous possèdent un module npm.

J'ai décidé de faire simple et rester sur MySQL, je prendrais un peu plus de temps dans un autre article pour vous faire découvrir une base NoSQL.

Pour commencer, nous allons mettre en place le module npm de [MySQL](https://www.npmjs.org/package/mysql), créez donc une base de donnée du nom de votre choix avec une table __posts__. 

J'ai pour habitude de placer tous mes fichiers de configurations dans un dossier **config**, cela me permet de m'y retrouver plus facilement. Dans ce dossier, nous allons créer un fichier **mysql.js** qui contiendra l'initialisation :

{% highlight js %}
var mysql = require('mysql'),
connection = mysql.createConnection({
  database : 'Blog',
  host     : 'localhost',
  user     : 'root',
  password : ''
});

module.exports = connection;
{% endhighlight %}

Ensuite, créez un fichier `Post.js` dans un dossier __models__, ce fichier contiendra notre objet comme ceci :
{% highlight js %}
var mysql = require('../config/mysql');
var Post = function() {};

module.exports = Post;
{% endhighlight %}

Nous appelons notre module __mysql__ que nous avons crée précedemment, ça nous évite de devoir répeter plusieurs la connexion à la base de donnée.


