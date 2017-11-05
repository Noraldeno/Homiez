function initMap() {
	var latitude = parseFloat($("#map").data('lat'));
	var longitude = parseFloat($("#map").data('long'));
    var pos = {lat: latitude, lng: longitude};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: pos
    });
    var marker = new google.maps.Marker({
        position: pos,
        map: map
    });
}
