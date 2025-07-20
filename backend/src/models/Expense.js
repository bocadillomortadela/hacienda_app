const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema(
  {
    concept: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
    provider: { type: String },
    category: { type: String },
    receiptUrl: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Expense', expenseSchema)
