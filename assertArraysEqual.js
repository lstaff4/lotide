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

const assertArrayEquals = function(array1, array2) {
  assertEqual(eqArrays(array1, array2), true);
};

console.log(assertArrayEquals([1, 3, 4], [1, 3 , 4]));