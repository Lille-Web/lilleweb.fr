---
layout: post
title:  "Slider en full CSS"
date:   2014-10-01
category: CSS
tags : slider css noJS transform animation translate
author: jo
description: Nous allons découvrir aujourd'hui comment créer un slider uniquement grâce à HTML5/CSS3 ! C’est-à-dire sans aucune ligne de Javascript ! Votre application ne sera que plus légère !
---

Aujourd’hui, grâce aux animations proposées par CSS3, il est possible de créer une boucle autour d’une liste d’images et d’ainsi créer un slider. Cette démonstration utilise les `@keyframes` combinés avec la propriété `transform`.
## Le code, directement 

### L'HTML

{% highlight html %}

<section class="one_container">
    <div class="all_container slide">
        <img src="http://placeimg.com/625/225/any" class="picture_slider" />
        <img src="http://placeimg.com/625/225/people" class="picture_slider" />
        <img src="http://placeimg.com/625/225/animals" class="picture_slider" />
        <img src="http://placeimg.com/625/225/arch" class="picture_slider" />
    </div>
</section>

{% endhighlight %}

Pour ce qui est du code HTML, on déclare donc un conteneur « one_container » sur lequel on va appliquer les dimensions d’une seule image (soit 625px par 225px), ainsi qu’un conteneur « all_container » sur lequel soit on va appliquer les dimensions de la concaténation des 4 images (soit 625 x 4 = 2500px par 225px).
On renseigne également une classe CSS « style » nous permettant l’animation.

### Le CSS

Nos 2 conteneurs :

{% highlight css %}

/* Conteneur aux dimensions d'une seule image */
.one_container {
  width: 625px;
  margin-top: 50px;
  overflow: hidden;
  border: solid 1px black;
}

/* Conteneur aux dimensions de la concaténation des 4 images */
.all_container {
  width: 2500px;
  font-size: 0;
  transition: 1s ease;
  height: 225px;
}

{% endhighlight %}

Nos images :

{% highlight css %}

.picture_slider {
  width: 625px;
  height: auto;
  display: inline-block;
}

{% endhighlight %}

Et enfin la classe « slide » :

{% highlight css %}

.slide {
    animation: slideAnimation 12s ease infinite;
}

{% endhighlight %}

La propriété `animation`  utilise les `@keyframes`  pour définir les enchainements à effectuer sur une durée spécifiée (ici 12s).

On peut par exemple utiliser la propriété `transform` et « décaler » notre conteneur de 25% (donc d’une image) vers la droite comme ceci :

{% highlight css %}

@keyframes slideAnimation {
  0% {
    transform: translateX(0%);
  }

  12.5% {
    transform: translateX(0%);
  }

  25% {
    transform: translateX(-25%);
  }

  37.5% {
    transform: translateX(-25%);
  }

  50% {
    transform: translateX(-50%);
  }

  62.5% {
    transform: translateX(-50%);
  }

  75% {
    transform: translateX(-75%);
  }

  87.5% {
    transform: translateX(-75%);
  }


  100% {
    transform: translateX(0);
  }
}

{% endhighlight %}

L’ensemble du CSS :

{% highlight css %}

/* Conteneur aux dimensions d'une seule image */
.one_container {
  width: 625px;
  margin-top: 50px;
  overflow: hidden;
  border: solid 1px black;
}

/* Conteneur aux dimensions de la concaténation des 4 images */
.all_container {
  width: 2500px;
  font-size: 0;
  transition: 1s ease;
  height: 225px;
}


.picture_slider {
  width: 625px;
  height: auto;
  display: inline-block;
}

.slide {
    animation: slideAnimation 12s ease infinite;
}

@keyframes slideAnimation {
  0% {
    transform: translateX(0%);
  }

  12.5% {
    transform: translateX(0%);
  }

  25% {
    transform: translateX(-25%);
  }

  37.5% {
    transform: translateX(-25%);
  }

  50% {
    transform: translateX(-50%);
  }

  62.5% {
    transform: translateX(-50%);
  }

  75% {
    transform: translateX(-75%);
  }

  87.5% {
    transform: translateX(-75%);
  }

  99% {
    transform: translateX(-75%);
  }

  99.99% {
      transform: translateX(-75%);
  }

  100% {
    transform: translateX(0);
  }
}


{% endhighlight %}

## Compatibilité

Internet Explorer 9+, Firefox, Chrome, Safari et Opera supportent cette fonctionnalité.

## Conclusion

J’espère vous avoir donné toutes les clés pour réaliser de magnifiques sliders ! Cette fonctionnalité permet de nombreuses possibilités, et il est intéressant d’étudier ces différentes propriétés :

<a href="http://www.w3schools.com/css/css3_animations.asp">CSS 3 Animations</a>

<a href="http://www.w3schools.com/cssref/css3_pr_animation-keyframes.asp">CSS3 animation keyframes</a>

<a href="http://www.w3schools.com/cssref/css3_pr_transform.asp">CSS3 transform</a>

Il est par exemple possible d’arrêter le slider lorsque le curseur de la souri passe dessus :

{% highlight css %}

.all_container:hover {
    animation-play-state: paused;
}

{% endhighlight %}
