let state = {
    currentWeatherDataBase: "https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=",

    weatherIcon: "https://openweathermap.org/img/w/",

    forecastWeather: "https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=",
};
let data = {};

async function getData() {
    let input = document.querySelector('[name="city"]').value;
    input = input.toLowerCase();

    const response = await fetch(state.currentWeatherDataBase + input);
    weatherData = await response.json();

    let weatherDataText = document.querySelector("#weatherCityInformation");
    var str = "";
    str += `
            <div>
                <h3>Weather now in ${input}</h3>
                <hr>
                <img src="https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png"/><br />
                <span>${weatherData.weather[0].description}</span><br />
                <span>Humidity: ${weatherData.main.humidity}%</span><br />
                <span>Pressure: ${weatherData.main.pressure}hPa</span><br />
                <span>Temperatura curenta: ${weatherData.main.temp}</span><br />
                <span>Minima zilei: ${weatherData.main.temp_min}</span><br />
                <span>Maxima zilei: ${weatherData.main.temp_max}</span>
            </div><br />
            <div>
                <iframe
                  width="600"
                  height="450"
                  style="border:0"
                  loading="lazy"
                  allowfullscreen
                  referrerpolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD5KGsTZInxUqBJ1xwdG57EfEl8X-b2LLg&q=Space+Needle,Seattle+WA">
                </iframe>
            </div>
            `;

    weatherDataText.innerHTML = str;
}

async function forecast() {
    let input = document.querySelector('input[type="text"').value;
    input = input.toLowerCase();

    const response = await fetch(state.forecastWeather + input);
    weatherForecast = await response.json();
    console.log(weatherForecast);
    let weatherForecastText = document.querySelector("#weatherCityForecast");
    var str = "";
    str += ` 
                <div class="scrollmenu" style="display:flex;">
                <hr>
                <div>
                    <span>${weatherForecast.dt_txt}</span><br />
                    <img src="https://openweathermap.org/img/w/${weatherForecast.icon}.png"</img><br />
                    <span>${weatherForecast["description"]}</span><br />
                    <span>Clouds: ${weatherForecast.all}</span><br />
                    <span>Temp: ${weatherForecast.temp}</span><br />
                    <span>Feels like: ${weatherForecast.feels_like}</span><br />
                    <span>Temp min: ${weatherForecast.temp_min}</span><br />
                    <span>Temp max: ${weatherForecast.temp_max}</span><br />
                    <span>Pressure: ${weatherForecast.pressure}</span><br />
                </div>
                <span>Data: ${weatherForecast.dt_txt}</span><br />
                <span>Data: ${weatherForecast.dt_txt}</span><br />
                <span>Data: ${weatherForecast.dt_txt}</span><br />
        `;
    weatherForecastText.innerHTML = str;
}
