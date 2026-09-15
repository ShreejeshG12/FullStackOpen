import { useState } from "react";
import Filter from "./components/filter";
import Persons from "./components/persons";
import Form from "./components/addPersonForm";

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
      <Filter
        searchName={searchName}
        onChange={event => setSearchName(event.target.value)}
      />

      <h2>add a name</h2>
      <Form
        onSubmit={addPerson}
        newName={newName}
        onNameChange={event => setNewName(event.target.value)}
        newNumber={newNumber}
        onNumberChange={event => setNewNumber(event.target.value)}

      />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App