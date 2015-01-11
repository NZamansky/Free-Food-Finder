

var success = function(pos){
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


