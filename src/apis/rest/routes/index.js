const router = require('express').Router()

router.use('/', require('./probes'))
router.use('/', require('./env'))

module.exports = router
