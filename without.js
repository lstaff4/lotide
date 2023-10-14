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

const without = function(source, itemsToRemove) {
  let removedItemArray = []
  for (let k = 0; k < source.length; k++) {
    removedItemArray.push(source[k]);
  }
  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let j = 0; j < source.length; j++) {
      if (removedItemArray[j] === itemsToRemove[i]) {
        removedItemArray.splice(j, 1);
      }
    }
  };
  return removedItemArray;
};



// console.log(without([1, 2, 3], [3, 2]));

// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// console.log(words);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);