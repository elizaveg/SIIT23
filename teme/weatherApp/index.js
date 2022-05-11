let state = {
    currentWeatherDataBase: "https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=",

    weatherIcon: "http://openweathermap.org/img/w/",

    forecastWeather: "https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=",
}
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
                <img src="http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png"/><br />
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
    let input = document.querySelector('[name="city"]').value;
    input = input.toLowerCase();
    
    const response = await fetch(state.forecastWeather + input);
     weatherForecast = await response.json();

    let weatherDataText = document.querySelector("#weatherCityForecast");

    var str = "";
        str += ` 
                <div><h3>Weather Forcast</h3></div>
                <div>
                <div class="scrollmenu" style="display:flex;">
                <hr>
                <div>
                    <span>${weatherForecast.list[0].dt_txt}</span><br />
                    <img src="http://openweathermap.org/img/w/${weatherForecast.list[0].weather[0].icon}.png"</img><br />
                    <span>${weatherForecast.list[0].weather[0].description}</span><br />
                    <span>Clouds: ${weatherForecast.list[0].clouds.all}</span><br />
                    <span>Temp: ${weatherForecast.list[0].main.temp}</span><br />
                    <span>Feels like: ${weatherForecast.list[0].main.feels_like}</span><br />
                    <span>Temp min: ${weatherForecast.list[0].main.temp_min}</span><br />
                    <span>Temp max: ${weatherForecast.list[0].main.temp_max}</span><br />
                    <span>Pressure: ${weatherForecast.list[0].main.pressure}</span><br />
                </div>
                <span>Data: ${weatherForecast.list[0].dt_txt}</span><br />
                <span>Data: ${weatherForecast.list[0].dt_txt}</span><br />
                <span>Data: ${weatherForecast.list[0].dt_txt}</span><br />

            </div>
        `;
weatherDataText.innerHTML = str;
}
