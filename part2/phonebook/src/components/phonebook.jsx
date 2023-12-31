import { useState, useEffect } from 'react'
import Header from "./header.jsx"

function Phonebook({book, removeController}) {

  if (book.length == 0) {
    return(
      <div>
        <Header header={"Contacts"}/>
        <p> No contact to be shown </p>
      </div>
    )
  }

  const contactsToBeShown = book.map(contact => <div key={contact.id}>
    <p>{contact.name}: {contact.number} <button onClick={() => removeController(contact.id)}> delete </button>
</p>
  </div>)



  return (
    <div>
      <Header header={"Contacts"}/>
      {contactsToBeShown}
    </div>
  )
}

export default Phonebook
