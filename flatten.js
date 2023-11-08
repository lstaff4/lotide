const flatten = function(nestedArray) {
  let flatArray = [];
  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray(nestedArray[i]) === true) {
      for (let j = 0; j < nestedArray[i].length; j++) {
        flatArray.push(nestedArray[i][j]);
      }
    }
    else {
      flatArray.push(nestedArray[i])
    }
    j = 0;
  }
  return flatArray;
};

module.exports = flatten;

// console.log(flatten([1, 2, [3, 4], 5, [6]]));