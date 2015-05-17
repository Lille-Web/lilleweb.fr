---
layout: post
title:  "À la découverte de ES2015 - Partie 2"
category: JS
tags : javascript ecmascript es6 es2015
date: 2015-04-15
author: dck
description : "Dans la suite de cette série, nous allons voir en détail comment fonctionne les modules, promesses et classes en ES2015 !"
---

<div class="bs-callout bs-callout-info">
  Cet article fait partie d'une série consacré à ES2015 : <a href="http://www.lilleweb.fr/js/2015/03/17/utilisez-maintenant-es2015/">comment utiliser ES2015</a>.
  <br />
  <a href="http://www.lilleweb.fr/js/2015/03/23/a-la-decouverte-de-es2015/">Partie 1 : let, fat arrow, String template</a>
</div>

## La classe 

Commençons par l'un des sujets les plus controversés en JavaScript : **les classes**. En effet, le sujet est souvent ambigüe pour beaucoup de personnes
ayant de faible connaissance en JavaScript pensant que le JS n'est pas un langage orienté objet offrant un système de classe (tant de confusion pour une histoire de prototype...).

Et bien cette confusion est terminé ! ES2015 apporte le mot clef `class` et ce qui suit, la possibilité de faire de l'héritage simplement grâce à `extends et un système de contructor simplifié.

Voici une petite mise en application :

{% highlight js %}

class Post {
  contructor(title) {
    this._title = title;
  }

  getTitle() {
    return this._title;
  }

  setTitle(title) {
    this._title = title;
  }
}

var article = new Post("ES2015");

article.getTitle(); // "ES2015"

{% endhighlight %}

Dans cet exemple, vous devez noter que je n'ai pas écrit une seule fois le mot `function`. Encore une nouveauté, vous n'êtes plus obligé d'utiliser ce mot clef
et utiliser simplement des parenthèses.

**Un peu d'héritage**

Comme je l'ai dis plut haut, pour faire hériter une classe d'une autre il faut utiliser le mot clef `extends`. Ainsi, la classe va hériter des différentes méthodes 