const { add, subtract } = require('./math');

function calculate(a, b, op) {
  if (op === 'add') return add(a, b);
  if (op === 'sub') return subtract(a, b);
  return null;
}

module.exports = { calculate };