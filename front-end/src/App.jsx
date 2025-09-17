import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Landing from './components/Landing'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
<<<<<<< HEAD
import Dashboard from './components/Dashboard';
import PrivateSend from './components/PrivateSend';
=======
import Onboarding from './components/Onboarding'
>>>>>>> 15f7462 (created landing and dashboard)

const App = () => {
  return (
    <Routes>
<<<<<<< HEAD
      <Route path="/Dashboard" element={<PrivateSend><Dashboard /></PrivateSend>} /> 
      <Route path="/" element={<Home />} /> 
=======
      <Route path="/" element={<Landing />} /> 
      <Route path="/home" element={<Home />} />
>>>>>>> 15f7462 (created landing and dashboard)
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/onboarding" element={<Onboarding />} />
    </Routes>
  )
}

export default App