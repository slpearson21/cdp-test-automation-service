const apm = require('elastic-apm-node')
/**
 * APM Module
 * This Module depends on the environment variables
 * APM_HOST and APM_TOKEN. These can be found here:
 * https://800cd5f720154e968520ac3ed9d940ca.us-west-2.aws.found.io:9243/app/home#/tutorial/apm
 * Add these values to the vault secret for this service.
 *
 * Docs: https://www.elastic.co/guide/en/apm/get-started/7.9/index.html
 * Guides: https://www.elastic.co/guide/en/kibana/7.9/apm-how-to.html
 * Adding Alerts: https://www.elastic.co/guide/en/kibana/7.9/apm-alerts.html
 *
 * @param {object} dependencies  dependencies injected
 * @param {object} dependencies.logger logger
 * @param {object} dependencies.envConfig envConfig
 * @returns {{ connect: Function }} APM Module
 */
module.exports = ({ logger, envConfig }) => ({
  /**
   *
   */
  connect: async () => {
    try {
      if (envConfig.APM_HOST && envConfig.APM_TOKEN) {
        logger.info('Loading APM module...')
        await apm.start({
          secretToken: envConfig.APM_TOKEN,
          serverUrl: envConfig.APM_HOST,
          environment: envConfig.ENV,
        })
        logger.info('APM loaded')
      } else {
        logger.warn('missing environment variables, APM will not be loaded')
      }
    } catch (error) {
      logger.error('Failed to load APM', { error })
    }
  },
})
