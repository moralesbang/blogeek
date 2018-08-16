import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import SignIn from './users/SignIn';
import SignUp from './users/SignUp';
import NewsFeed from './posts/NewsFeed';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        
        <section className="section">
          <div className="container">
            <div className="columns is-centered">
              <Switch>
                <Route exact path="/" component={NewsFeed} />
                <Route path='/users/sign_in' component={SignIn}/>
                <Route path='/users/sign_up' component={SignUp}/>
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