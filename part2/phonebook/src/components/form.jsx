import { useState, useEffect } from 'react'
import Header from "./header.jsx"

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

  if (fields.length == 1) {
    return(
      <div>
        <div>
        <form onSubmit={newData}>
          <label for={fieldsNames[0]}>{fieldsNames[0]}</label>
          <input value={fields[0]} onChange={onChange[0]}/>
          </form>
        </div>
      </div>
    )
  }

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

export default Form;
