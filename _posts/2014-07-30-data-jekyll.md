---
layout: post
title:  "Générer un fichier JSON pour Jekyll"
date:   2014-07-30
category: Ruby
tags : Ruby Jekyll JSON
author: john
description : "Stocker les données de votre site dans un fichier JSON afin de les exploiter dynamiquement."
---
Jekyll permet de générer très facilement des fichiers contenant le contenu de votre site, formaté comme vous le souhaitez. La plupart du temps on crée des templates, des includes, ect. Ici on va créer un fichier JSON contenant toutes les données de notre site que l’on souhaite pouvoir récupérer et gérer dynamiquement.

De la même façon que pour afficher une liste d’articles, il suffit de boucler sur notre contenu de façon à gérer un fichier .json exploitable.

Voici par exemple un fichier data.json que nous placerons à la racine de notre site.

{% highlight json %}

---

---
{
  "articles" : [
    {% for post in site.posts %}
      {
        "title" : "{{ post.title | escape }}",
        "category" : "{{ post.category }}",
        "url" : "{{ post.url }}",
        "date" : "{{ post.date }}",
        "tags" : "{{ post.tags | escape }}",
        "author" : "{{ post.author }}"
      }{% if forloop.last %}{% else %},{% endif %}
    {% endfor %}
  ],
  "members" : [
  {% for member in site.data.members %}
    {
      "name" : "{{ member[1].name | escape }}",
      "image" : "{{ member[1].image }}",
      "poste" : "{{ member[1].poste }}",
      "site" : "{{ member[1].site }}"
    }{% if forloop.last %}{% else %},{% endif %}
  {% endfor %}
  ]
}

{% endhighlight %}

On peut voir qu’il ne faut surtout pas oublier d’écrire les clés entre doubles quotes.

Ce fichier contiendra donc la liste des articles et des membres, ainsi que différentes informations relatives à chaque élément. Il sera mis à jour à chaque compilation du site.
