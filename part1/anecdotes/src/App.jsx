import React, { useState } from 'react'
import ReactDOM from 'react-dom'

/*

Expanda la siguiente aplicación agregando un botón en el que se puede hacer clic
para mostrar una anécdota aleatoria del campo de la ingeniería de software:

*/


function Button ({text, onclick}) {
  return(
    <div>
      <button onClick={onclick}>{text}</button>
    </div>
  )
}


const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)


  function nextJoke() {
    return (selected + 1) >= anecdotes.length ? setSelected(0) : setSelected(selected + 1)
  }
  function randomJoke() {
    function newNumber() {
      return Math.floor(Math.random() * anecdotes.length);
    }
    return setSelected(newNumber());
  }

  return (
    <div>
     <p>  {anecdotes[selected]} </p>
     <Button text={"next"} onclick = {nextJoke}/>
     <Button text={"random"} onclick = {randomJoke}/>
    </div>
  )
}

export default App
