
var map;

//This function happens if Geolocation fails
function handleNoGeolocation(errorFlag) {
    if (errorFlag) {
	var content = 'Error: The Geolocation service failed.';
    } else {
	var content = 'Error: Your browser doesn\'t support geolocation.';
    }
    //Setting the map to a default position
    var options = {
	map: map,
	position: new google.maps.LatLng(60, 105),
	content: content
    };
    var infowindow = new google.maps.InfoWindow(options);
    map.setCenter(options.position);
}
//This function initializes the map
function initialize() {
    var mapOptions = {
	zoom: 16
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
			      mapOptions);
    
    var pos = new google.maps.LatLng(0,0);
    
    // Try HTML5 geolocation
    if(navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position) {
	    pos = new google.maps.LatLng(position.coords.latitude,
					 position.coords.longitude);
	    map.setCenter(pos);
	    coords = document.getElementById('hiddenField');
	    console.log(coords);
	    coords.value = ''+position.coords.latitude+ ',' + position.coords.longitude;
	}, function() {
	    handleNoGeolocation(true);
	});
    } else {
	// Browser doesn't support Geolocation
	handleNoGeolocation(false);
    }
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.7176267,-74.013618),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.7176279,-74.0135719),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.7175713,-74.0141703),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.7175713,-74.0141703),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.717570599999995,-74.0136273),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.717570599999995,-74.0136273),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.717579,-74.0135289),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.717579,-74.0135289),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.717579,-74.0135289),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.717579,-74.0135289),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.717579,-74.0135289),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.717574899999995,-74.0135502),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,100),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.717574899999995,-74.0135502),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.717574899999995,-74.0135502),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.717574899999995,-74.0135502),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.717574899999995,-74.0135502),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.7175383,-74.0135353),
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.7175383,-74.0135353),
        map: map,
                });
}

//Run the map
google.maps.event.addDomListener(window, 'load', initialize);
