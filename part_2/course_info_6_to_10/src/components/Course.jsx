const Course = (props) => {
    const { course } = props
    return (
        course.parts.map((item) => {
            return <p key={item.id}>{item.name} {item.exercises}</p>
        })
    )
}

export default Course