/**
 * Array_of:This create array from every arguments passed into it.
 */

//OOTB Javascript
console.log("OOTB Javascript----->");
console.log(Array.of(1, 2, 3, 4, 5, 6));

//Custom Implementation
console.log("Custom Implementation----->");
Array.myOf = function (...args) {
  return args;
};
console.log(Array.myOf(1, 2, 3, 4, 5, 6));
