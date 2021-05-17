import './reset.css';
import './style.css';

const apiKey = process.env.API_KEY;

const img = document.querySelector(".weather-icon");
const nameLocation = document.querySelector(".location");
const temp = document.querySelector(".temp");
const maxTemp = document.querySelector(".max-temp");
const minTemp = document.querySelector(".min-temp");
const input = document.querySelector("input");
const searchBtn = document.querySelector("button");

searchBtn.addEventListener("click", showWeather)

async function fetchWeatherDatafor(location) {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
  const response = await fetch(url);
  return await response.json();
}

function displayWeatherData(data) {
  const weatherInfo = data.weather[0];
  const temperatures = data.main
  const iconCode = weatherInfo.icon
  
  nameLocation.textContent = data.name;
  temp.textContent = `${Math.round(Number(temperatures.temp))}°`;
  maxTemp.textContent = `${Math.round(Number(temperatures.temp_max))}°`;
  minTemp.textContent = `${Math.round(Number(temperatures.temp_min))}°`;
  img.src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
  img.alt = weatherInfo.description;
}

async function showWeather() {
  let location = input.value || "Trento";
  let data = await fetchWeatherDatafor(location)
  displayWeatherData(data)
}

showWeather()