/* @flow */

import React, { Component, Fragment } from 'react'
import './App.css'
import Person from './Components/Person/Person'

/* $FlowIgnore: suppressing this error */
export default class App extends Component {
  // The state for this class
  state: {
    persons: Object[],
    showPersons: boolean
  } = {
    persons: [
      {
        id: '123123',
        name: 'Maxi',
        age: 22
      },
      {
        id: '324234',
        name: 'Doctor',
        age: 15
      },
      {
        id: '345345',
        name: 'Brian Neil',
        age: 57
      }
    ],
    showPersons: false
  }

  // show or hide person lists
  togglePersons = () => {
    const showPersons: boolean = this.state.showPersons
    this.updateShowPersonsState(!showPersons)
  }

  // remove person from array
  removePersonComponent = (personIndex: number) => {
    const persons: Object[] = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.updatePersonsState(persons)
  }

  // Make Two-Way Binding when input type changed
  changePersonName = (event: any, personId: string | number) => {
    const personIndex: number = this.state.persons.findIndex(person => {
      return person.id === personId
    })

    let person: Object = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value

    const persons: Object[] = [...this.state.persons]
    persons[personIndex] = person
    this.updatePersonsState(persons)
  }

  // Update 'persons' State
  updatePersonsState = (persons: Object[]) => {
    this.setState(prevState => {
      const updatedState: Object = {
        persons
      }
      return updatedState
    })
  }

  // Update 'showPersons' state
  updateShowPersonsState = (showPersons: boolean) => {
    this.setState(prevState => {
      const updatedState: Object = {
        showPersons
      }
      return updatedState
    })
  }

  render() {
    // Inline Styling
    const style: Object = {
      toggleBtn: {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      }
    }

    // Load conditionally persons
    let personsComponent: any = null
    if (this.state.showPersons) {
      personsComponent = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                onRemoveClicked={this.removePersonComponent.bind(this, index)}
                onInputChanged={event =>
                  this.changePersonName(event, person.id)
                }
              />
            )
          })}
        </div>
      )
    }

    // JSX Loaded to DOM
    return (
      <Fragment>
        <div className="App">
          <p>Welcome To React</p>
          <button style={style.toggleBtn} onClick={this.togglePersons}>
            Toggle Persons
          </button>
          {personsComponent}
        </div>
      </Fragment>
    )
  }
}
