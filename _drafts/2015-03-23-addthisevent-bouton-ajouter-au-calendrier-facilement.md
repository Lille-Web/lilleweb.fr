---
layout: post
title:  "Ajouter facilement un bouton 'Ajouter au calendrier' sur votre site"
date:   2015-03-23
category: HTML
tags : addthisevent event html API google outlook ical
author: john
description : "A la recherche d'une solutin efficace pour directement ajouter des entrées dans un calendrier dans la page événements, je suis tombé sur addThisEvent qui m'a fait gagner beaucoup de temps !"
---

A la recherche d'une solutin efficace pour directement ajouter des entrées dans un calendrier dans la page événements, je suis tombé sur addThisEvent qui m'a fait gagner beaucoup de temps !

A la base, je voulais travailler avec l'API Google Calendar, qui m'aurait permit d'ajouter un petit bouton d'ajout au calendrier, qui aurait directement rentrer dans l'utilisateurs une demande a accepter/refuser. Un peu comme ce que fait [Ticketmaster](http://www.ticketmaster.fr/) quand vous commandez des places.

Et lors de mes recherches, je suis tombé sur [AddThisEvent](https://addthisevent.com/) qui vous permet d'ajouter un bouton d'ajout au calendrier gratuitement.

[AddThisEvent](https://addthisevent.com/) fonctionne avec :
- Outlook
- Google Calendrier
- Yahoo
- Hotmail
- iCal
- Facebook

## Une intégration basique

Voici ce que propose AddThisEvent comme intégration :

{% highlight html %}

<!-- AddThisEvent -->
<script type="text/javascript" src="https://addthisevent.com/libs/1.5.8/ate.min.js"></script>

<a href="http://example.com/link-to-your-event" title="Add to Calendar" class="addthisevent">
    Add to Calendar
    <span class="_start">10-05-2015 11:38:46</span>
    <span class="_end">11-05-2015 11:38:46</span>
    <span class="_zonecode">35</span>
    <span class="_summary">Summary of the event</span>
    <span class="_description">Description of the event</span>
    <span class="_location">Location of the event</span>
    <span class="_organizer">Organizer</span>
    <span class="_organizer_email">Organizer e-mail</span>
    <span class="_facebook_event">http://www.facebook.com/events/160427380695693</span>
    <span class="_all_day_event">true</span>
    <span class="_date_format">DD/MM/YYYY</span>
</a>

{% endhighlight %}

Vous pouvez retrouver tout les détails d'une intégration complète sur le site [AddThisEvent](https://addthisevent.com/)

## Notre intégration via Jekyll

<iframe width="100%" height="450" src="//jsfiddle.net/JohnathanSUP/dvzvr0cy/embedded/html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Retours sur [AddThisEvent](https://addthisevent.com/)

[AddThisEvent](https://addthisevent.com/) m'a permit de gagner énormément de temps, et m'a surtout permit de m'ouvrir vers d'autres services que Google Calendrier en intégrant par exemple aussi Outlook ou iCal !

## Plus de détails

Vous pouvez retrouver tout ce dont vous avez besoin directement sur le site [AddThisEvent](https://addthisevent.com/), notamment au niveau de la personnalisation des possibilités, ou du thèmes !