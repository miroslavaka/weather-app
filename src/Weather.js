import React from 'react';
import axios from 'axios';
import { ColorRing } from 'react-loader-spinner';

const Weather = (props) => {
  function getResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}°C`,
    );
  }

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=5354b60afda2b7800186c06153932396&units=metric`;
  axios.get(apiUrl).then(getResponse);

  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />
  );
};

export default Weather;
