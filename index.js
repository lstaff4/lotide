// index.js
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertEqual = require('./assertEqual')
const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')
const assertObjectsEqual = require('./assertObjectsEqual')
const countLetters = require('./countLetters')
const countOnly = require('./countOnly')
const eqObjects = require('./eqObjects');
const letterPositions = require('./letterPositions')
const map = require('./map');
const findKey = require('./findKey')
const findKeyByValue = require('./findKeyByValue')
const flatten = require('./flatten')
const takeUntil = require('./takeUntil')
const without = require('./without')

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertEqual: assertEqual,
  eqArrays: eqArrays,
  assertArraysEqual: assertArraysEqual,
  assertObjectsEqual: assertObjectsEqual,
  countLetters: countLetters,
  countOnly: countOnly,
  eqObjects: eqObjects,
  letterPositions: letterPositions,
  map: map,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  takeUntil: takeUntil,
  without: without
};