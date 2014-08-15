---
layout: post
title:  "Calc(), executer des opérations en CSS"
date:   2014-08-18
category: CSS
tags : calc operation
author: john
description : "Découvrez comment faire des opérations simples mais très utiles dans vos feuilles de styles."
---
La fonction `calc()` vous permet de réaliser les quatre opérations de bases (addition, soustraction, multiplication, division) dans vos fichiers CSS.

`Calc()` est compatible IE 9+, FF 4+, Chrome 19+, Opera 15+, Opera Mobile 21+, Safari 6+, Safari Mobile 6+. Pour plus de détail n'hésitez pas à utiliser le site [Can I Use](http://caniuse.com/#feat=calc)

## Pourquoi utiliser calc()

### Mon préprocesseur fait la même chose !

Pas du tout ! Less, SASS, et j'en passe peut aussi réaliser des opérations mathématiques dans votre navigateur mais il ne connait pas le contexte d'execution. Votre navigateur détermine les tailles en pixels de vos éléments selon les valeurs que vous lui passez. Par exemple si vous demandez à votre élément de faire 50% de largeur dans un parent qui fait 200px, votre élément fera 100px. Votre navigateur le sait. Pas votre préprocesseur.

### Quelques exemples

C'est pour cette raison que vous pouvez faire des calculs plus "complexes" grâce à calc():

{% highlight css %}

div {
    width: calc(100% - 20px);
    padding: 10px;
}

{% endhighlight %}

*Vous évite d'utiliser box-sizing : border-box;*

{% highlight css %}

.el {
    width: calc(100% / 3);
}

{% endhighlight %}

*Par exemple pour la création d'un menu horizontal à 3 éléments*

{% highlight css %}

.el {
    border-width: calc(10px - 1em);
}

{% endhighlight %}

*Vous pouvez mélanger plusieurs unité au sein d'un même calcul*

### Du concret

<iframe width="100%" height="300" src="http://jsfiddle.net/f5z3o8xs/embedded/result,css,html/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
