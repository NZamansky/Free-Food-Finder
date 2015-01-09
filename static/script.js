var mapUrl = "https://www.google.com/maps/embed/v1/view?key=AIzaSyATf-MrlFDWnyXHfZEXgRrZny6xA3r19h";

var latitude;
var longitude;

function success(pos){
    var coords=pos.coords;
    latitude = coords.latitude;
    longitude = coords.longitude;
    return coords;
}
function failure() {
  alert('ERROR: Position indeterminable');
};

geoPosition.init();

var coords = (geoPosition.getCurrentPosition(success,failure));
console.log(coords.latitude);

mapUrl = mapUrl + '&center=' + latitude+','+longitude+"&zoom=13&size=400x400";
var map = document.getElementById('map');
map.innerHTML = '<iframe width="400" height="400" src="'+mapUrl+'"></iframe>';
