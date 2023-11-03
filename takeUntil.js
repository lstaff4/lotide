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

// ------------

const takeUntil = function(array, callback) {
  let resultArr = [];
  for (element of array) {
    if (callback(element) === true) {
      break;
    }
    else {resultArr.push(element)}
  }
  return resultArr;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);