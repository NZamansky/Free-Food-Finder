var map

function initializeMap(){
    var getPos = function(position){
	if(navigator.geolocation){
	    return {'lat':position.coords.latitude, 'lng':position.coords.longitude}
	}
	else{
	    return {'lat':0,'lng':0}
	}
    }
    map = new google.maps.Map(document.getElementById('map'), {
	zoom:12,
    })
    
    map.data.loadGeoJson('https://storage.googleapis.com/maps-devrel/google.json');
}

google.maps.event.addDomListener(window, 'load', initialize);
