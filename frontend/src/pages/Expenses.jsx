import React, { useEffect, useState } from 'react'
import { fetchExpenses } from '../services/expenseService'
import { Badge, Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Expenses = () => {
  const [expenses, setExpense] = useState([])

  useEffect(() => {
    const loadExpenses = async () => {
      try {
        const data = await fetchExpenses()
        console.log('expenses data:', data)
        setExpense(data)
      } catch (error) {
        console.error(error)
      }
    }
    loadExpenses()
  }, [])

  return (
    <>
      <Header />

      <Box maxW='4xl' mx='auto' mt={10} p={4}>
        <Heading mb={6} textAlign='center' color='teal.600'>
          Mis gastos
        </Heading>
        <Box textAlign='right' mb={4}>
          <Button as={Link} to='/expenses/new' colorScheme='teal'>
            + Nuevo Gasto
          </Button>
        </Box>
        <Stack spacing={4}>
          {expenses.map((e) => (
            <Box key={e._id} borderWidth='1px' borderRadius='lg' p={4} shadow='md' bg='white' _hover={{ shadow: 'lg', borderColor: 'teal.300' }}>
              <Flex justify='space-between' align='center' flexWrap='wrap' gap={8}>
                <Text Text fontWeight='bold' fontSize='lg' color='gray.700' minW='200px'>
                  {e.concept}
                </Text>
                <Badge colorScheme='red' fontSize='md'>
                  {e.amount}€{' '}
                </Badge>
              </Flex>
              <Text color='gray.500' fontSize='sm' mt={1}>
                {e.category || 'Sin categoría'}
              </Text>
              <Text color='gray.400' fontSize='xs' mt={2}>
                {new Date(e.date).toLocaleDateString()}
              </Text>
            </Box>
          ))}
        </Stack>
      </Box>
    </>
  )
}

export default Expenses
