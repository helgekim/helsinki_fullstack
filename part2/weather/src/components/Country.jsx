import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "./Header.jsx"
import Weather from "./Weather.jsx"

function receiveWeather(country, setWeather) {
  const [lat, lng] = country.latlng;
  console.log(lat, lng)
      useEffect(() => {
        axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,weathercode`)
            .then(
              response => setWeather(response.data)
            )
            .catch(
              exception => console.log("No data")
            )
        return (
          setWeather({})
        )
      }, [lat, lng])

      return undefined
}

function Country({country}) {

  const [weather, setWeather] = useState({})
  receiveWeather(country, setWeather)

  console.log(weather)

  return(

    <div>
      <Header header={country.name.common}/>
      <div>
        <p>capital: {country.capital}  </p>
        <p>area: {country.area} km2 </p>
        <div>
          <p> languages: </p>
          <ul>
            {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
          </ul>
        </div>
      </div>
      <div>
        <h2> Flag </h2>
        <img src={country.flags.png}/>
      </div>
      <div>
        {weather.current ? <Weather capitalName = {country.capital} weather={weather}/> : null}
      </div>
    </div>
  )
}

//       <Weather capitalName = {country.capital} weather={weather}/>

export default Country;
