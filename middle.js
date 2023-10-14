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

const middle = function(unMiddledArr) {
  let middledArr = [];
  if (unMiddledArr.length !== 1 && unMiddledArr.length !== 2) {
    if (unMiddledArr.length % 2 === 0) {
      middledArr.push(unMiddledArr[parseInt(unMiddledArr.length / 2) - 1]);
    }
    middledArr.push(unMiddledArr[parseInt(unMiddledArr.length / 2)]);
  }
  return middledArr;
};