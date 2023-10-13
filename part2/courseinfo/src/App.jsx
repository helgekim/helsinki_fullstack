import { useState } from 'react';
import React from 'react'
import ReactDOM from 'react-dom'

function Header({courseName}) {
  return (
    <div>
      <h2> {courseName} </h2>
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

function Courses({courses}) {
  return courses.map(course => <Course key={course.id} course={course}/>)
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
  ]

  return (
    <div>
    <div>
      <h1> Web development cirriculum </h1>
    </div>

    <Courses courses={courses} />

    </div>)
}

export default App
