const initGetLiveness = require('../getLiveness')

describe('getLiveness', () => {
  let getLiveness, mockLogger

  beforeEach(() => {
    mockLogger = {
      trace: jest.fn(),
    }

    getLiveness = initGetLiveness({
      logger: mockLogger,
    })
  })

  describe('when called with no params', () => {
    let result
    beforeEach(async () => {
      result = await getLiveness()
    })

    it('should log', () => {
      expect(mockLogger.trace).toHaveBeenCalledTimes(2)
    })

    it('should return success result object', () => {
      expect(result).toEqual(expect.objectContaining({
        status: 'OK',
      }))
    })
  })

  describe('when called with forceFailure', () => {
    let result, thrownError
    beforeEach(async () => {
      try {
        result = await getLiveness({ forceFailure: true })
      } catch (error) {
        thrownError = error
      }
    })

    it('should throw expected error', () => {
      expect(thrownError.message).toEqual('Forced failure health check')
    })

    it('should log', () => {
      expect(mockLogger.trace).toHaveBeenCalledTimes(1)
    })

    it('should return success result object', () => {
      expect(result).toBeUndefined()
    })
  })
})
