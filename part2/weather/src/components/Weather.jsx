import {useState, useEffect} from 'react';
import axios from 'axios';



function Weather({capitalName, weather}) {

  console.log(weather)


  if (!capitalName || !weather || !weather.current.weathercode) {
    return (
      <div>
        <h2> Weather </h2>
        <p> There is no weather data for the city of {capitalName} </p>
      </div>
    )
  }

  let weatherType;
  switch (weather.current.weathercode) {
    case 0:
      weatherType = "clear sky"
      break;
    case 1:
    case 2:
    case 3:
      weatherType = "partly cloudly"
      break;
    case 51:
    case 53:
    case 55:
    	 weatherType = "slightly drizzle"
      break;
    case 56:
    case 57:
      weatherType = "drizzle"
      break;
    case 61:
    case 63:
    case 65:
    	 weatherType = "raining"
       break;
    case 66:
    case 67:
      weatherType = "freezing raining"
      break;
    case 71:
    case 73:
    case 75:
    	 weatherType = "snowing"
       break;
    default:
      weatherType = "unknown"
      break;
  }

  return (
    <div>
    <div>
      <h2> Weather in {capitalName} </h2>
    </div>
    <div>
      <p> Temperature: {weather.current.temperature_2m}C </p>
      <p> Weather: {weatherType}</p>
    </div>
    </div>
  )
}

export default Weather;
