/**
 * Initialize getReadiness action
 *
 * @param {object} dependencies dependencies injected
 * @param {object} dependencies.logger logger dependency
 * @param {object} dependencies.databaseUtil database dependency
 * @returns {Function} getLiveness action
 */
module.exports = ({ databaseUtil, logger }) => async () => {
  logger.info('running shutdown action')

  await databaseUtil.close()

  return {}
}
