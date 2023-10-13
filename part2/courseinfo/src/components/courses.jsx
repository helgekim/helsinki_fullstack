
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

export default Courses;
