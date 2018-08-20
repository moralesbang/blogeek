import React from 'react'

class PostForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: ""
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state)
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <div className="control">
            <input
              name="title"
              type="text"
              className="input"
              placeholder="Title"
              onChange={this.handleChange} />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <textarea 
              name="content"
              className="textarea"
              placeholder="Write something amazing..."
              onChange={this.handleChange} />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <input type="submit" className="button is-dark"/>
          </div>
        </div>
      </form>
    )
  }
}

export default PostForm