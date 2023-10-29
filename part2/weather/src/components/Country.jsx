import { useState, useEffect } from 'react';
import Header from "./Header.jsx"

function Country({country}) {
  console.log(country)
  return(

    <div>
      <Header header={country.name.common}/>
      <div>
        <p>capital: {country.capital}  </p>
        <p>area: {country.area} km2</p>
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
    </div>
  )
}

export default Country;
