// conditional rendering
import React, { Component } from 'react'

 class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
  render() {
    // ternary operation way 
    return this.state.isLoggedIn ?
    (<div>Welcome Ekwe</div>):
     (<div>Welcome Tony</div>)

    // short circuit way 
    // return this.state.isLoggedIn && <div>Welcome Tony</div>
  }
}

export default UserGreeting