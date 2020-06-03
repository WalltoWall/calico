module.exports = {
  preset: './jest.preset.js',
  setupFilesAfterEnv: ['./jest.setup.js'],
  transformIgnorePatterns: ['/node_modules/'],
  testPathIgnorePatterns: ['/node_modules/'],
}
