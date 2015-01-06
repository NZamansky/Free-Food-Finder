var mapUrl = "https://www.google.com/maps/embed/v1/view?key=AIzaSyATf-MrlFDWnyXHfZEXgRrZny6xA3r19h";

console.log("Hello");

function returnPosition(pos){
    var coords=pos.coords;
    return coords;
}
function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

console.log(geoPosition.init());

var coords = (navigator.geolocation.getCurrentPosition(returnPosition,error));
console.log(coords);

//mapUrl = mapUrl + coords.latitude+','+coords.longitude;
//var map = document.getElementById('map');
//map.innerHTML = '<iframe width="400" height="400" src="'+mapUrl+'"></iframe>';
