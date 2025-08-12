import React, { useEffect, useState } from 'react'
import { fetchIncome } from '../services/incomeService'
import { Badge, Box, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import Header from '../components/Header'

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

        <Stack>
          {incomes.map((e) => (
            <Box>
              <Flex justify='space-between' align='center' flexWrap='wrap' gap={8}>
                <Text fontWeight='bold' fontSize='lg' color='gray.700' minW='200px'>
                  {e.concept}
                </Text>
                <Badge colorScheme='red' fontSize='md'>
                  {e.amount}€{' '}
                </Badge>
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
