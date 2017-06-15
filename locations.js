var locations = [
  	{
		"name": "Umi Saki House",
		"lat": 47.6133383, 
		"lng": -122.3482741,
		"zoom": 17
	},
	{
		"name": "Tabata Soul March 12th",
		"lat": 47.6639318,
		"lng": -122.30168944,
		"zoom": 17
	},
	{
		"name": "Sweat and Stretch Feb 5th",
		"lat": 47.6802385, 
		"lng": -122.3283617,
		"zoom": 17
	}, 
	{
		"name": "Pop Up Fit Class Jan 28th",
		"lat": 47.6898932, 
		"lng": -122.3173902,
		"zoom": 17
    }];

var map;

function initMap() {
	map = new google.maps.Map($('#map')[0], {
		center: {lat: 47.607472, lng: -122.3484462},
		zoom: 8
	});

	createMarkers();
}

function createMarkers() {
	$.each(locations, function (index, value) {
		var marker = new google.maps.Marker({
        	position: { lat: value.lat, lng: value.lng }});
		
		marker.setMap(map);

		var infoWindow = new google.maps.InfoWindow({
        	content: value.name });
	
		marker.addListener( 'click', function( ) {
        	infoWindow.open( map, marker );
        });
	});
}

$('#sushi').on('change', changeCenter);

function changeCenter() {
	var place = $(this).val();
	var location = $.grep(locations, function (n, i) {
		return n.name == place;
	})[0];

	if(location) {
		map.setCenter({lat: location.lat, lng: location.lng});
		map.setZoom(location.zoom);	
	}
	
}