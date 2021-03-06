import getResults_country from "./countries-browser.js";
import dataIP from "./geoLocation.js";

//getting IP adress to get geoLocation
fetch(`https://api64.ipify.org?format=json`)
  .then((IP) => IP.json())
  .then((IP) => dataIP(IP));

//Country browser
const searchBox = document.querySelector(".search-box");
searchBox.addEventListener("keypress", setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults_country(searchBox.value);
  }
}