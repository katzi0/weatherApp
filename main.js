var selectedCity = document.getElementById("ddCities");

let city;
selectedCity.addEventListener("change",()=> {
       console.log(selectedCity.options[selectedCity.selectedIndex].value),
       this.city = selectedCity.options[selectedCity.selectedIndex].value,
       console.log(this.city),
       document.getElementById("selected-city").innerHTML = this.city;
});


