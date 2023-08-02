import React, { useState } from 'react';
import axios from 'axios';
import WeatherInfo from './WeatherInfo';
import WeatherForecast from './WeatherForecast';

import './Weather.css';

const Weather = (props) => {
  const [city, setCity] = useState(props.defaultCity);
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState({});

  function getResponse(response) {
    setLoaded(true);
    setData({
      name: response.data.name,
      country: response.data.sys.country,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      date: new Date(response.data.dt * 1000),
      icon_url: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      icon: response.data.weather[0].icon,
    });
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c8a77112b2faf6684bb4b21a0aa778ae&units=metric`;
    axios.get(apiUrl).then(getResponse);
  }

  if (loaded) {
    return (
      <div className="Weather container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                type="text"
                className="search"
                placeholder="Enter city"
                onChange={handleChange}
                autoComplete="on"
              />
            </div>
            <div className="col-4">
              <input type="submit" className="submit" value="Search" />
            </div>
          </div>
        </form>
        <WeatherInfo weatherData={data} />
        <WeatherForecast coordinates={data.coordinates} />
      </div>
    );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c8a77112b2faf6684bb4b21a0aa778ae&units=metric`;
    axios.get(apiUrl).then(getResponse);
    return 'Loading...';
  }
};

export default Weather;
