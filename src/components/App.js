import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import NewSession from './users/NewSession.js';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        
        <section className="section">
          <div className="container">
            <Switch>
              <Route path='/users/sign_in' component={NewSession}/>
              <Route path='/users/sign_up' component={NewRegistration}/>
            </Switch>
          </div>
        </section>
        
        <Footer />
      </div>
    );
  }
}

export default App;