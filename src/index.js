function citySearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-name-input");
  let cityElement = document.querySelector("#city-name");
  cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", citySearch);
