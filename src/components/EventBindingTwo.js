// method 2 using arrow function to declare handler
import React, { Component } from 'react'

class EventBindingTwo extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           message : "welcome arrow"
        }
      }

      clickHandler = () =>{
        this.setState({
            message : "goobye arrow"
        })
    }
  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={this.clickHandler}>clickMee2</button>
      </div>
    )
  }
}

export default EventBindingTwo