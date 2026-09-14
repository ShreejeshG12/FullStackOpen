import { useState } from "react";


const Person = (props) => {
  return (
    <li>{props.name} {props.number}</li>
  )
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [searchName, setSearchName] = useState("")


  const personsToShow = searchName ? persons.filter(person => person.name.toLowerCase().startsWith(searchName.toLowerCase())) : persons

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
      <input value={searchName}
        onChange={event => setSearchName(event.target.value)}
      />
      <div>debug: {searchName}</div>
      <h2>add a new</h2>
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
        {personsToShow.map(person =>
          <Person key={person.id} name={person.name} number={person.number} />
        )}
      </ul>
    </div>
  )
}

export default App