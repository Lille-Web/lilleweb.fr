---
layout: post
title:  "Decktape : exporter vos présentations en HTML5"
date:   2016-03-17
category: OUTILS
tags : decktape revealjs slides powerpoint keynote
author: john
description : "Exportez vos présentation HTML5 en PDF"
---

Si comme moi, vous avez l'habitude de faire vos présentations en HTML5 sur [slides](https://slides.com/) par exemple, vous avez sûrement dû être confrontés au problème de l'export en PDF pour les partager sur [speakerdeck](https://speakerdeck.com/) par exemple. 

## Deux solutions

- souscrire à [une offre payante](https://slides.com/pricing?h=1). Cette solution est très intéressante si vous avez besoin de tout ce qu'offre l'option payante. Si ce n'est pas le cas je vous conseille la deuxième solution
- utiliser un outil qui saura exporter votre pres en PDF, qu'elle soit en ligne ou en local

C'est pour cela que je vous présente Decktape. Decktape est un simple projet sur Github qui vous permettra, grâce à quelques lignes de commandes, d'exporter en très bonne qualité votre présentation en PDF ! 

## Decktape, comment ça marche ?

Je ne vais pas vous présenter en détail le fonctionnement de Decktape, tout est parfaitement expliqué sur [le github](https://github.com/astefanutti/decktape#usage) ;)

L'idée est de fournir grâce à la CLI le chemin d'accès à votre présentation (qui peut être en ligne ou exportée en HTML), utiliser le mode automatique, spécifier le chemin (et le nom) que devra avoir l'export et Decktape vous créera un PDF en haute qualité de votre présentation.

## Compatibilité de Decktape

Decktape supporte déjà de nombreux outils populaires : 

<ul>
  <li><a href="http://markdalgleish.com/projects/bespoke.js">Bespoke.js</a></li>     
  <li><a href="http://paulrouget.com/dzslides">DZSlides</a></li>        
  <li><a href="http://remarkjs.com">remark</a></li>        
  <li><a href="http://www.w3.org/Talks/Tools/Slidy/">Slidy</a>
  <li><a href="http://leaverou.github.io/csss">CSSS</a></li>           
  <li><a href="http://flowtime-js.marcolago.com">Flowtime.js</a></li>     
  <li><a href="http://lab.hakim.se/reveal-js">reveal.js</a>
  <li><a href="http://imakewebthings.com/deck.js">deck.js</a></li>        
  <li><a href="http://impress.github.io/impress.js">impress.js</a></li>      
  <li><a href="http://shwr.me">Shower</a></li>
</ul>