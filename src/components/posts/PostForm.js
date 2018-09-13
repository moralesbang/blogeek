import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router'

class PostForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: "",
      postCreated: false
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    
    const post = {
      title: this.state.title,
      content: this.state.content
    }

    axios.defaults.headers.common['Authorization'] = "Bearer " + sessionStorage.getItem('userData')

    axios.post('http://localhost:3200/create_post', {...post})
      .then(res => console.log(res.data))
      .then( this.setState({postCreated: true}))
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    if (this.state.postCreated) {
      return(<Redirect to="/news" />)
    } else {
      return (
        <div className="column is-5">
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
                  rows="10"
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
        </div>
      )
    }
  }
}

export default PostForm