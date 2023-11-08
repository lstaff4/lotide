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

module.exports = without;

// console.log(without([1, 2, 3], [3, 2]));

// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// console.log(words);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);