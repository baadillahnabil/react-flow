/* @flow */

import React, { Component, Fragment } from 'react'
import './App.css'
import Person from './Components/Person/Person'

/* $FlowIgnore: suppressing this error */
export default class App extends Component {
  state = {
    persons: [
      {
        name: 'Maxi',
        age: 22
      },
      {
        name: 'Doctor',
        age: 15
      },
      {
        name: 'Brian Neil',
        age: 57
      }
    ]
  }

  onChangeAge = () => {
    this.setState(prevState => {
      return {
        persons: [
          {
            name: 'Maxi',
            age: Math.floor(Math.random() * 100)
          },
          {
            name: 'Doctor',
            age: Math.floor(Math.random() * 100)
          },
          {
            name: 'Brian Neil',
            age: Math.floor(Math.random() * 100)
          }
        ]
      }
    })
  }

  render() {
    const { persons } = this.state

    return (
      <Fragment>
        <div className="App">
          <p>Welcome To React</p>
          <Person name={persons[0].name} age={persons[0].age}>
            "You know who i am"
          </Person>
          <Person name={persons[1].name} age={persons[1].age}>
            "You know who i am"
          </Person>
          <Person name={persons[2].name} age={persons[2].age} />
          <button onClick={this.onChangeAge}>Change Ages</button>
        </div>
      </Fragment>
    )
  }
}
