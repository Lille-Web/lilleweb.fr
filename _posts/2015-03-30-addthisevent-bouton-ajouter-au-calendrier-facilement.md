---
layout: post
title:  "Ajouter facilement un bouton 'Ajouter au calendrier' sur votre site"
date:   2015-03-30
category: HTML
tags : addthisevent event html API google outlook ical
author: john
description : "A la recherche d'une solution efficace pour directement ajouter des entrées dans un calendrier dans la page événements, je suis tombé sur addThisEvent qui m'a fait gagner beaucoup de temps !"
---

A la recherche d'une solution efficace pour directement ajouter des entrées dans un calendrier dans [la page événements](http://www.lilleweb.fr/evenements), je suis tombé sur addThisEvent qui m'a fait gagner beaucoup de temps !

A la base, je voulais travailler avec l'API Google Calendar, qui m'aurait permis d'ajouter un petit bouton d'ajout au calendrier, qui aurait directement envoyé à l'utilisateur une demande à accepter/refuser. Un peu comme ce que fait [Ticketmaster](http://www.ticketmaster.fr/) quand vous commandez des places.

Et lors de mes recherches, je suis tombé sur [AddThisEvent](https://addthisevent.com/) qui vous permet d'ajouter un bouton d'ajout au calendrier gratuitement et rapidement.

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
<script type="text/javascript" src="https://addthisevent.com/libs/1.6.0/ate.min.js"></script>

<div title="Add to Calendar" class="addthisevent">
    Add to Calendar
    <span class="start">06/18/2015 09:00 AM</span>
    <span class="end">06/18/2015 11:00 AM</span>
    <span class="timezone">Europe/Riga</span>
    <span class="title">Summary of the event</span>
    <span class="description">Description of the event</span>
    <span class="location">Location of the event</span>
    <span class="organizer">Organizer</span>
    <span class="organizer_email">Organizer e-mail</span>
    <span class="facebook_event">https://www.facebook.com/events/703782616363133</span>
    <span class="all_day_event">true</span>
    <span class="date_format">MM/DD/YYYY</span>
</div>

{% endhighlight %}

Vous pouvez retrouver tous les détails d'une intégration complète sur le site [AddThisEvent](https://addthisevent.com/)

## Notre intégration via Jekyll

<iframe width="100%" height="450" src="//jsfiddle.net/JohnathanSUP/dvzvr0cy/embedded/html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Retour sur [AddThisEvent](https://addthisevent.com/)

[AddThisEvent](https://addthisevent.com/) m'a permis de gagner énormément de temps, et m'a surtout permis de m'ouvrir vers d'autres services que Google Calendrier en intégrant par exemple aussi Outlook ou iCal !

Je reproche juste qu'[AddThisEvent](https://addthisevent.com/) propose des exemples de thèmes sur leur site mais n'intégre aucun moyen de le changer facilement. C'est à vous d'écrire le CSS adéquat.

## Plus de détails

Vous pouvez retrouver tout ce dont vous avez besoin directement sur le site [AddThisEvent](https://addthisevent.com/), notamment au niveau de la personnalisation des possibilités, ou du thème !