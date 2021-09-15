const initGetReadiness = require('../getReadiness')

describe('getReadiness', () => {
  let getReadiness, mockLogger, mockDatabaseUtil

  beforeEach(() => {
    mockLogger = {
      trace: jest.fn(),
    }

    mockDatabaseUtil = {
      ping: jest.fn(),
    }
    getReadiness = initGetReadiness({
      logger: mockLogger,
      databaseUtil: mockDatabaseUtil,
    })
  })

  describe('when called with no params', () => {
    let result
    beforeEach(async () => {
      result = await getReadiness()
    })

    it('should call databaseUtil.ping', () => {
      expect(mockDatabaseUtil.ping).toHaveBeenCalledTimes(1)
    })

    it('should log', () => {
      expect(mockLogger.trace).toHaveBeenCalledTimes(2)
    })

    it('should return success result object', () => {
      expect(result).toEqual(expect.objectContaining({
        healthy: true,
        dbResponseTime: expect.any(Number),
        dbStatus: 'healthy',
      }))
    })
  })

  describe('when called with forceFailure', () => {
    let result, thrownError
    beforeEach(async () => {
      try {
        result = await getReadiness({ forceFailure: true })
      } catch (error) {
        thrownError = error
      }
    })

    it('should throw expected error', () => {
      expect(thrownError.message).toEqual('Forced failure health check')
    })

    it('should call databaseUtil.ping', () => {
      expect(mockDatabaseUtil.ping).not.toHaveBeenCalled()
    })

    it('should log', () => {
      expect(mockLogger.trace).toHaveBeenCalledTimes(1)
    })

    it('should return success result object', () => {
      expect(result).toBeUndefined()
    })
  })
})
