import React from 'react';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Portfolio from './component/Portfolio';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Portfolio/>
    </div>
  );
}

export default App;
