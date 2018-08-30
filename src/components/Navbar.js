import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav className="navbar is-fixed-top is-black" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className=" navbar-item title is-5 has-text-white">BLOGeek</Link>
        </div>

        <div id="navbar" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;