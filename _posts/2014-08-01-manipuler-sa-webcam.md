---
layout: post
title:  "Manipuler sa webcam"
date:   2014-08-01
category: JS
tags : webcam hack
author: dck
description : Découvrons aujourd'hui l'API permettant de manipuler la webcam et le micro de votre utilisateur.
icon: "/src/articles/3-cam/webcam.png"
---

<img src="/src/articles/3-cam/webcam.png" class="pull-left" alt="Webcam" />
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
  // navigator.userMedia()
} 
else {
  console.error("getUserMedia not supported");
}
{% endhighlight %}

À présent nous pouvons appeler notre méthode, rappelez vous, nous devons renseigner ce qui va être pris en charge en 1<sup>er</sup> argument. Voici l'objet en question :

{% highlight js %}
var constraints = {
  video: true,
  audio: false
};
{% endhighlight %}

Je vous recommande de ne pas activer l'audio étant donné que la vidéo retransmettra le son créant ainsi d'horribles sons aïgues.

Le deuxième argument doit contenir une fonction qui exéctuera la logique, pour afficher la webcam nous devons utiliser une balise **video**. Créer un fichier __index.html__, n'oubliez pas d'inclure votre script JavaScript.

Pour commencer, mettez une balise vidéo comme ceci :

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>SnapCam</title>
  <script src="app.js"></script>
</head>
<body>
  <video></video>
</body>
</html>
{% endhighlight%}

Voici le comportement de callback : 
{% highlight js %}
function successCallback(localMediaStream) {
  var video = document.querySelector('video');
  video.src = window.URL.createObjectURL(localMediaStream);
  video.play();
};
{% endhighlight %}

On récupère notre balise vidéo et on assigne une nouvelle source grâce à la méthode `createObjectURL` où l'on donne __localMediaStream__ qui n'est autre que l'argument passé dans le callback. 

Cette méthode permet comme son nom l'indique un objet URL qui va représenter l'élément spécifié (ici notre webcam).
Une fois la source assignée, il ne reste plus qu'à jouer la balise vidéo !

Avant de tester, n'oublions pas le callback d'erreur, il nous permettra d'obtenir plus d'informations s'il y a le moindre problèmes :
{% highlight js %}
function errorCallback(err) {
  console.log("The following error occured: " + err);
};
{% endhighlight %}

Nous voilà à présent prêt pour utiliser notre méthode `getUserMedia` ! Voici le code du fichier **app.js**.

{% highlight js %}
(function () {
  navigator.getUserMedia = ( navigator.getUserMedia ||
                       navigator.webkitGetUserMedia ||
                       navigator.mozGetUserMedia ||
                       navigator.msGetUserMedia);

  var constraints = {
    video: true,
    audio: false
  };

  if (navigator.getUserMedia) {
    navigator.getUserMedia(constraints, successCallback, errorCallback);
  } 
  else {
    console.error("getUserMedia not supported");
  }
})();

function successCallback(localMediaStream) {
  var video = document.querySelector('video');
  video.src = window.URL.createObjectURL(localMediaStream);
  video.play();
};

function errorCallback(err) {
  console.log("The following error occured: " + err);
};
{% endhighlight %}

Vous remarquerez qu'au chargement de la page, un bandeau apparait en haut de votre page. C'est une mesure de sécurité évitant ainsi d'abuser de cette fonctionnalité (filmer une personne sans sa permission est interdit par la loi).

![Demande de confirmation](/src/articles/3-cam/screen.png)


### Quelques fonctionnalités supplémentaires

Comme le montre la capture d'écran, nous allons implémenter deux petites fonctionnalités amusantes et assez simple à implémenter :

- Mettre en pause / play la vidéo
- Faire une capture d'écran de la vidéo


##### Changer l'état de la vidéo
Pour mettre en pause notre vidéo lorsqu'elle est jouée nous avons les contrôles classiques mais qui nous offre peu pour ne pas dire pas du tout de place pour la customisation.

Nous allons mettre en place un petit bouton qui va nous permettre de switcher entre l'état pause et play :

{% highlight js %}
// app.js
function toggle() {
  var video = document.querySelector('video');
  video.paused ? video.play() : video.pause();
}
{% endhighlight %}

Rien de bien spécial, on récupère la vidéo pour vérifier grâce si elle est déjà en pause, si c'est le cas on appelle la méthode `play` sinon on la met pause.

Il ne reste plus qu'à binder le clic à un bouton ou autre, ici j'ai directement assigné la fonction à un bouton sans passer par un `addEventListener` :

{% highlight html %}
<button onclick="javascript:toggle()">Toggle</button>
{% endhighlight %}

##### Prendre une photo
Avant de créer la logique pour prendre une photo, nous devons ajouter une nouvelle balise dans notre HTML, la balise **canvas** celle-ci nous permettra de "dessiner" l'image que nous allons capturer. 

Concernant notre fonction, nous allons faire comme pour le changement d'état de la vidéo, nous allons créer un bouton avec une fonction déclenchée au clic de la souris. Voici la fonction en détail :

{% highlight js %}
function takeSnap() {
  var canvas = document.querySelector('canvas'),
  video = document.querySelector('video');

  canvas.width = 300;
  canvas.height = 200;
  canvas.getContext('2d').drawImage(video, 0, 0, 300, 200);
  var data = canvas.toDataURL('image/png');
  canvas.setAttribute('src', data);
}
{% endhighlight %}

En plus de récupérer la vidéo, nous récupérons le canvas de la page pour lui assigner une largeur et une hauteur. N'hésitez pas à indiquer les dimension de votre choix.
Ensuite, nous allons indiquer que notre canvas sera en 2 dimensions à l'aide de la méthode `getContext`. 

La méthode `drawImage` nous donne la possibilité de dessiner une image [à partir d'un élément](https://developer.mozilla.org/fr/docs/Tutoriel_canvas/Utilisation_d'images#drawImage), nous lui passons donc notre vidéo puis la position x/y et pour finir les dimensions de notre dessin.

Pour que le canvas puisse afficher ce que nous venons de créer, nous avons besoin de transformer notre élément en image. Pour cela, nous pouvons utiliser la méthode `toDataURL` suivi du type en argument pour créer un lien vers notre image. Il ne reste plus qu'à lier ce lien à notre canvas pour voir s'afficher notre screenshot !

Vous pouvez retrouver le code de l'application un peu plus élaboré sur [Github](https://github.com/Lille-Web/Snapcam). N'hésitez pas à partager vos idées ou autres commentaires !
