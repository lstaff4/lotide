const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

describe("#middle", () => {
  it("returns an array of the two middle integers when given an even array", () => {
    assert.strictEqual(assertArraysEqual(middle([3, 2, 4, 1]), [2, 4]));
  });
  it("returns an array of the middle integer when given an odd array", () => {
    assert.strictEqual(assertArraysEqual(middle([3, 2, 1]), [2]));
  });
  it("returns an array of the two middle strings when given an even array", () => {
    assert.strictEqual(assertArraysEqual(middle(["Fee", "Fi", "Fo", "Fum"]), ["Fi", "Fo"]));
  });
  it("returns an array of the middle string when given an odd array", () => {
    assert.strictEqual(assertArraysEqual(middle(["Me", "Myself", "I"]), ["Myself"]));
  });
  it("returns an array of the middle string when given an odd mixed array", () => {
    assert.strictEqual(assertArraysEqual(middle([20, "Myself", 1]), ["Myself"]));
  });
  it("returns an empty array if the array has less than 2 items", () => {
    assert.strictEqual(assertArraysEqual(middle(["Me", "Myself"]), []));
  });
  it("returns an empty array if the submitted array is empty", () => {
    assert.strictEqual(assertArraysEqual(middle([]), []));
  });
});


