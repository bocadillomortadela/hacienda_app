import React, { useState } from 'react'
import { loginUser } from '../services/autoService'
import { Box, Button, FormControl, Heading, Input } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = await loginUser({ email, password })
      console.log('Login correcto', data)
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))
      navigate('/')
    } catch (error) {
      console.error('Error al iniciar sesión', error)
    }
  }
  return (
    <Box maxW='sm' mx='auto' mt={20} p={8} boxShadow='md' borderRadius='lg' bg='white'>
      <Heading textAlign='center' mb={6}>
        Iniciar Sesíon
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <Input placeholder='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl>
          <Input placeholder='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <Button type='submit' colorScheme='teal' width='full'>
          Entrar
        </Button>
      </form>
    </Box>
  )
}

export default Login
