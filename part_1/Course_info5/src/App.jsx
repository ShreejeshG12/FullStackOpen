const course = {
  name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}



const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {

  return (
    props.parts.map(part => {
      return (
        <div>
          <p>Name of this part is {part.name} and it has {part.exercises} excercises</p>
        </div>
      )
    })
  )
}

const Total = (props) => {
  const total = props.parts.reduce((accumulator, current) => {
    return accumulator + current.exercises
  }, 0)

  return <p>The total number of exercises are {total}</p>
}



const App = () => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App