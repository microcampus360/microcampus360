import React from 'react';

import './App.css';
import {Routes, Route} from 'react-router-dom'
import IndexPage from './components/IndexPage';
import Layout from './Layout';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import OtpPage from './components/OtpPage';
import Country from './components/country';
import Language from './components/language';
import Welcome from './components/welcomePage';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<IndexPage />} />      
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/country' element={<Country/>} />
          <Route path='/language' element={<Language/>} />
          <Route path='/otp' element={<OtpPage/>} />
          <Route path='/welcome' element={<Welcome/>} />
        </Route>
      </Routes>
  );
}

export default App;
