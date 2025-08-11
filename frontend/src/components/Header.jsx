import { Button, Flex, IconButton, Spacer } from '@chakra-ui/react'
import { FaHome, FaUserCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }
  return (
    <Flex as='header' p={4} borderBottomWidth={1} alignItems='center' bg='gray.50'>
      <IconButton icon={<FaHome />} aria-label='Inicio' variant='ghost' fontSize='xl' onClick={() => navigate('/')} />
      <Spacer />
      {token && <IconButton icon={<FaUserCircle />} aria-label='Perfil' variant='ghost' fontSize='xl' onClick={() => navigate('/profile')} />}
      {token ? (
        <Button colorScheme='red' size='sm' onClick={handleLogout}>
          Logout
        </Button>
      ) : (
        <Button colorScheme='teal' size='sm' onClick={() => navigate('/login')}>
          Login
        </Button>
      )}
    </Flex>
  )
}

export default Header
