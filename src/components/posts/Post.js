import React from 'react'

function Post(props) {
  return(
    <div className="card">
      <header className="card-header">
        <p className="title">{props.title}</p>
        <p className="subtitle">{props.author}</p>
      </header>
      
      <div className="card-content">
        <div className="content">{props.content}</div>
      </div>
    </div>
  );
}

export default Post;