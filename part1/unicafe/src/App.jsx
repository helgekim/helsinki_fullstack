import { useState } from 'react'

function StatisticsLine({text, value}) {

  if (text == "positive" ) {
    return(
      <tr>
        <td> {text} </td>
        <td> {value}%</td>
      </tr>
    )
  }

  return(
    <tr>
      <td> {text} </td>
      <td> {value} </td>
    </tr>
  )
}

function StatisticsLines({entries}) {

  let cells = entries.map(element => <StatisticsLine text={element[0]} value={element[1]}/>);

  return(
    <table>
      <tbody>
      {cells}
      </tbody>
    </table>
  )
}

function Statistics({reviews}) {

  const {good, neutral, bad} = reviews;
  const total = good + neutral + bad;

  /* order matters. prevent the rest of the code from being rendered
  */
      if (total == 0) {
        return (
          <div>
            <p> No feedback given </p>
          </div>
        )
      }

  const average = ((good - bad) / total) * 100
  const positive = ((good + neutral) / total) * 100

  // Object.entries create an array with each property and their value as subarrays.

  const statistics = Object.entries({
    ...reviews,
    total: total,
    average: average,
    positive: positive
  })

  return(
    <div>
      <div>
        <h2> What do people think of us? </h2>
      </div>
      <StatisticsLines entries={statistics}/>
    </div>
  )
}


function Button({text, onclick}) {
  return <button onClick={onclick}>{text}</button>
}

function Buttons({entries}) {
  return entries.map(element => <Button text={element[0]} onclick={element[1]}/>)
}

function App() {

  const [points, setPoints] = useState(
    {good: 0, neutral: 0, bad: 0}
  )

  const increaseGoodOpinions = () => setPoints({...points, good: points.good + 1});
  const increaseNeutralOpinions = () => setPoints({...points, neutral: points.neutral + 1});
  const increaseBadOpinions = () => setPoints({...points, bad: points.bad + 1});

  const optionsFunctions = Object.entries({
    good: increaseGoodOpinions,
    neutral: increaseNeutralOpinions,
    bad: increaseBadOpinions,
    reset: () => setPoints({good: 0, neutral: 0, bad: 0})
  })

  return (
    <div>
      <div>
          <h1> UniCafe Reviews! </h1>
      </div>
      <div>
          <h2> Give us a review! </h2>
      </div>
      <div>
      <Buttons entries = {optionsFunctions}/>
      </div>
      <Statistics reviews = {points}/>
    </div>
  )

}

export default App
