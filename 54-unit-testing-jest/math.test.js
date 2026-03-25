const { multiply, divide } = require('./math');

test('multiply 2 * 3', () => {
  expect(multiply(2, 3)).toBe(6);
});

test('divide 6 / 2', () => {
  expect(divide(6, 2)).toBe(3);
});

test('divide by zero error', () => {
  expect(() => divide(4, 0)).toThrow('Cannot divide by zero');
});