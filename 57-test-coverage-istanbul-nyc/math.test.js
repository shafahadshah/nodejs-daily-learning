const { expect } = require('chai');
const { add, subtract } = require('./math');

describe('Math Functions', () => {
  it('adds correctly', () => {
    expect(add(1, 2)).to.equal(3);
  });

  it('subtracts correctly', () => {
    expect(subtract(5, 2)).to.equal(3);
  });
});