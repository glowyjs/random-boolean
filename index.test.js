const randomBoolean = require('./index.js');

test('bool', () => {
  expect(typeof randomBoolean()).toBe('boolean');
});