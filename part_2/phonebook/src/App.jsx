import { useState, useEffect } from "react";
import Filter from "./components/filter";
import Persons from "./components/persons";
import Form from "./components/addPersonForm";
import personService from "./services/persons"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [searchName, setSearchName] = useState("")


  const personsToShow = searchName ? persons.filter(person => person.name.toLowerCase().startsWith(searchName.toLowerCase())) : persons

  //const samePerson = persons.find(person =>
  //person.name.toLowerCase() === newName.toLowerCase() &&
  //person.number === newNumber
  //)

  const existingName = persons.find(person =>
    person.name.toLowerCase() === newName.toLowerCase()

  )



  //useEffect imported from persons.js

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])



  const deletePerson = (id) => {
    const personToDelete = persons.find(person => person.id === id)
    alert(`Delete ${personToDelete.name}`)
    personService
      .remove(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
      })
  }


  const addPerson = (event) => {
    event.preventDefault()
    if (newName === "" || newNumber === "") {
      alert("Name or Number field cannot be blank")
      return
    }
    if (!existingName) {
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
    else if (existingName.number !== newNumber) {
      const personObject = {
        ...existingName,
        number: newNumber
      }
      personService
        .update(existingName.id, personObject)
        .then(response => {
          setPersons(persons.map(person =>
            person.id === existingName.id
              ? response.data
              : person
          ))
          setNewName("")
          setNewNumber("")
        })

        .catch(error => {
          console.log("Update Error")
          console.log(error)
        })

    }
    else {
      alert(`${newName} is already added to phonebook`)
      return
    }


  }

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
      <Persons personsToShow={personsToShow}
        onClick={deletePerson} />
    </div>
  )
}

export default App