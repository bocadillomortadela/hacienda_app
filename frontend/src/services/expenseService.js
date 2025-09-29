const BASE = `https://hacienda-app.onrender.com/api/v1/expenses`

export const fetchExpenses = async () => {
  const res = await fetch(BASE, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
  if (!res.ok) throw new Error('No se pudieron cargar los gastos')
  return res.json()
}

export const createExpenses = async (payload) => {
  const res = await fetch(`${BASE}/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(payload)
  })
  if (!res.ok) throw new Error('Error al crear ingreso')
  return res.json()
}

export const deleteExpense = async (id) => {
  const res = await fetch(`${BASE}/delete/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
  if (!res.ok) throw new Error('Error al Borrar el Gasto')
  return res.json()
}
