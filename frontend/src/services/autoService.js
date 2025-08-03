import React from 'react'

export const loginUser = async (info) => {
  const res = await fetch('http://localhost:3000/api/v1/users/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(info)
  })
  if (!res.ok) throw new Error('Error al iniciar sesión')
  return await res.json()
}
export const registerUser = async (info) => {
  const res = await fetch('http://localhost:3000/api/v1/users/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(info)
  })
  if (!res.ok) throw new Error('Error al registrarse')
  return await res.json()
}
