---
layout: post
title:  "À la découverte de ES2015 - Partie 3"
category: JS
tags : javascript ecmascript es6 es2015 promise destructuring
date: 2015-06-20
author: dck
description : "Dans la suite de cette série, nous allons voir ensemble les promesses et quelques petites nouveautées !"
---

<div class="bs-callout bs-callout-info">
  Cet article fait partie d'une série consacrée à ES2015 : <a href="http://www.lilleweb.fr/js/2015/03/17/utilisez-maintenant-es2015/">comment utiliser ES2015</a>.
  <br />
  <a href="http://www.lilleweb.fr/js/2015/03/23/a-la-decouverte-de-es2015/">Partie 1 : let, fat arrow, String template</a>
  <br />
  <a href="http://www.lilleweb.fr/js/2015/03/23/a-la-decouverte-de-es2015-partie-2/">Partie 2 : Classes et modules</a>
</div>

## Promesse tenue
L'arrivée des promesses en JavaScript natif est très attendue, en effet, nous pouvons oublier le callback hell et garder
un code plus propre et lisible.
En plus d'éviter de télécharger une librairie et de devoir supporter une API pas toujours évidente, les promesses natives ont l'avantage d'être très simples à mettre en place. Voici un exemple :

{% highlight js %}
function findUser(id) {
  return new Promise(function(resolve, reject) {
    xhr(`/users/${id}`, function(err, user) {
      if (err) {
        reject(err);
      }

      resolve(user);
    })
  });
}

findUser(10)
  .then(user => {
    // deal with user
  })
  .catch(err => {
    /deal with error
  });
{% endhighlight %}

Comme vous pouvez le voir, pour créer une promesse, on passe par la nouvelle classe **Promise**.
Le fonctionnement est très simple, notre fonction `findUser` retourne une nouvelle instance de `Promise`.
Lorsque vous créez une nouvelle instance, vous devez fournir un callback dans le constructeur, callback content 2 arguments :
- resolve
- reject

Ces arguments sont des fonctions permettant d'être appelées une fois vos requêtes finis, resolve doit être appelé lorsque tout s'est bien passé alors que reject
fait trigger la méthode catch de votre promesse.


## Assignation destructurée

J'en avais parlé très rapidement dans l'article précédent, l'assignation destructurée est un nouveau système d'assignation.
Cela touche principalement les objets et les tableaux. Voici un cas que, je pense, tout le monde a déjà rencontré :

{% highlight js %}
var unTableau = [1,2,3];
var email = req.body.email;
var message = req.body.message;
var one = unTableau[0];
var two = unTableau[1];

// ou encore
var body = req.body;
var email = body.email;
var message = body.message;

{% endhighlight %}

Plutôt long et ennuyant n'est-ce pas ? Et bien vous pouvez oublier tout de suite ce procédé voici comment utiliser notre nouvelle méthode d'assignation :

{% highlight js %}
var { email, message } = req.body;
var [one, two] = unTableau;
{% endhighlight %}

Non non, je n'ai pas inversé mes variables, il n'y a pas d'erreur de syntaxe. En procédant ainsi, vous créez une variable email et message à partir de l'objet req.body.
Même chose pour le tableau, on crée une variable one, two qui va contenir la valeur correspondant à son index (0 et 1 ici).

## Paramètre par défaut

Un autre manque comparé à d'autres langages, avoir des paramètres par défaut pour les arguments de vos fonctions !
Un autre manque comblé par ES2015 ! Tout aussi rapide à mettre en place que les autres langages, vous n'avez qu'à assigner directement dans la liste d'argument de votre foncion.

{% highlight js %} 
function hello(message='Hello World') {
  return message;
}

hello(); // 'Hello World'
hello('toto'); // 'toto'
{% endhighlight %}

Plus besoin d'effectuer une condition dans votre foncton, encore un gain de temps !

## Opérateur de décomposition (spread operator)

Ce nom, un peu barbare, cache une nouvelle fonctionnalité très intéressante permettant (encore) de gagner du temps.
Lorsque vous appelez une fonction avec plusieurs arguments, vous devez placer chaque variable à la suite, ce qui pouvait donner ce genre de cas :

{% highlight js %}
function add(a, b) {
  return a + b;
}

var someNumbers = [1, 2];
add(someNumbers[0], someNumbers[1]);
{% endhighlight %}

Un code un peu redondant qui le sera moins avec l'opérateur de décomposition : **`...`** (3 points). Voici notre cas en ES2015 :

{% highlight js %}
function add(a, b) {
  return a + b;
}
var someNumbers = [1, 2];
add(...someNumbers);
{% endhighlight %}

Un peu comme le destructuring assignment, la fonction va lire de manière intelligente notre tableau (de 0 à x). Nous gagnons ainsi pas mal de lisibilité dans notre code.
Ce nouvel opérateur peut également être intéressant dans ces cas :

{% highlight js %}
var array1 = [1, 2];
var array2 = [3, 4];

array1.push(...array2);

var articulations = ['épaules', 'genoux'];
var corps = ['têtes', ...articulations, 'bras', 'pieds'];
{% endhighlight %}

## La suite au prochain épisode

Dans le prochain article, nous allons voir ensemble les générateurs et les rest parameters ! N'oubliez pas de partager vos avis en commentaire !