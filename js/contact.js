(function() {
  
  document.getElementsByClassName('toggleContact')[0].addEventListener('click', function(){
     document.getElementById('contact').style.display = 'block';
  });


  document.querySelector('#contact .overlay').addEventListener('click', function(){
     document.getElementById('contact').style.display = 'none';
  });

})();
