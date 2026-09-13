const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Course = (props) => {
  const { course } = props
  return (
    course.parts.map((item) => {
      return <p key={item.id}>{item.name} {item.exercises}</p>
    })
  )
}

const Total = (props) => {
  const { course } = props
  const total = course.parts.reduce((sum, part) => {
    return sum + part.exercises
  }, 0)
  return (
    <h2>Total of {total} exercises</h2>
  )

}



const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },

      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Course course={course} />
      <Total course={course} />
    </div>
  )
}

export default App