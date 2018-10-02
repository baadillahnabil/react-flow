/* @flow */

import React, { Component, Fragment } from 'react'
import './Person.css'

// $FlowIgnore: suppressing this error
export default class Person extends Component {
  render() {
    // Inline Styling
    const style: Object = {
      removeBtn: {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid red',
        padding: '5px',
        cursor: 'pointer'
      },
      inputName: {
        font: 'inherit',
        padding: '5px'
      }
    }

    return (
      <Fragment>
        <div className="Person">
          <button style={style.removeBtn} onClick={this.props.onRemoveClicked}>
            Remove This Person
          </button>
          <p>
            My Name is {this.props.name} and my age is {this.props.age}
          </p>
          <input
            style={style.inputName}
            type="text"
            onChange={this.props.onInputChanged}
            value={this.props.name}
          />
          <input
            style={style.inputName}
            type="number"
            onChange={this.props.onAgeChanged}
            value={this.props.age}
          />
          {this.props.children}
        </div>
      </Fragment>
    )
  }
}
