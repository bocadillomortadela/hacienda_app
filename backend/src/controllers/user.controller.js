const { generateToken } = require('../config/jwt.js')
const { User } = require('../models/User.js')
const bcrypt = require('bcryptjs')

const getUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password')
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' })
    res.status(200).json({ message: 'Usuario eliminado', user })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const register = async (req, res) => {
  try {
    const { name, email, password, dni } = req.body

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: 'El usuario ya existe' })
    }

    const hasedPassword = await bcrypt.hash(password, 10)

    const newUser = await User.create({
      name,
      email,
      password: hasedPassword,
      dni
    })
    res.status(201).json({ message: 'Usuario registrado', user: newUser })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) {
      return res.status(404).json('usuario no encontrado')
    }
    if (bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user._id)
      return res.status(200).json({
        token,
        user: { id: user._id, name: user.name, email: user.email, dni: user.dni, role: user.role }
      })
    } else {
      return res.status(400).json('usuario o contraseña incorrectos')
    }
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
}

module.exports = { register, login, getUsers, deleteUser }
