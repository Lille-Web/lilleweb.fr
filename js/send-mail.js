document.addEventListener('DOMContentLoaded', function() {
	var form = document.getElementById('contact-form');

	form.onsubmit = function(e) {
		e.preventDefault();

		var mail = {
			mail: {
				sender: document.getElementById('mail').value,
				name: document.getElementById('name').value,
				message: document.getElementById('message').value,
			}
		};

		var xhr = new XMLHttpRequest();

		xhr.open('POST', 'http://localhost:1337');
		xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
		
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
				document.getElementsByClassName('alert')[0].style.display = "block";
			}
		};

		xhr.send(JSON.stringify(mail));
	};
});
