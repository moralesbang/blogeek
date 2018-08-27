import React, { Component } from 'react'
import axios from 'axios';
import Post from './Post'

class NewsFeed extends Component {
  constructor(props){
    super(props)
    this.state = { posts: [] }
  }

  componentWillMount(){
    axios.get('http://192.168.193.26:3200/posts').then( res => {
      console.log(res.data)
      this.setState({posts: res.data})
    })
  }

  render() {
    return(
      <div className="column news-feed">
        { 
          this.state.posts.map( post => {
            const props = { key: post._id, title: post.title, content: post.content, author: post.username };
            return <Post {...props} />
          })
        }
      </div>
    )
  }
}

export default NewsFeed;