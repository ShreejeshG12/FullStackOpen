import { useState, useEffect } from "react";
import axios from 'axios';
import Filter from "./components/filter";
import Persons from "./components/persons";
import Form from "./components/addPersonForm";
import personService from "./services/persons"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [searchName, setSearchName] = useState("")

  //useEffect imported from persons.js

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])


  const personsToShow = searchName ? persons.filter(person => person.name.toLowerCase().startsWith(searchName.toLowerCase())) : persons

  const addPerson = (event) => {
    event.preventDefault()
    if (!samePerson) {
      const personObject = {
        name: newName,
        number: String(newNumber)
      }

      //imported from persons.js - NOTE: do not use personObject on setPersons, causes key error on chrome dev tool react
      personService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName("")
          setNewNumber("")
        })

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