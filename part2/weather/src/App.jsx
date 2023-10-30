import { useState, useEffect } from 'react';
import axios from 'axios';

/// Components
import Header from "./components/Header.jsx"
import Form from "./components/Form.jsx"
import Countries from "./components/Countries.jsx"
/// Services
import data from './services/comms.jsx';

function App() {

  const [countries, setCountries] = useState([]);
  const [searchValue, setSearch] = useState("");
  const [country, setCountry] = useState("")


  useEffect(() => {
      data.receive()
          .then(
            countriesData => setCountries(countriesData)
          )
          .catch(
            exception => console.log("Unable to receive data")
          )
    }, [])

  useEffect(() => {
    setCountry("")
  }, [searchValue])

  if (!countries) {
    console.log("No data")
    return (
      <div>
        <Header header = "Countries"/>
        <div>
          <p> No data rendered </p>
        </div>
      </div>
    )
  }

  return (
    <div>
        <Header header = "Countries"/>
        <Form search={searchValue} setSearch={setSearch} description={"find countries"}/>
        <Countries data={countries} searchValue = {searchValue} country={country} setCountry={setCountry}/>
    </div>
  )
}

export default App
