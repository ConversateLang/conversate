import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard';
import PrivateSend from './components/PrivateSend';

const App = () => {
  return (
    <Routes>
      <Route path="/Dashboard" element={<PrivateSend><Dashboard /></PrivateSend>} /> 
      <Route path="/" element={<Home />} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App