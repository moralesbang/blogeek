import React, { Component } from 'react'

class UserForm extends Component {
 
  render() {
    return(
      <div className="column is-4 pt4">
        <h2 className="title is-2">{this.props.title}</h2>
        <form onSubmit={this.props.handleSubmit}>
          <div className="field">
            <label className="label">Username</label>
            <div className="control has-icons-left">
              <input className="input"
                type="text"
                name="username"
                placeholder="Username"
                onChange={this.props.handleChange} />
  
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
                onChange={this.props.handleChange} />
  
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
          
          <div className="field">
            <div className="control">
              <input
                className={"button " + this.props.inputClass}
                type="submit"
                value={this.props.title}/>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default UserForm