const randomBoolean = require('./index.js');

test('randomBoolean return type to be boolean', () => {
  expect(typeof randomBoolean()).toBe('boolean');
});