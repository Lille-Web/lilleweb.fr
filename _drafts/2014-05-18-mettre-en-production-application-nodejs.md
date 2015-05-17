---
layout: post
title:  "Comment mettre en production une application node.js"
date:   2015-05-18
category: JS
tags : nodejs, application, production, pm2, reverse proxy
author: john
description : ""
---

La mise en prod' d'applications node.js ne doit pas vous effrayer. La démarche est différente de ce que vous pouvez avoir l'habitude si vous développez en PHP par exemple mais elle reste simple et rapide.

![nodejs](/src/articles/pm2/nodejs.png)

Elle se déroule en deux étapes.

## PM2 : démarrer et gérer votre application

Dans un premier temps, vous devez bien évidemment lancer votre application. Si vous faîtes comme d'habitude avec un `node app.js` votre application sera executée jusqu'à ce que vous fermiez votre terminal ou que vous coupiez votre connexion ssh.

Il faut donc faire en sorte que votre application soit persistente, et qu'elle puisse se relancer toute seule si vous redémarrez votre serveur.

![nodejs](/src/articles/pm2/pm2.png)

Pour ce faire on va utiliser [PM2](https://github.com/Unitech/pm2) qui est présenté comme un gestionnaire de process pour la mise en production d'applications node.js (hum). Derrière cette appelation barbare se cache un objectif très simple. **PM2 vous permet de laisser en vie votre application node.js et de la relancer automatiquement au reboot du serveur !**

Le meilleur dans tout ça ? PM2 est extrêmement simple à mettre en place et à utiliser !

### Installation

Rien de plus simple, si vous lancez une application node.js sur votre serveur c'est que node.js est déjà installé (captain obvious !), vous pouvez donc utiliser `npm` pour installer pm2 !

![npm](/src/articles/pm2/npm.png)

{% highlight bash %}
npm install pm2 -g
{% endhighlight %}

### Démarrer votre application node.js

Une seule commande pour lancer votre application :

{% highlight bash %}
pm2 start app.js
{% endhighlight %}

`app.js` doit correspondre au chemin de votre fichier d'application node.js.

Votre application est maintenant lancée et monitorable. Elle ne s'arrêtera pas si vous coupez votre connexion ssh. J'avais pas dit que c'était facile ?

`pm2 <stop|restart|delete> <app_name|id|all>` sont également disponibles et vous permettent d'arrêter, redémarrer et supprimer votre application. Pourquoi la supprimer et pas juste l'arrêter ? Car vous pouvez bien évidemment monitorer tous les process lancés avec pm2 grâce à la commande `list`.

![pm2 list all nodejs process production](https://github.com/unitech/pm2/raw/master/pres/pm2-list.png)

Vous trouverez plus d'infos directement sur le [github de PM2](https://github.com/Unitech/pm2). Vous en savez déjà assez pour mettre votre application en production !

## Reverse proxy : la rendre disponible sur le bon port avec apache

Après l'avoir mise en prod avec PM2, vous vous rendez bien compte qu'elle n'est pas disponible sur l'URI comme vous le pensiez. Vous devez pour le moment taper le port pour y accéder. Par exemple si vous aviez exécuté votre application sur le port 3000 vous devriez taper `votrenomdedomaine.com:3000`. C'est évidemment inconcevable de devoir taper également le port pour accéder à votre application / site web.

J'ai mis en place cette technique basée sur un reverse proxy sur le site [#JeSuisPizza](http://jesuispizza.fr). Voici la configuration de son vhost :

{% highlight bash %}

<VirtualHost *:80>
          DocumentRoot "/var/www/jesuispizza"
          ServerName www.jesuispizza.fr
          ServerAlias jesuispizza.fr
          ProxyRequests off
          <Proxy *>
            Order deny,allow
            Allow from all
          </Proxy>

          <Location />
            ProxyPass http://localhost:3000/
            ProxyPassReverse http://localhost:3000/
          </Location>
  <Directory "/var/www/jesuispizza">
       AllowOverride All
       Allow from All
  </Directory>

</VirtualHost>

{% endhighlight %}

Vous devez ensuite activer les mods `proxy` et `proxy_http`.

{% highlight bash %}
a2enmod proxy
{% endhighlight %}

{% highlight bash %}
a2enmod proxy_http
{% endhighlight %}

Vous devez maintenant redémarrer votre serveur apache.

## Conclusion

Vous savez désormais démarrer votre application node.js en production et la rendre disponible sur votre nom de domaine !

Si vous avez des questions, des doutes ou que vous avez une autre technique, n'hésitez pas à nous le dire dans les commentaires !