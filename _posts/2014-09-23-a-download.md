---
layout: post
title:  "Télécharger directement la cible d'un lien"
date:   2014-09-23
category: HTML
tags : lien a download télécharger astuce ddl
author: john
description : Petite astuce pour télécharger directement la cible d'un lien quand on clique dessus.
---

Lorsque vous cliquez sur un lien, votre navigateur va essayer de l'ouvrir et de vous afficher le résultat. L'exemple le plus utilisé est bien sur un lien vers un autre fichier html, votre navigateur ouvrira cette nouvelle page cible. D'autres exemples avec l'ouverture d'images, de PDF, de fichiers sonores, ect. C'est le comportement par défaut. Vous pouvez indiquer à un lien un autre comportement : au clic le navigateur proposera le téléchargement du fichier et non son ouverture.

Ce procédé est très simple ! Il vous suffit de rajouter `download` dans votre balise `a`. Voici un exemple de code et son résultat avec et sans `download` sur un lien pointant vers une image.

{% highlight html %}

<a href="/src/img/Logo/Wallpaper/WP%20LILLE%20WEB.jpg"> Sans download </a>
<a href="/src/img/Logo/Wallpaper/WP%20LILLE%20WEB.jpg" download> Avec download </a>

{% endhighlight %}
<div class="bs-callout bs-callout-info">
  <p><a href="/src/img/Logo/Wallpaper/WP%20LILLE%20WEB.jpg"> Sans download </a></p>
  <p><a href="/src/img/Logo/Wallpaper/WP%20LILLE%20WEB.jpg" download> Avec download </a></p>
</div>
