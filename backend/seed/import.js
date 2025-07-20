const fs = require('fs')
const path = require('path')
const csv = require('csv-parser')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
require('dotenv').config()

const connectDB = require('../src/config/db')
const { User } = require('../src/models/User')
const Income = require('../src/models/Income')
const Expense = require('../src/models/Expense')

// Limpia claves con comillas o espacios
const normalizeKeys = (obj) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key.trim().replace(/^['"]+|['"]+$/g, ''), value]))

// Leer CSV con separador ;
const readCSV = (filePath) => {
  return new Promise((resolve, reject) => {
    const results = []
    fs.createReadStream(filePath)
      .pipe(csv({ separator: ';' }))
      .on('data', (data) => results.push(normalizeKeys(data)))
      .on('end', () => resolve(results))
      .on('error', reject)
  })
}

const seed = async () => {
  try {
    await connectDB()
    console.log('🟢 Conectado a MongoDB')

    // --- Usuarios ---
    const usersRaw = await readCSV(path.join(__dirname, 'users.csv'))
    console.log('📄 CSV leído:', usersRaw)
    await User.deleteMany()

    const users = await Promise.all(
      usersRaw.map(async (user) => ({
        name: user.name,
        email: user.email,
        dni: user.dni,
        role: user.role,
        password: await bcrypt.hash(user.password, 10)
      }))
    )

    const insertedUsers = await User.insertMany(users)
    console.log(`👤 Insertados ${insertedUsers.length} usuarios`)

    // Mapa email → ID
    const userMap = {}
    insertedUsers.forEach((user) => {
      userMap[user.email] = user._id
    })

    // --- Ingresos ---
    const incomesRaw = await readCSV(path.join(__dirname, 'incomes.csv'))
    await Income.deleteMany()

    const incomes = incomesRaw.map((i) => ({
      concept: i.concept,
      amount: parseFloat(i.amount?.replace(',', '.')) || 0,
      date: new Date(i.date),
      client: i.client,
      category: i.category,
      invoiceUrl: i.invoiceUrl,
      user: userMap[i.user_email]
    }))

    await Income.insertMany(incomes)
    console.log(`💰 Insertados ${incomes.length} ingresos`)

    // --- Gastos ---
    const expensesRaw = await readCSV(path.join(__dirname, 'expenses.csv'))
    await Expense.deleteMany()

    const expenses = expensesRaw.map((e) => ({
      concept: e.concept,
      amount: parseFloat(e.amount?.replace(',', '.')) || 0,
      date: new Date(e.date),
      provider: e.provider,
      category: e.category,
      receiptUrl: e.receiptUrl,
      user: userMap[e.user_email]
    }))

    await Expense.insertMany(expenses)
    console.log(`📉 Insertados ${expenses.length} gastos`)

    await mongoose.disconnect()
    console.log('✅ Seed completado y desconectado de MongoDB')
  } catch (error) {
    console.error('❌ Error:', error.message)
    await mongoose.disconnect()
  }
}

seed()
