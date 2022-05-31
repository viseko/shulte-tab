import React from 'react';
import './App.css';
import Game from './components/Game';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Game />
    </div>
  );
}

export default App;
