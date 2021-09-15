const initEnvConfig = require('../envConfig')

describe('EnvConfig', () => {
  let envConfig
  beforeEach(async () => {
    envConfig = initEnvConfig()
  })

  it('should not throw an error', () => {
    expect(envConfig).toBeDefined()
  })
})
