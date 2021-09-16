const router = require('express').Router()

router.get('/env', async (req, res, next) => {
  const logger = req.scope.resolve('logger')
  const getEnv = req.scope.resolve('getEnv')

  try {
    const { query } = req
    const envResult = await getEnv(query)

    res.json(envResult)
  } catch (error) {
    logger.error(`Env endpoint error encountered ${error.message}`)
    next(error)
  }
})

module.exports = router
