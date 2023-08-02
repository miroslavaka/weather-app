import React, { useState, useEffect } from 'react';
import WeatherForecastDay from './WeatherForecastDay';
import './WeatherForecast.css';
import axios from 'axios';

const WeatherForecast = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  //useEffect triggers setLoaded(false) only if props.coordinates change
  //updated loading with new coordinates

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function getData(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <h5 className="title">5 Days Forecast</h5>
        <div className="row forecast">
          {forecast.daily.map((item, index) => {
            if (index > 0 && index < 6) {
              return (
                <div className="col single-day" key={index}>
                  <WeatherForecastDay data={item} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    const longitude = props.coordinates.lon;
    const latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=c8a77112b2faf6684bb4b21a0aa778ae&units=metric`;
    axios.get(apiUrl).then(getData);

    return null;
  }
};

export default WeatherForecast;
