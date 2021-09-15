/**
 * Initialize getReadiness action
 *
 * @param {object} dependencies dependencies injected
 * @param {object} dependencies.logger logger dependency
 * @param {object} dependencies.databaseUtil database dependency
 * @param {object} dependencies.apm apm module
 * @returns {Function} getLiveness action
 */
module.exports = ({ databaseUtil, logger, apm }) => async () => {
  logger.info('Running startup action')
  await apm.connect()

  await databaseUtil.migrate()
  logger.info('Startup action successful.')
  return {}
}
