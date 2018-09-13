import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import UserForm from './UserForm';

class SignIn extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  logIn = event => {
    event.preventDefault()

    axios.post('http://localhost:3200/log_in', this.state)
      .then(res => {
        if (res.data) {
          sessionStorage.setItem('userData', res.data.token)
          this.setState({isLoged: true})
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    if (sessionStorage.getItem('userData')) {
      return(<Redirect to='/news'/>)
    }

    return(<UserForm title="Log In" inputClass="is-link" handleSubmit={this.logIn} handleChange={this.handleChange} />)
  }
  
}

export default SignIn