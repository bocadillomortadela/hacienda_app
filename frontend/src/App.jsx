import React from 'react'
import Login from './pages/Login'
import { Route, Router, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Income from './pages/Income'
import Expenses from './pages/Expenses'
import Profile from './pages/Profile'
import CreateIncome from './pages/Income/CreateIncome'
import CreateExpense from './pages/Expense/CreateExpense'
import { Box } from '@chakra-ui/react'
import { useTheme } from './context/ThemeContext'
useTheme
const App = () => {
  const { darkMode } = useTheme()
  return (
    <Box bg={darkMode ? 'gray.900' : 'gray.50'} color={darkMode ? 'gray.100' : 'gray.800'} minH='100vh'>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/incomes' element={<Income />} />
        <Route path='incomes/new' element={<CreateIncome />} />
        <Route path='/expenses' element={<Expenses />} />
        <Route path='expenses/new' element={<CreateExpense />} />
        <Route path='profile' element={<Profile />} />
      </Routes>
    </Box>
  )
}

export default App
