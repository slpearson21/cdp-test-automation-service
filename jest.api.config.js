require('dotenv').config({ path: 'test.env' })

module.exports = {
  collectCoverage: false,
  automock: false,
  testEnvironment: 'node',
  testMatch: [
    '**/?(*.)+(api).[jt]s?(x)',
  ],
}
