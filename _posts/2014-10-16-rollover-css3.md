---
layout: post
title:  "Effet de rollover sur une image en CSS3"
date:   2014-10-16
category: CSS
tags : rollover, css3, survol
author: henri
description : "Tutoriel : créer un menu responsive avec le plugin jQuery PageSlide"
---

Il existe beaucoup de tutoriel d'effet de rollover, dans celui-ci je vais vous montrer comment afficher une image au survol avec des effets en CSS3.
Dans notre exemple l'effet affichera une loupe, bien entendu cela peut être changé.

### Commençons par la structure en html

Une classe vue avec notre image et une class mask qui sera notre élément au survol.
{% highlight css %}

<div class="vue effet">  
  <img src="image.jpg" />  
  <div class="mask">  
    <a href="#" class="info" title="En savoir plus">En savoir plus</a>  
  </div>  
</div>

{% endhighlight %}

### CSS

{% highlight css %}

.vue {
   width: 300px;
   height: 200px;
   margin: 10px;
   float: left;
   border: 5px solid #fff;
   overflow: hidden;
   position: relative;
   text-align: center;
   box-shadow: 0px 0px 5px #aaa;
   cursor: default;
}

.vue .mask {
   width: 300px;
   height: 200px;
   position: absolute;
   overflow: hidden;
   top: 0;
   left: 0;
}

.vue img {
   display: block;
   position: relative;
}

.vue a.info {
   background:url(../img/loupe.png) center no-repeat;
   display: inline-block;
   text-decoration: none;
   padding:0;
   text-indent:-9999px;
   width:40px;
   height:40px;
}

{% endhighlight %}

Il est nécessaire d'avoir <a href="http://htournoys.com/rollover/loupe.png"> l'image de la loupe </a> dans son projet ! (NDLR)

### CSS de notre effet

Enfin ajoutons notre code css pour l'effet.

{% highlight css %}

.effet .mask {
   opacity: 0;
   overflow:visible;
   border:0px solid rgba(0,0,0,0.7);
   box-sizing:border-box;
   transition: all 0.4s ease-in-out;
}

.effet a.info {
   position:relative;
   top:-20px;
   opacity:0;
   transform:scale(0,0);
   transition: transform 0.2s 0.1s ease-in, opacity 0.1s ease-in-out;
}

.effet:hover .mask {
   opacity: 1;
   border:100px solid rgba(0,0,0,0.7);
}

.effet:hover a.info {
   opacity:1;
   transform:scale(1,1);
   transition-delay:0.3s;
}

{% endhighlight %}

### Compatibilité

Internet Explorer : 10 et +
Chrome : 26 et +
Firefox : 16 et +
Safari : 6.1 et +

[Démonstration](http://htournoys.com/rollover)

[Télécharger](http://htournoys.com/rollover/rollover.zip)
