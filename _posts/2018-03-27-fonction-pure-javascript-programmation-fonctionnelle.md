---
layout: post
title:  "Les fonctions pures"
date:   2018-03-27
category: PROG
tags : programmation programming fp functionnal programming programmation fonctionnelle pures currying test
author: john
description : "Afin qu'une fonction soit pure, elle doit respecter ces deux conditions : elle ne doit pas avoir d'effets de bords et son résultat ne doit dépendre que de ses paramètres"
---

Afin qu'une fonction soit pure, elle doit respecter ces deux conditions :

* elle ne doit pas avoir d'effets de bords
* son résultat ne doit dépendre que de ses paramètres

## Effets de bords

Une fonction pure ne doit pas altérer son environnement. C'est-à-dire qu'elle ne peut pas modifier les variables qu'elle prend en paramètre ni modifier des variables globales, elle ne peut pas exécuter de méthode qui modifierait le contexte comme un `console.log()`, elle ne peut pas non plus exécuter de tâches de fond comme des services workers.

```javascript
const addSeven = x => x + 7;
```

Cette méthode est pure, elle retourne le paramètre modifié sans modifier le paramètre lui-même.

```javascript
const logAddSeven = x => {
    console.log(x + 7);
    return x + 7;
};
```

Cette méthode n'est pas pure car elle intéragit avec la console et a donc des effets de bords.

## Dépendance aux paramètres

Une fonction pure doit dépendre seulement de ces paramètres. Plus simplement, une fonction pure appelée deux fois avec les mêmes paramètres doit renvoyer le même résultat. Ca reste logique même s'il faut penser parfois certaines choses différemment.

### Example 1

En reprenant l'exemple précédent :

```javascript
valueToAdd = 7;
addAValue = x => x + valueToAdd;
```

Cette fonction n'est pas pure car elle dépend d'une autre valeur non présente dans ses paramètres.

```javascript
addAValue(8); // 15
```

Cependant si la valeur valueToAdd ne vaut plus 7, `addAValue(8)` ne vaudra plus 15.

```javascript
addAValue = (x, y) => x + y;
```

Cette fonction est pure car qu'importe le contexte, si `x` et `y` ne changent pas, `addAValue` renverra toujours la même valeur.

### Example 2

Dans certains cas, une valeur directement calculée dans la fonction pourrait s'avérer plus pratique :

```javascript
addXDay = x => new Date().getDate() + x;
```

Cette méthode renvoit le jour courant + 1. Facile à écrire, rapide à utiliser, cela pourrait s'avérer pratique. Cependant cette méthode n'est pas pure. En effet, `addXDay(1)`exécutée aujourd'hui (27 mars 2018) renverrait 27, exécutée demain, elle renverrait 28. Logique.

```javascript
addXDay = (date, x) => date.getDate() + x;
```

Cette méthode demande la date en paramètre et serait donc appelée `addXDay(new Date(), 1)`.
Enore plus facile au niveau de la déclaration et plus pratique au niveau de l'utilisation : elle peut servir à ajouter X jours à une autre date que le jour courant. Et surtout, cette fonction est pure car elle renverra toujours la même chose si les paramètres ne changent pas !

## Limites

En programmation objet et notamment avec l'utilisation de class, faire que des fonctions pures peut être compliqué.

```javascript
export class anyController {
    /*@ngInject*/
    constructor() {}

    $onInit() {
        this.isSelected = false;
    }

    clickHandler = () => {
        this.isSelected = this.isSelected ? false : true;
    };
}
```

Exemple très simple d'une classe (ici utilisée dans un projet Angular) où on cherche seulement à modifier une valeur à travers une fonction.

L'utilisation exclusive des fonctions pures a un sens dans un projet qui suit entièrement les principes de la programmation fonctionnelle.

## Conclusion

Les fonctions pures (pure function) sont une composante même de la programmation fonctionnelle et prennent tout leur sens dans cet environnement. Afin de respecter le principe d'immutabilité, les fonctions pures sont une très bonne façon de faire. Je reviendrai longuement dans plusieurs articles sur la programmation fonctionnelle.

C'est une bonne pratique à suivre. Il est bon d'essayer d'en faire le plus souvent possible. Cependant il ne faut pas compliquer le code si cela n'apparaît pas comme étant utile ou si c'est trop complexe à mettre en place dans un projet qui ne suit pas ce paradigme.

Cet article fait partie d'une série qui aborderont différents concepts plus ou moins avancés en programmation. Ces différentes méthodes seront applicables dans de nombreux langages de programmation. 

Il est bien plus utile d'appréhender de nouveaux paradigmes de développement que de nouveaux langages ou framework. 