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

function Content({parts, exercises})
{

  let num = -1;

  /*
  My creativity is the worst generator of bugs so
  we have to start with -1,
  */

  let components = parts.map(part => {
    num++;

    /*
    console.log("Array: ", exercises)
    console.log("Array position", num)
    console.log("Array value", exercises[num])
    */

    return(
      <Part part={part} exercises={exercises[num]}/>
    )
  })

  console.log(components)
  return (
    <div>
      {components}
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

function Total({ex1, ex2, ex3}) {
  return (
    <div>
      <p> Number of exercises: {ex1 + ex2 + ex3} </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals and React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header CourseName={course}/>
      <Content parts={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]} />
      <Total ex1 = {exercises1} ex2 = {exercises2} ex3 = {exercises3} />
    </div>
  )
}

export default App
