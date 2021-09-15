require('dotenv').config({ path: 'test.env' })

module.exports = {
  collectCoverage: false,
  automock: false,
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/src/apis/rest/routes/__tests/liveness.api.js',
    '<rootDir>/src/apis/rest/routes/__tests/readiness.api.js',
  ],
}
