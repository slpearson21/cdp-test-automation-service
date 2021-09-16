const initGetEnv = require('../getEnv')

describe('getEnv', () => {
  let getEnv, mockLogger

  beforeEach(() => {
    mockLogger = {
      info: jest.fn(),
    }

    getEnv = initGetEnv({
      logger: mockLogger,
    });
  })

  describe('when called with no environment variables set', () => {
    let result
    beforeEach(async () => {
      result = await getEnv()
    })

    it('should log', () => {
      expect(mockLogger.info).toHaveBeenCalledTimes(1)
    })

    it('should return success result object', () => {
      expect(result).toEqual(expect.objectContaining({
      }))
    })
  })

  describe('when called with environment variables set', () => {
    let result
    beforeEach(async () => {
      process.env.ENV_VAR1 = 'foo'
      process.env.SECRET_VAR1 = 'bar'
      result = await getEnv()
    })

    it('should log', () => {
      expect(mockLogger.info).toHaveBeenCalledTimes(1)
    })

    it('should return success result object', () => {
      expect(result).toEqual(expect.objectContaining({
        ENV_VAR1: 'foo',
        SECRET_VAR1: 'bar',
      }))
    })
  })
})
