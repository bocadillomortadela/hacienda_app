import { Box, Button, FormControl, FormLabel, Heading, Input, Select, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createIncome } from '../../services/incomeService'
import Header from '../../components/Header'

const CreateIncome = () => {
  const [form, setForm] = useState({
    concept: '',
    amount: '',
    date: '',
    client: '',
    category: '',
    invoiceUrl: ''
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
      await createIncome(payload)
      toast({ title: 'Ingreso creado con éxito', status: 'success', duration: 3000 })
      navigate('/incomes')
    } catch (error) {
      toast({ title: 'Error al crear ingreso', status: 'error', duration: 3000 })
    }
  }

  return (
    <>
      <Header />
      <Box>
        <Heading>Añadir ingreso</Heading>
        <form onSubmit={handleSubmit}>
          <FormControl>
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
            <FormLabel>Cliente</FormLabel>
            <Input name='client' value={form.client} onChange={handleChange} />
          </FormControl>
          <FormControl mb={3}>
            <FormLabel>Categoría</FormLabel>
            <Select name='category' value={form.category} onChange={handleChange}>
              <option value=''>Selecciona</option>
              <option>Servicios</option>
              <option>Ventas</option>
              <option>Consultoría</option>
              <option>Otros</option>
            </Select>
          </FormControl>
          <FormControl mb={3}>
            <FormLabel>Factura (URL)</FormLabel>
            <Input name='invoiceUrl' value={form.invoiceUrl} onChange={handleChange} />
          </FormControl>
          <Button type='submit' colorScheme='teal' width='full'>
            Guardar
          </Button>
        </form>
      </Box>
    </>
  )
}

export default CreateIncome
