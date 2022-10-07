// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  extends: [
    '@eslint-recommended/eslint-config-typescript',
    'plugin:jest/recommended'
  ],
  parserOptions: {
    project: './tsconfig.json'
  }
}
