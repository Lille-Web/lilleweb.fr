---
layout: post
title:  "Présentation de localhost-now"
category: JS
tags : web server npm 
author: dck
description : "Créer un serveur web depuis n'importe quel répertoire de votre ordinateur !"
---

Aujourd'hui, je voulais vous parler d'un module npm que j'ai crée il y a peu prénommé [localhost-now](https://www.npmjs.org/package/localhost-now).

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
Pour le moment il y 2 façons pour utiliser localhost-now :

- Sans argument
- Avec un argument

Si vous lancez la commande `localhost` sans argument, cela va vous créer un serveur web dans le répertoire courant sur le port **1337**. 

Vous désirez utiliser un port spécifique ? Il vous suffit le préciser en argument par exemple `localhost 8080` et le serveur écoutera alors le port **8080**.

<div class="bs-callout bs-callout-info">
  <strong>Error: listen EADDRINUSE</strong>
  <p>Cette erreur peut paraitre non explicite pour certains d'entre vous, elle indique tout simplement que le port que vous souhaitez écouter est déjà utilisé.</p>
</div>

