import React from 'react'
const BASE_URL = `https://hacienda-app.onrender.com/api`
export const loginUser = async (info) => {
  const res = await fetch(`${BASE_URL}/v1/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(info)
  })

  if (!res.ok) {
    let msg = `Error ${res.status}`
    try {
      const err = await res.json()
      msg = err.message || err || msg
    } catch {
      const txt = await res.text()
      if (txt) msg = txt
    }
    throw new Error(msg)
  }

  return await res.json()
}
export const registerUser = async (info) => {
  const res = await fetch(`${BASE_URL}/v1/users/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(info)
  })
  if (!res.ok) {
    const errorData = await res.json()
    throw new Error(errorData.message)
  }
  return await res.json()
}
export const getTotalExpenses = async () => {
  const res = await fetch(`${BASE_URL}/v1/expenses/total`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
  if (!res.ok) throw new Error('Error obteniendo total de gastos')
  return await res.json()
}
export const getTotalIncomes = async () => {
  const res = await fetch(`${BASE_URL}/v1/incomes/total`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
  if (!res.ok) throw new Error('Error obteniendo total de gastos')
  return await res.json()
}
