import { useState, useEffect } from 'react';
import Country from "./Country.jsx"

function Countries(
  {
    data, searchValue
  }
) {

  const [country, setCountry] = useState("")

  if (!data || !searchValue) {
    return null
  }

  let filtered = data.filter(
    country => country.name.common.includes(searchValue)
  )

  let toShow = filtered.map(
    country => {
      return(
        <div key={country.name.common}>
          <p> {country.name.common} </p> <button onClick={() => {
            console.log(country.name.common)
            setCountry(country.name.common)
          }}> show this country </button>
        </div>)}
  )

    const specificCountry = filtered.filter(eachCountry => eachCountry.name.common.includes(country));

  if (specificCountry.length == 1) {
    console.log(specificCountry)
    return(
      <Country country={specificCountry[0]}/>
    )
  }


  if (filtered.length > 10) {
    return (
      <div>
        <p> too much to show. specify your request </p>
      </div>
    )
  }

  if (filtered.length == 1) {
    console.log("So we are here!")
    console.log(filtered)
    return(
      <Country country={filtered[0]}/>
    )
  }

  return (
    <div>
      {toShow}
    </div>
  )
}

export default Countries
