document.addEventListener('DOMContentLoaded', function() {
  if (!localStorage.cnil) {
    var cnil = document.getElementById('cnil');
    cnil.style.display = 'block';

    document.querySelector('#cnil .cross').addEventListener('click', function() {
      cnil.style.display = 'none';
      localStorage.cnil = true;
    });
  }
});