function getCoordinats(address) {
    // var address = 'Tel Aviv, IL';
    let coordinates = [];
    let geocoder = new google.maps.Geocoder();

    let results = geocoder.geocode({
        address
    }, function(results, status) {

        if (status == google.maps.GeocoderStatus.OK) {
            coordinates.push({lat:results[0].geometry.location.lat()});
            coordinates.push({lng:results[0].geometry.location.lng()});
            console.log("address: "+address+" long:"+results[0].geometry.location.lng()+"lat: "+results[0].geometry.location.lat());
        } else {
            alert("Something got wrong " + status);
        }
        return coordinates;
    });
    return results;
}

//
// let coordinatesPromise = new Promise((resolve,reject) => {
//     let address = "haifa";
//     let geocoder = new google.maps.Geocoder();
//     let results = geocoder.geocode({
//         address
//     }, function(results, status) {
//         let coordinates = [];
//         if (status == google.maps.GeocoderStatus.OK) {
//             coordinates.push({lat:results[0].geometry.location.lat()});
//             coordinates.push({lng:results[0].geometry.location.lng()});
//             resolve(coordinates);
//         } else {
//             reject("Something got wrong " + status);
//         }
//     });
// })