const apiKey = "6129ecbd2d564830bae202348221801";
const url = "http://api.weatherapi.com/v1/current.json";
const cityName = document.querySelector(".city__name");
const date = document.querySelector(".date");
const weatherDegree = document.querySelector(".degree");
const weatherConditionImage = document.querySelector(".weather__condition-img");
const weatherDescription = document.querySelector(".weather__condition-des");
const searchField = document.getElementById("search").value;
const btn = document.querySelector("#btn");
const previousSearchStrings = document.querySelector(".previous");
const weatherConditon = document.querySelector(".weather__condition");
const weatherMoisture = document.querySelector(".weather__moisture");
const windSpeed = document.querySelector(".wind__speed");
const latitude = document.querySelector(".latitude");
const longitude = document.querySelector(".longitude");
const place = "Lagos";

const fetchData = () => {
  return fetch(`${url}?key=${apiKey}&q=${place}`, {})
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
    })
    .then((data) => {
      return data;
    })
    .then((some) => {
      return some.current;
    })
    .catch((err) => console.log("Whats happening?"));
};

const allData = fetchData()

console.log(allData)
