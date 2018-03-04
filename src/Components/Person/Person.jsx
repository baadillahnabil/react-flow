/* @flow */

import React, { Component, Fragment } from 'react'

// $FlowIgnore: suppressing this error
export default class Person extends Component {
  render() {
    return (
      <Fragment>
        <p>
          My Name is {this.props.name} and my age is {this.props.age}
        </p>
        {this.props.children}
      </Fragment>
    )
  }
}
