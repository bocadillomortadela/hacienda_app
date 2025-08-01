const Income = require('../models/Income')

const getAllIncome = async (req, res) => {
  try {
    const incomes = await Income.find()
    res.status(200).json(incomes)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const crateIncome = async (req, res) => {
  try {
    const newIncome = await Income.create({ ...req.body, user: req.user.id })
    res.status(201).json(newIncome)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const updateIncome = async (req, res) => {
  try {
    const updatedIncome = await Income.findOneAndUpdate({ _id: req.params.id, user: req.user.id }, req.body, { new: true })
    if (!updatedIncome) return res.status(404).json({ message: 'Ingreso no encontrado' })
    res.status(200).json(updatedIncome)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const deleteIncome = async (req, res) => {
  try {
    const deletedIncome = await Income.findOneAndDelete({ _id: req.params.id, user: req.user.id })
    if (!deletedIncome) return res.status(404).json({ message: 'Ingreso no encontrado' })
    res.status(200).json({ message: 'Ingreso eliminado', income: deletedIncome })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAllIncome,
  crateIncome,
  updateIncome,
  deleteIncome
}
