const randomBoolean = require('./index.js');

test('bool', () => {
  expect(randomBoolean() === true || randomBoolean() === false).toBeTruthy();
});