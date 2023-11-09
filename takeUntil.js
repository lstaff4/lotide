const takeUntil = function(array, callback) {
  let resultArr = [];
  for (element of array) {
    if (callback(element) === true) {
      break;
    }
    else {resultArr.push(element)}
  }
  return resultArr;
};

module.exports = takeUntil;