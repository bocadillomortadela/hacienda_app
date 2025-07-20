const { verifyToken } = require('../config/jwt')
const { User } = require('../models/User')

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization
    const parsedToken = token.replace('Bearer ', '')
    const { id } = verifyToken(parsedToken)

    const user = await User.findById(id)
    if (!user) {
      return res.status(404).json('Usuario no encontrado')
    }
    user.password = null
    req.user = user
    next()
  } catch (error) {
    return res.status(401).json('No estás autorizado')
  }
}

module.exports = auth
