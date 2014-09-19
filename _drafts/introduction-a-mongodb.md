---
layout: post
title:  "Introduction à MongoDB"
date:   2014-09-23
category: JS
tags : nosql database nodejs
author: dck
description : Faites un premier pas avec la base de donnée NoSQL la plus utilisé du marché !
icon: "/src/articles/4-mongodb/logo-mongo.png"
---

Beaucoup d'entres vous connait sans doute quelques **SGBDR**, les Systèmes de Gestion de Base de Données Relationnelles. On y retrouve dans les plus connus MySQL ou encore PostgreSQL.
Depuis l'arrivé de Node.js en 2009, une nouvelle catégorie de système de gestion de base de donnée a fait son apparition : le NoSQL.

## La différence 
Tout d'abord, vous pouvez constater que le NoSQL rentre dans la catégorie des SGBD et pas SGBR, et oui, ce n'est plus fondé sur des bases relationelles. Cela signifie que l'unité logique ne correspond plus à la table et la plupart des données ne sont pas manipulées avec SQL.

Ensuite vient les **performances**, il a été noté que la plupart des actions faites dans une base de donnée était la lecture ce qui est l'un des points forts des bases NoSQL.

Autre point important qui est à prendre en compte lors du début d'un projet, **l'évolutivité** (ou scalability) car la ou cela peut être assez compliqué dans certaines SGBDR, avec des bases NoSQL il suffit d'augmenter le nombre de serveurs.