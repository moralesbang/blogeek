import React from 'react'
import { Link } from 'react-router-dom';

function UserAuthActions() {
  return(
    <div className="field is-grouped">
      <p className="control">
        <Link to="/users/sign_in" className="navbar-item button is-black">
          Sign In
        </Link>
      </p>
      <p className="control">
        <Link to="/users/sign_up" className="navbar-item button is-black">
          Sign Up
        </Link>
      </p>
    </div>
  )
}

export default UserAuthActions