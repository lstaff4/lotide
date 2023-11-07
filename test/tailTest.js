const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');

describe("#tail", () => {
  it("returns the tail of the array (the array without the head)", () => {
    assert.strictEqual(assertArraysEqual(tail([1, 2, 3]), [2, 3]));
  });
  it("returns an empty array if there is only the head", () => {
    assert.strictEqual(assertArraysEqual(tail(['5']), [])); 
  });
});