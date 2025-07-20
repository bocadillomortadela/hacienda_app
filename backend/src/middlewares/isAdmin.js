const isAdmin = async (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    return next()
  }
  return res.status(403).json('acceso solo solo para admins')
}

module.exports = isAdmin
