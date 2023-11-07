const tail = function(array) {
  let resultArr = [];
  for (let i = 1; i < array.length; i++) {
    resultArr.push(array[i]);
  }
  return resultArr;
};

module.exports = tail;

