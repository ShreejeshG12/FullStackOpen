import { useState } from "react";


const Person = (props) => {
  return (
    <li>{props.name} {props.number}</li>
  )
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", id: "1", number: "123 - 445 - 678" }
  ])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")

  const addPerson = (event) => {
    event.preventDefault()
    if (!samePerson) {
      const personObject = {
        name: newName,
        id: String(persons.length + 1),
        number: String(newNumber)
      }
      setPersons(persons.concat(personObject))
      setNewName("")
      setNewNumber("")
    }
    else {
      alert(`${newName} is already added to phonebook`)
      return
    }

  }


  const samePerson = persons.find(person =>
    person.name.toLowerCase() === newName.toLowerCase()
  )


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName}
            onChange={event => setNewName(event.target.value)}
          />
          <br />
          number: <input value={newNumber}
            onChange={event => setNewNumber(event.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <Person key={person.id} name={person.name} number={person.number} />
        )}
      </ul>
    </div>
  )
}

export default App