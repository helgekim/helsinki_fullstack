import { useState } from 'react'

function StatisticsLine({text, value}) {
  return(
    <div>
      <p> {text}: {value} </p>
    </div>
  )
}

function RenderStatisticsLines({entries}) {
  return entries.map(element => <StatisticsLine text={element[0]} value={element[1]}/>)
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

  console.log(statistics)


  return(
    <div>
      <div>
        <h2> What do people think of us? </h2>
      </div>
      <RenderStatisticsLines entries={statistics}/>
    </div>
  )
}

function App() {

  const [points, setPoints] = useState(
    {good: 0, neutral: 0, bad: 0}
  )


  const increaseGoodOpinions = () => setPoints({...points, good: points.good + 1});
  const increaseNeutralOpinions = () => setPoints({...points, neutral: points.neutral + 1});
  const increaseBadOpinions = () => setPoints({...points, bad: points.bad + 1});

  return (
    <div>
      <div>
          <h1> UniCafe Reviews! </h1>
      </div>
      <div>
          <h2> Give us a review! </h2>
      </div>
      <div>
        <button onClick={increaseGoodOpinions}>good</button>
        <button onClick={increaseNeutralOpinions}>neutral</button>
        <button onClick={increaseBadOpinions}>bad</button>
      </div>
      <Statistics reviews = {points}/>
    </div>
  )

}

export default App
