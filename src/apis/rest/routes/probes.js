const router = require('express').Router()

/**
 * @swagger
 * /liveness:
 *  get:
 *    tags:
 *      - liveness
 *    summary: Check the liveness of the service
 *    responses:
 *      200:
 *        description: Liveness returned successfully
 *        content:
 *          application/json:
 *            example:
 *              message: success
 */
router.get('/liveness', async (req, res, next) => {
  const logger = req.scope.resolve('logger')
  const getHealth = req.scope.resolve('getLiveness')

  try {
    const { query } = req
    const healthResult = await getHealth(query)

    res.json(healthResult)
  } catch (error) {
    logger.error(`Health endpoint error encountered ${error.message}`)
    next(error)
  }
})

/**
 * @swagger
 * /readiness:
 *  get:
 *    tags:
 *      - readiness
 *    summary: Check the readiness of the service
 *    responses:
 *      200:
 *        description: Readiness returned successfully
 *        content:
 *          application/json:
 *            example:
 *              message: success
 */
router.get('/readiness', async (req, res, next) => {
  const logger = req.scope.resolve('logger')
  const getHealth = req.scope.resolve('getReadiness')

  try {
    const { query } = req
    const healthResult = await getHealth(query)

    res.json(healthResult)
  } catch (error) {
    logger.error(`Readiness endpoint error encountered ${error.message}`)
    next(error)
  }
})

module.exports = router
