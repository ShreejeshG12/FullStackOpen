const Part = (props) => {
  return (
    <p>The topic of this part is {props.part} and it has {props.excercises} excercises</p>
  )
}

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = () => {
  const part1 = "Fundamentals of React"
  const exercises1 = 10
  const part2 = "Using props to pass data"
  const exercises2 = 7
  const part3 = "State of a component"
  const exercises3 = 14
  return (
    <div>
      <Part part={part1} excercises={exercises1} />
      <Part part={part2} excercises={exercises2} />
      <Part part={part3} excercises={exercises3} />
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
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  return (
    <>
      <Header course={course} />
      <Content />
      <Total total={exercises1 + exercises2 + exercises3} />

    </>
  )

}

export default App