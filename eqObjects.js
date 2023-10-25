const assertEquals = function(actual, expected) {
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
  };
  for (let i = 0; i < arrsLength; i++) {
    if (arr1[i] !== arr2[i]) {
      eqArrResult = false;
    }
  };
  return eqArrResult
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  
  let objectList = {};
  let result = true; 
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
              objectList[key1] === true;
        }
        }
      else if (object1[key1] === object2[key2]) {
        objectList[key1] = true;
      }
    }
  }
  for (let boolean of Object.keys(objectList)) {
    if (objectList[boolean] === false) {
      result = false;
    }
  } 
  return result;
};

const multiColorShirtObject = { colors: ["red", "blue", "yellow", "orange"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue", "yellow"] };
assertEquals(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), false); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEquals(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false