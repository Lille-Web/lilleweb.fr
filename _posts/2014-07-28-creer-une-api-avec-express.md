---
layout: post
title:  "Créer une API avec Express"
date:   2014-07-28
category: JS
tags : JS Node.js API
author: dck
description : Créer rapidement une application pour vos applications web grâce ce web framework Node.js 
---

Aujourd'hui, lorsque que souhaitez créer votre site internet, on rencontre toujours le même cas de figure, le choix du langage serveur. 
Dans ces choix, on distingue en top 3 les indémodables PHP, Java ou encore .NET. 

Etant moi même développeur front-end, il me serait inintéressant de perdre mon temps à apprendre un nouveau langage alors que l'on peut très bien utiliser [Node.js](http://nodejs.org) et le framework web Express.

Dans cet article, nous allons voir comment fonctionne Express et mettre en place une API pour un blog. Nous verrons plus tard comment exploiter cette API avec différents frameworks JavaScript.

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

### Fonctionnement

Comme vous avez pu le constater dans le code précedent, Express possède une API verbeuse qui permet de créer facilement une API RESTful. 
REST pour **RE**presentational **S**tate **T**ransfer est une architecture assez conventioniste qui repose sur les verbes HTTP qui sont principalement :

- GET 
- POST
- PUT
- DELETE

Chacun de ces verbes est utilisé dans un but précis, par exemple un **POST** est généralement utilisé pour la création ou encore **PUT** qui lui est utilisé pour de la mise à jour de donnée.