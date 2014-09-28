---
layout: post
title:  "API Géolocalisation"
date:   2014-09-29
category: JS
tags : geolocalisation html5 api
author: jo
description : L'API de géolocalisation permet aux utilisateurs l'acceptant de partager leur position actuelle. Découvrons la ensemble.
---

## Que permet cette API ?

L'API permet de récupérer les trois éléments nécessaires à la géolocalisation que sont :
- la Latitude
- la Longitude
- l'altitude
Les navigateurs utilisent différentes techniques selon si l'on est sur mobile ou desktop :
- l'adresse IP
- la triangulation (3/4G ou wifi)
- le système GPS (dont beaucoup de smartphones sont équipés aujourd’hui)

## Comment cela fonctionne ?

L'API repose sur la classe `geolocation` de `navigator`.

Cette classe propose 3 méthodes :
- `getCurrentPosition()` permet de connaitre la position de l'utilisateur.
- `watchPosition()` permet de suivre la position de l'utilisateur.
- `clearWatch()` permet de couper la localisation (pour épargner la batterie).

### getCurrentPosition()

La méthode `getPosition()` permet de récupérer la position actuelle de l'utilisateur. La méthode suivante permet son implémentation :

{% highlight html %}

<button onclick="getPosition()">Récupérer ma position</button>
<div id="result"></div>

{% endhighlight %}

{% highlight js %}
function getPosition() {
    //On vérifie si le navigateur supporte la géolocalisation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(writeResult);
    } else {
        result.innerHTML = "Votre navigateur ne supporte pas la géolocalisation.";
    }
}

function writeResult(position) {
    result.innerHTML = "<br/> Lat : " + position.coords.latitude + "<br> Long : " + position.coords.longitude + "<br> Alt : " + position.coords.altitude;
}

{% endhighlight %}

Il est par exemple possible d'utiliser l'API de Google map et afficher à l'utilisateur sa position actuelle sur la carte :

{% highlight js %}

var img = new Image();
img.src = "http://maps.googleapis.com/maps/api/staticmap?center=" + position.coords.latitude + "," + position.coords.longitude + "&zoom=13&size=300x300&sensor=false";
result.appendChild(img);

{% endhighlight %}

### watchPosition()
La méthode `watchPosition()` récupère la position actuelle de l'utilisateur tout comme la méthode `getPosition()` sauf qu'ici cette position est actualisée lorsque l'utilisateur se déplace. Son implémentation est la même :

{% highlight html %}

<button onclick="getPosition()">Récupérer ma position</button>
<div id="result"></div>

{% endhighlight %}

{% highlight js %}

function getPosition() {
    //On vérifie si le navigateur supporte la géolocalisation
    if (navigator.geolocation) {
        var userPosition = navigator.geolocation.watchPosition(writeResult);
    } else {
        result.innerHTML = "Votre navigateur ne supporte pas la géolocalisation.";
    }
}

function writeResult(position) {
    result.innerHTML = "<br/> Lat : " + position.coords.latitude + "<br> Long : " + position.coords.longitude + "<br> Alt : " + position.coords.altitude;
}

{% endhighlight %}


### clearWatch()

La méthode `clearWatch()` permet de stopper la méthode `watchPosition()` de façon à stopper l'utilisation du GPS :

{% highlight html %}

<button onclick="stopGeolocalisation();">Arrêter la géolocalisation</button>

{% endhighlight %}

{% highlight js %}

function stopGeolocalisation(){
    navigator.geolocation.clearWatch(userPosition);
}

{% endhighlight %}

## Callbacks

Les méthodes `getPosition()` et `watchPosition()` possèdent en réalité 3 arguments : getPosition(succes, error, option) / watchPosition(succes, error, option)
- succes : Fonction appelée en cas de succès ("writeResult()" dans notre précedent exemple)
- error : Fonction appelée en cas d'échec (facultatif)
- option : Permet par exemple d'activer ou non le GPS / de déterminer combien de temps les données sont valables

## Erreurs

La gestion des erreurs est très importante et garantie la stabilité de la solution. Les erreurs traitables sont les suivantes :

- TIMEOUT
- PERMISSION_DENIED
- POSITION_UNAVAILABLE
- UNKNOWN ERROR

{% highlight html %}

<button onclick="getPosition()">Récupérer ma position</button>
<div id="result"></div>

{% endhighlight %}

{% highlight js %}

function getPosition() {
    //On vérifie si le navigateur supporte la géolocalisation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(writeResult, writeError);
    } else {
        result.innerHTML = "Votre navigateur ne supporte pas la géolocalisation.";
    }
}

function writeResult(position) {
    result.innerHTML = "<br/> Lat : " + position.coords.latitude + "<br> Long : " + position.coords.longitude + "<br> Alt : " + position.coords.altitude;
}

function erreurPosition(error) {


    switch(error.code) {
      case error.TIMEOUT:
          result.innerHTML = "TIMEOUT ERROR";
      break;
      case error.PERMISSION_DENIED:
          result.innerHTML = "PERMISSION_DENIED";
      break;
      case error.POSITION_UNAVAILABLE:
          result.innerHTML = "POSITION_UNAVAILABLE";
      break;
      case error.UNKNOWN_ERROR:
          result.innerHTML = "UNKNOWN_ERROR";
      break;
}
document.getElementById("infoposition").innerHTML = info;

{% endhighlight %}

A vous par la suite de traiter ces erreurs comme bon vous semble, mais il est important de ne pas les oublier !

## Compatibilité

Internet Explorer 9+, Firefox, Chrome, Safari and Opera supportent l’API de géolocalisation.
Les coordonnées sont plus précises lorsque le device est équipé d’un GPS.

## Conclusion

Cette API offre énormément de possibilités, notamment avec l’essor du mobile et des applications web. Informer l'utilisateur si l'endroit où il se trouve est à une distance acceptable d'un bar branché ? Combien de km va-t-il devoir parcourir pour s’y rendre ? C’est l’exemple que j’ai choisi, mais je vous laisse imaginer par vous-même les possibilités !
