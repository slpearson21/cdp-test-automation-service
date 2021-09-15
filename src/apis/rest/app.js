const express = require('express')
const { middleware: loggerMiddleware } = require('@chghealthcare/chg-logger-library')
const swaggerUi = require('swagger-ui-express')
const helmet = require('helmet')
const swaggerDocs = require('./swagger-docs')
const DIContainer = require('../../main')
const container = DIContainer()

const app = express()
app.use(helmet())

app.use((req, _res, next) => {
  req.scope = container.createScope()
  return next()
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(loggerMiddleware((req) => ({})))

app.use('/', require('./routes/index'))
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

/**
 * Determines the status code for the response for an error
 *
 * @param {Error} error error
 * @returns {number} status code for error
 */
const determineStatusCodeFromError = (error) => error.status || 500

app.use((error, req, res, next) => {
  res.status(determineStatusCodeFromError(error)).json({
    error: error.message,
    status: determineStatusCodeFromError(error),
  })
})

module.exports = app
