const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("Assertion passes when two integers are equal", () => {
    assert.strictEqual(assertEqual(70, 70), undefined);
  });
  it("Assertion fails when two integers are not equal", () => {
    assert.strictEqual(assertEqual(70.1, 70), undefined);
  });
  it('Assertion passes when two strings are equal', () => {
    assert.strictEqual(assertEqual('kevin', 'kevin'), undefined);
  });
  it('Assertion fails when two strings are not equal', () => {
    assert.strictEqual(assertEqual('kevin', 'not kevin'), undefined);
  });
  it('Assertion fails when a string and an integer are compared', () => {
    assert.strictEqual(assertEqual(1, '1'), undefined);
  });
});