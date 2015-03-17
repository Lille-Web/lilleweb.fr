---
layout: post
title:  "Utilisez dès maintenant ES2015"
date:   2015-03-17
category: JS
tags : javascript ECMAScript es6 es2015
author: dck
description : "Pas la peine d'attendre le lancement complet de ECMAScript 2015 pour l'utiliser dans vos projets, j'ai la solution qu'il vous faut !"
---

Ahhhh ECMAScript 6, cette petite révolution dans le monde du JavaScript qui commence à se démocratiser dans la plupart des projets (malgré le peu de support des navigateurs). Pour information, ES6 a reçu pour nom officiel ES2015, en effet, ils ont préféré partir sur l'année afin de modifier le standart plus facilement (des nouveautés chaque année ?).

Comme je le disais, ES2015 est actuellement très peu supporté par l'ensemble des navigateurs c'est à dire Chrome et Firefox en majorité mais cela reste assez partiel si l'on en croit <a href="https://kangax.github.io/compat-table/es6/">cette table de compatibilité</a>.

### Un transpiler
Si nous voulons que notre code soit supporté par les anciens navigateurs, il nous faut utiliser un transpiler ou plus simplement appelé __compilateur source à source__. Le principe est très simple, le transpiler va lire le code ES2015 et le transformer en ES5 que nous connaissons tant.

<img src="https://babeljs.io/images/logo.svg" height="200" class="block" />

Comme pour les frameworks, il en existe un sacré paquet ! Celui que j'ai retenu est <a href="https://babeljs.io/">Babel</a> pour son site avec une documentation très bien fournie et un support très complet dont différents tasks runners connus (Gulp et Grunt). Pour les plus anciens, Babel était appelé __6to5__.

Si vous avez quelques trous de mémoire avec la nouvelle version d'ECMAScript, vous pouvez toujours passer par <a href="https://babeljs.io/docs/learn-es6/">leur très bon tutoriel</a>.

### Installation

Pour installer Babel, vous devez avoir Node.js sur votre machine étant donné que nous passons par __npm__ pour l'installation.

Ouvrez un terminal, et exécutez cette commande :

{% highlight html %}
  npm install -g babel
{% endhighlight %} 

Pour rappel, l'option `-g` permet à npm d'installer le module sur votre ordinateur de façon global et y accéder depuis un alias (ici babel).

### Utilisation

Très simple d'utilisation, il vous suffit d'utiliser la commande __babel__ suivi du fichier que vous voulez convertir par exemple :

{% highlight html %}
  babel app.js
{% endhighlight %} 

<div class="bs-callout bs-callout-info">
  <strong>Attention !</strong> Cela ne modifie pas le fichier que vous lui passez. Les modifications seront passées dans STDOUT, il vous suffit alors de rediriger le flux de sortie vers un autre fichier comme ceci :
</div>

{% highlight html %}
  babel app.js > es5_app.js
{% endhighlight %} 

Si vous regardez le fichier __es5_app.js__ de plus pret, vous verrez que toutes les fonctionnalités de ES2015 ont été remplacé par celle de ES5.

### Utiliser Babel avec un task runner

J'aime travailler avec un task runner comme Gulp. Il est tout aussi simple, d'incorporer Babel dans vos projets avec Gulp.
En effet, il vous suffit d'effectuer les modifications dans le pipe des fichiers JavaScript. 

Pour utiliser Babel avec Gulp, vous devez installer le module __gulp-babel__ via npm 

`npm i gulp-babel --save-dev`.

Voici un simple fichier d'exemple :

{% highlight js %}
var gulp = require('gulp'),
watch    = require('gulp-watch'),
babel    = require('gulp-babel'),
source   = require('vinyl-source-stream');

gulp.task('js', function() {
  return gulp.src('./app.js')
    .pipe(babel())
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', function() {
  gulp.watch('./app.js', ['js']);
});
{% endhighlight %}

On commence par récupérer le contenu du fichier app.js pour ensuite transformer le contenu via un pipe et finir en renvoyant le tout dans un dossier dist. Un jeu d'enfant non ?

### Bonus - Browserify et React

Allez en petit bonus, voici un Gulpfile que j'utilise <a href="react.thomasdeconinck.fr">pour m'amuser avec React</a>. Si vous avez des idées d'améliorations n'hésitez pas ! Le repo du site est <a href="https://github.com/DCKT/Test-React">sur Github</a>
{% highlight js %}
var gulp   = require('gulp'),
watch      = require('gulp-watch'),
babelify   = require('babelify'),
browserify = require('browserify'),
notify     = require('gulp-notify'),
source     = require('vinyl-source-stream');


gulp.task('js', function() {
  browserify({
    entries: './app.js',
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./dist'))
  .pipe(notify('JS task end'));
});

gulp.task('default', function () {
  gulp.watch(['./components/**/*.js', './app.js'], ['js'])
});

{% endhighlight %}