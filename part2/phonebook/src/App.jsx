import { useState, useEffect } from 'react'
import axios from 'axios';
import Form from './components/form.jsx'
import Header from "./components/header.jsx"
import Phonebook from './components/phonebook.jsx'

function App() {
  const [contacts, setContacts] = useState(
    []
  );

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  function newContact (event) {
    event.preventDefault()

    const aSimilarContact = (contact) => contact.name == name

    if (contacts.some(aSimilarContact)) {
      alert(`${name} is already added to phonebook`)
      return undefined;
    }

    const Contact = {
      name: name,
      number: number,
      id: Math.random()
    }

    setContacts(contacts.concat(Contact));
    setName(""); setNumber("");
  }
  function nameOnChange(event) {
    setName(event.target.value);
  }
  function numberOnChange(event) {
    setNumber(event.target.value)
  }

  useEffect(() => {
    axios.get("http://localhost:3001/persons")
         .then(
           response => setContacts(response.data)
         )
  }, [])

  const newContactForm = {
      name: "Add new contact",
      fieldsNames: ["name", "number"],
      fields: [name, number],
      onChange: [nameOnChange, numberOnChange]
  }

  const [filter, setFilterForm] = useState("")
  const [filtered, setFiltered] = useState(contacts)


    function filterOnChange(event) {
        setFilterForm(event.target.value);
        setFiltered(contacts.filter(contact => contact.name.includes(filter)))
    }



  const filterForm = {
    name: "Find your Contact",
    fieldsNames: ["filter shown with"],
    fields: [filter],
    onChange: [filterOnChange]
  }

  return(
    <div>
    <Header header={"Phonebook"}/>
    <Form handler={filterForm}/>
    <Phonebook book={filtered.length > 0 ? filtered : contacts}/>
    <Form handler={newContactForm} newData={newContact}/>
    </div>
  )
}

export default App
