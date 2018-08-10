import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import SignIn from './users/SignIn.js';
import SignUp from './users/SignUp.js';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        
        <section className="section">
          <div className="container">
            <Switch>
              <Route path='/users/sign_in' component={SignIn}/>
              <Route path='/users/sign_up' component={SignUp}/>
            </Switch>
          </div>
        </section>
        
        <Footer />
      </div>
    );
  }
}

export default App;