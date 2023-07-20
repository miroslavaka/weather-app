import React, { useState } from 'react';
import axios from 'axios';
import { days } from './days.js';
import { InfinitySpin } from 'react-loader-spinner';

const Weather = () => {
  const [city, setCity] = useState('Bratislava');
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState({
    temperature: null,
    description: null,
    humidity: null,
    wind: null,
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
    });
  }

  function handleChange(event) {
    console.log(event.target.value);
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5354b60afda2b7800186c06153932396&units=metric`;
    axios.get(apiUrl).then(getResponse);
  }

  if (loaded) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search city"
            onChange={handleChange}
            value={city}
          />
          <input type="submit" value="Search" />
        </form>
        <div className="overview">
          <div className="result">
            <h1>
              {city},{data.country}
            </h1>
            <p>
              {currentDay}, {currentTime}{' '}
            </p>
            <p>{data.description}</p>
          </div>
          <div>
            <h2>{data.temperature}°C</h2>
            <p>Humidity: {data.humidity}%</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search city"
            onChange={handleChange}
            value={city}
          />
          <input type="submit" value="Search" />
        </form>
        <div className="overview">
          <div className="result">
            <h1>{city}, SK</h1>
            <p>
              {currentDay}, {currentTime}{' '}
            </p>
            <p>{data.description}</p>
          </div>
          <div>
            <h2>27°C</h2>
            <p>Humidity: 35%</p>
          </div>
        </div>
        {/* <InfinitySpin width="180" color="#eee" /> */}
      </div>
    );
  }
};

export default Weather;
