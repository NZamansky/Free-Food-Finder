

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

google.maps.event.addDomListener(window,'load',geoPosition.getCurrentPosition(success,failure));

*/

var map;

var initialize = function(){
    var mapOptions = { zoom:16 };
    map = new google.maps.Map(document.getElementById('map'),mapOptions);

    geoPosition.init();
    geoPosition.getCurrentPosition(function(position) {
	var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	map.setCenter(pos);
    }, function(){});
}

google.maps.event.addDomListener(window, 'load', initialize);
