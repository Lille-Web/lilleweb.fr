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
