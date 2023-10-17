const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let result = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      continue;
    }
    if (result[string[i]] === undefined){
      result[string[i]] = 0;
    }
    result[string[i]] += 1;
  }
  return result;
};
