const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe("#eqArrays", () => {
  it("Assertion passes if the arrays are equal", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });
  it("Assertion fails if the arrays are not equal", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 4]));
  });
});