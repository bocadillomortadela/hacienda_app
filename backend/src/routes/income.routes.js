const express = require('express')
const { getAllIncome, crateIncome, updateIncome, deleteIncome } = require('../controllers/income.controller')
const incomeRouter = express.Router()
const auth = require('../middlewares/auth')

incomeRouter.get('/', getAllIncome)
incomeRouter.post('/create', auth, crateIncome)
incomeRouter.put('/update/:id', auth, updateIncome)
incomeRouter.delete('/delete/:id', auth, deleteIncome)

module.exports = incomeRouter
