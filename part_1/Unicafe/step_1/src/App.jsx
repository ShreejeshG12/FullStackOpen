import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Header = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
    </>
  )
}

const StatisticsLines = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const App = () => {

  const [reviews, setReviews] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const handleGoodClick = () => {
    console.log("Good clicked")
    const newReview = {
      ...reviews,
      good: reviews.good + 1
    }
    setReviews(newReview)
  }

  const handleNeutralClick = () => {
    console.log("Neutral clicked")
    const newReview = {
      ...reviews,
      neutral: reviews.neutral + 1
    }
    setReviews(newReview)
  }

  const handleBadClick = () => {
    console.log("Bad clicked")
    const newReview = {
      ...reviews,
      bad: reviews.bad + 1
    }
    setReviews(newReview)
  }
  return (
    <div>

      <Header title={"give feedback"} />
      <Button onClick={handleGoodClick} text={"good"} />
      <Button onClick={handleNeutralClick} text={"neutral"} />
      <Button onClick={handleBadClick} text={"bad"} />

      <Header title={"statistics"} />

      {reviews.good + reviews.bad + reviews.neutral > 0 ? (
        <table>
          <tbody>
            <StatisticsLines text={"good"} value={reviews.good} />
            <StatisticsLines text={"neutral"} value={reviews.neutral} />
            <StatisticsLines text={"bad"} value={reviews.bad} />
            <StatisticsLines text={"all"} value={reviews.good + reviews.bad + reviews.neutral} />
            <StatisticsLines text={"average"} value={((reviews.good - reviews.bad) / (reviews.neutral + reviews.good + reviews.bad))} />
            <StatisticsLines text={"positive"} value={`${(reviews.good / (reviews.good + reviews.bad + reviews.neutral)) * 100}%`} />
          </tbody>
        </table>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  )
}

export default App