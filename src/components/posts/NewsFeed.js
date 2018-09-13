import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Post from './Post'

class NewsFeed extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts: [],
      redirect: false,
    }
  }

  componentWillMount() {
    if(sessionStorage.getItem("userData")) {
      console.log("Call user feed")
    } else {
      this.setState({redirect: true})
    }

    axios.get('http://localhost:3200/posts')
      .then( res => this.setState({posts: res.data}) )
  }

  render() {

    if (this.state.redirect) {
      return(<Redirect to="/users/sign_in" />)
    }

    return(
      <div className="column is-6 news-feed">
        { 
          this.state.posts.reverse().map( (post, index) => {
            const props = { 
              key: index + 1,
              id: post._id,
              title: post.title,
              content: post.content,
              author: post.username,
              comments: post.comments
            }

            return <Post {...props} />
          })
        }
      </div>
    )
  }
}

export default NewsFeed;