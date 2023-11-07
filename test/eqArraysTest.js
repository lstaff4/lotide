const assertEquals = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEquals(eqArrays([1, 2, 3], [1, 2, 3]), true); 
assertEquals(eqArrays([1, 4, 3], [1, 2, 3]), false); 
assertEquals(eqArrays([1], [1, 2, 3]), false); 
