---
layout: post
title:  "Créer un serveur http avec Node.js"
category: JS
tags : nodejs http server
author: dck
description : "Présentation rapide du module http de Node.js avec pour but la création d'un serveur http"
icon: "/src/articles/7-creer-serveur-http/nodejs-logo.png"
---

<img src="/src/articles/7-creer-serveur-http/nodejs-logo.png" class="pull-left" alt="Node.js" />
Aujourd'hui, il est possible de développer une application back-end en JavaScript grâce à Node.js.

Cet article sert d'ébauche à un cours complet sur le sujet qui est actuellement en cours de rédaction mais également
en développement sur le site.

Nous allons voir comment créer un serveur http afin de pouvoir créer une petite application rapidement.

<br />

### Mise en place
Commencez par créer un fichier nommé **server.js**, celui-ci va contenir notre serveur. Petit rappel, pour créer un serveur http avec Node.js, il nous faut utiliser le module `http` fournit par l'API.
Voici un serveur très minimaliste :
{% highlight js %}
var http = require('http');

var server = http.createServer(function(req, res) {
  res.end("Hello World");  
});

server.listen(1337);
console.log("Serveur web lancé sur localhost:1337 ...");
{% endhighlight %}
Des explications s'imposent, pour commencer, on récupère le module http pour ensuite créer un serveur à l'aide de la méthode **createServer** où l'on passe en argument une fonction en callback.
Cette fonction deux arguments :

- La requête faite par le navigateur (request)
- La réponse que nous allons émettre (response)

Nous indiquons ensuite un port sur lequel notre serveur doit écouter.
Il est toujours intéressant de placer un message pour indiquer que le serveur est bien lancé.

Voici le résultat que vous devriez obtenir :
<img src="/src/articles/7-creer-serveur-http/hello-world.png" title="Hello World avec Node.js" alt="Hello World avec Node.js"/>

### Indiquer le statut de la requête
Un des principes fondamentaux d'une application web, est d'indiquer le statut des requêtes qu'il renvoie. Il faut suivre les conventions qui ont été établies, vous pouvez retrouver la liste des codes HTTP [sur Wikipedia](http://fr.wikipedia.org/wiki/Liste_des_codes_HTTP).

Comme vous pouvez le voir, lorsque tout s'est correctement déroulé, on envois le code HTTP **200**. Les codes sont réparties en catégories qu'on peut distinguer par le premier nombre du chiffre :

- Commençant par 1 : Information
- Commençant par 2 : Succès
- Commençant par 3 : Redirection
- Commençant par 4 : Erreur coté client
- Commençant par 5 : Erreur coté serveur

Ces codes permettent d'identifier rapidement la source éventuelle d'un problème exemple (une 404 si la page n'a pas été trouvé ou encore une erreur 500 si le serveur a crashé).

Avec **Node.js**, il est très simple de spécifier le code HTTP d'un réponse. Pour ce faire, il faut utiliser `res.writeHead()` et lui passer le code en argument. Exemple :

{% highlight js %}
var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end("Hello World");  
});
{% endhighlight %}

### Filtrer les requêtes
Pour le moment, que vous fassiez une requête en GET ou en POST, cela ne change rien du tout. Dans notre cas, nous avons besoin de filtrer les URL utilisant un POST.
Avec Node.js, un objet **method** est présent dans la variable __request__ fournit par le serveur http.
Il suffit alors de vérifier si le contenu de method est égal à **POST** ou non :

{% highlight js %}
var server = http.createServer(function(req, res) {
  if (req.method === 'POST') {

  }
  else {
    // Requêtes autres qu'en POST
  }
  res.end();  
});
{% endhighlight %}

Une fois la requête filtrée, nous devons récupérer les éléments envoyés. Lorsque une requête en POST est effectuée
il celle-ci est encodée dans un type précis qui peut être :

- Form-data
- x-www-form-urlencoded

Par défaut, les formulaires envoient des requêtes encodées avec **x-www-form-urlencoded**, les données auront alors la forme `clé=valeur` comme des paramètres en GET.

{% highlight js %}
var http = require('http');

var server = http.createServer(function(req, res) {
  if (req.method === 'POST') {
    var body = '';
    req.on('data', function (data) {
      body += data;
    });

    req.on('end', function () {
      console.log(body);
    });
  }
  else {
    res.write('Hello World !');
  }
  res.end();
});

server.listen(1337);
console.log("Serveur web lancé sur localhost:1337 ...");
{% endhighlight %}
