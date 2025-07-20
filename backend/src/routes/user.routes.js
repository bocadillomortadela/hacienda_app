const express = require('express')
const { register, login, getUsers, deleteUser } = require('../controllers/user.controller')
const auth = require('../middlewares/auth')
const isAdmin = require('../middlewares/isAdmin')
const userRouter = express.Router()

userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.get('/', auth, getUsers)
userRouter.delete('/delete/:id', auth, isAdmin, deleteUser)

module.exports = userRouter
