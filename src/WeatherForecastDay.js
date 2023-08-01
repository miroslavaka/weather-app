import React from 'react';
import WeatherIcon from './WeatherIcon';

const WeatherForecastDay = (props) => {
  console.log('data day: ', props.data);

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return temperature;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return temperature;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return days[day];
  }

  return (
    <>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="WeatherForecast-temp">
        <span className="WeatherForecast-temp-max">{maxTemperature()}°</span>
        <span className="WeatherForecast-temp-min">{minTemperature()}°</span>
      </div>
    </>
  );
};

export default WeatherForecastDay;
