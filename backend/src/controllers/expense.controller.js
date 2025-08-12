const Expense = require('../models/Expense')

const getExpenses = async (req, res) => {
  try {
    const expense = await Expense.find({ user: req.user._id }).sort({ date: -1 })
    res.status(200).json(expense)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getTotalExpenses = async (req, res) => {
  try {
    const result = await Expense.aggregate([{ $match: { user: req.user._id } }, { $group: { _id: null, total: { $sum: '$amount' } } }])

    res.status(200).json({ total: result[0]?.total || 0 })
  } catch (error) {
    res.status(500).json({ message: 'Error obteniendo total de gastos' })
  }
}

const createExpense = async (req, res) => {
  try {
    const payload = { ...req.body, user: req.user._id }
    const newExpense = await Expense.create(payload)
    res.status(201).json(newExpense)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const updateExpense = async (req, res) => {
  try {
    const updatedExpense = await Expense.findOneAndUpdate({ _id: req.params.id, user: req.user._id }, req.body, { new: true })
    if (!updatedExpense) return res.status(404).json({ message: 'Gasto no encontrado' })
    res.status(200).json(updatedExpense)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const deleteExpense = async (req, res) => {
  try {
    const deletedExpense = await Expense.findOneAndDelete({ _id: req.params.id, user: req.user._id })
    if (!deletedExpense) return res.status(404).json({ message: 'Gasto no encontrado' })
    res.status(200).json({ message: 'Gasto eliminado', expense: deletedExpense })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getExpenses,
  getTotalExpenses,
  createExpense,
  updateExpense,
  deleteExpense
}
