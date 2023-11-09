const findKey = function (object, callback) {
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      if (callback(object[key])) {
        return key;
      }
    }
  }
};

module.exports = findKey;
