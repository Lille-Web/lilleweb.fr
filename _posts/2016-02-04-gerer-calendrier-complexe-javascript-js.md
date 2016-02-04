---
layout: post
title:  "Gérer un calendirer complexe en JS grâce à fullCalendar"
category: JS
tags : javascript calendrier fullCalendar
date: 2016-02-04
author: john
description : "Découvrez comment créer un calendrier complexe en Javascript avec gestion des événements"
---

J'ai récemment été confronté au problème de la gestion d'un calendrier complexe en JS. Par calendrier complexe, j'entends la possibilité de pouvoir afficher un calendrier complet sous plusieurs formats (mois, semaine, jour) contenant des événements avec lesquels l'utilisateur pourrait interagir : cliquer dessus pour avoir plus de détails et pouvoir s'y inscrire par exemple. J'avais également le besoin de gérer plusieurs sources de données dont Google Calendar, d'avoir des réglages assez fins et la possibilité de le personnaliser visuellement pour qu'il soit cohérent avec le reste du site.

J'avais ce besoin lors du développement du site [Latinva France]('http://latinvafrance.fr') pour le module de réservation.

Pendant mes recherches, je suis donc tombé sur [fullCalendar]('URL de fullCalendar'). Au premier abord, ce module javascript utilisant `moment` correspondait exactement à mes besoins. Petit retour d'expériences

## Forces de fullCalendar

Le point fort de fullCalendar est son exhaustivité. Explorons quelques unes de ses possibilités :

### Sources

Le calendrier peut être alimenté par de nombreuses sources : Google Calendrier, flux json, url, tableau d'objets. Il mêle également la possibilité d'importer plusieurs sources de données pour un même calendrier. Sur [Latinva France]('http://latinvafrance.fr') j'importais par exemple les données depuis un calendrier Google (très facile à mettre en place, la procédure est expliquée dans la doc) puis depuis une API que je fournissais en node.js qui me renvoyait juste un flux JSON.

### Paramètres

Le calendrier peut être configuré très finement. Voici une liste de quelques unes de ses possibilités :
- Affichage par jours, semaine, mois avec la possibilité de laisser à l'utilisateur le choix.
- Cacher certains jours de la semaine
- Multilangues (et possibilité de changer soi-même facilement le wording)
- Récupérer le click d'un événement et toutes les datas associées à cet événement (exemple, au clic sur un événement on ouvre une popin contenant plus d'infos et la possibilité de s'y inscrire)

### Personnalisation

Visuellement, le calendrier peut être également personnalisé même s'il y a certaines limites. Dans les options, il est très facile de gérer chaque couleur du calendrier. Il est par contre plus difficile de réellement redesigner le calendrier car tout est géré sous forme de `table` et parfois avec du style inline ...

Voici un exemple de calendrier peu personnalisé : 

![Salon IDEMM affiche](/src/articles/fullCalendar/exemple-calendrier-js.jpg)



### Moment

[fullCalendar]('URL de fullCalendar') intègre `moment`. Si vous ne connaissez pas encore ce fabuleux plug-in JS c'est l'heure de foncer sur [leur site]('URL DE MOMENT') pour en apprendre plus. En quelques mots, `moment` vous permet de gérer de façon beaucoup plus simple les dates et les heures en Javascript : différence, ajout, comparaison, timezone, ect.

Je ferai sûrement quelques articles pour montrer ce que l'on peut faire avec `moment`.

Il est également utile de préciser que [fullCalendar]('URL de fullCalendar') a besoin de jQuery pour fonctionner.

*Au moment où vous lisez ces lignes, le site[Latinva France]('http://latinvafrance.fr') ne contient peut-être pas encore le calendrier terminé*