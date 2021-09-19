const apiKey = "86ea8aa56587bcd972b7b5efee08d7db";
const base = "https//api.openweathermap.org/data/2.5/forecast";


const searchbox = document.querySelector(".search-box");
searchbox.addEventListener("keypress", startQuery);

function startQuery(event) {  
    if (event.keyCode == 13) {
        getResults(searchbox.value);
        console.log(searchbox.value)
    }
}

// function getResults (query) {
//     fetch("${api.base}weather?q=${query}&units=fehrenheit&APPID=${api.key}")
//     .then(weather => {
//         return weather.json();
//     }).then(showResults);
// }

// function showResults (weather) {
//     console.log(weather);
// }

let currentWeather = {
    fetchWeather: function () {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
        )
    .then(data) => respond.json())
    .then(data) => console.log(data);
    
},

displayWeather: function (data) {
    const { name } = data;
    const { icon, description  } = data.weather;
    const { temp, humidity } = data.main;
    const { speed } = data.wind; 
    console.logc(name, icon, temp, humidity, speed);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°F";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity %;
    document.querySelector(".wind").innerText = "Wind Speed: " + speed + " ml/h ";
}                                             