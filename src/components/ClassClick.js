// class event handler
import React, { Component } from 'react'

class ClassClick extends Component {
    classHandler() {
        console.log("clicked class button")
    }
  render() {
    return (
      <div>
        <button onClick={this.classHandler}>clickClass</button>
      </div>
    )
  }
}

export default ClassClick