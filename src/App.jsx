/* @flow */

import React, { Component, Fragment } from 'react'
import logo from './logo.svg'
import './App.css'

// $FlowIgnore: suppressing this error
class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Hai, Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Fragment>
    )
  }
}

export default App
