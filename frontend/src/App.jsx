import React from 'react'
import Login from './pages/Login'
import { Route, Router, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Income from './pages/Income'
import Expenses from './pages/Expenses'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/incomes' element={<Income />} />
      <Route path='/expenses' element={<Expenses />} />
    </Routes>
  )
}

export default App
