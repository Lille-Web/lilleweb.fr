(function() {

  var zen = document.getElementById('toggleZen');

  if (!!zen) {
    zen.addEventListener("click",function(){
      document.body.classList.toggle('zen');
   });
  }

  var backButton = document.getElementById('backToArticles');

  if (!!backButton) {
    backButton.addEventListener('click', function() {
      if (localStorage.lastPage) {
        window.location.href = localStorage.lastPage;
      } 
      else {
        window.location.href = '/articles/';
      }
    });
  }

  var links = document.querySelectorAll('.post-link');

  for (var i = links.length - 1; i >= 0; i--) {
    links[i].addEventListener('click', function(e) {
      localStorage.lastPage = window.location.pathname;
    });
  };
    
})();
