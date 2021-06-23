/*
 * Includes: This method check if array includes the item passed in the method.
 */

//OOTB javascript
console.log("OOTB Javascript ------->");
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.includes(2)); //true
console.log(arr.includes(7)); //false

//Custom Implementation
console.log("Custom Implementation ------->");
Array.prototype.myIncludes = function (data) {
  for (let ele of this) if (data === ele) return true;
  return false;
};
const myArr = [1, 2, 3, 4, 5, 6];
console.log(myArr.myIncludes(2));
console.log(myArr.myIncludes(7));
