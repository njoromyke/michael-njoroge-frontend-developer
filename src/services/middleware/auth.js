const User = require('../models/User')
const jwt = require('jsonwebtoken')

const protect = async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]

      const decoded = jwt.verify(token, process.env.JWT_TOKEN)

      req.user = await User.findById(decoded._id).select('-password')

      next()
    } catch (error) {
      console.error(error)
      res.status(401)
      res.json({ message: 'Not authorized, token failed' })
    }
  }

  if (!token) {
    res.status(401)
    res.json({ message: 'Not authorized, no token' })
  }
}

module.exports = protect
