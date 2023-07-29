import React from 'react';
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';
import WeatherTemperature from './WeatherTemperature';

const WeatherInfo = (props) => {
  console.log('icon:', props.weatherData.icon);
  return (
    <div className="WeatherInfo">
      <div className="row information">
        <div className="col left">
          <h2 className="city">
            {props.weatherData.name}, {props.weatherData.country}
          </h2>
          <ul className="list">
            <li>
              <FormattedDate date={props.weatherData.date} />
            </li>
            <li style={{ textTransform: 'capitalize' }}>
              {props.weatherData.description}
            </li>
          </ul>
        </div>
        <div className="col right">
          <div className="row">
            <WeatherIcon code={props.weatherData.icon} size={65} />
            {/* <h2 className="temp">{props.weatherData.temperature}°C</h2> */}
            <WeatherTemperature celsius={props.weatherData.temperature} />
          </div>
          <ul className="list list-right">
            <li>Humidity: {props.weatherData.humidity}%</li>
            <li>Wind: {props.weatherData.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default WeatherInfo;
