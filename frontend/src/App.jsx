import React from 'react'
import Login from './pages/Login'
import { Route, Router, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Income from './pages/Income'
import Expenses from './pages/Expenses'
import Profile from './pages/Profile'
import CreateIncome from './pages/Income/CreateIncome'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/incomes' element={<Income />} />
      <Route path='incomes/new' element={<CreateIncome />} />
      <Route path='/expenses' element={<Expenses />} />
      <Route path='profile' element={<Profile />} />
    </Routes>
  )
}

export default App
