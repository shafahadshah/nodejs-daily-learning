const { toUpper, reverse } = require('./string');

test('convert to uppercase', () => {
  expect(toUpper('hello')).toBe('HELLO');
});

test('reverse string', () => {
  expect(reverse('abc')).toBe('cba');
});