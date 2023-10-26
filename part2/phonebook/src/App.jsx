import { useState, useEffect } from 'react'
import axios from 'axios';
import Form from './components/form.jsx'
import Header from "./components/header.jsx"
import Phonebook from './components/phonebook.jsx'
import communications from './services/communication.jsx';

function App() {
  const [contacts, setContacts] = useState(
    []
  );

  useEffect(() => {
    communications.getAll().then(response => setContacts(response))
    }, [])

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  function newContact (event) {
    event.preventDefault()

    const aSimilarContact = (contact) => contact.name == name


    const contact = {
          name: name,
          number: number,
    }

    if (contacts.some(aSimilarContact)) {
      alert(`${name} is already added to phonebook`)
      if (confirm("Would you like to replace this contact?")) {

        let similarContact = contacts.find(aSimilarContact);
        return communications.update(similarContact.id, contact).then(
          response => setContacts(contacts.map(element => element.name == name ? contact : element))
        );
      }
      else {
        return undefined
      }
    }



    axios.post("http://localhost:3001/persons", contact)
         .then(resource =>
         {
               setContacts(contacts.concat(contact));
               setName(""); setNumber("");
         })


  }
  function nameOnChange(event) {
    setName(event.target.value);
  }
  function numberOnChange(event) {
    setNumber(event.target.value)
  }


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
