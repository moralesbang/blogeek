import React from 'react'
import { Link } from 'react-router-dom';

function NewPostButton(){
  return(
    <div className="field">
      <p className="control">
        <Link to='/posts/new' className="button is-white">New Post</Link>
      </p>
    </div>    
  )
}

export default NewPostButton