---
layout: post
title:  "La balise base"
date:   2014-08-22
category: HTML
tags : balise base url lien
author: john
description : "Découvrez la balise base qui vous permet de spécifier un préfixe pour les URL relative."
---
Je suis récemment tombé sur la balise `base` dans une page html où je devais intégrer un test et je ne connaissais pas son existence.

La balise `base` permet de spécifier une URL par défaut pour tous les liens relatifs.

### Utilisation

Elle est très facile à utiliser. Il vous suffit de la déclarer dans le head et de lui spécifier l’attribut href de la même manière qu’un lien classique.

{% highlight html %}

<head>
  <base href="http://www.lilleweb.fr">
</head>

{% endhighlight %}

On peut imaginer de nombreuses utilitées comme la maintenabilité du code en cas de changement de chemin pour une ressource par exemple.

### Pour aller plus loin

Cette balise possède également l'attribut target qui permet de spécifier l'ouverture d'un lien dans un nouvel onglet ou une nouvelle fenêtre, pratique si l'on souhaite spécifier que tous les liens d'une page doivent être ouverts dans un nouvel onglet.

*Pour ouvrir tous les liens d'une page dans un nouvel onglet par exemple :*

{% highlight html %}

<head>
  <base target="_blank">
</head>

{% endhighlight %}

*Voici un exemple d'utilisation concrète, ici tout les liens twitter pointeront vers la page dédié au compte et s'ouvriront dans un nouvel onglet sans devoir préciser l'adresse à chaque fois :*

{% highlight html %}

<head>
   <base href="https://twitter.com/" target="_blank">
</head>
<body>
   <ul>
      <li><a href="lille_web"> @Lille_web</a></li>
      <li><a href="JohnathanSUP"> @JohnathanSUP</a></li>
      <li><a href="DCK__"> @DCK__</a></li>
   </ul>
</body>

{% endhighlight %}

### Compatibilité

Cette balise a été implémentée dans les spécifications HTML 4.01

Pour aller plus loin avec cette balise : [le site w3schools](http://www.w3schools.com/tags/tag_base.asp).
