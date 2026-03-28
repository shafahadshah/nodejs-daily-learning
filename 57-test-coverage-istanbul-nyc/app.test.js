const { expect } = require('chai');
const { calculate } = require('./app');

describe('App Calculate', () => {
  it('should add numbers', () => {
    expect(calculate(2, 3, 'add')).to.equal(5);
  });

  it('should subtract numbers', () => {
    expect(calculate(5, 3, 'sub')).to.equal(2);
  });
});