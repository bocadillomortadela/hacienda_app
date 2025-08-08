import { Button, Flex, IconButton, Spacer } from '@chakra-ui/react'
import { FaUserCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }
  return (
    <Flex as='header' p={4} borderBottomWidth={1} justifyContent='flex-end' alignItems='center' bg='gray.50'>
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
