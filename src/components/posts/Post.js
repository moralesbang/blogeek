import React from 'react'
import CommentForm from '../comments/CommentForm'

function Post(props) {
  return(
    <div className="card">
      <div className="card-content">
        <h5 className="pt1 title is-5">{props.title}</h5>
        <p className="pv1">{props.content}</p>
        <nav className="level">
          <div className="level-left">
            <a className="level-item">
              <span className="icon is-small"><i className="far fa-comment-alt"></i></span>
            </a>
            <a className="level-item">
              <span className="icon is-small"><i className="far fa-heart"></i></span>
            </a>
          </div>
        </nav>
        <CommentForm />
      </div>
    </div>
  );
}

export default Post;