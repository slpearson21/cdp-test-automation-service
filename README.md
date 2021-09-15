# Express Service Template
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=chghealthcare_cdp-test-automation-service&metric=alert_status&token=fe47929da889ba3cc810cc1680b6dc963ba00da9)](https://sonarcloud.io/dashboard?id=chghealthcare_cdp-test-automation-service)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=chghealthcare_cdp-test-automation-service&metric=coverage&token=fe47929da889ba3cc810cc1680b6dc963ba00da9)](https://sonarcloud.io/dashboard?id=chghealthcare_cdp-test-automation-service)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=chghealthcare_cdp-test-automation-service&metric=security_rating&token=fe47929da889ba3cc810cc1680b6dc963ba00da9)](https://sonarcloud.io/dashboard?id=chghealthcare_cdp-test-automation-service)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=chghealthcare_cdp-test-automation-service&metric=sqale_rating&token=fe47929da889ba3cc810cc1680b6dc963ba00da9)](https://sonarcloud.io/dashboard?id=chghealthcare_cdp-test-automation-service)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=chghealthcare_cdp-test-automation-service&metric=security_rating&token=fe47929da889ba3cc810cc1680b6dc963ba00da9)](https://sonarcloud.io/dashboard?id=chghealthcare_cdp-test-automation-service)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=chghealthcare_cdp-test-automation-service&metric=vulnerabilities&token=fe47929da889ba3cc810cc1680b6dc963ba00da9)](https://sonarcloud.io/dashboard?id=chghealthcare_cdp-test-automation-service)

For a more detailed explanation of the project structure, look [here](src/README.md)

## Dependencies

- `node 14.x`
- `npm 6.14.x`

## Development

### Starting the Service

This project uses [`dotenv`](https://www.npmjs.com/package/dotenv) to import environment variables from a file. For running the service, make sure the `.env` file has been created. You can copy the `./example.env` to start.

Then you can run:

```sh

# Start service
npm start

# or in watch mode
npm run dev

```

### Unit Tests

```sh
npm run test

## run unit tests in watch mode
npm run test:watch
```

There is a coverage requirement of 90% (statements, branches, functions, and lines).

### API Tests

This project uses [`dotenv`](https://www.npmjs.com/package/dotenv) to import environment variables from a file. For running the api tests locally, make sure the `test.env` file has been created. You can copy the `./example-test.env` to start.

To run api tests:

```sh

# Start the development server locally in another terminal
npm run dev

npm run test:api

```

## Contributing

1. Create your feature branch (git checkout -b feature/fooBar)
2. Commit your changes (git commit -am 'Add some fooBar')
3. Push to the branch (git push origin feature/fooBar)
4. Quality gates are run in github workflow
5. Create a new Pull Request
