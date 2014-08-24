---
layout: post
title:  "Les notifications dans votre navigateur ?"
date:   2014-08-20
category: JS
tags : notification
author: john
description : "Apprenez à soulever des notifications dans votre navigateurs pour augmenter les interractions avec l'utilisateur"
---

Pour moi, les web app mobiles ont un très gros point faibles : les notifications. J'ai découvert (d'après [Can I use](http://caniuse.com/#feat=notifications) )  en écrivant ce tuto qu'elles commencent à être supporté partiellement sur Android KitKat ( Android 4.4 ).

Malgré cela, elles sont disponibles sur les applications desktop Chrome, Firefox et Safari.

On va découvrir comment les utiliser et surtout comment aller plus loin avec !

## Les bases

### Qu'est ce qu'une notification ?

Les notifications sont très populaires depuis leurs arrivées sur iOS dans les applications natives. Omniprésentes dans nos systèmes mobiles, elles nous informent d'énormément de chose plus ou moins utiles. Elles sont cependant beaucoup moins utilisées sur les navigateurs car pour qu'une notification arrive, le site doit nécessairement être ouvert.

Une notification se présente sous la forme d'un bandeau rectangulaire d'aspect différent selon les navigateurs et qui présente l'avantage de venir se placer sur le bureau courant (sur mac) au dessus de toute les autres fênetres. Une notification se compose d'un titre et d'une description, elle peut se fermer automatiquement (4s par défaut sur firefox, il est possible comme on va le voir de devenir soit même la durée) ou manuellement. Il est également possible de tagger des notifications comme nous le verrons plus tard.

### A quoi servent-elles

Beaucoup moins utilisées que sur mobiles, elles restent cependant très utiles. Voici une liste non exhaustive de quelques idées d'utilisation :

* [Gmail](https://mail.google.com/mail/) les utilises très bien pour informer de l'arrivée d'un nouveau mail quand le site est déjà ouvert.
* [Slack](https://slack.com/) informe de l'arrivée d'un nouveau message.
* [Tweetdeck](https://tweetdeck.twitter.com/) prévient aussi des intéractions que vous avez défini au préalables : mentions, messages privés, ...
* ...

### Comment faire apparaitre une notification ?

#### Demander l'autorisation

Avant de pouvoir pousser une notification à l'utilisateur il faut lui demander la permission. Durant cette étape obligatoire, un bandeau apparaitra en haut du navigateur pour demander à l'utilisateur si il les souhaites ou non.

Il faut pour cela appeler `requestPermission` de `Notification`, vérifier que la réponse est différente de l'état actuel et setter `Notification.permission` avec le nouveau status.

*Voici comment demander facilement la permission à l'utilisateur : *

{% highlight js %}
  function requestPermission(){
    if (window.Notification && Notification.permission !== "granted") {
      Notification.requestPermission(function (status) {
        if (Notification.permission !== status) {
          Notification.permission = status;
        }
      });
    }
  }
{% endhighlight %}

On retrouve la vérification du support des notifications grâce à `window.Notification` et que l'utilisateur ne les a pas déjà accepté. Après on retrouve l'apparition du bandeau de demande avec `requestPermission()`, la vérification que le status change et la modification du status.

#### Soulever une notification

Une notification est extrémement simple à soulever. Il vous suffit de la créer grâce à `new Notification()` et de passer en paramètre les éléments essentiels : le titre et le contenu.

{% highlight js %}

if (window.Notification && Notification.permission === "granted") {
  var notif = new Notification('Le Titre de ma notif', {body: 'Contenu de la notification qui pourra prendre deux lignes'});
}

{% endhighlight %}

## Allons plus loin

Nous venons de voir qu'il est extrémement simple de faire apparaitre une notification, il serait donc dommage de s'arrêter là.

### Donner une icône à votre notification

Une notification peut contenir une icône pour être facilement identifiable dans un flot important. Cette icone peut représenter le site d'où elle vient, une information sur son propriétaire ou même le contenu d'un message.

{% highlight js %}

if (window.Notification && Notification.permission === "granted") {
  var notif = new Notification('Titre', {body: 'Contenu ', icon : 'http://lilleweb.fr/src/img/Logo/Solo/solo-avec-fond.png'});
}

{% endhighlight %}

### Récupérer le click sur la notification

Le click se gère grâce à `onclick` sur votre notification :

{% highlight js %}

this.notification.onclick = function(){
  console.log('vous avez cliqué sur la notification');
}

{% endhighlight %}

Vous pouvez remplacer le `console.log()` par l'action de votre choix, par exemple une redirection :

{% highlight js %}

var url = 'http://www.lilleweb.fr';

this.notification.onclick = function(){
  if(url.indexOf('http://') != -1){
    document.location.href = url;
  } else{
    document.location.href = "http://"+url;
  }
}

{% endhighlight %}

Ici vous vérifier que l'URL cible commence bien par "http://", si c'est le cas vous redirigez vers cette dernière, si c'est pas le cas vous la parser correctement.

### Tager vos notifications

A mes yeux, l'attribut `tag` est le plus pratique. Les notifications ont le mauvais défauts de toutes se réafficher dès qu'il y en a une nouvelles si vous les avez pas fermé, comme sur [Tweetdeck](https://tweetdeck.twitter.com/) ou [Slack](https://slack.com/).

Une nouvelle notification ayant le même attribut `tag` qu'une plus ancienne supprimera cette dernière. Les notifications affichent donc le dernier élément intéressant au lieu d'afficher tout ce qui n'a pas été fermé. Encore une fois, la web API notification permet cela très facilement.

{% highlight js %}

if (window.Notification && Notification.permission === "granted") {
  var notif = new Notification('Titre', {body: 'Contenu ', tag : 'js'});
}

{% endhighlight %}

Dans cet exemple, toute nouvelle notification ayant un tag 'js' supprimera les anciennes ayant également le tag 'js'.

## Conclusion

Nous venons de découvrir comment faire apparaitre une notification enrichi avec des tag et une icône après avoir demandé la permission à l'utilisateur. Un bout de code résumant tout cela s'impose :

{% highlight js %}

if (window.Notification && Notification.permission !== "granted") {
  Notification.requestPermission(function (status) {
    if (Notification.permission !== status) {
      Notification.permission = status;
    }
  });
}

if (window.Notification && Notification.permission === "granted") {
  var notif = new Notification('Lille Web', {body: 'Un article sur les notifications est disponibles !', tag : 'js', icon : 'http://lilleweb.fr/src/img/Logo/Solo/solo-avec-fond.png'});
}

{% endhighlight %}

Vous pouvez retrouver aussi un repo où je fais quelques "expériences" sur [GitHub]('https://github.com/JohnathanSUP/Web-Notification').
