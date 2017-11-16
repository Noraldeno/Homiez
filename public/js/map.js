function initMap() {
    var pos = {lat: -34.397, lng: 150.644};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: pos
    });

    var geocoder = new google.maps.Geocoder();

    var address = $("#map").data('address');
    console.log(address);
    geocoder.geocode({'address': address}, function(results, status){
        if (status === 'OK'){
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
        }
        else{
            alert('Geocode was not successful for the following reason ' + status);
        }
    });
}

function geocodeAddress(geocoder, resultsMap){
    var address = $("#map").data('address');
    console.log(address);
    geocoder.geocode({'address': address}, function(results, status){
        if (status === 'OK'){
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location
            });
        }
        else{
            alert('Geocode was not successful for the following reason ' + status);
        }
    });
}