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