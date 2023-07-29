import React from 'react';
import FormattedDate from './FormattedDate';

const WeatherInfo = (props) => {
  console.log('date:', props.weatherData.date);
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col left">
          <h2 className="city">
            {props.weatherData.name}, {props.weatherData.country}
          </h2>
          <FormattedDate date={props.weatherData.date} />
          {/* <p>
              {currentDay}, {currentTime}{' '}
            </p> */}
          <p>{props.weatherData.description}</p>
        </div>
        <div className="col right">
          <div className="row">
            <img
              src={props.weatherData.icon}
              alt={props.weatherData.description}
              width="100"
            />
            <h2 className="temp">{props.weatherData.temperature}°C</h2>
          </div>
          <ul className="list">
            <li>Humidity: {props.weatherData.humidity}%</li>
            <li>Wind: {props.weatherData.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default WeatherInfo;
