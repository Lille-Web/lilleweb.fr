---
layout: post
title:  "Envoyer un mail en JavaScript"
category: JS
date:   2014-09-09
tags : nodejs mail
author: dck
description : "Découvrez aujourd'hui comment envoyer un mail sans configurer de serveur mail"
icon: "/src/articles/6-node-mailer/mail.png"
---

<img src="/src/articles/6-node-mailer/mail.png" class="pull-left" alt="Mail" />
Comme beaucoup de personnes, lorsque j'avais besoin d'un formulaire de contact, j'avais pour habitude de le faire pointer sur un fichier PHP.
C'était due, dans un premier temps, au fait que je ne connaissais que l'API de PHP pour envoyer des mails et puis celle-ci est assez accessible.

Aujourd'hui grâce à Node.js et un peu de JavaScript, il vous est possible de remplacer votre script PHP !
 Il existe maintenant de nombreux modules [npm](http://www.npmjs.org) permettant d'envoyer un mail.

Ici, je vais vous présenter rapidement [Node-mailer](http://nodemailer.com/) qui est pour moi à l'heure actuelle, le meilleur dans sa catégorie.
Nous allons créer un petit serveur http sur lequel nous pourrons effectuer une requête POST avec nos informations de contact.


### Installation
Evidemment, nous allons avoir besoin de [Node.js](http://nodejs.org) et du package `nodemailer` que je vous invite à installer via npm en faisant :
{% highlight js %}
npm install nodemailer --save
{% endhighlight %}

### Mise en place du serveur
Tout d'abord, il nous faut un serveur HTTP qui va filter les URL pour ne servir que les requêtes en **POST** sur l'url `/`.

<div class="bs-callout bs-callout-info">
  Pour les débutant(e)s avec Node.js, je vous invite à consulter
  <a href="http://www.lilleweb.fr/js/2014/09/03/creer-un-serveur-http-avec-nodejs">cet article</a>.
</div>

Voici un serveur HTTP assez simple, n'oubliez pas d'installer le module **querystring** en faisant `npm install querystring`.

{% highlight js %}
var http = require('http'),
qs       = require('querystring');

var server = http.createServer(function(req, res) {
  if (req.method === 'POST' && req.url === '/') {
    var body = '';
    req.on('data', function (data) {
      body += data;
    });

    req.on('end', function () {
      var mail = qs.parse(body);
    });
  }
  res.end();
});

server.listen(1337);
{% endhighlight %}

### Initialisation de Node-mailer
Pour commencer, ajoutez le module au début de votre fichier comme ceci :

{% highlight js %}
var http   = require('http'),
qs         = require('querystring'),
nodemailer = require('nodemailer');
{% endhighlight %}

En parcourant de plus près l'API de __Nodemailer__, on peut aperçevoir que celui nous permet d'utiliser un compte
GMAIL. Quoi de plus pratique et simple à créer.

Tout d'abord, nous devons créer le transporteur qui va établir les liaisons et les envois. En suivant l'API,
il faut procéder comme ceci :

{% highlight js %}
var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'myemail@gmail.com',
    pass: 'myGmailPassword'
  }
});
{% endhighlight %}

Une fois cette étape passée, nous devons configurer les options de notre mail à envoyer,
dans les plus importantes, on retrouve :

- L'email du destinataire
- L'email de l'envoyeur
- L'objet
- Le contenu en texte brut
- Le contenu en HTML

Personnellement, je n'aime pas avoir un objet trop grand dans une fonction, c'est
pourquoi j'ai préféré passer par une variable intermédiaire.

{% highlight js %}
var mailOptions = {
  from: mail.name+' <'+ mail.sender +'>',
  to: 'myAdress@anything.com',
  subject: 'Contact ',
  text: mail.message,
  html: mail.message
};
{% endhighlight %}

N'oubliez pas de bien définir les éléments que vous voulez récupérer de votre
requête POST, dans mon cas, je récupère le nom, l'email et le message de l'envoyeur.
Une fois vos options configurées, il ne reste plus qu'à utiliser la méthode `sendMail`,
qui va prendre notre objet suivi d'un callback contenant 2 arguments (erreur et réponse)

{% highlight js %}
transporter.sendMail(mailOptions, function(err, response){
  !!err ? console.error(err) : res.end();
});
{% endhighlight %}


Et voila ! N'hésitez pas à tester cela avec un client REST comme [POSTMAN](https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm).
Voici donc le code complet de notre application :

{% highlight js %}
var http   = require('http'),
qs         = require('querystring'),
nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'myemail@gmail.com',
    pass: 'myGmailPassword'
  }
});

var server = http.createServer(function(req, res) {
  if (req.method === 'POST' && req.url === '/') {
    var body = '';
    req.on('data', function (data) {
      body += data;
    });

    req.on('end', function () {
      var mail = qs.parse(body);

      var mailOptions = {
        from: mail.name+' <'+ mail.sender +'>',
        to: 'myAdress@anything.com',
        subject: 'Contact ',
        text: mail.message,
        html: mail.message
      };

      transporter.sendMail(mailOptions, function(err, response){
        !!err ? console.error(err) : res.end();
      });
    });
  }
  res.end();
});

server.listen(1337);
{% endhighlight %}


### Conclusion
Il est désormais possible d'envoyer un mail en JavaScript plutôt qu'en PHP.
Le point négatif est qu'il faut bien configurer ses headers car les mails ont tendances à arriver
dans les spams !
