[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![eslint](https://github.com/ts-templates/node18/actions/workflows/eslint.yml/badge.svg)](https://github.com/ts-templates/node18/actions/workflows/eslint.yml)
[![test](https://github.com/ts-templates/node18/actions/workflows/test.yml/badge.svg)](https://github.com/ts-templates/node18/actions/workflows/test.yml)

# @ts-templates/node18

Template for TypeScript project using Node.js v18

## Features

- [ESLint](https://eslint.org/) with [JavaScript Standard Style](https://standardjs.com/)
  - Run on Pull request by GitHub Actions
- Test by [Jest](https://jestjs.io/)
  - Run on Pull request by GitHub Actions
- Manage Node.js version by [nvm](https://github.com/nvm-sh/nvm)
- Manage dependency updates by [Renovate](https://renovatebot.com/)

## Usage

1. [Create repository](https://github.com/ts-templates/node18/generate) using template
2. Replace provisional string with actual string
    - `https://github.com/ts-templates/node18` => your repository URL
    - `@ts-templates/node18` => your package name
    - `Template for TypeScript project using Node.js v18` => your package description
3. Implement `src/main.ts`

## Scripts

```sh
# Compile TypeScript files to JavaScript files
npm run build

# Remove built files
npm run clean

# Run linters
npm run lint

# Run main.ts
npm start

# Run tests
npm test
```
