const initShutdown = require('../shutdown')
/**
 * Creates mock dependencies
 *
 * @returns {object} dependencies
 */
const setupDeps = () => ({
  databaseUtil: {
    close: jest.fn(),
  },
  logger: {
    info: jest.fn(),
  },
})
describe('shutdown', () => {
  let shutdown
  let dependencies
  beforeEach(async () => {
    dependencies = setupDeps()
    shutdown = initShutdown(dependencies)

    await shutdown()
  })

  it('should call databaseUtil.close', () => {
    expect(dependencies.databaseUtil.close).toHaveBeenCalled()
  })
})
