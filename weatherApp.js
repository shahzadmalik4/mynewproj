function getWeather() {
    var cityInput = document.getElementById("cityInput").value;
    var cityName = document.getElementById("cityName");
    var weatherDescription = document.getElementById("weatherDescription");
    var temperature = document.getElementById("temperature");
    var humidity = document.getElementById("humidity");
    var resultDiv = document.querySelector(".result");

    if (cityInput.toLowerCase() === "karachi") {
        cityName.innerText = "Karachi";
        weatherDescription.innerText = "Cloudy";
        temperature.innerText = "18C";
        humidity.innerText = "medium";
    }
    else if(cityInput.toLowerCase() === "lahore") {

        cityName.innerText = "Lahore";
        weatherDescription.innerText = "Clear Sky";
        temperature.innerText = "28C";
        humidity.innerText = "medium";

    }
    else if(cityInput.toLowerCase() === "hyderabad") {

        cityName.innerText = "Hyderabad";
        weatherDescription.innerText = "rainy";
        temperature.innerText = "23C";
        humidity.innerText = "medium";

    }
    else{

        cityName.innerText = "City Not Found";
        weatherDescription.innerText = "";
        temperature.innerText = "";
        humidity.innerText = "";
        

    }

    resultDiv.style.display = "block"
  

}
