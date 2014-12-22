var mapUrl = "https://www.google.com/maps/embed/v1/view?key=AIzaSyATf-MrlFDWnyXHfZEXgRrZny6xA3r19h";

console.log("Hello");

/*var getPos = function(position){
    if(navigator.geolocation){
	return {'lat':position.coords.latitude, 'lng':position.coords.longitude};
    }
    else{
	return {'lat':0,'lng':0};
    }
    }*/

var coords = getCurrentPosition();
console.log(coords);

mapUrl = mapUrl + coords.latitude+','+coords.longitude;
var map = document.getElementById('map');
map.innerHTML = '<iframe width="400" height="400" src="'+mapUrl+'"></iframe>';
