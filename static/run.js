
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
    console.log(map);
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
    var infowindow0 = new google.maps.InfoWindow({
            content: "",
            //pixelOffset: 10
            });

        var marker0 = new google.maps.Marker({
        position: new google.maps.LatLng(40.6595456,-73.9930239),
         map: map,
                });

        google.maps.event.addListener(marker0, 'click', function(){infowindow0.open(map,marker0);});var infowindow1 = new google.maps.InfoWindow({
            content: "",
            //pixelOffset: 10
            });

        var marker1 = new google.maps.Marker({
        position: new google.maps.LatLng(40.6595456,-73.9930239),
         map: map,
                });

        google.maps.event.addListener(marker1, 'click', function(){infowindow1.open(map,marker1);});var infowindow2 = new google.maps.InfoWindow({
            content: "",
            //pixelOffset: 10
            });

        var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(40.6595458,-73.9930239),
         map: map,
                });

        google.maps.event.addListener(marker2, 'click', function(){infowindow2.open(map,marker2);});var infowindow3 = new google.maps.InfoWindow({
            content: "",
            //pixelOffset: 10
            });

        var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(40.6595458,-73.9930239),
         map: map,
                });

        google.maps.event.addListener(marker3, 'click', function(){infowindow3.open(map,marker3);});var infowindow4 = new google.maps.InfoWindow({
            content: "",
            //pixelOffset: 10
            });

        var marker4 = new google.maps.Marker({
        position: new google.maps.LatLng(40.7485564,-73.9994723),
         map: map,
                });

        google.maps.event.addListener(marker4, 'click', function(){infowindow4.open(map,marker4);});var infowindow5 = new google.maps.InfoWindow({
            content: "",
            //pixelOffset: 10
            });

        var marker5 = new google.maps.Marker({
        position: new google.maps.LatLng(40.809135399999995,-73.9646307),
         map: map,
                });

        google.maps.event.addListener(marker5, 'click', function(){infowindow5.open(map,marker5);});var infowindow6 = new google.maps.InfoWindow({
            content: "",
            //pixelOffset: 10
            });

        var marker6 = new google.maps.Marker({
        position: new google.maps.LatLng(40.809135399999995,-73.9646307),
         map: map,
                });

        google.maps.event.addListener(marker6, 'click', function(){infowindow6.open(map,marker6);});var infowindow7 = new google.maps.InfoWindow({
            content: "",
            //pixelOffset: 10
            });

        var marker7 = new google.maps.Marker({
        position: new google.maps.LatLng(40.6595458,-73.9930239),
         map: map,
                });

        google.maps.event.addListener(marker7, 'click', function(){infowindow7.open(map,marker7);});var infowindow8 = new google.maps.InfoWindow({
            content: "",
            //pixelOffset: 10
            });

        var marker8 = new google.maps.Marker({
        position: new google.maps.LatLng(40.7485858,-73.9995874),
         map: map,
                });

        google.maps.event.addListener(marker8, 'click', function(){infowindow8.open(map,marker8);});var infowindow9 = new google.maps.InfoWindow({
            content: "",
            //pixelOffset: 10
            });

        var marker9 = new google.maps.Marker({
        position: new google.maps.LatLng(42.447043099999995,-76.4822903),
         map: map,
                });

        google.maps.event.addListener(marker9, 'click', function(){infowindow9.open(map,marker9);});var infowindow10 = new google.maps.InfoWindow({
            content: "",
            //pixelOffset: 10
            });

        var marker10 = new google.maps.Marker({
        position: new google.maps.LatLng(42.4470482,-76.48228859999999),
         map: map,
                });

        google.maps.event.addListener(marker10, 'click', function(){infowindow10.open(map,marker10);});var infowindow11 = new google.maps.InfoWindow({
            content: "",
            //pixelOffset: 10
            });

        var marker11 = new google.maps.Marker({
        position: new google.maps.LatLng(40.809135399999995,-73.9646307),
         map: map,
                });

        google.maps.event.addListener(marker11, 'click', function(){infowindow11.open(map,marker11);});var infowindow12 = new google.maps.InfoWindow({
            content: "",
            //pixelOffset: 10
            });

        var marker12 = new google.maps.Marker({
        position: new google.maps.LatLng(42.4470482,-76.48228859999999),
         map: map,
                });

        google.maps.event.addListener(marker12, 'click', function(){infowindow12.open(map,marker12);});var infowindow13 = new google.maps.InfoWindow({
            content: "Test",
            //pixelOffset: 10
            });

        var marker13 = new google.maps.Marker({
        position: new google.maps.LatLng(40.7485636,-73.99938949999999),
         map: map,
                });

        google.maps.event.addListener(marker13, 'click', function(){infowindow13.open(map,marker13);});var infowindow14 = new google.maps.InfoWindow({
            content: "",
            //pixelOffset: 10
            });

        var marker14 = new google.maps.Marker({
        position: new google.maps.LatLng(42.4470482,-76.48228859999999),
         map: map,
                });

        google.maps.event.addListener(marker14, 'click', function(){infowindow14.open(map,marker14);});var infowindow15 = new google.maps.InfoWindow({
            content: "",
            //pixelOffset: 10
            });

        var marker15 = new google.maps.Marker({
        position: new google.maps.LatLng(42.4470482,-76.48228859999999),
         map: map,
                });

        google.maps.event.addListener(marker15, 'click', function(){infowindow15.open(map,marker15);});var infowindow16 = new google.maps.InfoWindow({
            content: "popcorn",
            //pixelOffset: 10
            });

        var marker16 = new google.maps.Marker({
        position: new google.maps.LatLng(42.4470507,-76.4823064),
         map: map,
                });

        google.maps.event.addListener(marker16, 'click', function(){infowindow16.open(map,marker16);});var infowindow17 = new google.maps.InfoWindow({
            content: "popcorn",
            //pixelOffset: 10
            });

        var marker17 = new google.maps.Marker({
        position: new google.maps.LatLng(42.4470507,-76.4823064),
         map: map,
                });

        google.maps.event.addListener(marker17, 'click', function(){infowindow17.open(map,marker17);});var infowindow18 = new google.maps.InfoWindow({
            content: "chocolate (in my dorm room)",
            //pixelOffset: 10
            });

        var marker18 = new google.maps.Marker({
        position: new google.maps.LatLng(42.4485075,-76.488354),
         map: map,
                });

        google.maps.event.addListener(marker18, 'click', function(){infowindow18.open(map,marker18);});var infowindow19 = new google.maps.InfoWindow({
            content: "chocolate (in my dorm room)",
            //pixelOffset: 10
            });

        var marker19 = new google.maps.Marker({
        position: new google.maps.LatLng(42.4485075,-76.488354),
         map: map,
                });

        google.maps.event.addListener(marker19, 'click', function(){infowindow19.open(map,marker19);});var infowindow20 = new google.maps.InfoWindow({
            content: "chocolate (in my dorm room)",
            //pixelOffset: 10
            });

        var marker20 = new google.maps.Marker({
        position: new google.maps.LatLng(42.4485075,-76.488354),
         map: map,
                });

        google.maps.event.addListener(marker20, 'click', function(){infowindow20.open(map,marker20);});var infowindow21 = new google.maps.InfoWindow({
            content: "chocolate (in Zach's dorm)",
            //pixelOffset: 10
            });

        var marker21 = new google.maps.Marker({
        position: new google.maps.LatLng(42.447683999999995,-76.4885577),
         map: map,
                });

        google.maps.event.addListener(marker21, 'click', function(){infowindow21.open(map,marker21);});var infowindow22 = new google.maps.InfoWindow({
            content: "chocolate (in Zach's dorm)",
            //pixelOffset: 10
            });

        var marker22 = new google.maps.Marker({
        position: new google.maps.LatLng(42.447683999999995,-76.4885577),
         map: map,
                });

        google.maps.event.addListener(marker22, 'click', function(){infowindow22.open(map,marker22);});var infowindow23 = new google.maps.InfoWindow({
            content: "chocolate (in Zach's dorm)",
            //pixelOffset: 10
            });

        var marker23 = new google.maps.Marker({
        position: new google.maps.LatLng(42.447683999999995,-76.4885577),
         map: map,
                });

        google.maps.event.addListener(marker23, 'click', function(){infowindow23.open(map,marker23);});var infowindow24 = new google.maps.InfoWindow({
            content: "chocolate (in Zach's dorm)",
            //pixelOffset: 10
            });

        var marker24 = new google.maps.Marker({
        position: new google.maps.LatLng(42.447683999999995,-76.4885577),
         map: map,
                });

        google.maps.event.addListener(marker24, 'click', function(){infowindow24.open(map,marker24);});var infowindow25 = new google.maps.InfoWindow({
            content: "chocolate (in Zach's dorm)",
            //pixelOffset: 10
            });

        var marker25 = new google.maps.Marker({
        position: new google.maps.LatLng(42.447683999999995,-76.4885577),
         map: map,
                });

        google.maps.event.addListener(marker25, 'click', function(){infowindow25.open(map,marker25);});var infowindow26 = new google.maps.InfoWindow({
            content: "'Quote'",
            //pixelOffset: 10
            });

        var marker26 = new google.maps.Marker({
        position: new google.maps.LatLng(40.7485681,-73.9993654),
         map: map,
                });

        google.maps.event.addListener(marker26, 'click', function(){infowindow26.open(map,marker26);});var infowindow27 = new google.maps.InfoWindow({
            content: "Hello.",
            //pixelOffset: 10
            });

        var marker27 = new google.maps.Marker({
        position: new google.maps.LatLng(40.7485669,-73.9993243),
         map: map,
                });

        google.maps.event.addListener(marker27, 'click', function(){infowindow27.open(map,marker27);});
}

//Run the map
google.maps.event.addDomListener(window, 'load', initialize)
