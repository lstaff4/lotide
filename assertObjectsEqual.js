const eqObjects = require('./eqObjects');


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  let areTheyEqual = eqObjects(actual, expected);
  if (areTheyEqual === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;
