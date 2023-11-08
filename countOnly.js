
const countOnly = function(allItems, itemsToCount) {
  let results = {}
  for (let item in itemsToCount) {
    if (itemsToCount[item] === false) {
      continue;
    }
    for (let i = 0; i < allItems.length; i++) {
      if (allItems[i] === item) {
        if (results[item] === undefined) {
          results[item] = 0;
        }
        results[item] += 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;
