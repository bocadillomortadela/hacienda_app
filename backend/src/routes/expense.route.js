const express = require('express')
const { getExpenses, createExpense, updateExpense, deleteExpense, getTotalExpenses } = require('../controllers/expense.controller')
const expenseRouter = express.Router()
const auth = require('../middlewares/auth')

expenseRouter.get('/', auth, getExpenses)
expenseRouter.post('/create', auth, createExpense)
expenseRouter.put('/update/:id', auth, updateExpense)
expenseRouter.delete('/delete/:id', auth, deleteExpense)
expenseRouter.get('/total', auth, getTotalExpenses)

module.exports = expenseRouter
