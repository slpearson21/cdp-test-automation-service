const { createContainer, Lifetime } = require('awilix')

/**
 * Initializes container
 *
 * @returns {object} awilix container
 */
module.exports = () => {
  const container = createContainer()

  container.loadModules([
    './app/actions/*.js',
    './external/*.js',
  ], {
    resolverOptions: {
      lifetime: Lifetime.SINGLETON,
    },
    cwd: __dirname,
    formatName: 'camelCase',
  })

  return container
}
