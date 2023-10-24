import { useState, useEffect } from 'react'
import Header from "./header.jsx"

function Phonebook({book}) {

  const contactsToBeShown = book.map(contact => <p key={contact.number}>{contact.name}: {contact.number}</p>)
  return (
    <div>
      <Header header={"Contacts"}/>
      {contactsToBeShown}
    </div>
  )
}

export default Phonebook
