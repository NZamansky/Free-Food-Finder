var mapUrl = "https://www.google.com/maps/embed/v1/view?key=AIzaSyATf-MrlFDWnyXHfZEXgRrZny6xA3r19h";

function success(pos){
    var coords=pos.coords;
    console.log(coords.latitude);
    return coords;
}
function failure() {
  alert('ERROR: Position indeterminable');
};

geoPosition.init();

var coords = (geoPosition.getCurrentPosition(success,failure));
console.log(coords);

//mapUrl = mapUrl + coords.latitude+','+coords.longitude;
//var map = document.getElementById('map');
//map.innerHTML = '<iframe width="400" height="400" src="'+mapUrl+'"></iframe>';
