---
layout: post
title:  "Allons plus loin avec les web notifications !"
date:   2014-08-26
category: JS
tags : notification HTML5 API
author: john
description : "Apprenez à soulever des notifications dans votre navigateur pour augmenter les interactions avec l'utilisateur"
---

Pour moi, les web app mobiles ont un très gros point faible : les notifications. J'ai découvert (d'après [Can I use](http://caniuse.com/#feat=notifications) )  en écrivant ce tuto qu'elles commencent à être supportées partiellement sur Android KitKat ( Android 4.4 ).

Malgré cela, elles sont disponibles sur les applications desktop Chrome, Firefox et Safari.

On va découvrir comment les utiliser et surtout comment aller plus loin avec !

## Les bases

### Qu'est ce qu'une notification ?

Les notifications sont très populaires depuis leur arrivée sur iOS dans les applications natives. Omniprésentes dans nos systèmes mobiles, elles nous informent d'énormément de choses plus ou moins utiles. Elles sont cependant beaucoup moins utilisées sur les navigateurs car pour qu'une notification arrive, le site doit nécessairement être ouvert.

Une notification se présente sous la forme d'un bandeau rectangulaire d'aspect différent selon les navigateurs et qui présente l'avantage de venir se placer sur le bureau courant (sur mac) au-dessus de toutes les autres fenêtres. Une notification se compose d'un titre et d'une description, elle peut se fermer automatiquement (4s par défaut sur Firefox, il est possible comme on va le voir de définir soit même cette durée) ou manuellement. Il est également possible de tagger des notifications comme nous le verrons plus tard.

<img src="/src/articles/webNotif/chromeNotif.png" title="Notification Chrome" alt="Visuel d'exemple d'une notification chrome"/>
<img src="/src/articles/webNotif/firefoxNotif.png" title="Notification Firefox" alt="Visuel d'exple d'une notification Firefox"/>

### A quoi servent-elles ?

Beaucoup moins utilisées que sur mobiles, elles restent cependant très utiles. Voici une liste non exhaustive de quelques idées d'utilisation :

* [Gmail](https://mail.google.com/mail/) les utilise très bien pour informer de l'arrivée d'un nouveau mail quand le site est déjà ouvert.
* [Slack](https://slack.com/) informe de l'arrivée d'un nouveau message.
* [Tweetdeck](https://tweetdeck.twitter.com/) prévient aussi des interactions que vous avez définies au préalable : mentions, messages privés, ...
* ...

### Comment faire apparaître une notification ?

#### Demander l'autorisation

Avant de pouvoir pousser une notification à l'utilisateur, il faut lui demander la permission. Durant cette étape obligatoire, un bandeau apparaîtra en haut du navigateur pour demander à l'utilisateur s'il les souhaite ou non.

<img src="/src/articles/webNotif/chromeRequest.png" title="Bandeau demande notification chrome" alt="Visuel d'exple d'une demande d'autorisation des notifications Chrome" />

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

On retrouve la vérification du support des notifications grâce à `window.Notification` et si l'utilisateur ne les pas encore acceptées. Après on retrouve l'apparition du bandeau de demande avec `requestPermission()`, la vérification que le statut change et sa modification.

#### Soulever une notification

Une notification est extrêmement simple à soulever. Il vous suffit de la créer grâce à `new Notification()` et de passer en paramètre les éléments essentiels : le titre et le contenu.

{% highlight js %}

if (window.Notification && Notification.permission === "granted") {
  var notif = new Notification('Le Titre de ma notif', {body: 'Contenu de la notification qui pourra prendre deux lignes'});
}

{% endhighlight %}

## Allons plus loin

Nous venons de voir qu'il est extrêmement simple de faire apparaître une notification, il serait donc dommage de s'arrêter là.

### Donner une icône à votre notification

Une notification peut contenir une icône pour être facilement identifiable dans un flot important. Cette icône peut représenter le site d'où elle vient, une information sur son propriétaire ou même le contenu d'un message.

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

Ici, vous vérifiez que l'URL cible commence bien par "http://", si c'est le cas vous redirigez vers cette dernière, si ce n'est pas le cas, vous la parsez correctement.

### Tager vos notifications

A mes yeux, l'attribut `tag` est le plus pratique. Les notifications ont le défaut de toutes se réafficher dès qu'il y en a une nouvelle si vous ne les avez pas fermées, comme sur [Tweetdeck](https://tweetdeck.twitter.com/) ou [Slack](https://slack.com/).

Une nouvelle notification ayant le même attribut `tag` qu'une plus ancienne supprimera cette dernière. Les notifications affichent donc le dernier élément intéressant au lieu d'afficher tout ce qui n'a pas été fermé. Encore une fois, la web API notification permet cela très facilement.

{% highlight js %}

if (window.Notification && Notification.permission === "granted") {
  var notif = new Notification('Titre', {body: 'Contenu ', tag : 'js'});
}

{% endhighlight %}

Dans cet exemple, toute nouvelle notification ayant un tag 'js' supprimera les anciennes ayant également le tag 'js'.

## Conclusion

Nous venons de découvrir comment faire apparaître une notification enrichie avec un tag et une icône après avoir demandé la permission de l'utilisateur. Un bout de code résumant tout cela s'impose :

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

Vous pouvez retrouver aussi un repo où je fais quelques "expériences" sur [GitHub](https://github.com/JohnathanSUP/Web-Notification).
