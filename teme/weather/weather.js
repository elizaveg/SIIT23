var URL_CURRENT_WEATHER = 
"https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";

var URL_FORECAST_WEATHER = 
"https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";

var URL_WEATHER_ICON_PREFIX = "http://openweathermap.org/img/w/"; // sufix .png

/*let weatherData = {};

async function weatherIn() {
    let cityInput = document.querySelector("[name='search']").value;
    cityInput = cityInput.toLowerCase();

    const response = await fetch(URL_CURRENT_WEATHER + cityInput);
    weatherData = await response.json();

    let weatherInfo = document.querySelector(".textData");
    let str = "";


    str = `
    <img src="" alt=""  />
     `
}
*/

async function getDataTime() {
    let url = await fetch("https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=");

    let city = document.querySelector('
[name="city]').value;
for (let [i, ])
 
}