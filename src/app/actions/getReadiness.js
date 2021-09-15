const ReadinessResult = require('../models/ReadinessResult')

/**
 * Initialize getReadiness action
 *
 * @param {object} dependencies dependencies injected
 * @param {object} dependencies.logger logger dependency
 * @param {object} dependencies.databaseUtil database dependency
 * @returns {Function} getLiveness action
 */
module.exports = ({ databaseUtil, logger }) =>
  /**
   * @param {object} params
   * @param {boolean} params.forceFailure Causes failed (for testing)
   */
  async ({ forceFailure } = {}) => {
    logger.trace('getReadiness args', { forceFailure })

    if (forceFailure) throw new Error('Forced failure health check')
    const now = Date.now()
    await databaseUtil.ping()
    const dbResponseTime = Date.now() - now

    const readinessResult = new ReadinessResult({
      healthy: true,
      dbResponseTime,
      dbStatus: 'healthy',
    })

    logger.trace('getReadiness results', { readinessResult })

    return readinessResult.clone()
  }
