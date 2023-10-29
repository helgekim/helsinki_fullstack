import { useState, useEffect } from 'react';

function Countries(
  {
    data, searchValue
  }
) {

  if (!data || !searchValue) {
    return null
  }

  let toShow = data.filter(
    country => country.name.common.includes(searchValue)
  ).map(
    country => <p key={country.name.common}> {country.name.common} </p>
  )

  if (toShow.length > 10) {
    return (
      <div>
        <p> too much to show. specify your request </p>
      </div>
    )
  }

  return (
    <div>
      {toShow}
    </div>
  )
}

export default Countries
