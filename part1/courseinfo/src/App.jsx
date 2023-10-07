import { useState } from 'react';
import React from 'react'
import ReactDOM from 'react-dom'

function Header({courseName}) {
  return (
    <div>
      <h1> {courseName} </h1>
    </div>
  )
}

function Course({info})
{
  let partsdata = info.parts.map(part => {
    return(
      <Part part={part.name} exercises={part.exercises}/>
    )
  })

  let total = info.parts.map(element => element.exercises).reduce((accumulator, currentValue) => accumulator + currentValue)
  return (
    <div>
      <Header courseName = {info.name}/>
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

  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Course info={course}/>
    </div>
  )
}

export default App
