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
