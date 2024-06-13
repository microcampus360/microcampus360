import React from 'react';

import './App.css';
import {Routes, Route} from 'react-router-dom'
import IndexPage from './components/IndexPage';
import Layout from './Layout';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import OtpPage from './components/OtpPage';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<IndexPage />} />      
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/register' element={<RegisterPage/>} />
          <Route path='/otp' element={<OtpPage/>} />
        </Route>
      </Routes>
  );
}

export default App;
