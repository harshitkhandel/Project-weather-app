 const apiKey = "0025d100ed261251e4615dc1a53f447a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector("search button")
async function  checkWeather(city) {
    const response = await fetch(apiUrl  + city +`&appid=${apiKey}`);
    
    let data = await response.json();
    
    console.log(data);
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp"
      
    ).innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wimd.speed + " km";
}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
}) 