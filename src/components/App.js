import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />

        <section className="section">
          <div className="container">
            <h1 className="is-5 has-text-danger">Welcome to my React App</h1>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default App;