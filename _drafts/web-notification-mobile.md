---
layout: post
title:  "Découvrons les web notifications sur mobile !"
date:   2014-09-02
category: JS
tags : js mobile web notification api firefox mozilla
author: john
description : ""
---

Mardi passé, j'évoquais dans le début de <a href="http://lilleweb.fr/js/2014/08/26/web-notification/">l'article sur les web notifications</a> l'idée de les utiliser sur mobile.

Cette possibilité augmenterait l'intérêt des web apps mobiles !

Ravi de cette idée, j'ai tout de suite essayé sur Android KitKat via mon HTC One (M7) et ma Nexus 7 comme l'indique <a href=""> Can I Use </a>. J'ai tout d'abord tenté sur Chrome, rien n'est survenu. Au moment d'appeler ma notification, je n'ai eu aucune demande d'autorisation ni même d'arrivée de notification. Déçu, je me suis souvenu que Firefox sur Android supporte beaucoup d'API que Chrome ne supporte pas (comme la gestion de la luminosité ambiante dont je vais vous reparler d'ici peu de temps). J'ai donc immédiatement testé sur Firefox et à mon plus grand étonnement j'ai tout de suite eu une demande d'autorisation :

<img src="/src/articles/webNotifMobile/webNotificationMobileRequest.png">

Puis une notification dans le centre de notification :

<img src="/src/articles/webNotifMobile/webNotificationMobile.png">

J'ai ensuite tenté de soulever une notification après un délai de 10s, j'ai entre temps changé d'application. Ma notification s'est bien affichée même si Firefox n'était pas au premier plan !

Cette expérience apporte beaucoup de bonnes nouvelles et d'évolutions pour nos web apps dans le futur. Elle n'est pas sans rappelée la vision originale de Steve Jobs pour l'iPhone :

<blockquote class="blockquote-reverse">
<p>The full Safari engine is inside of iPhone. And so, you can write amazing Web 2.0 and Ajax apps that look exactly and behave exactly like apps on the iPhone. And these apps can integrate perfectly with iPhone services. They can make a call, they can send an email, they can look up a location on Google Maps.</p>
<p>And guess what? There’s no SDK that you need! You’ve got everything you need if you know how to write apps using the most modern web standards to write amazing apps for the iPhone today. So developers, we think we’ve got a very sweet story for you. You can begin building your iPhone apps today.</p>
  <footer><cite> Steve Jobs </cite> au lancement de l'iPhone</footer>
</blockquote>

Steve Jobs imaginait un monde rempli de web apps qui s'ouvriraient dans Safari, où tout le monde pourrait développer son application mobile juste en ayant les bases du développement web.

Certes on est loin de cette vision, mais on commence à s'y approcher. L'arrivée des notifications au sein du navigateur mobile permettra d'augmenter l'intérêt des web apps mobiles : un chat en node.js qui fonctionne sur mobile ça existe, mais la possibilité d'être informée de nouveaux messages sans avoir son navigateur ouvert est vraiment tentante !

J'ai très à coeur l'idée d'un écosystème rempli de web apps de qualité, utilisable sur ordinateur, mobile, télévision, voiture, et autres supports inattendus. Un écosystème où un développeur de qualité pourrait déployer son application sur de nombreux devices sans se soucier de la redévelopper sur d'autres systèmes.

__Je pourrais discuter de cette idée pendant des heures, l'écriture de cette article m'a donné envie d'en  écrire un autre, beaucoup plus complet sur l'idée d'un écosystème où cohabiteraient applications natives et applications web.__
