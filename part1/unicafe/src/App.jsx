import { useState } from 'react'


function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGoodOpinions = () => setGood(good + 1);
  const increaseNeutralOpinions = () => setNeutral(neutral + 1);
  const increaseBadOpinions = () => setBad(bad + 1);

  const total = good + neutral + bad;
  const average = ((good - bad) / total) * 100
  const positive = ((good + neutral) / total) * 100

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
          <p>Average: {total == 0 ? 0 : average}</p>
          <p>Positive: {total == 0 ? 0 : positive}% </p>
        </div>
      </div>
    </div>
  )

}

export default App
