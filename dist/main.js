// const apiKey = config.MY_KEY;
const url = "http://api.weatherapi.com/v1/current.json";
const cityName = document.querySelector(".city__name");
const date = document.querySelector(".date");
const weatherDegree = document.querySelector(".degree");
const weatherConditionImage = document.querySelector(".weather__condition-img");
const weatherDescription = document.querySelector(".weather__condition-des");
const searchField = document.getElementById("search");
const btn = document.querySelector("#btn");
const previousSearchStrings = document.querySelector(".previous");
const weatherConditon = document.querySelector(".weather__condition");
const weatherMoisture = document.querySelector(".weather__moisture");
const windSpeed = document.querySelector(".wind__speed");
const latitude = document.querySelector(".latitude");
const longitude = document.querySelector(".longitude");
const place = "Lagos";

// Search Array
let searchQueries = getSavedTerms();

// Random ID generator
// dec2hex :: Integer -> String
// i.e. 0-255 -> '00'-'ff'
function dec2hex(dec) {
  return dec.toString(16).padStart(2, "0");
}

// generateId :: Integer -> String
function generateId(len) {
  let arr = new Uint8Array((len || 40) / 2);
  window.crypto.getRandomValues(arr);
  return Array.from(arr, dec2hex).join("");
}

// const fetchData = () => {
//   return fetch(`${url}?key=${apiKey}&q=${place}`, {})
//     .then((response) => {
//       if (response.status === 200) {
//         return response.json();
//       }
//     })
//     .then((data) => {
//       return data;
//     })
//     .then((some) => {
//       return some.current;
//     })
//     .catch((err) => console.log("Whats happening?"));
// };

function saveTerm(query) {
  const queries = localStorage.getItem("queries")

  try {
    return queries ? JSON.parse(queries, (key, value) => {
      if (query.includes(value)) {
        throw new Error
      }
    }) : [];
  } catch (error) {
    return []
  }
  // Save search term to local storage
  // localStorage.setItem("queries", JSON.stringify(query));
}

function getSavedTerms() {
  const queries = localStorage.getItem("queries");

  try {
    return queries ? JSON.parse(queries) : [];
  } catch (e) {
    return [];
  }

}

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (searchField.value === "") {
    return;
  } else {
    // Add recent search term to array
    const id = generateId(10);
    searchQueries.push({
      id: id,
      searchTerm: searchField.value,
    });

    saveTerm(searchQueries)
    
    console.log(searchQueries)
  }
});

// console.log(getSavedTerms())
// localStorage.clear()
