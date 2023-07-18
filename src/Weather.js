import React, { useState } from 'react';
import axios, { formToJSON } from 'axios';
import { InfinitySpin } from 'react-loader-spinner';

const Weather = () => {
  const [city, setCity] = useState('Bratislava');

  function getResponse(response) {
    console.log(response);
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search city"
          onChange={handleChange}
        />
        <input type="submit" value="Search" />
      </form>
      <InfinitySpin width="180" color="#eee" />
    </div>
  );
};

export default Weather;
