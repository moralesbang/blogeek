import React from 'react'

function Post(props) {
  return(
    <div className="card post">
      <div className="card-content">
        <h5 className="pt1 title is-5">{props.title}</h5>
        <p className="pv1">{props.content}</p>
        
        <div className="media-content">
          <p className="has-text-weight-bold mb0">{props.author}</p>
          <p className="is-italic mb0">
            August 16th, 2018
          </p>
        </div>
      </div>
    </div>
  );
}

export default Post;