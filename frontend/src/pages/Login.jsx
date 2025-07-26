import React, { useState } from 'react'
import loginUser from '../services/autoService'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = await loginUser({ email, password })
      console.log('Login correcto', data)
      localStorage.setItem('token', data.token)
    } catch (error) {
      console.error('Error al iniciar sesión', error)
    }
  }
  return <div>login</div>
}

export default Login
