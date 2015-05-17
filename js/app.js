document.addEventListener('DOMContentLoaded', function() {
  if (!localStorage.cnil) {
    var cnil = document.getElementById('cnil');
    var selector, touchEvent;

    if (window.screen.width <= 480) {
      touchEvent = "touchend";
      selector = "#cnil";
    }
    else {
      touchEvent = "click";
      selector = "#cnil .cross";
    }

    cnil.style.display = 'block';


    document.querySelector(selector).addEventListener(touchEvent, function(e) {
      e.preventDefault();
      cnil.style.display = 'none';
      localStorage.cnil = true;
    });
  }
});