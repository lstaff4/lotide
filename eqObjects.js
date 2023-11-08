const eqArrays = require('./eqArrays')

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

module.exports = eqObjects;

// const multiColorShirtObject = { colors: ["red", "blue", "yellow", "orange"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue", "yellow"] };
// assertEquals(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), false); // => true

// const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// assertEquals(eqObjects(multiColorShirtObject , longSleeveMultiColorShirtObject), false); // => false