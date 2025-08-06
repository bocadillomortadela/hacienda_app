const express = require('express')
const { getAllIncome, crateIncome, updateIncome, deleteIncome, getTotalIncomes } = require('../controllers/income.controller')
const incomeRouter = express.Router()
const auth = require('../middlewares/auth')

incomeRouter.get('/', auth, getAllIncome)
incomeRouter.post('/create', auth, crateIncome)
incomeRouter.put('/update/:id', auth, updateIncome)
incomeRouter.delete('/delete/:id', auth, deleteIncome)
incomeRouter.get('/total', auth, getTotalIncomes)

module.exports = incomeRouter
