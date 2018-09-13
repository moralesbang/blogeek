import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import SignIn from './users/SignIn'
import SignUp from './users/SignUp'
import NewsFeed from './posts/NewsFeed'
import PostForm from './posts/PostForm'
import NewPost from './posts/NewPostButton'
import UserAuthActions from './users/UserAuthActions'
import Footer from './Footer'
import AccountManage from './users/AccountManage';

class App extends Component {

  constructor() {
    super()
    this.state = {currentUser: 'anonymous'}
  }

  render() {

    const userLogedActions = <div className="flex has-centered-items"><NewPost/> <AccountManage/> </div>
    
    return (
      <div className="app">
        <Navbar>
          { sessionStorage.getItem('userData') ? userLogedActions : <UserAuthActions />}
        </Navbar>

        <section className="section">
          <div className="container">
            <div className="columns is-centered">
              <Switch>
                <Route exact path="/" component={NewsFeed} />
                <Route path='/users/sign_in' component={SignIn}/>
                <Route path='/users/sign_up' component={SignUp}/>
                <Route path='/posts/new' component={PostForm}/>
                <Route path="/news" component={NewsFeed} />
              </Switch>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default App;