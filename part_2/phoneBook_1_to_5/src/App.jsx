import { useState, useEffect } from "react";
import axios from 'axios';
import Filter from "./components/filter";
import Persons from "./components/persons";
import Form from "./components/addPersonForm";

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [searchName, setSearchName] = useState("")

  //useEffect

  const hook = () => {
    console.log('effect')
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        console.log("promise fulfilled")
        setPersons(response.data)
      })
  }

  useEffect(hook, [])


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