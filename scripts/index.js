// Day and Time
function currentDate(timestamp) {
  let date = new Date(timestamp);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let hour = date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = date.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  return `${day} ${hour}:${minute}`;
}

function dayForcast(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day}`;
}

let now = new Date();
let day2Date = new Date();
day2Date.setDate(now.getDate() + 1);
let day3Date = new Date();
day3Date.setDate(now.getDate() + 2);
let day4Date = new Date();
day4Date.setDate(now.getDate() + 3);
let day5Date = new Date();
day5Date.setDate(now.getDate() + 4);
document.querySelector("#day-1").innerHTML = dayForcast(now);
document.querySelector("#day-2").innerHTML = dayForcast(day2Date);
document.querySelector("#day-3").innerHTML = dayForcast(day3Date);
document.querySelector("#day-4").innerHTML = dayForcast(day4Date);
document.querySelector("#day-5").innerHTML = dayForcast(day5Date);

// Geolocation on Page Load
searchCity("New York");

// Geolocation Button
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(currentWeather);
}

function currentWeather(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "f9c046b1b7ef564f01a2cb6705a569e7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}

let currentWeatherButton = document.querySelector("#current-weather-button");
currentWeatherButton.addEventListener("click", getCurrentLocation);

// City Search
function citySearchInput(event) {
  event.preventDefault();
  let city = document.querySelector("#city-search-input").value;
  searchCity(city);
}

function searchCity(city) {
  let apiKey = "f9c046b1b7ef564f01a2cb6705a569e7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}

let citySearchForm = document.querySelector("#city-search-form");
citySearchForm.addEventListener("submit", citySearchInput);

let searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", citySearchInput);

// Weather API
function showTemperature(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document
    .querySelector("#current-weather-icon")
    .setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`
    );
  document
    .querySelector("#current-weather-icon")
    .setAttribute("alt", response.data.weather[0].description);
  document.querySelector("#weather-condition").innerHTML =
    response.data.weather[0].description;
  document.querySelector("#current-temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#feels-like").innerHTML = Math.round(
    response.data.main.feels_like
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document
    .querySelector("#day-1-icon")
    .setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`
    );
  document
    .querySelector("#day-1-icon")
    .setAttribute("alt", response.data.weather[0].description);
  document
    .querySelector("#day-2-icon")
    .setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`
    );
  document
    .querySelector("#day-2-icon")
    .setAttribute("alt", response.data.weather[0].description);
  document
    .querySelector("#day-3-icon")
    .setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`
    );
  document
    .querySelector("#day-3-icon")
    .setAttribute("alt", response.data.weather[0].description);
  document
    .querySelector("#day-4-icon")
    .setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`
    );
  document
    .querySelector("#day-4-icon")
    .setAttribute("alt", response.data.weather[0].description);
  document
    .querySelector("#day-5-icon")
    .setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`
    );
  document
    .querySelector("#day-5-icon")
    .setAttribute("alt", response.data.weather[0].description);
  document.querySelector("#day1-low").innerHTML = Math.round(
    response.data.main.temp_min
  );
  document.querySelector("#day1-high").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector("#day2-low").innerHTML = Math.round(
    response.data.main.temp_min
  );
  document.querySelector("#day2-high").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector("#day3-low").innerHTML = Math.round(
    response.data.main.temp_min
  );
  document.querySelector("#day3-high").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector("#day4-low").innerHTML = Math.round(
    response.data.main.temp_min
  );
  document.querySelector("#day4-high").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector("#day5-low").innerHTML = Math.round(
    response.data.main.temp_min
  );
  document.querySelector("#day5-high").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector("#updated-date").innerHTML = currentDate(
    response.data.dt * 1000
  );
}

// C to F conversion
function switchToFahrenheit(event) {
  event.preventDefault();
  let fahrenheitActive = document.querySelector("#fahrenheit");
  let celciusInactive = document.querySelector("#celcius");
  let temperatureElement = document.querySelector("#current-temp");
  let temperature = temperatureElement.innerHTML;
  temperature = Number(temperature);
  temperatureElement.innerHTML = Math.round(temperature * 1.8 + 32);
  fahrenheitActive.classList.remove("inactive-unit");
  fahrenheitActive.classList.add("active-unit");
  celciusInactive.classList.add("inactive-unit");

  let feelsLikeElement = document.querySelector("#feels-like");
  let feelsLike = feelsLikeElement.innerHTML;
  feelsLike = Number(feelsLike);
  feelsLikeElement.innerHTML = Math.round(feelsLike * 1.8 + 32);
  document.querySelector("#feels-like-temp").innerHTML = "°F";

  let windElement = document.querySelector("#wind");
  let wind = windElement.innerHTML;
  wind = Number(wind);
  windElement.innerHTML = Math.round(wind / 1.609);
  document.querySelector("#wind-speed").innerHTML = "mph";

  let day1LowElement = document.querySelector("#day1-low");
  let day1Low = day1LowElement.innerHTML;
  day1Low = Number(day1Low);
  day1LowElement.innerHTML = Math.round(day1Low * 1.8 + 32);
  let day1HighElement = document.querySelector("#day1-high");
  let day1High = day1HighElement.innerHTML;
  day1High = Number(day1High);
  day1HighElement.innerHTML = Math.round(day1High * 1.8 + 32);
  document.querySelector("#day1-low-unit").innerHTML = "°F";
  document.querySelector("#day1-high-unit").innerHTML = "°F";

  let day2LowElement = document.querySelector("#day2-low");
  let day2Low = day2LowElement.innerHTML;
  day2Low = Number(day2Low);
  day2LowElement.innerHTML = Math.round(day2Low * 1.8 + 32);
  let day2HighElement = document.querySelector("#day2-high");
  let day2High = day2HighElement.innerHTML;
  day2High = Number(day2High);
  day2HighElement.innerHTML = Math.round(day2High * 1.8 + 32);
  document.querySelector("#day2-low-unit").innerHTML = "°F";
  document.querySelector("#day2-high-unit").innerHTML = "°F";

  let day3LowElement = document.querySelector("#day3-low");
  let day3Low = day3LowElement.innerHTML;
  day3Low = Number(day3Low);
  day3LowElement.innerHTML = Math.round(day3Low * 1.8 + 32);
  let day3HighElement = document.querySelector("#day3-high");
  let day3High = day3HighElement.innerHTML;
  day3High = Number(day3High);
  day3HighElement.innerHTML = Math.round(day3High * 1.8 + 32);
  document.querySelector("#day3-low-unit").innerHTML = "°F";
  document.querySelector("#day3-high-unit").innerHTML = "°F";

  let day4LowElement = document.querySelector("#day4-low");
  let day4Low = day4LowElement.innerHTML;
  day4Low = Number(day4Low);
  day4LowElement.innerHTML = Math.round(day4Low * 1.8 + 32);
  let day4HighElement = document.querySelector("#day4-high");
  let day4High = day4HighElement.innerHTML;
  day4High = Number(day4High);
  day4HighElement.innerHTML = Math.round(day4High * 1.8 + 32);
  document.querySelector("#day4-low-unit").innerHTML = "°F";
  document.querySelector("#day4-high-unit").innerHTML = "°F";

  let day5LowElement = document.querySelector("#day5-low");
  let day5Low = day5LowElement.innerHTML;
  day5Low = Number(day5Low);
  day5LowElement.innerHTML = Math.round(day5Low * 1.8 + 32);
  let day5HighElement = document.querySelector("#day5-high");
  let day5High = day5HighElement.innerHTML;
  day5High = Number(day5High);
  day5HighElement.innerHTML = Math.round(day5High * 1.8 + 32);
  document.querySelector("#day5-low-unit").innerHTML = "°F";
  document.querySelector("#day5-high-unit").innerHTML = "°F";
}

function switchToCelcius(event) {
  event.preventDefault();
  let celciusActive = document.querySelector("#celcius");
  let fahrenheitInactive = document.querySelector("#fahrenheit");
  let temperatureElement = document.querySelector("#current-temp");
  let temperature = temperatureElement.innerHTML;
  temperature = Number(temperature);
  temperatureElement.innerHTML = Math.round((temperature - 32) / 1.8);
  celciusActive.classList.remove("inactive-unit");
  celciusActive.classList.add("active-unit");
  fahrenheitInactive.classList.add("inactive-unit");

  let feelsLikeElement = document.querySelector("#feels-like");
  let feelsLike = feelsLikeElement.innerHTML;
  feelsLike = Number(feelsLike);
  feelsLikeElement.innerHTML = Math.round((feelsLike - 32) / 1.8);
  document.querySelector("#feels-like-temp").innerHTML = "°C";

  let windElement = document.querySelector("#wind");
  let wind = windElement.innerHTML;
  wind = Number(wind);
  windElement.innerHTML = Math.round(wind * 1.609);
  document.querySelector("#wind-speed").innerHTML = "km/h";

  let day1LowElement = document.querySelector("#day1-low");
  let day1Low = day1LowElement.innerHTML;
  day1Low = Number(day1Low);
  day1LowElement.innerHTML = Math.round((day1Low - 32) / 1.8);
  let day1HighElement = document.querySelector("#day1-high");
  let day1High = day1HighElement.innerHTML;
  day1High = Number(day1High);
  day1HighElement.innerHTML = Math.round((day1High - 32) / 1.8);
  document.querySelector("#day1-low-unit").innerHTML = "°C";
  document.querySelector("#day1-high-unit").innerHTML = "°C";

  let day2LowElement = document.querySelector("#day2-low");
  let day2Low = day1LowElement.innerHTML;
  day2Low = Number(day2Low);
  day2LowElement.innerHTML = Math.round((day2Low - 32) / 1.8);
  let day2HighElement = document.querySelector("#day2-high");
  let day2High = day2HighElement.innerHTML;
  day2High = Number(day2High);
  day2HighElement.innerHTML = Math.round((day2High - 32) / 1.8);
  document.querySelector("#day2-low-unit").innerHTML = "°C";
  document.querySelector("#day2-high-unit").innerHTML = "°C";

  let day3LowElement = document.querySelector("#day3-low");
  let day3Low = day3LowElement.innerHTML;
  day3Low = Number(day3Low);
  day3LowElement.innerHTML = Math.round((day3Low - 32) / 1.8);
  let day3HighElement = document.querySelector("#day3-high");
  let day3High = day3HighElement.innerHTML;
  day3High = Number(day3High);
  day3HighElement.innerHTML = Math.round((day3High - 32) / 1.8);
  document.querySelector("#day3-low-unit").innerHTML = "°C";
  document.querySelector("#day3-high-unit").innerHTML = "°C";

  let day4LowElement = document.querySelector("#day4-low");
  let day4Low = day4LowElement.innerHTML;
  day4Low = Number(day4Low);
  day4LowElement.innerHTML = Math.round((day4Low - 32) / 1.8);
  let day4HighElement = document.querySelector("#day4-high");
  let day4High = day4HighElement.innerHTML;
  day4High = Number(day4High);
  day4HighElement.innerHTML = Math.round((day4High - 32) / 1.8);
  document.querySelector("#day4-low-unit").innerHTML = "°C";
  document.querySelector("#day4-high-unit").innerHTML = "°C";

  let day5LowElement = document.querySelector("#day5-low");
  let day5Low = day5LowElement.innerHTML;
  day5Low = Number(day5Low);
  day5LowElement.innerHTML = Math.round((day5Low - 32) / 1.8);
  let day5HighElement = document.querySelector("#day5-high");
  let day5High = day5HighElement.innerHTML;
  day5High = Number(day5High);
  day5HighElement.innerHTML = Math.round((day5High - 32) / 1.8);
  document.querySelector("#day5-low-unit").innerHTML = "°C";
  document.querySelector("#day5-high-unit").innerHTML = "°C";
}

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", switchToFahrenheit);

let celcius = document.querySelector("#celcius");
celcius.addEventListener("click", switchToCelcius);
