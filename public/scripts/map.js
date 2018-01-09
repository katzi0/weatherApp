// let mymap = L.map('mapid').setView([51.505, -0.09], 13);
// let mymap = L.map('mapid').setView([51.505, -0.09], 13);
let marker;
let citiesArr = ["Madrid","London","Tel Aviv","Paris","Rome","Moscow","Manchester","Barcelona","Napoli","New York"];
let citiesCoordinatesArr = [];
let singleCityMap = {name:"",lng:"",lat:""};
let mymap;

citiesCoordinatesArr = [
    {name:"Madrid",lng:"-3.7037901999999576lat",lat:"40.4167754",isSelected:false},
    {name:"London",lng:"-0.12775829999998223",lat:"51.5073509",isSelected:false},
    {name:"Tel Aviv",lng:"34.78176759999997",lat:"32.0852999",isSelected:false},
    {name:"Paris ",lng:"2.3522219000000177",lat:"48.856614",isSelected:false},
    {name:"Rome ",lng:"12.496365500000024",lat:"41.9027835",isSelected:false},
    {name:"Moscow ",lng:"37.617299900000035",lat:"55.755826",isSelected:false},
    {name:"Manchester ",lng:"-2.2426305000000184",lat:"53.4807593",isSelected:false},
    {name:"Barcelona ",lng:"2.1734034999999494",lat:"41.3850639",isSelected:false},
    {name:"Napoli ",lng:"14.268124400000033",lat:"40.8517746",isSelected:false},
    {name:"New York",lng:"-74.0059728",lat:"40.7127753",isSelected:false}
];

function initMapObject(){
    mymap = L.map('mapid').setView([51.505, -0.09], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,

        id: 'mapbox.streets'
    }).addTo(mymap);
}


function setAllMarkers(){
         citiesCoordinatesArr.forEach(city => marker = L.marker([ parseFloat(city.lat),parseFloat(city.lng)]).addTo(mymap));
}

function markSelectedCity(cityName){
    citiesCoordinatesArr.forEach(city => city.isSelected = false);
    let index = citiesCoordinatesArr.findIndex(city => city.name.trim() == cityName.trim());
    // let selectdCity = citiesCoordinatesArr.find(city => city.name == cityName);
    // selectedCity.isSelected = true;
    citiesCoordinatesArr[index].isSelected = true;
    console.log(citiesCoordinatesArr);
    mymap.flyTo([citiesCoordinatesArr[index].lat, citiesCoordinatesArr[index].lng], 13);
    L.marker([citiesCoordinatesArr[index].lat, citiesCoordinatesArr[index].lng],{icon: greenIcon}).addTo(mymap);
    L.marker([citiesCoordinatesArr[index].lat, citiesCoordinatesArr[index].lng],{icon: greenIcon}).addTo(mymap);

}



var greenIcon = L.icon({
    iconUrl: 'images/placeholder.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

// var myMaptwo = L.map('mapidtwo').setView([51.505, -0.09], 13);



// citiesArr.forEach(city=> {
//     fillCityData(city),citiesCoordinatesArr.push(singleCityMap)
// });
//
//
// function fillCityData(city){
//     let coordinates = getCoordinats(city);
// //     if(coordinates){
// //     singleCityMap.lat = coordinates.lat;
// //     singleCityMap.lng = coordinates.lng;
// //     singleCityMap.namw = city;
// // }
// }