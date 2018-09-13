import React, { Component } from 'react'
import axios from 'axios'
import './CommentForm.css'

class CommentForm extends Component {

  constructor(props) {
    super(props)
    this.state = {content: ""}
  }

  handleSubmit = event => {
    event.preventDefault()

    const post = {
      comments: this.state.content,
      post: this.props.post
    }

    console.log(post)

    axios.defaults.headers.common['Authorization'] = "Bearer " + sessionStorage.getItem('userData')

    axios.put('http://localhost:3200/posts', {...post})
      .then(res => console.log(res.data))
  }

  handleChange = event => {
    this.setState({ content: event.target.value })
  }

  render() {
    return(
      <div className={"media-content comment-form  " + this.props.visibility}>
        <div className="field is-grouped has-centered-items">
          <p className="control is-expanded">
            <textarea
              rows="1"
              className="textarea"
              placeholder="Add comment..."
              onChange={this.handleChange}>
            </textarea>
          </p>
  
          <div className="control">
            <a onClick={this.handleSubmit}>
              <i className="fas fa-pen-square"></i>
            </a>
          </div>
        </div>
      </div>
    )
  }
  
}

export default CommentForm