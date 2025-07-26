import React from 'react'

const loginUser = async (info) => {
  const res = await fetch('http://localhost:3000/api/v1/users/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(info)
  })
  if (!response.ok) throw new Error('Error al iniciar sesión')
  return await response.json()
}

export default loginUser
