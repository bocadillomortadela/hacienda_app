import React from 'react'
import Login from './pages/Login'
import { Route, Router, Routes } from 'react-router-dom'
import Register from './pages/Register'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default App
