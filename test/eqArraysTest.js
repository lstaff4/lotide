const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns true if the arrays are equal", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false if the arrays are of different lengths", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2]), false);
  });
  it("returns false if the arrays have different values", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 2]), false);
  });
});
