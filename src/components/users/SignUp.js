import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import UserForm from './UserForm'

class SignUp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      redirectLogin: false
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  signUp = event => {
    event.preventDefault()

    console.log(this.state)

    const user = {
      username: this.state.username,
      password: this.state.password
    }

    axios.post('http://192.168.30.22:3200/sign_up', {...user})
      .then(res => {
        console.log(res)
        console.log("Status: ", res.status)
        if (res.status === 201) {
          this.setState({redirectLogin: true})
        }
      })
  }

  render() {
    if (this.state.redirectLogin) {
      return(<Redirect to='/users/sign_in'/>)
    } else {
      return(<UserForm title="Sign Up" inputClass="is-success" handleSubmit={this.signUp} handleChange={this.handleChange} />)
    }
  }
}

export default SignUp