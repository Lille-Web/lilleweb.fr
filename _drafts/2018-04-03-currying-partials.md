---
layout: post
title:  "Currying et partial"
date:   2018-04-03
category: PROG
tags : programmation programming fp functionnal programming programmation fonctionnelle pures currying test partial HOF
author: john
description : "L'idée est de réduire à un le nombre de paramètre d'une méthode en nécessitant normalement plus. "
---


## Currying

> There is a way to reduce functions of more than one argument to functions of one argument, a way called currying after Haskell B. Curry*

L'idée est de réduire à un le nombre de paramètre d'une méthode en nécessitant normalement plus. 

## Example 

On va essayer de créer une fonction très simple d'addition : 

```javascript
add = (n, m) => (n + m)
```
`add(39,3)` vaudrait 42.

Maintenant que notre fonction d'addition fonctionne bien, on va créer une méthode d'addition qui prend un seul paramètre et qui renvoit une fonction de degré un.

```javascript
curryedAdd = (n) => ( (m) => add(n, m) )
```
Notre fonction intermédiaire nous permet maintenant de créer une méthode permettant d'ajouter 7 à un nombre :  
```javascript
addSeven = curryedAdd(7)
```
`addSeven` renvoit une méthode qui demande un paramètre et renvoit une copie augmenté de sept.

```javascript
addSeven(35) // 42
```

En résumé : 

```javascript
add = (n, m) => (n + m)

curryedAdd = (n) => ( (m) => add(n, m) )

addSeven = curryedAdd(7)
addSeven(35) // 42
```

## Partial

Dans le même principe, une application partial (Partial ???) signifique que vous allez appliquer un pré-traitement à votre méthode : 

```javascript
add = (n, m) => (n + m)
addSeven = (m) => add(7, m);
addSeven(35) // 42
```

## Intérêts

### Test

Une méthode à un seul paramètre qui possède une partie de sa logique déportée dans une autre méthode est beaucoup plus facile à tester.

### Simplifier les méthodes à callback ???

La méthode addOne, ne prenant qu'un seul paramètre, peut être utilisé comme callback pour des méthodes comme map, filter, reduce, etc. 

```javascript
add = (n, m) => n + m
curryedAdd = (n) => ( (m) => add(n, m) )
addOne = curryedAdd(1)

values = [1, 2, 3, 4, 5, 6, 7, 8, 9];

addedValues = values.map(add); //​​​​​[ 1, 3, 5, 7, 9, 11, 13, 15, 17 ]​​​​​
addedOneValues = values.map(addOne); //​​​​​[ 2, 3, 4, 5, 6, 7, 8, 9, 10 ]​​​​​
```

### Les Higher Order Function (HOF)

Nous verrons dans un prochain article ce qu'est une HOF et comment en construire.

*(The Kleene Symposium, page 86. North Holland Publishing Company, Amsterdam, 1980.)