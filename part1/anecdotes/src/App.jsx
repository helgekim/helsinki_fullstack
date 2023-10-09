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

  function anecdotevotes () {
    let pretable = [];
    for (let a = 0; a < anecdotes.length; a++) {
      pretable.push([a, 0]);
    }
    return Object.fromEntries(pretable)
  }

  const [votes, setVotes] = useState(anecdotevotes());

  function voteForJoke() {
      const newVotes = {
        ...votes,
      }
      newVotes[selected] += 1;
      return setVotes(newVotes)
  }

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
     <p> this joke has {votes[selected]} votes </p>
     <Button text={"next"} onclick = {nextJoke}/>
     <Button text={"random"} onclick = {randomJoke}/>
     <Button text={"vote"} onclick={voteForJoke}/>
    </div>
  )
}

export default App
