const assert = require('chai').assert;

const findFirstMissingNaturalNumber = require('../src/app');

describe('src/app.js', () => {
  describe('#findFirstMissingNaturalNumber()', () => {
    it('Must return undefined result. Function call without missing natural number.', () => {
      const number = findFirstMissingNaturalNumber([0, 1, 2, 3, 4, 5]);

      assert.isUndefined(number);
    });

    it('Must return find first missing natural number. Function call with missing natural number.', () => {
      const number = findFirstMissingNaturalNumber([4, -1, 2, 1, 5]);
      const expectedNumber = 3;

      assert.isNumber(number);
      assert.equal(number, expectedNumber);
    });
  });
});
