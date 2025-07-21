const express = require('express')
const { getAllIncome, crateIncome, updateIncome, deleteIncome } = require('../controllers/income.controller')
const incomeRouter = express.Router()

incomeRouter.get('/', getAllIncome)
incomeRouter.post('/createIncome', crateIncome)
incomeRouter.put('/update/:id', updateIncome)
incomeRouter.delete('delete/:id', deleteIncome)

module.exports = incomeRouter
