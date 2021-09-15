const elasticApmNode = require('elastic-apm-node')
const initApm = require('../apm')
jest.mock('elastic-apm-node')

/**
 *
 */
const setupMocks = () => ({
  envConfig: {
    APM_HOST: 'some host',
    APM_TOKEN: 'some token',
  },
  logger: {
    info: jest.fn(),
    warn: jest.fn(),
    error: jest.fn(),
  },
})
describe('apm', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  describe('connect()', () => {
    describe('when connecting works', () => {
      let apm, mocks, error
      beforeEach(async () => {
        error = null
        mocks = setupMocks()
        apm = initApm(mocks)

        try {
          await apm.connect()
        } catch (e) {
          error = e
        }
      })

      it('should log', () => {
        expect(mocks.logger.info).toHaveBeenCalledWith('Loading APM module...')
        expect(mocks.logger.error).not.toHaveBeenCalled()
      })

      it('should call apm.start()', () => {
        expect(elasticApmNode.start).toHaveBeenCalledWith({
          secretToken: mocks.envConfig.APM_TOKEN,
          serverUrl: mocks.envConfig.APM_HOST,
        })
      })

      it('should not throw an error', () => {
        expect(error).toBeNull()
      })
    })

    describe('when connecting fails', () => {
      let apm, mocks, error
      beforeEach(async () => {
        error = null
        elasticApmNode.start.mockRejectedValue(new Error('failed to connect'))
        mocks = setupMocks()
        apm = initApm(mocks)

        try {
          await apm.connect()
        } catch (e) {
          error = e
        }
      })

      it('should call apm.start()', () => {
        expect(elasticApmNode.start).toHaveBeenCalledWith({
          secretToken: mocks.envConfig.APM_TOKEN,
          serverUrl: mocks.envConfig.APM_HOST,
        })
      })

      it('should not throw an error', () => {
        expect(error).toBeNull()
      })

      it('should log', () => {
        expect(mocks.logger.info).toHaveBeenCalledWith('Loading APM module...')
        expect(mocks.logger.error).toHaveBeenCalledWith('Failed to load APM', { error: expect.any(Error) })
      })
    })

    describe('when environment variables are not provided', () => {
      let apm, mocks, error
      beforeEach(async () => {
        error = null
        mocks = setupMocks()
        mocks.envConfig = {}
        apm = initApm(mocks)

        try {
          await apm.connect()
        } catch (e) {
          error = e
        }
      })

      it('should call apm.start()', () => {
        expect(elasticApmNode.start).not.toHaveBeenCalled()
      })

      it('should not throw an error', () => {
        expect(error).toBeNull()
      })

      it('should log', () => {
        expect(mocks.logger.warn).toHaveBeenCalledWith('missing environment variables, APM will not be loaded')
      })
    })
  })
})
