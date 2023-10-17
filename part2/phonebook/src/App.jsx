import { useState } from 'react'

function Header({header}) {
  return (
    <div>
      <h1> {header} </h1>
    </div>
  )
}

function Form({handler, newData}) {
  const {fields, fieldsNames, name, onChange} = handler
  /* Very slow and interruptive.
  const inputs = fields.map((element, i) => {
  return(
  <div key={Math.random()} >
    <label for={fieldsNames[i]}>{fieldsNames[i]}</label>
    <input value={element} onChange={onChange[i]}/>
  </div>
  )
  })
  */



  /*

    <form onSubmit={newData}>
      <label for={fieldsNames[0]}>{fieldsNames[0]}</label>
      <input value={fields[0]} onChange={onChange[0]}/>
        <label for={fieldsNames[1]}>{fieldsNames[1]}</label>
        <input value={fields[1]} onChange={onChange[1]}/>
      <button type="submit">Submit</button>
    </form>
  */
  return(
    <div>
    <div>
      <Header header={name}/>
    </div>
    <div>
        <form onSubmit={newData}>
          <label for={fieldsNames[0]}>{fieldsNames[0]}</label>
          <input value={fields[0]} onChange={onChange[0]}/>
            <label for={fieldsNames[1]}>{fieldsNames[1]}</label>
            <input value={fields[1]} onChange={onChange[1]}/>
          <button type="submit">Submit</button>
        </form>
    </div>
    </div>
  )
}

function Phonebook({book}) {

  const contactsToBeShown = book.map(contact => <p key={contact.number}>{contact.name}: {contact.number}</p>)
  return (
    <div>
      <Header header={"Contacts"}/>
      {contactsToBeShown}
    </div>
  )
}

function App() {
  const [contacts, setContacts] = useState(
    [{name: "Sung Deoksung",
    number: "12-01-1989",
    id: 0}]
  );

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  function newContact (event) {
    event.preventDefault()
    console.log("I am here");

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

  const newContactForm = {
      name: "Add new contact",
      fieldsNames: ["name", "number"],
      fields: [name, number],
      onChange: [nameOnChange, numberOnChange]
  }

  return(
    <div>
    <Header header={"Phonebook"}/>
    <Phonebook book={contacts}/>
    <Form handler={newContactForm} newData={newContact}/>
    </div>
  )
}

export default App
