import React from 'react'

class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: ""
    }
  }

  render() {
    return(
      <div className="media-content is-hidden">
        <div className="field">
          <p className="control">
            <textarea className="textarea" placeholder="Add comment..."></textarea>
          </p>
        </div>

        <div className="field">
          <p className="control">
            <button className="button">Post comment</button>
          </p>
        </div>
      </div>
    )
  }
}

export default CommentForm