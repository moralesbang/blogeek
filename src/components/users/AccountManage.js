import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class AccountManage extends Component {

  constructor() {
    super()
    this.state = { isLoged: true }
  }

  logOut = event => {
    event.preventDefault()
    sessionStorage.removeItem('userData')
    this.setState({isLoged: false})
  }

  render() {
    if (this.state.isLoged) {
      return(
        <div className="navbar-item">
          <div className="field is-grouped">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Account</a>
              <div className="navbar-dropdown is-boxed is-right">
                <a className="navbar-item" onClick={this.logOut}>Log Out</a>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return(<Redirect to='/users/sign_in'/>)
    }
  }
}

export default AccountManage