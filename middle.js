const middle = function(unMiddledArr) {
  let middledArr = [];
  if (unMiddledArr.length !== 1 && unMiddledArr.length !== 2) {
    if (unMiddledArr.length % 2 === 0) {
      middledArr.push(unMiddledArr[parseInt(unMiddledArr.length / 2) - 1]);
    }
    middledArr.push(unMiddledArr[parseInt(unMiddledArr.length / 2)]);
  }
  return middledArr;
};

module.exports = middle;