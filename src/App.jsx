/* @flow */

import React, { Component, Fragment } from 'react'
import './App.css'
import Person from './Components/Person/Person'

/* $FlowIgnore: suppressing this error */
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="App">
          <p>Welcome To React</p>
          <Person name="Nabil" age="22">
            "You know who i am"
          </Person>
          <Person name="Budo" age="12">
            "You know who i am"
          </Person>
          <Person name="Brian O'Neil" age="43" />
        </div>
      </Fragment>
    )
  }
}
