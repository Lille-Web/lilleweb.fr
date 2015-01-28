---
layout: post
title:  "Tuto - Personnaliser vos inputs en CSS"
date:   2015-01-28
category: CSS
tags : tips tuto personnaliser input checkbox radio text form
author: john
description : "Une manière simple de personnaliser vos inputs (checkbox, radio, text, ...) simplement en CSS"
---

Aujourd'hui nous allons aborder un élément redondants et souvent contraignants pour les intégrateurs : la personnalisation d'input, et surtout de checkbox ou de bouton radio.

L'idée est de parcourir les inputs les plus communs et les plus compliqué à personnaliser afin d'avoir une base facilement répétable pour d'autres type.

## input[type="text"]

![rendu iinput[type="text"] personnalisé](/src/articles/tuto-input/input-text.png)

Les champs text sont de loin les plus faciles à personnaliser. Dans un premier temps voici le html, très simple, d'un champ text basique sans attribut.

{% highlight html %}

<input type="text"/>

{% endhighlight %}

Il n'y a aucune astuce particulière pour personnaliser un `input[type="text"]`, ici on va juste jouer sur sa taille, la police du contenu du champs et personnaliser un peu la bordure. 

{% highlight css %}

input[type="text"]{
	height: 30px;
	width: 200px;
	font-size: 19px;
	border: none;
	border-bottom: 1px solid black;
	margin-left: 20px;
	font-family: Verdana;
}

{% endhighlight %}

## input[type="checkbox"]

![rendu iinput[type="checkbox"] personnalisé](/src/articles/tuto-input/input-checkbox.png)

Soyons clair, les input checkable (aka checkbox, radio) sont les plus contraignants à personnaliser. En effet il n'est pas possible de vraiment personnaliser ces éléments de base, car chaque navigateur va avoir son propre style pour les gérer et il sera donc difficile d'avoir le même rendu partout. 

L'astuce sera donc de remplacer l'input basique pour recréer une version personnalisée.

Voici la structure html que nous allons utiliser.

{%highlight html %}

<fieldset class="checkbox-tuto">
	<legend>Device</legend>
	<div>
		<input type="checkbox" id="ios"/>
		<label class="label-checkbox" for="ios">iOS</label>
	</div>
</fieldset>

{% endhighlight %}

Vous vous doutez bien que vous pouvez avoir autant de `div` contenant un `input[type="checkbox"]` et un `label` que vous souhaitez en faisant attention de bien garder cette structure. 

L'astuce ici consistera à cacher l'input de base afin de recréer quelque chose qui y ressemble en jouant avec des `:before` et des `:after`.  

{% highlight css %}

.checkbox-tuto  input[type="checkbox"]{
    display : none;
 }
.checkbox-tuto div{
	margin: 10px 0px;
}
.checkbox-tuto .label-checkbox{
	position : relative;
	left: 10px;
	padding-left: 35px;
	margin-left : 0px; 
 }
.checkbox-tuto .label-checkbox:before{
    content : '';
    display : block;
    position : absolute;
    width : 24px;
    height : 24px;
    border-radius : 3px;
    border : 1px solid #a6a6a6;
    top : -6px;
 }
.checkbox-tuto .label-checkbox:after{
    content : '';
    display : none;
    position : absolute;
    width : 26px;
    height : 26px;
    top : -6px;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAADRSURBVHja7NUxTgJBFAbgb4kJCRRewNaKSCt2iEQMJ7D1BtyEo1hAkMLGjgtgAURbI7UF1dpssdlAYNa41bxq8l4yXzLvTyZJ01QVVVNRRShC1UNn+5r12WvIHS0M8Lwb9j+DoIDqYI5zPOHqP54uj5TeUYIxFujtmd8UkG88loHaGOEaE3QLyEsBucUyOAzYYI1LNDDFPdIDyHup1OEHD3jDBZqYZbNg5FgYPnCHrxxQCjkldSv0sc31gpFT473M9rPKzsEIJPGHjVCE/ly/AwDLuS4I1zM7/QAAAABJRU5ErkJggg==');
 }
.checkbox-tuto input[type="checkbox"]:checked+.label-checkbox:after{
    display : block;
 }

{% endhighlight %}

Comme on peut le voir ici, l'astuce est de se baser sur le label. 
Lorsque vous cliquez sur un label correctement configuré, il checkera votre input associé. 
En créant un before pour le "faux" input et un after pour le contenu checké, vous pouvez personnaliser très facilement la taille, le style, et même le contenu checké de votre input !

On agit ici en plusieurs étapes :

- Cacher l'input de base
- Placer votre label
- Créer votre "faux" input grâce au `before`, ici on lui définit une largeur et une hauteur de 24px avec des bords arrondis, et une bordure gris clair
- Personnaliser le style de votre input lorsqu'il sera checké grâce au `after`, ici on définit un `background-image` en `base64` et surtout on le cache de base
- Et on définit que dès que le vrai input est checké, l'after de son label est affiché

## input[type="radio"]

![rendu iinput[type="radio"] personnalisé](/src/articles/tuto-input/input-radio.png)

Je vous ai remis l'exemple pour un `input[type="radio"]` même si le principe est exactement le même. 

{% highlight html %}

<fieldset class="radio-tuto">
	<legend>Sex</legend>
	<div>
		<input type="radio" id="m" name="sex" />
		<label class="label-radio" for="m">Male</label>
	</div>
	<div>
		<input type="radio" id="f" name="sex" />
		<label class="label-radio" for="f">Female</label>
	</div>
	<div>
		<input type="radio" id="u" name="sex" />
		<label class="label-radio" for="u">Unknown</label>
	</div>
</fieldset>

{% endhighlight %}

{% highlight css %}

.radio-tuto  input[type="radio"]{
    display : none;
 }
.radio-tuto div{
	margin: 10px 0px;
}
.radio-tuto .label-radio{
	position : relative;
	left: 10px;
	padding-left: 35px;
	margin-left : 0px; 
 }
.radio-tuto .label-radio:before{
    content : '';
    display : block;
    position : absolute;
    width : 24px;
    height : 24px;
    border-radius : 12px;
    border : 1px solid #a6a6a6;
    top : -6px;
 }
.radio-tuto .label-radio:after{
    content : '';
    display : none;
    position : absolute;
    width : 26px;
    height : 26px;
    top : -6px;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAADRSURBVHja7NUxTgJBFAbgb4kJCRRewNaKSCt2iEQMJ7D1BtyEo1hAkMLGjgtgAURbI7UF1dpssdlAYNa41bxq8l4yXzLvTyZJ01QVVVNRRShC1UNn+5r12WvIHS0M8Lwb9j+DoIDqYI5zPOHqP54uj5TeUYIxFujtmd8UkG88loHaGOEaE3QLyEsBucUyOAzYYI1LNDDFPdIDyHup1OEHD3jDBZqYZbNg5FgYPnCHrxxQCjkldSv0sc31gpFT473M9rPKzsEIJPGHjVCE/ly/AwDLuS4I1zM7/QAAAABJRU5ErkJggg==');
 }
.radio-tuto input[type="radio"]:checked+.label-radio:after{
    display : block;
 }

{% endhighlight %}

J'ai juste ici changer chaque référence à `checkbox` pour `radio` et j'ai augmenté la valeur du `border-radius` afin de rentre le "faux" input rond.  

## Conclusion

Un exemple concret est dispo sur mon [GitHub](https://github.com/JohnathanSUP/hack-input)