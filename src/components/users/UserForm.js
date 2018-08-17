import React from 'react'
import axios from 'axios'

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    
    const user = {
      email: this.state.email,
      password: this.state.password
    }

    axios.post('https://jsonplaceholder.typicode.com/users', { user })
      .then(res => {
        console.log(res)
        console.log(res.data)
      })
  }

  render() {
    return(
      <div className="column is-4">
        <h2 className="title is-2">{this.props.title}</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left">
              <input className="input"
                type="text"
                name="email"
                placeholder="Email"
                onChange={this.handleChange} />

              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <p className="control has-icons-left">
              <input className="input"
                type="password" 
                name="password"
                placeholder="Password"
                onChange={this.handleChange} />

              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
          
          <div className="field">
            <div className="control">
              <input className="button is-success" type="submit" value={this.props.title}/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default UserForm;