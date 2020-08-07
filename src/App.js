import React from 'react';
import './Blue.css';
import './Green.css';
import './Purple.css';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Portfolio from './component/Portfolio';

function App() {
  let currentThemeColor = "Purple"
  const themeColor = (e) => {
    return currentThemeColor = e.target.title
  }
  
  
  return (   
    
    <div className={currentThemeColor}>
      <Home themeColor={themeColor} />
      <About />
      <Portfolio/>
    </div>
  );
}

export default App;
