const BASE = 'http://localhost:3000/api/v1/incomes'

export const fetchIncome = async () => {
  const res = await fetch(BASE, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
  if (!res.ok) throw new Error('No se pudieron cargar los ingresos')
  return res.json()
}

export const createIncome = async (payload) => {
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

export const deleteIncome = async (id) => {
  const res = await fetch(`${BASE}/delete/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
  if (!res.ok) throw new Error('Error al Borrar el ingreso')
  return res.json()
}
