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
      <p> Total of {total} exercises </p>
    </div>
  )
}



function Course({course})
{
  let partsdata = course.parts.map(part => {
    return(
      <Part key={part.id} part={part.name} exercises={part.exercises}/>
    )
  })

  let total = course.parts.map(element => element.exercises).reduce((accumulator, currentValue) => accumulator + currentValue)

  return (
    <div>
      <Header courseName = {course.name}/>
      {partsdata}
      <Total total={total}/>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      }
    ],
  }

  return <Course course={course} />
}

export default App
