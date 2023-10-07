import { useState } from 'react';
import React from 'react'
import ReactDOM from 'react-dom'

function Header({CourseName}) {
  return (
    <div>
      <h1> {CourseName} </h1>
    </div>
  )
}

function Content({parts})
{
  let partsdata = parts.map(part => {
    /*
    console.log("Array: ", exercises)
    console.log("Array position", num)
    console.log("Array value", exercises[num])
    */
    return(
      <Part part={part.name} exercises={part.exercises}/>
    )
  })

  let total = parts.map(element => element.exercises).reduce((accumulator, currentValue) => accumulator + currentValue)
  console.log(partsdata)
  return (
    <div>
      {partsdata}
      <Total total={total}/>
    </div>
  )
}

function Part({part, exercises}) {
  return(
    <div>
      <p> {part}: {exercises} </p>
    </div>
  )
}

function Total({total}) {
  return(
    <div>
      <p> Total: {total} </p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header CourseName={course}/>
      <Content parts={parts}/>
    </div>
  )
}

export default App
