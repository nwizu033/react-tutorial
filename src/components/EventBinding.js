// Event binding inside contructor method
import React, { Component } from 'react'

 class EventBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Welcome"
      }
    //   method one bind inside the constructor
    this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.setState({
            message: "goodbye"
        })
    }




  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.clickHandler}>clickMee</button>
      </div>
    )
  }
}

export default EventBinding