import './App.css';
import Navbar from './components/navbar';
import Summary from './components/summary';
import Experience from './components/experience';
import Skills from './components/skills';
import React from 'react';



function App() {
  return (
    
    <div className="App">
      
        <Navbar />
        <Summary />
        <Skills />
        <Experience />
      
    </div>
  );
}

export default App;
