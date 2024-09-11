import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';

function App() {
  const [rotationDuration, setRotationDuration] = useState(20);

  const handleCountChange  = (newCount) => {
    // Comienza con 20 segundos y disminuye exponencialmente
    const newDuration = Math.max(0.1, 20 / Math.pow(1.2, newCount));
    setRotationDuration(newDuration);
  };
  return (
    <div className='App'>
      <header className='App-header'>
        {/* Manten el logo girando*/}
        <img src={logo} 
        className='App-logo' 
        alt='logo' 
        style={{ '--rotation-duration': `${rotationDuration}s`}} 
        />
        <h1 className='App-tittle'>Interactive Counter</h1>
        <Counter onCountChange={handleCountChange} />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
      </header>
    </div>
  );
}

export default App;
