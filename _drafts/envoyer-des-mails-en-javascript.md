---
layout: post
title:  "Envoyer des mails en JavaScript"
category: JS
tags : nodejs mail
author: dck
description : "Découvrez aujourd'hui comment envoyer des mails sans configurer de serveur mail"
icon: "/src/articles/6-node-mailer/mail.png"
---

<img src="/src/articles/6-node-mailer/mail.png" class="pull-left" alt="Mail" />
Comme beaucoup de personnes, lorsque je créais un formulaire de contact, j'avais pour habitude de le faire pointer sur un fichier PHP. C'était due, dans un premier temps, au fait que je ne connaissais que l'API de PHP pour envoyer des mails.

Aujourd'hui grâce à Node.js et un peu de JavaScript, il vous est possible de remplacer votre script PHP ! Il existe maintenant de nombreux modules [npm](http://www.npmjs.org) permettant d'envoyer un mail.

Ici, je vais vous présenter rapidement [Node-mailer](http://nodemailer.com/) qui est pour moi à l'heure actuelle, le meilleur dans sa catégorie. Nous allons crée un petit serveur http sur lequel nous pourrons effectuer une requête POST avec nos informations de contact.


### Installation
Evidemment, nous allons avoir besoin de [Node.js](http://nodejs.org) et du package `nodemailer` que je vous invite à télécharger via npm en faisant :
{% highlight js %}
npm install nodemailer --save
{% endhighlight %}

### Mise en place
Commencez par créer un fichier nommé **server.js**, celui-ci va contenir notre serveur. Petit rappel, pour créer un serveur http avec Node.js, il nous faut utiliser le module `http` fournit par l'API.
Voici un serveur minimaliste :
{% highlight js %}
var http = require('http');

var server = http.createServer(function(req, res) {
  res.end("Hello World");  
});

server.listen(1337);
console.log("Serveur web lancé sur localhost:1337 ...");
{% endhighlight %}

On récupère le module http pour ensuite créer un serveur à l'aide de la méthode **createServer** où l'on passe en argument une fonction en callback. Cette fonction deux arguments :

- La requête faite par le navigateur
- La réponse que nous allons émettre

Nous indiquons ensuite un port sur lequel notre serveur doit écouter. Il est toujours intéressant de placer un message pour indiquer que le serveur est bien lancé.

Voici le résultat que vous devriez obtenir :
<img src="/src/articles/6-node-mailer/hello-world.png" title="Hello World avec Node.js" alt="Hello World avec Node.js"/>

### Filtrer les requêtes
Pour le moment, que vous fassiez une requête en GET ou en POST, cela ne change rien du tout. Dans notre cas, nous avons besoin de filtrer les URL utilisant un POST.
Avec Node.js, un objet **method** est présent dans la variable __request__ fournit par le serveur http.
Il suffit alors de vérifier si le contenu de method est égal à **POST** ou non :

{% highlight js %}
var server = http.createServer(function(req, res) {
  if (req.method === 'POST') {

  }
  else {
    // Requêtes autres qu'en POST
  }
  res.end();  
});
{% endhighlight %}
