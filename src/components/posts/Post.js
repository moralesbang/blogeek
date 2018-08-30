import React, { Component } from 'react'
import CommentForm from '../comments/CommentForm'

class Post extends Component {

  constructor(props) {
    super(props)
    this.state = {commentFormVisibility: 'is-hidden'}
  }

  toggleCommentForm = event => {
    event.preventDefault()
    this.setState({commentFormVisibility: ''})
  }

  render() {
    return(
      <div className="card post">
        <div className="card-content">
          <h5 className="pt1 title is-5">{this.props.title}</h5>
          
          <div className="content">
            <p className="pv1">{this.props.content}</p>
          </div>
  
          <nav className="level">
            <div className="level-left">
              <a className="level-item" onClick={this.toggleCommentForm}>
                <span className="icon is-small">
                  <i className="far fa-comment-alt"></i>
                </span>
              </a>
              <a className="level-item" data-action="love">
                <span className="icon is-small">
                  <i className="far fa-heart"></i>
                </span>
              </a>
            </div>
          </nav>
          <CommentForm visibility={this.state.commentFormVisibility}/>
        </div>
      </div>
    )
  }
}

export default Post;
