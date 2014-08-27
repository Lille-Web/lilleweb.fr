---
layout: post
title:  "Introduction à Browserify"
date:   2014-08-05
category: JS
tags : nodejs npm
author: dck
description : Créer ou récupérer vos packages NPM depuis votre navigateur très facilement avec Browserify.
icon: /src/articles/browserify-logo.png
---

<img src="/src/articles/browserify-logo.png" class="pull-left" alt="Browserify logo" />
Imaginez vous pouvoir récupérer la librairie [Underscore](http://underscorejs.org/) depuis votre navigateur sans avoir à aller sur le site pour télécharger le fichier ? Voilà tout l'intérêt de [Browserify](http://browserify.org/).

<h3 class="specialFloat">
	Des modules dans le navigateur ?
</h3> 

Comme vous le savez, nos navigateurs actuels ne permettent pas de créer simplement des modules et de les partager à l'instar de [Node.js](http://nodejs.org) et ses nombreux modules [npm](http://npm.org). 

C'est ici que Browserify intervient et nous permet d'utiliser le système de module de Node.js dans notre navigateur !


### Installation

Browserify nécessite **Node.js** afin d'installer le paquet depuis npm :
{% highlight bash lineos %}
	npm install -g browserify
{% endhighlight %}


### Fonctionnement

Cela fonctionne très facilement, vous souhaitez utiliser le module [Underscore](http://undescorejs.org) disponible sur npm ? Il vous suffit de faire `require('underscore')` comme si vous développiez avec Node.js. 
N'oubliez surtout pas d'installer le module dans votre application (`npm install underscore`).
Voici un code d'exemple :

{% highlight js lineos %}
// app.js
var _ = require('underscore');

var pokemons = [
 { name: 'Carapuce'   , type: 'eau'},
 { name: 'Salameche'  , type: 'feu'},
 { name: 'Bulbizarre' , type: 'plante'},
 { name: 'Hericendre' , type: 'feu'},
 { name: 'Kaïminus'   , type: 'eau'}];

console.log(_.where(pokemons, {type: 'eau'})); // Log Carapuce et Kaïminus

{% endhighlight %}

Actuellement, si vous testez ce code, vous allez avoir une belle erreur **require is not defined**. Pour que cela fonctionne, Browserify va analyser et compiler le code afin de le rendre interprétable par votre navigateur.

Pour ce faire, lorsque vous installez Browserify, vous disposez d'un alias supplémentaire dans votre terminal (browserify). La commande demande 2 arguments :

- le fichier ou les fichiers contenant les appels de modules
- le nom du fichier résultant de la compilation
 
Voici donc la commande en action :
{% highlight bash %}
browserify app.js -o bundle.js
{% endhighlight %}

Browserify va donc parser tout le code à la recherche de **require()** et des modules associés. Il ne reste plus qu'à insérer le nouveau fichier JavaScript dans votre page HTML.
{% highlight bash %}
<script src="bundle.js"></script>
{% endhighlight %}

### Créer ses modules

En plus de reprendre des modules déjà existant, il est possible de créer ses propres modules afin de rendre son code bien plus maintenant et lisible. Cette étape sera familière aux personnes développant avec Node.js puisque cela reprends exactement le même principe.

Tout d'abord, créez un nouveau fichier JavaScript qui contiendra notre module (appelé ici logger.js). Comme il a été dit plus haut, Node.js utilise [CommonJS](http://wiki.commonjs.org/wiki/CommonJS) pour la gestion des modules, voici un exemple :
{% highlight js %}
// logger.js
module.exports = function(string) {
  console.log('%c'+string, "background: #343434; color: white;");
};
{% endhighlight %}

Nous pouvons maintenant nous servir de notre fonction créée dans __logger.js__ depuis n'importe quel fichier à la différence que nous devons **spécifier un chemin relatif**. Cela est très important sinon votre module sera interpré comme un package npm et ne sera donc pas trouvé.
Voilà votre fichier **app.js** :

{% highlight js %}
// app.js
var logger = require('./logger');

logger('toto'); // log toto stylisé
{% endhighlight %}

Comme vous pouvez le voir, le chemin de logger possède `./` car ce fichier se trouve à la racine de mon application tout comme mon fichier app.js (BP : séparez vos modules et votre fichier principal).


### Conclusion
Browserify est un outil révolutionnaire, à utiliser tant que le nouveau standard (ECMAScript 6) soit supporté par l'ensemble des navigateurs ou simplement pour utiliser rapidement certains modules npm.
