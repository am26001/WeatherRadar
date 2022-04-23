// follow JS guidelines
"use strict";

// execute upon opening burger menu
function openBurgerMenu() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";  
}

// execute upon closing burger menu
function closeBurgerMenu() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

/* API Doc: 
https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} 
city name = Denver, API key = 5b2929df6ca27ae27113782edc1615c4 

"Temperature is available in Fahrenheit, Celsius and Kelvin units.
For temperature in Fahrenheit use units=imperial
For temperature in Celsius use units=metric
Temperature in Kelvin is used by default, no need to use units parameter in API call"

*/
let weather = {
  apiKey: "5b2929df6ca27ae27113782edc1615c4",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found for location, try again.");
          throw new Error("No weather found for location, try again.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, feels_like, temp_min, temp_max, pressure, humidity } = data.main;
    const { speed, deg } = data.wind;
    document.querySelector(".location").innerHTML = name;
    document.querySelector(".degrees").innerHTML = temp + " °F";
    document.querySelector(".imageDescription").src = 
        "http://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".wordDescription").innerText = description;
    document.querySelector(".weather").classList.remove("loading");
    // get location images from https://unsplash.com/developers
    document.querySelector("#wrapper").style.backgroundImage =  "url('https://source.unsplash.com/1600x900/?" + name + "')";
    document.querySelector(".currTemp").innerHTML = "Temperature: " + temp + " °F ";
    document.querySelector(".currFeelsLike").innerHTML = "Feels Like: " + feels_like + " °F";
    document.querySelector(".currTempMin").innerHTML = "Minimum Temperature: " + temp_min + " °F";
    document.querySelector(".currTempMax").innerHTML = "Maximum Temperature: " + temp_max + " °F";
    document.querySelector(".currPressure").innerHTML = "Atmospheric Pressure: " + pressure + " hPa";
    document.querySelector(".currHumidity").innerHTML = "Humidity: " + humidity + " %";
    document.querySelector(".currWindSpeed").innerHTML = "Wind Speed: " + speed + " mph";
    document.querySelector(".currWindDirection").innerHTML = "Wind direction: " + deg + " °";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".submitBar button").addEventListener("click", function () {
  weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
  if(event.key == "Enter") {
    weather.search();
  }
});

// once page has loaded, make Denver default location
weather.fetchWeather("Chicago");
