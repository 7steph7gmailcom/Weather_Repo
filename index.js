const apikey = "86ea8aa56587bcd972b7b5efee08d7db";
const baseurl = "https://openweathermap.org/api/one-call-api";


const searchbox = document.querySelector(".search-box");
searchbox.addEventListener("keypress", setQuery);

function setQuery(event) {  
    if (event.keyCode == 13) {
        // getResults(searchbox.value);
        console.log(searchbox.value)
    }
}