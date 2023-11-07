const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([3, 2, 4, 1]), [2, 4]);
assertArraysEqual(middle([3, 2, 1]), [2]);
assertArraysEqual(middle([1]), []);



