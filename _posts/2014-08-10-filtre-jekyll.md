---
layout: post
title:  "Créer un filtre avec AngularJS - Part 1. Le champ de recherche"
date:   2014-08-10
category: JS
tags : Ruby Jekyll JSON AngularJS
author: john
description : "Créer un système de filtre pour afficher dynamiquement du contenu selon des critères sur un site Jekyll. Dans cette première partie nous commencerons par un champ de recherche simple."
---

L’un des principaux avantages de Jekyll est aussi un de ses inconvénients majeurs : le contenu affiché est statique. Cette barrière m’a posé un gros problème lorsque j’ai voulu développer un système de recherche (au début assez simple) sur un site utilisant Jekyll (celui où vous lisez l’article actuellement en l'occurrence). Comme je ne fais pas de Ruby, je me suis tout de suite orienté vers une solution en AngularJS que je vais vous détailler en plusieurs articles. Chaque article traitera d’un filtre différent : champ de recherche, tags, catégorie, …

# Intégration d’AngularJS

## Le problème des accolades

Jekyll utilise le moteur de template Liquid. Ce langage impose d’utiliser des doubles curly brackets ( {{ … }} ) pour afficher des éléments. Ces tags d’interpolation sont les mêmes que ceux utilisés par AngularJS que l’on souhaite utiliser ici. Il faut donc pouvoir utiliser autre chose par défaut pour AngularJS.

Pour rappel il vous suffit de faire :

{% highlight js %}

var searchApp = angular.module('contentsApp', []);
searchApp .config(['$interpolateProvider', function ($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
}]);

{% endhighlight %}

On pourra donc utiliser des doubles crochets avec AngularJS.

## Configuration d’AngularJS

Comme vous le savez sûrement, il est très simple et très rapide d’intégrer Angular à votre site web.
Dans un premier temps, il suffit de rajouter la directive `ng-app` sur une balise englobant votre contenu que vous voulez dynamique.

Exemple :
{% highlight js %}

<div id="contents" ng-app="contentsApp">

{% endhighlight %}

# Récupérer le contenu de votre site

## JSON

Tout le contenu que vous souhaitez rendre disponible dans vos filtres de recherches doit être présent dans un fichier JSON. Vous pouvez consulter [cet article](http://lilleweb.fr/ruby/2014/08/03/data-jekyll/) pour savoir comment faire facilement.

## Récupérer le contenu dans votre application AngularJS

Pour récupérer les données de votre site dans votre application AngularJS, il vous suffit d’utiliser le service $http. Vous devrez aller chercher le fichier que vous venez de générer contenant le contenu de votre site que vous souhaitez indexer. Pour information, $http est un service du core d’AngularJS qui permet les communications http avec le serveur. Vous pouvez trouver plus d’infos sur [la doc](https://docs.angularjs.org/api/ng/service/$http).

{% highlight js %}

contentsApp.controller('searchController', function ($scope, $http) {
  $http.get('/data.json').success(function(data) {
    $scope.results = data;
  });
});

{% endhighlight %}

$scope.results stocke donc maintenant le contenu de votre site. Il faut maintenant que l’on affiche les ces éléments sur notre page selon notre recherche.

# La page de résultat

## Le champ de recherche

Le champ de recherche est un simple `input type=”text”` où on y rajoute une directive `ng-model`

{% highlight html %}

<input type="text" ng-model="searchValue" placeholder="Recherche">

{% endhighlight %}

`searchValue` sera donc mis à jour à chaque vois que l’on tape dans ce champ.

## L’affichage des résultats

Nous allons utiliser deux éléments importants d’Angular, la directive `ng-repeat`et la fonction `filter`.

{% highlight html %}

<div id="searchResults" ng-controller="searchController">
        <h4> Articles </h4>
        <ul>
          <li ng-repeat="result in results.articles | filter: searchValue">
            <a href="[[result.url]]">[[result.title]]</a>
          </li>
        </ul>
        <h4> Membres </h4>
        <ul>
          <li ng-repeat="result in results.members | filter: searchValue">
            <a href="#">[[result.name]]</a>
          </li>
        </ul>

{% endhighlight %}

`ng-repeat="result in results.articles  | filter: searchValue”` va vous permettre de boucler dans les articles en filtrant selon le contenu de searchValue (qui, je le rappelle, est le champ de recherche).

Vous avez donc maintenant un filtre de recherche en temps-réel extrêmement léger pour un contenu à la base statique !

On découvrira dans un prochain article comment faire un filtre par catégorie puis par tags.

*Le système de recherche de Lille Web utilise ce procédé.*
