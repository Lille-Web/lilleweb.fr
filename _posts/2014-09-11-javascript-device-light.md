---
layout: post
title:  "Jouons avec la lumière en Javascript !"
date:   2014-09-11
category: JS
tags : JS mozilla device light API
author: john
description : Aujourd'hui je vais vous faire découvrir comment récupérer la luminosité ambiante afin de rendre vos sites plus accessibles.
---

*Cette article a déjà été écrit sur mon blog personnel. Ayant subi un problème technique et n'ayant pas encore eu le temps de le remettre en ligne, je vous poste de nouveau l'article ici car j'ai trouvé cette découverte vraiment intéressante et elle fait suite à l'article sur <a href="/js/2014/09/02/web-notification-mobile/">les web notifications mobile </a>.*

Aujourd'hui, je vais vous faire découvrir comment récupérer la luminosité ambiante afin de rendre vos sites plus accessibles; c'est-à-dire que vous serez capable de déterminer si l'utilisateur se trouve dans un lieu sombre ou clair, et donc interagir avec la page en fonction : si l'utilisateur lit dans son lit dans le noir, vous pouvez inverser les couleurs de votre site pour qu'il lise en blanc sur fond noir.

Le code HTML est très simple :

{% highlight html %}

<!doctype html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Johnathan MEUNIER | deviceLight</title>
  <script src="script.js"></script>
</head>
<body>
	<h1> Test deviceLightEvent </h1>
	<h2 id="result"> Chargement ... </h2>
</body>
</html>

{% endhighlight %}

Ici c'est bien évidemment le Javascript qui nous intéresse.

{% highlight js %}
(function() {

	var tmp = new Array();
	var i = 0;
	var smooth = 10;
	window.addEventListener('devicelight', function(e) {
	  var lux = Math.round(e.value);
	  tmp.push({'index' : i++, 'lux' : lux});
	  if( i == smooth){
	  	var avLux = 0;
		for(var key in tmp){
		  avLux += tmp[key].lux;
		}
		avLux = avLux / smooth;
		document.querySelector('#result').textContent = avLux + ' lux';
		if(avLux > 1){
			document.querySelector('body').style.backgroundColor = 'white';
			document.querySelector('body').style.color = "black";
		}
		else{
			document.querySelector('body').style.backgroundColor = 'black';
			document.querySelector('body').style.color = "white";
		}
		tmp = new Array();
		i = 0;
	  }
	});
})();
{% endhighlight %}

On va maintenant analyser maintenant les points intéressants de ce code :

* La valeur de la luminosité ambiante est récupérée à travers un EventListener qui a pour type deviceLight. (ligne 6)
* On récupère l'attribut value (ligne 7)
* La valeur récupérée est en lux
* Il est nécessaire de lisser la valeur récupérée car elle varie énormément en peu de temps, ici on récupère la moyenne des 10 dernières valeurs (ligne 8 à 14).
* On modifie le style de la page en fonction du résultat de cette moyenne (ligne 16 à 23)

Gros bémol : DeviceLightEvent serait utilisable seulement sur la Nexus 7.2 avec Firefox. La doc indique que Firefox OS X est compatible, j'ai essayé sous FF29 OS X et ce n'est pas le cas ...

Sinon vous pouvez directement récupérer le code de l'exemple sur mon <a title="Device Light Event GitHub" href="https://github.com/JohnathanSUP/deviceLight" target="_blank">GitHub</a>.

Et pour la doc, ça se passe directement sur le site de <a title="Device Light Event doc Mozilla" href="https://developer.mozilla.org/fr/docs/Web/API/DeviceLightEvent" target="_blank">Mozilla</a>.

Ce genre d'exemple nous montre que dans un futur proche il sera facilement possible d'immerger l'utilisateur afin de rendre sa navigation beaucoup plus agréable !
