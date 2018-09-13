import React, {Component} from 'react';

class Comment extends Component {

  constructor(props) {
    super(props)
    this.state = {
      attributes: {}
    }
  }

  componentDidMount() {
    const requestCommentAwait = async () => {
      const response = await fetch(`http://localhost:3200/posts/${this.props.id}`)
      const comment_attrs = await response.json()
      this.setState({attributes: comment_attrs})
    }
    requestCommentAwait()
  }

  render() {
    return(
      <article className="media">
        <div className="media-content">
          <div className="content">
            <strong>{this.state.attributes.user}</strong>
            <p>{this.state.attributes.content}</p>
          </div>
        </div>
      </article>
    )
  }
}

export default Comment;