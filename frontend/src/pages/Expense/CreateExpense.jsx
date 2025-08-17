import React, { useState } from 'react'
import { Box, Button, FormControl, FormLabel, Heading, Input, Select, useToast } from '@chakra-ui/react'
import { createExpenses } from '../../services/expenseService'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'

const CreateExpense = () => {
  const [form, setForm] = useState({
    concept: '',
    amount: '',
    date: '',
    provider: '',
    category: '',
    receiptUrl: ''
  })
  const toast = useToast()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const payload = {
        ...form,
        amount: Number(form.amount),
        date: new Date(form.date)
      }
      await createExpenses(payload)
      toast({ title: 'Gasto creado con éxito', status: 'success', duration: 3000 })
      navigate('/expenses')
    } catch (error) {
      toast({ title: 'Error al crear gasto', status: 'error', duration: 3000 })
    }
  }

  return (
    <>
      <Header />
      <Box maxW='md' mx='auto' mt={10} p={6} borderWidth={1} borderRadius='lg'>
        <Heading mb={6} textAlign='center' color='red.600'>
          Añadir gasto
        </Heading>

        <form onSubmit={handleSubmit}>
          <FormControl mb={3} isRequired>
            <FormLabel>Concepto</FormLabel>
            <Input name='concept' value={form.concept} onChange={handleChange} />
          </FormControl>
          <FormControl mb={3} isRequired>
            <FormLabel>Importe (€)</FormLabel>
            <Input type='number' step='0.01' name='amount' value={form.amount} onChange={handleChange} />
          </FormControl>
          <FormControl mb={3} isRequired>
            <FormLabel>Fecha</FormLabel>
            <Input type='date' name='date' value={form.date} onChange={handleChange} />
          </FormControl>
          <FormControl mb={3}>
            <FormLabel>Proveedor</FormLabel>
            <Input name='provider' value={form.provider} onChange={handleChange} />
          </FormControl>
          <FormControl mb={3}>
            <FormLabel>Categoría</FormLabel>
            <Select name='category' value={form.category} onChange={handleChange}>
              <option value=''>Selecciona</option>
              <option>Servicios</option>
              <option>Compras</option>
              <option>Impuestos</option>
              <option>Otros</option>
            </Select>
          </FormControl>
          <FormControl mb={3}>
            <FormLabel>Recibo (URL)</FormLabel>
            <Input name='receiptUrl' value={form.receiptUrl} onChange={handleChange} />
          </FormControl>
          <Button type='submit' colorScheme='red' width='full'>
            Guardar
          </Button>
        </form>
      </Box>
    </>
  )
}

export default CreateExpense
