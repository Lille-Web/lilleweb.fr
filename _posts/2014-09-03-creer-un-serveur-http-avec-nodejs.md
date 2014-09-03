---
layout: post
title:  "Créer un serveur http avec Node.js"
category: JS
tags : nodejs http server
date: 2014-09-03
author: dck
description : "Présentation rapide du module http de Node.js avec pour but la création d'un serveur http"
icon: "/src/articles/7-creer-serveur-http/nodejs-logo.png"
---

<img src="/src/articles/7-creer-serveur-http/nodejs-logo.png" class="pull-left" alt="Node.js" />
Aujourd'hui, il est possible de développer une application back-end en JavaScript grâce à Node.js.

Cet article sert d'ébauche à un cours complet sur le sujet qui est actuellement en cours de rédaction mais également
en développement sur le site.

Nous allons étudier comment créer un serveur http afin de pouvoir créer une petite application web rapidement.

<br />

### Mise en place
Commencez par créer un fichier nommé **server.js**, celui-ci va contenir notre serveur. Petit rappel, pour créer un serveur http avec Node.js, il nous faut utiliser le module `http` fournit par l'API.
Voici un exemple créant un serveur de façon très minimaliste :
{% highlight js %}
var http = require('http');

var server = http.createServer(function(req, res) {
  res.end("Hello World");  
});

server.listen(1337);
console.log("Serveur web lancé sur localhost:1337 ...");
{% endhighlight %}
Des explications s'imposent, pour commencer, on récupère le module http pour ensuite créer un serveur à l'aide de la méthode **createServer** où l'on passe en argument une fonction en callback.
Cette fonction possède elle même deux arguments :

- La requête faite par le navigateur (request)
- La réponse que nous allons émettre (response)

Nous indiquons ensuite un port sur lequel notre serveur doit écouter.
Il est toujours intéressant de placer un message pour indiquer que le serveur est bien lancé.

Voici le résultat que vous devriez obtenir :
<img src="/src/articles/7-creer-serveur-http/hello-world.png" title="Hello World avec Node.js" alt="Hello World avec Node.js"/>

### Indiquer le statut de la requête
Un des principes fondamentaux d'une application web, est d'indiquer le statut des requêtes qu'elle renvoie. Des conventions ont été établies, vous pouvez retrouver la liste complètes des codes HTTP [sur Wikipedia](http://fr.wikipedia.org/wiki/Liste_des_codes_HTTP).

Comme vous pouvez le voir, lorsque tout s'est correctement déroulé, on envoit le code HTTP **200**. Les codes sont réparties en catégories qu'on peut distinguer par le premier chiffre du code :

- Commençant par 1 : Information
- Commençant par 2 : Succès
- Commençant par 3 : Redirection
- Commençant par 4 : Erreur coté client
- Commençant par 5 : Erreur coté serveur

Ces codes permettent d'identifier rapidement la source éventuelle d'un problème (exemple une 404 si la page n'a pas été trouvé ou encore une erreur 500 si le serveur a crashé).

Avec **Node.js**, il est très simple de spécifier le code HTTP d'un réponse. Pour ce faire, il suffit utiliser `res.writeHead()` et lui passer le code en argument. Exemple :

{% highlight js %}
var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end("Hello World");  
});
{% endhighlight %}

### Filtrer les requêtes
Pour le moment, que vous fassiez une requête en GET ou en POST, cela ne change rien du tout. Je vais vous montrer comment différencier les types de requêtes.
Avec Node.js, un objet **method** est présent dans la variable __request__ fournit par le serveur http.
Il suffit alors de vérifier si le contenu de __method__ est égal à **POST** ou non :

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

Une fois la requête filtrée, nous devons récupérer les éléments envoyés. Lorsque une requête en POST est effectuée, celle-ci est encodée dans un type précis qui peut être :

- Form-data
- x-www-form-urlencoded

Par défaut, les formulaires envoient des requêtes encodées avec **x-www-form-urlencoded**, les données auront alors la forme `clé=valeur` (un peu comme des paramètres en GET). Pour récupérer ces données, des évenements sont levés à chaques requêtes.

Ces évenements disposent de listener qui vont vérifier si l'évenement en question est déclenchée ou non.
Concernant les données, il suffit d'écouter l'event **data** qui, lorsque celui-ci est actif, d'ajouter à une variable temporaire le contenu. L'event **end** nous permettra de savoir lorsque la requête est terminée et d'afficher les données que nous avons récupérés.

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

<div class="bs-callout bs-callout-info">
  <strong>Testez votre serveur</strong>
  <p>
    Pour faire des tests, j'utilise <a href="https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm">Postman</a>, un client REST qui fonctionne très bien ! Vous pourrez ainsi créer différentes requêtes pour tester votre serveur.
  </p>
</div>

Comme il a été dit plus haut, on récupère nos paramètres sous la forme `clé=valeur`, ici plusieurs cas s'offrent à nous :

- Parser manuellement la chaine de caractère
- Utiliser un module dont **querystring** par exemple, qui réduit la logique à un simple `.parse()`

Choisissons la seconde méthode, la 1<sup>ère</sup> n'étant que de la logique cela ne nous intéresse pas spécialement pour cet article.

**Installation du module**

Il faut tout d'abord installer le module dans notre projet, pour cela, un simple
{% highlight js %}
npm install querystring --save
{% endhighlight %}

Nous pouvons alors le récupérer via la fonction `require()` offerte par Node.js permettant de récupérer les modules installés dans notre projet en plus de ceux fournit.
Donc au début du fichier, nous pouvons récupérer le module comme :
{% highlight js %}
var http = require('http'),
qs       = require('querystring');
{% endhighlight %}

Revenons alors dans le callback du listener **end**, nous pouvons parser notre variable body :
{% highlight js %}
if (req.method === 'POST') {
  var body = '';
  req.on('data', function (data) {
    body += data;
  });

  req.on('end', function () {
    var parsedBody = qs.parse(body);
    // Logique ...
  });
}
{% endhighlight %}

### Afficher un fichier HTML

Pour le moment, nous ne faisons que retourner du texte en brut ce qui a peu d'intérêt ici. Pour pouvoir rendre un fichier HTML, nous avons besoin du module [**fs**](http://nodejs.org/api/fs.html) (File System) de Node qui va nous permettre de lire le contenu d'un fichier. Voici la marche à suivre :

{% highlight js %}
var http = require('http'),
fs       = require('fs');

var server = http.createServer(function(req, res) {
  fs.readFile('index.html', function(err, data) {
    if (err) {
      res.writeHead(500);
    }
    else {
      res.writeHead(200, { 'Content-Type': 'text/html'});
      res.end(data);
    }
  });
});

server.listen(1337);
console.log("Serveur web lancé sur localhost:1337 ...");
{% endhighlight %}

Evidemment, vous devez disposer d'un fichier __index.html__ à la racine de votre projet, si ce n'est pas le cas, vous n'avez qu'à indiquer le chemin adéquat. Nous utilisons ici la méthode **readFile** présente dans l'API fournit qui permet comme son nom le laisse supposer, la lecture de fichier.

Cette méthode prend 2 arguments:

- Le chemin vers le fichier (relatif ou absolu)
- Une fonction en callback qui prend elle aussi 2 arguments : les erreurs et le contenu du fichier

Dans ce callback, nous vérifions si la lecture du fichier a rencontré un problème et si tel est le cas nous renvoyons une erreur 500.

Sinon, nous envoyons simplement un code 200 et un **Content-Type** différent de celui par défaut afin que l'HTML soit interprété sans oublier de passer en paramètre le contenu du fichier lu dans la réponse.


### Conclusion
Il reste énormement de choses à faire rien qu'avec ce module, mais cela nous prouve que Node.js offre une multitude de possibilités !
