---
layout: post
title:  "Le mode déconnecté grâce au appCache"
date:   2014-10-02
category: HTML
tags : slider css noJS transform animation translate
author: jo
description: Nous allons découvrir aujourd'hui comment développer des web apps utilisable en mode déconnecté.
---
AppCache est une technique dont le but est de rendre un site web utilisable en mode déconnecté. Il arrive très souvent de perdre la connexion (notamment avec l’essor du mobile). On rentre dans le métro, le train passe du côté d’Auberville la Campagne (qui est un petit village normand) et hop ! La connexion est perdue rendant l’utilisation du site impossible.

Il est évident que nous ne pouvons pas télécharger les pages d’une application web depuis le serveur sans disposer d’une connexion à internet. Cependant, il est possible de stocker tout ou partie de ce site dans le cache du navigateur lorsque la connexion est disponible, laissant le site totalement ou en partie fonctionnel même une fois la connexion perdue.

## Comment s’y prendre ?

Tout commence par la création d’un fichier appelé `Cache Manifest`. Ce fichier va stocké toutes les ressources que l’on souhaite télécharger dans le cache du navigateur dans le but de pouvoir y accéder en mode déconnecté.
Dans la déclaration HTML, il suffit de renseigner ce fichier :

{% highlight html %}

<html manifest="cache.manifest">
  <head>
    <title>Offline Page</title>
  </head>
</html>

{% endhighlight %}

Le fichier manifeste doit être servi par le serveur de type MIME `text / cache -manifest`.
Il faut donc définir un `.htaccess` à la racine avec le contenu suivant :

{% highlight bash %}

AddType     text/cache-manifest     .manifest

{% endhighlight %}


## Le CACHE MANIFEST

Le fichier Cache Manifest est composé de 4 parties :
- CACHE
- NETWORK
- FALLBACK
- SETTINGS

Et commence par `CACHE MANIFEST`

Exemple :

{% highlight bash %}

CACHE MANIFEST
CACHE
index.html
header.jpg
NETWORK
picture1.jpg

{% endhighlight %}

Il n’est pas obligatoire de définir chaque partie du Cache Manifest et si aucune n’est définie, c’est CACHE qui est active par défaut.

### CACHE

Il s’agit ici de définir les fichiers que l’on souhaite télécharger dans le cache du navigateur

### NETWORK

Il s’agit ici au contraire de définir quels sont les fichiers que l’on doit charger uniquement si l’utilisateur dispose d’un accès à internet.

### FALLBACK

Ici l’on peut spécifier quelle page afficher dans le cas où aucune ressource ne serait trouvée dans le cache du navigateur :

{% highlight bash %}

CACHE   MANIFEST
FALLBACK:
/   /offline.html

{% endhighlight %}

### SETTINGS

Cette partie inclut des paramètres concernant le comportement de l'application avec le cache.

Pour le moment un seul est disponible :

{% highlight bash %}

SETTINGS:
prefer-online

{% endhighlight %}

Ce paramètre indique au navigateur que si l’utilisateur dispose d’une connexion à internet, il n’a pas lieu d’écouter le cache.

## Comment cela fonctionne ?

1. Le navigateur regarde si un manifest est présent
2. Si oui, et dans le cas où il ne le connait pas, il télécharge dans le cache les ressources demandées, on peut faite F5 sans réseau, tout ce qui est en cache reste disponible !
3. Si le navigateur détecte le manifest mais le connait déjà rien ne se passe !
Et c’est un problème ! Car imaginons que vous fassiez une mise en production de votre site en ajoutant un article sur un blog par exemple. Et bien à moins que l’utilisateur vide son cache, son navigateur va lui afficher à nouveau ce qu’il a en cache ! Votre nouvel article ne sera donc pas visible !

La solution est de mettre un numéro de version en commentaire dans le Cache Manifest :

{% highlight bash %}

CACHE   MANIFEST
# v 1.0

{% endhighlight %}

A chaque mise en production, vous devrez alors incrémenter ce numéro de version. Le navigateur détectera alors que le manifest a changé, et téléchargera à nouveau le contenu !

## On résume

### Créer le manifest :

{% highlight bash %}

CACHE MANIFEST
# v 1.0
CACHE
index.html
header.jpg
NETWORK
picture1.jpg
FALLBACK
/   /offline.html
SETTINGS
prefer-online

{% endhighlight %}

### Créer un .htaccess à la racine du site

{% highlight bash %}

AddType text/cache-manifest .manifest

{% endhighlight %}

### Ajouter l’attribut manifest à la balise `<html>`

{% highlight html %}

<html manifest="cache.manifest">

{% endhighlight %}

Plutôt simple non ?

## Compatibilité

<a href="http://caniuse.com/#feat=offline-apps"> Compatibilité sur canIUse </a>

## Conclusion

Les possibilités de cette fonctionnalité sont multiples ! Cela se révèle particulièrement intéressant dans le cas d’applications destinées à être déployées sur des terminaux mobiles pour des utilisateurs de plus en plus nomades, n’étant pas toujours dans des zones couvertes par les réseaux sans fil.
