import React from 'react'
import Login from './pages/Login'
import { Route, Router, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
    </Routes>
  )
}

export default App
