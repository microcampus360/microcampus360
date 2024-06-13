import React from 'react';

import './App.css';
import Landing from './components/landing';
import Country from './components/country';
import Language from './components/language';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
        <Routes>
        
          <Route  index element={<Landing />} /> 
          <Route  path='/country' element={<Country />} /> 
          <Route  path='/language' element={<Language />} />      
          
          

       </Routes>

          
    </div>

  );
}

export default App;
