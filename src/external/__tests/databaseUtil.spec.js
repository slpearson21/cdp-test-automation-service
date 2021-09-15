const initDatabaseUtil = require('../databaseUtil')

/**
 * Creates mock dependencies
 *
 * @returns {object} dependencies
 */
const setupDeps = () => ({
  logger: {
    info: jest.fn(),
  },
})

describe('databaseUtil', () => {
  let databaseUtil
  let dependencies

  beforeEach(() => {
    dependencies = setupDeps()
    databaseUtil = initDatabaseUtil(dependencies)
  })
  describe('ping()', () => {
    let result
    beforeEach(async () => {
      result = await databaseUtil.ping()
    })
    it('should return work', () => {
      expect(result).toBeUndefined()
    })
  })

  describe('migrate()', () => {
    beforeEach(async () => {
      await databaseUtil.migrate()
    })
    it('should called logger.info()', () => {
      expect(dependencies.logger.info).toHaveBeenCalled()
    })
  })

  describe('close()', () => {
    beforeEach(async () => {
      await databaseUtil.close()
    })
    it('should called logger.info()', () => {
      expect(dependencies.logger.info).toHaveBeenCalled()
    })
  })
})
