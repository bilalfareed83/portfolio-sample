import React, { useState } from 'react';
import './Blue.css';
import './Green.css';
import './Purple.css';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Portfolio from './component/Portfolio';

function App() {
  const [currentThemeColor, setCurrentThemeColor] = useState('Blue');
  const themeColor = (e) => {
    return setCurrentThemeColor(e.target.title);
  };

  return (
    <div className={currentThemeColor}>
      <Home themeColor={themeColor} />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
