require('dotenv').config({ path: '.env' })

const {
  name: serviceId,
  version: serviceVersion,
} = require('../../package.json')

/**
 * EnvConfig Module
 *
 * This is to be used to "register" environment variables
 * used within this service. This makes is easier for testing
 * and to have a single place for the documentation of all
 * environment variables used within this service.
 *
 * @returns {object} envConfig
 */
module.exports = () => ({
  APM_HOST: process.env.APM_HOST,
  APM_TOKEN: process.env.APM_TOKEN,
  ENV: process.env.ENV,
  LOG_LEVEL: process.env.LOG_LEVEL,
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  SERVICE_ID: serviceId,
  SERVICE_VERSION: serviceVersion,
})
