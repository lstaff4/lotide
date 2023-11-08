const findKeyByValue = function(keyList, value) {
  for (let key in keyList) { 
    if (keyList[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
