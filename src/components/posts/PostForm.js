import React from 'react'
import axios from 'axios'

class PostForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: "",
      username: 'juan-camilo'
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state)
    axios.post('http://192.168.193.4:3200/create_post', this.state)
      .then( res =>
        console.log(res.data)
      )
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