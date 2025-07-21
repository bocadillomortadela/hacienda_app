const express = require('express')
const { getExpenses, createExpense, updateExpense, deleteExpense } = require('../controllers/expense.controller')
const expenseRouter = express.Router()

expenseRouter.get('/', getExpenses)
expenseRouter.post('/create', createExpense)
expenseRouter.put('update/:id', updateExpense)
expenseRouter.delete('/delete/:id', deleteExpense)

module.exports = expenseRouter
