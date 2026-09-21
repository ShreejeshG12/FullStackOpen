import Person from "./person"

const Persons = ({ personsToShow, onClick }) => {
    return (
        <>
            <ul>
                {personsToShow.map(person =>
                    <Person
                        key={person.id}
                        id={person.id}
                        name={person.name}
                        number={person.number}
                        onClick={onClick}

                    />


                )}

            </ul>

        </>
    )
}

export default Persons