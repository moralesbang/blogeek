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
    axios.put('http://localhost:3200/create_comment', this.state)
      .then(res => {
        document.cookie = `authorization = ${res.data.token}`
      })
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
  
          <div class="control">
            <a onClick={this.handleSubmit}>
              <i class="fas fa-pen-square"></i>
            </a>
          </div>
        </div>
      </div>
    )
  }
  
}

export default CommentForm