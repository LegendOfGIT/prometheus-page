import React from 'react';
import logo from './logo.svg';
import './App.css';
import Items from './stages/Items';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Items/>
      </header>
    </div>
  );
}

export default App;
