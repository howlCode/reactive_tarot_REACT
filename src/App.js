import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Spreads from './components/Spreads';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Spreads />
      </div>
    );
  }
}

export default App;
