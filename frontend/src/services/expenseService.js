const BASE = 'http://localhost:3000/api/v1/expenses'

export const fetchExpenses = async () => {
  const res = await fetch(BASE, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
  if (!res.ok) throw new Error('No se pudieron cargar los gastos')
  return res.json()
}

export const createExpense = async (payload) => {
  const res = await fetch(BASE)
}
