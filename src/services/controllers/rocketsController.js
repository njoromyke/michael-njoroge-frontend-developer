const axios = require('axios')
// @desc    get all rockets
// @route   GET /api/rockets
// @access  Private

const { BASE_URL } = require('../config/config')

const getRockets = async (req, res) => {
  const url = `${BASE_URL}/rockets`
  const response = await axios.get(url)
  const rockets = response.data
  res.json({
    rockets,
    success: true,
    message: 'Rockets fetched successfully'
  })
}

// @desc    get a single rocket
// @route   GET /api/rockets/:id
// @access  Private

const getRocket = async (req, res) => {
  const url = `${BASE_URL}/rockets/${req.params.id}`
  const response = await axios.get(url)
  const rocket = response.data
  res.json({
    rocket,
    success: true,
    message: 'Rocket fetched successfully'
  })
}

module.exports = {
  getRockets,
  getRocket
}
