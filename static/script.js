var mapUrl = "https://www.google.com/maps/embed/v1/view?key=AIzaSyB0fUiZ7AkUxevDyCRROQd4XaWPwDhrSyE";

var latitude;
var longitude;

console.log(latitude);

function success(pos){
    var coords=pos.coords;
    var latitude = coords.latitude;
    console.log(latitude);
    var longitude = coords.longitude;
    
    return ""+latitude+","+longitude;
}
function failure() {
  alert('ERROR: Position indeterminable');
};

geoPosition.init();

var coords = geoPosition.getCurrentPosition(success,failure);

mapUrl = mapUrl + '&center=' + coords;

console.log(mapUrl);

var map = document.getElementById('map');
map.innerHTML = '<iframe width="400" height="400" src="'+mapUrl+'"></iframe>';
