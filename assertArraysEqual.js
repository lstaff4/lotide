const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2, boolean) {
  assertEqual(eqArrays(array1, array2), boolean);
};

module.exports = assertArraysEqual;

