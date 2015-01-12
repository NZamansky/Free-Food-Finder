

/*var success = function(pos){
    var coords=pos.coords;
    var mapUrl = "https://www.google.com/maps/embed/v1/place?key=AIzaSyB0fUiZ7AkUxevDyCRROQd4XaWPwDhrSyE";
    var latitude = coords.latitude;
    var longitude = coords.longitude;
    var initialize = function(){
	var mapOptions = {center: new google.maps.LatLng(latitude,longitude), zoom: 16};
	var map = new google.maps.Map(document.getElementById('map'),mapOptions);
}
    //google.maps.event.addDomListener(window, 'load', initialize);
    initialize();
//    mapUrl = mapUrl + '&center='+lat+','+lng+"&zoom=16";=//"+lat+','+lng;
//    var map = document.getElementById('map');
//    map.innerHTML = '<iframe width="400" height="400" src="'+mapUrl+'></iframe>';

}
var failure = function() {
    alert('ERROR: Position indeterminable');
};

geoPosition.init();

<<<<<<< HEAD
geoPosition.getCurrentPosition(success,failure);
*/

var map;


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

function initialize() {
    var mapOptions = {
	zoom: 16
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
			      mapOptions);

    // Try HTML5 geolocation
    if(navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position) {
	    var pos = new google.maps.LatLng(position.coords.latitude,
					     position.coords.longitude);

	    map.setCenter(pos);
	}, function() {
	    handleNoGeolocation(true);
	});
    } else {
	// Browser doesn't support Geolocation
	handleNoGeolocation(false);
    }
}



google.maps.event.addDomListener(window, 'load', initialize);

/*google.maps.event.addDomListener(window,'load',geoPosition.getCurrentPosition(success,failure));



var map;

var initialize = function(){
    var mapOptions = { zoom:16 };
    map = new google.maps.Map(document.getElementById('map'),mapOptions);

    geoPosition.init();
    geoPosition.getCurrentPosition(function(position) {
	var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	map.setCenter(pos);
    }, function(){});
}*/


//google.maps.event.addDomListener(window, 'load', initialize);
