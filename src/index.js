import './reset.css';
import './style.css';

const img = document.querySelector("img");

const apiKey = process.env.API_KEY;

async function fetchWeatherDataFrom(location) {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();
  const weatherInfo = data.weather[0];
  const temperatures = data.main
  const iconCode = weatherInfo.icon
  console.log(temperatures.temp);
  console.log(weatherInfo.main);

  img.src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
  img.alt = weatherInfo.description;
}

fetchWeatherDataFrom("trento");
