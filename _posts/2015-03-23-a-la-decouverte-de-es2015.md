---
layout: post
title:  "À la découverte de ES2015 - Partie 1"
category: JS
tags : javascript ecmascript es6 es2015
date: 2015-03-23
author: dck
description : "Suite à l'article sur Babel, j'ai décidé de vous présentez certaines fonctionnalités de ECMAScript 2015."
---

L'article écrit il y a peu <a href="http://www.lilleweb.fr/js/2015/03/17/utilisez-maintenant-es2015/">sur Babel</a> m'a donné envie de vous présenter en différentes parties certaines fonctionnalités de ECMAScript 2015.

Si vous n'avez pas envie de passer par un module, où autre, vous pouvez tester directement en ligne sur <a href="http://jsbin.com/yotucu/1/embed?js,output">ce JSBin</a> (il faut juste retirer le code déjà présent).

#### Au revar et bonjour let !

ES2015 apporte un nouveau mot clef : **let**. En effet, il est utilisé afin d'assigner une variable comme notre ami bien connu **var**.
La première question qui vient à l'esprit, pourquoi ? Et bien, laissons parler le code et essayez cet exemple :

{% highlight js %}
for (var i = 0; i < 5; i++) {
  // bla
}
console.log(i); // 5
{% endhighlight %}

Et oui, la variable i est bien définie après notre boucle for. Maintenant s'ils ont reprend le même code en utilisant **let** :

{% highlight js %}
for (let i = 0; i < 5; i++) {
  // bla
}
console.log(i); // Uncaught ReferenceError : i is not defined
{% endhighlight %}

Une référence au bloc courant ! Voilà la différence entre var et let, les variables déclarées seront uniquement présente dans le bloc ou elles sont définies.
Intéressant non ?

#### De la constance

Les constantes, voilà un point qu'il manquait au JavaScript. Nous pouvons à présent définir une variable et être certains que celle-ci ne sera pas altérée.
Pour ce faire, ES2015 apporte une fois de plus un mot clef : **const**. Voici un petit exemple :
{% highlight js %}
const TEST = 1;
TEST = 2; // Error : TEST is read-only
{% endhighlight %}

En cas de tentative de modification, une erreur est levée. Voilà une nouveauté toute aussi utile !

#### Fat arrow function, "inspiré" du CoffeeScript

Si vous connaissez CoffeeScript, cela va vous sauter aux yeux. En effet, CoffeeScript est un pré-processeur JS inspiré de la syntaxe de Ruby.
Une idée pas trop mal (à consommer avec modération) qui apporte un lot de fonctionnalité comme le principe de la **fat arrow function**.

Pourquoi fat arrow ? Et bien, il est possible d'écrire une fonction de callback d'une manière différente à l'aide de 2 caractères : "**=>**". Voilà un bout de code
en ES5 :
{% highlight js %}
var numbers = [1,2,3];

numbers.forEach(function(element) {
  console.log(element);
});
{% endhighlight %}

Pour écrire notre callback, on déclare comme d'habitude une fonction anonyme tout à fait classique. Voilà maintenant un exemple utilisant
ES2015 :
{% highlight js %}
let numbers = [1,2,3];

numbers.forEach((element) => { console.log(element) });
{% endhighlight %}

Ouch, un peu rude comme changement au premier coup d'oeil. L'idée est principalement d'améliorer la lisibilité et de favoriser l'inline (tant que ça reste court et conçis).
J'aime bien utiliser la fat arrow mais je pense que c'est comme le CoffeeScript, évitons d'en mettre partout sinon cela va au contraire casser la lisibilité.

**Un changement de contexte**
Lorsque nous utilisons la fat arrow en ES2015, cela revient à appliquer un `bind(this)` à notre fonction. Vous aurez accès au scope parent dans votre fonction, exemple :

{% highlight js %}
function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++;
  }, 1000);
}
{% endhighlight %}

Dans cet exemple, nous pouvons utiliser `this` sans problème, pas besoin de passer par une variable intermédiaire ou de binder la fonction. 

#### Un système de template pour les ${string}

Je pense que c'est un point sur lequel nous sommes tous d'accord, la concaténation de variable est une chose horrible s'ils ont n'utilisent pas de système de template.
Le standart nous a entendu, et nous apporté un système de template ! Cependant, il faut également s'adapter un petit.

En effet, à l'instar d'utiliser des guillemets ou des apostrophes pour déclarer une String, on utilise maintenant un accent grave (**`**).
{% highlight js %}
let name = "DCK";
console.log(`Hello ${name}`); // "Hello DCK"
{% endhighlight %}

Ce qui doit vous perturber, c'est sans doute cette syntaxe étrange qu'est le `${}`, vous l'aurez compris, grâce à cela vous pouvez directement
afficher vos variable sans fermer la string puis la re-ouvrir. Chose très très pratique dans le développement de tous les jours.
Vous pouvez également appelé des fonctions ou objet, c'est le même fonctionnement qu'avant mais en mille fois plus propre.

### La suite au prochain épisode

Dans la partie suivante, nous verrons ensemble les Promesses, les classes, les modules et bien d'autres ! N'hésitez pas à partager vos retours d'expériences sur l'utilisation de ES2015 dans les commentaires !

