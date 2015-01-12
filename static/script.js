

/*var success = function(pos){
    var coords=pos.coords;
    var mapUrl = "https://www.google.com/maps/embed/v1/view?key=AIzaSyB0fUiZ7AkUxevDyCRROQd4XaWPwDhrSyE";
    var lat = coords.latitude;
    var lng = coords.longitude;
    mapUrl = mapUrl + '&center='+lat+','+lng+"&zoom=16";
    var map = document.getElementById('map');
    map.innerHTML = '<iframe width="400" height="400" src="'+mapUrl+'"></iframe>';

}
var failure = function() {
    alert('ERROR: Position indeterminable');
};

geoPosition.init();

geoPosition.getCurrentPosition(success,failure);
*/

var map;

function initialize() {
  var mapOptions = {
    zoom: 6
  };
  map = new google.maps.Map(document.getElementById('map'),
      mapOptions);

  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: 'Location found using HTML5.'
      });

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(60, 105),
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}

google.maps.event.addDomListener(window, 'load', initialize);

