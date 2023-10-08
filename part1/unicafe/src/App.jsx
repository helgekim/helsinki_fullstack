import { useState } from 'react'




function Statistics({reviews}) {

  const {good, neutral, bad} = reviews;

  const total = good + neutral + bad;
  const average = ((good - bad) / total) * 100
  const positive = ((good + neutral) / total) * 100
  /*return(
    <div>
      <p> In development </p>
    </div>
  )*/

    if (total == 0) {
      return (
        <div>
          <p> No feedback given </p>
        </div>
      )
    }



  return(
    <div>
      <div>
        <h2> What do people think of us? </h2>
      </div>
      <div>
        <p> Good: {good} </p>
        <p> Neutral: {neutral} </p>
        <p> Bad: {bad} </p>
      </div>
      <div>
        <p>All: {total} </p>
        <p>Average: {average}</p>
        <p>Positive: {positive}% </p>
      </div>
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
