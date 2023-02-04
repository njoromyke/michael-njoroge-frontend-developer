const User = require('../models/User')
const generateToken = require('../utils/token')

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public

const authUser = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      email: user.email,
      token: generateToken(user._id)
    })
  } else {
    res.status(401)
    res.json({ message: 'Invalid email or password' })
  }
}

// @desc    Register a new user
// @route   POST /api/users
// @access  Public

const registerUser = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user) {
    res.status(400)
    res.json({ message: 'User already exists' })
  }

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
  } else {
    res.status(400)
    res.json({ message: 'Invalid user data' })
  }
}

module.exports = {
  authUser,
  registerUser
}
