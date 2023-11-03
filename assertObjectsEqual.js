const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  console.log(arr1, arr2);
  if (arr1.length !== arr2.length) {
    console.log('The lengths are not equal!');
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    console.log('Is ' + arr1[i] + ' equal to ' + arr2[i] + '?');
    if (arr1[i] !== arr2[i]) {
      console.log('We found a false!');
      return false;
    }
  }
  console.log('No issues, all are true!')
  return true;
};
const eqObjects = function(object1, object2) {
  let objectList = {};
  let result = true;
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    result = false;
  } else {
    for (let key1 in object1) {
      if (objectList[key1] === undefined) {
        objectList[key1] = false;
      }
      for (let key2 in object2) {
        if (objectList[key2] === undefined) {
          objectList[key2] = false;
        }
        if (Array.isArray(object1[key1])) {
          if (Array.isArray(object2[key2]) === false) {
            continue;
          }
          if (eqArrays(object1[key1], object2[key2])) {
            objectList[key1] = true;
          }
        } else if (object1[key1] === object2[key2]) {
          objectList[key1] = true;
        }
      }
    }
    for (let boolean of Object.keys(objectList)) {
      if (objectList[boolean] === false) {
        console.log(boolean + ' is false!')
        result = false;
      }
    }
  }
  return result;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  let areTheyEqual = eqObjects(actual, expected);
  if (areTheyEqual === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const multiColorShirtObject = { colors: ["red", "blue", "yellow"], size: "medium" };
const anotherMultiColorShirtObject = { colors: ["red", "blue", "yellow"],  size: "small" };

console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject))
console.log(assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject));

