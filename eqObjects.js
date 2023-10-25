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
      // if (Array.isArray(object1[key1])) {
      //   // console.log(object1[key1])
      //   objectList[key1] = [];
      //   // console.log(objectList)
      //     for (let i = 0; i < objectList[key1].length; i++) {
      //       // console.log(objectList[key1][i]);
      //       // console.log(object1[key1][i]);
      //       if (objectList[key1][i] === undefined) {
      //         objectList[key1].push(object1[key1][i] = false);
      //         // console.log(objectList);
      //       }
      //     }
      // }
      // else 
      objectList[key1] = false;
    }
    for (let key2 in object2) {
      if (objectList[key2] === undefined) {
        // if (Array.isArray(object2[key2])) {
        //   objectList[key2] = [];
        //   for (let j = 0; j < objectList[key2].length; j++) {
        //     if (objectList[key2][i] === undefined) {
        //       objectList[key2].push(object2[key2][i] = false);
        //     }
        //   }
        // }  
        // else
         objectList[key2] = false;
      }
      if (Array.isArray(object1[key1])) {
        if (Array.isArray(object2[key2]) === false) {
          continue;
        }
        if (eqArrays(object1[key1], object2[key2])) {
        // for (let k = 0; k < object1[key1].length; k++) {
        //   for (let l = 0; l < object2[key2].length; l++) {
        //     if (object1[key1][k] === object2[key2][l]) {
              objectList[key1] === true;

        //     }
        //   }
        }
        }
      else if (object1[key1] === object2[key2]) {
        objectList[key1] = true;
      }
    }
  }
  for (let boolean of Object.keys(objectList)) {
    // if (Array.isArray(objectList[boolean])) {
    //   for (m = 0; m < objectList[boolean].length; m++) {
    //     if (objectList[boolean][m] === false) {
    //       result = false;
    //     }
    //   }
    // } 
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
// assertEquals(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false