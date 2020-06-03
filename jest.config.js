module.exports = {
  preset: 'jest-puppeteer',
  setupFilesAfterEnv: ['./jest.setup.js'],
  transformIgnorePatterns: ['/node_modules/'],
  testPathIgnorePatterns: ['/node_modules/'],
}
