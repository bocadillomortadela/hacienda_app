import { Box, Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { jwtDecode } from 'jwt-decode'

const Profile = () => {
  const storedUser = JSON.parse(localStorage.getItem('user'))

  console.log(storedUser)

  return (
    <>
      <Header />
      <Box maxW='lg' mx='auto' mt={10}>
        <Heading mb={4}>Perfil del usuario</Heading>

        <strong>Email: </strong>
        {storedUser?.email || 'No disponible'}
        <Text>
          <strong>Nombre: </strong>
          {storedUser?.name}
        </Text>
        <Text>
          <strong>DNI: </strong>
          {storedUser?.dni}
        </Text>
        <Text>
          <strong>Rol: </strong>
          {storedUser?.role}
        </Text>
      </Box>
    </>
  )
}

export default Profile
