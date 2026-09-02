import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Header = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
    </>
  )
}

const Result = (props) => {
  return (
    <p>{props.name} {props.clicks}</p>
  )
}

const Statistics = (props) => {
  return (
    <p>{props.name} {props.nums}</p>
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
        <>
          <Result name={"good"} clicks={reviews.good} />
          <Result name={"neutral"} clicks={reviews.neutral} />
          <Result name={"bad"} clicks={reviews.bad} />
          <Statistics name={"all"} nums={reviews.good + reviews.bad + reviews.neutral} />
          <Statistics name={"average"} nums={((reviews.good - reviews.bad) / (reviews.neutral + reviews.good + reviews.bad))} />
          <Statistics name={"positive"} nums={`${(reviews.good / (reviews.good + reviews.bad + reviews.neutral)) * 100}%`} />
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  )



}


export default App