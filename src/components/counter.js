// setting state dynamically
import React, { Component } from 'react'

 class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    incrementCount() {
        this.setState(
            prevState => ({
            count: prevState.count+1
        })
        //    {
        //     count: this.state.count+2
        //    } 
        )
    }
    increaseFive() {
       this.incrementCount()
       this.incrementCount()
       this.incrementCount()
       this.incrementCount()
       this.incrementCount()
        // this.setState({
        //     count: this.state.count+5
        // })
    }

  render() {
    return (
        <div>
            <div>counter - {this.state.count}</div>
            <button onClick={() => this.incrementCount()}>Increment</button>
            <button onClick={() => this.increaseFive()}>x5</button>
        </div>
      
    )
  }
}

export default Counter