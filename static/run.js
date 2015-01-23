
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
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker0 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker0, 'click', function(){infowindow0.open(map,marker0);});
        var infowindow1 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker1 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker1, 'click', function(){infowindow1.open(map,marker1);});
        var infowindow2 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker2, 'click', function(){infowindow2.open(map,marker2);});
        var infowindow3 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker3, 'click', function(){infowindow3.open(map,marker3);});
        var infowindow4 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker4 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker4, 'click', function(){infowindow4.open(map,marker4);});
        var infowindow5 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker5 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker5, 'click', function(){infowindow5.open(map,marker5);});
        var infowindow6 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker6 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker6, 'click', function(){infowindow6.open(map,marker6);});
        var infowindow7 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker7 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker7, 'click', function(){infowindow7.open(map,marker7);});
        var infowindow8 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker8 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker8, 'click', function(){infowindow8.open(map,marker8);});
        var infowindow9 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker9 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker9, 'click', function(){infowindow9.open(map,marker9);});
        var infowindow10 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker10 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker10, 'click', function(){infowindow10.open(map,marker10);});
        var infowindow11 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker11 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker11, 'click', function(){infowindow11.open(map,marker11);});
        var infowindow12 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker12 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker12, 'click', function(){infowindow12.open(map,marker12);});
        var infowindow13 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker13 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker13, 'click', function(){infowindow13.open(map,marker13);});
        var infowindow14 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker14 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker14, 'click', function(){infowindow14.open(map,marker14);});
        var infowindow15 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker15 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker15, 'click', function(){infowindow15.open(map,marker15);});
        var infowindow16 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker16 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker16, 'click', function(){infowindow16.open(map,marker16);});
        var infowindow17 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker17 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker17, 'click', function(){infowindow17.open(map,marker17);});
        var infowindow18 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker18 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker18, 'click', function(){infowindow18.open(map,marker18);});
        var infowindow19 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker19 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker19, 'click', function(){infowindow19.open(map,marker19);});
        var infowindow20 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker20 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker20, 'click', function(){infowindow20.open(map,marker20);});
        var infowindow21 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker21 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker21, 'click', function(){infowindow21.open(map,marker21);});
        var infowindow22 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker22 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker22, 'click', function(){infowindow22.open(map,marker22);});
        var infowindow23 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker23 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker23, 'click', function(){infowindow23.open(map,marker23);});
        var infowindow24 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker24 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker24, 'click', function(){infowindow24.open(map,marker24);});
        var infowindow25 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker25 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker25, 'click', function(){infowindow25.open(map,marker25);});
        var infowindow26 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker26 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker26, 'click', function(){infowindow26.open(map,marker26);});
        var infowindow27 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker27 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker27, 'click', function(){infowindow27.open(map,marker27);});
        var infowindow28 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker28 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker28, 'click', function(){infowindow28.open(map,marker28);});
        var infowindow29 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker29 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker29, 'click', function(){infowindow29.open(map,marker29);});
        var infowindow30 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker30 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker30, 'click', function(){infowindow30.open(map,marker30);});
        var infowindow31 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker31 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker31, 'click', function(){infowindow31.open(map,marker31);});
        var infowindow32 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker32 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker32, 'click', function(){infowindow32.open(map,marker32);});
        var infowindow33 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker33 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker33, 'click', function(){infowindow33.open(map,marker33);});
        var infowindow34 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker34 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker34, 'click', function(){infowindow34.open(map,marker34);});
        var infowindow35 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker35 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker35, 'click', function(){infowindow35.open(map,marker35);});
        var infowindow36 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker36 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker36, 'click', function(){infowindow36.open(map,marker36);});
        var infowindow37 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker37 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker37, 'click', function(){infowindow37.open(map,marker37);});
        var infowindow38 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker38 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker38, 'click', function(){infowindow38.open(map,marker38);});
        var infowindow39 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker39 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker39, 'click', function(){infowindow39.open(map,marker39);});
        var infowindow40 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker40 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker40, 'click', function(){infowindow40.open(map,marker40);});
        var infowindow41 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker41 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker41, 'click', function(){infowindow41.open(map,marker41);});
        var infowindow42 = new google.maps.InfoWindow({
            content: '0',
            //pixelOffset: 10
            });

        var marker42 = new google.maps.Marker({
        position: new google.maps.LatLng(40.7176267,-74.013618),
         map: map,
                });

        google.maps.event.addListener(marker42, 'click', function(){infowindow42.open(map,marker42);});
        var infowindow43 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker43 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker43, 'click', function(){infowindow43.open(map,marker43);});
        var infowindow44 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker44 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker44, 'click', function(){infowindow44.open(map,marker44);});
        var infowindow45 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker45 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker45, 'click', function(){infowindow45.open(map,marker45);});
        var infowindow46 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker46 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker46, 'click', function(){infowindow46.open(map,marker46);});
        var infowindow47 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker47 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker47, 'click', function(){infowindow47.open(map,marker47);});
        var infowindow48 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker48 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker48, 'click', function(){infowindow48.open(map,marker48);});
        var infowindow49 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker49 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker49, 'click', function(){infowindow49.open(map,marker49);});
        var infowindow50 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker50 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker50, 'click', function(){infowindow50.open(map,marker50);});
        var infowindow51 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker51 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker51, 'click', function(){infowindow51.open(map,marker51);});
        var infowindow52 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker52 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker52, 'click', function(){infowindow52.open(map,marker52);});
        var infowindow53 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker53 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker53, 'click', function(){infowindow53.open(map,marker53);});
        var infowindow54 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker54 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker54, 'click', function(){infowindow54.open(map,marker54);});
        var infowindow55 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker55 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker55, 'click', function(){infowindow55.open(map,marker55);});
        var infowindow56 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker56 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker56, 'click', function(){infowindow56.open(map,marker56);});
        var infowindow57 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker57 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker57, 'click', function(){infowindow57.open(map,marker57);});
        var infowindow58 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker58 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker58, 'click', function(){infowindow58.open(map,marker58);});
        var infowindow59 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker59 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker59, 'click', function(){infowindow59.open(map,marker59);});
        var infowindow60 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker60 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker60, 'click', function(){infowindow60.open(map,marker60);});
        var infowindow61 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker61 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker61, 'click', function(){infowindow61.open(map,marker61);});
        var infowindow62 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker62 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker62, 'click', function(){infowindow62.open(map,marker62);});
        var infowindow63 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker63 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker63, 'click', function(){infowindow63.open(map,marker63);});
        var infowindow64 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker64 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker64, 'click', function(){infowindow64.open(map,marker64);});
        var infowindow65 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker65 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker65, 'click', function(){infowindow65.open(map,marker65);});
        var infowindow66 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker66 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker66, 'click', function(){infowindow66.open(map,marker66);});
        var infowindow67 = new google.maps.InfoWindow({
            content: '',
            //pixelOffset: 10
            });

        var marker67 = new google.maps.Marker({
        position: new google.maps.LatLng(40.7176279,-74.0135719),
         map: map,
                });

        google.maps.event.addListener(marker67, 'click', function(){infowindow67.open(map,marker67);});
        var infowindow68 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker68 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker68, 'click', function(){infowindow68.open(map,marker68);});
        var infowindow69 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker69 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker69, 'click', function(){infowindow69.open(map,marker69);});
        var infowindow70 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker70 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker70, 'click', function(){infowindow70.open(map,marker70);});
        var infowindow71 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker71 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker71, 'click', function(){infowindow71.open(map,marker71);});
        var infowindow72 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker72 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker72, 'click', function(){infowindow72.open(map,marker72);});
        var infowindow73 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker73 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker73, 'click', function(){infowindow73.open(map,marker73);});
        var infowindow74 = new google.maps.InfoWindow({
            content: '',
            //pixelOffset: 10
            });

        var marker74 = new google.maps.Marker({
        position: new google.maps.LatLng(40.7175713,-74.0141703),
         map: map,
                });

        google.maps.event.addListener(marker74, 'click', function(){infowindow74.open(map,marker74);});
        var infowindow75 = new google.maps.InfoWindow({
            content: '',
            //pixelOffset: 10
            });

        var marker75 = new google.maps.Marker({
        position: new google.maps.LatLng(40.7175713,-74.0141703),
         map: map,
                });

        google.maps.event.addListener(marker75, 'click', function(){infowindow75.open(map,marker75);});
        var infowindow76 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker76 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker76, 'click', function(){infowindow76.open(map,marker76);});
        var infowindow77 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker77 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker77, 'click', function(){infowindow77.open(map,marker77);});
        var infowindow78 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker78 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker78, 'click', function(){infowindow78.open(map,marker78);});
        var infowindow79 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker79 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker79, 'click', function(){infowindow79.open(map,marker79);});
        var infowindow80 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker80 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker80, 'click', function(){infowindow80.open(map,marker80);});
        var infowindow81 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker81 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker81, 'click', function(){infowindow81.open(map,marker81);});
        var infowindow82 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker82 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker82, 'click', function(){infowindow82.open(map,marker82);});
        var infowindow83 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker83 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker83, 'click', function(){infowindow83.open(map,marker83);});
        var infowindow84 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker84 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker84, 'click', function(){infowindow84.open(map,marker84);});
        var infowindow85 = new google.maps.InfoWindow({
            content: 'Cow',
            //pixelOffset: 10
            });

        var marker85 = new google.maps.Marker({
        position: new google.maps.LatLng(40.717570599999995,-74.0136273),
         map: map,
                });

        google.maps.event.addListener(marker85, 'click', function(){infowindow85.open(map,marker85);});
        var infowindow86 = new google.maps.InfoWindow({
            content: 'Cow',
            //pixelOffset: 10
            });

        var marker86 = new google.maps.Marker({
        position: new google.maps.LatLng(40.717570599999995,-74.0136273),
         map: map,
                });

        google.maps.event.addListener(marker86, 'click', function(){infowindow86.open(map,marker86);});
        var infowindow87 = new google.maps.InfoWindow({
            content: 'hd',
            //pixelOffset: 10
            });

        var marker87 = new google.maps.Marker({
        position: new google.maps.LatLng(40.717579,-74.0135289),
         map: map,
                });

        google.maps.event.addListener(marker87, 'click', function(){infowindow87.open(map,marker87);});
        var infowindow88 = new google.maps.InfoWindow({
            content: 'hd',
            //pixelOffset: 10
            });

        var marker88 = new google.maps.Marker({
        position: new google.maps.LatLng(40.717579,-74.0135289),
         map: map,
                });

        google.maps.event.addListener(marker88, 'click', function(){infowindow88.open(map,marker88);});
        var infowindow89 = new google.maps.InfoWindow({
            content: 'd',
            //pixelOffset: 10
            });

        var marker89 = new google.maps.Marker({
        position: new google.maps.LatLng(40.717579,-74.0135289),
         map: map,
                });

        google.maps.event.addListener(marker89, 'click', function(){infowindow89.open(map,marker89);});
        var infowindow90 = new google.maps.InfoWindow({
            content: 'd',
            //pixelOffset: 10
            });

        var marker90 = new google.maps.Marker({
        position: new google.maps.LatLng(40.717579,-74.0135289),
         map: map,
                });

        google.maps.event.addListener(marker90, 'click', function(){infowindow90.open(map,marker90);});
        var infowindow91 = new google.maps.InfoWindow({
            content: 'd',
            //pixelOffset: 10
            });

        var marker91 = new google.maps.Marker({
        position: new google.maps.LatLng(40.717579,-74.0135289),
         map: map,
                });

        google.maps.event.addListener(marker91, 'click', function(){infowindow91.open(map,marker91);});
        var infowindow92 = new google.maps.InfoWindow({
            content: 'gg',
            //pixelOffset: 10
            });

        var marker92 = new google.maps.Marker({
        position: new google.maps.LatLng(40.717574899999995,-74.0135502),
         map: map,
                });

        google.maps.event.addListener(marker92, 'click', function(){infowindow92.open(map,marker92);});
        var infowindow93 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker93 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker93, 'click', function(){infowindow93.open(map,marker93);});
        var infowindow94 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker94 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker94, 'click', function(){infowindow94.open(map,marker94);});
        var infowindow95 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker95 = new google.maps.Marker({
        position: new google.maps.LatLng(0,100),
         map: map,
                });

        google.maps.event.addListener(marker95, 'click', function(){infowindow95.open(map,marker95);});
        var infowindow96 = new google.maps.InfoWindow({
            content: 'gg',
            //pixelOffset: 10
            });

        var marker96 = new google.maps.Marker({
        position: new google.maps.LatLng(40.717574899999995,-74.0135502),
         map: map,
                });

        google.maps.event.addListener(marker96, 'click', function(){infowindow96.open(map,marker96);});
        var infowindow97 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker97 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker97, 'click', function(){infowindow97.open(map,marker97);});
        var infowindow98 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker98 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker98, 'click', function(){infowindow98.open(map,marker98);});
        var infowindow99 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker99 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker99, 'click', function(){infowindow99.open(map,marker99);});
        var infowindow100 = new google.maps.InfoWindow({
            content: 'gg',
            //pixelOffset: 10
            });

        var marker100 = new google.maps.Marker({
        position: new google.maps.LatLng(40.717574899999995,-74.0135502),
         map: map,
                });

        google.maps.event.addListener(marker100, 'click', function(){infowindow100.open(map,marker100);});
        var infowindow101 = new google.maps.InfoWindow({
            content: 'gg',
            //pixelOffset: 10
            });

        var marker101 = new google.maps.Marker({
        position: new google.maps.LatLng(40.717574899999995,-74.0135502),
         map: map,
                });

        google.maps.event.addListener(marker101, 'click', function(){infowindow101.open(map,marker101);});
        var infowindow102 = new google.maps.InfoWindow({
            content: 'gg',
            //pixelOffset: 10
            });

        var marker102 = new google.maps.Marker({
        position: new google.maps.LatLng(40.717574899999995,-74.0135502),
         map: map,
                });

        google.maps.event.addListener(marker102, 'click', function(){infowindow102.open(map,marker102);});
        var infowindow103 = new google.maps.InfoWindow({
            content: 'd',
            //pixelOffset: 10
            });

        var marker103 = new google.maps.Marker({
        position: new google.maps.LatLng(40.7175383,-74.0135353),
         map: map,
                });

        google.maps.event.addListener(marker103, 'click', function(){infowindow103.open(map,marker103);});
        var infowindow104 = new google.maps.InfoWindow({
            content: 'd',
            //pixelOffset: 10
            });

        var marker104 = new google.maps.Marker({
        position: new google.maps.LatLng(40.7175383,-74.0135353),
         map: map,
                });

        google.maps.event.addListener(marker104, 'click', function(){infowindow104.open(map,marker104);});
        var infowindow105 = new google.maps.InfoWindow({
            content: 'd',
            //pixelOffset: 10
            });

        var marker105 = new google.maps.Marker({
        position: new google.maps.LatLng(40.7175383,-74.0135353),
         map: map,
                });

        google.maps.event.addListener(marker105, 'click', function(){infowindow105.open(map,marker105);});
        var infowindow106 = new google.maps.InfoWindow({
            content: 'd',
            //pixelOffset: 10
            });

        var marker106 = new google.maps.Marker({
        position: new google.maps.LatLng(40.7175383,-74.0135353),
         map: map,
                });

        google.maps.event.addListener(marker106, 'click', function(){infowindow106.open(map,marker106);});
        var infowindow107 = new google.maps.InfoWindow({
            content: 'd',
            //pixelOffset: 10
            });

        var marker107 = new google.maps.Marker({
        position: new google.maps.LatLng(40.7175383,-74.0135353),
         map: map,
                });

        google.maps.event.addListener(marker107, 'click', function(){infowindow107.open(map,marker107);});
        var infowindow108 = new google.maps.InfoWindow({
            content: 'd',
            //pixelOffset: 10
            });

        var marker108 = new google.maps.Marker({
        position: new google.maps.LatLng(40.7175383,-74.0135353),
         map: map,
                });

        google.maps.event.addListener(marker108, 'click', function(){infowindow108.open(map,marker108);});
        var infowindow109 = new google.maps.InfoWindow({
            content: 'gg',
            //pixelOffset: 10
            });

        var marker109 = new google.maps.Marker({
        position: new google.maps.LatLng(40.7176269,-74.0135209),
         map: map,
                });

        google.maps.event.addListener(marker109, 'click', function(){infowindow109.open(map,marker109);});
        var infowindow110 = new google.maps.InfoWindow({
            content: 'gg',
            //pixelOffset: 10
            });

        var marker110 = new google.maps.Marker({
        position: new google.maps.LatLng(40.7176269,-74.0135209),
         map: map,
                });

        google.maps.event.addListener(marker110, 'click', function(){infowindow110.open(map,marker110);});
        var infowindow111 = new google.maps.InfoWindow({
            content: 'gg',
            //pixelOffset: 10
            });

        var marker111 = new google.maps.Marker({
        position: new google.maps.LatLng(40.7176269,-74.0135209),
         map: map,
                });

        google.maps.event.addListener(marker111, 'click', function(){infowindow111.open(map,marker111);});
        var infowindow112 = new google.maps.InfoWindow({
            content: 'aaaa',
            //pixelOffset: 10
            });

        var marker112 = new google.maps.Marker({
        position: new google.maps.LatLng(40.7176103,-74.01353180000001),
         map: map,
                });

        google.maps.event.addListener(marker112, 'click', function(){infowindow112.open(map,marker112);});
}

//Run the map
google.maps.event.addDomListener(window, 'load', initialize);
