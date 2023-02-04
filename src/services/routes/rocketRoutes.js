const express = require('express')
const router = express.Router()
const { getRockets, getRocket } = require('../controllers/rocketsController')
const protect = require('../middleware/auth')

router.route('/').get(protect, getRockets)
router.route('/:id').get(protect, getRocket)

module.exports = router
