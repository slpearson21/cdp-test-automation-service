
module.exports = {
  /**
   * Emulates a database connection test
   *
   * @returns {Promise<undefined>}
   */
  ping: () => new Promise(resolve => {
    setTimeout(resolve, 12)
  }),
}
