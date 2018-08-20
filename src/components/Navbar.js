import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar is-fixed-top is-black" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className=" navbar-item title is-5 has-text-white">BLOGeek</Link>
      </div>

      <div id="navbar" className="navbar-menu">
        <div className="navbar-end">
          <Link to='/posts/new' className="navbar-item">New Post</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;