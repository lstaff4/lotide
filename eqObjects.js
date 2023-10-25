const assertEquals = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let objectList = {};
  // this is what we use to sort through every key we get
  let result = true; 
  // this is what we return. If the objects match it'll stay that way.
  for (let key1 in object1) {
    // for loop to sort through the keys in object1.
    if (objectList[key1] === undefined) {
      // this if statement is here to add the keys to objectList if it doesn't exist yet, so that we don't turn up any more undefineds.
      if (Array.isArray(object1[key1])) {
        // this if statements is for checking if the object is an array, which changes the process somewhat.
        objectList[key1] = [];
        // makes an array out of key1 instead of just making it's value false. 
          for (let i = 0; i < objectList[key1].length; i++) {
            //for loop to sort through each of the items within object1's array to add into 
            if (objectList[key1][i] === undefined) {
              // makes sure the object's value is undefined before proceeding.
              objectList[key1].push(object1[key1][i] = false);
              // finally push the object1 key's object into objectList's key array. Phew!
            }
          }
      }
      else objectList[key1] = false;
      // if there's no array then it just makes the key value false and moves on.
    }
    for (let key2 in object2) {
      // for loop for object2.
      if (objectList[key2] === undefined) {
        // second verse same as the first. we need to check both in case one has keys the other doesn't.
        if (Array.isArray(object2[key2])) {
          // check for arrays
          objectList[key2] = [];
          for (let j = 0; j < objectList[key2].length; j++) {
            //for loop to sort through each of the items within object2's array to add into 
            if (objectList[key2][i] === undefined) {
              // makes sure the object's value is undefined before proceeding.
              objectList[key2].push(object2[key2][i] = false);
              // finally push the object1 key's object.
            }
          }
        }  
        else objectList[key2] = false;
        // once again, the alternative is much simpler.
      }
      // now that we have our values, we need to find out if they match.
      // if they do, we will change each of their values to 'true' instead of false.
      if (Array.isArray(object1[key1]) === true) {
        // first step, we need to check if the key is an array again.
        if (Array.isArray(object2[key2]) === false) {
          // we should also check if the other object is an array before proceeding. if it isn't, there's no point in sticking with this loop, as it's obviously not equal.
          continue;
        }
        for (let k = 0; k < object1[key1].length; k++) {
          for (let l = 0; l < object2[key2].legnth; l++) {
            // two for loops to go through the arrays again, this time to find equals.
            if (object1[key1][k] === object2[key2][l]) {
              // if these two match up, we change the key's value to true.
              objectList[key1][k] === true;
            }
          }
        }
        }
      else if (object1[key1] === object2[key2]) {
        // if it isn't an array, we simply compare the two values.
        objectList[key1] = true;
      }
    }
  }
  console.log(objectList);
  for (let boolean of Object.keys(objectList)) {
    // a for... of loop to circle through all the objects.
    if (Array.isArray(objectList[boolean])) {
      // another array check.
      for (m = 0; m < objectList[boolean].length; m++) {
        // and another for loop in case it is!
        if (objectList[boolean][m] === false) {
          // and if it comes up false, then we change result's value to false.
          result = false;
        }
      }
    } 
    if (objectList[boolean] === false) {
      // if any value is false, then the result is false.
      result = false;
    }
  } 
  // and we have our result! let's return it. 
  return result;
};

const multiColorShirtObject = { colors: ["red", "blue", "yellow", "orange"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue", "orange", "yellow"] };
assertEquals(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEquals(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false