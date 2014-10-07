---
layout: post
title:  "Créer un menu responsive avec PageSlide"
date:   2014-09-28
category:
tags : jQuery slider responsive menu mobile
author: henri
description : "Tutoriel : créer un menu responsive avec le plugin jQuery PageSlide"
---

Ce tuto vous permettra de mettre en place un menu qui apparaîtra sur le coté de l'écran avec un effet de slide.

### Ressources nécéssaires

Pour réaliser ce menu, il nous faut :

le plugin jquery ainsi que le plugin jquery PageSlide et le css de PageSlide

### Première étape

Créer un fichier index.html avec la meta viewport et nos css

{% highlight css %}

<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title>PageSlide</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/jquery.pageslide.css">
</head>

{% endhighlight %}

Puis à l'intérieur des balises body nous créons un menu et le bouton qui servira à ouvrir notre menu en version mobile

{% highlight css %}

<header>
  	<a class="open" href="#js-menu">Menu</a>
</header>
<nav id="js-menu" class="menu">
  	<h1>Navigation principale</h1>
	<ul>
		<li><a href="#">Liens 1</a></li>
		<li><a href="#">Liens 2</a></li>
		<li><a href="#">Liens 3</a></li>
		<li><a href="#">Liens 4</a></li>
		<li><a href="#">Liens 5</a></li>
	</ul>
</nav>

{% endhighlight %}

### Deuxième étape

Mettre en place le javascript avant la fin de la balise body

{% highlight css %}

<script src="js/jquery-1.7.2.min.js"></script>
<script src="js/jquery.pageslide.min.js"></script>

{% endhighlight %}

Suivi de l'appel pour activer le plugin

{% highlight js %}

	$(".open").pageslide();

{% endhighlight %}

### Troisième étape

Mise en place du style de notre page

Dans notre fichier style.css, on commence par les éléments de base

{% highlight css %}

* {
  margin: 0;
  padding: 0;
}
body {
  max-width: 940px;
  margin: 0 auto;
  padding-top: 50px;
}
ul {
  list-style: none;
}
{% endhighlight %}

puis le style de notre bouton

{% highlight css %}

.open {
  display: block;
  width: 40px;
  height: 30px;
  background: url(../img/menu.png) center no-repeat #999;
  border-radius: 8px;
  text-indent: -999em;
}

{% endhighlight %}

enfin le style de notre menu

{% highlight css %}

.menu {
  display: none
}
.menu a {
  float: left;
  width: 20%;
  padding:0;
  line-height: 2em;
  background-color: #ff9900;
  color: #333;
  text-decoration: none;
  text-align: center;
}
a:hover {
  opacity: 0.7;
}
#pageslide .menu {
  display: block;
}
#pageslide .menu a {
  float: none;
  display: block;
  width: 100%;
  color: #FFF;
  border-bottom: 1px solid #000;
  box-shadow: 0 1px 0 #555;
  border-radius: 0;
  background: none;
  text-align: left;  
}

{% endhighlight %}

### Pour finir

Mise en place des media-queries pour le menu en version mobile ou ordinateur.

{% highlight css %}

@media only screen and (min-width: 560px) {
  .menu { display: block; }
  .open { display: none; }
}

{% endhighlight %}

[Démonstration](http://htournoys.com/pageslide)

[Télécharger](http://htournoys.com/pageslide/pageslide.zip)
