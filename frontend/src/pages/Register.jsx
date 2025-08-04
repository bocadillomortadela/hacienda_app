import { Box, Button, FormControl, FormLabel, Heading, Input, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [dni, setDni] = useState('')
  const [password, setPassword] = useState('')
  const toast = useToast()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = await registerUser({ name, email, dni, password })
      localStorage.setItem('token', data.token)
      toast({
        title: 'Account created.',
        status: 'success',
        duration: 3000,
        isClosable: true
      })
      navigate('/')
    } catch (error) {
      toast({
        title: 'Registration failed.',
        description: err.response?.data?.message || 'Something went wrong.',
        status: 'error',
        duration: 4000,
        isClosable: true
      })
    }
  }

  return (
    <Box maxW='md' mx='auto' mt={10} p={6} borderWidth={1} borderRadius='lg'>
      <Heading>Crear cuenta</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Nombre</FormLabel>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type='email' onChange={(e) => setEmail(e.target.value)} />
        </FormControl>

        <FormControl>
          <FormLabel>DNI</FormLabel>
          <Input value={dni} onChange={(e) => setDni(e.target.value)} />
        </FormControl>

        <FormControl>
          <FormLabel>Contraseña</FormLabel>
          <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <Button colorScheme='teal' width='full' type='submit'>
          Register
        </Button>
      </form>
    </Box>
  )
}

export default Register
