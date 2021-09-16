module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  plugins: [
    'jsdoc',
  ],
  extends: [
    'standard',
    'plugin:jsdoc/recommended',
  ],
  globals: {},
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    semi: 'error',
    complexity: [
      'error',
      {
        max: 7,
      },
    ],
    'jsdoc/require-jsdoc': [
      2,
      {
        require: {
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          ClassExpression: true,
          FunctionDeclaration: true,
          FunctionExpression: true,
          MethodDefinition: true,
        },
      },
    ],
    'jsdoc/check-tag-names': [
      1,
      {
        definedTags: [
          'swagger',
        ],
      },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      },
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
  },
}
