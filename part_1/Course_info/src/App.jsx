
/*  
const course = "Half Stack application development"
 const part1 = "Fundamentals of React"
const exercises1 = 10
  const part2 = "Using props to pass data"
  const exercises2 = 7
  const part3 = "State of a component"
  const exercises3 = 14
  <Content part1={part1} exercises1={exercises1} />
      <Content part2={part1} exercises2={exercises2} />
      <Content part3={part1} exercises3={exercises3} />
      <Total totalExercises={exercises1 + exercises2 + exercises3} />
*/


const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>The topic of this part is {props.part} and it has {props.excercises} excercises</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <>
      <p> The Total number of excercises is {props.total}</p>

    </>
  )
}



const App = () => {
  const course = "Half Stack application development"
  const part1 = "Fundamentals of React"
  const exercises1 = 10
  const part2 = "Using props to pass data"
  const exercises2 = 7
  const part3 = "State of a component"
  const exercises3 = 14

  return (
    <>
      <Header course={course} />
      <Content part={part1} excercises={exercises1} />
      <Content part={part2} excercises={exercises2} />
      <Content part={part3} excercises={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />

    </>
  )

}

export default App