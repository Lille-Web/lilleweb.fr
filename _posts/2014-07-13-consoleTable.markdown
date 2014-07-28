---
layout: post
title:  "Logger vos tableaux dans les dev tools."
date:   2014-07-13
category: JS
tags : JS devTools astuces
author: john
description : Qui ne s'est jamais arraché les cheveux en voulant afficher un tableau dans la console ?
---


Je pense pouvoir dire sans me tromper que tout le monde parmis vous connait la fonction log() de console qui permet d'afficher dans la console la valeur d'une variable à un instant T. Cependant je pense que peu (pas assez) de gens connait la variante table().

En effet lorsque vous souhaitez afficher la valeur d'un tableau dans la console le résultat est souvent inutilisable.

{% highlight js lineos %}
console.log(yourArray);
{% endhighlight %}

![Markdown preferences pane](/src/articles/consoleLogArray.png)

Pour résoudre ce problème vous pouvez donc utiliser `console.table();` au lieu de `console.log();`. Cette méthode vous permettra d'afficher de manière visuelle le contenu de votre tableau si il est composé de variable scalaire.

{% highlight js %}
console.table(yourArray);
{% endhighlight %}

![Markdown preferences pane](/src/articles/consoleTableArray.png)

Attention tout de même, comme je l'ai précisé avant, le tableau doit contenir des variables scalaires, c'est à dire que si votre tableau contient des objets vous perdez tout l'intéret du `console.table();`.

![Markdown preferences pane](/src/articles/consoleTableArrayWithObject.png)
