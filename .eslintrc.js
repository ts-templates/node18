// @ts-check

// eslint-disable-next-line jsdoc/valid-types -- https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html
/** @typedef {import('eslint').ESLint.ConfigData} ConfigData */

/**
 * @type {ConfigData}
 * @see https://eslint.org/docs/latest/use/configure/configuration-files
 */
const config = {
  extends: [
    '@eslint-recommended/eslint-config-typescript',
    'plugin:jest/recommended'
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  overrides: [
    // https://typescript-eslint.io/troubleshooting/#i-get-errors-telling-me-eslint-was-configured-to-run--however-that-tsconfig-does-not--none-of-those-tsconfigs-include-this-file
    {
      files: ['./**/*.js'],
      extends: ['plugin:@typescript-eslint/disable-type-checked']
    }
  ]
}

// eslint-disable-next-line unicorn/prefer-module
module.exports = config
