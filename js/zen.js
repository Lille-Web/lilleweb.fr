(function() {

  var zen = document.getElementById('toggleZen');

  if (!!zen) {
  	zen.addEventListener("click",function(){
      document.body.classList.toggle('zen');
   });
  }
  	
})();
