const eqArrays = function(arr1, arr2) {
  console.log(arr1, arr2);
  if (arr1.length !== arr2.length) {
    console.log('The lengths are not equal!');
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    console.log('Is ' + arr1[i] + ' equal to ' + arr2[i] + '?');
    if (arr1[i] !== arr2[i]) {
      console.log('We found a false!');
      return false;
    }
  }
  console.log('No issues, all are true!')
  return true;
};

module.exports = eqArrays;