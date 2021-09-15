const initStartup = require('../startup')
/**
 * Creates mock dependencies
 *
 * @returns {object} dependencies
 */
const setupDeps = () => ({
  databaseUtil: {
    migrate: jest.fn(),
  },
  logger: {
    info: jest.fn(),
  },
  apm: {
    connect: jest.fn(),
  },
})
describe('startup', () => {
  let startup
  let dependencies
  beforeEach(async () => {
    dependencies = setupDeps()
    startup = initStartup(dependencies)

    await startup()
  })

  it('should call databaseUtil.migrate()', () => {
    expect(dependencies.databaseUtil.migrate).toHaveBeenCalled()
  })

  it('should call apm.connect()', () => {
    expect(dependencies.apm.connect).toHaveBeenCalled()
  })
})
