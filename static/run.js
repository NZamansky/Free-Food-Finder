
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
<<<<<<< HEAD
    
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
=======
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
>>>>>>> cf67729675127eb51be3b05d7efa86467a63e429
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
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker42 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker42, 'click', function(){infowindow42.open(map,marker42);});
        var infowindow43 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker43 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker43, 'click', function(){infowindow43.open(map,marker43);});
        var infowindow44 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker44 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker44, 'click', function(){infowindow44.open(map,marker44);});
        var infowindow45 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker45 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker45, 'click', function(){infowindow45.open(map,marker45);});
        var infowindow46 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker46 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker46, 'click', function(){infowindow46.open(map,marker46);});
        var infowindow47 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker47 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker47, 'click', function(){infowindow47.open(map,marker47);});
        var infowindow48 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker48 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker48, 'click', function(){infowindow48.open(map,marker48);});
        var infowindow49 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker49 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker49, 'click', function(){infowindow49.open(map,marker49);});
        var infowindow50 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker50 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker50, 'click', function(){infowindow50.open(map,marker50);});
        var infowindow51 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker51 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker51, 'click', function(){infowindow51.open(map,marker51);});
        var infowindow52 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker52 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker52, 'click', function(){infowindow52.open(map,marker52);});
        var infowindow53 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker53 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker53, 'click', function(){infowindow53.open(map,marker53);});
        var infowindow54 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker54 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker54, 'click', function(){infowindow54.open(map,marker54);});
        var infowindow55 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker55 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker55, 'click', function(){infowindow55.open(map,marker55);});
        var infowindow56 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker56 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
<<<<<<< HEAD
         map: map,
                });

        google.maps.event.addListener(marker56, 'click', function(){infowindow56.open(map,marker56);});
        var infowindow57 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker57 = new google.maps.Marker({
=======
        map: map,
                });var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.7176267,-74.013618),
        map: map,
                });var marker = new google.maps.Marker({
>>>>>>> cf67729675127eb51be3b05d7efa86467a63e429
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker57, 'click', function(){infowindow57.open(map,marker57);});
        var infowindow58 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker58 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker58, 'click', function(){infowindow58.open(map,marker58);});
        var infowindow59 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker59 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker59, 'click', function(){infowindow59.open(map,marker59);});
        var infowindow60 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker60 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker60, 'click', function(){infowindow60.open(map,marker60);});
        var infowindow61 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker61 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker61, 'click', function(){infowindow61.open(map,marker61);});
        var infowindow62 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker62 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker62, 'click', function(){infowindow62.open(map,marker62);});
        var infowindow63 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker63 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker63, 'click', function(){infowindow63.open(map,marker63);});
        var infowindow64 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker64 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker64, 'click', function(){infowindow64.open(map,marker64);});
        var infowindow65 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker65 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker65, 'click', function(){infowindow65.open(map,marker65);});
        var infowindow66 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker66 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker66, 'click', function(){infowindow66.open(map,marker66);});
        var infowindow67 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker67 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker67, 'click', function(){infowindow67.open(map,marker67);});
        var infowindow68 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker68 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker68, 'click', function(){infowindow68.open(map,marker68);});
        var infowindow69 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker69 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker69, 'click', function(){infowindow69.open(map,marker69);});
        var infowindow70 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker70 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker70, 'click', function(){infowindow70.open(map,marker70);});
        var infowindow71 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker71 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
<<<<<<< HEAD
         map: map,
=======
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
>>>>>>> cf67729675127eb51be3b05d7efa86467a63e429
                });

        google.maps.event.addListener(marker71, 'click', function(){infowindow71.open(map,marker71);});
        var infowindow72 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker72 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker72, 'click', function(){infowindow72.open(map,marker72);});
        var infowindow73 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker73 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker73, 'click', function(){infowindow73.open(map,marker73);});
        var infowindow74 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker74 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker74, 'click', function(){infowindow74.open(map,marker74);});
        var infowindow75 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker75 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker75, 'click', function(){infowindow75.open(map,marker75);});
        var infowindow76 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker76 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker76, 'click', function(){infowindow76.open(map,marker76);});
        var infowindow77 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker77 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker77, 'click', function(){infowindow77.open(map,marker77);});
        var infowindow78 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker78 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker78, 'click', function(){infowindow78.open(map,marker78);});
        var infowindow79 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker79 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker79, 'click', function(){infowindow79.open(map,marker79);});
        var infowindow80 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker80 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker80, 'click', function(){infowindow80.open(map,marker80);});
        var infowindow81 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker81 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker81, 'click', function(){infowindow81.open(map,marker81);});
        var infowindow82 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker82 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker82, 'click', function(){infowindow82.open(map,marker82);});
        var infowindow83 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker83 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker83, 'click', function(){infowindow83.open(map,marker83);});
        var infowindow84 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker84 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker84, 'click', function(){infowindow84.open(map,marker84);});
        var infowindow85 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker85 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker85, 'click', function(){infowindow85.open(map,marker85);});
        var infowindow86 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker86 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker86, 'click', function(){infowindow86.open(map,marker86);});
        var infowindow87 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker87 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker87, 'click', function(){infowindow87.open(map,marker87);});
        var infowindow88 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker88 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker88, 'click', function(){infowindow88.open(map,marker88);});
        var infowindow89 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker89 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker89, 'click', function(){infowindow89.open(map,marker89);});
        var infowindow90 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker90 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker90, 'click', function(){infowindow90.open(map,marker90);});
        var infowindow91 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker91 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker91, 'click', function(){infowindow91.open(map,marker91);});
        var infowindow92 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker92 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker92, 'click', function(){infowindow92.open(map,marker92);});
        var infowindow93 = new google.maps.InfoWindow({
            content: 'Hello',
            //pixelOffset: 10
            });

        var marker93 = new google.maps.Marker({
        position: new google.maps.LatLng(-1,-1),
         map: map,
                });

        google.maps.event.addListener(marker93, 'click', function(){infowindow93.open(map,marker93);});
        var infowindow94 = new google.maps.InfoWindow({
            content: 'p',
            //pixelOffset: 10
            });

        var marker94 = new google.maps.Marker({
        position: new google.maps.LatLng(-1,-1),
         map: map,
                });

        google.maps.event.addListener(marker94, 'click', function(){infowindow94.open(map,marker94);});
        var infowindow95 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker95 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker95, 'click', function(){infowindow95.open(map,marker95);});
        var infowindow96 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker96 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker96, 'click', function(){infowindow96.open(map,marker96);});
        var infowindow97 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker97 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker97, 'click', function(){infowindow97.open(map,marker97);});
        var infowindow98 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker98 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker98, 'click', function(){infowindow98.open(map,marker98);});
        var infowindow99 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker99 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker99, 'click', function(){infowindow99.open(map,marker99);});
        var infowindow100 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker100 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker100, 'click', function(){infowindow100.open(map,marker100);});
        var infowindow101 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker101 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker101, 'click', function(){infowindow101.open(map,marker101);});
        var infowindow102 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker102 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker102, 'click', function(){infowindow102.open(map,marker102);});
        var infowindow103 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker103 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker103, 'click', function(){infowindow103.open(map,marker103);});
        var infowindow104 = new google.maps.InfoWindow({
            content: 'Hello',
            //pixelOffset: 10
            });

        var marker104 = new google.maps.Marker({
        position: new google.maps.LatLng(-1,-1),
         map: map,
                });

        google.maps.event.addListener(marker104, 'click', function(){infowindow104.open(map,marker104);});
        var infowindow105 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker105 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker105, 'click', function(){infowindow105.open(map,marker105);});
        var infowindow106 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker106 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker106, 'click', function(){infowindow106.open(map,marker106);});
        var infowindow107 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker107 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker107, 'click', function(){infowindow107.open(map,marker107);});
        var infowindow108 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker108 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker108, 'click', function(){infowindow108.open(map,marker108);});
        var infowindow109 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker109 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker109, 'click', function(){infowindow109.open(map,marker109);});
        var infowindow110 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker110 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker110, 'click', function(){infowindow110.open(map,marker110);});
        var infowindow111 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker111 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker111, 'click', function(){infowindow111.open(map,marker111);});
        var infowindow112 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker112 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker112, 'click', function(){infowindow112.open(map,marker112);});
        var infowindow113 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker113 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker113, 'click', function(){infowindow113.open(map,marker113);});
        var infowindow114 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker114 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker114, 'click', function(){infowindow114.open(map,marker114);});
        var infowindow115 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker115 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker115, 'click', function(){infowindow115.open(map,marker115);});
        var infowindow116 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker116 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker116, 'click', function(){infowindow116.open(map,marker116);});
        var infowindow117 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker117 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker117, 'click', function(){infowindow117.open(map,marker117);});
        var infowindow118 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker118 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker118, 'click', function(){infowindow118.open(map,marker118);});
        var infowindow119 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker119 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker119, 'click', function(){infowindow119.open(map,marker119);});
        var infowindow120 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker120 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker120, 'click', function(){infowindow120.open(map,marker120);});
        var infowindow121 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker121 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker121, 'click', function(){infowindow121.open(map,marker121);});
        var infowindow122 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker122 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker122, 'click', function(){infowindow122.open(map,marker122);});
        var infowindow123 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker123 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker123, 'click', function(){infowindow123.open(map,marker123);});
        var infowindow124 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker124 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker124, 'click', function(){infowindow124.open(map,marker124);});
        var infowindow125 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker125 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker125, 'click', function(){infowindow125.open(map,marker125);});
        var infowindow126 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker126 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker126, 'click', function(){infowindow126.open(map,marker126);});
        var infowindow127 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker127 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker127, 'click', function(){infowindow127.open(map,marker127);});
        var infowindow128 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker128 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker128, 'click', function(){infowindow128.open(map,marker128);});
        var infowindow129 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker129 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker129, 'click', function(){infowindow129.open(map,marker129);});
        var infowindow130 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker130 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker130, 'click', function(){infowindow130.open(map,marker130);});
        var infowindow131 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker131 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker131, 'click', function(){infowindow131.open(map,marker131);});
        var infowindow132 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker132 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker132, 'click', function(){infowindow132.open(map,marker132);});
        var infowindow133 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker133 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker133, 'click', function(){infowindow133.open(map,marker133);});
        var infowindow134 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker134 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker134, 'click', function(){infowindow134.open(map,marker134);});
        var infowindow135 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker135 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker135, 'click', function(){infowindow135.open(map,marker135);});
        var infowindow136 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker136 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker136, 'click', function(){infowindow136.open(map,marker136);});
        var infowindow137 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker137 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker137, 'click', function(){infowindow137.open(map,marker137);});
        var infowindow138 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker138 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker138, 'click', function(){infowindow138.open(map,marker138);});
        var infowindow139 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker139 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker139, 'click', function(){infowindow139.open(map,marker139);});
        var infowindow140 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker140 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker140, 'click', function(){infowindow140.open(map,marker140);});
        var infowindow141 = new google.maps.InfoWindow({
            content: '',
            //pixelOffset: 10
            });

        var marker141 = new google.maps.Marker({
        position: new google.maps.LatLng(40.717766600000004,-74.0133999),
         map: map,
                });

        google.maps.event.addListener(marker141, 'click', function(){infowindow141.open(map,marker141);});
        var infowindow142 = new google.maps.InfoWindow({
            content: '',
            //pixelOffset: 10
            });

        var marker142 = new google.maps.Marker({
        position: new google.maps.LatLng(40.717766600000004,-74.0133999),
         map: map,
                });

        google.maps.event.addListener(marker142, 'click', function(){infowindow142.open(map,marker142);});
        var infowindow143 = new google.maps.InfoWindow({
            content: '',
            //pixelOffset: 10
            });

        var marker143 = new google.maps.Marker({
        position: new google.maps.LatLng(40.7176986,-74.0134631),
         map: map,
                });

        google.maps.event.addListener(marker143, 'click', function(){infowindow143.open(map,marker143);});
        var infowindow144 = new google.maps.InfoWindow({
            content: '',
            //pixelOffset: 10
            });

        var marker144 = new google.maps.Marker({
        position: new google.maps.LatLng(40.7176986,-74.0134631),
         map: map,
                });

        google.maps.event.addListener(marker144, 'click', function(){infowindow144.open(map,marker144);});
        var infowindow145 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker145 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker145, 'click', function(){infowindow145.open(map,marker145);});
        var infowindow146 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker146 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker146, 'click', function(){infowindow146.open(map,marker146);});
        var infowindow147 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker147 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker147, 'click', function(){infowindow147.open(map,marker147);});
        var infowindow148 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker148 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker148, 'click', function(){infowindow148.open(map,marker148);});
        var infowindow149 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker149 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker149, 'click', function(){infowindow149.open(map,marker149);});
        var infowindow150 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker150 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker150, 'click', function(){infowindow150.open(map,marker150);});
        var infowindow151 = new google.maps.InfoWindow({
            content: '',
            //pixelOffset: 10
            });

        var marker151 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker151, 'click', function(){infowindow151.open(map,marker151);});
        var infowindow152 = new google.maps.InfoWindow({
            content: '',
            //pixelOffset: 10
            });

        var marker152 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker152, 'click', function(){infowindow152.open(map,marker152);});
        var infowindow153 = new google.maps.InfoWindow({
            content: '',
            //pixelOffset: 10
            });

        var marker153 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker153, 'click', function(){infowindow153.open(map,marker153);});
        var infowindow154 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker154 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker154, 'click', function(){infowindow154.open(map,marker154);});
        var infowindow155 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker155 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker155, 'click', function(){infowindow155.open(map,marker155);});
        var infowindow156 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker156 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker156, 'click', function(){infowindow156.open(map,marker156);});
        var infowindow157 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker157 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker157, 'click', function(){infowindow157.open(map,marker157);});
        var infowindow158 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker158 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker158, 'click', function(){infowindow158.open(map,marker158);});
        var infowindow159 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker159 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker159, 'click', function(){infowindow159.open(map,marker159);});
        var infowindow160 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker160 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker160, 'click', function(){infowindow160.open(map,marker160);});
        var infowindow161 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker161 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker161, 'click', function(){infowindow161.open(map,marker161);});
        var infowindow162 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker162 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker162, 'click', function(){infowindow162.open(map,marker162);});
        var infowindow163 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker163 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker163, 'click', function(){infowindow163.open(map,marker163);});
        var infowindow164 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker164 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker164, 'click', function(){infowindow164.open(map,marker164);});
        var infowindow165 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker165 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker165, 'click', function(){infowindow165.open(map,marker165);});
        var infowindow166 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker166 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker166, 'click', function(){infowindow166.open(map,marker166);});
        var infowindow167 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker167 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker167, 'click', function(){infowindow167.open(map,marker167);});
        var infowindow168 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker168 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker168, 'click', function(){infowindow168.open(map,marker168);});
        var infowindow169 = new google.maps.InfoWindow({
            content: '',
            //pixelOffset: 10
            });

        var marker169 = new google.maps.Marker({
        position: new google.maps.LatLng(),
         map: map,
                });

        google.maps.event.addListener(marker169, 'click', function(){infowindow169.open(map,marker169);});
        var infowindow170 = new google.maps.InfoWindow({
            content: '',
            //pixelOffset: 10
            });

        var marker170 = new google.maps.Marker({
        position: new google.maps.LatLng(),
         map: map,
                });

        google.maps.event.addListener(marker170, 'click', function(){infowindow170.open(map,marker170);});
        var infowindow171 = new google.maps.InfoWindow({
            content: 'a',
            //pixelOffset: 10
            });

        var marker171 = new google.maps.Marker({
        position: new google.maps.LatLng(),
         map: map,
                });

        google.maps.event.addListener(marker171, 'click', function(){infowindow171.open(map,marker171);});
        var infowindow172 = new google.maps.InfoWindow({
            content: 'Goodbye',
            //pixelOffset: 10
            });

        var marker172 = new google.maps.Marker({
        position: new google.maps.LatLng(40.7175049,-74.0135772),
         map: map,
                });

        google.maps.event.addListener(marker172, 'click', function(){infowindow172.open(map,marker172);});
        var infowindow173 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker173 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker173, 'click', function(){infowindow173.open(map,marker173);});
        var infowindow174 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker174 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker174, 'click', function(){infowindow174.open(map,marker174);});
        var infowindow175 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker175 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker175, 'click', function(){infowindow175.open(map,marker175);});
        var infowindow176 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker176 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker176, 'click', function(){infowindow176.open(map,marker176);});
        var infowindow177 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker177 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker177, 'click', function(){infowindow177.open(map,marker177);});
        var infowindow178 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker178 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker178, 'click', function(){infowindow178.open(map,marker178);});
        var infowindow179 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker179 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker179, 'click', function(){infowindow179.open(map,marker179);});
        var infowindow180 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker180 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker180, 'click', function(){infowindow180.open(map,marker180);});
        var infowindow181 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker181 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker181, 'click', function(){infowindow181.open(map,marker181);});
        var infowindow182 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker182 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker182, 'click', function(){infowindow182.open(map,marker182);});
        var infowindow183 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker183 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker183, 'click', function(){infowindow183.open(map,marker183);});
        var infowindow184 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker184 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker184, 'click', function(){infowindow184.open(map,marker184);});
        var infowindow185 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker185 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker185, 'click', function(){infowindow185.open(map,marker185);});
        var infowindow186 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker186 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker186, 'click', function(){infowindow186.open(map,marker186);});
        var infowindow187 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker187 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker187, 'click', function(){infowindow187.open(map,marker187);});
        var infowindow188 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker188 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker188, 'click', function(){infowindow188.open(map,marker188);});
        var infowindow189 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker189 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker189, 'click', function(){infowindow189.open(map,marker189);});
        var infowindow190 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker190 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker190, 'click', function(){infowindow190.open(map,marker190);});
        var infowindow191 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker191 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker191, 'click', function(){infowindow191.open(map,marker191);});
        var infowindow192 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker192 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker192, 'click', function(){infowindow192.open(map,marker192);});
        var infowindow193 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker193 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker193, 'click', function(){infowindow193.open(map,marker193);});
        var infowindow194 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker194 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker194, 'click', function(){infowindow194.open(map,marker194);});
        var infowindow195 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker195 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker195, 'click', function(){infowindow195.open(map,marker195);});
        var infowindow196 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker196 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker196, 'click', function(){infowindow196.open(map,marker196);});
        var infowindow197 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker197 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker197, 'click', function(){infowindow197.open(map,marker197);});
        var infowindow198 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker198 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker198, 'click', function(){infowindow198.open(map,marker198);});
        var infowindow199 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker199 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker199, 'click', function(){infowindow199.open(map,marker199);});
        var infowindow200 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker200 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker200, 'click', function(){infowindow200.open(map,marker200);});
        var infowindow201 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker201 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker201, 'click', function(){infowindow201.open(map,marker201);});
        var infowindow202 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker202 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker202, 'click', function(){infowindow202.open(map,marker202);});
        var infowindow203 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker203 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker203, 'click', function(){infowindow203.open(map,marker203);});
        var infowindow204 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker204 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker204, 'click', function(){infowindow204.open(map,marker204);});
        var infowindow205 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker205 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker205, 'click', function(){infowindow205.open(map,marker205);});
        var infowindow206 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker206 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker206, 'click', function(){infowindow206.open(map,marker206);});
        var infowindow207 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker207 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker207, 'click', function(){infowindow207.open(map,marker207);});
        var infowindow208 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker208 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker208, 'click', function(){infowindow208.open(map,marker208);});
        var infowindow209 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker209 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker209, 'click', function(){infowindow209.open(map,marker209);});
        var infowindow210 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker210 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker210, 'click', function(){infowindow210.open(map,marker210);});
        var infowindow211 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker211 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker211, 'click', function(){infowindow211.open(map,marker211);});
        var infowindow212 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker212 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker212, 'click', function(){infowindow212.open(map,marker212);});
        var infowindow213 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker213 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker213, 'click', function(){infowindow213.open(map,marker213);});
        var infowindow214 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker214 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker214, 'click', function(){infowindow214.open(map,marker214);});
        var infowindow215 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker215 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker215, 'click', function(){infowindow215.open(map,marker215);});
        var infowindow216 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker216 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker216, 'click', function(){infowindow216.open(map,marker216);});
        var infowindow217 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker217 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker217, 'click', function(){infowindow217.open(map,marker217);});
        var infowindow218 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker218 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker218, 'click', function(){infowindow218.open(map,marker218);});
        var infowindow219 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker219 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker219, 'click', function(){infowindow219.open(map,marker219);});
        var infowindow220 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker220 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker220, 'click', function(){infowindow220.open(map,marker220);});
        var infowindow221 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker221 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker221, 'click', function(){infowindow221.open(map,marker221);});
        var infowindow222 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker222 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker222, 'click', function(){infowindow222.open(map,marker222);});
        var infowindow223 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker223 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker223, 'click', function(){infowindow223.open(map,marker223);});
        var infowindow224 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker224 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker224, 'click', function(){infowindow224.open(map,marker224);});
        var infowindow225 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker225 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker225, 'click', function(){infowindow225.open(map,marker225);});
        var infowindow226 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker226 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker226, 'click', function(){infowindow226.open(map,marker226);});
        var infowindow227 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker227 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker227, 'click', function(){infowindow227.open(map,marker227);});
        var infowindow228 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker228 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker228, 'click', function(){infowindow228.open(map,marker228);});
        var infowindow229 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker229 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker229, 'click', function(){infowindow229.open(map,marker229);});
        var infowindow230 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker230 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker230, 'click', function(){infowindow230.open(map,marker230);});
        var infowindow231 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker231 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker231, 'click', function(){infowindow231.open(map,marker231);});
        var infowindow232 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker232 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker232, 'click', function(){infowindow232.open(map,marker232);});
        var infowindow233 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker233 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker233, 'click', function(){infowindow233.open(map,marker233);});
        var infowindow234 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker234 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker234, 'click', function(){infowindow234.open(map,marker234);});
        var infowindow235 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker235 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker235, 'click', function(){infowindow235.open(map,marker235);});
        var infowindow236 = new google.maps.InfoWindow({
            content: 'Doughnuts',
            //pixelOffset: 10
            });

        var marker236 = new google.maps.Marker({
        position: new google.maps.LatLng(0,0),
         map: map,
                });

        google.maps.event.addListener(marker236, 'click', function(){infowindow236.open(map,marker236);});
        var infowindow237 = new google.maps.InfoWindow({
            content: 'Blintzes',
            //pixelOffset: 10
            });

        var marker237 = new google.maps.Marker({
        position: new google.maps.LatLng(1,0),
         map: map,
                });

        google.maps.event.addListener(marker237, 'click', function(){infowindow237.open(map,marker237);});
        var infowindow238 = new google.maps.InfoWindow({
            content: 'Fried Food',
            //pixelOffset: 10
            });

        var marker238 = new google.maps.Marker({
        position: new google.maps.LatLng(0,1),
         map: map,
                });

        google.maps.event.addListener(marker238, 'click', function(){infowindow238.open(map,marker238);});
}

//Run the map
google.maps.event.addDomListener(window, 'load', initialize);
