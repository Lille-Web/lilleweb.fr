---
layout: post
title:  "Créer une API avec Express - Partie 2"
category: JS
tags : Node.js API
author: dck
description : Créer rapidement une application pour vos applications web grâce ce web framework Node.js 
---
Cet article correspond à une série car le sujet est assez long à traiter, vous pouvez retrouver la partie 1 [ici](link).

#### Récupération des articles
Tout d'abord, nous allons récupérer la liste des articles existants. Voici un petit rappel du code pour démarrer :
{% highlight js %}
var express = require('express');
var app = express();

var Post = require('./models/post.js');

app.listen(3000);
{% endhighlight %} 

On récupère le module __express__ pour ensuite l'appeler et on oublie pas de donner un port d'écoute pour notre application (ici 3000). Vous pouvez évidemment mettre celui que vous voulez à condition qu'il ne soit pas utilisé !

Commençons par récupérer la liste de nos articles, nous :
{% highlight js %}
app.get('/api/posts', function(req, res) {
  Post.findAll(function(err, posts) {
    err ? res.send(500) : res.send(posts);
  })
});
{% endhighlight %}

Ici, on utilise la méthode GET étant donné que c'est pour récupérer des informations, chaque méthode express (get/post/put/delete) prend en paramètre 2 arguments :

- une URL
- une fonction de callback comprenant la requête et la réponse en argument

Vous aurez sans doute deviné que tout va se jouer dans ce callback, nous pouvons appeler notre méthode créée auparavant pour récupérer tout nos articles.