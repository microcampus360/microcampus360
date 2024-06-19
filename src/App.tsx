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
import State from './components/statePage';
import District from './components/district';
import Dashboard from './components/Dashboard/Dashboard';
import { UserContextProvider } from './contexts/UserContext';

function App() {
  return (
    <UserContextProvider>
      <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<IndexPage />} />      
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/register' element={<RegisterPage/>} />
            <Route path='/country' element={<Country/>} />
            <Route path='/language' element={<Language/>} />
            <Route path='/state' element={<State/>} />
            <Route path='/district' element={<District/>} />
            <Route path='/otp' element={<OtpPage/>} />
            <Route path='/welcome' element={<Welcome/>} />
            <Route path='/dashboard/:subpage?' element={<Dashboard />} />
          </Route>
        </Routes>
    </UserContextProvider>
  );
}

export default App;
