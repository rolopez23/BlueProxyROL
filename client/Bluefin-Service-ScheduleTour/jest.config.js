module.exports = {
  clearMocks: true,
  testEnvironment: 'enzyme',
  testRegex: '((\\.|/*.)(spec))\\.js?$',
  setupFilesAfterEnv: [
    'jest-enzyme',
  ],
};
