function createNavigationMenu(){
  var titles = document.querySelectorAll('article h2, article h3');

  for (var i = 0; i < titles.length; i++){
    var el = document.createElement('p');
    if(titles[i].tagName == 'H2'){
      el.className = 'title';
    } else{
      el.className = 'subTitle';
    }
    el.innerHTML = titles[i].innerHTML;
    document.querySelector('#navigationMenu .navigationMenuEntries').appendChild(el);
  }
}
