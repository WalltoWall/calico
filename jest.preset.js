const tsJest = require('ts-jest/jest-preset')
const jestPuppeteer = require('jest-puppeteer/jest-preset')

module.exports = Object.assign(tsJest, jestPuppeteer)
