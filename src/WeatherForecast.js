import React, { useState } from 'react';
import WeatherForecastDay from './WeatherForecastDay';
import './WeatherForecast.css';
import axios from 'axios';

const WeatherForecast = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function getData(response) {
    console.log('weatherForecast: ', response.data);
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    console.log('forecast: ', forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          {/* <WeatherForecastDay data={forecast.daily[0]} /> */}
          {forecast.daily.map((item, index) => {
            if (index < 5) {
              return (
                <div className="col single-day" key={index}>
                  <WeatherForecastDay data={item} />;
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    //const apiKey = '5354b60afda2b7800186c06153932396';
    const longitude = props.coordinates.lon;
    const latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=c8a77112b2faf6684bb4b21a0aa778ae&units=metric`;
    axios.get(apiUrl).then(getData);

    return null;
  }
};

export default WeatherForecast;
