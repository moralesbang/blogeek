import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar is-fixed-top is-black" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <Link to="/" className="title is-5 has-text-white">BLOGeek</Link>
        </a>
      </div>

      <div id="navbar" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
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
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;