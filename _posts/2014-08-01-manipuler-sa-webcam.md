---
layout: post
title:  "Manipuler sa webcam"
date:   2014-08-01
category: JS
tags : webcam hack
author: dck
description : Découvrons aujourd'hui l'API permettant de manipuler la webcam et le micro de votre utilisateur.
icon: "/src/articles/webcam.png"
---

<img src="/src/articles/webcam.png" class="pull-left" alt="Webcam" />
Aujourd'hui, nous allons voir ensemble comment utiliser la webcam de votre ordinateur pour afficher directement ce qu'elle voit sur une page web.

<h3 class="specialFloat"> Support des navigateurs</h3>

Forcément ce genre de technologie n'est pas supporté par tous les navigateurs, voici ceux qui supporte l'API :

<ul class="specialFloat">
<li> Chrome (> 20)</li>
<li> Mozilla (> 16)</li>
<li> Opéra (> 11)</li>
</ul>

Sans surprise, on ne retrouve pas Internet Explorer malgré sa dernière version qui offre une meilleure API que ses ancêtres.
De plus, chaque navigateur dispose d'un nom de méthode qui lui est propre.

### Utilisation de l'API
La méthode pour récupérer la webcam et le micro est présente dans l'objet **navigator** sous le nom `getUserMedia`.

Dans un premier temps, nous allons créer une méthode commune pour les navigateurs afin d'éviter de répéter du code. Pour cela, nous allons simplement aligner des conditions dans l'assignation d'une variable :
{% highlight js %}
navigator.getUserMedia = ( navigator.getUserMedia ||
                       navigator.webkitGetUserMedia ||
                       navigator.mozGetUserMedia ||
                       navigator.msGetUserMedia);
{% endhighlight %}

Cette méthode prend en paramètre 3 éléments :

- Un object contenant les éléments pris en charge tel que la video et/ou l'audio
- Un callback si la récupération a fonctionée
- Un callback si la récupération a echouée

Avant d'appeler notre méthode, il nous faut vérifier si celle-ci existe bien dans le navigateur sinon il faut l'indiquer :

{% highlight js %}
if (navigator.getUserMedia) {
  // Appel navigator.userMedia()
} else {
  console.error("getUserMedia not supported");
}
{% endhighlight %}

