import React from 'react';

function Navbar() {
  return (
    <nav className="navbar is-fixed-top is-black" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <h1 className="title is-5 has-text-white">BLOGeek</h1>
        </a>
      </div>

      <div id="navbar" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <a href="/users/sign_in" className="navbar-item button is-black">Sign In</a>
              </p>
              <p className="control">
                <a href="/users/sign_up" className="navbar-item button is-black">Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;