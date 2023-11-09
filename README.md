# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @lstaff4/lotide`

**Require it:**

`const _ = require('@lstaff4/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: A version of assertEqual made for arrays. Always expects the result to be true, and the Assertion will fail if they are not.
* `assertEqual(actual, expected)`: Compares what you expect a function to produce and the actual process and console logs whether or no they are equal. Does not work with arrays.
* `assertObjectsEqual(actual, expected)`: A version of assertEqual made for objects. Always expects the result to be true, and the Assertion will fail if they are not.
* `countLetters(string)`: Counts the number of times all letters appear within a string and returns an object with the complete list.
* `countOnly(allItems, itemsToCount)`: Counts the number of times an item appears within an array. Returns an array with all designated items counted.
* `eqArrays(arr1, arr2)`: Compares two arrays and determines if they are equal.
* `eqObjectst(object1, object2)`: Compares two objects and determines if they are equal.
* `findKey(object, callback)`: Returns the first key that fits within the callback's parameters.
* `findKeyByValue(keyList, value)`: Returns a key by searching through the keyList for its value.
* `flatten(nestedArray)`: Creates an array with all nested values of a prior array un-nested.
* `head(array)`: Returns the first item in an array.
* `letterPositions(sentence)`: Returns an array with the positions of each letter in a given string.
* `map(array, callback)`: A function that uses callbacks to return a new array with custom parameters based on the callback.
* `middle(array)`: Returns the middle item(s) of an array. Returns one item if the array is odd, and two if it is even.
* `tail(array)`: Returns an array without its first item.
* `takeUntil(array, callback)`: Pushes objects from an array into a new array until the callback's parameters are met. Returns the new array.
* `without(source, itemsToRemove)`: Creates an array without selected items from a prior array.