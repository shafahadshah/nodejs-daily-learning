const { expect } = require('chai');
const { isNumber } = require('./utils');

describe('Utils', () => {
  it('detects number', () => {
    expect(isNumber(5)).to.be.true;
  });

  it('rejects non number', () => {
    expect(isNumber('5')).to.be.false;
  });
});