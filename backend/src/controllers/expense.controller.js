const Expense = require('../models/Expense')

const getExpenses = async (req, res) => {
  try {
    const expense = await Expense.find()
    if (!expense) return res.status(404).json({ message: 'Gasto no encontrado' })
    res.status(200).json(expense)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createExpense = async (req, res) => {
  try {
    const newExpense = await Expense.create({ ...req.body, user: req.user.id })
    res.status(201).json(newExpense)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const updateExpense = async (req, res) => {
  try {
    const updatedExpense = await Expense.findOneAndUpdate({ _id: req.params.id, user: req.user.id }, req.body, { new: true })
    if (!updatedExpense) return res.status(404).json({ message: 'Gasto no encontrado' })
    res.status(200).json(updatedExpense)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const deleteExpense = async (req, res) => {
  try {
    const deletedExpense = await Expense.findOneAndDelete({ _id: req.params.id, user: req.user.id })
    if (!deletedExpense) return res.status(404).json({ message: 'Gasto no encontrado' })
    res.status(200).json({ message: 'Gasto eliminado', expense: deletedExpense })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getExpenses,
  createExpense,
  updateExpense,
  deleteExpense
}
