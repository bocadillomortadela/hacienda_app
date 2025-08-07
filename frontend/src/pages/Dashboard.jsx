import { Box, Button, Heading, SimpleGrid, Stat, StatLabel, StatNumber } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getTotalExpenses, getTotalIncomes } from '../services/autoService'
import Header from '../components/Header'

const Dashboard = () => {
  const navigate = useNavigate()
  const [totalExpense, setTotalExpense] = useState('')
  const [totalIncome, setTotalIncome] = useState('')

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }
    const fetchTotals = async () => {
      try {
        const incomesData = await getTotalExpenses()
        const expensesData = await getTotalIncomes()
        setTotalExpense(expensesData.total)
        setTotalIncome(incomesData.total)
      } catch (error) {
        console.error(error)
      }
    }
    fetchTotals()
  }, [navigate])

  return (
    <>
      <Header />
      <Box maxW='4xl' mx='auto' mt={10}>
        <Heading textAlign='center' mb={8}>
          Dashboard
        </Heading>
        <SimpleGrid colums={{ base: 1, md: 2 }} spacing={6}>
          <Stat p={4} borderWidth={1} borderRadius='lg'>
            <StatLabel>Total Ingresos</StatLabel>
            <StatNumber>{totalIncome}</StatNumber>
            <Button as={Link} to='/incomes' mt={4} colorScheme='teal'>
              Ver Ingresos
            </Button>
          </Stat>
          <Stat p={4} borderWidth={1} borderRadius='lg'>
            <StatLabel>Total Gastos</StatLabel>
            <StatNumber>{totalExpense}</StatNumber>
            <Button as={Link} to='/expenses' mt={4} colorScheme='red'>
              Ver Gastos
            </Button>
          </Stat>
        </SimpleGrid>
      </Box>
    </>
  )
}

export default Dashboard
