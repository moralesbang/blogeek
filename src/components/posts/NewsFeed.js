import React, { Component } from 'react'
import axios from 'axios';
import Post from './Post'

class NewsFeed extends Component {
  constructor(props){
    super(props)
    this.state = { posts: [] }
  }

  componentWillMount(){
    // URL for testing only
    axios.get('https://jsonplaceholder.typicode.com/posts?userId=1').then( res => {
      const posts = res.data
      posts.forEach( post => {
        let data = {
          id: post.id,
          title: post.title,
          content: post.body,
          author: post.userId
        }
        this.setState({ posts: this.state.posts.concat([data]) })
      })
    })
  } 

  render() {
    // console.log( this.state.posts.length )
    return(
      <div className="column news-feed">
        { 
          this.state.posts.map( post =>
            <Post key={post.id} title={post.title} content={post.content} author={post.author}/>
          )
        }
      </div>
    )
  }
}

export default NewsFeed;