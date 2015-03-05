var map;
var initialize;
var places;
var getPlaces;

getPlaces = function(){
  nanoajax.ajax('/API/places.json', function(code, responseText){
    return places = JSON.parse(responseText);
  });
}

initialize = function(){
  var latLng = new google.maps.LatLng(50.6371834, 3.063017400000035); // Correspond au coordonnées de Lille
  var myOptions = {
    zoom      : 13,
    center    : latLng,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DEFAULT,
    },
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE,
      position: google.maps.ControlPosition.RIGHT_CENTER
    },
    mapTypeId : google.maps.MapTypeId.ROADMAP, // Type de carte, différentes valeurs possible HYBRID, ROADMAP, SATELLITE, TERRAIN
  };

  map = new google.maps.Map(document.getElementById('map'), myOptions);

  nanoajax.ajax('/API/places.json', function (code, responseText) {
    var places = JSON.parse(responseText).places;
    places.forEach(function(place){
        var latLng = new google.maps.LatLng(place.lat, place.lng)
        var marker = new google.maps.Marker({
          position : latLng,
          map      : map,
          title    : place.name,
          icon     : "pin.png"
        });
        var contentMarker = ' \
          <div class="contentMarker" id="contentMarker-'+place.id+'"> \
            <h4>' + place.name + '</h4> \
            <p class="adress">' + place.adress + ', ' + place.zip + place.city + '</p> \
            <a href="'+place.maps+'"> Ouvrir dans ma Google Maps </a> \
          </div>';


        var infoWindow = new google.maps.InfoWindow({
            content  : contentMarker,
            position : latLng
        });
        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.open(map,marker);
        });
        var placeLinkElements = document.querySelectorAll('.openMarker[href="#'+place.id+'"]');

        $('.openMarker[href="#'+place.id+'"]').click(function(){
          $('html, body').animate({
            scrollTop:$('body').offset().top
          }, 'slow');
          infoWindow.open(map,marker);
        });
    });
  });

};

initialize();
