const { Router } = require('express');
const auth = require('./auth')
const user = require('./users')
const car = require('./cars')

const router = Router()

router.use('/auth', auth)
router.use('/users', user)
router.use('/cars', car)

module.exports = router;