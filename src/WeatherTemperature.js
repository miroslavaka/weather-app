import React, { useState } from 'react';

const WeatherTemperature = (props) => {
  const [unit, setUnit] = useState('celsius');

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit('fahrenheit');
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit('celsius');
  }

  if (unit === 'celsius') {
    return (
      <div className="WeatherTemperature">
        <span className="temp">{props.celsius}</span>{' '}
        <span className="unit">
          {' '}
          °C |{' '}
          <a
            href="/"
            onClick={showFahrenheit}
            style={{ color: '#939192', opacity: '0.5' }}
          >
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <div className="WeatherTemperature">
        <span className="temp">{fahrenheit}</span>{' '}
        <span className="unit">
          {' '}
          <a
            href="/"
            onClick={showCelsius}
            style={{ color: '#939192', opacity: '0.5' }}
          >
            °C{' '}
          </a>{' '}
          | °F
        </span>
      </div>
    );
  }
};
export default WeatherTemperature;
