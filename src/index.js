function getWeatherData(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temp-value");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  let humidityElement = document.querySelector("#humidity-value");
  humidityElement.innerHTML = response.data.temperature.humidity;
  let windElement = document.querySelector("#wind-value");
  windElement.innerHTML = Math.round(response.data.wind.speed);
  let pressureElement = document.querySelector("#pressure-value");
  pressureElement.innerHTML = response.data.temperature.pressure;
  let cityElement = document.querySelector("#city-name");
  cityElement.innerHTML = response.data.city;
}

function searchCity(city) {
  let apiKey = "5fftb729a03o1b248f0ff72a8832d43e";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiURL).then(getWeatherData);
}

function submitSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-name-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", submitSearch);

searchCity("London");
