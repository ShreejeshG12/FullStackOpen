import Person from "./person"

const Persons = ({ personsToShow }) => {
    return (
        <>
            <ul>
                {personsToShow.map(person =>
                    <Person
                        key={person.id}
                        name={person.name}
                        number={person.number}
                    />
                )}
            </ul>

        </>
    )
}

export default Persons