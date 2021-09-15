module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/**/*.js',
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/coverage',
    '<rootDir>/.eslintrc.js', // lint config
    '<rootDir>/jest.*.config.js', // jest config
    '<rootDir>/src/main.js', // DI Config
    '<rootDir>/src/external/logger.js', // logger config
    '<rootDir>/src/apis/rest/app.js',
    '<rootDir>/src/apis/rest/swagger.docs.js',
    '<rootDir>/src/apis/rest/routes',
  ],
  coverageReporters: [
    'json',
    'text',
    'lcov',
    'clover',
  ],
  testEnvironment: 'node',
}
