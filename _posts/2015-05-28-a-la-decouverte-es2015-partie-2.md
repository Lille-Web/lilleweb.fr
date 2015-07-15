---
layout: post
title:  "À la découverte de ES2015 - Partie 2"
category: JS
tags : javascript ecmascript es6 es2015 class module
date: 2015-05-28
author: dck
description : "Dans la suite de cette série, nous allons voir ensemble les modules et les classes en ES2015 !"
---

<div class="bs-callout bs-callout-info">
  Cet article fait partie d'une série consacrée à ES2015 : <a href="http://www.lilleweb.fr/js/2015/03/17/utilisez-maintenant-es2015/">comment utiliser ES2015</a>.
  <br />
  <a href="http://www.lilleweb.fr/js/2015/03/23/a-la-decouverte-de-es2015/">Partie 1 : let, fat arrow, String template</a>
</div>

## T'as la classe 
Un point très controversé du JavaScript est son manque de clareté concernant la création de classe comparé aux autres langages.
Avant, nous devions créer une fonction et utiliser les prototypes afin d'assigner des méthodes.
ES2015 fait avancer les choses et apporte un renouveau, plus précisement de la sucre syntaxique pour les classes en JS !

À cette occasion, de nouveaux mots clés peuvent être utilisés comme `class`, `static` ou encore `constructor`. Voici un petit exemple :

{% highlight js %}

class Player {
  static bouyah() {
    alert('Bouyah !');
  }

  constructor(name) {
    this.name = name;
    this.life = 100;
  }

  getLife() {
    return this.life;
  }
};

var Tom = new Player("Tom");

Tom.getLife(); // 100
Player.bouyah(); // alert('Bouyah');

{% endhighlight %}

Lisible n'est-ce pas ? Il est très simple de déclarer une nouvelle classe comme on peut le voir !
Vous pouvez noter la méthode **constructor** qui comme son nom le laisse entendre est le constructeur (méthode appelée à chaque instanciation).
Autre particularité importante, les méthodes **ne sont pas séparées par des virgules**, oui car nous ne sommes pas dans un objet.

Pour les méthodes statiques, il suffit de préfixer la méthode avec le mot clé `static` et vous pourrez alors appeler celle-ci directement à partir de l'objet `Player`.

**Héritage**

L'héritage a également été très simplifié ! Voilà comment procéder en ES2015 :

{% highlight js %}
class Player {
  constructor(name) {
    this.name = name;
    this.life = 100;
  }

  get name() {
    return this.name;
  }

  getLife() {
    return this.life;
  }
}

class Mage extends Player {
  constructor(name) {
    super(name);
  }

  fireball() {
    alert('Fireball !!!!');
  }
}

var TomTheWizard = new Mage('Tom');
TomTheWizard.getLife(); // 100
TomTheWizard.fireball(); // alert
console.log(TomTheWizard.name); // 'Tom'

{% endhighlight %}

Grâce au mot clé `extends`, il est très simple de faire hériter la classe Mage de la classe Player.
Comme dans un langage de programmation orienté objet classique, les méthodes de la classe parente seront disponibles pour l'enfant.

La fonction `super()` vous permet d'appeler le constructeur de la classe parente.
Les plus minutieux auront remarqué la syntaxte un peu étrange `get name()`, c'est également une nouvelle fonctionnalité permettant de simplifier les 
getters et les setters.

## Des modules

Une autre faiblesse du JavaScript était son manque de modularité si l'on ne souhaite pas utiliser d'outils 
comme [Browserify](http://www.lilleweb.fr/js/2014/08/05/introduction-a-Browserify/) ou encore [Require.js](http://www.lilleweb.fr/js/2015/04/07/require/)

Si vous avez déjà travaillé avec Browserify, cela va vous être un peu familier. En effet, la syntaxte est assez proche, voici un exemple avec Browserify :

{% highlight js %}
// addition.js
module.exports = function(a, b) {
  return a + b;
};

// app.js
var addition = require('./app.js');
{% endhighlight %}

Et voici avec ES2015 :
{% highlight js %}
// addition.js
export function(a, b) {
  return a + b;
}

// app.js
import { addition } from './app.js';
{% endhighlight %}

La syntaxe est assez similaire, on garde le mot clé **export** et on ne fait plus d'assignation puisque ce n'est plus le même comportement.
Pour récupérer un module, on récupère la/les méthodes  grâce à l'assignation destructurée (nous allons voir ça dans le prochain article) puis nous
donnons le chemin du module via `from` suivi d'une chaine de caractère.

Vous pouvez évidemment chaîner plusieurs exports à la suite et les récupérer dans l'import.

**Méthode par défaut**
Assigner méthode par méthode n'est pas très pratique en soi, c'est pourquoi il est possible d'assigner des éléments **par défaut** dans votre module.
Cela va nous permettre d'éviter l'assignation destructurée, voici un exemple :

{% highlight js %}
// calc.js
export default function (a, b) {
  return a + b;
};

export function substract(a, b) {
  return a - b;
};

// app.js
import add, { substract } from './calc.js';
{% endhighlight %}

**Un alias pour vos méthodes**
Dans de rares cas, il est possible que certains modules possèdent le même nom de méthode ou encore que celui-ci ne vous plaise pas.
Sachez qu'il est possible de le renommer directement dans votre import grâce au mot clé `as`.

{% highlight js %}
// addition.js
export function add(a, b) {
  return a + b;
};

// app.js
import { add as addition } from './addition.js';
{% endhighlight %}


### La suite au prochain épisode

Dans le prochain article, nous allons voir ensemble les promesses sans librairies, et quelques petites fonctionnalités qui vont changer votre 
façon de développer en JavaScript ! N'oubliez pas de partager vos avis en commentaire !