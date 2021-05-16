# Weather App

An application that shows the weather of a location.
It uses APIs to fetch data from [OpenWeather](https://openweathermap.org/current), like location, temperatures, humidity, etc...
The main goal of this is to improve my skill with APIs and build knowledge and gain more confidence with my asynchronous javascript skills

## Installation

Clone the repository

```cl
git clone https://github.com/igorbanjac91/WeatherApp.git
```

Install all the dependencies

```cl
npm install
```

Get your API key from [OpenWeather](https://openweathermap.org/)
Sing up, go to your profile and copy your API key

create a file called .env with the following content

```cl
API_KEY=YOUR-API-KEY
```

Finally, create a .gitignore file and add your .env file so that you don't push your secret key to GitHub
even if this API is free for public use, keep the habit of keeping this kind of information private.

## License

This project is MIT licensed.
