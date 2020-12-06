module.exports = {
  setupFilesAfterEnv: [
    'given2/setup',
    'jest-plugin-context/setup',
    './jest.setup',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/global.js',
    '\\.(png|jpg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  coveragePathIgnorePatterns: [
    '<rootDir>/src/MusicControls',
    '<rootDir>/src/assets/images',
  ],
};
