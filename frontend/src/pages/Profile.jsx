import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'

const Profile = () => {
  const userEmail = 'usuario@ejemplo.com'

  return (
    <>
      <Header />
      <Box maxW='lg' mx='auto' mt={10}>
        <Heading mb={4}>Perfil del usuario</Heading>
        <Text>
          <strong>Email: </strong>
          {userEmail}
        </Text>
      </Box>
    </>
  )
}

export default Profile
