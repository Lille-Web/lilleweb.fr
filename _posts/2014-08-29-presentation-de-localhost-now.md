---
layout: post
title:  "Présentation de localhost-now"
category: JS
tags : web server npm nodejs
author: dck
date:  2014-08-29
description : "Créer un serveur web depuis n'importe quel répertoire de votre ordinateur !"
---

Aujourd'hui, je voulais vous parler d'un module npm que j'ai crée il y a peu prénommé [localhost-now](https://www.npmjs.org/package/localhost-now).

Cet article n'a pas pour but d'expliquer comment créer un serveur web avec Node.js, un cours sur ce sujet est actuellement en pleine rédaction et vous expliquera en détail la procédure à suivre. De plus, j'expliquerai dans un autre article la procédure à suivre pour créer un module npm et le publier.

### But du module
J'ai crée ce module pour permettre de lancer un serveur web depuis n'importe quel répertoire, tout cela via une ligne de commande.
L'idée m'est venu après avoir formaté mon ordinateur, je devais installer Apache rien que pour pouvoir tester quelques XHR. 

### Installation
L'autre intérêt est son installation **très simpliste**, il vous suffit d'avoir Node.js et d'installer le module via 

{% highlight js %}
npm install -g localhost-now
{% endhighlight %}

L'argument **-g** est important car il permet d'installer le module de façon global, créant ainsi un alias si le module en fournit un (ce qui est le cas ici).

Vous aurez alors la commande `localhost` disponible.

### Utilisation 
Pour le moment vous pouvez utiliser localhost-now  de 2 façons :

- Sans argument
- Avec un argument

Si vous lancez la commande `localhost` sans argument, cela va vous créer un serveur web dans le répertoire courant sur le port **1337**. 

<img src="/src/articles/5-localhost-now/capture.png" alt="Commande localhost" />

Vous désirez utiliser un port spécifique ? Il vous suffit le préciser en argument par exemple `localhost 8080` et le serveur écoutera alors le port **8080**.

<img src="/src/articles/5-localhost-now/capture-port.png" alt="Commande localhost avec port" />

<div class="bs-callout bs-callout-info">
  <strong>Error: listen EADDRINUSE</strong>
  <p>Cette erreur peut paraitre non explicite pour certains d'entre vous, elle indique tout simplement que le port que vous souhaitez écouter est déjà utilisé.</p>
</div>

### Evolutions à venir

Dans un futur proche, j'aimerais que ce module soit capable de :

- Afficher un message d'erreur plus explicite si l'adresse est déjà utilisée
- Créer un démon pour que le script n'occupe pas le terminal
- Créer un serveur en précisant un chemin relatif ou absolu

Si vous avez des idées à soumettre n'hésitez pas à forker [le projet sur Github](https://github.com/DCKT/localhost-now/blob/master/lib/app.js) ! Pour les non-adeptes de Github, n'hésitez pas à proposer cela en commentaire de l'article.

