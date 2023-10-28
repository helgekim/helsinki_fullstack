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

  const [message, setMessage] = useState({})

  const Notification = ({ message }) => {

  if (message === null) {
    return null
  }

  if (message.type = "success") {
    return(
      <div className = "success">
        {message.content}
      </div>
    )
  }

  if (message.type = "error")
  {
    return (
    <div className='error'>
      {message.content}
    </div>
  )
}

}

  useEffect(() => {
    communications.getAll().then(response => {
      setContacts(response)
    }).catch(exception => {
      setMessage({
        type: "error",
        content: "Can't get data"})
    })
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
      if (confirm("Would you like to replace this contact?")) {

        let similarContact = contacts.find(aSimilarContact);
        return communications.update(similarContact.id, contact).then(
          response => setContacts(contacts.map(element => element.name == name ? contact : element))
        ).catch(exception => setMessage({
          type: "error",
          content: `Can't update ${name}`
        }));
      }
      else {
        setMessage({
          type: "error",
          content: `${name} already exists`
        })
        return undefined
      }
    }

        communications.post(contact)
                      .then(
          response => {
                  setContacts(contacts.concat(contact));
                  setName(""); setNumber("");
                  setMessage({
                    type: "success",
                    content: `${name} added successfully!`})
          }
        )
                        .catch(exception => setMessage({
            type: "error",
            content: `Failed to add ${name}`}))
        }

  function nameOnChange(event) {
    setName(event.target.value);
  }
  function numberOnChange(event) {
    setNumber(event.target.value)
  }

  function deleteContact(id) {
    return communications.remove(id)
            .then(
             response => {
               setContacts(contacts.filter(contact => contact.id !== id))
               setMessage({
                 type: "success",
                 content: "Removed the contact"})
             })
           .catch(
             exception => {
               setMessage({
                 type: "error",
                 content: `Unable to remove contact`})
             })


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
    <Notification message = {message}/>
    <Form handler={filterForm}/>
    <Phonebook book={filtered.length > 0 ? filtered : contacts} removeController = {deleteContact}/>
    <Form handler={newContactForm} newData={newContact}/>
    </div>
  )
}

export default App
