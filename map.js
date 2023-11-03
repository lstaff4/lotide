const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  let eqArrResult = true;
  let arrsLength = 0;
  if (arr1.length > arr2.length) {
    arrsLength = arr1.length;
  } else {
    arrsLength = arr2.length;
  }
  for (let i = 0; i < arrsLength; i++) {
    if (arr1[i] !== arr2[i]) {
      eqArrResult = false;
    }
  }
  return eqArrResult;
};

const assertArraysEqual = function(array1, array2) {
  assertEqual(eqArrays(array1, array2), true);
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);