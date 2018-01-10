let selectedCity = document.getElementById("ddCities");

let cityName;
let longitude,latitude;
let coordinates;
let city;
let weather;
let p;
let results;
const API_KEY = '6e178146447d4c49019dcd861505369d';

selectedCity.addEventListener("change",()=> {
        console.log(selectedCity.options[selectedCity.selectedIndex].value),
        cityName = selectedCity.options[selectedCity.selectedIndex].value,
            getWeatherFromApi();
    })

function getWeatherFromApi(){
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&APPID="+API_KEY+"",
        crossDomain: true,
        success: function (weatherData) {
            console.log(weatherData);
            setWeather(weatherData);
        }
    });
}
function setWeather(weatherData){
    let rain = weatherData.weather.find(x=> x.main == "Rain");
    if(rain != undefined)
        rain = rain.description;
    else
        rain = 'none';
    weather = new Weather(weatherData.main.humidity,rain,weatherData.main.temp,weatherData.clouds.all);
    setCity(weather);
}
function setCity(weather){
    city = new City(cityName,weather);
    console.log(city);
    document.getElementById("lbl-selected-city").innerHTML = city.name;
    document.getElementById("lbl-humidity").innerHTML = city.weather.humidity;
    document.getElementById("lbl-temperature").innerHTML = city.weather.temperature;
    document.getElementById("lbl-rain").innerHTML = city.weather.rain;
    document.getElementById("lbl-clouds").innerHTML = city.weather.clouds;
    markSelectedCity(city.name);
}
initMapObject();
setAllMarkers();


