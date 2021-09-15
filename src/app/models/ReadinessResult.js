
/**
 * @class ReadinessResult
 * @typedef {object} ReadinessResult
 * @property {string} healthy readiness result status
 * @property {number} dbResponseTime database response time
 * @property {string} dbStatus database connection status
 */
class ReadinessResult {
  /**
   * @param {ReadinessResult} source object from which to instantiate ReadinessResult
   */
  constructor({ healthy, dbResponseTime, dbStatus }) {
    this.healthy = healthy
    this.dbResponseTime = dbResponseTime
    this.dbStatus = dbStatus
  }

  /**
   * @returns {ReadinessResult} clone
   */
  clone() {
    return new ReadinessResult(JSON.parse(JSON.stringify(this)))
  }
}

module.exports = ReadinessResult
