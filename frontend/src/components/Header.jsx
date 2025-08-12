import { Button, Flex, IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Spacer } from '@chakra-ui/react'
import { FaCog, FaHome, FaKey, FaSignOutAlt, FaUser, FaUserCircle } from 'react-icons/fa'
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
      {token ? (
        <Menu>
          <MenuButton as={IconButton} icon={<FaUserCircle />} aria-label='Menú de perfil' variant='ghost' fontSize='xl' />
          <MenuList>
            <MenuItem icon={<FaUser />} onClick={() => navigate('/profile')}>
              Ver perfil
            </MenuItem>
            <MenuItem icon={<FaCog />} onClick={() => navigate('/profile/settings')}>
              Ajustes
            </MenuItem>
            <MenuItem icon={<FaKey />} onClick={() => navigate('/profile/password')}>
              Cambiar contraseña
            </MenuItem>
            <MenuDivider />
            <MenuItem icon={<FaSignOutAlt />} onClick={handleLogout} color='red.500'>
              Cerrar sesión
            </MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Button leftIcon={<FaSignInAlt />} colorScheme='teal' size='sm' onClick={() => navigate('/login')}>
          Login
        </Button>
      )}
    </Flex>
  )
}

export default Header
