import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import HomePage from './components/HomePage';
import Nav from './components/principal/Nav';

class App extends Component {
  render() {
    return (
      <div >

        <Nav/>
        <HomePage/>

      </div>
    );
  }
}

export default App;
