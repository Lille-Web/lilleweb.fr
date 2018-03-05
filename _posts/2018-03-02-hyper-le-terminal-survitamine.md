---
layout: post
title:  "Hyper, le terminal survitaminé"
date:   2017-11-25
category: JS
tags : javascript tools hyper
author: dck
description : "Hyper, un terminal multi-environnement codé en JavaScript"
---

<img src="/src/articles/hyperterm/logo.svg" width="200" class="pull-left" alt="Hyperterm logo" />
Dans la catégorie logiciel développé en JavaScript, nous avions déjà pas mal de beaux spécimens,  Atom et VS Code en IDE,
  Slack pour l'IRC, Nylas N1 les mails, le navigateur Brave et j'en passe.

Aujourd'hui, mon regard s'est porté sur [Hyper](https://hyper.is/), un terminal entièrement développé en JavaScript via Electron qui nous offre de belles perspectives de customisation.

**Note :** À l'heure où j'écris cet article, Hyper n'est disponible que sur Mac et Linux car [il semble y avoir encore pas mal de boulots sur Windows](https://github.com/zeit/hyper/issues?utf8=%E2%9C%93&q=Windows).

## Un terminal 100% JavaScript

Comme je le disais plus haut, ce terminal est développé à partir de [l'excellent framework Electron](electron.atom.io). Framework qui vous permet de développer des applications desktop très facilement grâce au moteur de Chromium.

De ce fait, votre application peut facilement être compatible sur **Windows, Linux ou encore Mac OS** !

L'intérêt principal ici est la **customisation** ! Et bien oui, étant donné que c'est codé en HTML, CSS et JavaScript, c'est tout de suite bien plus accessible.

## Un joli terminal

Avec Hyper, vous avez la possibilité d'installer des thèmes ou de créer le votre avec un peu de CSS ! Parmi les différents thèmes, voilà celui que j'utilise : `hyper-snazzy`

<img src="/src/articles/hyperterm/screen.png" title="Thème hyper-snazzy" alt="Thème hyper-snazzy"/>

## Customiser Hyper

Pour customiser Hyper, rien de plus simple, il vous suffit d'éditer le fichier `~/.hyper.js` qui se trouve dans votre répertoire utilisateur. Vous pouvez modifier rapidement les caractéristiques de base comme la taille/type de police, les différentes couleurs utilisées.
Petite note, Hyper supporte le hot-reload, cela signifie que vous pouvez modifier les paramètres sans avoir à fermer le logiciel.

Pour les plugins, vous n'avez qu'à ajouter le nom du plugins dans le tableau `plugins` du fichier de config et Hyper fera l'installation de son coté ! Sinon, il existe un plugin permettant de rechercher et d'installer un plugin Hyper très facilement : **[hpm-cli](https://www.npmjs.com/package/hpm-cli)**.

Il vous suffit de l'installer via npm : `npm install -g hpm-cli`, et ainsi vous aurez accès à la commande `hpm` vous pourrez alors :

* Chercher un package pour vérifier son existence : `hpm search power`
* Insaller un package : `hpm install hyperpower`

Voici mon fichier de configuration avec mes plugins utilisés :
{% highlight js %}
module.exports = {
config: {
// default font size in pixels for all tabs
fontSize: 14,

    // font family with optional fallbacks
    fontFamily: 'Menlo, "DejaVu Sans Mono", "Lucida Console", monospace',

    // terminal cursor background color (hex)
    cursorColor: '#FF9800',

    // color of the text
    foregroundColor: '#fff',

    // terminal background color
    backgroundColor: '#000',

    // border color (window, tabs)
    borderColor: '#333',

    // custom css to embed in the main window
    css: '',

    // custom css to embed in the terminal window
    termCSS: '',

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: '12px 14px',

    // some color overrides. see http://bit.ly/29k1iU2 for
    // the full list
    colors: [
      '#000000',
      '#ff0000',
      '#33ff00',
      '#ffff00',
      '#0066ff',
      '#cc00ff',
      '#00ffff',
      '#d0d0d0',
      '#808080',
      '#ff0000',
      '#33ff00',
      '#ffff00',
      '#0066ff',
      '#cc00ff',
      '#00ffff',
      '#ffffff'
    ]

},

// a list of plugins to fetch and install from npm
// format: [@org/]project[#version]
// examples:
// `hyperpower`
// `@company/project`
// `project#1.0.1`
plugins: [
"hypertheme",
"hyperterm-blink", // Clignotement du curseur
"hyperlinks", // Rends les URL cliquables
"hyper-snazzy", // Thème
"hyperterm-tab-icons" // Ajoute une icone pour chaque onglet
],

// in development, you can create a directory under
// `~/.hyperterm_plugins/local/` and include it here
// to load it and avoid it being `npm install`ed
localPlugins: []
};
{% endhighlight %}

## Conclusion

Si vous aimez customiser vos logiciels, je vous recommande Hyper ! Je l'utilise quotidiennement sur Mac et je ne regrette iTerm pour rien au monde !

Vous pouvez retrouver la liste des différents plugins existant [sur Github](https://github.com/bnb/awesome-hyper) !
