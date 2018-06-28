// Bomb Component Code Goes Here
import React, { Component } from 'react'

export default class Bomb extends Component {
  constructor (props) {
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render () {
    let result = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
    return (
      <div>{result}</div>
    )
  }
}
