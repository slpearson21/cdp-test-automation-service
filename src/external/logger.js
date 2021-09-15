const { Logger } = require('@chghealthcare/chg-logger-library')

/**
 * Logger Module
 *
 * @param {object} dependencies  dependencies injected
 * @param {object} dependencies.envConfig envConfig
 * @returns {object} logger
 */
module.exports = ({ envConfig }) => Logger({
  env: envConfig.ENV,
  level: envConfig.LOG_LEVEL,
  orgName: 'chghealthcare',
  serviceId: envConfig.SERVICE_ID,
  serviceVersion: envConfig.SERVICE_VERSION,
  calleeDepth: 2,
})
