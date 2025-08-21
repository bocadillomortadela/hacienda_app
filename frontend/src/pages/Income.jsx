import React, { useEffect, useState } from 'react'
import { deleteIncome, fetchIncome } from '../services/incomeService'
import { Badge, Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Income = () => {
  const [incomes, setIncomes] = useState([])

  useEffect(() => {
    const loadIncomes = async () => {
      try {
        const data = await fetchIncome()
        setIncomes(data)
      } catch (error) {
        console.log(error)
      }
    }
    loadIncomes()
  }, [])
  return (
    <>
      <Header />
      <Box maxW='4xl' mx='auto' mt={10} p={4}>
        <Heading mb={6} textAlign='center' color='teal.600'>
          Mis Ingresos
        </Heading>
        <Box textAlign='right' mb={4}>
          <Button as={Link} to='/incomes/new' colorScheme='teal'>
            + Nuevo ingreso
          </Button>
        </Box>

        <Stack>
          {incomes.map((e) => (
            <Box key={e._id} borderWidth='1px' borderRadius='lg' p={4} shadow='md' bg='white' _hover={{ shadow: 'lg', borderColor: 'teal.300' }}>
              <Flex justify='space-between' align='center' flexWrap='wrap' gap={8}>
                <Text fontWeight='bold' fontSize='lg' color='gray.700' minW='200px'>
                  {e.concept}
                </Text>
                <Badge colorScheme='green' fontSize='md'>
                  {e.amount}€{' '}
                </Badge>
                <Button
                  colorScheme='red'
                  size='sm'
                  onClick={async () => {
                    try {
                      await deleteIncome(e._id)
                      setIncomes(incomes.filter((inc) => inc._id !== e._id))
                    } catch (error) {
                      console.error(error)
                    }
                  }}
                >
                  Elminar
                </Button>
              </Flex>
              <Text color='gray.700' fontSize='sm' mt={1}>
                {e.client}
              </Text>
              <Text fontWeight='bold' color='gray.500' fontSize='sm' mt={1}>
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

export default Income
