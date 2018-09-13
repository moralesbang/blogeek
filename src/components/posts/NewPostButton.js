import React from 'react'
import { Link } from 'react-router-dom';

function NewPostButton(){
  return(
    <Link to="/posts/new" className="button is-white navbar-item">New Post</Link>
  )
}

export default NewPostButton