import { Box, Button, Heading, SimpleGrid, Stat, StatLabel, StatNumber } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }
  })
  const totalIncomes = 1500
  const totalExpenses = 500

  return (
    <Box>
      <Heading>Dashboard</Heading>
      <SimpleGrid>
        <Stat>
          <StatLabel>Total Ingresos</StatLabel>
          <StatNumber>{totalIncomes}</StatNumber>
          <Button as={Link} to='/incomes' mt={4} colorScheme='teal'>
            Ver Ingresos
          </Button>
        </Stat>
        <Stat>
          <StatLabel>Total Gastos</StatLabel>
          <StatNumber>{totalExpenses}</StatNumber>
          <Button as={Link} to='/expenses' mt={4} colorScheme='red'>
            Ver Gastos
          </Button>
        </Stat>
      </SimpleGrid>
    </Box>
  )
}

export default Dashboard
