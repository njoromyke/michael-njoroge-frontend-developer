const AsyncHandler = require('express-async-handler')
const User = require('../models/User')
const generateToken = require('../utils/token')

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public

const authUser = AsyncHandler(async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        email: user.email,
        token: generateToken(user._id)
      })
    }
  } catch (error) {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

// @desc    Register a new user
// @route   POST /api/users
// @access  Public

const registerUser = AsyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user) {
    res.status(400)
    throw new Error('User already exists')
  }

  try {
    const newUser = await User.create({
      email,
      password
    })

    if (newUser) {
      res.status(201).json({
        _id: newUser._id,
        email: newUser.email,
        token: generateToken(newUser._id)
      })
    }
  } catch (error) {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

module.exports = {
  authUser,
  registerUser
}
