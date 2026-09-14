import { useState } from "react";


const Person = (props) => {
  return (
    <li>{props.name}</li>
  )
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", id: "1" }
  ])
  const [newName, setNewName] = useState("")

  const addPerson = (event) => {
    event.preventDefault()
    if (!samePerson) {
      const personObject = {
        name: newName,
        id: String(persons.length + 1)
      }
      setPersons(persons.concat(personObject))
      setNewName("")
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

        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <Person key={person.id} name={person.name} />
        )}
      </ul>
    </div>
  )
}

export default App