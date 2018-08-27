import React from 'react'
import axios from 'axios'

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    axios.post('http://localhost:3200/sign_up', this.state)
      .then(res => {
        document.cookie = `authorization = ${res.data.token}`
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
            <label className="label">Username</label>
            <div className="control has-icons-left">
              <input className="input"
                type="text"
                name="username"
                placeholder="Username"
                onChange={this.handleChange} />

              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
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
              <input
                className={"button " + this.props.submitClass}
                type="submit"
                value={this.props.title}/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default UserForm;