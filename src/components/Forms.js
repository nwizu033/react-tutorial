// form handling in react
import React, { Component } from 'react'

 class Forms extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         password: '',
         language: "yoruba"
      }
    }

    changeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    changePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    topicChange = (event) => {
        this.setState({
            language: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.password} ${this.state.language}`)
        event.preventDefault()
    }
  render() {
    const {username, password, language} = this.state
    return (
      <div>
        <div>
            <label>Username: </label>
            <input type="text" 
            value={username}
             onChange ={this.changeUsername}/>

            <label>Password:</label>
            <input type="password"
            value={password}
            onChange = {this.changePassword}/>

            <label>Language</label>
            <select value={language} onChange={this.topicChange}>
                <option value="igbo">Igbo</option>
                <option value="yoruba">Yoruba</option>
                <option value="hausa">Hausa</option>
            </select>

            <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    )
  }
}

export default Forms