function searchCity(city) {
  let apiKey = "5fftb729a03o1b248f0ff72a8832d43e";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  console.log(apiURL);
}

function submitSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-name-input");
  let cityElement = document.querySelector("#city-name");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", submitSearch);
