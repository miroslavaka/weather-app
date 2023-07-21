import React, { useState } from 'react';
import axios from 'axios';
import { days } from './days.js';
import img from './img/sun.png';
import './Weather.css';

const Weather = () => {
  const [city, setCity] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState({
    temperature: null,
    description: null,
    humidity: null,
    wind: null,
    name: null,
    country: null,
    icon: null,
  });

  //setting week day and date
  const now = new Date();
  let currentDay = days[now.getDay()];
  console.log(currentDay);
  let currentTime = now.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  console.log(currentTime);

  //let currentDate = {
  //   day: now.getDate(),
  //   month: now.getMonth() + 1,
  //   year: now.getFullYear(),
  // };

  //functions
  function getResponse(response) {
    console.log(response);
    setLoaded(true);
    setData({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      country: response.data.sys.country,
      name: response.data.name,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleChange(event) {
    // console.log(event.target.value);
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5354b60afda2b7800186c06153932396&units=metric`;
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
                placeholder="Search city"
                onChange={handleChange}
                value={city}
                autoComplete="on"
              />
            </div>
            <div className="col-4">
              <input type="submit" className="submit" value="Search" />
            </div>
          </div>
        </form>
        <div className="row row-cols-md-2 row-cols-sm-1">
          <div className="col left">
            <h2 className="city">
              {data.name},{data.country}
            </h2>
            <p>
              {currentDay}, {currentTime}{' '}
            </p>
            <p>{data.description}</p>
          </div>
          <div className="col right">
            <div className="row">
              <img src={data.icon} alt={data.description} width="100" />
              <h2 className="temp">{data.temperature}°C</h2>
            </div>
            <ul className="list">
              <li>Humidity: {data.humidity}%</li>
              <li>Wind: {data.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Weather container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                type="text"
                className="search"
                placeholder="Search city"
                onChange={handleChange}
                value={city}
                autoComplete="on"
              />
            </div>
            <div className="col-4">
              <input type="submit" className="submit" value="Search" />
            </div>
          </div>
        </form>
        <div className="row row-cols-md-2 row-cols-sm-1">
          <div className="col left">
            <h2 className="city">Bratislava, SK</h2>
            <p>
              {currentDay}, {currentTime}{' '}
            </p>
            <p>{data.description}</p>
          </div>
          <div className="col right">
            <div className="row">
              <img src={img} alt="sun" width="100" />
              <h2 className="temp">27°C</h2>
            </div>
            <ul className="list">
              <li>Humidity: 35%</li>
              <li>Wind: 15km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default Weather;
